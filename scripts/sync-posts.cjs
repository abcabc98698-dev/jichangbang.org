const fs = require('fs');
const path = require('path');

const mappings = [
  {
    src: path.join(__dirname, '../2026-airport-buying-guide.md'),
    dest: path.join(__dirname, '../src/content/post/introducing-ricofast/index.mdx'),
    meta: {
      title: '2026 机场推荐与选购指南：从线路、价格和节点怎么选',
      description: '2026年如何选择一家稳定好用的机场？从 IEPL 专线、BGP 隧道中转、原生住宅 IP 到月付套餐避坑策略，本篇万字指南带你一步到位理清所有选购逻辑。',
      publishDate: '2026-09-01',
      read: 15,
      tags: ['机场推荐', '新手指南', '2026选购'],
      img: '/assets/article-cover.jpg',
      img_alt: '2026 机场推荐与选购指南',
      featured: true
    }
  },
  {
    src: path.join(__dirname, '../iepl-vs-iplc-private-line-guide.md'),
    dest: path.join(__dirname, '../src/content/post/customize-your-saas-site/index.mdx'),
    meta: {
      title: 'IEPL 与 IPLC 专线有什么区别？为什么晚高峰专线不卡顿？',
      description: '深度拆解跨境 IEPL 与 IPLC 物理内网专线的底层网络架构。从国际海底光缆物理拓扑、OSI 数据链路层与物理层差异、晚高峰公网 GFW 审查与 QoS 丢包机制，到真假专线 mtr 鉴别指令与实战案例，彻底讲透为什么企业级内网专线能够做到全天候零丢包。',
      publishDate: '2026-08-28',
      read: 12,
      tags: ['线路科普', 'IEPL专线', 'IPLC专线', '网络技术'],
      img: '/assets/article-cover.jpg',
      img_alt: 'IEPL与IPLC专线深度区别分析',
      featured: false
    }
  },
  {
    src: path.join(__dirname, '../chatgpt-claude-unblock-access-denied-guide.md'),
    dest: path.join(__dirname, '../src/content/post/design-system-behind-ricofast/index.mdx'),
    meta: {
      title: 'ChatGPT 与 Claude 原生解锁深度指南：如何避免 Access Denied？',
      description: '全面剖析 OpenAI 与 Anthropic 针对代理节点的风控阻断机制。深度解读 Cloudflare Turnstile 人机验证、L7 WAF 1020 报错、机房广播 IP 与原生住宅双 ISP 的本质差异、TLS 指纹与 IP 漂移风控，并提供生产级客户端分流配置与实战排障方案。',
      publishDate: '2026-08-20',
      read: 14,
      tags: ['AI解锁', 'ChatGPT', 'Claude', '原生IP'],
      img: '/assets/article-cover.jpg',
      img_alt: 'ChatGPT与Claude原生解锁指南',
      featured: false
    }
  },
  {
    src: path.join(__dirname, '../how-to-tell-if-airport-ran-away-warning-signs.md'),
    dest: path.join(__dirname, '../src/content/post/launching-v1-0/index.mdx'),
    meta: {
      title: '如何判断机场是否跑路？资深玩家总结的跑路前 5 大危险信号',
      description: '深度拆解跨境翻墙机场跑路的底层经济学模型与资金链断裂机制。全面盘点资深网络玩家总结的跑路前 5 大高危预警信号、大面积断连时的四步技术排障指令、双机场高可用容灾配置方案以及真实跑路案例复盘，帮助出海用户守住资产安全，杜绝失联恐慌。',
      publishDate: '2026-08-10',
      read: 15,
      tags: ['风险防范', '防跑路', '风险情报'],
      img: '/assets/article-cover.jpg',
      img_alt: '机场防跑路指南与危险信号分析',
      featured: false
    }
  }
];

mappings.forEach(m => {
  const raw = fs.readFileSync(m.src, 'utf8');
  // 移除原始 frontmatter
  let body = raw.replace(/^---[\s\S]*?---\n+/, '').trim();
  // 移除开头的 H1 (形如 # 标题)
  body = body.replace(/^#\s+[^\n]+\n+/, '').trim();

  // 构建新 frontmatter
  const fm = [
    '---',
    `title: "${m.meta.title}"`,
    `description: "${m.meta.description}"`,
    `publishDate: ${m.meta.publishDate}`,
    `read: ${m.meta.read}`,
    `tags: ${JSON.stringify(m.meta.tags)}`,
    `img: "${m.meta.img}"`,
    `img_alt: "${m.meta.img_alt}"`,
    `featured: ${m.meta.featured}`,
    '---',
    '',
    body,
    ''
  ].join('\n');

  fs.writeFileSync(m.dest, fm, 'utf8');
  console.log('Successfully updated:', m.dest, 'Size:', (Buffer.byteLength(fm, 'utf8') / 1024).toFixed(2), 'KB');
});
