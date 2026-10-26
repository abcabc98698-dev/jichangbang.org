import fs from 'fs';

let content = fs.readFileSync('src/pages/reviews/[slug].astro', 'utf8');

const target = '<JsonLd type="FAQPage" faqItems={brandFaqs} />';
const addition = `<JsonLd type="FAQPage" faqItems={brandFaqs} />
  <JsonLd
    type="Review"
    data={{
      title: \`\${airport.name} 深度测评与晚高峰测速报告\`,
      airportName: airport.name,
      description: airport.slogan || airport.description,
      monthlyPrice: airport.monthlyPrice,
      score: airport.score,
    }}
  />
  <JsonLd
    type="Article"
    article={{
      title: \`\${airport.name} 怎么样？2026最新评测·套餐价格·线路测速与优惠码\`,
      description: \`\${airport.name} 深度测评：\${airport.slogan}。覆盖最低 ¥\${airport.monthlyPrice} 套餐价格、\${airport.lineType} 线路分析、晚高峰实测速度 \${airport.speedMbps}M。\`,
      publishDate: "2026-08-19",
      author: "机场榜网络技术评测组",
      url: \`https://jichangbang.org/reviews/\${airport.slug}\`
    }}
  />`;

if (content.includes(target) && !content.includes('type="Review"')) {
  content = content.replace(target, addition);
  fs.writeFileSync('src/pages/reviews/[slug].astro', content, 'utf8');
  console.log('Successfully injected Review & Article JsonLd into [slug].astro!');
} else {
  console.log('Target not found or already replaced');
}
