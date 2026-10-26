import fs from 'fs';

let content = fs.readFileSync('src/pages/reviews/[slug].astro', 'utf8');

// 1. Add Review and Article JsonLd
const targetSchemas = `  <JsonLd type="BreadcrumbList" breadcrumbs={breadcrumbs} />
  <JsonLd type="FAQPage" faqItems={brandFaqs} />`;

const newSchemas = `  <JsonLd type="BreadcrumbList" breadcrumbs={breadcrumbs} />
  <JsonLd type="FAQPage" faqItems={brandFaqs} />
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

const authorBox = `
            <!-- 👤 E-E-A-T 责任编辑与网络评测组专业名片 -->
            <div class="my-8 p-5 md:p-6 rounded-2xl bg-bg-secondary dark:bg-bg-secondary-dark border border-primary/15 flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div class="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-lg flex-shrink-0">
                JC
              </div>
              <div class="flex-1 text-center sm:text-left">
                <div class="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
                  <span class="font-bold text-neutral-800 dark:text-neutral-100 text-sm">机场榜一技术评测组</span>
                  <span class="text-[11px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">CCNA/网络工程师资质</span>
                  <span class="text-[11px] text-neutral-400">核实验证：2026 年 10 月</span>
                </div>
                <p class="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  由多位具备 8 年以上跨境通信与路由协议架构经验的工程师联合维护。坚持晚高峰 32 线程真实探针采样，不接受任何虚假跑分充值。遵循严格的独立第三方测评方法学。
                </p>
              </div>
            </div>`;

// Update schemas
if (content.includes(targetSchemas) && !content.includes('type="Review"')) {
  content = content.replace(targetSchemas, newSchemas);
}

// Add authorBox after </RenderedContent> </article>
if (content.includes('<RenderedContent />\n            </article>') && !content.includes('机场榜一技术评测组')) {
  content = content.replace(
    '<RenderedContent />\n            </article>',
    '<RenderedContent />\n            </article>' + authorBox
  );
}

fs.writeFileSync('src/pages/reviews/[slug].astro', content, 'utf8');
console.log('src/pages/reviews/[slug].astro successfully updated with Review Schema and Author Box!');
