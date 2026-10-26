import fs from 'fs';
import path from 'path';
import http from 'http';

function getHtmlFiles(dir) {
  let list = [];
  if (!fs.existsSync(dir)) return list;
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) list = list.concat(getHtmlFiles(full));
    else if (item.endsWith('.html')) list.push(full);
  }
  return list;
}

const htmlFiles = getHtmlFiles('dist');

// 1. Deep affiliate scan
const knownAffiliateSignatures = [
  'aff', 'aff.php', 'affid', 'affcode', 'ref', 'register?aff', 'user/register?code',
  'billing', 'cart.php?a=add', 'buy', 'track', 'r.php', 'code='
];

const unflaggedByPage = {};
let totalUnflagged = 0;

for (const f of htmlFiles) {
  const rel = path.relative('dist', f).replace(/\\/g, '/');
  const html = fs.readFileSync(f, 'utf8');
  if (html.includes('http-equiv="refresh"')) continue;

  const linkRegex = /<a\s+([^>]+)>/gi;
  let m;
  while ((m = linkRegex.exec(html)) !== null) {
    const attrs = m[1];
    const hrefM = attrs.match(/href=["']([^"']*)["']/i);
    const relM = (attrs.match(/rel=["']([^"']*)["']/i) || [])[1] || '';
    if (!hrefM) continue;
    const href = hrefM[1];
    if (!href.startsWith('http')) continue;
    if (href.includes('jichangbang.org')) continue;

    const isAff = knownAffiliateSignatures.some(sig => href.toLowerCase().includes(sig));
    if (isAff) {
      const isCompliant = relM.includes('sponsored') && relM.includes('nofollow');
      if (!isCompliant) {
        totalUnflagged++;
        if (!unflaggedByPage[rel]) unflaggedByPage[rel] = [];
        unflaggedByPage[rel].push({ href, rel: relM });
      }
    }
  }
}

// 2. Check source template for affiliate links in pricing / etc.
const srcFiles = [];
function getSrcFiles(dir) {
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) getSrcFiles(full);
    else if (/\.(astro|vue|svelte|jsx|tsx|html|md|ts)$/.test(item)) srcFiles.push(full);
  }
}
getSrcFiles('src');

const srcAffMatches = [];
for (const sf of srcFiles) {
  const content = fs.readFileSync(sf, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    if (line.includes('<a ') && (line.includes('register') || line.includes('aff') || line.includes('code='))) {
      if (!line.includes('sponsored') || !line.includes('nofollow')) {
        srcAffMatches.push({ file: sf.replace(/\\/g, '/'), line: idx + 1, content: line.trim() });
      }
    }
  });
}

// 3. E-E-A-T pages existence check
const pagesInSrc = fs.readdirSync('src/pages');
const eeatPages = {
  about: fs.existsSync('src/pages/about.astro') || fs.existsSync('src/pages/about/index.astro'),
  methodology: fs.existsSync('src/pages/methodology.astro') || fs.existsSync('src/pages/evaluation-standards.astro') || fs.existsSync('src/pages/methodology/index.astro'),
  privacy: fs.existsSync('src/pages/privacy.astro') || fs.existsSync('src/pages/privacy/index.astro'),
  terms: fs.existsSync('src/pages/terms.astro') || fs.existsSync('src/pages/terms/index.astro'),
  disclosure: fs.existsSync('src/pages/disclosure.astro') || fs.existsSync('src/pages/affiliate-disclosure.astro'),
  author: fs.existsSync('src/pages/author.astro') || fs.existsSync('src/pages/author/[author].astro')
};

// 4. Check schema on reviews
let reviewsSchemaTypes = {};
for (const f of htmlFiles) {
  const rel = path.relative('dist', f).replace(/\\/g, '/');
  if (rel.startsWith('reviews/')) {
    const html = fs.readFileSync(f, 'utf8');
    const schemaMatches = html.match(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi) || [];
    const types = [];
    for (const s of schemaMatches) {
      try {
        const json = JSON.parse(s.replace(/<script\s+type=["']application\/ld\+json["']>/i, '').replace(/<\/script>/i, ''));
        if (json['@type']) types.push(json['@type']);
      } catch (e) {}
    }
    reviewsSchemaTypes[rel] = types;
  }
}

// 5. Content Word Count stats
const wordCountStats = [];
for (const f of htmlFiles) {
  const rel = path.relative('dist', f).replace(/\\/g, '/');
  if (rel.startsWith('reviews/') || rel.startsWith('wiki/')) {
    const html = fs.readFileSync(f, 'utf8');
    const text = html.replace(/<script[\s\S]*?<\/script>/gi, '')
                     .replace(/<style[\s\S]*?<\/style>/gi, '')
                     .replace(/<nav[\s\S]*?<\/nav>/gi, '')
                     .replace(/<footer[\s\S]*?<\/footer>/gi, '')
                     .replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    const chinese = (text.match(/[\u4e00-\u9fa5]/g) || []).length;
    wordCountStats.push({ rel, chinese });
  }
}
wordCountStats.sort((a, b) => a.chinese - b.chinese);

// 6. Mixed content scan (http://)
const mixedContent = [];
for (const f of htmlFiles) {
  const rel = path.relative('dist', f).replace(/\\/g, '/');
  const html = fs.readFileSync(f, 'utf8');
  const httpMatches = html.match(/src=["']http:\/\/[^"']+["']/gi) || [];
  if (httpMatches.length > 0) {
    mixedContent.push({ rel, matches: httpMatches });
  }
}

// 7. Image optimization check
let missingImgDimensions = 0;
let missingLazyLoading = 0;
let totalImages = 0;
for (const f of htmlFiles) {
  const html = fs.readFileSync(f, 'utf8');
  const imgMatches = html.match(/<img\s+[^>]+>/gi) || [];
  totalImages += imgMatches.length;
  for (const img of imgMatches) {
    if (!img.includes('width=') || !img.includes('height=')) missingImgDimensions++;
    if (!img.includes('loading="lazy"') && !img.includes("loading='lazy'") && !img.includes('loading=lazy')) {
      missingLazyLoading++;
    }
  }
}

const detailedAudit = {
  unflaggedAffiliateCount: totalUnflagged,
  unflaggedByPage,
  srcAffMatches,
  eeatPages,
  wordCountDistribution: {
    min: wordCountStats[0],
    max: wordCountStats[wordCountStats.length - 1],
    median: wordCountStats[Math.floor(wordCountStats.length / 2)],
    below300: wordCountStats.filter(w => w.chinese < 300).length,
    between300And500: wordCountStats.filter(w => w.chinese >= 300 && w.chinese < 500).length,
    between500And1000: wordCountStats.filter(w => w.chinese >= 500 && w.chinese < 1000).length,
    above1000: wordCountStats.filter(w => w.chinese >= 1000).length,
  },
  reviewsSchemaSample: Object.entries(reviewsSchemaTypes).slice(0, 5),
  mixedContentCount: mixedContent.length,
  imageOptimization: {
    totalImages,
    missingImgDimensions,
    missingLazyLoading
  }
};

fs.writeFileSync('scripts/audit-detailed-results.json', JSON.stringify(detailedAudit, null, 2), 'utf8');
console.log('Detailed audit finished! Output written to scripts/audit-detailed-results.json');
