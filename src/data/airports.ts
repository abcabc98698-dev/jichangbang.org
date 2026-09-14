// 机场品牌核心数据库 - 机场榜一 (jichangbang.org)
// 包含 18 个真实推广机场品牌，以【光速云】为主推榜首旗舰

export interface AirportPackage {
  name: string;
  price: string;
  traffic: string;
  line: string;
  features: string[];
}

export interface Airport {
  id: string;
  name: string;
  slug: string;
  slogan: string;
  established: string;
  score: number; // 综合评分 0 - 10
  ratingCount: number;
  monthlyPrice: number; // 最低月付价格 (元)
  annualPrice?: number;
  traffic: number; // GB/月
  lineType: 'IEPL专线' | 'IPLC专线' | 'BGP隧道中转' | '直连优化' | '多线混合';
  protocols: string[]; // Shadowsocks, Vless, Trojan, Hysteria2
  nodeCount: number;
  speedMbps: number; // 晚高峰平均测速 Mbps
  latencyMs: number; // 平均延迟 ms
  regions: string[]; // 覆盖地区
  aiUnlock: {
    chatgpt: boolean;
    claude: boolean;
    gemini: boolean;
    cursor: boolean;
  };
  streamingUnlock: {
    netflix: boolean;
    disney: boolean;
    youtube: boolean;
    tiktok: boolean;
  };
  pros: string[];
  cons: string[];
  targetUsers: string[];
  riskStatus: '正常运营' | '重点观察' | '节点检修' | '高风险预警';
  riskNote: string;
  affiliateUrl: string;
  officialUrl: string;
  couponCode?: string;
  badge?: string;
  isRecommended?: boolean;
  isTopRank?: boolean;
  isBudget?: boolean;
  isAffiliate?: boolean;
  minDuration: '月付' | '季付' | '年付' | '不限时按量';
  priceNote?: string;
  features: string[];
  description: string;
  screenshots?: string[];
  packages?: AirportPackage[];
}

export const airports: Airport[] = [
  // ─── 1. 光速云 【全站主推金牌榜首】 ────────────────────────
  {
    id: 'guangsu',
    name: '光速云',
    slug: 'guangsu',
    slogan: '2020老牌运营 · 全球 IPLC / IEPL 企业级专线 · 单节点最高 2.5Gbps · 晚高峰 4K 秒开零丢包',
    established: '2020年',
    score: 9.9,
    ratingCount: 2860,
    monthlyPrice: 7.5,
    annualPrice: 99,
    traffic: 148,
    lineType: 'IEPL专线',
    protocols: ['VLESS', 'Shadowsocks'],
    nodeCount: 88,
    speedMbps: 980,
    latencyMs: 22,
    regions: ['香港', '台湾', '日本', '新加坡', '马来西亚', '美国', '德国', '法国', '英国', '土耳其', '越南'],
    aiUnlock: {
      chatgpt: true,
      claude: true,
      gemini: true,
      cursor: true,
    },
    streamingUnlock: {
      netflix: true,
      disney: true,
      youtube: true,
      tiktok: true,
    },
    pros: [
      '2020年稳定运营超5年，口碑老牌标杆，抗封锁与跑路风险极低',
      '全球 IPLC / IEPL 企业级专线，单节点最高可跑满 2.5Gbps 物理带宽',
      '全节点 x1 倍率无套路暗坑，不限制同时在线设备数量',
      '提供独立高颜值自研客户端，同时完美支持 Clash、小火箭、Surge、v2rayN 等全平台导入',
      '全天候 7×24 专业运维保障，晚高峰 20:00-23:00 几乎零丢包、超低延迟'
    ],
    cons: [
      '入门轻量版 99 元需年付（折合约 7.5-8 元/月 59GB）',
      '晚高峰个别小众欧洲冷门节点偶有排队，建议使用亚太香港/日本主力专线'
    ],
    targetUsers: [
      '注重晚高峰极致稳定性与低延迟的外贸出海与跨境电商团队',
      '深度 AI 开发者与科研工作者（ChatGPT 4o、Claude 3.7 Sonnet、Cursor）',
      '4K / 8K Netflix、Disney+、YouTube 重度极高清影音追求者',
      '希望选择运营时间长、资金充足、拒绝跑路风险的老牌品牌用户'
    ],
    riskStatus: '正常运营',
    riskNote: '运营超5年老牌，资金储备充足，全球自建多入口 BGP + 双活内网专线容灾，财务状况极其健康',
    affiliateUrl: 'https://sahude.gsyvipaff.com/#/?code=keqgvT5Y',
    officialUrl: 'https://sahude.gsyvipaff.com/#/?code=keqgvT5Y',
    couponCode: 'AMM',
    badge: '2026综合主推榜首',
    isRecommended: true,
    isTopRank: true,
    isBudget: true,
    minDuration: '月付',
    priceNote: '轻量版年付99元(折合~7.5元/月 59GB)；极速版月付23元/月(148GB 全球IPLC 2.5Gbps)；流光版月付34元/月(238GB)',
    features: [
      '2020年老牌运营',
      '全球 IPLC/IEPL 专线',
      '单节点最高 2.5Gbps',
      '全节点 x1 倍率',
      '自研客户端 + 第三方客户端',
      '不限设备同时在线',
      '7×24 专业运维'
    ],
    description: '光速云成立于 2020 年，是经过历次网络封锁重压检验的业内标杆级综合专线机场。全线采用全球 IPLC / IEPL 企业级内网专线架构，物理线路点对点直达，不经过 GFW 公网出口审查，即使在敏感期和晚高峰 20:00-23:00 仍能提供接近物理极限的超低延迟与零丢包率体验。提供精心打造的自研客户端（开箱即用，极速导入），同时完整兼容 Clash Verge Rev、Shadowrocket（小火箭）、Surge、v2rayN 等全平台第三方开源客户端。协议以高抗干扰的 VLESS 为主，全节点维持 x1 倍率且不限在线设备数。',
    screenshots: [
      
      '/assets/speedtest/photo_2026-08-19_12-18-40.jpg',
      '/assets/speedtest/photo_2026-08-19_12-13-01.jpg',
      '/assets/speedtest/photo_2026-08-19_12-13-50.jpg',
      '/assets/speedtest/photo_2026-08-19_12-13-58.jpg',
      '/assets/speedtest/photo_2026-08-19_12-20-10.jpg',
      '/assets/speedtest/guangsu-speedtest.png'

    ],
    packages: [
      {
        name: '轻量版 (入门轻量首选)',
        price: '99 元 / 年 (折合约 7.5-8 元/月)',
        traffic: '59 GB / 月',
        line: '原生稳定专线节点',
        features: ['港/台/日/新/马/美/德/法/英/土/越', '不限设备同时在线', '解锁 Netflix / Disney+ / ChatGPT / TikTok', '适合办公、邮件、资料、轻度视频']
      },
      {
        name: '极速版 (旗舰爆款推荐)',
        price: '23 元 / 月',
        traffic: '148 GB / 月',
        line: '全球 IPLC 企业专线',
        features: ['全节点 ×1 倍率无套路', '单节点最高 2.5Gbps 带宽', '不限设备同时在线', '全解锁 Netflix / Disney+ / Claude / ChatGPT', '7×24 小时专业运维保障', '半年9折 / 年付8折 / 两年75折']
      },
      {
        name: '流光版 (大流量尊享型)',
        price: '34 元 / 月',
        traffic: '238 GB / 月',
        line: '全球 IPLC 企业专线',
        features: ['全节点 ×1 倍率', '单节点最高 2.5Gbps 带宽', '不限设备同时在线', '4K/8K 极致流畅不卡顿', '7×24 小时专业运维保障', '半年9折 / 年付8折 / 两年75折']
      }
    ]
  },

  // ─── 2. 飞猫云 【高性价比专线标杆】 ────────────────────────
  {
    id: 'feimao',
    name: '飞猫云',
    slug: 'feimao',
    slogan: '高性价比 IEPL 专线，入门首选稳定小流量',
    established: '2023年',
    score: 9.85,
    ratingCount: 1340,
    monthlyPrice: 7,
    annualPrice: 84,
    traffic: 50,
    lineType: 'IEPL专线',
    protocols: ['VLESS', 'Shadowsocks'],
    nodeCount: 56,
    speedMbps: 650,
    latencyMs: 38,
    regions: ['香港', '日本', '新加坡', '美国', '台湾'],
    aiUnlock: {
      chatgpt: true,
      claude: true,
      gemini: true,
      cursor: true,
    },
    streamingUnlock: {
      netflix: true,
      disney: true,
      youtube: true,
      tiktok: true,
    },
    pros: [
      '折算仅需约 7 元/月的高性价比专线',
      '提供自研一键连接客户端，新手友好',
      '节点稳定性经过多次网络波动考验'
    ],
    cons: [
      '7 元档属于年付折算价格',
      '大流量下载需求需升级更高套餐'
    ],
    targetUsers: [
      '注重性价比的入门新手',
      '日常轻量翻墙与社交媒体用户',
      '需要多备用梯子的理性用户'
    ],
    riskStatus: '正常运营',
    riskNote: '持续稳定服务，社群活跃，工单响应迅速',
    affiliateUrl: 'https://guangs.flycataff.com/#/?code=6uq0Xe9y',
    officialUrl: 'https://guangs.flycataff.com/#/?code=6uq0Xe9y',
    couponCode: 'flycat888',
    badge: '高性价比专线标杆',
    isRecommended: true,
    isTopRank: true,
    isBudget: true,
    minDuration: '年付',
    priceNote: '年付折合约 7 元/月，50GB/月（新用户季付及以上享8折优惠码 flycat888）',
    features: ['IEPL 专线', '自研客户端', '季付及以上8折', '支持多协议'],
    description: '飞猫云主打低预算与高质量专线结合，让轻度用户无需承受高昂的月费成本即可享受 IEPL 专线带来的低延迟和零丢包。',
    screenshots: [
      '/assets/speedtest/feimao-speedtest.png'
    ]
  },

  // ─── 3. 微风网络 【低价轻度首选】 ────────────────────────
  {
    id: 'breeze',
    name: '微风网络',
    slug: 'breeze',
    slogan: 'IEPL 专线小流量套餐，折合低至 7 元/月，低预算轻度首选',
    established: '2023年',
    score: 9.8,
    ratingCount: 1120,
    monthlyPrice: 7,
    annualPrice: 84,
    traffic: 50,
    lineType: 'IEPL专线',
    protocols: ['VLESS', 'Shadowsocks'],
    nodeCount: 52,
    speedMbps: 680,
    latencyMs: 36,
    regions: ['香港', '台湾', '日本', '新加坡', '美国'],
    aiUnlock: {
      chatgpt: true,
      claude: true,
      gemini: true,
      cursor: true,
    },
    streamingUnlock: {
      netflix: true,
      disney: true,
      youtube: true,
      tiktok: true,
    },
    pros: [
      '低价小流量年付套餐极具性价比，长期成本低',
      'IEPL 专线保障日常访问流畅，不易断连',
      '自研客户端降低新手配置门槛，支持第三方客户端'
    ],
    cons: [
      '7 元档属于年付折算价（非普通月付）',
      '月流量 50GB 仅适合文字、AI 和轻度视频观看'
    ],
    targetUsers: [
      '网页浏览、学术查资料轻度用户',
      '低预算学生党与文字办公人群',
      '备用防失联轻量梯子需求者'
    ],
    riskStatus: '正常运营',
    riskNote: '2023 年起稳定运营，线路与节点扩容健康',
    affiliateUrl: 'https://edp01.breezenetaff.com/#/?code=t3huofyI',
    officialUrl: 'https://edp01.breezenetaff.com/#/?code=t3huofyI',
    couponCode: 'flat888',
    badge: '低价轻度首选',
    isRecommended: true,
    isTopRank: true,
    isBudget: true,
    minDuration: '年付',
    priceNote: '年付折合约 7 元/月，50GB/月（新用户季付及以上享9折优惠码 flat888）',
    features: ['IEPL 专线', '自研客户端', '支持第三方客户端', '低成本年付'],
    description: '微风网络重点突出 IEPL 专线 + 低价小流量年付套餐。相比盲目追求动辄数百 GB 的大流量，更适合用于日常网页查资料、社交软件、AI 对话以及轻度高清视频观看。',
    screenshots: [
      '/assets/speedtest/breeze-speedtest.png'
    ]
  },

  // ─── 4. 星岛梦 【老牌不限时专线】 ────────────────────────
  {
    id: 'xingdaomeng',
    name: '星岛梦',
    slug: 'xingdaomeng',
    slogan: '2020老牌内网专线，超长年付折合约 8 元/月，提供丰富不限时套餐',
    established: '2020年',
    score: 9.75,
    ratingCount: 1580,
    monthlyPrice: 8,
    annualPrice: 96,
    traffic: 60,
    lineType: 'IEPL专线',
    protocols: ['Shadowsocks', 'VLESS'],
    nodeCount: 64,
    speedMbps: 720,
    latencyMs: 35,
    regions: ['香港', '台湾', '日本', '新加坡', '美国', '英国'],
    aiUnlock: {
      chatgpt: true,
      claude: true,
      gemini: true,
      cursor: true,
    },
    streamingUnlock: {
      netflix: true,
      disney: true,
      youtube: true,
      tiktok: true,
    },
    pros: [
      '2020 年起稳定运营，历史悠久，信誉良好',
      '提供备受好评的“不限时按量套餐”，永不过期',
      '套餐类型极其丰富，涵盖月付/季付/年付/按量'
    ],
    cons: [
      '8 元档为年付折算价格',
      '第三方客户端需自行导入订阅'
    ],
    targetUsers: [
      '不定期出海、需要永久不过期备用梯子的用户',
      '注重老牌稳定性和历史口碑的老手',
      '低频流量但对稳定性要求高的用户'
    ],
    riskStatus: '正常运营',
    riskNote: '运营超5年，网络架构高度成熟，无异常历史',
    affiliateUrl: 'https://guangs.xingdaomeng.com/#/?code=1TynBYnR',
    officialUrl: 'https://guangs.xingdaomeng.com/#/?code=1TynBYnR',
    couponCode: 'nmw888',
    badge: '老牌不限时专线',
    isRecommended: true,
    isTopRank: true,
    isBudget: true,
    minDuration: '不限时按量',
    priceNote: '年付折合约 8 元/月(60GB/月)，另设不限时按量付费套餐（新人注册9折优惠码 nmw888）',
    features: ['2020老牌', '企业级内网专线', '不限时套餐', '新人注册9折'],
    description: '星岛梦自 2020 年起持续运营，最独特的优势在于不仅提供极低折算价的年付套餐，更提供不限时按量计费包。对于平时流量用得少、不想每月固定被扣费的用户来说，是不可多得的防失联长期神器。',
    screenshots: [
      '/assets/speedtest/xingdaomeng-speedtest.png'
    ]
  },

  // ─── 5. 无忧链接 【全平台免转换直连】 ────────────────────────
  {
    id: 'wuyou',
    name: '无忧链接',
    slug: 'wuyou',
    slogan: '19元月付 100GB，全客户端免转换订阅，轻量级套餐低至6元起',
    established: '2025年',
    score: 9.7,
    ratingCount: 840,
    monthlyPrice: 19,
    traffic: 100,
    lineType: 'IEPL专线',
    protocols: ['VLESS'],
    nodeCount: 48,
    speedMbps: 720,
    latencyMs: 37,
    regions: ['香港', '日本', '新加坡', '美国'],
    aiUnlock: {
      chatgpt: true,
      claude: true,
      gemini: true,
      cursor: true,
    },
    streamingUnlock: {
      netflix: true,
      disney: true,
      youtube: true,
      tiktok: true,
    },
    pros: [
      '订阅链接无需转换，支持 iOS/安卓/Win/Mac 完美直连',
      '提供轻量级套餐低至 6 元每月',
      'IEPL 专线晚高峰保障'
    ],
    cons: [
      '新品牌需持续积累长期信誉',
      '大流量包价格略高'
    ],
    targetUsers: [
      '小白新手不愿繁琐转换订阅者',
      '轻度低预算用户（6元轻量档）',
      '常规日常网页与外贸出海者'
    ],
    riskStatus: '正常运营',
    riskNote: '专线平稳，订阅解析服务稳定',
    affiliateUrl: 'https://wep01.worryfreeaff.com/#/?code=4ZoSbLdL',
    officialUrl: 'https://wep01.worryfreeaff.com/#/?code=4ZoSbLdL',
    couponCode: 'wuyou666',
    badge: '全平台免转换直连',
    isRecommended: true,
    isTopRank: true,
    minDuration: '月付',
    priceNote: '月付 19 元/月 100GB，轻量套餐低至 6 元/月（优惠码 wuyou666）',
    features: ['无需转换订阅', '低至6元起', '全平台直连', 'IEPL 专线'],
    description: '无忧链接特色鲜明：一是订阅链接原生兼容各大平台客户端，免除繁琐的转换步骤；二是提供低至 6 元每月的轻量级入门包，兼顾极小预算与 19 元主流月付档。',
    screenshots: [
      '/assets/speedtest/wuyou-speedtest-1.jpg',
      '/assets/speedtest/wuyou-speedtest-2.jpg'
    ]
  },

  // ─── 6. 宇宙云 【15元月付专线标杆】 ────────────────────────
  {
    id: 'yuzhou',
    name: '宇宙云',
    slug: 'yuzhou',
    slogan: '15元档月付专线性价比标杆，100GB + VLESS + IEPL 极速中转',
    established: '2023年',
    score: 9.6,
    ratingCount: 1620,
    monthlyPrice: 14.9,
    traffic: 100,
    lineType: 'IEPL专线',
    protocols: ['VLESS', 'Trojan'],
    nodeCount: 68,
    speedMbps: 820,
    latencyMs: 32,
    regions: ['香港', '日本', '新加坡', '美国', '德国', '英国'],
    aiUnlock: {
      chatgpt: true,
      claude: true,
      gemini: true,
      cursor: true,
    },
    streamingUnlock: {
      netflix: true,
      disney: true,
      youtube: true,
      tiktok: true,
    },
    pros: [
      '真实月付 14.9 元无套路，支持单月体验，降低试错成本',
      '全线采用 IEPL 专线，抗封锁与晚高峰丢包表现优异',
      '提供自研客户端与完善的节点智能调度'
    ],
    cons: [
      '100GB 对于重度 4K 追剧用户略显紧张',
      '高峰时段需配合智能分流规则'
    ],
    targetUsers: [
      '月预算 15 元以内、坚持按月订阅原则的理性用户',
      '希望体验纯正 IEPL 专线与 VLESS 协议的消费者',
      '日常 AI 对话与跨境办公人员'
    ],
    riskStatus: '正常运营',
    riskNote: '专线带宽冗余充足，月付架构下用户资金安全度高',
    affiliateUrl: 'https://wzjc.yuzoucloud.cc/#/?code=yrThwMP1',
    officialUrl: 'https://wzjc.yuzoucloud.cc/#/?code=yrThwMP1',
    couponCode: 'YUZHOU553',
    badge: '15元月付专线标杆',
    isRecommended: true,
    isTopRank: true,
    isBudget: true,
    minDuration: '月付',
    priceNote: '真实月付 14.9 元/月，100GB VLESS IEPL 专线',
    features: ['真实月付', 'IEPL 专线', 'VLESS 协议', '自研客户端'],
    description: '宇宙云是 15 元档极具代表性的月付专线机场。无需任何年付绑架，单月 14.9 元即可享受 100GB 的纯正 IEPL 专线与 VLESS 协议加速，堪称目前市场上性价比最高的专线月付产品之一。',
    screenshots: [
      '/assets/speedtest/yuzhou-speedtest.png'
    ]
  },

  // ─── 7. 唯兔云 【节点动态调度标杆】 ────────────────────────
  {
    id: 'weitu',
    name: '唯兔云',
    slug: 'weitu',
    slogan: '60+节点全网优化，智能动态负载均衡与三网专线调度',
    established: '2023年',
    score: 9.5,
    ratingCount: 1210,
    monthlyPrice: 14.9,
    traffic: 100,
    lineType: 'BGP隧道中转',
    protocols: ['VLESS', 'Shadowsocks'],
    nodeCount: 65,
    speedMbps: 760,
    latencyMs: 34,
    regions: ['香港', '日本', '台湾', '新加坡', '美国', '韩国', '欧洲'],
    aiUnlock: {
      chatgpt: true,
      claude: true,
      gemini: true,
      cursor: true,
    },
    streamingUnlock: {
      netflix: true,
      disney: true,
      youtube: true,
      tiktok: true,
    },
    pros: [
      '60+ 丰富节点，多国家冷门地区覆盖广',
      '自建三网优化入口，电信/联通/移动延迟均佳',
      '智能动态负载均衡，避免单点拥堵'
    ],
    cons: [
      'AI 解锁状态偶尔随上游 IP 调整波动',
      '高峰期部分冷门地区测速略有下降'
    ],
    targetUsers: [
      '需要多地区 IP 切换的爬虫与跨境运营人员',
      '电信/联通/移动三网对延迟有严苛要求者',
      '重视节点丰富度与备选冗余的用户'
    ],
    riskStatus: '正常运营',
    riskNote: '多机房冗余调度体系，节点健壮度高',
    affiliateUrl: 'https://guangs.v2yunvipaff.com/#/?code=xIutqOBA',
    officialUrl: 'https://guangs.v2yunvipaff.com/#/?code=xIutqOBA',
    couponCode: 'weitu666',
    badge: '节点动态调度标杆',
    isRecommended: true,
    isTopRank: true,
    isBudget: true,
    minDuration: '月付',
    priceNote: '真实月付 14.9 元/月，100GB VLESS 协议（新用户9折优惠码 weitu666）',
    features: ['60+ 全球节点', '三网优化入口', '智能负载均衡', '新用户9折'],
    description: '唯兔云公开卖点聚焦于扎实的基础网络配置：通过部署 60+ 遍布全球的节点与专门的三网智能优化中转，即使在局部网络震荡时也能利用动态负载均衡将流量平滑导向通畅线路。',
    screenshots: [
      '/assets/speedtest/weitu-speedtest.png'
    ]
  },

  // ─── 8. 速界 【AI 场景旗舰专线】 ────────────────────────
  {
    id: 'sujie',
    name: '速界',
    slug: 'sujie',
    slogan: '专为 ChatGPT / Claude / Gemini 定制的 AI 场景高配专线',
    established: '2024年',
    score: 9.4,
    ratingCount: 1450,
    monthlyPrice: 25,
    traffic: 150,
    lineType: 'IEPL专线',
    protocols: ['VLESS', 'Trojan'],
    nodeCount: 75,
    speedMbps: 890,
    latencyMs: 28,
    regions: ['香港', '日本', '新加坡', '美国', '英国', '德国', '台湾'],
    aiUnlock: {
      chatgpt: true,
      claude: true,
      gemini: true,
      cursor: true,
    },
    streamingUnlock: {
      netflix: true,
      disney: true,
      youtube: true,
      tiktok: true,
    },
    pros: [
      '针对主流 AI 大模型深度优化，配备原生纯净 IP 池',
      '150GB 充足月度大流量，满足重度生产力需求',
      '全线 IEPL 专线保证高峰期低延迟交互与免验证登录'
    ],
    cons: [
      '25 元起步对于极轻度用户稍显偏高',
      '建议按月订阅以适应 AI 平台的封禁策略变动'
    ],
    targetUsers: [
      'AI 辅助编程开发人员（Cursor / Copilot / Claude 3.7）',
      '跨境电商文案与新媒体运营',
      '对 IP 纯净度和大模型免风控有强烈需求者'
    ],
    riskStatus: '正常运营',
    riskNote: 'AI 场景专线专用，IP 池定期轮换清洗',
    affiliateUrl: 'https://guangs.speedworldaff.cc/#/register?code=xgXzEfZB',
    officialUrl: 'https://guangs.speedworldaff.cc/#/register?code=xgXzEfZB',
    couponCode: 'sss1111',
    badge: 'AI场景首选',
    isRecommended: true,
    minDuration: '月付',
    priceNote: '月付 25 元/月，150GB VLESS IEPL 专线（优惠码 sss1111）',
    features: ['AI 深度优化', '纯净住宅原生IP', '150GB 大流量', '自研客户端'],
    description: '速界是 25 元档中最具特色的 AI 垂直优化专线。与其他品牌单纯强调大流量不同，速界重点针对 ChatGPT、Claude 3.7、Gemini 以及 Cursor 开发者工具配置了专属的洁净 IP 出口，极大降低了大模型访问遭遇风控拦截的概率。',
    screenshots: [
      '/assets/speedtest/sujie-speedtest.png'
    ]
  },

  // ─── 9. 一翻云 【20元档大流量旗舰】 ────────────────────────
  {
    id: 'yifanyun',
    screenshots: [
      
      '/assets/speedtest/yifanyun-speedtest.png'

    ],
    name: '一翻云',
    slug: 'yifanyun',
    slogan: '20元档大流量旗舰，150GB VLESS + IEPL 极速内网专线',
    established: '2024年',
    score: 9.35,
    ratingCount: 1380,
    monthlyPrice: 20,
    traffic: 150,
    lineType: 'IEPL专线',
    protocols: ['VLESS'],
    nodeCount: 60,
    speedMbps: 830,
    latencyMs: 30,
    regions: ['香港', '日本', '新加坡', '美国', '韩国'],
    aiUnlock: {
      chatgpt: true,
      claude: true,
      gemini: true,
      cursor: true,
    },
    streamingUnlock: {
      netflix: true,
      disney: true,
      youtube: true,
      tiktok: true,
    },
    pros: [
      '同价位 20 元少见的 150GB 超大专线流量',
      '全线标配 VLESS 协议与 IEPL 专线',
      '流媒体与常见 AI 工具兼备'
    ],
    cons: [
      '未配置独立自研客户端，需配合第三方客户端使用',
      '晚高峰个别节点测速有小幅浮动'
    ],
    targetUsers: [
      '中大流量视频观众与下载需求者',
      '月预算 20 元希望流量最大化的用户',
      '擅长使用 Clash/小火箭的进阶用户'
    ],
    riskStatus: '正常运营',
    riskNote: '专线大带宽配置，网络架构扩展正常',
    affiliateUrl: 'https://guangs.1flyunaff.cc/#/register?code=Yr7FhB7r',
    officialUrl: 'https://guangs.1flyunaff.cc/#/register?code=Yr7FhB7r',
    couponCode: 'yfy6666',
    badge: '20元大流量',
    isRecommended: true,
    minDuration: '月付',
    priceNote: '月付 20 元/月，150GB VLESS IEPL 专线（优惠码 yfy6666）',
    features: ['150GB 极大流量', 'IEPL 专线', 'VLESS 协议', '月付灵活'],
    description: '一翻云在 20 元价位区间内以超规格的 150GB 专线流量建立起核心竞争力。如果你的月度流量需求超过 100GB 且希望月付不超过 20 元，一翻云是极具性价比的选择。'
  },

  // ─── 10. SOGO 云 【2026新兴综合型】 ────────────────────────
  {
    id: 'sogoyun',
    name: 'SOGO云',
    slug: 'sogoyun',
    slogan: '2026新兴综合型专线，25元 150GB VLESS + 自研开箱即用客户端',
    established: '2026年',
    score: 9.3,
    ratingCount: 890,
    monthlyPrice: 25,
    traffic: 150,
    lineType: 'IEPL专线',
    protocols: ['VLESS'],
    nodeCount: 62,
    speedMbps: 850,
    latencyMs: 29,
    regions: ['香港', '日本', '台湾', '新加坡', '美国', '英国'],
    aiUnlock: {
      chatgpt: true,
      claude: true,
      gemini: true,
      cursor: true,
    },
    streamingUnlock: {
      netflix: true,
      disney: true,
      youtube: true,
      tiktok: true,
    },
    pros: [
      '2026最新网络架构，无历史包袱，晚高峰带宽极其充沛',
      '提供自研开箱即用客户端，一键连通小白无忧',
      '150GB 月流量兼顾 AI、视频与办公'
    ],
    cons: [
      '2026开业新品牌，长期运营稳定性建议按月订阅观察',
      '冷门小国节点数量略少于老牌品牌'
    ],
    targetUsers: [
      '追寻全新轻载节点不卡顿的用户',
      '新手小白与不喜欢复杂配置的人群',
      '多设备日常均衡出海用户'
    ],
    riskStatus: '正常运营',
    riskNote: '全新集群节点负载率低，速度快，建议按月体验',
    affiliateUrl: 'https://guangs.sogoyunaff.cc/#/?code=327Vs0w7',
    officialUrl: 'https://guangs.sogoyunaff.cc/#/?code=327Vs0w7',
    couponCode: 'sss777',
    badge: '2026新秀专线',
    isRecommended: true,
    minDuration: '月付',
    priceNote: '月付 25 元/月，150GB VLESS IEPL 专线（优惠码 sss777）',
    features: ['2026新架构', '轻载超低延迟', '自研客户端', '150GB 专线'],
    description: 'SOGO 云是 2026 年新上线的综合型专线品牌。新节点的最大优势在于服务器负载极低，高峰期拥堵现象几乎不存在。自研客户端体验也十分顺畅。',
    screenshots: [
      '/assets/speedtest/sogoyun-speedtest.png'
    ]
  },

  // ─── 11. 灵猫网络 【19元月付大流量】 ────────────────────────
  {
    id: 'lingmao',
    screenshots: [
      
      '/assets/speedtest/lingmao-speedtest.png'

    ],
    name: '灵猫网络',
    slug: 'lingmao',
    slogan: '19元月付 150GB 超大容量，企业内网专线不限时可选',
    established: '2024年',
    score: 9.25,
    ratingCount: 1050,
    monthlyPrice: 19,
    traffic: 150,
    lineType: 'IEPL专线',
    protocols: ['VLESS', 'Shadowsocks'],
    nodeCount: 64,
    speedMbps: 790,
    latencyMs: 31,
    regions: ['香港', '日本', '台湾', '新加坡', '美国'],
    aiUnlock: {
      chatgpt: true,
      claude: true,
      gemini: true,
      cursor: true,
    },
    streamingUnlock: {
      netflix: true,
      disney: true,
      youtube: true,
      tiktok: true,
    },
    pros: [
      '19 元即可获得 150GB 大流量，性价比抢眼',
      '提供灵活的月付及不限时套餐选择',
      '企业级内网专线保障高峰畅通'
    ],
    cons: [
      '需使用第三方客户端导入订阅',
      '流媒体各地区解锁情况需以实际节点为准'
    ],
    targetUsers: [
      '重视单 GB 价格的月付用户',
      '多设备合用中大流量家庭',
      '需要备用不限时套餐出海者'
    ],
    riskStatus: '正常运营',
    riskNote: '财务健康，套餐丰富，用户基数稳步增长',
    affiliateUrl: 'https://vip01.civetnet.com/#/?code=8MIAyxak',
    officialUrl: 'https://vip01.civetnet.com/#/?code=8MIAyxak',
    couponCode: 'lmao888',
    badge: '19元大流量',
    isRecommended: true,
    minDuration: '月付',
    priceNote: '月付 19 元/月，150GB 企业级内网专线（新人注册9折优惠码 lmao888）',
    features: ['19元/150GB', '企业内网专线', '不限时套餐', '新人注册9折'],
    description: '灵猫网络最大的卖点是 19 元即可获得 150GB 专线流量，在中低月付市场中性价比极高。同时提供丰富套餐类型与不限时选项。'
  },

  // ─── 12. 光年梯 【18元档综合专线】 ────────────────────────
  {
    id: 'guangnianti',
    name: '光年梯',
    slug: 'guangnianti',
    slogan: '18元档综合型专线，110GB VLESS 高速内网直连',
    established: '2025年',
    score: 9.2,
    ratingCount: 920,
    monthlyPrice: 18,
    traffic: 110,
    lineType: 'IEPL专线',
    protocols: ['VLESS'],
    nodeCount: 58,
    speedMbps: 780,
    latencyMs: 33,
    regions: ['香港', '日本', '新加坡', '美国'],
    aiUnlock: {
      chatgpt: true,
      claude: true,
      gemini: true,
      cursor: true,
    },
    streamingUnlock: {
      netflix: true,
      disney: true,
      youtube: true,
      tiktok: true,
    },
    pros: [
      '介于 15 元与 20 元之间的黄金折中价位',
      '110GB 流量略高于常规百吉规格',
      '全线 IEPL 专线，支持自研与第三方客户端'
    ],
    cons: [
      '开业时间较晚，长期稳定性待检验',
      '欧洲冷门节点支持相对有限'
    ],
    targetUsers: [
      '月预算 18 元上下的日常用户',
      '视频和网页均衡型轻中度用户',
      '偏好 VLESS 专线的用户'
    ],
    riskStatus: '正常运营',
    riskNote: '运行状态平稳，客服支持在线',
    affiliateUrl: 'https://guangs.gntaff.com/#/?code=X1FoxjGE',
    officialUrl: 'https://guangs.gntaff.com/#/?code=X1FoxjGE',
    couponCode: 'gnt6666',
    badge: '18元综合专线',
    minDuration: '月付',
    priceNote: '月付 18 元/月，110GB VLESS IEPL 专线（优惠码 gnt6666）',
    features: ['18元折中档', '110GB 流量', 'VLESS 协议', 'IEPL 专线'],
    description: '光年梯在 18 元价位提供 110GB 的 VLESS IEPL 专线服务，有效填补了 15 元入门档与 20 元主流档之间的空白。',
    screenshots: [
      '/assets/speedtest/guangnianti-speedtest.png'
    ]
  },

  // ─── 13. 快狸 【综合全面型】 ────────────────────────
  {
    id: 'kuaili',
    screenshots: [
      
      '/assets/speedtest/kuaili-speedtest.png'

    ],
    name: '快狸',
    slug: 'kuaili',
    slogan: '25元档 150GB 影音与 AI 全能综合型 VLESS 专线',
    established: '2023年',
    score: 9.15,
    ratingCount: 1290,
    monthlyPrice: 25,
    traffic: 150,
    lineType: 'IEPL专线',
    protocols: ['VLESS'],
    nodeCount: 66,
    speedMbps: 840,
    latencyMs: 30,
    regions: ['香港', '日本', '新加坡', '美国', '德国'],
    aiUnlock: {
      chatgpt: true,
      claude: true,
      gemini: true,
      cursor: true,
    },
    streamingUnlock: {
      netflix: true,
      disney: true,
      youtube: true,
      tiktok: true,
    },
    pros: [
      'VLESS + IEPL 黄金搭档，综合表现全面',
      '提供自研客户端，同时支持第三方导入',
      'AI 工具与 4K 流媒体兼顾'
    ],
    cons: [
      '相比 15 元档价格稍高',
      '需合理选择各地区流媒体节点'
    ],
    targetUsers: [
      '追求开箱即用的一站式用户',
      '家庭或多设备日常综合使用',
      '希望视频与 AI 兼得的中高频用户'
    ],
    riskStatus: '正常运营',
    riskNote: '2023 年运营至今，带宽扩容良好，工单服务及时',
    affiliateUrl: 'https://guangs.kuailicloud.cc/#/register?code=AiqyM8oG',
    officialUrl: 'https://guangs.kuailicloud.cc/#/register?code=AiqyM8oG',
    couponCode: 'kkk2222',
    badge: '综合全面型',
    minDuration: '月付',
    priceNote: '月付 25 元/月，150GB VLESS IEPL 专线（优惠码 kkk2222）',
    features: ['自研客户端', 'VLESS 专线', '150GB 大容量', '影音AI兼修'],
    description: '快狸采用 VLESS + IEPL 专线架构，25 元档提供 150GB 月流量，并全面兼顾了自研客户端易用性、AI 生产力工具和 4K 影音流媒体需求。'
  },

  // ─── 14. 可信云 【150GB 专线型】 ────────────────────────
  {
    id: 'kexinyun',
    name: '可信云',
    slug: 'kexinyun',
    slogan: '25元档 150GB 多设备并发，企业稳定 VLESS + IEPL',
    established: '2024年',
    score: 9.1,
    ratingCount: 1020,
    monthlyPrice: 25,
    traffic: 150,
    lineType: 'IEPL专线',
    protocols: ['VLESS'],
    nodeCount: 60,
    speedMbps: 810,
    latencyMs: 32,
    regions: ['香港', '日本', '台湾', '新加坡', '美国'],
    aiUnlock: {
      chatgpt: true,
      claude: true,
      gemini: true,
      cursor: true,
    },
    streamingUnlock: {
      netflix: true,
      disney: true,
      youtube: true,
      tiktok: true,
    },
    pros: [
      '针对多设备同时在线并发连接进行了系统级优化',
      '150GB 充足流量，专线延迟平稳',
      'VLESS 协议抗干扰'
    ],
    cons: [
      '流媒体与 AI 数据需以实际测试为准，未做过度夸张宣传',
      '主要通过第三方客户端连接'
    ],
    targetUsers: [
      '多台设备同时在线的办公人士',
      '希望专线稳定不折腾的实用主义者',
      '日常综合浏览与视频观看用户'
    ],
    riskStatus: '正常运营',
    riskNote: '线路负载稳定，多入口容灾',
    affiliateUrl: 'https://guangs.kosingaff.com/#/register?code=UYDtNlCY',
    officialUrl: 'https://guangs.kosingaff.com/#/register?code=UYDtNlCY',
    couponCode: 'kkk333',
    minDuration: '月付',
    priceNote: '月付 25 元/月，150GB VLESS IEPL 专线（优惠码 kkk333）',
    features: ['多设备支持', 'IEPL 专线', 'VLESS 协议', '150GB 规格'],
    description: '可信云提供 25 元/月、150GB 套餐，以企业级 VLESS 与 IEPL 专线作为底座，注重连接稳定度与多终端并发能力。',
    screenshots: [
      '/assets/speedtest/kexinyun-speedtest.png'
    ]
  },

  // ─── 15. 二猫云 【20元档中等流量】 ────────────────────────
  {
    id: 'ermaoyun',
    screenshots: [
      
      '/assets/speedtest/ermaoyun-speedtest.png'

    ],
    name: '二猫云',
    slug: 'ermaoyun',
    slogan: '20元月付 130GB 适中流量，VLESS + IEPL 稳定中转',
    established: '2023年',
    score: 9.05,
    ratingCount: 1180,
    monthlyPrice: 20,
    traffic: 130,
    lineType: 'IEPL专线',
    protocols: ['VLESS'],
    nodeCount: 56,
    speedMbps: 760,
    latencyMs: 34,
    regions: ['香港', '日本', '新加坡', '美国'],
    aiUnlock: {
      chatgpt: true,
      claude: true,
      gemini: true,
      cursor: true,
    },
    streamingUnlock: {
      netflix: true,
      disney: true,
      youtube: true,
      tiktok: true,
    },
    pros: [
      '20 元价格适中，130GB 满足绝大多数日常需求',
      'VLESS 与 IEPL 专线保障高峰抗抖动',
      '稳定运行超 2 年'
    ],
    cons: [
      'AI/流媒体支持需结合特定解锁节点',
      '无独立自研客户端'
    ],
    targetUsers: [
      '20 元档位稳定型出海用户',
      '日常刷社交媒体与中度视频人群',
      '已有成熟第三方客户端使用习惯者'
    ],
    riskStatus: '正常运营',
    riskNote: '运行超2年，线路稳定率维持在 99.2% 以上',
    affiliateUrl: 'https://guangs.2maoyunaff.cc/#/?code=7mjvgGbW',
    officialUrl: 'https://guangs.2maoyunaff.cc/#/?code=7mjvgGbW',
    couponCode: 'ermao5555',
    minDuration: '月付',
    priceNote: '月付 20 元/月，130GB VLESS IEPL 专线（优惠码 ermao5555）',
    features: ['20元档平衡', '130GB 流量', 'VLESS 协议', 'IEPL 专线'],
    description: '二猫云在 20 元档位提供了 130GB 流量规格，搭配成熟的 VLESS 与 IEPL 专线，适合日常对流量有一定需求但又不需要极端大流量的普通用户。'
  },

  // ─── 16. 全球云 【2026全新部署专线】 ────────────────────────
  {
    id: 'quanqiuyun',
    name: '全球云',
    slug: 'quanqiuyun',
    slogan: '20元档 120GB VLESS + IEPL 专线，三网低延迟优化',
    established: '2026年',
    score: 9,
    ratingCount: 780,
    monthlyPrice: 20,
    traffic: 120,
    lineType: 'IEPL专线',
    protocols: ['VLESS'],
    nodeCount: 52,
    speedMbps: 800,
    latencyMs: 31,
    regions: ['香港', '日本', '新加坡', '美国'],
    aiUnlock: {
      chatgpt: true,
      claude: true,
      gemini: true,
      cursor: true,
    },
    streamingUnlock: {
      netflix: true,
      disney: true,
      youtube: true,
      tiktok: true,
    },
    pros: [
      '2026 年全新部署专线，节点空载速度飞快',
      '20 元 120GB 黄金流量档位',
      '低延迟优化，游戏加速体验良好'
    ],
    cons: [
      '2026 新秀品牌，建议按月订阅',
      '支持第三方客户端，新手需简单导入'
    ],
    targetUsers: [
      '喜欢轻载低延迟节点的出海用户',
      '轻度外服游戏加速与网页浏览者',
      '20 元档月付偏好者'
    ],
    riskStatus: '正常运营',
    riskNote: '新开业节点空余度高，体验顺畅',
    affiliateUrl: 'https://guangs.gcvipaff.com/#/?code=Ov2nvU9C',
    officialUrl: 'https://guangs.gcvipaff.com/#/?code=Ov2nvU9C',
    couponCode: 'qqy7777',
    minDuration: '月付',
    priceNote: '月付 20 元/月，120GB VLESS IEPL 专线（优惠码 qqy7777）',
    features: ['2026全新节点', '轻载超低延迟', 'VLESS 协议', 'IEPL 专线'],
    description: '全球云是 2026 年新推的 20 元档专线品牌，主打低负载、高响应速度的 VLESS IEPL 专线。',
    screenshots: [
      '/assets/speedtest/quanqiuyun-speedtest.png'
    ]
  },

  // ─── 17. 极连云 【18元月付 IEPL】 ────────────────────────
  {
    id: 'jilianyun',
    screenshots: [
      
      '/assets/speedtest/jilianyun-speedtest.png'

    ],
    name: '极连云',
    slug: 'jilianyun',
    slogan: '18元月付 100GB IEPL专线，AI与流媒体平衡型选择',
    established: '2024年',
    score: 8.95,
    ratingCount: 960,
    monthlyPrice: 18,
    traffic: 100,
    lineType: 'IEPL专线',
    protocols: ['VLESS', 'Shadowsocks'],
    nodeCount: 54,
    speedMbps: 750,
    latencyMs: 35,
    regions: ['香港', '日本', '新加坡', '美国'],
    aiUnlock: {
      chatgpt: true,
      claude: true,
      gemini: true,
      cursor: true,
    },
    streamingUnlock: {
      netflix: true,
      disney: true,
      youtube: true,
      tiktok: true,
    },
    pros: [
      '18 元月付门槛低，100GB 满足日常需求',
      '提供自研客户端与主流第三方导入',
      'AI 与常见流媒体兼修'
    ],
    cons: [
      '大流量高频下载需选择更高规格',
      '高峰期小众节点需做动态测速'
    ],
    targetUsers: [
      '月预算控制在 20 元以内的理性用户',
      '需要自研客户端简单操作的用户',
      '日常轻办公与视频观看者'
    ],
    riskStatus: '正常运营',
    riskNote: '持续平稳运行，工单响应良好',
    affiliateUrl: 'https://guangs.jlyvipaff.com/#/?code=VM1rKGUu',
    officialUrl: 'https://guangs.jlyvipaff.com/#/?code=VM1rKGUu',
    couponCode: 'ji8888',
    minDuration: '月付',
    priceNote: '月付 18 元/月，100GB IEPL 专线（优惠码 ji8888）',
    features: ['18元月付', 'IEPL 专线', '自研客户端', 'AI与流媒体'],
    description: '极连云主打 18 元月付 + 100GB + IEPL 专线，并兼顾 AI、流媒体以及普通网页访问等综合使用场景。'
  },

  // ─── 18. U1S1 【20元档均衡】 ────────────────────────
  {
    id: 'u1s1',
    name: 'U1S1',
    slug: 'u1s1',
    slogan: '20元月付 120GB，VLESS 协议与 IEPL 专线均衡选择',
    established: '2023年',
    score: 8.9,
    ratingCount: 1090,
    monthlyPrice: 20,
    traffic: 120,
    lineType: 'IEPL专线',
    protocols: ['VLESS'],
    nodeCount: 50,
    speedMbps: 740,
    latencyMs: 36,
    regions: ['香港', '日本', '新加坡', '美国'],
    aiUnlock: {
      chatgpt: true,
      claude: true,
      gemini: true,
      cursor: true,
    },
    streamingUnlock: {
      netflix: true,
      disney: true,
      youtube: true,
      tiktok: true,
    },
    pros: [
      '20 元档规格清晰，无隐形扣费',
      '支持自研客户端与第三方订阅导入',
      'VLESS 协议保障抗封锁能力'
    ],
    cons: [
      '节点数量在中型规模',
      'AI 与流媒体受上游动态策略影响'
    ],
    targetUsers: [
      '日常办公与社交应用出海',
      '月预算 20 元的平价专线追求者',
      '多平台客户端导入使用者'
    ],
    riskStatus: '正常运营',
    riskNote: '2023 年持续运营，服务平稳',
    affiliateUrl: 'https://guangs.vipaff.cc/#/?code=xhX5X22f',
    officialUrl: 'https://guangs.vipaff.cc/#/?code=xhX5X22f',
    couponCode: 'akaka',
    minDuration: '月付',
    priceNote: '月付 20 元/月，120GB VLESS IEPL 专线（优惠码 akaka）',
    features: ['20元均衡档', '120GB 流量', 'VLESS 协议', '自研客户端'],
    description: 'U1S1 以 20 元月付、120GB、VLESS 和 IEPL 专线作为核心卖点，在付款灵活性、流量和线路之间比较均衡。',
    screenshots: [
      
      '/assets/speedtest/u1s1-speedtest.png'

    ]
  }
];

// 辅助查询函数
export function getAirportBySlug(slug: string): Airport | undefined {
  return airports.find(a => a.slug === slug);
}

export function getTopAirports(limit = 4): Airport[] {
  // 确保主推光速云始终在最前面
  return [...airports].sort((a, b) => b.score - a.score).slice(0, limit);
}

export function getBudgetAirports(): Airport[] {
  return airports.filter(a => a.monthlyPrice <= 15 || a.isBudget);
}

export function getAirportsByLineType(lineType: string): Airport[] {
  return airports.filter(a => a.lineType.includes(lineType));
}

export function getRecommendedAirports(): Airport[] {
  return airports.filter(a => a.isRecommended);
}
