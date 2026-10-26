import fs from 'fs';
import path from 'path';

// 1. Check content-map.md
const hasContentMap = fs.existsSync('content-map.md') || fs.existsSync('docs/content-map.md');
let contentMapData = null;
if (hasContentMap) {
  contentMapData = fs.readFileSync(hasContentMap ? (fs.existsSync('content-map.md') ? 'content-map.md' : 'docs/content-map.md') : '', 'utf8');
}

// 2. Search console & IndexNow verification
const indexHtml = fs.readFileSync('dist/index.html', 'utf8');
const googleVerification = indexHtml.match(/name=["']google-site-verification["']\s+content=["']([^"']+)["']/i);
const bingVerification = indexHtml.match(/name=["']msvalidate\.01["']\s+content=["']([^"']+)["']/i);
const baiduVerification = indexHtml.match(/name=["']baidu-site-verification["']\s+content=["']([^"']+)["']/i);
const indexnowKey = fs.readdirSync('public').filter(f => f.endsWith('.txt') && f.length > 20);

// 3. Asset sizes in dist/_astro
const astroDir = 'dist/_astro';
let totalCssSize = 0;
let totalJsSize = 0;
const assets = [];
if (fs.existsSync(astroDir)) {
  for (const f of fs.readdirSync(astroDir)) {
    const full = path.join(astroDir, f);
    const stat = fs.statSync(full);
    if (f.endsWith('.css')) totalCssSize += stat.size;
    if (f.endsWith('.js')) totalJsSize += stat.size;
    assets.push({ file: f, sizeKb: (stat.size / 1024).toFixed(2) });
  }
}

// 4. Check viewport & responsive tags
const viewportMatch = indexHtml.match(/<meta[^>]+name=["']viewport["'][^>]+>/i);

const result = {
  hasContentMap,
  verification: {
    google: googleVerification ? googleVerification[1] : null,
    bing: bingVerification ? bingVerification[1] : null,
    baidu: baiduVerification ? baiduVerification[1] : null,
    indexnowKey
  },
  assets: {
    totalCssKb: (totalCssSize / 1024).toFixed(2),
    totalJsKb: (totalJsSize / 1024).toFixed(2),
    fileCount: assets.length
  },
  viewport: viewportMatch ? viewportMatch[0] : null
};

fs.writeFileSync('scripts/audit-extra-results.json', JSON.stringify(result, null, 2), 'utf8');
console.log('Extra audit finished!');
