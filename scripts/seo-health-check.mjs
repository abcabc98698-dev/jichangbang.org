import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const publicDir = path.resolve(rootDir, 'public');

console.log('====================================================');
console.log('🛡️  RUNNING PRODUCTION SEO HEALTH CHECK');
console.log('   Target Domain: https://jichangbang.org');
console.log('====================================================\n');

const results = {
  Build: 'FAIL',
  Robots: 'FAIL',
  Noindex: 'FAIL',
  Canonical: 'FAIL',
  Sitemap: 'FAIL',
  'Internal Links': 'FAIL',
  'Core URLs': 'FAIL',
  Schema: 'FAIL',
  'Duplicate Titles': 'FAIL',
  'Page Count': 'FAIL'
};

const issues = [];

function reportIssue(file, url, reason, fix) {
  issues.push({ file, url, reason, fix });
}

// 1. Check Build
if (fs.existsSync(distDir) && fs.existsSync(path.join(distDir, 'index.html'))) {
  results.Build = 'PASS';
} else {
  reportIssue('dist/', '/', 'Build output directory or index.html missing', 'Run pnpm run build before running SEO health check');
}

// 2. Check Robots
const robotsPath = path.join(distDir, 'robots.txt');
if (fs.existsSync(robotsPath)) {
  const robotsText = fs.readFileSync(robotsPath, 'utf8');
  if (robotsText.includes('Disallow: /\n') || robotsText.includes('Disallow: /\r\n')) {
    reportIssue('dist/robots.txt', '/robots.txt', 'Robots.txt disallows entire site (Disallow: /)', 'Remove Disallow: / from robots.txt');
  } else if (!robotsText.includes('sitemap.xml') && !robotsText.includes('sitemap-index.xml')) {
    reportIssue('dist/robots.txt', '/robots.txt', 'Robots.txt missing Sitemap directive', 'Add Sitemap reference in robots.txt');
  } else {
    results.Robots = 'PASS';
  }
} else {
  reportIssue('dist/robots.txt', '/robots.txt', 'robots.txt is missing from build output', 'Ensure robots.txt is located in public/');
}

// Helper to crawl dist HTML
function getHtmlFiles(dir) {
  let list = [];
  if (!fs.existsSync(dir)) return list;
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      list = list.concat(getHtmlFiles(full));
    } else if (item.endsWith('.html')) {
      list.push(full);
    }
  }
  return list;
}

const htmlFiles = getHtmlFiles(distDir);
const formalPages = [];
const redirectPages = [];
let notFoundPage = null;

for (const f of htmlFiles) {
  const content = fs.readFileSync(f, 'utf8');
  const rel = path.relative(distDir, f).replace(/\\/g, '/');
  if (rel === '404.html') {
    notFoundPage = { file: f, content, rel };
  } else if (content.includes('http-equiv="refresh"')) {
    redirectPages.push({ file: f, content, rel });
  } else {
    formalPages.push({ file: f, content, rel });
  }
}

// 3. Check Noindex
let noindexPassed = true;
for (const p of formalPages) {
  if (p.content.includes('<meta name="robots" content="noindex"') ||
      p.content.includes('<meta name="googlebot" content="noindex"') ||
      p.content.includes('<meta name="bingbot" content="noindex"')) {
    reportIssue(p.rel, '/' + p.rel.replace(/index\.html$/, ''), 'Accidental noindex detected on formal SEO page', 'Remove noindex attribute from page metadata');
    noindexPassed = false;
  }
}
if (notFoundPage && !notFoundPage.content.includes('noindex')) {
  reportIssue('404.html', '/404', '404 page is missing noindex protection', 'Add robots="noindex, nofollow" to 404 page layout');
  noindexPassed = false;
}
if (noindexPassed) results.Noindex = 'PASS';

// 4. Check Canonical
let canonicalPassed = true;
for (const p of formalPages) {
  const match = p.content.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i);
  if (!match) {
    reportIssue(p.rel, '/' + p.rel.replace(/index\.html$/, ''), 'Missing canonical tag', 'Add canonical link in page <head>');
    canonicalPassed = false;
  } else {
    const href = match[1];
    if (!href.startsWith('https://jichangbang.org')) {
      reportIssue(p.rel, href, 'Canonical URL does not use primary domain https://jichangbang.org', 'Fix canonical domain in site config');
      canonicalPassed = false;
    }
  }
}
if (canonicalPassed) results.Canonical = 'PASS';

// 5. Check Sitemap
let sitemapPassed = true;
const sitemapIndexPath = path.join(distDir, 'sitemap-index.xml');
const sitemapXmlPath = path.join(distDir, 'sitemap.xml');
if (!fs.existsSync(sitemapIndexPath) || !fs.existsSync(sitemapXmlPath)) {
  reportIssue('dist/sitemap.xml', '/sitemap.xml', 'sitemap.xml or sitemap-index.xml missing', 'Run split-sitemaps.mjs during build');
  sitemapPassed = false;
} else {
  const indexContent = fs.readFileSync(sitemapIndexPath, 'utf8');
  const locs = indexContent.match(/<loc>(.*?)<\/loc>/g) || [];
  if (locs.length < 2) {
    reportIssue('sitemap-index.xml', '/sitemap-index.xml', 'Sitemap index contains fewer sub-sitemaps than expected', 'Verify sitemap generation');
    sitemapPassed = false;
  }
  const sitemap0Path = path.join(distDir, 'sitemap-0.xml');
  if (fs.existsSync(sitemap0Path)) {
    const raw = fs.readFileSync(sitemap0Path, 'utf8');
    if (raw.includes('localhost') || raw.includes('127.0.0.1')) {
      reportIssue('sitemap-0.xml', '/sitemap.xml', 'Sitemap contains localhost/dev URLs', 'Set PUBLIC_SITE_URL to https://jichangbang.org');
      sitemapPassed = false;
    }
  }
}
if (sitemapPassed) results.Sitemap = 'PASS';

// 6. Check Internal Links
let linksPassed = true;
for (const p of formalPages) {
  const hrefMatches = p.content.match(/<a[^>]*href=["']([^"']*)["'][^>]*>/gi) || [];
  for (const aTag of hrefMatches) {
    const href = aTag.match(/href=["']([^"']*)["']/i)?.[1];
    if (href === '' || href === '#') {
      reportIssue(p.rel, href, 'Empty or fragment-only href detected in navigation/body', 'Replace empty href with valid link or button');
      linksPassed = false;
      break;
    }
  }
}
if (linksPassed) results['Internal Links'] = 'PASS';

// 7. Check Core URLs
const corePaths = [
  'index.html',
  'recommend/index.html',
  'ranking/index.html',
  'reviews/index.html',
  'pricing/index.html',
  'compare/index.html',
  'free/index.html',
  'protocols/index.html',
  'clients/index.html',
  'tutorials/index.html',
  'issues/index.html',
  'risk/index.html',
  'providers/index.html',
  'wiki/index.html',
  'about/index.html'
];
let corePassed = true;
for (const cp of corePaths) {
  if (!fs.existsSync(path.join(distDir, cp))) {
    reportIssue('dist/' + cp, '/' + cp.replace('/index.html', ''), 'Core SEO Pillar page missing from dist', 'Check page compilation in src/pages');
    corePassed = false;
  }
}
if (corePassed) results['Core URLs'] = 'PASS';

// 8. Check Schema
let schemaPassed = true;
const requiredSchemas = ['Organization', 'WebSite', 'BreadcrumbList', 'FAQPage'];
const foundSchemas = new Set();
for (const p of formalPages) {
  const matches = p.content.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi) || [];
  for (const m of matches) {
    const jsonStr = m.replace(/<script[^>]*>/i, '').replace(/<\/script>/i, '').trim();
    try {
      const parsed = JSON.parse(jsonStr);
      if (parsed['@type']) foundSchemas.add(parsed['@type']);
    } catch (e) {
      reportIssue(p.rel, 'JSON-LD', 'Malformed JSON-LD syntax: ' + e.message, 'Fix JSON serialization in JsonLd.astro');
      schemaPassed = false;
    }
  }
}
for (const req of requiredSchemas) {
  if (!foundSchemas.has(req)) {
    reportIssue('Schema', req, 'Required schema type missing: ' + req, 'Ensure core schemas are rendered');
    schemaPassed = false;
  }
}
if (schemaPassed) results.Schema = 'PASS';

// 9. Check Duplicate Titles and Single H1
let titlesPassed = true;
const titleMap = new Map();
for (const p of formalPages) {
  const tMatch = p.content.match(/<title>([^<]+)<\/title>/i);
  if (tMatch) {
    const title = tMatch[1].trim();
    if (titleMap.has(title)) {
      reportIssue(p.rel, title, 'Duplicate title found: identical to ' + titleMap.get(title), 'Provide unique title per page');
      titlesPassed = false;
    } else {
      titleMap.set(title, p.rel);
    }
  }
  // Check H1
  const h1Matches = p.content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
  if (h1Matches.length === 0) {
    reportIssue(p.rel, 'H1', 'Page has 0 H1 tags', 'Ensure page has exactly one primary H1');
    titlesPassed = false;
  } else if (h1Matches.length > 1) {
    reportIssue(p.rel, 'H1', `Page has ${h1Matches.length} H1 tags (should be exactly 1)`, 'Convert secondary headers to H2/H3');
    titlesPassed = false;
  }
}
if (titlesPassed) results['Duplicate Titles'] = 'PASS';

// 10. Check Page Count and Anti-Spam
let pageCountPassed = true;
if (formalPages.length < 50) {
  reportIssue('dist/', 'Count: ' + formalPages.length, 'Unexpected page count drop (<50)', 'Investigate build output');
  pageCountPassed = false;
} else if (formalPages.length > 3000) {
  reportIssue('dist/', 'Count: ' + formalPages.length, 'Abnormal page count explosion (>3000)', 'Investigate rogue template loop');
  pageCountPassed = false;
}

// Anti-spam check
const suspiciousTerms = ['casino', 'poker', 'xxx', 'viagra', 'payday-loans'];
for (const p of formalPages) {
  for (const term of suspiciousTerms) {
    if (p.rel.toLowerCase().includes(term)) {
      reportIssue(p.rel, term, 'Suspicious anti-spam pattern detected in URL', 'Remove unauthorized content');
      pageCountPassed = false;
    }
  }
}
if (pageCountPassed) results['Page Count'] = 'PASS';

// Output Health Check Report
console.log('SEO HEALTH CHECK\n');
for (const [k, v] of Object.entries(results)) {
  console.log(`${k}: ${v}`);
}
console.log('');

const allPassed = Object.values(results).every(v => v === 'PASS');
if (allPassed) {
  console.log('RELEASE_DECISION: READY\n');
} else {
  console.log('RELEASE_DECISION: BLOCKED\n');
  console.log('--- ISSUES REQUIRING REMEDIATION ---');
  for (const issue of issues) {
    console.log(`❌ [${issue.file}] (${issue.url}): ${issue.reason} -> Suggestion: ${issue.fix}`);
  }
  process.exit(1);
}