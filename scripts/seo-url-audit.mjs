import fs from 'fs';
import path from 'path';

// 读取当前构建生成的所有 URL
const distDir = path.resolve('dist');
const sitemapPath = path.join(distDir, 'sitemap-0.xml');

if (!fs.existsSync(sitemapPath)) {
  console.error('❌ dist/sitemap-0.xml not found. Please run pnpm build first.');
  process.exit(1);
}

const sitemap = fs.readFileSync(sitemapPath, 'utf8');
const regex = /<loc>(.*?)<\/loc>/g;
let m;
const allUrls = [];
while ((m = regex.exec(sitemap)) !== null) {
  allUrls.push(m[1]);
}

console.log(`====================================================`);
console.log(`🛡️  SEO Anti-AI URL Architecture Optimization Audit`);
console.log(`   Auditing ${allUrls.length} Active Canonical URLs`);
console.log(`====================================================\n`);

let passedCount = 0;
const violations = [];
const directoryCounts = {};

allUrls.forEach(rawUrl => {
  const urlObj = new URL(rawUrl);
  const pathname = urlObj.pathname;
  const segments = pathname.split('/').filter(Boolean);

  // 1. 检查机械编号 URL (/article/001, /post/1001, /page-001)
  const hasNumberedSlug = segments.some(seg => /^(article|post|page|item)?[_-]?\d{2,}$/i.test(seg));
  if (hasNumberedSlug) {
    violations.push({ url: rawUrl, type: 'MECHANICAL_NUMBER', detail: 'Contains mechanical number pattern' });
  }

  // 2. 检查时间驱动 URL (/2026/08/...)
  const hasDatePath = segments.some(seg => /^\d{4}$/.test(seg) || /^\d{2}$/.test(seg));
  if (hasDatePath) {
    violations.push({ url: rawUrl, type: 'DATE_DRIVEN', detail: 'Contains date-driven directory structure' });
  }

  // 3. 检查 URL 层级控制 (最大 3 级: /cat/topic/page)
  if (segments.length > 3) {
    violations.push({ url: rawUrl, type: 'DEPTH_OVERFLOW', detail: `Exceeds max 3 levels (current depth: ${segments.length})` });
  }

  // 4. 检查 URL 命名合规性 (小写英文、中划线，禁止下划线、中文、大写)
  const invalidNaming = segments.some(seg => /[^a-z0-9\-]/.test(seg) || seg.includes('_'));
  if (invalidNaming) {
    violations.push({ url: rawUrl, type: 'INVALID_NAMING', detail: 'Contains uppercase, underscores, or non-alphanumeric characters' });
  }

  // 5. 检查关键词过度堆叠 (单个 slug 关键词超过 4 个连字符)
  const isKeywordStuffed = segments.some(seg => seg.split('-').length > 5);
  if (isKeywordStuffed) {
    violations.push({ url: rawUrl, type: 'KEYWORD_STUFFING', detail: 'Slug contains more than 5 hyphenated keywords' });
  }

  // 统计各目录 URL 密度
  const topDir = segments[0] || 'root';
  directoryCounts[topDir] = (directoryCounts[topDir] || 0) + 1;
});

// 6. 检查单目录扁平超载（同目录无语义归类超过 50 个 URL）
const flatOverloadedDirs = Object.entries(directoryCounts).filter(([dir, count]) => count > 50 && dir !== 'root');

console.log('--- 1. Directory Density & Structure Breakdown ---');
for (const [dir, count] of Object.entries(directoryCounts)) {
  console.log(`📁 /${dir.padEnd(15)} : ${count.toString().padStart(4)} pages`);
}

console.log('\n--- 2. Architecture & Pattern Violations ---');
if (violations.length === 0) {
  console.log('✅ Zero mechanical numbers, date-driven paths, or naming violations detected.');
} else {
  violations.forEach(v => console.log(`❌ [${v.type}] ${v.url}: ${v.detail}`));
}

console.log('\n--- 3. Anti-AI Farming & Cluster Taxonomy Warning ---');
if (flatOverloadedDirs.length > 0) {
  flatOverloadedDirs.forEach(([dir, count]) => {
    console.log(`⚠️  [FLAT_OVERLOAD] Directory /${dir}/ contains ${count} flat pages.`);
    console.log(`   Risk: Large flat directories (>50 items) with identical templates risk AI content farm detection.`);
    console.log(`   Recommendation: Introduce sub-clustering (e.g., /reviews/enterprise/, /reviews/budget/, /reviews/directory/).`);
  });
} else {
  console.log('✅ All directories maintain healthy cluster densities.');
}

console.log('\n--- 4. Query Parameter & Index Protection ---');
const robots = fs.readFileSync(path.resolve('public/robots.txt'), 'utf8');
const blocksParameters = robots.includes('Disallow: /*?*');
if (blocksParameters) {
  console.log('✅ robots.txt explicitly disallows query strings (Disallow: /*?*).');
} else {
  console.log('❌ robots.txt does not block query strings.');
}

console.log(`\n====================================================`);
console.log(`📊 AUDIT SUMMARY: Total Violations: ${violations.length}`);
console.log(`====================================================\n`);
