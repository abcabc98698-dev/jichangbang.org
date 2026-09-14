import fs from 'fs';
import path from 'path';

const dir = path.resolve('src/content/airport-reviews');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));

console.log(`Auditing ${files.length} review markdown files in ${dir}...`);

let passCount = 0;
const errors = [];

const requiredHeaders = [
  '## 一、评测前言与核心结论速览',
  '## 二、品牌起源与运营背景透视',
  '## 三、骨干网络拓扑与线路架构深解',
  '## 四、晚高峰全天候测速与丢包实测矩阵',
  '## 五、AI 生产力与海外流媒体解锁深度验证',
  '## 六、全系套餐资费深度对账与避坑',
  '## 七、全平台客户端配置与分流最佳实践',
  '## 八、跑路风险监测雷达与安全避坑守则',
  '## 九、2026 金牌专线横向对标与更优替代方案',
  '## 十、高频疑问解答与避坑'
];

for (const file of files) {
  const filePath = path.join(dir, file);
  const raw = fs.readFileSync(filePath, 'utf8');

  // 1. 检查 Frontmatter
  if (!raw.startsWith('---\n')) {
    errors.push(`${file}: Missing frontmatter start`);
  }

  // 2. 检查 10 大模块标题
  for (const h of requiredHeaders) {
    if (!raw.includes(h)) {
      errors.push(`${file}: Missing header "${h}"`);
    }
  }

  // 3. 检查光速云与优惠码 AMM
  if (!raw.includes('光速云') || !raw.includes('AMM')) {
    errors.push(`${file}: Missing GuangSu comparison or coupon AMM`);
  }

  // 4. 检查 human-writing 禁忌：破折号
  if (raw.includes('——')) {
    errors.push(`${file}: Contains em-dash "——"`);
  }

  // 5. 检查模型翻案套话
  if (/不是[^，。\n]+而是[^，。\n]+/.test(raw)) {
    errors.push(`${file}: Contains formulaic phrase "不是...而是..."`);
  }

  // 6. 检查正文中是否存在非法中文冒号（除合法标题、表格对齐之外）
  const lines = raw.split('\n');
  let inFrontmatter = false;
  let fmCount = 0;
  lines.forEach((line, idx) => {
    if (line.trim() === '---') {
      fmCount++;
      inFrontmatter = fmCount < 2;
      return;
    }
    if (inFrontmatter) return;
    if (line.includes(':---') || line.includes('---:')) return;

    if (line.includes('：')) {
      errors.push(`${file}: Line ${idx + 1} contains Chinese colon "：" -> "${line.trim().slice(0, 40)}"`);
    }
  });

  passCount++;
}

console.log(`\nAudit Results:`);
console.log(`Total files audited: ${files.length}`);
console.log(`Passed files: ${passCount - errors.length}`);
console.log(`Total errors: ${errors.length}`);

if (errors.length > 0) {
  console.log(`\nFirst 20 errors:`);
  errors.slice(0, 20).forEach(e => console.log('❌', e));
  process.exit(1);
} else {
  console.log(`🎉 ALL ${files.length} AIRPORT REVIEWS PASSED ALL AUDIT CHECKS!`);
}
