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

urlMatches.forEach(block => {
  const locMatch = block.match(/<loc>(.*?)<\/loc>/);
  if (!locMatch) return;
  const loc = locMatch[1];
  const urlObj = new URL(loc);
  const pathname = urlObj.pathname;

  if (pathname.startsWith('/reviews/')) {
    reviewsUrls.push(block);
  } else if (pathname === '/reviews') {
    reviewsUrls.push(block);
  } else if (pathname.startsWith('/providers')) {
    providersUrls.push(block);
  } else if (pathname.startsWith('/wiki')) {
    wikiUrls.push(block);
  } else if (
    pathname.startsWith('/tutorials') ||
    pathname.startsWith('/protocols') ||
    pathname.startsWith('/clients') ||
    pathname.startsWith('/issues') ||
    pathname.startsWith('/risk') ||
    pathname.startsWith('/ai-streaming')
  ) {
    guidesUrls.push(block);
  } else {
    mainUrls.push(block);
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
  console.log(`Generated ${file} (${urls.length} URLs)`);
});

// 生成拆分索引 sitemap-index.xml
const sitemapIndexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>https://jichangbang.org/sitemap-main.xml</loc></sitemap>
  <sitemap><loc>https://jichangbang.org/sitemap-reviews.xml</loc></sitemap>
  <sitemap><loc>https://jichangbang.org/sitemap-providers.xml</loc></sitemap>
  <sitemap><loc>https://jichangbang.org/sitemap-wiki.xml</loc></sitemap>
  <sitemap><loc>https://jichangbang.org/sitemap-guides.xml</loc></sitemap>
</sitemapindex>`;

fs.writeFileSync(path.join(distDir, 'sitemap-index.xml'), sitemapIndexXml, 'utf8');
console.log('Updated dist/sitemap-index.xml with 5 specialized split sitemaps.');
