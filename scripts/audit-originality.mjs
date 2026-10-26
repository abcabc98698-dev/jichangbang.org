import fs from 'fs';
import path from 'path';

// Let's sample 10 articles and inspect paragraph structures
const reviewFiles = fs.readdirSync('src/content/airport-reviews').filter(f => f.endsWith('.md'));
const sampleSlugs = ['guangsu.md', 'feimao.md', 'breeze.md', 'flowercloud.md', 'wgetcloud.md', 'tag-vpn.md', 'nexitally.md', 'edgenova.md', 'dageyun.md', 'firefly.md'];

const samples = [];
for (const slug of sampleSlugs) {
  const filePath = path.join('src/content/airport-reviews', slug);
  if (fs.existsSync(filePath)) {
    const raw = fs.readFileSync(filePath, 'utf8');
    const paras = raw.split(/\n\s*\n/).filter(p => !p.startsWith('#') && !p.startsWith('---') && p.length > 50);
    samples.push({
      slug,
      h2Count: (raw.match(/^##\s+/gm) || []).length,
      paragraphsSample: paras.slice(0, 3)
    });
  }
}

// Check title/meta pattern overlap
const titles = [];
for (const f of reviewFiles) {
  const content = fs.readFileSync(path.join('src/content/airport-reviews', f), 'utf8');
  const titleM = content.match(/title:\s*["']?([^"'\n]+)["']?/);
  const descM = content.match(/description:\s*["']?([^"'\n]+)["']?/);
  if (titleM) titles.push({ file: f, title: titleM[1], desc: descM ? descM[1] : '' });
}

// Check template pattern in titles & descriptions
const formulaTitles = titles.filter(t => t.title.includes('评测') && t.title.includes('好用吗'));
const formulaDescs = titles.filter(t => t.desc.includes('深度评测') || t.desc.includes('节点速度'));

fs.writeFileSync('scripts/content-originality-results.json', JSON.stringify({
  samples,
  formulaTitlesCount: formulaTitles.length,
  totalReviews: titles.length,
  formulaTitlesSample: formulaTitles.slice(0, 5),
  formulaDescsCount: formulaDescs.length,
  formulaDescsSample: formulaDescs.slice(0, 5)
}, null, 2), 'utf8');

console.log('Originality analysis finished!');
