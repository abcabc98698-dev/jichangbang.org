import fs from 'fs';
import path from 'path';

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

const htmlFiles = getHtmlFiles('dist');
console.log(`Found ${htmlFiles.length} HTML files in dist/`);

// Data structures
const report = {
  technical: {},
  content: {},
  eeat: {},
  affiliate: {},
  internalLinks: {},
  schema: {},
  performance: {},
  searchPerf: {}
};

// 1.1 Robots.txt
const robotsPath = fs.existsSync('public/robots.txt') ? 'public/robots.txt' : (fs.existsSync('docs/public/robots.txt') ? 'docs/public/robots.txt' : null);
if (robotsPath) {
  const robotsTxt = fs.readFileSync(robotsPath, 'utf8');
  report.technical.robots = {
    path: robotsPath,
    hasDisallowAll: /Disallow:\s*\/\s*$/m.test(robotsTxt),
    hasGooglebot: /User-agent:\s*Googlebot/i.test(robotsTxt),
    hasBingbot: /User-agent:\s*Bingbot/i.test(robotsTxt),
    hasBaidu: /User-agent:\s*Baiduspider/i.test(robotsTxt),
    hasYisou: /User-agent:\s*yisouspider/i.test(robotsTxt),
    sitemaps: (robotsTxt.match(/Sitemap:\s*(.*)/gi) || []).map(s => s.replace(/Sitemap:\s*/i, '').trim()),
    content: robotsTxt
  };
} else {
  report.technical.robots = { error: 'robots.txt not found' };
}

// 1.2 & 1.4 & 2.1 & 2.3 & 5.1 & 6.1 Scan HTML Files
const pageData = new Map();
const titles = new Map();
const descriptions = new Map();
const h1s = new Map();
const internalLinkGraph = new Map(); // from -> Set of to
const allCanonical = [];
const nonCanonicalOrErrors = [];
const externalLinks = [];
const schemas = [];
const thinContentPages = [];
const criticalThinPages = [];
const wordCounts = [];
const deadLinks = [];
const genericAnchors = [];

// Helper to clean HTML to text
function extractText(html) {
  // strip script and style
  let text = html.replace(/<script[\s\S]*?<\/script>/gi, '')
                 .replace(/<style[\s\S]*?<\/style>/gi, '')
                 .replace(/<nav[\s\S]*?<\/nav>/gi, '')
                 .replace(/<footer[\s\S]*?<\/footer>/gi, '')
                 .replace(/<header[\s\S]*?<\/header>/gi, '');
  // strip tags
  text = text.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  return text;
}

// Check headers file
const headersPath = fs.existsSync('public/_headers') ? 'public/_headers' : null;
report.technical.headers = headersPath ? fs.readFileSync(headersPath, 'utf8') : null;

for (const filePath of htmlFiles) {
  const relPath = path.relative('dist', filePath).replace(/\\/g, '/');
  const urlPath = '/' + relPath.replace(/index\.html$/, '').replace(/\.html$/, '');
  const cleanUrl = (urlPath.endsWith('/') || urlPath === '/') ? urlPath : urlPath + '/';
  const html = fs.readFileSync(filePath, 'utf8');
  
  const isRedirect = html.includes('http-equiv="refresh"');
  const is404 = relPath === '404.html';
  
  // Title
  const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : '';
  
  // Description
  const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i) ||
                    html.match(/<meta\s+content=["']([^"']*)["']\s+name=["']description["']/i);
  const description = descMatch ? descMatch[1].trim() : '';

  // H1
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const h1 = h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : '';

  // Canonical
  const canMatch = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i) ||
                   html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i);
  const canonical = canMatch ? canMatch[1] : '';

  // Noindex
  const hasNoindex = /content=["'][^"']*noindex[^"']*["']/i.test(html);

  // Author byline check
  const hasAuthorByline = html.includes('rel="author"') ||
                          html.includes('itemprop="author"') ||
                          /class="[^"]*author[^"]*"/i.test(html) ||
                          html.includes('评测组') ||
                          html.includes('编辑');

  // Affiliates / External Links
  const linkRegex = /<a\s+([^>]+)>/gi;
  let linkMatch;
  const pageOutbound = [];
  while ((linkMatch = linkRegex.exec(html)) !== null) {
    const attrs = linkMatch[1];
    const hrefMatch = attrs.match(/href=["']([^"']*)["']/i);
    const relAttr = (attrs.match(/rel=["']([^"']*)["']/i) || [])[1] || '';
    if (!hrefMatch) continue;
    const href = hrefMatch[1].trim();

    // extract anchor text
    const fullTag = linkMatch[0];
    const rest = html.substring(linkMatch.index + fullTag.length);
    const closeIdx = rest.indexOf('</a>');
    const anchorText = closeIdx !== -1 ? rest.substring(0, closeIdx).replace(/<[^>]+>/g, '').trim() : '';

    if (anchorText === '点击这里' || anchorText === '阅读更多' || anchorText === '查看详情' || anchorText === '点此访问') {
      genericAnchors.push({ page: cleanUrl, text: anchorText, href });
    }

    if (href.startsWith('http://') || href.startsWith('https://')) {
      if (!href.startsWith('https://jichangbang.org') && !href.startsWith('http://jichangbang.org')) {
        const isSponsored = relAttr.includes('sponsored') || relAttr.includes('nofollow');
        pageOutbound.push({ href, rel: relAttr, anchorText, isSponsored });
      }
    } else if (href.startsWith('/') || (!href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('javascript:'))) {
      // internal link
      let target = href.split('#')[0].split('?')[0];
      if (target === '') target = '/';
      pageOutbound.push({ internal: true, target });
    }
  }

  // Schema
  const schemaMatches = html.match(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi) || [];
  const parsedSchemas = [];
  for (const s of schemaMatches) {
    const jsonStr = s.replace(/<script\s+type=["']application\/ld\+json["']>/i, '').replace(/<\/script>/i, '').trim();
    try {
      const parsed = JSON.parse(jsonStr);
      parsedSchemas.push(parsed);
    } catch (e) {
      parsedSchemas.push({ parseError: e.message, raw: jsonStr.substring(0, 100) });
    }
  }

  // Words / Character count
  const mainText = extractText(html);
  const chineseChars = (mainText.match(/[\u4e00-\u9fa5]/g) || []).length;
  const englishWords = (mainText.match(/[a-zA-Z0-9_-]+/g) || []).length;
  const totalLength = chineseChars + englishWords;

  const record = {
    filePath: relPath,
    cleanUrl,
    title,
    description,
    h1,
    canonical,
    hasNoindex,
    isRedirect,
    is404,
    hasAuthorByline,
    length: totalLength,
    chineseChars,
    outbound: pageOutbound,
    schemas: parsedSchemas
  };

  pageData.set(cleanUrl, record);

  if (!isRedirect && !is404) {
    // Check Title
    if (title) {
      if (!titles.has(title)) titles.set(title, []);
      titles.get(title).push(cleanUrl);
    }
    // Check Desc
    if (description) {
      if (!descriptions.has(description)) descriptions.set(description, []);
      descriptions.get(description).push(cleanUrl);
    }
    // Check H1
    if (h1) {
      if (!h1s.has(h1)) h1s.set(h1, []);
      h1s.get(h1).push(cleanUrl);
    }
    // Check Canonical
    if (!canonical) {
      nonCanonicalOrErrors.push({ url: cleanUrl, error: 'Missing canonical' });
    } else if (!canonical.startsWith('https://jichangbang.org')) {
      nonCanonicalOrErrors.push({ url: cleanUrl, canonical, error: 'Non-canonical domain' });
    } else {
      const expected = ('https://jichangbang.org' + cleanUrl).replace(/\/$/, '') || 'https://jichangbang.org/';
      const normCan = canonical.replace(/\/$/, '') || 'https://jichangbang.org/';
      if (normCan !== expected) {
        nonCanonicalOrErrors.push({ url: cleanUrl, canonical, expected: normCan, error: 'Not self-referential' });
      }
    }

    // Check Thin Content on articles / reviews / wiki
    if (cleanUrl.startsWith('/reviews/') || cleanUrl.startsWith('/wiki/') || cleanUrl.startsWith('/blog/')) {
      wordCounts.push({ url: cleanUrl, length: totalLength, chineseChars });
      if (totalLength < 300) {
        criticalThinPages.push({ url: cleanUrl, length: totalLength, path: relPath });
      } else if (totalLength < 500) {
        thinContentPages.push({ url: cleanUrl, length: totalLength, path: relPath });
      }
    }
  }
}

// Internal Link Graph & Click Depth calculation
const allFormalUrls = new Set([...pageData.keys()].filter(u => {
  const p = pageData.get(u);
  return !p.isRedirect && !p.is404;
}));

const inLinks = new Map();
allFormalUrls.forEach(u => inLinks.set(u, new Set()));

for (const [url, data] of pageData.entries()) {
  if (data.isRedirect || data.is404) continue;
  for (const link of data.outbound) {
    if (link.internal) {
      let target = link.target;
      if (!target.endsWith('/') && !path.extname(target)) target += '/';
      if (allFormalUrls.has(target)) {
        inLinks.get(target).add(url);
      } else if (target !== '/' && !target.startsWith('/#') && !target.includes('.')) {
        // check if dead link
        deadLinks.push({ from: url, to: target });
      }
    }
  }
}

// Click Depth (BFS from '/')
const clickDepth = new Map();
const queue = ['/'];
clickDepth.set('/', 0);

while (queue.length > 0) {
  const current = queue.shift();
  const currentDepth = clickDepth.get(current);
  const data = pageData.get(current);
  if (!data) continue;

  for (const link of data.outbound) {
    if (link.internal) {
      let target = link.target;
      if (!target.endsWith('/') && !path.extname(target)) target += '/';
      if (allFormalUrls.has(target) && !clickDepth.has(target)) {
        clickDepth.set(target, currentDepth + 1);
        queue.push(target);
      }
    }
  }
}

const orphanPages = [];
const depthOver3 = [];
const depthOver4 = [];
for (const url of allFormalUrls) {
  const inCount = inLinks.get(url)?.size || 0;
  if (inCount === 0 && url !== '/') {
    orphanPages.push({ url, path: pageData.get(url).filePath });
  }
  const depth = clickDepth.get(url);
  if (depth === undefined) {
    // Unreachable from /
    orphanPages.push({ url, path: pageData.get(url).filePath, unreachable: true });
  } else if (depth > 4) {
    depthOver4.push({ url, depth });
  } else if (depth > 3) {
    depthOver3.push({ url, depth });
  }
}

// Sitemaps verification
let sitemapsData = [];
if (fs.existsSync('dist/sitemap-index.xml')) {
  const sitemapIndex = fs.readFileSync('dist/sitemap-index.xml', 'utf8');
  const smUrls = (sitemapIndex.match(/<loc>([^<]+)<\/loc>/g) || []).map(s => s.replace(/<\/?loc>/g, ''));
  for (const smUrl of smUrls) {
    const filename = path.basename(smUrl);
    const smFile = path.join('dist', filename);
    if (fs.existsSync(smFile)) {
      const content = fs.readFileSync(smFile, 'utf8');
      const locs = (content.match(/<loc>([^<]+)<\/loc>/g) || []).map(s => s.replace(/<\/?loc>/g, ''));
      const lastmods = (content.match(/<lastmod>([^<]+)<\/lastmod>/g) || []).map(s => s.replace(/<\/?lastmod>/g, ''));
      sitemapsData.push({
        sitemap: filename,
        count: locs.length,
        locs,
        lastmodsSample: lastmods.slice(0, 3)
      });
    } else {
      sitemapsData.push({ sitemap: filename, error: 'File missing from dist' });
    }
  }
}

// Affiliate compliance
const unflaggedAffiliateLinks = [];
let totalExternalLinks = 0;
let totalAffiliateLinks = 0;
const knownAffiliateSignatures = [
  'aff', 'aff.php', 'affid', 'affcode', 'ref', 'register?aff', 'user/register?code',
  'billing', 'cart.php?a=add', 'buy', 'track', 'r.php', 'link'
];

for (const [url, data] of pageData.entries()) {
  if (data.isRedirect || data.is404) continue;
  for (const out of data.outbound) {
    if (!out.internal) {
      totalExternalLinks++;
      const isAff = knownAffiliateSignatures.some(sig => out.href.toLowerCase().includes(sig));
      if (isAff) {
        totalAffiliateLinks++;
        if (!out.isSponsored) {
          unflaggedAffiliateLinks.push({
            page: url,
            href: out.href,
            anchor: out.anchorText,
            rel: out.rel
          });
        }
      }
    }
  }
}

// Duplicate metadata
const duplicateTitles = [...titles.entries()].filter(([t, urls]) => urls.length > 1);
const duplicateDescriptions = [...descriptions.entries()].filter(([d, urls]) => urls.length > 1);
const duplicateH1s = [...h1s.entries()].filter(([h, urls]) => urls.length > 1);

// Schema Summary
let schemasFoundByType = {
  ItemList: 0,
  Article: 0,
  FAQPage: 0,
  BreadcrumbList: 0,
  Organization: 0,
  WebSite: 0
};
let schemaSyntaxErrors = 0;

for (const [url, data] of pageData.entries()) {
  for (const s of data.schemas) {
    if (s.parseError) {
      schemaSyntaxErrors++;
      continue;
    }
    const types = Array.isArray(s['@type']) ? s['@type'] : [s['@type']];
    types.forEach(t => {
      if (schemasFoundByType[t] !== undefined) schemasFoundByType[t]++;
    });
    if (s['@graph']) {
      for (const item of s['@graph']) {
        const gtypes = Array.isArray(item['@type']) ? item['@type'] : [item['@type']];
        gtypes.forEach(t => {
          if (schemasFoundByType[t] !== undefined) schemasFoundByType[t]++;
        });
      }
    }
  }
}

// Summary Output
const summary = {
  totalHtml: htmlFiles.length,
  formalPages: allFormalUrls.size,
  robots: report.technical.robots,
  canonicalErrors: nonCanonicalOrErrors,
  sitemaps: sitemapsData,
  urlSpecification: {
    upperCaseUrls: [...allFormalUrls].filter(u => /[A-Z]/.test(u)),
    nonTrailingSlash: [...allFormalUrls].filter(u => !u.endsWith('/') && !path.extname(u)),
    queryParamUrls: [...allFormalUrls].filter(u => u.includes('?')),
    chineseCharUrls: [...allFormalUrls].filter(u => /[\u4e00-\u9fa5]/.test(u))
  },
  content: {
    totalChecked: wordCounts.length,
    thin500: thinContentPages,
    criticalThin300: criticalThinPages,
    duplicateTitles: duplicateTitles.map(([title, urls]) => ({ title, count: urls.length, sample: urls.slice(0, 3) })),
    duplicateDescriptions: duplicateDescriptions.map(([desc, urls]) => ({ desc: desc.substring(0, 40) + '...', count: urls.length, sample: urls.slice(0, 3) })),
    duplicateH1s: duplicateH1s.map(([h1, urls]) => ({ h1, count: urls.length, sample: urls.slice(0, 3) })),
  },
  affiliate: {
    totalExternalLinks,
    totalAffiliateLinks,
    unflaggedCount: unflaggedAffiliateLinks.length,
    unflaggedAffiliateLinks: unflaggedAffiliateLinks.slice(0, 10)
  },
  internalLinks: {
    orphanCount: orphanPages.length,
    orphans: orphanPages,
    depthOver3Count: depthOver3.length,
    depthOver4Count: depthOver4.length,
    deadLinksSample: deadLinks.slice(0, 10),
    genericAnchorsCount: genericAnchors.length,
    genericAnchorsSample: genericAnchors.slice(0, 5)
  },
  schema: {
    syntaxErrors: schemaSyntaxErrors,
    schemasFoundByType
  }
};

fs.writeFileSync('scripts/audit-results.json', JSON.stringify(summary, null, 2), 'utf8');
console.log('AUDIT COMPLETED. Results written to scripts/audit-results.json');
