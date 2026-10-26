import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const sitemap0Path = path.join(distDir, 'sitemap-0.xml');

if (!fs.existsSync(sitemap0Path)) {
  console.log('dist/sitemap-0.xml not found, skipping split.');
  process.exit(0);
}

const raw = fs.readFileSync(sitemap0Path, 'utf8');
const urlMatches = raw.match(/<url>[\s\S]*?<\/url>/g) || [];

const mainUrls = [];
const reviewsUrls = [];
const providersUrls = [];
const wikiUrls = [];
const guidesUrls = [];

const today = new Date().toISOString().split('T')[0];

urlMatches.forEach(block => {
  const locMatch = block.match(/<loc>(.*?)<\/loc>/);
  if (!locMatch) return;
  const loc = locMatch[1];
  const urlObj = new URL(loc);
  const pathname = urlObj.pathname;

  // 1. Filter out redirect stubs (/blog/page/...) and duplicate first page (/wiki/page/1/)
  if (pathname.startsWith('/blog/page/')) return;
  if (pathname === '/wiki/page/1/' || pathname === '/wiki/page/1') return;

  // Check corresponding dist HTML file if it's a redirect or 404
  let checkHtml = path.join(distDir, pathname.replace(/^\//, ''), 'index.html');
  if (!fs.existsSync(checkHtml)) {
    checkHtml = path.join(distDir, pathname.replace(/^\//, '') + '.html');
  }
  if (fs.existsSync(checkHtml)) {
    const html = fs.readFileSync(checkHtml, 'utf8');
    if (html.includes('http-equiv="refresh"') || html.includes('content="noindex')) {
      return; // Skip redirect or noindex pages
    }
  }

  // 2. Ensure block has lastmod
  let updatedBlock = block;
  if (!block.includes('<lastmod>')) {
    // get file mtime if exists
    let lastmodDate = today;
    if (fs.existsSync(checkHtml)) {
      const stat = fs.statSync(checkHtml);
      lastmodDate = stat.mtime.toISOString().split('T')[0];
    }
    updatedBlock = block.replace('</loc>', `</loc>\n    <lastmod>${lastmodDate}</lastmod>`);
  }

  // 3. Categorize
  if (pathname.startsWith('/reviews/')) {
    reviewsUrls.push(updatedBlock);
  } else if (pathname === '/reviews') {
    reviewsUrls.push(updatedBlock);
  } else if (pathname.startsWith('/providers')) {
    providersUrls.push(updatedBlock);
  } else if (pathname.startsWith('/wiki')) {
    wikiUrls.push(updatedBlock);
  } else if (
    pathname.startsWith('/tutorials') ||
    pathname.startsWith('/protocols') ||
    pathname.startsWith('/clients') ||
    pathname.startsWith('/issues') ||
    pathname.startsWith('/risk') ||
    pathname.startsWith('/ai-streaming')
  ) {
    guidesUrls.push(updatedBlock);
  } else {
    mainUrls.push(updatedBlock);
  }
});

function createSitemapXml(urls) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;
}

const outputs = [
  { file: 'sitemap-main.xml', urls: mainUrls },
  { file: 'sitemap-reviews.xml', urls: reviewsUrls },
  { file: 'sitemap-providers.xml', urls: providersUrls },
  { file: 'sitemap-wiki.xml', urls: wikiUrls },
  { file: 'sitemap-guides.xml', urls: guidesUrls }
];

outputs.forEach(({ file, urls }) => {
  const xml = createSitemapXml(urls);
  fs.writeFileSync(path.join(distDir, file), xml, 'utf8');
  console.log(`Generated ${file} (${urls.length} 200 OK URLs with <lastmod>)`);
});

// 生成拆分索引 sitemap-index.xml
const sitemapIndexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>https://jichangbang.org/sitemap-main.xml</loc><lastmod>${today}</lastmod></sitemap>
  <sitemap><loc>https://jichangbang.org/sitemap-reviews.xml</loc><lastmod>${today}</lastmod></sitemap>
  <sitemap><loc>https://jichangbang.org/sitemap-providers.xml</loc><lastmod>${today}</lastmod></sitemap>
  <sitemap><loc>https://jichangbang.org/sitemap-wiki.xml</loc><lastmod>${today}</lastmod></sitemap>
  <sitemap><loc>https://jichangbang.org/sitemap-guides.xml</loc><lastmod>${today}</lastmod></sitemap>
</sitemapindex>`;

fs.writeFileSync(path.join(distDir, 'sitemap-index.xml'), sitemapIndexXml, 'utf8');
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapIndexXml, 'utf8');
console.log('Updated dist/sitemap-index.xml and dist/sitemap.xml with 5 specialized split sitemaps.');
