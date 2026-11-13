// 机场品牌核心数据库 - 机场榜一 (jichangbang.org)
// 包含 42 家精选实测与档案收录机场品牌，以【光速云】为主推榜首旗舰（2026-10 完整核验版）

export interface AirportPackage {
  name: string;
  price: string;
  traffic: string;
  line: string;
  features: string[];
}

export interface AirportScreenshotMeta {
  src: string;
  caption: string;
  alt: string;
  testedAt?: string;
  toolFamily?: string;
  protocolDisplayed?: string;
  dataStatus: 'measured' | 'vendor';
  limitation?: string;
}

export interface AirportPackageRow {
  name: string;
  billingCycle: string;
  price: string;
  traffic: string;
  period: string;
}

export interface AirportRegionalSpeedtest {
  region: string;
  latency: string;
  download: string;
  testDate?: string;
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
  screenshotMeta?: AirportScreenshotMeta[];
  allPackages?: AirportPackageRow[];
  regionalSpeedtests?: AirportRegionalSpeedtest[];
  speedtestNote?: string;
  secondaryCoupon?: string;
  usageMode?: string;
  unlockDetails?: {
    supported: string[];
    conditional: string[];
    untested?: string[];
  };
  dataVerificationDate?: string;
}

export const airports: Airport[] = [
  {
    "id": "guangsu",
    "name": "光速云",
    "slug": "guangsu",
    "slogan": "2020老牌运营 · 全球 IPLC / IEPL 企业级双线路 · 单节点最高 2.5Gbps · 晚高峰 4K 秒开零丢包",
    "established": "2020年",
    "score": 9.9,
    "ratingCount": 3280,
    "monthlyPrice": 8.25,
    "annualPrice": 99,
    "traffic": 168,
    "lineType": "IEPL专线",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "nodeCount": 88,
    "speedMbps": 980,
    "latencyMs": 22,
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "马来西亚",
      "美国",
      "德国",
      "法国",
      "英国",
      "土耳其",
      "越南",
      "泰国",
      "巴西"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": true
    },
    "pros": [
      "2020年稳定运营超5年，口碑老牌标杆，抗封锁与跑路风险极低",
      "全球 IPLC + 企业级内网专线双线路架构，单节点物理带宽最高 2.5Gbps",
      "独家推出【致敬斯诺克147永久套餐】（147元/247GB 永久不过期），极具收藏与轻量价值",
      "全节点 x1 倍率无暗坑，不限制同时在线设备数量",
      "提供独立高颜值自研客户端，同时完美支持 Clash、小火箭、Surge、v2rayN 等全平台订阅导入",
      "全天候 7×24 专业运维保障，晚高峰几乎零丢包、超低延迟"
    ],
    "cons": [
      "入门轻量版 99 元需年付（折合约 8.25 元/月 69GB）",
      "晚高峰个别小众欧洲冷门节点偶有排队，建议使用亚太香港/日本主力专线"
    ],
    "targetUsers": [
      "外贸出海与跨境电商团队（TikTok 直播、海外社媒投放、远程办公）",
      "深度 AI 开发者与科研工作者（ChatGPT 4o、Claude 3.7 Sonnet、Cursor、Gemini）",
      "4K / 8K Netflix、Disney+、YouTube 重度极高清影音追求者",
      "希望选择运营时间长、资金充足、拒绝跑路风险的老牌品牌用户"
    ],
    "riskStatus": "正常运营",
    "riskNote": "运营超5年老牌，资金储备充足，全球自建多入口 BGP + 双活内网专线容灾，财务状况极其健康",
    "affiliateUrl": "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
    "officialUrl": "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
    "couponCode": "AMM",
    "badge": "2026综合主推榜首",
    "isRecommended": true,
    "isTopRank": true,
    "isBudget": true,
    "isAffiliate": true,
    "minDuration": "月付",
    "priceNote": "致敬斯诺克147永久套餐 ¥147（247GB不过期）；轻量版 ¥99/年（69GB/月）；极速版 ¥25/月（168GB）；流光版 ¥34/月（268GB）；量子版 ¥68/月（568GB）；无界版 ¥138/月（900GB）；定制套餐 ¥680/月；特殊商品不支持退款，优惠码 AMM",
    "features": [
      "2020年老牌运营",
      "IEPL专线 + 企业内网双线路",
      "单节点最高 2.5Gbps",
      "致敬斯诺克147永久套餐",
      "全节点 x1 倍率",
      "自研客户端 + 第三方客户端",
      "不限设备同时在线",
      "7×24 专业运维"
    ],
    "description": "光速云成立于 2020 年，是经过历次网络封锁重压检验的业内标杆级综合专线机场。全线采用全球 IPLC / IEPL 企业级内网专线架构，物理线路点对点直达，不经过 GFW 公网出口审查，即使在敏感期和晚高峰仍能提供超低延迟与零丢包体验。提供自研开箱即用客户端，同时完整兼容 Clash、Shadowrocket、Surge 等主流客户端。协议以高抗干扰的 VLESS 为主，覆盖香港、台湾、日本、新加坡、美国等核心地区原生节点。",
    "screenshots": [
      "/assets/speedtest/guangsu-speedtest.png",
      "/assets/speedtest/photo_2026-08-19_12-20-10.jpg",
      "/assets/speedtest/photo_2026-08-19_12-18-40.jpg",
      "/assets/speedtest/photo_2026-08-19_12-13-01.jpg",
      "/assets/speedtest/photo_2026-08-19_12-13-50.jpg",
      "/assets/speedtest/photo_2026-08-19_12-13-58.jpg"
    ],
    "packages": [
      {
        "name": "致敬斯诺克147永久套餐 (经典限量)",
        "price": "147 元 / 一次性付费",
        "traffic": "247 GB 永久有效不过期",
        "line": "原生稳定专线节点 (单节点最高2.5Gbps)",
        "features": [
          "港/台/日/新/马/美/英/法/德/土/泰/巴",
          "不限设备同时在线",
          "一次性永久版无忧过期",
          "跨境电商/TikTok/社媒/远程办公/AI"
        ]
      },
      {
        "name": "轻量版 (入门轻量首选)",
        "price": "99 元 / 年 (折合约 8.25 元/月)",
        "traffic": "69 GB / 月",
        "line": "原生稳定专线节点",
        "features": [
          "港/台/日/新/马/美/英/法/德/土/越",
          "不限设备同时在线",
          "解锁 Netflix / Disney+ / ChatGPT / TikTok",
          "适合办公、邮件、资料、轻度视频"
        ]
      },
      {
        "name": "极速版 (旗舰爆款推荐)",
        "price": "25 元 / 月 (年付折算更优)",
        "traffic": "168 GB / 月",
        "line": "全球 IPLC 专线 (单节点最高 2.5Gbps)",
        "features": [
          "全节点 x1 倍率",
          "不限设备同时在线",
          "半年9折 / 年付8折 / 两年75折 / 三年7折",
          "7×24 专业运维与工单极速响应"
        ]
      },
      {
        "name": "流光版 (进阶高速大流量)",
        "price": "34 元 / 月",
        "traffic": "268 GB / 月",
        "line": "全球 IPLC 专线",
        "features": [
          "全节点 x1 倍率",
          "全流媒体 4K/8K 原生解锁",
          "多地区节点支持",
          "半年9折 / 年付8折"
        ]
      },
      {
        "name": "量子版 (专业团队主力)",
        "price": "68 元 / 月",
        "traffic": "568 GB / 月",
        "line": "双活 IPLC / IEPL 专线",
        "features": [
          "568GB 海量高速专线流量",
          "适合小微团队与外贸工作室",
          "高优先级服务通道",
          "支持多端同时在线"
        ]
      },
      {
        "name": "定制版 (企业专享独立部署)",
        "price": "680 元 / 月",
        "traffic": "500 GB / 月",
        "line": "按需独立部署 · 全 IPLC 专线",
        "features": [
          "专属原生 IP 与独立独享带宽",
          "按业务场景线下专属确认与开通",
          "不限设备数量 · 客服一对一专属服务",
          "超低时延与最高隐私隔离级别"
        ]
      }
    ],
    "dataVerificationDate": "2026-10-19（结合 2026-08-11 实测包与历史归档核对）",
    "usageMode": "自研客户端 + 第三方订阅导入（Clash / Shadowrocket / Surge 等）",
    "allPackages": [
      {
        "name": "光速云·致敬斯诺克147永久套餐",
        "billingCycle": "一次性付费",
        "price": "¥147",
        "traffic": "247GB不过期",
        "period": ""
      },
      {
        "name": "光速云·轻量版",
        "billingCycle": "年付",
        "price": "¥99",
        "traffic": "69GB",
        "period": "每月"
      },
      {
        "name": "光速云·极速版",
        "billingCycle": "月付",
        "price": "¥25",
        "traffic": "168GB",
        "period": "每月"
      },
      {
        "name": "光速云·流光版",
        "billingCycle": "月付",
        "price": "¥34",
        "traffic": "268GB",
        "period": "每月"
      },
      {
        "name": "光速云·量子版",
        "billingCycle": "月付",
        "price": "¥68",
        "traffic": "568GB",
        "period": "每月"
      },
      {
        "name": "光速云·无界版",
        "billingCycle": "月付",
        "price": "¥138",
        "traffic": "900GB",
        "period": "每月"
      },
      {
        "name": "光速云·定制套餐",
        "billingCycle": "月付",
        "price": "¥680",
        "traffic": "500GB",
        "period": "每月"
      }
    ],
    "regionalSpeedtests": [
      {
        "region": "香港",
        "latency": "22ms",
        "download": "529Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "台湾",
        "latency": "41ms",
        "download": "114Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "新加坡",
        "latency": "46ms",
        "download": "387Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "日本",
        "latency": "57ms",
        "download": "135Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "美国",
        "latency": "143ms",
        "download": "18Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      }
    ],
    "screenshotMeta": [
      {
        "src": "/assets/speedtest/guangsu-speedtest.png",
        "caption": "光速云 54节点 Shadowsocks 实测（MAI-TEST-BOT，2026-08-11 14:32:56 CST，珠海联通 5Gbps 32线程）",
        "alt": "光速云 2026-08-11 Shadowsocks 节点测速实测截图（MAI-TEST-BOT）",
        "testedAt": "2026-08-11 14:32:56 (CST)",
        "toolFamily": "MAI-TEST-BOT 2.0.0-dev（珠海联通 5Gbps 32线程）",
        "protocolDisplayed": "Shadowsocks",
        "dataStatus": "measured",
        "limitation": "单次通道快照，不含 AI/流媒体解锁校验。"
      },
      {
        "src": "/assets/speedtest/photo_2026-08-19_12-20-10.jpg",
        "caption": "光速云 70节点 VLESS 订阅实测速度曲线（MiaoKo 4.7.0，珠海联通 9Gbps 单线程，香港均速 380–424MB/s）",
        "alt": "光速云 70节点 VLESS 订阅实测速度与延迟曲线图",
        "testedAt": "2026-08-19 收录（MiaoKo 4.7.0）",
        "toolFamily": "MiaoKo 4.7.0 [A14-1]（珠海联通 9Gbps 单线程）",
        "protocolDisplayed": "VLESS",
        "dataStatus": "measured",
        "limitation": "仅反映当次单线程测速环境表现。"
      },
      {
        "src": "/assets/speedtest/photo_2026-08-19_12-18-40.jpg",
        "caption": "光速云 70节点 VLESS+AnyTLS 12项流媒体与 OpenAI/Steam 矩阵解锁实测（美/日/新/台/港详细列示）",
        "alt": "光速云 70节点 YouTube Netflix Disney+ TikTok OpenAI Steam 解锁矩阵实测图",
        "testedAt": "2026-08-19 收录（MiaoKo 4.7.0）",
        "toolFamily": "MiaoKo 4.7.0 [A14-1]（珠海联通 9Gbps 单线程）",
        "protocolDisplayed": "VLESS + AnyTLS",
        "dataStatus": "measured",
        "limitation": "流媒体与 AI 解锁状态随上游 IP 变动动态变化，以实时检测为准。"
      },
      {
        "src": "/assets/speedtest/photo_2026-08-19_12-13-01.jpg",
        "caption": "光速云 62节点 Shadowsocks 电信实测（长沙电信@2Gbps）：含 Disney+/Netflix/YouTube/OpenAI/Gemini 与 IP 风险分",
        "alt": "光速云 长沙电信 2Gbps 62节点测速及流媒体 AI 解锁实测截图",
        "testedAt": "2026-08-19 收录（SC-2.3.1 长沙电信）",
        "toolFamily": "SC-2.3.1（A-长沙电信@2Gbps 6线程）",
        "protocolDisplayed": "Shadowsocks",
        "dataStatus": "measured",
        "limitation": "实测显示香港节点 OpenAI 多为仅 App 可用、Gemini 多数失败；新加坡节点双全绿。"
      },
      {
        "src": "/assets/speedtest/photo_2026-08-19_12-13-50.jpg",
        "caption": "光速云 62节点 Shadowsocks 移动实测（广西移动@2Gbps）：含延迟、平均/最高速与 AI/流媒体逐节点矩阵",
        "alt": "光速云 广西移动 2Gbps 62节点测速与解锁对比截图",
        "testedAt": "2026-08-19 收录（SC-2.3.1 广西移动）",
        "toolFamily": "SC-2.3.1（A-广西移动@2Gbps 6线程）",
        "protocolDisplayed": "Shadowsocks",
        "dataStatus": "measured",
        "limitation": "广西移动跨境直连/专线接入参考快照。"
      },
      {
        "src": "/assets/speedtest/photo_2026-08-19_12-13-58.jpg",
        "caption": "光速云 62节点 Shadowsocks 联通实测（河北联通@2Gbps）：北方联通三网交叉验证节点可达性与解锁",
        "alt": "光速云 河北联通 2Gbps 62节点测速与流媒体解锁截图",
        "testedAt": "2026-08-19 收录（SC-2.3.1 河北联通）",
        "toolFamily": "SC-2.3.1（A-河北联通@2Gbps 6线程）",
        "protocolDisplayed": "Shadowsocks",
        "dataStatus": "measured",
        "limitation": "河北联通接入参考快照，三网实测可交叉验证稳定性。"
      }
    ],
    "unlockDetails": {
      "supported": [
        "Claude",
        "Netflix",
        "Disney+",
        "YouTube",
        "HBO Max",
        "TikTok",
        "Spotify"
      ],
      "conditional": [
        "ChatGPT（视节点而定，建议选用美国/日本/新加坡等原生或已验证节点）",
        "Gemini（视节点而定，实测新加坡与部分冷门地区节点稳定，港/美/日部分节点可能失败）"
      ]
    },
    "speedtestNote": "包含 2026-08-11 实测图、2026-08-19 电信/移动/联通三网 62 节点与 70 节点矩阵，以及 2026-10-19 非晚高峰地区参考测速（香港 22ms / 529Mbps、新加坡 46ms / 387Mbps）。"
  },
  {
    "id": "feimao",
    "name": "飞猫云",
    "slug": "feimao",
    "slogan": "新手开箱即用 · 专属全平台客户端 · 亚太欧美热门节点 · 免配置极速上手",
    "established": "2023年",
    "score": 9.8,
    "ratingCount": 1840,
    "monthlyPrice": 7,
    "annualPrice": 84,
    "traffic": 50,
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "nodeCount": 62,
    "speedMbps": 650,
    "latencyMs": 25,
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国",
      "韩国",
      "欧洲"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": true
    },
    "pros": [
      "专属全平台客户端，下载登录即用，完全不需要折腾导入订阅链接",
      "年付低至约 7 元/月，学生党与初学者门槛极低",
      "实测香港节点延迟 21ms，下载速率超 520Mbps，日常网页与流媒体极速响应",
      "提供 1000GB 一次性不限时按量套餐，适合备用与不定期使用者"
    ],
    "cons": [
      "非主打极致工业级专线，主打易用与性价比",
      "极客玩家若需深度定制分流规则需切换通用订阅模式"
    ],
    "targetUsers": [
      "零基础新手小白",
      "嫌配置客户端麻烦的用户",
      "学生党与日常影音浏览",
      "移动端随时随地一键连接者"
    ],
    "riskStatus": "正常运营",
    "riskNote": "自研客户端架构完备，社群活跃，客服响应迅速，运营状态良好",
    "affiliateUrl": "https://guangs.flycataff.com/#/?code=6uq0Xe9y",
    "officialUrl": "https://guangs.flycataff.com/#/?code=6uq0Xe9y",
    "couponCode": "flycat888",
    "badge": "新手首选",
    "isRecommended": true,
    "isTopRank": true,
    "isBudget": true,
    "isAffiliate": true,
    "minDuration": "月付",
    "priceNote": "学生版年付84元(折合~7元/月 50GB)；星耀版月付25元(150GB)；不限时套餐680元/1000GB",
    "features": [
      "专属客户端一键登录",
      "年付约7元/月",
      "免配置订阅",
      "支持常用AI与流媒体",
      "不限时按量套餐"
    ],
    "description": "飞猫云是面向新手与轻度日常用户的极简体验机场代表。核心亮点在于省心：走的是专属一键客户端模式，下载客户端登录即用，免去了传统机场复制订阅、转换节点、手动配置内核的繁琐步骤。价格亲民，亚太核心节点速度强劲，日常追剧与 AI 对话表现出色。",
    "screenshots": [
      "/assets/speedtest/feimao-speedtest.png"
    ],
    "packages": [
      {
        "name": "飞猫·学生版",
        "price": "¥84 / 年 (约 7 元/月)",
        "traffic": "50 GB / 月",
        "line": "亚太优化专线",
        "features": [
          "专属客户端登录即用",
          "香港/日本/新加坡/美国",
          "AI与流媒体全解锁"
        ]
      },
      {
        "name": "飞猫·星耀版",
        "price": "¥25 / 月",
        "traffic": "150 GB / 月",
        "line": "高速稳定专线",
        "features": [
          "全节点不限速",
          "多端通用",
          "4K流媒体秒开"
        ]
      },
      {
        "name": "飞猫·不限时套餐",
        "price": "¥680 / 一次性",
        "traffic": "1000 GB 一次性有效",
        "line": "全节点专线",
        "features": [
          "流量永久不过期",
          "适合长期主力备用",
          "不限设备连接"
        ]
      }
    ],
    "dataVerificationDate": "2026-10-19（结合 2026-08-11 实测包与历史归档核对）",
    "usageMode": "自研客户端（含双十一特惠/年付/按月多档）+ 支持第三方通用订阅",
    "allPackages": [
      {
        "name": "飞猫·学生版",
        "billingCycle": "年付",
        "price": "¥84",
        "traffic": "50GB",
        "period": "每月"
      },
      {
        "name": "飞猫·星耀版",
        "billingCycle": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "飞猫·星环版",
        "billingCycle": "月付",
        "price": "¥45",
        "traffic": "300GB",
        "period": "每月"
      },
      {
        "name": "飞猫·银河版",
        "billingCycle": "月付",
        "price": "¥85",
        "traffic": "600GB",
        "period": "每月"
      },
      {
        "name": "飞猫·宇宙版",
        "billingCycle": "月付",
        "price": "¥150",
        "traffic": "1000GB",
        "period": "每月"
      },
      {
        "name": "飞猫·不限时套餐",
        "billingCycle": "一次性付费",
        "price": "¥680",
        "traffic": "1000GB",
        "period": "一次性"
      },
      {
        "name": "飞猫·定制套餐",
        "billingCycle": "月付",
        "price": "¥550",
        "traffic": "500GB",
        "period": "每月"
      }
    ],
    "regionalSpeedtests": [
      {
        "region": "香港",
        "latency": "21ms",
        "download": "526Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "台湾",
        "latency": "41ms",
        "download": "116Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "新加坡",
        "latency": "45ms",
        "download": "413Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "日本",
        "latency": "54ms",
        "download": "138Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "美国",
        "latency": "178ms",
        "download": "14Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      }
    ],
    "screenshotMeta": [
      {
        "src": "/assets/speedtest/feimao-speedtest.png",
        "caption": "飞猫云 节点测速实测（MAI-TEST-BOT 2.0.0-dev，协议显示：Shadowsocks，时间：2026-08-11 08:52:30 CST）",
        "alt": "飞猫云 2026-08-11 Shadowsocks 节点测速实测截图",
        "testedAt": "2026-08-11 08:52:30 (CST)",
        "toolFamily": "MAI-TEST-BOT 2.0.0-dev",
        "protocolDisplayed": "Shadowsocks",
        "dataStatus": "measured",
        "limitation": "单日单次实测快照，不同品牌采样时段不同，不构成跨品牌实时排名，亦不单独证明长期在线率。 本截图未覆盖 AI 与流媒体逐项解锁。"
      }
    ],
    "speedtestNote": "已双源核对：具备 2026-08-11 节点实测图与 2026-10-19 非晚高峰 5 地区测速记录。"
  },
  {
    "id": "breeze",
    "name": "微风网络",
    "slug": "breeze",
    "slogan": "IEPL 专线 + VLESS 协议 · 覆盖多国原生 IP · 7×24 在线与 AI 客服值守",
    "established": "2023年",
    "score": 9.7,
    "ratingCount": 1620,
    "monthlyPrice": 7,
    "annualPrice": 137,
    "traffic": 100,
    "lineType": "IEPL专线",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "nodeCount": 56,
    "speedMbps": 680,
    "latencyMs": 24,
    "regions": [
      "香港",
      "新加坡",
      "日本",
      "美国",
      "台湾",
      "德国"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": true
    },
    "pros": [
      "全线采用 IEPL 专线搭配抗干扰更强的 VLESS 协议",
      "覆盖香港、新加坡、日本、美国多地原生 IP 落地",
      "客服支持完备，夜间配备智能 AI 协助值守，工单响应速度快",
      "支持 9 折优惠码 flat888，性价比突出"
    ],
    "cons": [
      "年付清风套餐性价比最高，月付档位门槛稍高于纯廉价机场"
    ],
    "targetUsers": [
      "追求晚高峰稳定与低延迟的日常用户",
      "需要原生 IP 解锁 TikTok/流媒体的人群",
      "对工单售后有较高要求的用户"
    ],
    "riskStatus": "正常运营",
    "riskNote": "专线带宽冗余充足，节点监控健康，服务可用率超 99.8%",
    "affiliateUrl": "https://edp01.breezenetaff.com/#/?code=t3huofyI",
    "officialUrl": "https://edp01.breezenetaff.com/#/?code=t3huofyI",
    "couponCode": "flat888",
    "badge": "高性价比专线",
    "isRecommended": true,
    "isTopRank": true,
    "isBudget": true,
    "isAffiliate": true,
    "minDuration": "月付",
    "priceNote": "清风年付137元(100GB/月，折合~11.4元/月)；乘风月付27元(200GB/月)；优惠码 flat888 可享9折",
    "features": [
      "IEPL专线",
      "VLESS协议",
      "原生IP落地",
      "7×24客服+AI值守",
      "主流AI与流媒体全开"
    ],
    "description": "微风网络定位入门级高性价比专线机场，以 IEPL 专线和 VLESS 协议构建主力骨干网。全线覆盖香港、日本、新加坡及美西核心原生节点，能够稳定解锁 Netflix、Disney+ 与 ChatGPT、Claude，适合追求性价比与稳定性的多端用户。",
    "screenshots": [
      "/assets/speedtest/breeze-speedtest.png"
    ],
    "packages": [
      {
        "name": "清风 (Breeze)",
        "price": "¥137 / 年",
        "traffic": "100 GB / 月",
        "line": "IEPL 专线接入",
        "features": [
          "原生IP节点",
          "支持VLESS",
          "支持AI与4K流媒体",
          "优惠码享折上折"
        ]
      },
      {
        "name": "乘风 (Riding)",
        "price": "¥27 / 月",
        "traffic": "200 GB / 月",
        "line": "IEPL 高速专线",
        "features": [
          "全节点可用",
          "200GB充足流量",
          "晚高峰低延迟保障"
        ]
      }
    ],
    "dataVerificationDate": "2026-10-19（结合 2026-08-11 实测包与历史归档核对）",
    "usageMode": "专属客户端，下载登录即用（2026 年 10 月起部分通道不提供通用订阅链接）",
    "allPackages": [
      {
        "name": "清风 (Breeze)",
        "billingCycle": "年付",
        "price": "¥137",
        "traffic": "100GB",
        "period": "每月"
      },
      {
        "name": "乘风 (Riding)",
        "billingCycle": "月付",
        "price": "¥27",
        "traffic": "200GB",
        "period": "每月"
      },
      {
        "name": "破风 (Breaking)",
        "billingCycle": "月付",
        "price": "¥57",
        "traffic": "500GB",
        "period": "每月"
      },
      {
        "name": "御风 (Mastery)",
        "billingCycle": "月付",
        "price": "¥127",
        "traffic": "1200GB",
        "period": "每月"
      },
      {
        "name": "信风·不限时",
        "billingCycle": "一次性付费",
        "price": "¥200",
        "traffic": "270GB",
        "period": "一次性"
      },
      {
        "name": "长风·不限时",
        "billingCycle": "一次性付费",
        "price": "¥370",
        "traffic": "570GB",
        "period": "一次性"
      }
    ],
    "regionalSpeedtests": [
      {
        "region": "香港",
        "latency": "25ms",
        "download": "546Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "台湾",
        "latency": "40ms",
        "download": "115Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "新加坡",
        "latency": "43ms",
        "download": "384Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "日本",
        "latency": "54ms",
        "download": "131Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "美国",
        "latency": "167ms",
        "download": "17Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      }
    ],
    "screenshotMeta": [
      {
        "src": "/assets/speedtest/breeze-speedtest.png",
        "caption": "微风网络 50节点 VLESS 订阅速度实测（MiaoKo 4.7.0，2026-07-19 18:38:20 CST，珠海联通 9Gbps 32线程）",
        "alt": "微风网络 50节点 VLESS 晚高峰前段实测速度截图",
        "testedAt": "2026-07-19 18:38:20 (CST)",
        "toolFamily": "MiaoKo 4.7.0 [A11-32]（珠海联通 9Gbps 32线程）",
        "protocolDisplayed": "VLESS",
        "dataStatus": "measured",
        "limitation": "该次采样台湾02与日本05接近无吞吐，其余港/新/日/台/美节点正常，不含 AI 专项校验。"
      }
    ],
    "unlockDetails": {
      "supported": [
        "ChatGPT",
        "Claude",
        "Netflix",
        "Disney+",
        "YouTube",
        "HBO Max",
        "TikTok",
        "Spotify"
      ],
      "conditional": [
        "Gemini（视节点而定）"
      ]
    }
  },
  {
    "id": "muguang",
    "name": "暮光加速",
    "slug": "muguang",
    "slogan": "BGP 智能调度 · 专线级出口 · 全平台客户端覆盖 · 晚高峰低时延连接",
    "established": "2023年",
    "score": 9.6,
    "ratingCount": 1420,
    "monthlyPrice": 18,
    "annualPrice": 198,
    "traffic": 100,
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "nodeCount": 52,
    "speedMbps": 620,
    "latencyMs": 28,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": true
    },
    "pros": [
      "BGP 多线智能接入，自动根据本地运营商调度最优出口",
      "支持全平台主流客户端与第三方订阅无缝导入",
      "实测测速曲线平滑，丢包率控制优异",
      "专属优惠码 muguang5555 享受折上优惠"
    ],
    "cons": [
      "起步价格在 18 元/月左右，非极致廉价跑量型机场"
    ],
    "targetUsers": [
      "追求连接稳定与省心的白领与开发者",
      "晚高峰频繁观看高清流媒体的用户"
    ],
    "riskStatus": "正常运营",
    "riskNote": "专线出口稳定，服务器负载适中，运维在线",
    "affiliateUrl": "https://varnexa.twilightaff.com/#/?code=D1LHglg3",
    "officialUrl": "https://varnexa.twilightaff.com/#/?code=D1LHglg3",
    "couponCode": "muguang5555",
    "badge": "综合优选",
    "isRecommended": true,
    "isTopRank": true,
    "isBudget": false,
    "isAffiliate": true,
    "minDuration": "月付",
    "priceNote": "月付 ¥20/120GB 起，另有标准版 ¥40/240GB、旗舰版 ¥100/700GB、至尊版 ¥180/1.5TB、年付轻量 ¥109/年(70GB/月) 及三档不限时流量包；总表历史记录优惠码 muguang5555，2026-10 核查暂无公开新码，下单前请核对结账页或咨询客服",
    "features": [
      "BGP智能调度",
      "专线级出口",
      "全平台客户端兼容",
      "低延迟优化"
    ],
    "description": "暮光加速采用 BGP 智能调度与专线级出口架构，针对亚太和欧美常用访问场景进行针对性路由优化。兼容 Windows、macOS、iOS、Android 全平台客户端，提供稳定的网络表现与流媒体解锁能力。",
    "screenshots": [],
    "packages": [
      {
        "name": "暮光·基础版",
        "price": "¥18 / 月",
        "traffic": "100 GB / 月",
        "line": "BGP 智能专线",
        "features": [
          "全节点可用",
          "解锁 Netflix/ChatGPT",
          "多设备支持"
        ]
      },
      {
        "name": "暮光·进阶版",
        "price": "¥35 / 月",
        "traffic": "240 GB / 月",
        "line": "高速专线冗余",
        "features": [
          "大流量保障",
          "多端畅享",
          "工单优先处理"
        ]
      }
    ],
    "dataVerificationDate": "2026-10-19（结合 2026-08-11 实测包与历史归档核对）",
    "usageMode": "支持多平台客户端（Windows / macOS / iOS / Android / Linux）及多设备同时在线",
    "allPackages": [
      {
        "name": "【暮光·基础版】",
        "billingCycle": "月付",
        "price": "¥20",
        "traffic": "120GB",
        "period": "每月"
      },
      {
        "name": "【暮光·标准版】",
        "billingCycle": "月付",
        "price": "¥40",
        "traffic": "240GB",
        "period": "每月"
      },
      {
        "name": "【暮光·旗舰版】",
        "billingCycle": "月付",
        "price": "¥100",
        "traffic": "700GB",
        "period": "每月"
      },
      {
        "name": "【暮光·至尊版】",
        "billingCycle": "月付",
        "price": "¥180",
        "traffic": "1500GB",
        "period": "每月"
      },
      {
        "name": "【暮光·年付轻量版】",
        "billingCycle": "年付",
        "price": "¥109",
        "traffic": "70GB",
        "period": "每月"
      },
      {
        "name": "【暮光·不限时轻量包】",
        "billingCycle": "一次性付费",
        "price": "¥219",
        "traffic": "150GB",
        "period": "一次性"
      },
      {
        "name": "【暮光·不限时标准包】",
        "billingCycle": "一次性付费",
        "price": "¥529",
        "traffic": "400GB",
        "period": "一次性"
      },
      {
        "name": "【暮光·不限时大容量包】",
        "billingCycle": "一次性付费",
        "price": "¥959",
        "traffic": "800GB",
        "period": "一次性"
      },
      {
        "name": "独享私人定制节点",
        "billingCycle": "月付",
        "price": "¥600",
        "traffic": "500GB",
        "period": "每月"
      }
    ],
    "regionalSpeedtests": [
      {
        "region": "香港",
        "latency": "26ms",
        "download": "509Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "台湾",
        "latency": "40ms",
        "download": "107Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "新加坡",
        "latency": "43ms",
        "download": "419Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "日本",
        "latency": "53ms",
        "download": "150Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "美国",
        "latency": "160ms",
        "download": "19Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      }
    ],
    "screenshotMeta": [],
    "unlockDetails": {
      "supported": [
        "ChatGPT",
        "Claude",
        "Netflix",
        "Disney+",
        "YouTube",
        "HBO Max",
        "TikTok",
        "Spotify"
      ],
      "conditional": [
        "Gemini（视节点而定）"
      ]
    },
    "speedtestNote": "已收录 2026-10-19 非晚高峰 5 地区参考测速（香港 26ms / 509Mbps、新加坡 43ms / 419Mbps、日本 53ms / 150Mbps）；暂未随 16 家测速包发布独立单图截图。"
  },
  {
    "id": "dalaoyun",
    "name": "大佬云",
    "slug": "dalaoyun",
    "slogan": "5.6 元极低月付门槛 · 60GB 入门轻量包 · 高性价比备用首选",
    "established": "2024年",
    "score": 9.5,
    "ratingCount": 1250,
    "monthlyPrice": 5.6,
    "annualPrice": 60,
    "traffic": 60,
    "lineType": "BGP隧道中转",
    "protocols": [
      "Shadowsocks"
    ],
    "nodeCount": 40,
    "speedMbps": 450,
    "latencyMs": 35,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": false,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": true
    },
    "pros": [
      "月付仅需 5.6 元，试错与上车成本极低",
      "提供 60GB 基础月流量，满足日常网页、学术搜索与社交使用",
      "优惠码 dly888 可叠加折扣"
    ],
    "cons": [
      "节点数量相对大牌较精简",
      "晚高峰极端高并发下偶有波动"
    ],
    "targetUsers": [
      "预算有限的学生党",
      "日常仅需偶尔查阅资料的轻度用户",
      "寻找高性价比备用梯子的用户"
    ],
    "riskStatus": "正常运营",
    "riskNote": "主打低价走量与高性价比，建议按月或季付订购",
    "affiliateUrl": "https://qwerty.dalaoyunaff.com/#/?code=jCPLmoWN",
    "officialUrl": "https://qwerty.dalaoyunaff.com/#/?code=jCPLmoWN",
    "couponCode": "dly888",
    "badge": "极低门槛",
    "isRecommended": true,
    "isTopRank": true,
    "isBudget": true,
    "isAffiliate": true,
    "minDuration": "月付",
    "priceNote": "月付 5.6 元起含 60GB；专属优惠码 dly888",
    "features": [
      "5.6元/月超低价",
      "60GB月度流量",
      "基础流媒体支持",
      "适合日常轻量使用"
    ],
    "description": "大佬云以月付 5.6 元 60GB 的极低价格门槛切入市场，专为对成本敏感的学生群体或轻度网络浏览者设计。节点覆盖香港、日本、美西等主力方向，满足 Google 搜索、Wikipedia 及日常追剧需求。",
    "screenshots": [],
    "packages": [
      {
        "name": "轻量入门包",
        "price": "¥5.6 / 月",
        "traffic": "60 GB / 月",
        "line": "优化中转节点",
        "features": [
          "极低体验门槛",
          "香港/日本主流节点",
          "适合文字与日常浏览"
        ]
      }
    ],
    "dataVerificationDate": "2026-10-19（结合 2026-08-11 实测包与历史归档核对）",
    "usageMode": "自研客户端 + 支持第三方通用订阅导入"
  },
  {
    "id": "xingdaomeng",
    "name": "星岛梦",
    "slug": "xingdaomeng",
    "slogan": "2020 老牌运营 · IEPL 专线全节点 1 倍率 · 不限设备 · 提供不限时套餐",
    "established": "2020年",
    "score": 9.6,
    "ratingCount": 1530,
    "monthlyPrice": 15,
    "annualPrice": 150,
    "traffic": 120,
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks"
    ],
    "nodeCount": 65,
    "speedMbps": 720,
    "latencyMs": 23,
    "regions": [
      "香港",
      "台湾",
      "日本",
      "美国",
      "新加坡",
      "韩国",
      "东南亚"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": true
    },
    "pros": [
      "2020 年运营至今，技术沉淀深厚，信誉良好",
      "全线 IEPL 专线，全节点 1 倍率且不限制连接设备数",
      "提供不限时按量套餐，流量永久有效",
      "实测香港与新加坡节点延迟低，跑满百兆宽带"
    ],
    "cons": [
      "优惠活动相对固定，大促期间需关注通知"
    ],
    "targetUsers": [
      "注重长期稳定老牌口碑的用户",
      "多设备协同办公的团队",
      "需要不限时按量流量备用的用户"
    ],
    "riskStatus": "正常运营",
    "riskNote": "运营超5年，网络抗风险能力强，服务稳定",
    "affiliateUrl": "https://guangs.xingdaomeng.com/#/?code=1TynBYnR",
    "officialUrl": "https://guangs.xingdaomeng.com/#/?code=1TynBYnR",
    "couponCode": "nmw888",
    "badge": "五年老牌",
    "isRecommended": true,
    "isTopRank": true,
    "isBudget": true,
    "isAffiliate": true,
    "minDuration": "月付",
    "priceNote": "月付15元起；支持不限时按量包；优惠码 nmw888",
    "features": [
      "2020年老牌",
      "IEPL专线",
      "全节点1倍率",
      "不限设备",
      "不限时套餐可选"
    ],
    "description": "星岛梦自 2020 年起稳定运营，是老牌机场中主打【1倍率不限设备】的代表品牌。全线采用企业级 IEPL 专线，节点分布广泛，且支持不限时流量包，深受多端用户与外贸人员青睐。",
    "screenshots": [
      "/assets/speedtest/xingdaomeng-speedtest.png"
    ],
    "packages": [
      {
        "name": "星梦·常规月付",
        "price": "¥15 / 月",
        "traffic": "120 GB / 月",
        "line": "IEPL 专线",
        "features": [
          "全节点1倍率",
          "不限同时在线设备",
          "解锁主流AI与流媒体"
        ]
      },
      {
        "name": "星梦·不限时按量",
        "price": "¥120 / 一次性",
        "traffic": "200 GB 不过期",
        "line": "IEPL 专线",
        "features": [
          "永久有效",
          "随时可用",
          "多端畅连"
        ]
      }
    ],
    "dataVerificationDate": "2026-10-19（结合 2026-08-11 实测包与历史归档核对）",
    "usageMode": "自研客户端 + 支持第三方通用订阅导入（Clash / Sing-box / Shadowrocket）",
    "allPackages": [
      {
        "name": "星岛梦·贴心小包",
        "billingCycle": "年付",
        "price": "¥96",
        "traffic": "60GB",
        "period": "每月"
      },
      {
        "name": "星岛梦·超量150G",
        "billingCycle": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "星岛梦·进阶300G",
        "billingCycle": "月付",
        "price": "¥50",
        "traffic": "300GB",
        "period": "每月"
      },
      {
        "name": "星岛梦·闪光500G",
        "billingCycle": "月付",
        "price": "¥70",
        "traffic": "500GB",
        "period": "每月"
      },
      {
        "name": "星岛梦·旗舰1T版",
        "billingCycle": "月付",
        "price": "¥130",
        "traffic": "1000GB",
        "period": "每月"
      },
      {
        "name": "星岛梦·永久不限时100",
        "billingCycle": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "period": "一次性"
      },
      {
        "name": "星岛梦·永久不限时300",
        "billingCycle": "一次性付费",
        "price": "¥300",
        "traffic": "300GB",
        "period": "一次性"
      },
      {
        "name": "星岛梦·永久不限时1TB",
        "billingCycle": "一次性付费",
        "price": "¥600",
        "traffic": "1000GB",
        "period": "一次性"
      },
      {
        "name": "星岛梦·定制套餐",
        "billingCycle": "月付",
        "price": "¥680",
        "traffic": "500GB",
        "period": "每月"
      }
    ],
    "regionalSpeedtests": [
      {
        "region": "香港",
        "latency": "27ms",
        "download": "504Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "台湾",
        "latency": "41ms",
        "download": "103Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "新加坡",
        "latency": "44ms",
        "download": "411Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "日本",
        "latency": "57ms",
        "download": "136Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "美国",
        "latency": "177ms",
        "download": "18Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      }
    ],
    "screenshotMeta": [
      {
        "src": "/assets/speedtest/xingdaomeng-speedtest.png",
        "caption": "星岛梦 节点测速实测（MAI-TEST-BOT 2.0.0-dev，协议显示：Shadowsocks，时间：2026-08-11 01:48:13 CST）",
        "alt": "星岛梦 2026-08-11 Shadowsocks 节点测速实测截图",
        "testedAt": "2026-08-11 01:48:13 (CST)",
        "toolFamily": "MAI-TEST-BOT 2.0.0-dev",
        "protocolDisplayed": "Shadowsocks",
        "dataStatus": "measured",
        "limitation": "单日单次实测快照，不同品牌采样时段不同，不构成跨品牌实时排名，亦不单独证明长期在线率。 本截图未覆盖 AI 与流媒体逐项解锁。"
      }
    ],
    "speedtestNote": "已双源核对：具备 2026-08-11 节点实测图与 2026-10-19 非晚高峰 5 地区测速记录。"
  },
  {
    "id": "ermaoyun",
    "name": "二猫云",
    "slug": "ermaoyun",
    "slogan": "全线 IEPL 专线 · 20 元 130GB 性价比标准 · 不限设备连接数",
    "established": "2022年",
    "score": 9.5,
    "ratingCount": 1380,
    "monthlyPrice": 20,
    "annualPrice": 200,
    "traffic": 130,
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks"
    ],
    "nodeCount": 58,
    "speedMbps": 660,
    "latencyMs": 26,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": true
    },
    "pros": [
      "全线采用 IEPL 内网专线，晚高峰稳定性强",
      "月付 20 元 130GB，价格与流量配比非常均衡",
      "账号不限客户端与并发设备数量",
      "专属优惠码 ermao5555"
    ],
    "cons": [
      "缺少超低价体验包，最低月付从 20 元起步"
    ],
    "targetUsers": [
      "追求日常综合使用体验与性价比平衡的用户",
      "家庭多端或多合一设备用户"
    ],
    "riskStatus": "正常运营",
    "riskNote": "专线带宽冗余充足，节点运维良好",
    "affiliateUrl": "https://guangs.2maoyunaff.cc/#/?code=7mjvgGbW",
    "officialUrl": "https://guangs.2maoyunaff.cc/#/?code=7mjvgGbW",
    "couponCode": "ermao5555",
    "badge": "专线均衡",
    "isRecommended": true,
    "isTopRank": true,
    "isBudget": true,
    "isAffiliate": true,
    "minDuration": "月付",
    "priceNote": "月付20元/130GB起；专属优惠码 ermao5555",
    "features": [
      "全线IEPL专线",
      "不限设备连接",
      "20元130GB黄金档",
      "AI工具支持"
    ],
    "description": "二猫云主打全线 IEPL 专线的高性价比均衡表现。不搞虚高倍率与隐藏限制，账号不限并发设备数。香港、日本与新加坡节点测速平稳，能良好应对 4K 流媒体与高频 AI 对话。",
    "screenshots": [
      "/assets/speedtest/ermaoyun-speedtest.png"
    ],
    "packages": [
      {
        "name": "二猫·标准版",
        "price": "¥20 / 月",
        "traffic": "130 GB / 月",
        "line": "IEPL 专线",
        "features": [
          "全节点可用",
          "不限设备数量",
          "支持主流AI与流媒体"
        ]
      }
    ],
    "dataVerificationDate": "2026-10-19（结合 2026-08-11 实测包与历史归档核对）",
    "usageMode": "自研全平台客户端 + 支持第三方通用订阅导入",
    "allPackages": [
      {
        "name": "二猫云·不限时套餐",
        "billingCycle": "一次性付费",
        "price": "¥99",
        "traffic": "100GB",
        "period": "一次性"
      },
      {
        "name": "二猫年付小包",
        "billingCycle": "年付",
        "price": "¥89",
        "traffic": "60GB",
        "period": "每月"
      },
      {
        "name": "二猫云·白猫套餐",
        "billingCycle": "月付",
        "price": "¥20",
        "traffic": "130GB",
        "period": "每月"
      },
      {
        "name": "二猫云·橘猫畅玩版",
        "billingCycle": "月付",
        "price": "¥40",
        "traffic": "230GB",
        "period": "每月"
      },
      {
        "name": "二猫云·牛奶猫尊享版",
        "billingCycle": "月付",
        "price": "¥80",
        "traffic": "430GB",
        "period": "每月"
      },
      {
        "name": "二猫云·黑猫重度用户版",
        "billingCycle": "月付",
        "price": "¥160",
        "traffic": "850GB",
        "period": "每月"
      }
    ],
    "regionalSpeedtests": [
      {
        "region": "香港",
        "latency": "22ms",
        "download": "481Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "台湾",
        "latency": "41ms",
        "download": "118Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "新加坡",
        "latency": "46ms",
        "download": "407Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "日本",
        "latency": "53ms",
        "download": "143Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "美国",
        "latency": "134ms",
        "download": "17Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      }
    ],
    "screenshotMeta": [
      {
        "src": "/assets/speedtest/ermaoyun-speedtest.png",
        "caption": "二猫云 节点测速实测（MAI-TEST-BOT 2.0.0-dev，协议显示：Shadowsocks，时间：2026-08-11 10:45:27 CST）",
        "alt": "二猫云 2026-08-11 Shadowsocks 节点测速实测截图",
        "testedAt": "2026-08-11 10:45:27 (CST)",
        "toolFamily": "MAI-TEST-BOT 2.0.0-dev",
        "protocolDisplayed": "Shadowsocks",
        "dataStatus": "measured",
        "limitation": "单日单次实测快照，不同品牌采样时段不同，不构成跨品牌实时排名，亦不单独证明长期在线率。 本截图未覆盖 AI 与流媒体逐项解锁。"
      }
    ],
    "speedtestNote": "已双源核对：具备 2026-08-11 节点实测图与 2026-10-19 非晚高峰 5 地区测速记录。"
  },
  {
    "id": "wuyou",
    "name": "无忧链接",
    "slug": "wuyou",
    "slogan": "原生订阅无需转换 · 6 元轻量起步 · 全线节点无倍率暗坑 · 不限设备",
    "established": "2023年",
    "score": 9.5,
    "ratingCount": 1410,
    "monthlyPrice": 6,
    "annualPrice": 68,
    "traffic": 60,
    "lineType": "BGP隧道中转",
    "protocols": [
      "Shadowsocks"
    ],
    "nodeCount": 48,
    "speedMbps": 580,
    "latencyMs": 30,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": true
    },
    "pros": [
      "原生订阅链接直接适配主流客户端，无需经过第三方托管订阅转换器，隐私安全更高",
      "提供 6 元轻量体验套餐，门槛极低",
      "全线节点无倍率套路，不限设备数量",
      "专属优惠码 wuyou666"
    ],
    "cons": [
      "轻量套餐流量较少，重度视频用户需选购高阶档位"
    ],
    "targetUsers": [
      "注重隐私、反感第三方订阅转换的用户",
      "日常轻量翻墙与学术检索群体"
    ],
    "riskStatus": "正常运营",
    "riskNote": "运行良好，节点测速稳定",
    "affiliateUrl": "https://wep01.worryfreeaff.com/#/?code=4ZoSbLdL",
    "officialUrl": "https://wep01.worryfreeaff.com/#/?code=4ZoSbLdL",
    "couponCode": "wuyou666",
    "badge": "原生订阅",
    "isRecommended": true,
    "isTopRank": true,
    "isBudget": true,
    "isAffiliate": true,
    "minDuration": "月付",
    "priceNote": "轻量套餐月付6元；常规月付15元起；优惠码 wuyou666",
    "features": [
      "原生订阅无需转换",
      "6元轻量起步",
      "无倍率暗坑",
      "不限设备"
    ],
    "description": "无忧链接强调“简单无忧”理念，原生提供直连 Clash 与各端格式的订阅链接，避免了第三方订阅转换服务带来的配置泄露风险。套餐梯度友好，起步价极低。",
    "screenshots": [
      "/assets/speedtest/wuyou-speedtest-1.jpg",
      "/assets/speedtest/wuyou-speedtest-2.jpg"
    ],
    "packages": [
      {
        "name": "轻量无忧",
        "price": "¥6 / 月",
        "traffic": "60 GB / 月",
        "line": "优化中转",
        "features": [
          "极低体验门槛",
          "原生订阅支持",
          "基础流媒体"
        ]
      },
      {
        "name": "畅享无忧",
        "price": "¥15 / 月",
        "traffic": "120 GB / 月",
        "line": "高速专线",
        "features": [
          "全节点可用",
          "ChatGPT/Claude畅连",
          "多设备不限"
        ]
      }
    ],
    "dataVerificationDate": "2026-10-19（结合 2026-08-11 实测包与历史归档核对）",
    "usageMode": "原生通用订阅直连（支持 Clash / Shadowrocket，无需转换器）",
    "allPackages": [
      {
        "name": "MINI链接",
        "billingCycle": "年付",
        "price": "¥79",
        "traffic": "40GB",
        "period": "每月"
      },
      {
        "name": "舒心链接",
        "billingCycle": "月付",
        "price": "¥19",
        "traffic": "100GB",
        "period": "每月"
      },
      {
        "name": "省心链接",
        "billingCycle": "月付",
        "price": "¥33",
        "traffic": "200GB",
        "period": "每月"
      },
      {
        "name": "随心链接",
        "billingCycle": "月付",
        "price": "¥77",
        "traffic": "500GB",
        "period": "每月"
      },
      {
        "name": "忘忧链接",
        "billingCycle": "月付",
        "price": "¥117",
        "traffic": "1000GB",
        "period": "每月"
      },
      {
        "name": "100G永久不限时 无忧链接",
        "billingCycle": "一次性付费",
        "price": "¥108",
        "traffic": "100GB",
        "period": "一次性"
      },
      {
        "name": "300G永久不限时 无忧链接",
        "billingCycle": "一次性付费",
        "price": "¥298",
        "traffic": "300GB",
        "period": "一次性"
      }
    ],
    "regionalSpeedtests": [
      {
        "region": "香港",
        "latency": "23ms",
        "download": "531Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "台湾",
        "latency": "41ms",
        "download": "107Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "新加坡",
        "latency": "42ms",
        "download": "418Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "日本",
        "latency": "55ms",
        "download": "147Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "美国",
        "latency": "145ms",
        "download": "17Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      }
    ],
    "screenshotMeta": [
      {
        "src": "/assets/speedtest/wuyou-speedtest-1.jpg",
        "caption": "无忧链接 50节点 VLESS 订阅速度实测（MiaoKo 4.7.0，2026-07-18 21:40:48 CST，珠海联通 9Gbps 32线程）",
        "alt": "无忧链接 50节点 VLESS 订阅速度实测截图",
        "testedAt": "2026-07-18 21:40:48 (CST)",
        "toolFamily": "MiaoKo 4.7.0 [A11-32]（珠海联通 9Gbps 32线程）",
        "protocolDisplayed": "VLESS",
        "dataStatus": "measured",
        "limitation": "单次采样记录，新加坡02 测速接近停滞属单点异常，整体香港均速 392–554MB/s。"
      },
      {
        "src": "/assets/speedtest/wuyou-speedtest-2.jpg",
        "caption": "无忧链接 50节点 御三家流媒体（YouTube/Netflix/Disney+）解锁实测（2026-07-18 21:47:23 CST）",
        "alt": "无忧链接 50节点 YouTube Netflix Disney+ 流媒体解锁实测矩阵",
        "testedAt": "2026-07-18 21:47:23 (CST)",
        "toolFamily": "MiaoKo 4.7.0 [A11-32]（珠海联通 9Gbps 32线程）",
        "protocolDisplayed": "VLESS",
        "dataStatus": "measured",
        "limitation": "该次实测 50/50 节点中香港01 YouTube 送中，其余美/新/台/日/港主流解锁通过。"
      }
    ],
    "unlockDetails": {
      "supported": [
        "ChatGPT",
        "Netflix",
        "Disney+",
        "YouTube",
        "HBO Max",
        "TikTok",
        "Spotify"
      ],
      "conditional": [
        "Claude（视节点而定）",
        "Gemini（视节点而定）"
      ]
    },
    "speedtestNote": "具备 2026-07-18 晚间 50 节点 VLESS 速度与御三家解锁双图，以及 2026-10-19 非晚高峰 5 地区参考数据（香港 29ms / 676Mbps、新加坡 50ms / 499Mbps）。"
  },
  {
    "id": "weitu",
    "name": "唯兔云",
    "slug": "weitu",
    "slogan": "IPLC 专线 · 60+ 节点三网优化 · 智能负载均衡 · 主流 AI 工具全面支持",
    "established": "2022年",
    "score": 9.4,
    "ratingCount": 1320,
    "monthlyPrice": 18,
    "annualPrice": 180,
    "traffic": 120,
    "lineType": "IPLC专线",
    "protocols": [
      "Shadowsocks"
    ],
    "nodeCount": 60,
    "speedMbps": 690,
    "latencyMs": 25,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾",
      "英国"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": true
    },
    "pros": [
      "全线 IPLC 专线接入，三网深度优化，智能动态负载均衡",
      "全节点不限速，支持 ChatGPT、Gemini、Claude 等主流 AI 生产力工具",
      "专属优惠码 weitu666"
    ],
    "cons": [
      "部分高峰期冷门节点偶尔需自动切换至主干线"
    ],
    "targetUsers": [
      "对 AI 响应速度有要求的开发者",
      "外贸与日常办公人群"
    ],
    "riskStatus": "正常运营",
    "riskNote": "专线运维平稳，客服支持在线",
    "affiliateUrl": "https://guangs.v2yunvipaff.com/#/?code=xIutqOBA",
    "officialUrl": "https://guangs.v2yunvipaff.com/#/?code=xIutqOBA",
    "couponCode": "weitu666",
    "badge": "AI深度优化",
    "isRecommended": true,
    "isTopRank": true,
    "isBudget": true,
    "isAffiliate": true,
    "minDuration": "月付",
    "priceNote": "月付18元起；优惠码 weitu666",
    "features": [
      "IPLC专线",
      "60+节点三网优化",
      "智能负载均衡",
      "全节点不限速"
    ],
    "description": "唯兔云以 IPLC 专线与三网智能负载均衡为核心，60 余个节点覆盖全球关键互联网交换节点。重点强化了对 OpenAI、Anthropic Claude 等主流 AI 服务的解锁支持。",
    "screenshots": [
      "/assets/speedtest/weitu-speedtest.png"
    ],
    "packages": [
      {
        "name": "唯兔·标准版",
        "price": "¥18 / 月",
        "traffic": "120 GB / 月",
        "line": "IPLC 专线",
        "features": [
          "三网优化专线",
          "主流AI全面解锁",
          "不限设备连接"
        ]
      }
    ],
    "dataVerificationDate": "2026-10-19（结合 2026-08-11 实测包与历史归档核对）",
    "usageMode": "专属客户端 / 支持 Clash、Shadowrocket 等主流客户端导入",
    "allPackages": [
      {
        "name": "唯兔云·年付加强专线",
        "billingCycle": "年付",
        "price": "¥120",
        "traffic": "75GB",
        "period": "每月"
      },
      {
        "name": "唯兔云·年付版限量款",
        "billingCycle": "年付",
        "price": "¥79.90",
        "traffic": "45GB",
        "period": "每月"
      },
      {
        "name": "唯兔云·节假日限时开启（14.9元）",
        "billingCycle": "月付",
        "price": "¥14.9",
        "traffic": "100GB",
        "period": "每月"
      },
      {
        "name": "唯兔云·普通版",
        "billingCycle": "月付",
        "price": "¥19.90",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "唯兔云·进阶版",
        "billingCycle": "月付",
        "price": "¥29.90",
        "traffic": "200GB",
        "period": "每月"
      },
      {
        "name": "唯兔云·专业版",
        "billingCycle": "月付",
        "price": "¥59.90",
        "traffic": "500GB",
        "period": "每月"
      },
      {
        "name": "唯兔云·至尊版",
        "billingCycle": "月付",
        "price": "¥119.90",
        "traffic": "1000GB",
        "period": "每月"
      },
      {
        "name": "唯兔云·永久不限时",
        "billingCycle": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "period": "一次性"
      },
      {
        "name": "唯兔云·永久不限时",
        "billingCycle": "一次性付费",
        "price": "¥160",
        "traffic": "200GB",
        "period": "一次性"
      },
      {
        "name": "唯兔云·永久不限时",
        "billingCycle": "一次性付费",
        "price": "¥340",
        "traffic": "500GB",
        "period": "一次性"
      }
    ],
    "regionalSpeedtests": [
      {
        "region": "香港",
        "latency": "27ms",
        "download": "500Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "台湾",
        "latency": "37ms",
        "download": "100Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "新加坡",
        "latency": "44ms",
        "download": "414Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "日本",
        "latency": "56ms",
        "download": "147Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "美国",
        "latency": "179ms",
        "download": "17Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      }
    ],
    "screenshotMeta": [
      {
        "src": "/assets/speedtest/weitu-speedtest.png",
        "caption": "唯兔云 节点测速实测（MAI-TEST-BOT 2.0.0-dev，协议显示：Shadowsocks，时间：2026-08-11 13:55:08 CST）",
        "alt": "唯兔云 2026-08-11 Shadowsocks 节点测速实测截图",
        "testedAt": "2026-08-11 13:55:08 (CST)",
        "toolFamily": "MAI-TEST-BOT 2.0.0-dev",
        "protocolDisplayed": "Shadowsocks",
        "dataStatus": "measured",
        "limitation": "单日单次实测快照，不同品牌采样时段不同，不构成跨品牌实时排名，亦不单独证明长期在线率。 本截图未覆盖 AI 与流媒体逐项解锁。"
      }
    ],
    "speedtestNote": "已双源核对：具备 2026-08-11 节点实测图与 2026-10-19 非晚高峰 5 地区测速记录。"
  },
  {
    "id": "firefly",
    "name": "Firefly",
    "slug": "firefly",
    "slogan": "IPLC 纯专线 + VLESS 协议 · 原生 IP 落地 · 6 档套餐 · 免翻墙直连官网",
    "established": "2023年",
    "score": 9.4,
    "ratingCount": 1290,
    "monthlyPrice": 15,
    "annualPrice": 150,
    "traffic": 100,
    "lineType": "IPLC专线",
    "protocols": [
      "VLESS"
    ],
    "nodeCount": 50,
    "speedMbps": 650,
    "latencyMs": 27,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": true
    },
    "pros": [
      "IPLC 纯专线接入，主打超低时延与原生 IP 落地",
      "提供 6 档灵活套餐与不限时按量流量包",
      "国内网络环境下支持免翻墙直接访问品牌官网与更新订阅",
      "专属优惠码 firefly"
    ],
    "cons": [
      "品牌与微风、飞鸟有一定同系技术渊源"
    ],
    "targetUsers": [
      "喜欢原生 IP 与低延迟专线的极客用户",
      "经常需要直连官网管理服务的用户"
    ],
    "riskStatus": "正常运营",
    "riskNote": "专线状态良好，免翻官网维护及时",
    "affiliateUrl": "https://vip02.fireflyaff.com/#/?code=2n7VURre",
    "officialUrl": "https://vip02.fireflyaff.com/#/?code=2n7VURre",
    "couponCode": "firefly",
    "badge": "免翻官网",
    "isRecommended": true,
    "isTopRank": true,
    "isBudget": true,
    "isAffiliate": true,
    "minDuration": "月付",
    "priceNote": "月付15元起；支持6档套餐及不限时按量；专属优惠码 firefly",
    "features": [
      "IPLC专线",
      "VLESS协议",
      "免翻墙访问官网",
      "原生IP落地",
      "6档套餐可选"
    ],
    "description": "Firefly 采用纯 IPLC 专线 + VLESS 协议架构，提供原生 IP 落地与全天候低延迟。特色之一在于支持国内网络直接访问品牌官网，极大降低了用户更新订阅或找回账密的门槛。",
    "screenshots": [],
    "packages": [
      {
        "name": "Firefly·启航版",
        "price": "¥15 / 月",
        "traffic": "100 GB / 月",
        "line": "IPLC 专线",
        "features": [
          "全节点不限速",
          "免翻墙官网访问",
          "原生IP解锁"
        ]
      }
    ],
    "dataVerificationDate": "2026-10-19（结合 2026-08-11 实测包与历史归档核对）",
    "usageMode": "专属客户端，下载登录即用（不提供第三方订阅链接；与微风/飞鸟/一云梯同系）",
    "allPackages": [
      {
        "name": "Firefly 年付版",
        "billingCycle": "年付",
        "price": "¥96",
        "traffic": "60GB",
        "period": "每月"
      },
      {
        "name": "Firefly Lite",
        "billingCycle": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "Firefly Plus",
        "billingCycle": "月付",
        "price": "¥45",
        "traffic": "300GB",
        "period": "每月"
      },
      {
        "name": "Firefly Blaze",
        "billingCycle": "月付",
        "price": "¥85",
        "traffic": "600GB",
        "period": "每月"
      },
      {
        "name": "Firefly Nova",
        "billingCycle": "月付",
        "price": "¥150",
        "traffic": "1000GB",
        "period": "每月"
      },
      {
        "name": "Firefly 不限时",
        "billingCycle": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "period": "一次性"
      }
    ],
    "regionalSpeedtests": [
      {
        "region": "香港",
        "latency": "27ms",
        "download": "547Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "台湾",
        "latency": "39ms",
        "download": "135Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "新加坡",
        "latency": "42ms",
        "download": "445Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "日本",
        "latency": "57ms",
        "download": "147Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "美国",
        "latency": "143ms",
        "download": "30Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      }
    ],
    "unlockDetails": {
      "supported": [
        "ChatGPT",
        "Claude",
        "Netflix",
        "Disney+",
        "YouTube",
        "HBO Max",
        "TikTok",
        "Spotify"
      ],
      "conditional": [
        "Gemini（视节点而定）"
      ]
    }
  },
  {
    "id": "yuzhou",
    "name": "宇宙云",
    "slug": "yuzhou",
    "slogan": "IEPL + VLESS · 2025 新生代高带宽 · 自研客户端与通用订阅双支持",
    "established": "2025年",
    "score": 9.3,
    "ratingCount": 980,
    "monthlyPrice": 8,
    "annualPrice": 190,
    "traffic": 150,
    "lineType": "IEPL专线",
    "protocols": [
      "VLESS"
    ],
    "nodeCount": 50,
    "speedMbps": 750,
    "latencyMs": 24,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": true
    },
    "pros": [
      "2025 年新兴专线机场，硬件基础设施新，单节点带宽冗余充裕",
      "同时提供自研客户端与通用订阅链接，兼顾新手与折腾玩家",
      "实测晚高峰香港与日本节点延迟低，下行速率突破 700Mbps",
      "优惠码 YUZHOU553"
    ],
    "cons": [
      "品牌相对较新，运营年限不及五年老牌"
    ],
    "targetUsers": [
      "看重全新基础设施与充足带宽的用户",
      "追求高画质 4K 流媒体与下载的用户"
    ],
    "riskStatus": "正常运营",
    "riskNote": "全新服务器机柜，节点负载轻，运行稳定",
    "affiliateUrl": "https://wzjc.yuzoucloud.cc/#/?code=yrThwMP1",
    "officialUrl": "https://wzjc.yuzoucloud.cc/#/?code=yrThwMP1",
    "couponCode": "YUZHOU553",
    "badge": "新锐高带宽",
    "isRecommended": true,
    "isTopRank": false,
    "isBudget": true,
    "isAffiliate": true,
    "minDuration": "年付",
    "priceNote": "历史资料起价 ¥96/年（月流量未从当前资料确定，历史优惠码 YUZHOU553 称新用户8折）；现有资料不足以列出完整多档套餐表，购买前请在官网核实",
    "features": [
      "IEPL专线",
      "VLESS协议",
      "自研客户端",
      "通用订阅双支持"
    ],
    "description": "宇宙云是 2025 年上线的新锐 IEPL 专线机场，采用清一色 VLESS 协议。因为设备新且用户密度适中，晚高峰时段测速表现抢眼，提供自研客户端与标准订阅双向支持。",
    "screenshots": [
      "/assets/speedtest/yuzhou-speedtest.png"
    ],
    "packages": [
      {
        "name": "宇宙·探索版",
        "price": "¥19 / 月",
        "traffic": "150 GB / 月",
        "line": "IEPL 专线",
        "features": [
          "全节点VLESS",
          "双客户端支持",
          "4K无压力"
        ]
      }
    ],
    "dataVerificationDate": "2026-10-19（结合 2026-08-11 实测包与历史归档核对）",
    "usageMode": "待核实（历史资料提及自研客户端，未默认是否提供通用订阅）",
    "screenshotMeta": [
      {
        "src": "/assets/speedtest/yuzhou-speedtest.png",
        "caption": "宇宙云 节点测速实测（main 4.3.3 (696) / miaosu 4.7.0 (A11-32)，协议显示：VLESS，时间：2026-08-11 21:04:24 CST）",
        "alt": "宇宙云 2026-08-11 VLESS 节点测速实测截图",
        "testedAt": "2026-08-11 21:04:24 (CST)",
        "toolFamily": "main 4.3.3 (696) / miaosu 4.7.0 (A11-32)",
        "protocolDisplayed": "VLESS",
        "dataStatus": "measured",
        "limitation": "单日单次实测快照，不同品牌采样时段不同，不构成跨品牌实时排名，亦不单独证明长期在线率。 本截图未覆盖 AI 与流媒体逐项解锁。"
      }
    ],
    "unlockDetails": {
      "supported": [],
      "conditional": [],
      "untested": [
        "AI 工具与流媒体解锁现状待核实（2026-10 清单明确留空，未默认支持）"
      ]
    },
    "speedtestNote": "已录入 2026-08-11 00:21:18 CST（VLESS）节点测速快照图；2026-10-19 分地区汇总表格及当前全部套餐细节待补充。"
  },
  {
    "id": "u1s1",
    "name": "U1S1",
    "slug": "u1s1",
    "slogan": "20 元 120GB 黄金标准 · 真实测速不虚标 · 全节点 1 倍率",
    "established": "2021年",
    "score": 9.3,
    "ratingCount": 1120,
    "monthlyPrice": 20,
    "annualPrice": 200,
    "traffic": 120,
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks"
    ],
    "nodeCount": 46,
    "speedMbps": 620,
    "latencyMs": 27,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": true
    },
    "pros": [
      "主打“有一说一”的务实作风，无虚构宣传",
      "月付 20 元 120GB 黄金标准配置，适合主力日常",
      "全节点保持 1 倍率，不设套路",
      "优惠码 akaka"
    ],
    "cons": [
      "缺少超大容量企业定制方案"
    ],
    "targetUsers": [
      "追求透明实在、讨厌营销套路的用户",
      "日常主力使用人群"
    ],
    "riskStatus": "正常运营",
    "riskNote": "老牌务实品牌，财务稳定",
    "affiliateUrl": "https://guangs.vipaff.cc/#/?code=xhX5X22f",
    "officialUrl": "https://guangs.vipaff.cc/#/?code=xhX5X22f",
    "couponCode": "akaka",
    "badge": "实在老牌",
    "isRecommended": true,
    "isTopRank": false,
    "isBudget": true,
    "isAffiliate": true,
    "minDuration": "月付",
    "priceNote": "月付20元/120GB起；优惠码 akaka",
    "features": [
      "全节点1倍率",
      "20元120GB标准",
      "真实不虚标",
      "IEPL专线"
    ],
    "description": "U1S1 品牌取名于中文网络流行语“有一说一”，以价格透明、无虚高测速、无暗箱倍率著称。全节点 1 倍率，实测晚高峰稳定跑满常见宽带。",
    "screenshots": [
      "/assets/speedtest/u1s1-speedtest.png"
    ],
    "packages": [
      {
        "name": "U1S1·标准版",
        "price": "¥20 / 月",
        "traffic": "120 GB / 月",
        "line": "IEPL 专线",
        "features": [
          "全节点1倍率",
          "无暗箱计费",
          "稳定抗干扰"
        ]
      }
    ],
    "dataVerificationDate": "2026-10-19（结合 2026-08-11 实测包与历史归档核对）",
    "usageMode": "支持 Clash / Shadowrocket / Sing-box 等第三方通用订阅",
    "allPackages": [
      {
        "name": "u1s1·就是好用包",
        "billingCycle": "年付",
        "price": "¥96",
        "traffic": "60GB",
        "period": "每月"
      },
      {
        "name": "u1s1·普通人真够了包",
        "billingCycle": "月付",
        "price": "¥20",
        "traffic": "120GB",
        "period": "每月"
      },
      {
        "name": "u1s1·你以为用不到包",
        "billingCycle": "月付",
        "price": "¥40",
        "traffic": "300GB",
        "period": "每月"
      },
      {
        "name": "u1s1·瘾大就拉满包",
        "billingCycle": "月付",
        "price": "¥100",
        "traffic": "700GB",
        "period": "每月"
      },
      {
        "name": "u1s1·我全都要包",
        "billingCycle": "月付",
        "price": "¥180",
        "traffic": "1500GB",
        "period": "每月"
      }
    ],
    "regionalSpeedtests": [
      {
        "region": "香港",
        "latency": "24ms",
        "download": "538Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "台湾",
        "latency": "39ms",
        "download": "107Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "新加坡",
        "latency": "46ms",
        "download": "414Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "日本",
        "latency": "57ms",
        "download": "133Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "美国",
        "latency": "134ms",
        "download": "20Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      }
    ],
    "screenshotMeta": [
      {
        "src": "/assets/speedtest/u1s1-speedtest.png",
        "caption": "U1S1 节点测速实测（MAI-TEST-BOT 2.0.0-dev，协议显示：Shadowsocks，时间：2026-08-11 22:33:29 CST）",
        "alt": "U1S1 2026-08-11 Shadowsocks 节点测速实测截图",
        "testedAt": "2026-08-11 22:33:29 (CST)",
        "toolFamily": "MAI-TEST-BOT 2.0.0-dev",
        "protocolDisplayed": "Shadowsocks",
        "dataStatus": "measured",
        "limitation": "单日单次实测快照，不同品牌采样时段不同，不构成跨品牌实时排名，亦不单独证明长期在线率。 本截图未覆盖 AI 与流媒体逐项解锁。"
      }
    ]
  },
  {
    "id": "lingmao",
    "name": "灵猫网络",
    "slug": "lingmao",
    "slogan": "19 元 150GB 充足流量 · 支持不限时按量 · 物理专线与原生住宅 IP",
    "established": "2021年",
    "score": 9.3,
    "ratingCount": 1210,
    "monthlyPrice": 19,
    "annualPrice": 190,
    "traffic": 150,
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks"
    ],
    "nodeCount": 52,
    "speedMbps": 640,
    "latencyMs": 26,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": true
    },
    "pros": [
      "月付 19 元提供 150GB 充足流量，性价比高于同价位竞品",
      "全线采用 IEPL 物理专线搭配部分原生住宅 IP 落地",
      "提供不限时按量套餐，适合多设备日常备用",
      "专属优惠码 lmao888"
    ],
    "cons": [
      "客服主要以工单为主，非即时在线聊天"
    ],
    "targetUsers": [
      "追求充裕流量与性价比的日常重度用户",
      "偶尔需要按量不限时备用的极客"
    ],
    "riskStatus": "正常运营",
    "riskNote": "骨干线路充裕，运营平稳",
    "affiliateUrl": "https://vip01.civetnet.com/#/?code=8MIAyxak",
    "officialUrl": "https://vip01.civetnet.com/#/?code=8MIAyxak",
    "couponCode": "lmao888",
    "badge": "大流量专线",
    "isRecommended": true,
    "isTopRank": false,
    "isBudget": true,
    "isAffiliate": true,
    "minDuration": "月付",
    "priceNote": "月付19元/150GB起；支持不限时按量包；优惠码 lmao888",
    "features": [
      "19元150GB",
      "IEPL物理专线",
      "不限时套餐",
      "原生住宅IP"
    ],
    "description": "灵猫网络以 19 元 150GB 的大容量专线方案在圈内建立口碑。物理专线配合亚太原生 IP 落地，兼具高带宽与流媒体解锁能力，同时保留不限时流量套餐。",
    "screenshots": [
      "/assets/speedtest/lingmao-speedtest.png"
    ],
    "packages": [
      {
        "name": "灵猫·主力版",
        "price": "¥19 / 月",
        "traffic": "150 GB / 月",
        "line": "IEPL 专线",
        "features": [
          "150GB大流量",
          "原生IP落地",
          "支持4K流媒体"
        ]
      }
    ],
    "dataVerificationDate": "2026-10-19（结合 2026-08-11 实测包与历史归档核对）",
    "usageMode": "自研客户端 + 支持第三方通用订阅导入",
    "secondaryCoupon": "lingmao",
    "allPackages": [
      {
        "name": "灵猫·年付小包",
        "billingCycle": "年付",
        "price": "¥85",
        "traffic": "45GB",
        "period": "每月"
      },
      {
        "name": "灵猫·年付Small",
        "billingCycle": "年付",
        "price": "¥195",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "灵猫·年付Big",
        "billingCycle": "年付",
        "price": "¥295",
        "traffic": "300GB",
        "period": "每月"
      },
      {
        "name": "灵猫·季付Big",
        "billingCycle": "季付",
        "price": "¥125",
        "traffic": "300GB",
        "period": "每月"
      },
      {
        "name": "灵猫·月付Small",
        "billingCycle": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "灵猫·月付Big",
        "billingCycle": "月付",
        "price": "¥45",
        "traffic": "300GB",
        "period": "每月"
      }
    ],
    "regionalSpeedtests": [
      {
        "region": "香港",
        "latency": "22ms",
        "download": "492Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "台湾",
        "latency": "40ms",
        "download": "109Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "新加坡",
        "latency": "46ms",
        "download": "409Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "日本",
        "latency": "57ms",
        "download": "147Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "美国",
        "latency": "164ms",
        "download": "19Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      }
    ],
    "screenshotMeta": [
      {
        "src": "/assets/speedtest/lingmao-speedtest.png",
        "caption": "灵猫网络 节点测速实测（MAI-TEST-BOT 2.0.0-dev，协议显示：Shadowsocks，时间：2026-08-11 18:45:40 CST）",
        "alt": "灵猫网络 2026-08-11 Shadowsocks 节点测速实测截图",
        "testedAt": "2026-08-11 18:45:40 (CST)",
        "toolFamily": "MAI-TEST-BOT 2.0.0-dev",
        "protocolDisplayed": "Shadowsocks",
        "dataStatus": "measured",
        "limitation": "单日单次实测快照，不同品牌采样时段不同，不构成跨品牌实时排名，亦不单独证明长期在线率。 本截图未覆盖 AI 与流媒体逐项解锁。"
      }
    ]
  },
  {
    "id": "jilianyun",
    "name": "极连云",
    "slug": "jilianyun",
    "slogan": "18 元 100GB · 全节点 IEPL 物理专线 · 官方宣称覆盖 AI 与大模型加速",
    "established": "2022年",
    "score": 9.2,
    "ratingCount": 1080,
    "monthlyPrice": 18,
    "annualPrice": 180,
    "traffic": 100,
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks"
    ],
    "nodeCount": 45,
    "speedMbps": 610,
    "latencyMs": 28,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": true
    },
    "pros": [
      "月付 18 元起步，具备良好的专线稳定性",
      "品牌资料明确针对常用 AI 工具与科研检索进行路由优化",
      "优惠码 ji8888"
    ],
    "cons": [
      "节点地区以东亚与美西核心地区为主，小众节点较少"
    ],
    "targetUsers": [
      "科研与 AI 工具使用者",
      "外贸日常办公"
    ],
    "riskStatus": "正常运营",
    "riskNote": "运行正常，线路健康",
    "affiliateUrl": "https://guangs.jlyvipaff.com/#/?code=VM1rKGUu",
    "officialUrl": "https://guangs.jlyvipaff.com/#/?code=VM1rKGUu",
    "couponCode": "ji8888",
    "badge": "AI科研优化",
    "isRecommended": true,
    "isTopRank": false,
    "isBudget": true,
    "isAffiliate": true,
    "minDuration": "月付",
    "priceNote": "月付18元/100GB起；优惠码 ji8888",
    "features": [
      "18元100GB",
      "IEPL专线",
      "AI大模型优化",
      "三网优化"
    ],
    "description": "极连云采用全节点 IEPL 专线接入，针对国内三网做了特定路由优化，重点保障 ChatGPT、Claude 等大模型的会话连接低延迟与抗波动。",
    "screenshots": [
      "/assets/speedtest/jilianyun-speedtest.png"
    ],
    "packages": [
      {
        "name": "极连·标准版",
        "price": "¥18 / 月",
        "traffic": "100 GB / 月",
        "line": "IEPL 专线",
        "features": [
          "全节点可用",
          "AI大模型解锁",
          "抗干扰强"
        ]
      }
    ],
    "dataVerificationDate": "2026-10-19（结合 2026-08-11 实测包与历史归档核对）",
    "usageMode": "自研客户端 + 支持第三方通用订阅导入",
    "screenshotMeta": [
      {
        "src": "/assets/speedtest/jilianyun-speedtest.png",
        "caption": "极连云 节点测速实测（MAI-TEST-BOT 2.0.0-dev，协议显示：Shadowsocks，时间：2026-08-11 22:46:50 CST）",
        "alt": "极连云 2026-08-11 Shadowsocks 节点测速实测截图",
        "testedAt": "2026-08-11 22:46:50 (CST)",
        "toolFamily": "MAI-TEST-BOT 2.0.0-dev",
        "protocolDisplayed": "Shadowsocks",
        "dataStatus": "measured",
        "limitation": "单日单次实测快照，不同品牌采样时段不同，不构成跨品牌实时排名，亦不单独证明长期在线率。 本截图未覆盖 AI 与流媒体逐项解锁。"
      }
    ]
  },
  {
    "id": "guangnianti",
    "name": "光年梯",
    "slug": "guangnianti",
    "slogan": "18 元 110GB · 顶级 IPLC 纯专线 · 骨干网接入 · 极致低延迟",
    "established": "2022年",
    "score": 9.2,
    "ratingCount": 1150,
    "monthlyPrice": 18,
    "annualPrice": 180,
    "traffic": 110,
    "lineType": "IPLC专线",
    "protocols": [
      "Shadowsocks"
    ],
    "nodeCount": 48,
    "speedMbps": 630,
    "latencyMs": 25,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": true
    },
    "pros": [
      "主打 IPLC 纯专线接入与超低延迟",
      "月付 18 元 110GB，性价比优异",
      "优惠码 gnt6666"
    ],
    "cons": [
      "大促期间客服工单偶有排队"
    ],
    "targetUsers": [
      "对游戏或交互时延敏感的用户",
      "日常轻重度流媒体爱好者"
    ],
    "riskStatus": "正常运营",
    "riskNote": "专线带宽稳定，无异常警报",
    "affiliateUrl": "https://guangs.gntaff.com/#/?code=X1FoxjGE",
    "officialUrl": "https://guangs.gntaff.com/#/?code=X1FoxjGE",
    "couponCode": "gnt6666",
    "badge": "纯专线低延迟",
    "isRecommended": true,
    "isTopRank": false,
    "isBudget": true,
    "isAffiliate": true,
    "minDuration": "月付",
    "priceNote": "月付18元/110GB起；优惠码 gnt6666",
    "features": [
      "IPLC纯专线",
      "骨干网接入",
      "18元110GB",
      "极低延迟"
    ],
    "description": "光年梯采用 IPLC 骨干专线物理点对点直连，主打低网络抖动与稳定游戏/办公延迟。实测晚高峰丢包率极低，价格平民。",
    "screenshots": [
      "/assets/speedtest/guangnianti-speedtest.png"
    ],
    "packages": [
      {
        "name": "光年·探索版",
        "price": "¥18 / 月",
        "traffic": "110 GB / 月",
        "line": "IPLC 专线",
        "features": [
          "骨干网直连",
          "低抖动低延迟",
          "全设备支持"
        ]
      }
    ],
    "dataVerificationDate": "2026-10-19（结合 2026-08-11 实测包与历史归档核对）",
    "usageMode": "自研客户端 + 支持第三方通用订阅导入",
    "screenshotMeta": [
      {
        "src": "/assets/speedtest/guangnianti-speedtest.png",
        "caption": "光年梯 节点测速实测（MAI-TEST-BOT 2.0.0-dev，协议显示：Shadowsocks，时间：2026-08-11 14:38:04 CST）",
        "alt": "光年梯 2026-08-11 Shadowsocks 节点测速实测截图",
        "testedAt": "2026-08-11 14:38:04 (CST)",
        "toolFamily": "MAI-TEST-BOT 2.0.0-dev",
        "protocolDisplayed": "Shadowsocks",
        "dataStatus": "measured",
        "limitation": "单日单次实测快照，不同品牌采样时段不同，不构成跨品牌实时排名，亦不单独证明长期在线率。 本截图未覆盖 AI 与流媒体逐项解锁。"
      }
    ]
  },
  {
    "id": "yifanyun",
    "name": "一翻云",
    "slug": "yifanyun",
    "slogan": "20 元 150GB 充足配比 · 三网优化中转与专线混合 · 稳定流媒体",
    "established": "2022年",
    "score": 9.2,
    "ratingCount": 1100,
    "monthlyPrice": 20,
    "annualPrice": 200,
    "traffic": 150,
    "lineType": "BGP隧道中转",
    "protocols": [
      "Shadowsocks"
    ],
    "nodeCount": 50,
    "speedMbps": 600,
    "latencyMs": 29,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": true
    },
    "pros": [
      "月付 20 元含 150GB，流量梯度实用",
      "三网优化智能选路，测速平稳",
      "优惠码 yfy6666"
    ],
    "cons": [
      "缺少自研一键登录客户端，需使用通用开源工具"
    ],
    "targetUsers": [
      "日常需要 150G 左右中等流量的追剧用户"
    ],
    "riskStatus": "正常运营",
    "riskNote": "运行良好，网络稳定",
    "affiliateUrl": "https://guangs.1flyunaff.cc/#/register?code=Yr7FhB7r",
    "officialUrl": "https://guangs.1flyunaff.cc/#/register?code=Yr7FhB7r",
    "couponCode": "yfy6666",
    "badge": "大流量中转",
    "isRecommended": true,
    "isTopRank": false,
    "isBudget": true,
    "isAffiliate": true,
    "minDuration": "月付",
    "priceNote": "月付20元/150GB起；优惠码 yfy6666",
    "features": [
      "20元150GB",
      "三网优化",
      "主流流媒体解锁",
      "多端支持"
    ],
    "description": "一翻云采用三网优化智能选路架构，提供 20 元 150GB 的充沛流量。适合注重流量单价与流媒体追剧的性价比爱好者。",
    "screenshots": [
      "/assets/speedtest/yifanyun-speedtest.png"
    ],
    "packages": [
      {
        "name": "一翻·畅游版",
        "price": "¥20 / 月",
        "traffic": "150 GB / 月",
        "line": "优化中转",
        "features": [
          "150GB充沛流量",
          "流媒体全解锁",
          "不限设备"
        ]
      }
    ],
    "dataVerificationDate": "2026-10-19（结合 2026-08-11 实测包与历史归档核对）",
    "usageMode": "自研客户端 + 支持第三方通用订阅导入",
    "secondaryCoupon": "1FLYYUN",
    "allPackages": [
      {
        "name": "轻享版",
        "billingCycle": "月付",
        "price": "¥20",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "舒享版",
        "billingCycle": "月付",
        "price": "¥35",
        "traffic": "350GB",
        "period": "每月"
      },
      {
        "name": "尊享版",
        "billingCycle": "月付",
        "price": "¥55",
        "traffic": "600GB",
        "period": "每月"
      },
      {
        "name": "极致版",
        "billingCycle": "月付",
        "price": "¥95",
        "traffic": "1.2TB",
        "period": "每月"
      },
      {
        "name": "98¥·年付小包",
        "billingCycle": "年付",
        "price": "¥98",
        "traffic": "60GB",
        "period": "每月"
      },
      {
        "name": "轻享版·不限时包",
        "billingCycle": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "period": "一次性"
      },
      {
        "name": "舒享版·不限时包",
        "billingCycle": "一次性付费",
        "price": "¥200",
        "traffic": "250GB",
        "period": "一次性"
      },
      {
        "name": "尊享版·不限时包",
        "billingCycle": "一次性付费",
        "price": "¥400",
        "traffic": "500GB",
        "period": "一次性"
      }
    ],
    "regionalSpeedtests": [
      {
        "region": "香港",
        "latency": "23ms",
        "download": "477Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "台湾",
        "latency": "40ms",
        "download": "117Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "新加坡",
        "latency": "42ms",
        "download": "390Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "日本",
        "latency": "53ms",
        "download": "136Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "美国",
        "latency": "180ms",
        "download": "20Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      }
    ],
    "screenshotMeta": [
      {
        "src": "/assets/speedtest/yifanyun-speedtest.png",
        "caption": "一翻云 节点测速实测（MAI-TEST-BOT 2.0.0-dev，协议显示：Shadowsocks，时间：2026-08-11 00:21:30 CST）",
        "alt": "一翻云 2026-08-11 Shadowsocks 节点测速实测截图",
        "testedAt": "2026-08-11 00:21:30 (CST)",
        "toolFamily": "MAI-TEST-BOT 2.0.0-dev",
        "protocolDisplayed": "Shadowsocks",
        "dataStatus": "measured",
        "limitation": "单日单次实测快照，不同品牌采样时段不同，不构成跨品牌实时排名，亦不单独证明长期在线率。 本截图未覆盖 AI 与流媒体逐项解锁。"
      }
    ],
    "speedtestNote": "已双源核对：具备 2026-08-11 节点实测图与 2026-10-19 非晚高峰 5 地区测速记录。"
  },
  {
    "id": "sogoyun",
    "name": "SOGO 云",
    "slug": "sogoyun",
    "slogan": "2026 新晋高标准品牌 · 全新硬件集群 · 极低负载高并发",
    "established": "2026年",
    "score": 9.1,
    "ratingCount": 860,
    "monthlyPrice": 16,
    "annualPrice": 160,
    "traffic": 100,
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks"
    ],
    "nodeCount": 42,
    "speedMbps": 650,
    "latencyMs": 25,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": true
    },
    "pros": [
      "2026 年新锐上线，全新服务器节点，用户密度低，单节点可用速率极高",
      "月付 16 元起步门槛亲民",
      "优惠码 sss777"
    ],
    "cons": [
      "新品牌上线时间短，建议优先月付体验"
    ],
    "targetUsers": [
      "喜欢抢先体验低负载极速网络的用户"
    ],
    "riskStatus": "正常运营",
    "riskNote": "全新集群上线，监控状态良好",
    "affiliateUrl": "https://guangs.sogoyunaff.cc/#/?code=327Vs0w7",
    "officialUrl": "https://guangs.sogoyunaff.cc/#/?code=327Vs0w7",
    "couponCode": "sss777",
    "badge": "2026新锐",
    "isRecommended": true,
    "isTopRank": false,
    "isBudget": true,
    "isAffiliate": true,
    "minDuration": "月付",
    "priceNote": "月付16元/100GB起；优惠码 sss777",
    "features": [
      "2026新品牌",
      "全新服务器集群",
      "低负载高并发",
      "16元月付起"
    ],
    "description": "SOGO 云是 2026 年崭新上线的专线服务商，因其全新的硬件部署与较低的当前用户密度，在实测中表现出极为凌厉的单线程与多线程下载速率。",
    "screenshots": [
      "/assets/speedtest/sogoyun-speedtest.png"
    ],
    "packages": [
      {
        "name": "SOGO·尝鲜版",
        "price": "¥16 / 月",
        "traffic": "100 GB / 月",
        "line": "新锐专线",
        "features": [
          "低负载极速",
          "支持4K与AI",
          "优惠码折上折"
        ]
      }
    ],
    "dataVerificationDate": "2026-10-19（结合 2026-08-11 实测包与历史归档核对）",
    "usageMode": "自研客户端 + 支持第三方通用订阅导入",
    "secondaryCoupon": "SOGO10000",
    "allPackages": [
      {
        "name": "小包-年付版",
        "billingCycle": "年付",
        "price": "¥98",
        "traffic": "60GB",
        "period": "每月"
      },
      {
        "name": "基础版",
        "billingCycle": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "优选版",
        "billingCycle": "月付",
        "price": "¥45",
        "traffic": "350GB",
        "period": "每月"
      },
      {
        "name": "强化版",
        "billingCycle": "月付",
        "price": "¥80",
        "traffic": "550GB",
        "period": "每月"
      },
      {
        "name": "顶配版",
        "billingCycle": "月付",
        "price": "¥150",
        "traffic": "1.1TB",
        "period": "每月"
      },
      {
        "name": "SOGO基础餐不限时版",
        "billingCycle": "一次性付费",
        "price": "¥120",
        "traffic": "120GB",
        "period": "一次性"
      },
      {
        "name": "SOGO优选餐不限时版",
        "billingCycle": "一次性付费",
        "price": "¥220",
        "traffic": "250GB",
        "period": "一次性"
      },
      {
        "name": "SOGO强化餐不限时版",
        "billingCycle": "一次性付费",
        "price": "¥450",
        "traffic": "500GB",
        "period": "一次性"
      },
      {
        "name": "SOGO至尊餐不限时版",
        "billingCycle": "一次性付费",
        "price": "¥850",
        "traffic": "1.0TB",
        "period": "一次性"
      }
    ],
    "regionalSpeedtests": [
      {
        "region": "香港",
        "latency": "26ms",
        "download": "488Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "台湾",
        "latency": "39ms",
        "download": "118Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "新加坡",
        "latency": "43ms",
        "download": "401Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "日本",
        "latency": "57ms",
        "download": "137Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "美国",
        "latency": "140ms",
        "download": "17Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      }
    ],
    "screenshotMeta": [
      {
        "src": "/assets/speedtest/sogoyun-speedtest.png",
        "caption": "SOGO 云 节点测速实测（MAI-TEST-BOT 2.0.0-dev，协议显示：Shadowsocks，时间：2026-08-11 18:57:59 CST）",
        "alt": "SOGO 云 2026-08-11 Shadowsocks 节点测速实测截图",
        "testedAt": "2026-08-11 18:57:59 (CST)",
        "toolFamily": "MAI-TEST-BOT 2.0.0-dev",
        "protocolDisplayed": "Shadowsocks",
        "dataStatus": "measured",
        "limitation": "单日单次实测快照，不同品牌采样时段不同，不构成跨品牌实时排名，亦不单独证明长期在线率。 本截图未覆盖 AI 与流媒体逐项解锁。"
      }
    ],
    "speedtestNote": "已双源核对：具备 2026-08-11 节点实测图与 2026-10-19 非晚高峰 5 地区测速记录。"
  },
  {
    "id": "kexinyun",
    "name": "可信云",
    "slug": "kexinyun",
    "slogan": "诚实标注无虚标 · 真实数据披露 · 稳健线路运营",
    "established": "2024年",
    "score": 9.1,
    "ratingCount": 940,
    "monthlyPrice": 25,
    "annualPrice": 180,
    "traffic": 150,
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks (实测图显示)",
      "VLESS (品牌资料)"
    ],
    "nodeCount": 46,
    "speedMbps": 590,
    "latencyMs": 29,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": false,
      "claude": false,
      "gemini": false,
      "cursor": false
    },
    "streamingUnlock": {
      "netflix": false,
      "disney": false,
      "youtube": true,
      "tiktok": false
    },
    "pros": [
      "官方资料诚实标注数据缺口与测速边界，拒绝虚假宣传",
      "月付 18 元 120GB，专线稳定性经过长期验证",
      "优惠码 kkk333"
    ],
    "cons": [
      "运营风格偏向保守，功能更新频率适中"
    ],
    "targetUsers": [
      "注重数据真实性与长期踏实用网的用户"
    ],
    "riskStatus": "正常运营",
    "riskNote": "诚信度高，节点维护稳定",
    "affiliateUrl": "https://guangs.kosingaff.com/#/register?code=UYDtNlCY",
    "officialUrl": "https://guangs.kosingaff.com/#/register?code=UYDtNlCY",
    "couponCode": "kkk333",
    "badge": "诚信老实",
    "isRecommended": true,
    "isTopRank": false,
    "isBudget": true,
    "isAffiliate": true,
    "minDuration": "月付",
    "priceNote": "官方基础档 ¥25/月（150GB/月）；优惠码 kkk333",
    "features": [
      "诚实标注数据",
      "IEPL专线",
      "不虚标带宽",
      "主流解锁"
    ],
    "description": "可信云以“实事求是”在玩家群中有良好口碑，官方明确标注测试边界与限制条件。实测连接可用性高，线路持续在线率达标。",
    "screenshots": [
      "/assets/speedtest/kexinyun-speedtest.png"
    ],
    "packages": [
      {
        "name": "可信·踏实版",
        "price": "¥18 / 月",
        "traffic": "120 GB / 月",
        "line": "IEPL 专线",
        "features": [
          "数据真实不夸大",
          "全天候平稳",
          "多设备支持"
        ]
      }
    ],
    "dataVerificationDate": "2026-10-19（结合 2026-08-11 实测包与历史归档核对）",
    "usageMode": "支持第三方通用订阅（Clash / Shadowrocket 等）",
    "screenshotMeta": [
      {
        "src": "/assets/speedtest/kexinyun-speedtest.png",
        "caption": "可信云 节点测速实测（MAI-TEST-BOT 2.0.0-dev，协议显示：Shadowsocks，时间：2026-08-11 15:32:35 CST）（注：截图右下角可见 15:32:35 CST，完整日历日期由 2026-08-11 批次校准推断）",
        "alt": "可信云 2026-08-11 Shadowsocks 节点测速实测截图",
        "testedAt": "2026-08-11 15:32:35 (CST)",
        "toolFamily": "MAI-TEST-BOT 2.0.0-dev",
        "protocolDisplayed": "Shadowsocks",
        "dataStatus": "measured",
        "limitation": "单日单次实测快照，不同品牌采样时段不同，不构成跨品牌实时排名，亦不单独证明长期在线率。 本截图未覆盖 AI 与流媒体逐项解锁。"
      }
    ],
    "unlockDetails": {
      "supported": [],
      "conditional": [],
      "untested": [
        "品牌资料明确注明：AI 与流媒体目前缺乏统一实测数据，保持中性待核实结论（不预言必定解锁）"
      ]
    },
    "speedtestNote": "已有 2026-08-11 15:32:35 CST Shadowsocks 测速快照（完整日期由同批次推断）；AI 与流媒体解锁暂缺统一实测数据。"
  },
  {
    "id": "sujie",
    "name": "速界",
    "slug": "sujie",
    "slogan": "高频 AI 工具深度优化 · 跨境电商赋能 · 快速响应",
    "established": "2024年",
    "score": 9.1,
    "ratingCount": 1040,
    "monthlyPrice": 25,
    "annualPrice": 180,
    "traffic": 150,
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks (实测图显示)",
      "VLESS (品牌资料)"
    ],
    "nodeCount": 48,
    "speedMbps": 610,
    "latencyMs": 27,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": true
    },
    "pros": [
      "品牌资料着重强调 AI 工具（ChatGPT、Claude 等）的原生解锁与抗封禁",
      "节点延迟调优出色，针对跨境业务有专属节点",
      "优惠码 sss1111"
    ],
    "cons": [
      "缺少免费试用"
    ],
    "targetUsers": [
      "跨境电商从业者、AI 工具重度依赖者"
    ],
    "riskStatus": "正常运营",
    "riskNote": "线路持续优化，抗干扰力良好",
    "affiliateUrl": "https://guangs.speedworldaff.cc/#/register?code=xgXzEfZB",
    "officialUrl": "https://guangs.speedworldaff.cc/#/register?code=xgXzEfZB",
    "couponCode": "sss1111",
    "badge": "跨境AI优化",
    "isRecommended": true,
    "isTopRank": false,
    "isBudget": true,
    "isAffiliate": true,
    "minDuration": "月付",
    "priceNote": "官方基础档 ¥25/月（150GB/月）；优惠码 sss1111",
    "features": [
      "高频AI支持",
      "跨境电商优化",
      "IEPL专线",
      "稳定低丢包"
    ],
    "description": "速界主打跨境业务与 AI 工具赋能，节点覆盖香港、新加坡、美西等主要出海区域。针对海外流媒体与 API 会话做了专项分流优化。",
    "screenshots": [
      "/assets/speedtest/sujie-speedtest.png"
    ],
    "packages": [
      {
        "name": "速界·标准版",
        "price": "¥18 / 月",
        "traffic": "120 GB / 月",
        "line": "IEPL 专线",
        "features": [
          "AI会话优化",
          "跨境低时延",
          "流媒体全开"
        ]
      }
    ],
    "dataVerificationDate": "2026-10-19（结合 2026-08-11 实测包与历史归档核对）",
    "usageMode": "自研客户端 + 支持第三方通用订阅导入",
    "screenshotMeta": [
      {
        "src": "/assets/speedtest/sujie-speedtest.png",
        "caption": "速界 节点测速实测（MAI-TEST-BOT 2.0.0-dev，协议显示：Shadowsocks，时间：2026-08-11 15:39:36 CST）",
        "alt": "速界 2026-08-11 Shadowsocks 节点测速实测截图",
        "testedAt": "2026-08-11 15:39:36 (CST)",
        "toolFamily": "MAI-TEST-BOT 2.0.0-dev",
        "protocolDisplayed": "Shadowsocks",
        "dataStatus": "measured",
        "limitation": "单日单次实测快照，不同品牌采样时段不同，不构成跨品牌实时排名，亦不单独证明长期在线率。 本截图未覆盖 AI 与流媒体逐项解锁。"
      }
    ],
    "unlockDetails": {
      "supported": [
        "YouTube"
      ],
      "conditional": [
        "ChatGPT / Claude / Gemini：品牌资料明确强调 AI 使用场景，但受 IP 与风控规则影响不可承诺永久稳定，请结合节点实测"
      ],
      "untested": [
        "Netflix / Disney+ / TikTok 流媒体缺乏同批次独立解锁截图"
      ]
    }
  },
  {
    "id": "shanyue",
    "name": "闪跃",
    "slug": "shanyue",
    "slogan": "全专线 IPLC / IEPL 中转 · 24 元 150GB 高规格配置 · 晚高峰零卡顿",
    "established": "2023年",
    "score": 9,
    "ratingCount": 920,
    "monthlyPrice": 24,
    "annualPrice": 240,
    "traffic": 150,
    "lineType": "IPLC专线",
    "protocols": [
      "IPLC 纯专线（官网原文未标注具体传输协议）"
    ],
    "nodeCount": 50,
    "speedMbps": 660,
    "latencyMs": 25,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": true
    },
    "pros": [
      "月付 24 元 150GB，线路规格高，骨干网络带宽充足",
      "全专线直连，晚高峰抗丢包表现优异",
      "优惠码 shanyue"
    ],
    "cons": [
      "价格在平民机场中略高一个档位"
    ],
    "targetUsers": [
      "对晚高峰稳定性有强需求的高频用户"
    ],
    "riskStatus": "正常运营",
    "riskNote": "专线运维平稳",
    "affiliateUrl": "https://vip02.flashleapaff.com/#/?code=3lgzm9mm",
    "officialUrl": "https://vip02.flashleapaff.com/#/?code=3lgzm9mm",
    "couponCode": "shanyue",
    "badge": "高规专线",
    "isRecommended": true,
    "isTopRank": false,
    "isBudget": false,
    "isAffiliate": true,
    "minDuration": "月付",
    "priceNote": "月付24元/150GB起；优惠码 shanyue",
    "features": [
      "全专线IPLC",
      "24元150GB",
      "晚高峰抗丢包",
      "多端兼容"
    ],
    "description": "闪跃以高规格 IPLC/IEPL 专线为主打，定位偏向注重品质的重度用户。在 24 元月付档位中提供了极为坚挺的晚高峰网络可用性。",
    "screenshots": [],
    "packages": [
      {
        "name": "闪跃·精选版",
        "price": "¥24 / 月",
        "traffic": "150 GB / 月",
        "line": "IPLC 专线",
        "features": [
          "高规格专线",
          "超低抖动",
          "4K无阻碍"
        ]
      }
    ],
    "dataVerificationDate": "2026-10-19（结合 2026-08-11 实测包与历史归档核对）",
    "usageMode": "专属客户端，下载登录即用（不提供第三方订阅链接）",
    "allPackages": [
      {
        "name": "闪跃年付版",
        "billingCycle": "年付",
        "price": "¥96",
        "traffic": "60GB",
        "period": "每月"
      },
      {
        "name": "闪动 (Flicker)",
        "billingCycle": "月付",
        "price": "¥24",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "飞跃 (Leap)",
        "billingCycle": "月付",
        "price": "¥44",
        "traffic": "300GB",
        "period": "每月"
      },
      {
        "name": "瞬移 (Teleport)",
        "billingCycle": "月付",
        "price": "¥84",
        "traffic": "600GB",
        "period": "每月"
      },
      {
        "name": "跃迁 (Warp)",
        "billingCycle": "月付",
        "price": "¥134",
        "traffic": "1000GB",
        "period": "每月"
      }
    ],
    "regionalSpeedtests": [
      {
        "region": "香港",
        "latency": "23ms",
        "download": "548Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "台湾",
        "latency": "38ms",
        "download": "110Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "新加坡",
        "latency": "44ms",
        "download": "383Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "日本",
        "latency": "53ms",
        "download": "144Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "美国",
        "latency": "143ms",
        "download": "18Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      }
    ],
    "unlockDetails": {
      "supported": [
        "ChatGPT",
        "Claude",
        "Netflix",
        "Disney+",
        "YouTube",
        "HBO Max",
        "TikTok",
        "Spotify"
      ],
      "conditional": [
        "Gemini（视节点而定）"
      ]
    }
  },
  {
    "id": "quanqiuyun",
    "name": "全球云",
    "slug": "quanqiuyun",
    "slogan": "2026 新锐多区域覆盖 · 15 元 100GB 亲民起步 · 均衡稳定",
    "established": "2026年",
    "score": 9,
    "ratingCount": 810,
    "monthlyPrice": 15,
    "annualPrice": 150,
    "traffic": 100,
    "lineType": "BGP隧道中转",
    "protocols": [
      "Shadowsocks"
    ],
    "nodeCount": 45,
    "speedMbps": 580,
    "latencyMs": 31,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾",
      "欧洲"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": true
    },
    "pros": [
      "2026 新品牌，单价适中，15 元 100GB 覆盖主流出海需求",
      "节点涵盖亚洲核心与欧美主要国家",
      "优惠码 qqy7777"
    ],
    "cons": [
      "新上线品牌，需持续观察长期运营表现"
    ],
    "targetUsers": [
      "寻找高性价比新品牌的日常用网者"
    ],
    "riskStatus": "正常运营",
    "riskNote": "新集群负载适中，监控正常",
    "affiliateUrl": "https://guangs.gcvipaff.com/#/?code=Ov2nvU9C",
    "officialUrl": "https://guangs.gcvipaff.com/#/?code=Ov2nvU9C",
    "couponCode": "qqy7777",
    "badge": "新锐多地区",
    "isRecommended": true,
    "isTopRank": false,
    "isBudget": true,
    "isAffiliate": true,
    "minDuration": "月付",
    "priceNote": "月付15元/100GB起；优惠码 qqy7777",
    "features": [
      "2026新品牌",
      "15元100GB",
      "多地区覆盖",
      "主流AI解锁"
    ],
    "description": "全球云是 2026 年新创立的中立代理服务商，以 15 元 100GB 的亲民定价切入，节点布局覆盖亚太与欧美多个主要国家。",
    "screenshots": [
      "/assets/speedtest/quanqiuyun-speedtest.png"
    ],
    "packages": [
      {
        "name": "全球·入门版",
        "price": "¥15 / 月",
        "traffic": "100 GB / 月",
        "line": "优化中转",
        "features": [
          "全节点可用",
          "多国家落地",
          "支持日常追剧"
        ]
      }
    ],
    "dataVerificationDate": "2026-10-19（结合 2026-08-11 实测包与历史归档核对）",
    "usageMode": "自研客户端 + 支持第三方通用订阅导入",
    "secondaryCoupon": "qq88",
    "allPackages": [
      {
        "name": "BGP 智能优化·不限时轻量包",
        "billingCycle": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "period": "一次性"
      },
      {
        "name": "BGP 智能优化·不限时标准包",
        "billingCycle": "一次性付费",
        "price": "¥360",
        "traffic": "400GB",
        "period": "一次性"
      },
      {
        "name": "BGP 智能优化·不限时大容量包",
        "billingCycle": "一次性付费",
        "price": "¥700",
        "traffic": "800GB",
        "period": "一次性"
      },
      {
        "name": "轻量版",
        "billingCycle": "年付",
        "price": "¥99",
        "traffic": "59GB",
        "period": "每月"
      },
      {
        "name": "BGP 智能优化·入门方案",
        "billingCycle": "月付",
        "price": "¥20",
        "traffic": "120GB",
        "period": "每月"
      },
      {
        "name": "BGP 智能优化·进阶方案",
        "billingCycle": "月付",
        "price": "¥40",
        "traffic": "300GB",
        "period": "每月"
      },
      {
        "name": "BGP 智能优化·高端方案",
        "billingCycle": "月付",
        "price": "¥100",
        "traffic": "700GB",
        "period": "每月"
      },
      {
        "name": "BGP 智能优化·商业方案",
        "billingCycle": "月付",
        "price": "¥180",
        "traffic": "1500GB",
        "period": "每月"
      },
      {
        "name": "独享私人专线节点",
        "billingCycle": "月付",
        "price": "¥680",
        "traffic": "500GB",
        "period": "每月"
      }
    ],
    "regionalSpeedtests": [
      {
        "region": "香港",
        "latency": "25ms",
        "download": "489Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "台湾",
        "latency": "37ms",
        "download": "117Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "新加坡",
        "latency": "45ms",
        "download": "430Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "日本",
        "latency": "55ms",
        "download": "133Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      },
      {
        "region": "美国",
        "latency": "138ms",
        "download": "18Mbps",
        "testDate": "2026-10-19 (非晚高峰)"
      }
    ],
    "screenshotMeta": [
      {
        "src": "/assets/speedtest/quanqiuyun-speedtest.png",
        "caption": "全球云 节点测速实测（MAI-TEST-BOT 2.0.0-dev，协议显示：Shadowsocks，时间：2026-08-11 15:50:43 CST）",
        "alt": "全球云 2026-08-11 Shadowsocks 节点测速实测截图",
        "testedAt": "2026-08-11 15:50:43 (CST)",
        "toolFamily": "MAI-TEST-BOT 2.0.0-dev",
        "protocolDisplayed": "Shadowsocks",
        "dataStatus": "measured",
        "limitation": "单日单次实测快照，不同品牌采样时段不同，不构成跨品牌实时排名，亦不单独证明长期在线率。 本截图未覆盖 AI 与流媒体逐项解锁。"
      }
    ],
    "speedtestNote": "已双源核对：具备 2026-08-11 节点实测图与 2026-10-19 非晚高峰 5 地区测速记录。"
  },
  {
    "id": "shandianshu",
    "name": "闪电鼠",
    "slug": "shandianshu",
    "slogan": "5.6 元/月极简预算方案 · 60GB 轻量流量 · 学生与备用良选",
    "established": "2024年",
    "score": 8.9,
    "ratingCount": 780,
    "monthlyPrice": 5.6,
    "annualPrice": 58,
    "traffic": 60,
    "lineType": "BGP隧道中转",
    "protocols": [
      "Shadowsocks"
    ],
    "nodeCount": 35,
    "speedMbps": 420,
    "latencyMs": 36,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": false,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": false,
      "youtube": true,
      "tiktok": true
    },
    "pros": [
      "月付仅 5.6 元，预算极为亲民",
      "优惠码 sd88",
      "适合轻度网页浏览与社交软件"
    ],
    "cons": [
      "非专线直连，极端晚高峰偶有波动"
    ],
    "targetUsers": [
      "极简预算学生党、应急备用用户"
    ],
    "riskStatus": "正常运营",
    "riskNote": "低价走量型服务，建议按月订购",
    "affiliateUrl": "https://qwerty.shandianshuaff.com/#/?code=rUE75iYh",
    "officialUrl": "https://qwerty.shandianshuaff.com/#/?code=rUE75iYh",
    "couponCode": "sd88",
    "badge": "极简预算",
    "isRecommended": false,
    "isTopRank": false,
    "isBudget": true,
    "isAffiliate": true,
    "minDuration": "月付",
    "priceNote": "月付5.6元/60GB起；优惠码 sd88",
    "features": [
      "5.6元月付",
      "60GB月流量",
      "高性价比备用",
      "轻度浏览"
    ],
    "description": "闪电鼠主打极度亲民的 5.6 元月付方案，提供 60GB 基础月流量，适合预算有限、仅需偶尔查阅资料或作为紧急备用的用户。",
    "screenshots": [],
    "packages": [
      {
        "name": "闪电·迷你包",
        "price": "¥5.6 / 月",
        "traffic": "60 GB / 月",
        "line": "经济中转",
        "features": [
          "5.6元亲民体验",
          "基础节点覆盖",
          "适合轻度文字浏览"
        ]
      }
    ],
    "dataVerificationDate": "2026-10-19（结合 2026-08-11 实测包与历史归档核对）",
    "usageMode": "自研客户端 + 支持第三方通用订阅导入"
  },
  {
    "id": "yunjiexian",
    "name": "云界线",
    "slug": "yunjiexian",
    "slogan": "5.6 元经济实惠 · 60GB 入门轻量包 · 日常流畅网页",
    "established": "2024年",
    "score": 8.8,
    "ratingCount": 720,
    "monthlyPrice": 5.6,
    "annualPrice": 60,
    "traffic": 60,
    "lineType": "BGP隧道中转",
    "protocols": [
      "Shadowsocks"
    ],
    "nodeCount": 36,
    "speedMbps": 410,
    "latencyMs": 38,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": false,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": false,
      "youtube": true,
      "tiktok": true
    },
    "pros": [
      "超低起步价格，月付 5.6 元",
      "优惠码 yjx888"
    ],
    "cons": [
      "节点池较少，不建议重度下载用户选购"
    ],
    "targetUsers": [
      "低频轻度使用者"
    ],
    "riskStatus": "正常运营",
    "riskNote": "轻量服务，按月购买为佳",
    "affiliateUrl": "https://qwerty.yunjiexianaff.com/?code=HBaZ91c6",
    "officialUrl": "https://qwerty.yunjiexianaff.com/?code=HBaZ91c6",
    "couponCode": "yjx888",
    "badge": "经济入门",
    "isRecommended": false,
    "isTopRank": false,
    "isBudget": true,
    "isAffiliate": true,
    "minDuration": "月付",
    "priceNote": "月付5.6元/60GB起；优惠码 yjx888",
    "features": [
      "5.6元超低价",
      "60GB流量",
      "日常浏览",
      "优惠码支持"
    ],
    "description": "云界线以 5.6 元 60GB 的极低门槛为核心特色，服务面向日常轻度网页浏览与社交聊天需求。",
    "screenshots": [],
    "packages": [
      {
        "name": "云界·基础版",
        "price": "¥5.6 / 月",
        "traffic": "60 GB / 月",
        "line": "经济中转",
        "features": [
          "超低月付",
          "日常浏览",
          "香港/美西节点"
        ]
      }
    ],
    "dataVerificationDate": "2026-10-19（结合 2026-08-11 实测包与历史归档核对）",
    "usageMode": "自研客户端 + 支持第三方通用订阅导入（注册链接格式无 #，打开前请确认）"
  },
  {
    "id": "liulianyun",
    "name": "榴莲云",
    "slug": "liulianyun",
    "slogan": "5.6 元廉价平民机场 · 60GB 基础流量 · 优惠码 ll88",
    "established": "2024年",
    "score": 8.8,
    "ratingCount": 690,
    "monthlyPrice": 5.6,
    "annualPrice": 58,
    "traffic": 60,
    "lineType": "BGP隧道中转",
    "protocols": [
      "待核实（品牌资料未统一公布协议类型）"
    ],
    "nodeCount": 32,
    "speedMbps": 400,
    "latencyMs": 39,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": false,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": false,
      "youtube": true,
      "tiktok": true
    },
    "pros": [
      "平民价 5.6 元/月",
      "优惠码 ll88"
    ],
    "cons": [
      "协议支持相对单一"
    ],
    "targetUsers": [
      "寻找备用机场的玩家"
    ],
    "riskStatus": "正常运营",
    "riskNote": "2024年运营极限平价档（约¥5.6/月），需注意官方品牌资料未统一公布具体代理协议类型，下单前建议月付/季付小额测试",
    "affiliateUrl": "https://qwerty.liulianyunaff.com#/?code=hS5pvbfE",
    "officialUrl": "https://qwerty.liulianyunaff.com#/?code=hS5pvbfE",
    "couponCode": "ll88",
    "badge": "廉价走量",
    "isRecommended": false,
    "isTopRank": false,
    "isBudget": true,
    "isAffiliate": true,
    "minDuration": "月付",
    "priceNote": "月付5.6元起；优惠码 ll88",
    "features": [
      "5.6元月付",
      "60GB流量",
      "备用佳选"
    ],
    "description": "榴莲云定位入门廉价走量机场，满足用户以极小代价获取可用代理节点的需求。",
    "screenshots": [],
    "packages": [
      {
        "name": "榴莲·轻量包",
        "price": "¥5.6 / 月",
        "traffic": "60 GB / 月",
        "line": "中转节点",
        "features": [
          "5.6元门槛",
          "日常网页浏览"
        ]
      }
    ],
    "dataVerificationDate": "2026-10-19（结合 2026-08-11 实测包与历史归档核对）",
    "usageMode": "自研客户端 + 支持第三方通用订阅导入（具体协议类型官方未统一公示）"
  },
  {
    "id": "shenxing",
    "name": "神行加速",
    "slug": "shenxing",
    "slogan": "14 元 120GB 实用配置 · 稳定中转专线 · 优惠码 xs0077",
    "established": "2023年",
    "score": 8.9,
    "ratingCount": 820,
    "monthlyPrice": 14,
    "annualPrice": 140,
    "traffic": 120,
    "lineType": "BGP隧道中转",
    "protocols": [
      "Shadowsocks"
    ],
    "nodeCount": 42,
    "speedMbps": 540,
    "latencyMs": 32,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": true
    },
    "pros": [
      "14 元 120GB 价格适中，比常规 20 元档稍低",
      "优惠码 xs0077"
    ],
    "cons": [
      "缺少专属客户端"
    ],
    "targetUsers": [
      "追求实用性与合理定价的日常用户"
    ],
    "riskStatus": "正常运营",
    "riskNote": "运维良好",
    "affiliateUrl": "https://qwerty.shenxingaff.com/#/?code=gawDQqVE",
    "officialUrl": "https://qwerty.shenxingaff.com/#/?code=gawDQqVE",
    "couponCode": "xs0077",
    "badge": "实用中转",
    "isRecommended": false,
    "isTopRank": false,
    "isBudget": true,
    "isAffiliate": true,
    "minDuration": "月付",
    "priceNote": "月付14元/120GB起；优惠码 xs0077",
    "features": [
      "14元120GB",
      "中转优化",
      "实用流媒体解锁"
    ],
    "description": "神行加速提供 14 元 120GB 的实用型配置，在 15 元以下区间提供了较为稳定的亚太节点访问能力。",
    "screenshots": [],
    "packages": [
      {
        "name": "神行·实用包",
        "price": "¥14 / 月",
        "traffic": "120 GB / 月",
        "line": "中转专线",
        "features": [
          "14元月付",
          "120GB可用",
          "流媒体支持"
        ]
      }
    ],
    "dataVerificationDate": "2026-10-19（结合 2026-08-11 实测包与历史归档核对）",
    "usageMode": "自研客户端 + 支持第三方通用订阅导入"
  },
  {
    "id": "huanqiuti",
    "name": "环球梯",
    "slug": "huanqiuti",
    "slogan": "5.6 元入门备用 · 60GB 基础月流量 · 优惠码 HQ66",
    "established": "2024年",
    "score": 8.8,
    "ratingCount": 670,
    "monthlyPrice": 5.6,
    "annualPrice": 58,
    "traffic": 60,
    "lineType": "BGP隧道中转",
    "protocols": [
      "Shadowsocks"
    ],
    "nodeCount": 30,
    "speedMbps": 390,
    "latencyMs": 40,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": false,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": false,
      "youtube": true,
      "tiktok": true
    },
    "pros": [
      "5.6 元低价体验",
      "优惠码 HQ66"
    ],
    "cons": [
      "节点规模较小"
    ],
    "targetUsers": [
      "低频轻度使用者"
    ],
    "riskStatus": "正常运营",
    "riskNote": "正常",
    "affiliateUrl": "https://qwerty.huanqiutiaff.com/?code=9I4KRNPH",
    "officialUrl": "https://qwerty.huanqiutiaff.com/?code=9I4KRNPH",
    "couponCode": "HQ66",
    "badge": "极低价备用",
    "isRecommended": false,
    "isTopRank": false,
    "isBudget": true,
    "isAffiliate": true,
    "minDuration": "月付",
    "priceNote": "月付5.6元起；优惠码 HQ66",
    "features": [
      "5.6元门槛",
      "60GB流量",
      "备用选择"
    ],
    "description": "环球梯以 5.6 元月付的亲民价格为特色，适合作为日常主力的第二条备用防断网线路。",
    "screenshots": [],
    "packages": [
      {
        "name": "环球·轻量款",
        "price": "¥5.6 / 月",
        "traffic": "60 GB / 月",
        "line": "经济中转",
        "features": [
          "5.6元月付",
          "轻量使用"
        ]
      }
    ],
    "dataVerificationDate": "2026-10-19（结合 2026-08-11 实测包与历史归档核对）",
    "usageMode": "自研客户端 + 支持第三方通用订阅导入（注册链接格式无 #，打开前请确认）"
  },
  {
    "id": "yinxingren",
    "name": "隐形人",
    "slug": "yinxingren",
    "slogan": "企业级 IPLC 专线直连 · 自研高颜值客户端 · 1 小时修复承诺",
    "established": "2024年",
    "score": 9.1,
    "ratingCount": 1150,
    "monthlyPrice": 9.08,
    "annualPrice": 109,
    "traffic": 80,
    "lineType": "IPLC专线",
    "protocols": [
      "IPLC 企业专线（官网未公开标明协议字段）"
    ],
    "nodeCount": 60,
    "speedMbps": 720,
    "latencyMs": 24,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": true
    },
    "pros": [
      "企业级 IPLC 专线直连，晚高峰零卡顿、秒开 4K/8K 流媒体",
      "自研专属客户端，操作极简，零门槛连接",
      "官方提供 1 小时故障修复承诺",
      "年付 109 元 80GB/月（折合约 9 元/月），月付 24 元 144GB 起",
      "优惠码 yxr888 / moon80 (8折)"
    ],
    "cons": [
      "不提供第三方订阅导入，只能使用官方自研客户端"
    ],
    "targetUsers": [
      "喜欢开箱即用专属客户端的用户",
      "对晚高峰连通率有严苛要求的白领与影音发烧友"
    ],
    "riskStatus": "正常运营",
    "riskNote": "专线稳定度高，客户端升级频繁",
    "affiliateUrl": "https://yinxingren1.invisibleaff.com/#/?code=kcyEeoJT",
    "officialUrl": "https://yinxingren1.invisibleaff.com/#/?code=kcyEeoJT",
    "couponCode": "yxr888",
    "badge": "企业级专线",
    "isRecommended": true,
    "isTopRank": false,
    "isBudget": true,
    "isAffiliate": true,
    "minDuration": "年付",
    "priceNote": "年付小包「星耀风暴」¥109/年（80GB/月，折约 ¥9.08/月）；月付「白银纪元」¥24/144GB 起；主用优惠码 yxr888（另有历史折扣码 moon80 可8折，无试用，仅支持自有客户端）",
    "features": [
      "IPLC专线直连",
      "自研专属客户端",
      "1小时修复承诺",
      "4K/8K秒开",
      "支持主流AI与流媒体"
    ],
    "description": "隐形人走企业级 IPLC 专线直连路线，晚高峰网络几乎零丢包。全线配备自研全平台客户端，无需配置订阅一键连接。年付折合仅 9 元/月，性价比出众。",
    "screenshots": [],
    "packages": [
      {
        "name": "年付小包 (高性价比)",
        "price": "¥109 / 年 (折合 ~9 元/月)",
        "traffic": "80 GB / 月",
        "line": "企业级 IPLC 专线",
        "features": [
          "自研客户端一键连接",
          "4K/8K极速秒开",
          "8折码 moon80 可用"
        ]
      },
      {
        "name": "月付旗舰",
        "price": "¥24 / 月",
        "traffic": "144 GB / 月",
        "line": "IPLC 纯专线",
        "features": [
          "144GB充足流量",
          "全节点不限速",
          "故障1小时修复保障"
        ]
      }
    ],
    "dataVerificationDate": "2026-10-19（结合 2026-08-11 实测包与历史归档核对）",
    "usageMode": "专属自带客户端（不提供 Clash/Shadowrocket 等第三方订阅链接）",
    "secondaryCoupon": "moon80",
    "allPackages": [
      {
        "name": "隐形人 白银纪元",
        "billingCycle": "月付",
        "price": "¥24",
        "traffic": "144GB",
        "period": "每月"
      },
      {
        "name": "隐形人 黄金序列",
        "billingCycle": "月付",
        "price": "¥48",
        "traffic": "360GB",
        "period": "每月"
      },
      {
        "name": "隐形人 铂金至臻",
        "billingCycle": "月付",
        "price": "¥105",
        "traffic": "750GB",
        "period": "每月"
      },
      {
        "name": "隐形人 钻石穹顶",
        "billingCycle": "月付",
        "price": "¥185",
        "traffic": "1.6TB",
        "period": "每月"
      },
      {
        "name": "王者定制版",
        "billingCycle": "月付",
        "price": "¥680",
        "traffic": "500GB",
        "period": "每月"
      },
      {
        "name": "星耀风暴 365天不熄",
        "billingCycle": "年付",
        "price": "¥109",
        "traffic": "80GB",
        "period": "每月"
      },
      {
        "name": "一次性小流量",
        "billingCycle": "一次性付费",
        "price": "¥229",
        "traffic": "160GB",
        "period": "一次性"
      },
      {
        "name": "一次性标准流量包",
        "billingCycle": "一次性付费",
        "price": "¥549",
        "traffic": "420GB",
        "period": "一次性"
      },
      {
        "name": "一次性精英流量包",
        "billingCycle": "一次性付费",
        "price": "¥1199",
        "traffic": "1.0TB",
        "period": "一次性"
      }
    ],
    "unlockDetails": {
      "supported": [
        "ChatGPT",
        "Netflix",
        "Disney+",
        "YouTube",
        "HBO Max",
        "Spotify"
      ],
      "conditional": [
        "Claude（视节点而定）",
        "Gemini（视节点而定）",
        "TikTok（视节点而定）"
      ]
    }
  },
  {
    "id": "tiziyun",
    "name": "梯子云",
    "slug": "tiziyun",
    "slogan": "自研全平台客户端 + 通用订阅双支持 · 60+ 节点 · 2Gbps+ 独立带宽",
    "established": "2025年",
    "score": 9.1,
    "ratingCount": 1020,
    "monthlyPrice": 7.4,
    "annualPrice": 89,
    "traffic": 60,
    "lineType": "IEPL专线",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "nodeCount": 60,
    "speedMbps": 680,
    "latencyMs": 26,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": true
    },
    "pros": [
      "唯一兼备【小白一键登录自研客户端】与【通用开源订阅】双重支持的品牌",
      "年付折合约 7.4 元/月 60GB/月，门槛低",
      "60+ 专线节点，配备 2Gbps+ 独立带宽与 500Mbps 晚高峰冗余",
      "海外专业技术团队常驻维护，工单与在线客服快速响应",
      "优惠码 tiziyun"
    ],
    "cons": [
      "月付短期方案选择较少，年付最为划算"
    ],
    "targetUsers": [
      "既想自研客户端省事、又偶尔需要 Clash 通用订阅的用户",
      "追求高可用专线与充裕带宽的玩家"
    ],
    "riskStatus": "正常运营",
    "riskNote": "专线带宽冗余高，监控平稳",
    "affiliateUrl": "https://tiziyun3.ladderaff.com/#/?code=7EmnpHs0",
    "officialUrl": "https://tiziyun3.ladderaff.com/#/?code=7EmnpHs0",
    "couponCode": "tiziyun",
    "badge": "双模式支持",
    "isRecommended": true,
    "isTopRank": false,
    "isBudget": true,
    "isAffiliate": true,
    "minDuration": "年付",
    "priceNote": "年付折约7.4元/月(60GB/月)；优惠码 tiziyun",
    "features": [
      "自研客户端+通用订阅双支持",
      "IEPL专线",
      "60+节点",
      "2Gbps+带宽",
      "500Mbps高峰冗余"
    ],
    "description": "梯子云是 2025 年上线的特色专线机场，最大亮点在于“双模式驱动”：不仅有小白零门槛的一键自研客户端，同时开放标准通用的订阅链接，兼容各种第三方内核。具备 2Gbps+ 独立带宽与高峰冗余，流媒体与 AI 工具全面解锁。",
    "screenshots": [],
    "packages": [
      {
        "name": "梯子·年付尝鲜",
        "price": "¥89 / 年 (折合 ~7.4 元/月)",
        "traffic": "60 GB / 月",
        "line": "IEPL 专线",
        "features": [
          "双模式客户端支持",
          "60+节点",
          "AI与流媒体全开"
        ]
      }
    ],
    "dataVerificationDate": "2026-10-19（结合 2026-08-11 实测包与历史归档核对）",
    "usageMode": "自研全平台一键客户端 + 支持第三方通用订阅双模式"
  },
  {
    "id": "wgetcloud",
    "name": "WgetCloud",
    "slug": "wgetcloud",
    "slogan": "高端老牌精品专线 · 自建海外团队 · 优质骨干节点 · 企业级稳定性",
    "established": "2021年",
    "score": 8.8,
    "ratingCount": 1650,
    "monthlyPrice": 99,
    "annualPrice": 990,
    "traffic": 230,
    "lineType": "IPLC专线",
    "protocols": [
      "Trojan"
    ],
    "nodeCount": 59,
    "speedMbps": 780,
    "latencyMs": 25,
    "regions": [
      "香港",
      "台湾",
      "新加坡",
      "日本",
      "美国",
      "韩国",
      "马来西亚",
      "澳大利亚",
      "巴西",
      "英国"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": true
    },
    "pros": [
      "知名高端老牌，专线网络品质极高，晚高峰几乎感觉不到波动",
      "全节点 Trojan 协议，深度伪装与抗审查能力极强",
      "多国冷门与大带宽节点齐备，亚洲近端延迟极低（香港 25.9ms）"
    ],
    "cons": [
      "定位高端，季付 297 元起步，价格门槛高，无普通便宜月付档"
    ],
    "targetUsers": [
      "对价格不敏感、追求极端稳定与 SLA 的企业与商务人士",
      "跨国贸易公司与海外团队"
    ],
    "riskStatus": "正常运营",
    "riskNote": "自营高端专线，资金极其充沛，抗风险能力顶尖",
    "affiliateUrl": "https://invite.wgetcloud.ltd/auth/register?code=VLG2xb",
    "officialUrl": "https://invite.wgetcloud.ltd/auth/register?code=VLG2xb",
    "badge": "高端商务标杆",
    "isRecommended": false,
    "isTopRank": false,
    "isBudget": false,
    "isAffiliate": true,
    "minDuration": "季付",
    "priceNote": "季付297元起(230GB/月)；精品专线357元/季(270GB/月)",
    "features": [
      "高端IPLC精品专线",
      "Trojan协议",
      "亚洲近端超低时延",
      "企业级SLA保障"
    ],
    "description": "WgetCloud 是圈内公认的高端专线老牌代表。采用优质点对点 IPLC 专线与 Trojan 协议，多地平均下载超 50MB/s。适合预算充裕、要求全天候 99.9% 连通率的商务及团队用户。",
    "screenshots": [],
    "packages": [
      {
        "name": "基础专线服务",
        "price": "¥297 / 季 (230GB/月)",
        "traffic": "230 GB / 月",
        "line": "精品 IPLC 专线",
        "features": [
          "全节点Trojan",
          "多国优质出口",
          "晚高峰极致平稳"
        ]
      },
      {
        "name": "优质专线服务",
        "price": "¥327 / 季 (250GB/月)",
        "traffic": "250 GB / 月",
        "line": "精品 IPLC 专线",
        "features": [
          "优先客服响应",
          "更高并发支持",
          "全流媒体解锁"
        ]
      }
    ],
    "dataVerificationDate": "2026-10-19（结合 2026-08-11 实测包与历史归档核对）",
    "allPackages": [
      {
        "name": "基础专线服务",
        "billingCycle": "季付",
        "price": "¥297",
        "traffic": "230GB/月",
        "period": "每月"
      },
      {
        "name": "优质专线服务",
        "billingCycle": "季付",
        "price": "¥327",
        "traffic": "250GB/月",
        "period": "每月"
      },
      {
        "name": "精品专线服务",
        "billingCycle": "季付",
        "price": "¥357",
        "traffic": "270GB/月",
        "period": "每月"
      }
    ],
    "regionalSpeedtests": [
      {
        "region": "日本",
        "latency": "69.4ms",
        "download": "462.04Mbps",
        "testDate": "2026-05-02"
      },
      {
        "region": "美国",
        "latency": "170.2ms",
        "download": "440.04Mbps",
        "testDate": "2026-05-02"
      },
      {
        "region": "香港",
        "latency": "25.9ms",
        "download": "431.24Mbps",
        "testDate": "2026-05-02"
      },
      {
        "region": "新加坡",
        "latency": "55.6ms",
        "download": "422.97Mbps",
        "testDate": "2026-05-02"
      },
      {
        "region": "台湾",
        "latency": "41.3ms",
        "download": "407.66Mbps",
        "testDate": "2026-05-02"
      },
      {
        "region": "印度",
        "latency": "95ms",
        "download": "341.92Mbps",
        "testDate": "2026-05-02"
      },
      {
        "region": "印尼",
        "latency": "88ms",
        "download": "318.64Mbps",
        "testDate": "2026-05-02"
      }
    ],
    "speedtestNote": "保留 2026-05-02 历史批次地区统计实测值（非 2026-10-19 新测，不代表现时或长期在线率）；购买前请在官网复核当前套餐与可用性。"
  },
  {
    "id": "baiyueguang",
    "name": "白月光",
    "slug": "baiyueguang",
    "slogan": "108 节点覆盖 79 个地区 · 亚洲近端高速优化 · 季付 66 元起步",
    "established": "2022年",
    "score": 8.7,
    "ratingCount": 1420,
    "monthlyPrice": 22,
    "annualPrice": 240,
    "traffic": 100,
    "lineType": "BGP隧道中转",
    "protocols": [
      "Shadowsocks"
    ],
    "nodeCount": 108,
    "speedMbps": 560,
    "latencyMs": 35,
    "regions": [
      "香港",
      "日本",
      "台湾",
      "新加坡",
      "美国",
      "加拿大",
      "韩国",
      "越南",
      "泰国",
      "马来西亚"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": true
    },
    "pros": [
      "节点地域覆盖极其夸张，名目多达 79 个国家和地区",
      "季付入门档仅 66 元（含 100GB/月），一次性支出成本不高",
      "香港、马来西亚、泰国等亚洲近端节点连接速度较快"
    ],
    "cons": [
      "节点较多但部分冷门地区速度不均",
      "暂无直接月付小额套餐"
    ],
    "targetUsers": [
      "喜欢探索全球各地区小众节点的用户",
      "日常轻量外贸调研者"
    ],
    "riskStatus": "正常运营",
    "riskNote": "运营平稳，节点池庞大",
    "affiliateUrl": "https://www.sibker.com/register?invite_code=gg6puAId",
    "officialUrl": "https://www.sibker.com/register?invite_code=gg6puAId",
    "badge": "冷门多地区",
    "isRecommended": false,
    "isTopRank": false,
    "isBudget": true,
    "isAffiliate": true,
    "minDuration": "季付",
    "priceNote": "小包季付66元(含100GB/月)；中包季付126元(250GB/月)",
    "features": [
      "108个节点",
      "79个国家地区",
      "季付66元起",
      "亚洲近端优化"
    ],
    "description": "白月光以惊人的全球节点覆盖面而闻名，节点涉及近 80 个地区。季付 66 元的门槛相对较低，适合需要冷门国家 IP 或跨国业务测试的用户。",
    "screenshots": [],
    "packages": [
      {
        "name": "白月光·小包",
        "price": "¥66 / 季 (折合 22 元/月)",
        "traffic": "100 GB / 月",
        "line": "全球多地区中转",
        "features": [
          "海量冷门地区覆盖",
          "亚洲近端优化",
          "主流AI解锁"
        ]
      }
    ],
    "dataVerificationDate": "2026-10-19（结合 2026-08-11 实测包与历史归档核对）",
    "allPackages": [
      {
        "name": "小包",
        "billingCycle": "季付",
        "price": "¥66",
        "traffic": "每月100GB高速流量",
        "period": "每月"
      },
      {
        "name": "中包",
        "billingCycle": "季付",
        "price": "¥126",
        "traffic": "每月250GB高速流量",
        "period": "每月"
      },
      {
        "name": "大包",
        "billingCycle": "季付",
        "price": "¥156",
        "traffic": "每月400GB高速流量",
        "period": "每月"
      },
      {
        "name": "超大包",
        "billingCycle": "季付",
        "price": "¥216",
        "traffic": "每月750GB高速流量",
        "period": "每月"
      },
      {
        "name": "不差钱",
        "billingCycle": "季付",
        "price": "¥231",
        "traffic": "每月900GB高速流量",
        "period": "每月"
      },
      {
        "name": "旗舰包",
        "billingCycle": "年付",
        "price": "¥2500",
        "traffic": "每月2500GB超大流量",
        "period": "每月"
      }
    ],
    "regionalSpeedtests": [
      {
        "region": "香港",
        "latency": "160.7ms",
        "download": "114.94Mbps",
        "testDate": "2026-07-17"
      },
      {
        "region": "美国",
        "latency": "302.6ms",
        "download": "70.53Mbps",
        "testDate": "2026-07-17"
      },
      {
        "region": "日本",
        "latency": "202.4ms",
        "download": "77.65Mbps",
        "testDate": "2026-07-17"
      },
      {
        "region": "台湾",
        "latency": "—",
        "download": "0.03Mbps",
        "testDate": "2026-07-17"
      },
      {
        "region": "新加坡",
        "latency": "186.8ms",
        "download": "85.22Mbps",
        "testDate": "2026-07-17"
      },
      {
        "region": "加拿大",
        "latency": "344ms",
        "download": "62Mbps",
        "testDate": "2026-07-17"
      },
      {
        "region": "韩国",
        "latency": "358ms",
        "download": "31.28Mbps",
        "testDate": "2026-07-17"
      }
    ],
    "speedtestNote": "保留 2026-07-17 历史批次地区统计实测值（非 2026-10-19 新测，不代表现时或长期在线率）；购买前请在官网复核当前套餐与可用性。"
  },
  {
    "id": "flyingbird",
    "name": "FlyingBird",
    "slug": "flyingbird",
    "slogan": "全专线 IPLC · 无倍率不限速 · 买多少给多少活动 · 9折码 theo",
    "established": "2022年",
    "score": 8.7,
    "ratingCount": 1350,
    "monthlyPrice": 15,
    "annualPrice": 144,
    "traffic": 100,
    "lineType": "IPLC专线",
    "protocols": [
      "Shadowsocks"
    ],
    "nodeCount": 55,
    "speedMbps": 650,
    "latencyMs": 26,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": true
    },
    "pros": [
      "全专线 IPLC 架构，无倍率且不限速",
      "套餐档位与周期选择非常丰富，青铜套餐月付 15 元 100G 起",
      "折扣体系强大，支持 9 折优惠码 theo 或年付 85 折码 year85"
    ],
    "cons": [
      "支付方式支持支付宝与 USDT，不支持微信支付"
    ],
    "targetUsers": [
      "追求纯 IPLC 专线与无倍率体验的挑剔用户"
    ],
    "riskStatus": "正常运营",
    "riskNote": "多个老牌机场融合衍生，技术扎实",
    "affiliateUrl": "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
    "officialUrl": "https://flyingbird.com",
    "couponCode": "theo",
    "badge": "全专线无倍率",
    "isRecommended": false,
    "isTopRank": false,
    "isBudget": true,
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "青铜月付15元/100G起；年付144元；优惠码 theo (9折) / year85 (85折)",
    "features": [
      "全专线IPLC",
      "无倍率不限速",
      "丰富的周期折扣",
      "买多少给多少活动"
    ],
    "description": "FlyingBird（飞鸟机场）由多个老牌技术团队融合衍生，核心卖点在于“全专线 IPLC + 节点无倍率不限速”。套餐梯度非常细致，支持多重折扣优惠。",
    "screenshots": [],
    "packages": [
      {
        "name": "青铜套餐",
        "price": "¥15 / 月 (年付 144 元)",
        "traffic": "100 GB / 月",
        "line": "IPLC 纯专线",
        "features": [
          "全节点1倍率",
          "不限速",
          "支持9折优惠码 theo"
        ]
      }
    ],
    "dataVerificationDate": "2026-10-19（结合 2026-08-11 实测包与历史归档核对）",
    "secondaryCoupon": "year85",
    "allPackages": [
      {
        "name": "青铜套餐",
        "billingCycle": "月付",
        "price": "¥15",
        "traffic": "100G",
        "period": "每月"
      },
      {
        "name": "青铜套餐",
        "billingCycle": "季付",
        "price": "¥41",
        "traffic": "100G",
        "period": "每月"
      },
      {
        "name": "青铜套餐",
        "billingCycle": "半年付",
        "price": "¥77",
        "traffic": "100G",
        "period": "每月"
      },
      {
        "name": "青铜套餐",
        "billingCycle": "年付",
        "price": "¥144",
        "traffic": "100G",
        "period": "每月"
      },
      {
        "name": "白银套餐",
        "billingCycle": "月付",
        "price": "¥30",
        "traffic": "200G",
        "period": "每月"
      },
      {
        "name": "白银套餐",
        "billingCycle": "季付",
        "price": "¥81",
        "traffic": "200G",
        "period": "每月"
      },
      {
        "name": "白银套餐",
        "billingCycle": "半年付",
        "price": "¥153",
        "traffic": "200G",
        "period": "每月"
      },
      {
        "name": "白银套餐",
        "billingCycle": "年付",
        "price": "¥288",
        "traffic": "200G",
        "period": "每月"
      },
      {
        "name": "黄金套餐",
        "billingCycle": "月付",
        "price": "¥75",
        "traffic": "500G",
        "period": "每月"
      },
      {
        "name": "黄金套餐",
        "billingCycle": "季付",
        "price": "¥203",
        "traffic": "500G",
        "period": "每月"
      },
      {
        "name": "黄金套餐",
        "billingCycle": "半年付",
        "price": "¥383",
        "traffic": "500G",
        "period": "每月"
      },
      {
        "name": "黄金套餐",
        "billingCycle": "年付",
        "price": "¥720",
        "traffic": "500G",
        "period": "每月"
      },
      {
        "name": "钻石套餐",
        "billingCycle": "月付",
        "price": "¥150",
        "traffic": "1000G",
        "period": "每月"
      },
      {
        "name": "钻石套餐",
        "billingCycle": "季付",
        "price": "¥405",
        "traffic": "1000G",
        "period": "每月"
      },
      {
        "name": "钻石套餐",
        "billingCycle": "半年付",
        "price": "¥765",
        "traffic": "1000G",
        "period": "每月"
      },
      {
        "name": "钻石套餐",
        "billingCycle": "年付",
        "price": "¥1440",
        "traffic": "1000G",
        "period": "每月"
      }
    ],
    "speedtestNote": "暂无可对比的按地区独立实测与近 30 日晚高峰采样（资料来源为 2026-08-09 品牌库历史归档，未提供独立推广入口）。",
    "unlockDetails": {
      "supported": [],
      "conditional": [],
      "untested": [
        "AI 与流媒体独立逐项测试待核实，不可直接推断全量支持"
      ]
    }
  },
  {
    "id": "cyberguard",
    "name": "CyberGuard",
    "slug": "cyberguard",
    "slogan": "海外安全团队常驻 · 专线物理拓扑 · 隐私防护深度优化",
    "established": "2023年",
    "score": 8.7,
    "ratingCount": 960,
    "monthlyPrice": 20,
    "annualPrice": 200,
    "traffic": 120,
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "nodeCount": 46,
    "speedMbps": 620,
    "latencyMs": 27,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "英国"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": true
    },
    "pros": [
      "海外团队常驻维护，重度注重用户网络隐私与安全审计隔离",
      "全节点专线接入，高可用性设计",
      "支持多种加密协议"
    ],
    "cons": [
      "相对较为低调，市场推广宣传较少"
    ],
    "targetUsers": [
      "对网络安全与个人隐私隔离有较高敏感度的商务用户"
    ],
    "riskStatus": "正常运营",
    "riskNote": "安全团队运维，系统稳健",
    "affiliateUrl": "https://cyberguard.best/#/register?code=AxXNNYng",
    "officialUrl": "https://cyberguard.best/#/register?code=AxXNNYng",
    "badge": "安全隐私",
    "isRecommended": false,
    "isTopRank": false,
    "isBudget": true,
    "isAffiliate": true,
    "minDuration": "月付",
    "priceNote": "月付20元/120GB起",
    "features": [
      "海外团队运维",
      "隐私隔离",
      "IEPL专线",
      "安全加密"
    ],
    "description": "CyberGuard 强调隐私与数据安全，由海外技术人员长期运维。节点全部运行在专用物理隔离网络上，适合对隐私有高要求的极客与涉外人员。",
    "screenshots": [],
    "packages": [
      {
        "name": "Guard·基础版",
        "price": "¥20 / 月",
        "traffic": "120 GB / 月",
        "line": "安全专线",
        "features": [
          "隐私隔离",
          "IEPL专线",
          "流媒体支持"
        ]
      }
    ],
    "dataVerificationDate": "2026-10-19（结合 2026-08-11 实测包与历史归档核对）",
    "allPackages": [
      {
        "name": "150G｜轻量套餐",
        "billingCycle": "半年付",
        "price": "¥95",
        "traffic": "150GB/月",
        "period": "每月"
      },
      {
        "name": "350G｜标准套餐",
        "billingCycle": "月付",
        "price": "¥32",
        "traffic": "350GB/月",
        "period": "每月"
      },
      {
        "name": "650G｜高速套餐",
        "billingCycle": "月付",
        "price": "¥55",
        "traffic": "650GB/月",
        "period": "每月"
      },
      {
        "name": "220G流量包｜不限时",
        "billingCycle": "一次性付费",
        "price": "¥79",
        "traffic": "220GB",
        "period": "一次性（具体有效期待核实）"
      },
      {
        "name": "840G流量包｜不限时",
        "billingCycle": "一次性付费",
        "price": "¥188",
        "traffic": "840GB",
        "period": "一次性（具体有效期待核实）"
      },
      {
        "name": "2050G｜企业套餐",
        "billingCycle": "月付",
        "price": "¥200",
        "traffic": "2050GB/月",
        "period": "每月"
      }
    ],
    "regionalSpeedtests": [
      {
        "region": "日本",
        "latency": "123.8ms",
        "download": "488.83Mbps",
        "testDate": "2025-06-21"
      },
      {
        "region": "美国",
        "latency": "614ms",
        "download": "245.6Mbps",
        "testDate": "2025-06-21"
      },
      {
        "region": "澳大利亚",
        "latency": "277ms",
        "download": "279.64Mbps",
        "testDate": "2025-06-21"
      },
      {
        "region": "韩国",
        "latency": "6000ms",
        "download": "552.8Mbps",
        "testDate": "2025-06-21"
      },
      {
        "region": "德国",
        "latency": "390.5ms",
        "download": "159.96Mbps",
        "testDate": "2025-06-21"
      },
      {
        "region": "法国",
        "latency": "384ms",
        "download": "204.08Mbps",
        "testDate": "2025-06-21"
      },
      {
        "region": "阿联酋",
        "latency": "345ms",
        "download": "342.76Mbps",
        "testDate": "2025-06-21"
      }
    ],
    "speedtestNote": "保留 2025-06-21 历史批次地区统计实测值（非 2026-10-19 新测，不代表现时或长期在线率）；购买前请在官网复核当前套餐与可用性。"
  },
  {
    "id": "longmaoyun",
    "name": "龙猫云",
    "slug": "longmaoyun",
    "slogan": "SS + IPLC 全专线 · 最高 2000Mbps · 完善使用教程与新手引导",
    "established": "2022年",
    "score": 8.7,
    "ratingCount": 1180,
    "monthlyPrice": 15,
    "annualPrice": 144,
    "traffic": 100,
    "lineType": "IPLC专线",
    "protocols": [
      "Shadowsocks"
    ],
    "nodeCount": 50,
    "speedMbps": 640,
    "latencyMs": 26,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": true
    },
    "pros": [
      "SS + IPLC 全专线定位，大带宽支持（峰值 2000Mbps）",
      "站内新手教程十分详尽，涵盖各端常见报错解决方案",
      "VIP1 套餐月付 15 元 100G，年付 144 元，折扣力度较大"
    ],
    "cons": [
      "与飞鸟/一云梯存在同源架构，需合理按需选择"
    ],
    "targetUsers": [
      "喜欢完善教程的新手、日常影音追剧人群"
    ],
    "riskStatus": "正常运营",
    "riskNote": "运行良好",
    "affiliateUrl": "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
    "officialUrl": "https://longmaoyun.com",
    "badge": "教程完备",
    "isRecommended": false,
    "isTopRank": false,
    "isBudget": true,
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "VIP1月付15元/100G起；年付144元；长期订购最高48折",
    "features": [
      "SS+IPLC全专线",
      "2000Mbps带宽",
      "完善教程",
      "多周期折扣"
    ],
    "description": "龙猫云以全专线 IPLC 架构配合详尽的图文使用教程见长。支持微信、支付宝及 USDT 支付，套餐周期长达三年，多周期梯度丰富。",
    "screenshots": [],
    "packages": [
      {
        "name": "VIP1",
        "price": "¥15 / 月 (年付 144 元)",
        "traffic": "100 GB / 月",
        "line": "IPLC 专线",
        "features": [
          "全节点可用",
          "详尽配置教程",
          "日常4K支持"
        ]
      }
    ],
    "dataVerificationDate": "2026-10-19（结合 2026-08-11 实测包与历史归档核对）",
    "allPackages": [
      {
        "name": "VIP1",
        "billingCycle": "月付",
        "price": "¥15",
        "traffic": "100G",
        "period": "每月"
      },
      {
        "name": "VIP1",
        "billingCycle": "季付",
        "price": "¥41",
        "traffic": "100G",
        "period": "每月"
      },
      {
        "name": "VIP1",
        "billingCycle": "半年付",
        "price": "¥77",
        "traffic": "100G",
        "period": "每月"
      },
      {
        "name": "VIP1",
        "billingCycle": "年付",
        "price": "¥144",
        "traffic": "100G",
        "period": "每月"
      },
      {
        "name": "VIP2",
        "billingCycle": "月付",
        "price": "¥30",
        "traffic": "200G",
        "period": "每月"
      },
      {
        "name": "VIP2",
        "billingCycle": "季付",
        "price": "¥81",
        "traffic": "200G",
        "period": "每月"
      },
      {
        "name": "VIP2",
        "billingCycle": "半年付",
        "price": "¥153",
        "traffic": "200G",
        "period": "每月"
      },
      {
        "name": "VIP2",
        "billingCycle": "年付",
        "price": "¥288",
        "traffic": "200G",
        "period": "每月"
      },
      {
        "name": "VIP3",
        "billingCycle": "月付",
        "price": "¥60",
        "traffic": "400G",
        "period": "每月"
      },
      {
        "name": "VIP3",
        "billingCycle": "季付",
        "price": "¥162",
        "traffic": "400G",
        "period": "每月"
      },
      {
        "name": "VIP3",
        "billingCycle": "半年付",
        "price": "¥306",
        "traffic": "400G",
        "period": "每月"
      },
      {
        "name": "VIP3",
        "billingCycle": "年付",
        "price": "¥576",
        "traffic": "400G",
        "period": "每月"
      },
      {
        "name": "VIP4",
        "billingCycle": "月付",
        "price": "¥120",
        "traffic": "1000G",
        "period": "每月"
      },
      {
        "name": "VIP4",
        "billingCycle": "季付",
        "price": "¥324",
        "traffic": "1000G",
        "period": "每月"
      },
      {
        "name": "VIP4",
        "billingCycle": "半年付",
        "price": "¥697",
        "traffic": "1000G",
        "period": "每月"
      },
      {
        "name": "VIP4",
        "billingCycle": "年付",
        "price": "¥1152",
        "traffic": "1000G",
        "period": "每月"
      }
    ],
    "speedtestNote": "暂无可对比的按地区独立实测与近 30 日晚高峰采样（资料来源为 2026-08-09 品牌库历史归档，未提供独立推广入口）。",
    "unlockDetails": {
      "supported": [],
      "conditional": [],
      "untested": [
        "AI 与流媒体独立逐项测试待核实，不可直接推断全量支持"
      ]
    }
  },
  {
    "id": "fatcat",
    "name": "fatcat",
    "slug": "fatcat",
    "slogan": "企业级 IEPL/IPLC 内网专线 · 强抗干扰抗封锁 · 年付加强版 96 元",
    "established": "2023年",
    "score": 8.6,
    "ratingCount": 890,
    "monthlyPrice": 8,
    "annualPrice": 96,
    "traffic": 60,
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks"
    ],
    "nodeCount": 45,
    "speedMbps": 580,
    "latencyMs": 29,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": true
    },
    "pros": [
      "企业级内网专线，抗封锁抗干扰能力突出",
      "年付加强版仅 96 元（折合 8 元/月 60G），月付 20 元 120G",
      "支持支付宝、微信与 USDT"
    ],
    "cons": [
      "无专门独立客户端，依靠开源软件"
    ],
    "targetUsers": [
      "追求年付低价且线路抗干扰的稳定型用户"
    ],
    "riskStatus": "正常运营",
    "riskNote": "专线运维平稳",
    "affiliateUrl": "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
    "officialUrl": "https://fatcat.com",
    "badge": "抗干扰专线",
    "isRecommended": false,
    "isTopRank": false,
    "isBudget": true,
    "isAffiliate": false,
    "minDuration": "年付",
    "priceNote": "年付加强版96元(折合8元/月 60G)；月付20元/120G起",
    "features": [
      "IEPL/IPLC内网专线",
      "强抗干扰",
      "年付96元",
      "多流量档位"
    ],
    "description": "FATCAT（肥猫云）以企业级 IEPL/IPLC 内网专线为核心定位，强调高抗干扰能力。年付小包折合每月仅 8 元，适合轻量且长期的稳定使用者。",
    "screenshots": [],
    "packages": [
      {
        "name": "年付加强版",
        "price": "¥96 / 年 (折合 8 元/月)",
        "traffic": "60 GB / 月",
        "line": "IEPL 专线",
        "features": [
          "抗干扰专线",
          "长期稳定备用",
          "支持主流AI"
        ]
      }
    ],
    "dataVerificationDate": "2026-10-19（结合 2026-08-11 实测包与历史归档核对）",
    "allPackages": [
      {
        "name": "年付加强版",
        "billingCycle": "年付",
        "price": "¥96",
        "traffic": "60G",
        "period": "每月"
      },
      {
        "name": "基础套餐",
        "billingCycle": "月付",
        "price": "¥20",
        "traffic": "120G",
        "period": "每月"
      },
      {
        "name": "基础套餐",
        "billingCycle": "季付",
        "price": "¥54",
        "traffic": "120G",
        "period": "每月"
      },
      {
        "name": "基础套餐",
        "billingCycle": "半年付",
        "price": "¥102",
        "traffic": "120G",
        "period": "每月"
      },
      {
        "name": "基础套餐",
        "billingCycle": "年付",
        "price": "¥192",
        "traffic": "120G",
        "period": "每月"
      },
      {
        "name": "标准套餐",
        "billingCycle": "月付",
        "price": "¥40",
        "traffic": "300G",
        "period": "每月"
      },
      {
        "name": "标准套餐",
        "billingCycle": "季付",
        "price": "¥108",
        "traffic": "300G",
        "period": "每月"
      },
      {
        "name": "标准套餐",
        "billingCycle": "半年付",
        "price": "¥204",
        "traffic": "300G",
        "period": "每月"
      },
      {
        "name": "标准套餐",
        "billingCycle": "年付",
        "price": "¥384",
        "traffic": "300G",
        "period": "每月"
      },
      {
        "name": "旗舰套餐",
        "billingCycle": "月付",
        "price": "¥100",
        "traffic": "700G",
        "period": "每月"
      },
      {
        "name": "旗舰套餐",
        "billingCycle": "季付",
        "price": "¥270",
        "traffic": "700G",
        "period": "每月"
      },
      {
        "name": "旗舰套餐",
        "billingCycle": "半年付",
        "price": "¥510",
        "traffic": "700G",
        "period": "每月"
      },
      {
        "name": "旗舰套餐",
        "billingCycle": "年付",
        "price": "¥960",
        "traffic": "700G",
        "period": "每月"
      },
      {
        "name": "企业套餐",
        "billingCycle": "月付",
        "price": "¥180",
        "traffic": "1500G",
        "period": "每月"
      },
      {
        "name": "企业套餐",
        "billingCycle": "季付",
        "price": "¥486",
        "traffic": "1500G",
        "period": "每月"
      },
      {
        "name": "企业套餐",
        "billingCycle": "半年付",
        "price": "¥918",
        "traffic": "1500G",
        "period": "每月"
      },
      {
        "name": "企业套餐",
        "billingCycle": "年付",
        "price": "¥1728",
        "traffic": "1500G",
        "period": "每月"
      }
    ],
    "speedtestNote": "暂无可对比的按地区独立实测与近 30 日晚高峰采样（资料来源为 2026-08-09 品牌库历史归档，未提供独立推广入口）。",
    "unlockDetails": {
      "supported": [],
      "conditional": [],
      "untested": [
        "AI 与流媒体独立逐项测试待核实，不可直接推断全量支持"
      ]
    }
  },
  {
    "id": "tntcloud",
    "name": "TNTCloud",
    "slug": "tntcloud",
    "slogan": "IPLC 内网专线 · 曾用名 3A 加速器 · 特色季付限量包 · 跨境直播定制",
    "established": "2022年",
    "score": 8.6,
    "ratingCount": 910,
    "monthlyPrice": 10,
    "annualPrice": 98,
    "traffic": 60,
    "lineType": "IPLC专线",
    "protocols": [
      "Shadowsocks"
    ],
    "nodeCount": 48,
    "speedMbps": 600,
    "latencyMs": 27,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": true
    },
    "pros": [
      "前身为 3A 加速器，老团队技术积累厚，专线带宽 2000Mbps",
      "提供季付 30 元（60G/月）与年付 98 元轻量限量包",
      "支持跨境电商与 TikTok 直播定制方案，优惠码 TNT85（85折）"
    ],
    "cons": [
      "限量包不支持使用优惠码"
    ],
    "targetUsers": [
      "跨境电商与 TikTok 运营者、寻找轻量季付包的用户"
    ],
    "riskStatus": "正常运营",
    "riskNote": "运行良好",
    "affiliateUrl": "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
    "officialUrl": "https://tntcloud.com",
    "couponCode": "TNT85",
    "badge": "电商直播定制",
    "isRecommended": false,
    "isTopRank": false,
    "isBudget": true,
    "isAffiliate": false,
    "minDuration": "季付",
    "priceNote": "轻量包季付30元(含60G/月)；年付98元；VIP1月付20元/110G；优惠码 TNT85",
    "features": [
      "IPLC内网专线",
      "2000Mbps带宽",
      "季付限量包",
      "跨境电商直播定制"
    ],
    "description": "TNTCloud（曾用名 3A 加速器）由老牌分站团队运营，全线采用 IPLC 内网专线，在跨境电商与社交媒体多平台运营上有较成熟的节点资源调度能力。",
    "screenshots": [],
    "packages": [
      {
        "name": "轻量限量包",
        "price": "¥30 / 季 (折合 10 元/月)",
        "traffic": "60 GB / 月",
        "line": "IPLC 内网专线",
        "features": [
          "轻量高性价",
          "IPLC专线",
          "不限设备"
        ]
      }
    ],
    "dataVerificationDate": "2026-10-19（结合 2026-08-11 实测包与历史归档核对）",
    "allPackages": [
      {
        "name": "轻量包",
        "billingCycle": "季付",
        "price": "¥30",
        "traffic": "60G",
        "period": "每月"
      },
      {
        "name": "轻量包",
        "billingCycle": "半年付",
        "price": "¥56",
        "traffic": "60G",
        "period": "每月"
      },
      {
        "name": "轻量包",
        "billingCycle": "年付",
        "price": "¥98",
        "traffic": "60G",
        "period": "每月"
      },
      {
        "name": "VIP1",
        "billingCycle": "月付",
        "price": "¥20",
        "traffic": "110G",
        "period": "每月"
      },
      {
        "name": "VIP1",
        "billingCycle": "季付",
        "price": "¥54",
        "traffic": "110G",
        "period": "每月"
      },
      {
        "name": "VIP1",
        "billingCycle": "半年付",
        "price": "¥102",
        "traffic": "110G",
        "period": "每月"
      },
      {
        "name": "VIP1",
        "billingCycle": "年付",
        "price": "¥192",
        "traffic": "110G",
        "period": "每月"
      },
      {
        "name": "VIP2",
        "billingCycle": "月付",
        "price": "¥40",
        "traffic": "220G",
        "period": "每月"
      },
      {
        "name": "VIP2",
        "billingCycle": "季付",
        "price": "¥108",
        "traffic": "220G",
        "period": "每月"
      },
      {
        "name": "VIP2",
        "billingCycle": "半年付",
        "price": "¥204",
        "traffic": "220G",
        "period": "每月"
      },
      {
        "name": "VIP2",
        "billingCycle": "年付",
        "price": "¥336",
        "traffic": "220G",
        "period": "每月"
      },
      {
        "name": "VIP3",
        "billingCycle": "月付",
        "price": "¥80",
        "traffic": "460G",
        "period": "每月"
      },
      {
        "name": "VIP3",
        "billingCycle": "季付",
        "price": "¥216",
        "traffic": "460G",
        "period": "每月"
      },
      {
        "name": "VIP3",
        "billingCycle": "半年付",
        "price": "¥408",
        "traffic": "460G",
        "period": "每月"
      },
      {
        "name": "VIP3",
        "billingCycle": "年付",
        "price": "¥768",
        "traffic": "460G",
        "period": "每月"
      },
      {
        "name": "VIP4",
        "billingCycle": "月付",
        "price": "¥160",
        "traffic": "1100G",
        "period": "每月"
      },
      {
        "name": "VIP4",
        "billingCycle": "季付",
        "price": "¥432",
        "traffic": "1100G",
        "period": "每月"
      },
      {
        "name": "VIP4",
        "billingCycle": "半年付",
        "price": "¥816",
        "traffic": "1100G",
        "period": "每月"
      },
      {
        "name": "VIP4",
        "billingCycle": "年付",
        "price": "¥1536",
        "traffic": "1100G",
        "period": "每月"
      }
    ],
    "speedtestNote": "暂无可对比的按地区独立实测与近 30 日晚高峰采样（资料来源为 2026-08-09 品牌库历史归档，未提供独立推广入口）。",
    "unlockDetails": {
      "supported": [],
      "conditional": [],
      "untested": [
        "AI 与流媒体独立逐项测试待核实，不可直接推断全量支持"
      ]
    }
  },
  {
    "id": "qingyunti",
    "name": "青云梯",
    "slug": "qingyunti",
    "slogan": "运营 6 年以上成熟品牌 · SS + 企业级 IPLC · 三网优化 80+ 节点",
    "established": "2019年",
    "score": 8.7,
    "ratingCount": 1580,
    "monthlyPrice": 8,
    "annualPrice": 96,
    "traffic": 60,
    "lineType": "IPLC专线",
    "protocols": [
      "Shadowsocks"
    ],
    "nodeCount": 80,
    "speedMbps": 660,
    "latencyMs": 25,
    "regions": [
      "香港",
      "日本",
      "台湾",
      "新加坡",
      "美国",
      "韩国",
      "欧洲"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": true
    },
    "pros": [
      "运营 6 年以上成熟老牌（曾用名 V4Speed），历史悠久，跑路风险低",
      "企业级 IPLC 搭配三网优化与智能负载均衡，节点超 80 个",
      "年付小包仅 96 元（折合 8 元/月 60G），VIP1 月付 25 元 150G",
      "优惠码 qyt85（85折）/ qyt80（8折）"
    ],
    "cons": [
      "年付小包不可使用优惠折扣码"
    ],
    "targetUsers": [
      "看重老牌运营年限与高信誉度的用户",
      "需要企业级定制与多节点冗余的团队"
    ],
    "riskStatus": "正常运营",
    "riskNote": "超6年老牌，基础设施完善，安全健康",
    "affiliateUrl": "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
    "officialUrl": "https://qingyunti.com",
    "couponCode": "qyt85",
    "badge": "六年经典老牌",
    "isRecommended": false,
    "isTopRank": false,
    "isBudget": true,
    "isAffiliate": false,
    "minDuration": "年付",
    "priceNote": "年付小包96元(折合8元/月 60G)；VIP1月付25元(150G)；优惠码 qyt85",
    "features": [
      "运营6年以上",
      "SS+企业级IPLC",
      "三网优化+智能负载",
      "80+节点覆盖"
    ],
    "description": "青云梯是行业内运营时间长达 6 年以上的经典老品牌。采用企业级 IPLC 与三网优化技术，支持企业定制与大规模节点冗余，是稳定性与口碑的代表之一。",
    "screenshots": [],
    "packages": [
      {
        "name": "年付小包",
        "price": "¥96 / 年 (折合 8 元/月)",
        "traffic": "60 GB / 月",
        "line": "企业级 IPLC",
        "features": [
          "6年老牌口碑",
          "三网优化",
          "主流解锁保障"
        ]
      }
    ],
    "dataVerificationDate": "2026-10-19（结合 2026-08-11 实测包与历史归档核对）",
    "secondaryCoupon": "qyt80",
    "allPackages": [
      {
        "name": "年付小包",
        "billingCycle": "年付",
        "price": "¥96",
        "traffic": "60G",
        "period": "每月"
      },
      {
        "name": "VIP1",
        "billingCycle": "月付",
        "price": "¥25",
        "traffic": "150G",
        "period": "每月"
      },
      {
        "name": "VIP1",
        "billingCycle": "季付",
        "price": "¥67",
        "traffic": "150G",
        "period": "每月"
      },
      {
        "name": "VIP1",
        "billingCycle": "半年付",
        "price": "¥127",
        "traffic": "150G",
        "period": "每月"
      },
      {
        "name": "VIP1",
        "billingCycle": "年付",
        "price": "¥240",
        "traffic": "150G",
        "period": "每月"
      },
      {
        "name": "VIP2",
        "billingCycle": "月付",
        "price": "¥45",
        "traffic": "300G",
        "period": "每月"
      },
      {
        "name": "VIP2",
        "billingCycle": "季付",
        "price": "¥121",
        "traffic": "300G",
        "period": "每月"
      },
      {
        "name": "VIP2",
        "billingCycle": "半年付",
        "price": "¥229",
        "traffic": "300G",
        "period": "每月"
      },
      {
        "name": "VIP2",
        "billingCycle": "年付",
        "price": "¥432",
        "traffic": "300G",
        "period": "每月"
      },
      {
        "name": "VIP3",
        "billingCycle": "月付",
        "price": "¥85",
        "traffic": "600G",
        "period": "每月"
      },
      {
        "name": "VIP3",
        "billingCycle": "季付",
        "price": "¥229",
        "traffic": "600G",
        "period": "每月"
      },
      {
        "name": "VIP3",
        "billingCycle": "半年付",
        "price": "¥433",
        "traffic": "600G",
        "period": "每月"
      },
      {
        "name": "VIP3",
        "billingCycle": "年付",
        "price": "¥816",
        "traffic": "600G",
        "period": "每月"
      },
      {
        "name": "VIP4",
        "billingCycle": "月付",
        "price": "¥150",
        "traffic": "1000G",
        "period": "每月"
      },
      {
        "name": "VIP4",
        "billingCycle": "季付",
        "price": "¥400",
        "traffic": "1000G",
        "period": "每月"
      },
      {
        "name": "VIP4",
        "billingCycle": "半年付",
        "price": "¥750",
        "traffic": "1000G",
        "period": "每月"
      },
      {
        "name": "VIP4",
        "billingCycle": "年付",
        "price": "¥1360",
        "traffic": "1000G",
        "period": "每月"
      }
    ],
    "speedtestNote": "暂无可对比的按地区独立实测与近 30 日晚高峰采样（资料来源为 2026-08-09 品牌库历史归档，未提供独立推广入口）。",
    "unlockDetails": {
      "supported": [],
      "conditional": [],
      "untested": [
        "AI 与流媒体独立逐项测试待核实，不可直接推断全量支持"
      ]
    }
  },
  {
    "id": "shanshuiyun",
    "name": "山水云",
    "slug": "shanshuiyun",
    "slogan": "月付 15 元 100GB · 64G 年付 88 元 (月均 7.33 元) · 梯度清晰",
    "established": "2023年",
    "score": 8.6,
    "ratingCount": 840,
    "monthlyPrice": 7.33,
    "annualPrice": 88,
    "traffic": 64,
    "lineType": "BGP隧道中转",
    "protocols": [
      "Shadowsocks"
    ],
    "nodeCount": 40,
    "speedMbps": 520,
    "latencyMs": 33,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": true
    },
    "pros": [
      "最低真实月付仅 15 元含 100GB，月付梯度（100G/200G/500G）极清爽",
      "64G 轻量年付包仅需 88 元，折合约 7.33 元/月，低成本长周期首选"
    ],
    "cons": [
      "非纯全线独享物理专线"
    ],
    "targetUsers": [
      "看重价格与周期梯度合理性的日常用网者"
    ],
    "riskStatus": "正常运营",
    "riskNote": "运行良好",
    "affiliateUrl": "https://sldm1.ssyylf.com/#/register?code=YD5iQ888",
    "officialUrl": "https://sldm1.ssyylf.com/#/register?code=YD5iQ888",
    "badge": "超值梯度",
    "isRecommended": false,
    "isTopRank": false,
    "isBudget": true,
    "isAffiliate": true,
    "minDuration": "月付",
    "priceNote": "月付15元/100G起；64G轻量年付88元(折合~7.33元/月)",
    "features": [
      "月付15元100G",
      "年付88元",
      "清晰套餐阶梯",
      "性价比出众"
    ],
    "description": "山水云以亲民的价格体系与清晰的阶梯梯度著称。年付 88 元包含每月 64G 流量，换算月成本极低，非常适合需要长效低廉网络通道的用户。",
    "screenshots": [],
    "packages": [
      {
        "name": "山水·年付轻量",
        "price": "¥88 / 年 (折合 ~7.33 元/月)",
        "traffic": "64 GB / 月",
        "line": "优化中转",
        "features": [
          "超长一年无忧",
          "低廉月均成本",
          "日常学术浏览"
        ]
      }
    ],
    "dataVerificationDate": "2026-10-19（结合 2026-08-11 实测包与历史归档核对）",
    "allPackages": [
      {
        "name": "64G/轻量套餐",
        "billingCycle": "年付",
        "price": "¥88",
        "traffic": "64GB/月",
        "period": "每月"
      },
      {
        "name": "128G/轻量套餐",
        "billingCycle": "半年付",
        "price": "¥88",
        "traffic": "128GB/月",
        "period": "每月"
      },
      {
        "name": "256G/轻量套餐",
        "billingCycle": "季付",
        "price": "¥75",
        "traffic": "256GB/月",
        "period": "每月"
      },
      {
        "name": "100G/月-琴",
        "billingCycle": "月付",
        "price": "¥15",
        "traffic": "100GB/月",
        "period": "每月"
      },
      {
        "name": "200G/月-棋",
        "billingCycle": "月付",
        "price": "¥25",
        "traffic": "200GB/月",
        "period": "每月"
      },
      {
        "name": "500G/月-书",
        "billingCycle": "月付",
        "price": "¥50",
        "traffic": "500GB/月",
        "period": "每月"
      }
    ],
    "regionalSpeedtests": [
      {
        "region": "美国",
        "latency": "349.3ms",
        "download": "180.29Mbps",
        "testDate": "2026-06-29"
      },
      {
        "region": "日本",
        "latency": "229.8ms",
        "download": "160.51Mbps",
        "testDate": "2026-06-29"
      },
      {
        "region": "香港",
        "latency": "151.4ms",
        "download": "152.86Mbps",
        "testDate": "2026-06-29"
      },
      {
        "region": "新加坡",
        "latency": "179.8ms",
        "download": "142.98Mbps",
        "testDate": "2026-06-29"
      },
      {
        "region": "越南",
        "latency": "232ms",
        "download": "87.68Mbps",
        "testDate": "2026-06-29"
      },
      {
        "region": "泰国",
        "latency": "217ms",
        "download": "82Mbps",
        "testDate": "2026-06-29"
      },
      {
        "region": "英国",
        "latency": "328ms",
        "download": "65.2Mbps",
        "testDate": "2026-06-29"
      }
    ],
    "speedtestNote": "保留 2026-06-29 历史批次地区统计实测值（非 2026-10-19 新测，不代表现时或长期在线率）；购买前请在官网复核当前套餐与可用性。"
  },
  {
    "id": "lingdongyun",
    "name": "灵动云",
    "slug": "lingdongyun",
    "slogan": "2025 年开业 IEPL/VLESS 专线 · 70G 年付至 1.5T 海量流量 · 独立定制",
    "established": "2025年",
    "score": 8.7,
    "ratingCount": 760,
    "monthlyPrice": 15,
    "annualPrice": 89,
    "traffic": 70,
    "lineType": "IEPL专线",
    "protocols": [
      "VLESS"
    ],
    "nodeCount": 45,
    "speedMbps": 640,
    "latencyMs": 27,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": true
    },
    "pros": [
      "2025 年开业专线机场，全面采用 VLESS 协议与 IEPL 专线",
      "套餐覆盖范围广：70G 年付包、100G-1.5T 周期流量、单次流量包及私人定制一应俱全"
    ],
    "cons": [
      "新开业品牌，建议根据自身需求先入手月付或小包"
    ],
    "targetUsers": [
      "喜欢 VLESS 专线、需要大流量或定制专线的用户"
    ],
    "riskStatus": "正常运营",
    "riskNote": "专线状态良好",
    "affiliateUrl": "https://varnexa.lingdongaff.com/#/?code=wZvEhEoI",
    "officialUrl": "https://varnexa.lingdongaff.com/#/?code=wZvEhEoI",
    "badge": "VLESS专线新秀",
    "isRecommended": false,
    "isTopRank": false,
    "isBudget": true,
    "isAffiliate": true,
    "minDuration": "月付",
    "priceNote": "70G年付约89元；常规月付15元起",
    "features": [
      "2025新秀",
      "IEPL+VLESS",
      "海量多档位",
      "私人定制支持"
    ],
    "description": "灵动云是 2025 年新上线的专业 VLESS 专线服务商。套餐选择极其丰富，从轻度年付小包到 1.5T 的重度工作室月度套餐均可按需定制。",
    "screenshots": [],
    "packages": [
      {
        "name": "灵动·入门版",
        "price": "¥15 / 月",
        "traffic": "100 GB / 月",
        "line": "IEPL 专线",
        "features": [
          "全节点VLESS",
          "支持AI与4K",
          "多设备不限"
        ]
      }
    ],
    "dataVerificationDate": "2026-10-19（结合 2026-08-11 实测包与历史归档核对）",
    "usageMode": "通用订阅（实测 VLESS；官网文案提及 VLESS/Trojan）",
    "allPackages": [
      {
        "name": "灵动·拂风",
        "billingCycle": "月付",
        "price": "¥20",
        "traffic": "100G/月",
        "period": "每月"
      },
      {
        "name": "灵动·拂风",
        "billingCycle": "季付",
        "price": "¥57",
        "traffic": "100G/月",
        "period": "每月"
      },
      {
        "name": "灵动·拂风",
        "billingCycle": "半年付",
        "price": "¥108",
        "traffic": "100G/月",
        "period": "每月"
      },
      {
        "name": "灵动·拂风",
        "billingCycle": "年付",
        "price": "¥204",
        "traffic": "100G/月",
        "period": "每月"
      },
      {
        "name": "灵动·拂风",
        "billingCycle": "两年付",
        "price": "¥384",
        "traffic": "100G/月",
        "period": "每月"
      },
      {
        "name": "灵动·拂风",
        "billingCycle": "三年付",
        "price": "¥540",
        "traffic": "100G/月",
        "period": "每月"
      },
      {
        "name": "灵动·驭浪",
        "billingCycle": "月付",
        "price": "¥50",
        "traffic": "300G/月",
        "period": "每月"
      },
      {
        "name": "灵动·驭浪",
        "billingCycle": "季付",
        "price": "¥142.5",
        "traffic": "300G/月",
        "period": "每月"
      },
      {
        "name": "灵动·驭浪",
        "billingCycle": "半年付",
        "price": "¥270",
        "traffic": "300G/月",
        "period": "每月"
      },
      {
        "name": "灵动·驭浪",
        "billingCycle": "年付",
        "price": "¥510",
        "traffic": "300G/月",
        "period": "每月"
      },
      {
        "name": "灵动·驭浪",
        "billingCycle": "两年付",
        "price": "¥960",
        "traffic": "300G/月",
        "period": "每月"
      },
      {
        "name": "灵动·驭浪",
        "billingCycle": "三年付",
        "price": "¥1350",
        "traffic": "300G/月",
        "period": "每月"
      },
      {
        "name": "灵动·破晓",
        "billingCycle": "月付",
        "price": "¥100",
        "traffic": "700G/月",
        "period": "每月"
      },
      {
        "name": "灵动·破晓",
        "billingCycle": "季付",
        "price": "¥285",
        "traffic": "700G/月",
        "period": "每月"
      },
      {
        "name": "灵动·破晓",
        "billingCycle": "半年付",
        "price": "¥540",
        "traffic": "700G/月",
        "period": "每月"
      },
      {
        "name": "灵动·破晓",
        "billingCycle": "年付",
        "price": "¥1020",
        "traffic": "700G/月",
        "period": "每月"
      },
      {
        "name": "灵动·破晓",
        "billingCycle": "两年付",
        "price": "¥1920",
        "traffic": "700G/月",
        "period": "每月"
      },
      {
        "name": "灵动·破晓",
        "billingCycle": "三年付",
        "price": "¥2700",
        "traffic": "700G/月",
        "period": "每月"
      },
      {
        "name": "灵动·凌霄",
        "billingCycle": "月付",
        "price": "¥180",
        "traffic": "1.5T/月",
        "period": "每月"
      },
      {
        "name": "灵动·凌霄",
        "billingCycle": "季付",
        "price": "¥513",
        "traffic": "1.5T/月",
        "period": "每月"
      },
      {
        "name": "灵动·凌霄",
        "billingCycle": "半年付",
        "price": "¥972",
        "traffic": "1.5T/月",
        "period": "每月"
      },
      {
        "name": "灵动·凌霄",
        "billingCycle": "年付",
        "price": "¥1836",
        "traffic": "1.5T/月",
        "period": "每月"
      },
      {
        "name": "灵动·凌霄",
        "billingCycle": "两年付",
        "price": "¥3456",
        "traffic": "1.5T/月",
        "period": "每月"
      },
      {
        "name": "灵动·凌霄",
        "billingCycle": "三年付",
        "price": "¥4860",
        "traffic": "1.5T/月",
        "period": "每月"
      },
      {
        "name": "灵动·穿云",
        "billingCycle": "年付",
        "price": "¥99",
        "traffic": "70G/月",
        "period": "每月"
      },
      {
        "name": "灵动·闲云（小流量包）",
        "billingCycle": "一次性付费",
        "price": "¥199",
        "traffic": "150G",
        "period": "一次性（套餐内流量总额）"
      },
      {
        "name": "灵动·惊云（标准流量包）",
        "billingCycle": "一次性付费",
        "price": "¥499",
        "traffic": "400G",
        "period": "一次性（套餐内流量总额）"
      },
      {
        "name": "灵动·飞云（精英流量包）",
        "billingCycle": "一次性付费",
        "price": "¥899",
        "traffic": "800G",
        "period": "一次性（套餐内流量总额）"
      },
      {
        "name": "灵动云·至尊私人定制",
        "billingCycle": "月付",
        "price": "¥620",
        "traffic": "截图遮挡",
        "period": "每月"
      }
    ],
    "speedtestNote": "2026-07-20/21（珠海联通 9Gbps，60 节点测速/解锁）：速度够用级（20–80MB/s）、HTTPS 延迟偏高；OpenAI 各地区基本全解锁；TikTok 多数失败、新加坡/台湾 YouTube 送中、美国01 节点失败、台湾落地识别偏欧（NF/D+ 显示 ES）。",
    "unlockDetails": {
      "supported": [
        "OpenAI / ChatGPT（2026-07-20/21 实测多区可用）"
      ],
      "conditional": [
        "Netflix / Disney+（台湾落地实测曾识别为 ES，部分可用）"
      ],
      "untested": [
        "TikTok（2026-07 实测多数失败）、YouTube（部分地区送中）"
      ]
    }
  },
  {
    "id": "langwang",
    "name": "浪网",
    "slug": "langwang",
    "slogan": "IEPL 专线架构 · 入门到商业多层级 · 单次流量包与定制线路",
    "established": "2023年",
    "score": 8.6,
    "ratingCount": 820,
    "monthlyPrice": 18,
    "annualPrice": 180,
    "traffic": 120,
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "nodeCount": 42,
    "speedMbps": 590,
    "latencyMs": 29,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": true
    },
    "pros": [
      "标注 IEPL 专线，提供入门、进阶、高端到商业多层级方案",
      "提供单次按量流量包与定制线路选项"
    ],
    "cons": [
      "官网部分详细说明有遮蔽，购买时需仔细核对说明"
    ],
    "targetUsers": [
      "需要按阶段进阶升级流量的个人或小团队"
    ],
    "riskStatus": "正常运营",
    "riskNote": "网络可用性正常",
    "affiliateUrl": "https://varnexa.wavenetaff.com/#/?code=xwAM4tTd",
    "officialUrl": "https://varnexa.wavenetaff.com/#/?code=xwAM4tTd",
    "badge": "多层级进阶",
    "isRecommended": false,
    "isTopRank": false,
    "isBudget": true,
    "isAffiliate": true,
    "minDuration": "月付",
    "priceNote": "月付18元/120G起",
    "features": [
      "IEPL专线",
      "多层级套餐",
      "支持单次流量包",
      "定制线路"
    ],
    "description": "浪网以多层级阶梯设计见长，覆盖入门级、进阶级、高端级与商业级多个维度，同时配备灵活的单次计费流量包。",
    "screenshots": [],
    "packages": [
      {
        "name": "浪网·进阶版",
        "price": "¥18 / 月",
        "traffic": "120 GB / 月",
        "line": "IEPL 专线",
        "features": [
          "主流专线接入",
          "支持主流流媒体",
          "多端可用"
        ]
      }
    ],
    "dataVerificationDate": "2026-10-19（结合 2026-08-11 实测包与历史归档核对）",
    "allPackages": [
      {
        "name": "浪网 高端",
        "billingCycle": "月付",
        "price": "¥120",
        "traffic": "800G",
        "period": "每月"
      },
      {
        "name": "浪网 高端",
        "billingCycle": "季付",
        "price": "¥342",
        "traffic": "800G",
        "period": "每月"
      },
      {
        "name": "浪网 高端",
        "billingCycle": "半年付",
        "price": "¥648",
        "traffic": "800G",
        "period": "每月"
      },
      {
        "name": "浪网 高端",
        "billingCycle": "年付",
        "price": "¥1224",
        "traffic": "800G",
        "period": "每月"
      },
      {
        "name": "浪网 高端",
        "billingCycle": "两年付",
        "price": "¥2304",
        "traffic": "800G",
        "period": "每月"
      },
      {
        "name": "浪网 高端",
        "billingCycle": "三年付",
        "price": "¥3240",
        "traffic": "800G",
        "period": "每月"
      },
      {
        "name": "浪网 商业",
        "billingCycle": "月付",
        "price": "¥200",
        "traffic": "2000G",
        "period": "每月"
      },
      {
        "name": "浪网 商业",
        "billingCycle": "季付",
        "price": "¥570",
        "traffic": "2000G",
        "period": "每月"
      },
      {
        "name": "浪网 商业",
        "billingCycle": "半年付",
        "price": "¥1080",
        "traffic": "2000G",
        "period": "每月"
      },
      {
        "name": "浪网 商业",
        "billingCycle": "年付",
        "price": "¥2040",
        "traffic": "2000G",
        "period": "每月"
      },
      {
        "name": "浪网 商业",
        "billingCycle": "两年付",
        "price": "¥3840",
        "traffic": "2000G",
        "period": "每月"
      },
      {
        "name": "浪网 商业",
        "billingCycle": "三年付",
        "price": "¥5400",
        "traffic": "2000G",
        "period": "每月"
      },
      {
        "name": "浪网 年付标准",
        "billingCycle": "年付",
        "price": "¥119",
        "traffic": "80G",
        "period": "每月"
      },
      {
        "name": "浪网 小流量包",
        "billingCycle": "一次性付费",
        "price": "¥239",
        "traffic": "180G",
        "period": "一次性（套餐内流量总额）"
      },
      {
        "name": "浪网 标准流量包",
        "billingCycle": "一次性付费",
        "price": "¥569",
        "traffic": "450G",
        "period": "一次性（套餐内流量总额）"
      },
      {
        "name": "浪网 定制线路包",
        "billingCycle": "月付",
        "price": "¥640",
        "traffic": "500G",
        "period": "每月"
      },
      {
        "name": "浪网 精英流量包",
        "billingCycle": "一次性付费",
        "price": "¥1099",
        "traffic": "900G",
        "period": "一次性（套餐内流量总额）"
      },
      {
        "name": "浪网 进阶",
        "billingCycle": "月付",
        "price": "¥70",
        "traffic": "450G",
        "period": "每月"
      },
      {
        "name": "浪网 进阶",
        "billingCycle": "季付",
        "price": "¥199.5",
        "traffic": "450G",
        "period": "每月"
      },
      {
        "name": "浪网 进阶",
        "billingCycle": "半年付",
        "price": "¥378",
        "traffic": "450G",
        "period": "每月"
      },
      {
        "name": "浪网 进阶",
        "billingCycle": "年付",
        "price": "¥714",
        "traffic": "450G",
        "period": "每月"
      },
      {
        "name": "浪网 进阶",
        "billingCycle": "两年付",
        "price": "¥1344",
        "traffic": "450G",
        "period": "每月"
      },
      {
        "name": "浪网 进阶",
        "billingCycle": "三年付",
        "price": "¥1890",
        "traffic": "450G",
        "period": "每月"
      },
      {
        "name": "浪网 入门",
        "billingCycle": "月付",
        "price": "¥30",
        "traffic": "截150G",
        "period": "每月"
      },
      {
        "name": "浪网 入门",
        "billingCycle": "季付",
        "price": "¥85.5",
        "traffic": "截150G",
        "period": "每月"
      },
      {
        "name": "浪网 入门",
        "billingCycle": "半年付",
        "price": "¥162",
        "traffic": "截150G",
        "period": "每月"
      },
      {
        "name": "浪网 入门",
        "billingCycle": "年付",
        "price": "¥306",
        "traffic": "截150G",
        "period": "每月"
      },
      {
        "name": "浪网 入门",
        "billingCycle": "两年付",
        "price": "¥576",
        "traffic": "截150G",
        "period": "每月"
      },
      {
        "name": "浪网 入门",
        "billingCycle": "三年付",
        "price": "¥810",
        "traffic": "截150G",
        "period": "每月"
      }
    ],
    "speedtestNote": "原资料标注尚未进行实测（入门档流量文字被遮挡截断），暂无法给出按地区的速度、延迟或晚高峰实测结论。",
    "unlockDetails": {
      "supported": [],
      "conditional": [],
      "untested": [
        "流媒体、AI、设备数与测速待核实"
      ]
    }
  },
  {
    "id": "edgenova",
    "name": "EdgeNova",
    "slug": "edgenova",
    "slogan": "高速直连 + IPLC 多线路自动分配 · 年付小包可选 · 支持国内支付与 USDT",
    "established": "2023年",
    "score": 8.6,
    "ratingCount": 780,
    "monthlyPrice": 12,
    "annualPrice": 120,
    "traffic": 80,
    "lineType": "IPLC专线",
    "protocols": [
      "Shadowsocks"
    ],
    "nodeCount": 44,
    "speedMbps": 560,
    "latencyMs": 31,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": true
    },
    "pros": [
      "直连 + IPLC 多线路自动分配，兼容国内支付宝、微信及 USDT 支付",
      "提供多档常规月/季/半年/年付（120GB–1000GB），且支持新用户 8 折码 TH888",
      "限时轻量年付 ¥108 适合低用量备用需求"
    ],
    "cons": [
      "冷门国家节点少，专注核心方向"
    ],
    "targetUsers": [
      "追求多线路自动容灾的日常办公与影音用户"
    ],
    "riskStatus": "正常运营",
    "riskNote": "运行良好",
    "affiliateUrl": "https://work.edgenovaaff.cc/#/register?code=cl3iB5YG",
    "officialUrl": "https://work.edgenovaaff.cc/#/register?code=cl3iB5YG",
    "badge": "自动多线路由",
    "isRecommended": false,
    "isTopRank": false,
    "isBudget": true,
    "isAffiliate": true,
    "minDuration": "月付",
    "priceNote": "限时月付 ¥15/72GB、限时年付 ¥108/45GB/月；极界·标准 ¥25/120GB 起；优惠码 TH888 可享 8 折",
    "features": [
      "多线路自动分配",
      "IPLC接入",
      "支持USDT",
      "年付小包可选"
    ],
    "description": "EdgeNova（边缘节点）通过智能动态路由调度多条专线与高速出口，遇到单点拥塞时自动无缝降级或切换，保障全天候连通率。",
    "screenshots": [],
    "packages": [
      {
        "name": "Edge·标准版",
        "price": "¥16 / 月",
        "traffic": "100 GB / 月",
        "line": "多线优化 IPLC",
        "features": [
          "自动动态选路",
          "主流流媒体全开",
          "稳定抗拥塞"
        ]
      }
    ],
    "dataVerificationDate": "2026-10-19（结合 2026-08-11 实测包与历史归档核对）",
    "allPackages": [
      {
        "name": "限时月付",
        "billingCycle": "月付",
        "price": "¥15",
        "traffic": "72G",
        "period": "每月"
      },
      {
        "name": "限时年付",
        "billingCycle": "年付",
        "price": "¥108",
        "traffic": "45G",
        "period": "每月"
      },
      {
        "name": "极界·标准",
        "billingCycle": "月付",
        "price": "¥25",
        "traffic": "120G",
        "period": "每月"
      },
      {
        "name": "极界·标准",
        "billingCycle": "季付",
        "price": "¥70",
        "traffic": "120G",
        "period": "每月"
      },
      {
        "name": "极界·标准",
        "billingCycle": "半年付",
        "price": "¥130",
        "traffic": "120G",
        "period": "每月"
      },
      {
        "name": "极界·标准",
        "billingCycle": "年付",
        "price": "¥270",
        "traffic": "120G",
        "period": "每月"
      },
      {
        "name": "极界·进阶",
        "billingCycle": "月付",
        "price": "¥50",
        "traffic": "250G",
        "period": "每月"
      },
      {
        "name": "极界·进阶",
        "billingCycle": "季付",
        "price": "¥145",
        "traffic": "250G",
        "period": "每月"
      },
      {
        "name": "极界·进阶",
        "billingCycle": "半年付",
        "price": "¥280",
        "traffic": "250G",
        "period": "每月"
      },
      {
        "name": "极界·进阶",
        "billingCycle": "年付",
        "price": "¥570",
        "traffic": "250G",
        "period": "每月"
      },
      {
        "name": "极界·高级",
        "billingCycle": "月付",
        "price": "¥100",
        "traffic": "500G",
        "period": "每月"
      },
      {
        "name": "极界·高级",
        "billingCycle": "季付",
        "price": "¥290",
        "traffic": "500G",
        "period": "每月"
      },
      {
        "name": "极界·高级",
        "billingCycle": "半年付",
        "price": "¥580",
        "traffic": "500G",
        "period": "每月"
      },
      {
        "name": "极界·高级",
        "billingCycle": "年付",
        "price": "¥1100",
        "traffic": "500G",
        "period": "每月"
      },
      {
        "name": "极界·极限",
        "billingCycle": "月付",
        "price": "¥200",
        "traffic": "1000G",
        "period": "每月"
      },
      {
        "name": "极界·极限",
        "billingCycle": "季付",
        "price": "¥580",
        "traffic": "1000G",
        "period": "每月"
      },
      {
        "name": "极界·极限",
        "billingCycle": "半年付",
        "price": "¥1150",
        "traffic": "1000G",
        "period": "每月"
      },
      {
        "name": "极界·极限",
        "billingCycle": "年付",
        "price": "¥2300",
        "traffic": "1000G",
        "period": "每月"
      }
    ],
    "couponCode": "TH888",
    "unlockDetails": {
      "supported": [],
      "conditional": [],
      "untested": [
        "AI 与主流流媒体尚无独立逐项测速核验，购买前请实际验证"
      ]
    }
  },
  {
    "id": "yinghuochong",
    "name": "萤火虫",
    "slug": "yinghuochong",
    "slogan": "IPLC + VLESS 原生 IP 定位 · 60G 年付至 1000G 周期档 · 不限速不限设备",
    "established": "2023年",
    "score": 8.6,
    "ratingCount": 860,
    "monthlyPrice": 10,
    "annualPrice": 99,
    "traffic": 60,
    "lineType": "IPLC专线",
    "protocols": [
      "VLESS"
    ],
    "nodeCount": 46,
    "speedMbps": 610,
    "latencyMs": 27,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": true
    },
    "pros": [
      "全线 IPLC 搭配 VLESS 协议，提供原生 IP 解锁",
      "资料表明不限速且不限制设备数量",
      "覆盖 60G 年付包到 1000G 周期大包，多梯度灵活"
    ],
    "cons": [
      "与微风、飞鸟等存在明确技术同系关联"
    ],
    "targetUsers": [
      "喜欢原生 IP 与 VLESS 协议的流媒体爱好者"
    ],
    "riskStatus": "正常运营",
    "riskNote": "专线运维良好",
    "affiliateUrl": "https://vip02.fireflyaff.com/#/?code=jTp9wSgZ",
    "officialUrl": "https://vip02.fireflyaff.com/#/?code=jTp9wSgZ",
    "badge": "原生IP专线",
    "isRecommended": false,
    "isTopRank": false,
    "isBudget": true,
    "isAffiliate": true,
    "minDuration": "年付",
    "priceNote": "60G年付约99元；月付18元/120G起",
    "features": [
      "IPLC+VLESS",
      "原生IP落地",
      "不限速不限设备",
      "多档周期流量"
    ],
    "description": "萤火虫（Firefly 中文版）采用 IPLC + VLESS 架构，主打原生 IP 落地与多设备无门槛并发，在海外流媒体与 TikTok 运营场景下有着稳定的落地表现。",
    "screenshots": [],
    "packages": [
      {
        "name": "萤火·轻享包",
        "price": "¥99 / 年",
        "traffic": "60 GB / 月",
        "line": "IPLC 原生专线",
        "features": [
          "原生IP落地",
          "不限速不限设备",
          "VLESS协议"
        ]
      }
    ],
    "dataVerificationDate": "2026-10-19（结合 2026-08-11 实测包与历史归档核对）",
    "usageMode": "专属客户端（IPLC + VLESS；与 Firefly/微风/飞鸟同系）",
    "allPackages": [
      {
        "name": "Firefly年付版",
        "billingCycle": "年付",
        "price": "¥96",
        "traffic": "60G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Lite",
        "billingCycle": "月付",
        "price": "¥25",
        "traffic": "150G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Lite",
        "billingCycle": "季付",
        "price": "¥67",
        "traffic": "150G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Lite",
        "billingCycle": "半年付",
        "price": "¥127",
        "traffic": "150G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Lite",
        "billingCycle": "年付",
        "price": "¥240",
        "traffic": "150G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Lite",
        "billingCycle": "两年付",
        "price": "¥420",
        "traffic": "150G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Lite",
        "billingCycle": "三年付",
        "price": "¥540",
        "traffic": "150G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Plus",
        "billingCycle": "月付",
        "price": "¥45",
        "traffic": "300G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Plus",
        "billingCycle": "季付",
        "price": "¥121",
        "traffic": "300G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Plus",
        "billingCycle": "半年付",
        "price": "¥229",
        "traffic": "300G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Plus",
        "billingCycle": "年付",
        "price": "¥432",
        "traffic": "300G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Plus",
        "billingCycle": "两年付",
        "price": "¥756",
        "traffic": "300G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Plus",
        "billingCycle": "三年付",
        "price": "¥972",
        "traffic": "300G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Blaze",
        "billingCycle": "月付",
        "price": "¥85",
        "traffic": "600G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Blaze",
        "billingCycle": "季付",
        "price": "¥229",
        "traffic": "600G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Blaze",
        "billingCycle": "半年付",
        "price": "¥433",
        "traffic": "600G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Blaze",
        "billingCycle": "年付",
        "price": "¥816",
        "traffic": "600G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Blaze",
        "billingCycle": "两年付",
        "price": "¥1428",
        "traffic": "600G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Blaze",
        "billingCycle": "三年付",
        "price": "¥1836",
        "traffic": "600G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Nova",
        "billingCycle": "月付",
        "price": "¥150",
        "traffic": "1000G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Nova",
        "billingCycle": "季付",
        "price": "¥400",
        "traffic": "1000G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Nova",
        "billingCycle": "半年付",
        "price": "¥750",
        "traffic": "1000G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Nova",
        "billingCycle": "年付",
        "price": "¥1360",
        "traffic": "1000G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Nova",
        "billingCycle": "两年付",
        "price": "¥2399",
        "traffic": "1000G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Nova",
        "billingCycle": "三年付",
        "price": "¥3119",
        "traffic": "1000G/月",
        "period": "每月"
      },
      {
        "name": "Firefly不限时",
        "billingCycle": "一次性付费",
        "price": "¥100",
        "traffic": "100G",
        "period": "一次性（套餐内流量总额）"
      }
    ]
  },
  {
    "id": "sslar",
    "name": "sslar",
    "slug": "sslar",
    "slogan": "企业级 IEPL + 多线 BGP · SS/VLESS 协议自适应 · 自研全平台客户端",
    "established": "2022年",
    "score": 8.6,
    "ratingCount": 880,
    "monthlyPrice": 17,
    "annualPrice": 163,
    "traffic": 100,
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "nodeCount": 50,
    "speedMbps": 620,
    "latencyMs": 28,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "欧洲"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": true,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": true
    },
    "pros": [
      "企业级 IEPL 搭配多线 BGP，协议支持自适应",
      "提供 Windows、macOS、Android 自研客户端，支持远程桌面技术协助",
      "优惠码 ko3eTt0w（8折）"
    ],
    "cons": [
      "支付主要支持支付宝与微信，未列 USDT"
    ],
    "targetUsers": [
      "需要远程技术协助的商务人士、对协议自适应有需求的用户"
    ],
    "riskStatus": "正常运营",
    "riskNote": "专线运维平稳",
    "affiliateUrl": "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
    "officialUrl": "https://sslar.com",
    "couponCode": "ko3eTt0w",
    "badge": "商务远程协助",
    "isRecommended": false,
    "isTopRank": false,
    "isBudget": true,
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "Basic月付17元/100G起；年付163元；优惠码 ko3eTt0w 可享8折",
    "features": [
      "IEPL+多线BGP",
      "自研多平台客户端",
      "远程协助支持",
      "SS/VLESS自适应"
    ],
    "description": "SSLAR 定位企业级 IEPL 专线，支持 SS 与 VLESS 协议自适应，并提供多平台自研客户端与远程技术支持服务，对于注重售后技术指导的商务用户非常友好。",
    "screenshots": [],
    "packages": [
      {
        "name": "Basic",
        "price": "¥17 / 月 (年付 163 元)",
        "traffic": "100 GB / 月",
        "line": "IEPL 专线",
        "features": [
          "全平台自研客户端",
          "支持8折码 ko3eTt0w",
          "商务技术协助"
        ]
      }
    ],
    "dataVerificationDate": "2026-10-19（结合 2026-08-11 实测包与历史归档核对）",
    "usageMode": "自研 Win/macOS/Android 客户端 + 支持通用订阅，提供远程协助支持",
    "allPackages": [
      {
        "name": "Basic",
        "billingCycle": "月付",
        "price": "¥17",
        "traffic": "100G",
        "period": "每月"
      },
      {
        "name": "Basic",
        "billingCycle": "季付",
        "price": "¥46",
        "traffic": "100G",
        "period": "每月"
      },
      {
        "name": "Basic",
        "billingCycle": "半年付",
        "price": "¥87",
        "traffic": "100G",
        "period": "每月"
      },
      {
        "name": "Basic",
        "billingCycle": "年付",
        "price": "¥163",
        "traffic": "100G",
        "period": "每月"
      },
      {
        "name": "Standard",
        "billingCycle": "月付",
        "price": "¥28",
        "traffic": "200G",
        "period": "每月"
      },
      {
        "name": "Standard",
        "billingCycle": "季付",
        "price": "¥76",
        "traffic": "200G",
        "period": "每月"
      },
      {
        "name": "Standard",
        "billingCycle": "半年付",
        "price": "¥143",
        "traffic": "200G",
        "period": "每月"
      },
      {
        "name": "Standard",
        "billingCycle": "年付",
        "price": "¥268",
        "traffic": "200G",
        "period": "每月"
      },
      {
        "name": "Premium",
        "billingCycle": "月付",
        "price": "¥36",
        "traffic": "300G",
        "period": "每月"
      },
      {
        "name": "Premium",
        "billingCycle": "季付",
        "price": "¥97",
        "traffic": "300G",
        "period": "每月"
      },
      {
        "name": "Premium",
        "billingCycle": "半年付",
        "price": "¥183",
        "traffic": "300G",
        "period": "每月"
      },
      {
        "name": "Premium",
        "billingCycle": "年付",
        "price": "¥345",
        "traffic": "300G",
        "period": "每月"
      }
    ],
    "speedtestNote": "暂无可对比的按地区独立实测与近 30 日晚高峰采样（资料来源为 2026-08-09 品牌库历史归档，未提供独立推广入口）。",
    "unlockDetails": {
      "supported": [],
      "conditional": [],
      "untested": [
        "AI 与流媒体独立逐项测试待核实，不可直接推断全量支持"
      ]
    }
  }
];
export function getAirportBySlug(slug: string): Airport | undefined {
  return airports.find(a => a.slug === slug);
}

export function getTopAirports(limit = 6): Airport[] {
  return airports.filter(a => a.isTopRank || a.isRecommended).slice(0, limit);
}

export function getBudgetAirports(): Airport[] {
  return airports.filter(a => a.isBudget);
}

export function getAirportsByLineType(lineType: string): Airport[] {
  return airports.filter(a => a.lineType === lineType);
}

export function getRecommendedAirports(): Airport[] {
  return airports.filter(a => a.isRecommended);
}

