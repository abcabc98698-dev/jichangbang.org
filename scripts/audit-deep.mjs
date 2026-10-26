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
console.log('Total HTML files in dist:', htmlFiles.length);

let canonicalCount = 0;
let canonicalErrors = [];
let noindexOnFormalPages = [];
let noindexCount = 0;

for (const f of htmlFiles) {
  const rel = path.relative('dist', f).replace(/\\/g, '/');
  const html = fs.readFileSync(f, 'utf8');
  
  // Extract canonical
  const canMatch = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i) ||
                   html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i);
  
  if (canMatch) {
    canonicalCount++;
    const href = canMatch[1];
    if (!href.startsWith('https://jichangbang.org')) {
      canonicalErrors.push({ file: rel, canonical: href, reason: 'Not pointing to formal domain' });
    }
    // Check self-referential
    const expectedPath = '/' + rel.replace(/\/index\.html$/, '').replace(/\.html$/, '');
    const cleanHref = href.replace('https://jichangbang.org', '').replace(/\/$/, '') || '/';
    const cleanExpected = expectedPath.replace(/\/$/, '') || '/';
    if (cleanHref !== cleanExpected && !html.includes('http-equiv="refresh"')) {
      canonicalErrors.push({ file: rel, canonical: href, expected: cleanExpected, reason: 'Not self-referential' });
    }
  } else {
    if (rel !== '404.html' && !html.includes('http-equiv="refresh"')) {
      canonicalErrors.push({ file: rel, reason: 'Missing canonical' });
    }
  }

  // Check noindex
  if (html.includes('content="noindex') || html.includes("content='noindex")) {
    noindexCount++;
    if (rel !== '404.html' && !html.includes('http-equiv="refresh"')) {
      noindexOnFormalPages.push(rel);
    }
  }
}

console.log('Total canonical found:', canonicalCount);
console.log('Canonical errors:', canonicalErrors.length, canonicalErrors.slice(0, 5));
console.log('Noindex found total:', noindexCount, 'on formal pages:', noindexOnFormalPages.length);
if (noindexOnFormalPages.length > 0) console.log('Pages with noindex:', noindexOnFormalPages);
