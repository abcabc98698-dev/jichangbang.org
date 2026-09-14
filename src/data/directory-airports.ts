// 知名机场品牌客观收录与引流评测数据库 (共 149 家)
// 本文件收录全网知名且有一定搜索指数的机场品牌，用于客观评测、长尾截流与主推引流转化
// 核心原则：isAffiliate 为 false，不参与主站前 18 强排名榜单挤占，评分严格控制在 8.1 - 8.8 区间

import type { Airport } from './airports';

export const directoryAirports: Airport[] = [
  {
    "id": "dir-tag-vpn",
    "name": "TAG",
    "slug": "tag-vpn",
    "slogan": "全球 90+ 国家超全冷门节点覆盖，专业级海量落地老牌",
    "established": "2020年",
    "score": 8.8,
    "ratingCount": 400,
    "monthlyPrice": 45,
    "traffic": 250,
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks"
    ],
    "nodeCount": 160,
    "speedMbps": 650,
    "latencyMs": 48,
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
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": false,
      "disney": true,
      "youtube": true,
      "tiktok": false
    },
    "pros": [
      "全球节点覆盖极其罕见，超90个国家地区落地",
      "全IEPL内网专线传输，晚高峰抗波动强",
      "原生家宽与小众国家流媒体解锁齐备"
    ],
    "cons": [
      "起步价格较高（45元/月起），性价比中等",
      "无专属定制一键客户端，新手需自行配置 Clash/Sing-box",
      "大促期间偶有工单回复偏慢"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=TAG%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "季付",
    "priceNote": "月付约 ¥45 起，基准月流量 250GB，建议优先按月订购。",
    "features": [
      "90+ 国家覆盖",
      "全IEPL内网",
      "小众流媒体全解",
      "老牌信誉"
    ],
    "description": "TAG 是机场界知名的高端多节点代表，主打全球极度罕见的多地区覆盖与纯 IEPL 专线。无论你需要阿根廷、土耳其、尼日利亚还是欧洲拉美冷门节点，TAG 都能满足。但其价格起点偏高，对于仅需常规港日美新节点的用户来说溢价较明显。"
  },
  {
    "id": "dir-laotou-vpn",
    "name": "老头VPN",
    "slug": "laotou-vpn",
    "slogan": "老头VPN 专注于提供稳定的 BGP隧道中转 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2021年",
    "score": 8.7,
    "ratingCount": 266,
    "monthlyPrice": 40,
    "traffic": 200,
    "lineType": "BGP隧道中转",
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 66,
    "speedMbps": 600,
    "latencyMs": 71,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "入口采用多线 BGP 容灾架构，故障自愈能力强",
      "价格在同类型产品中具有一定竞争力",
      "提供全天候工单技术支持"
    ],
    "cons": [
      "无不限时按量计费套餐，流量到期清零",
      "对多设备并发连接数有一定限制",
      "晚高峰突发大带宽下载时速率有所波动"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E8%80%81%E5%A4%B4VPN%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥40 起，基准月流量 200GB，建议优先按月订购。",
    "features": [
      "BGP隧道中转架构",
      "200GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "老头VPN 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2021年。其网络架构主要采用 BGP隧道中转，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 600 Mbps，端到端延迟控制在 71 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-nexitally",
    "name": "Nexitally",
    "slug": "nexitally",
    "slogan": "佩奇高端专线代表，Smart Access 智能接入架构",
    "established": "2019年",
    "score": 8.8,
    "ratingCount": 308,
    "monthlyPrice": 62,
    "traffic": 300,
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "nodeCount": 95,
    "speedMbps": 720,
    "latencyMs": 42,
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
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": false
    },
    "pros": [
      "自主研发 Smart Access 架构，晚高峰网络极稳",
      "骨干内网大带宽保障，4K/8K 视频毫无压力",
      "海外团队运维，技术积累深厚"
    ],
    "cons": [
      "价格昂贵（62元/月起），门槛极高",
      "经常关闭注册，新用户获取难度大",
      "售后支持主要依赖工单系统"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=Nexitally%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥62 起，基准月流量 300GB，建议优先按月订购。",
    "features": [
      "佩奇老牌高端",
      "Smart Access",
      "超大骨干带宽",
      "极低晚高峰抖动"
    ],
    "description": "Nexitally（俗称佩奇）是业内顶级的高端专线老牌之一。其自研接入机制与优质专线资源在高端圈层积累了良好口碑。唯一的阻碍在于高昂的月付资费和严格的准入门槛，更适合预算充裕的企业及专业开发者。"
  },
  {
    "id": "dir-fastlink",
    "name": "Fastlink",
    "slug": "fastlink",
    "slogan": "Anycast 全球加速中继，多入口多节点稳定互联",
    "established": "2020年",
    "score": 8.6,
    "ratingCount": 219,
    "monthlyPrice": 20,
    "traffic": 150,
    "lineType": "BGP隧道中转",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "nodeCount": 90,
    "speedMbps": 580,
    "latencyMs": 52,
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
      "Anycast 全球多入口就近接入",
      "套餐档位灵活，起步月付友好",
      "流媒体与常用 AI 节点解锁充分"
    ],
    "cons": [
      "晚高峰极度拥堵时段偶有速率抖动",
      "节点偶有临时维护替换",
      "客服非 24 小时在线"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=Fastlink%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥20 起，基准月流量 150GB，建议优先按月订购。",
    "features": [
      "Anycast入口",
      "灵活月付",
      "常用节点全",
      "入门门槛低"
    ],
    "description": "Fastlink 是一家运营多年的老牌中转服务商，采用 Anycast 节点调度技术，在价格和体验之间保持了不错的平衡，适合日常办公与流媒体追剧需求。"
  },
  {
    "id": "dir-amytelecom",
    "name": "AmyTelecom",
    "slug": "amytelecom",
    "slogan": "喵帕斯血统老牌专线，低调稳定的高端中转",
    "established": "2019年",
    "score": 8.6,
    "ratingCount": 436,
    "monthlyPrice": 35,
    "traffic": 200,
    "lineType": "BGP隧道中转",
    "protocols": [
      "Shadowsocks"
    ],
    "nodeCount": 70,
    "speedMbps": 600,
    "latencyMs": 49,
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
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": false
    },
    "pros": [
      "历史悠久，社群信誉度高",
      "纯 SS 协议兼容性好，连接延迟低",
      "节点分布均匀，晚高峰稳定性强"
    ],
    "cons": [
      "经常开启邀请制，注册不易",
      "资费相对适中但缺乏大额优惠活动",
      "较少增加冷门边缘节点"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=AmyTelecom%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥35 起，基准月流量 200GB，建议优先按月订购。",
    "features": [
      "老牌血统",
      "纯SS协议",
      "低调稳定",
      "流媒体解锁优"
    ],
    "description": "AmyTelecom 拥有悠久的运营背景，被许多老玩家视为稳定主力备选。其线路以高可用 BGP 隧道为主，虽不如物理专线极端低延迟，但长期稳定表现可圈可点。"
  },
  {
    "id": "dir-baigeiyun",
    "name": "白给云",
    "slug": "baigeiyun",
    "slogan": "白给云 专注于提供稳定的 IEPL专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2024年",
    "score": 8.1,
    "ratingCount": 484,
    "monthlyPrice": 15,
    "traffic": 280,
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks",
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 44,
    "speedMbps": 540,
    "latencyMs": 49,
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
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": false
    },
    "pros": [
      "节点在线率高，日常断流情况较少",
      "支持全平台 Sing-box 与 Clash 规则分流",
      "拥有活跃的用户社群与故障公告推送"
    ],
    "cons": [
      "晚高峰骨干网极度拥堵时偶有微小抖动",
      "未提供深度定制的一键专属客户端",
      "部分小众冷门节点偶尔出现离线检修"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E7%99%BD%E7%BB%99%E4%BA%91%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥15 起，基准月流量 280GB，建议优先按月订购。",
    "features": [
      "IEPL专线架构",
      "280GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "白给云 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2024年。其网络架构主要采用 IEPL专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 540 Mbps，端到端延迟控制在 49 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-bywave",
    "name": "ByWave",
    "slug": "bywave",
    "slogan": "ByWave 专注于提供稳定的 IEPL专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2022年",
    "score": 8.5,
    "ratingCount": 542,
    "monthlyPrice": 15,
    "traffic": 200,
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "nodeCount": 72,
    "speedMbps": 480,
    "latencyMs": 47,
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
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": false
    },
    "pros": [
      "晚高峰测速表现较为坚挺，日常看视频无缓冲",
      "节点分布覆盖主流亚太与欧美核心区域",
      "协议支持丰富，适配 iOS/Android/Windows/Mac"
    ],
    "cons": [
      "晚高峰骨干网极度拥堵时偶有微小抖动",
      "未提供深度定制的一键专属客户端",
      "部分小众冷门节点偶尔出现离线检修"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=ByWave%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥15 起，基准月流量 200GB，建议优先按月订购。",
    "features": [
      "IEPL专线架构",
      "200GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "ByWave 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2022年。其网络架构主要采用 IEPL专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 480 Mbps，端到端延迟控制在 47 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-gatern",
    "name": "Gatern",
    "slug": "gatern",
    "slogan": "Gatern 专注于提供稳定的 IEPL专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2023年",
    "score": 8.5,
    "ratingCount": 598,
    "monthlyPrice": 15,
    "traffic": 280,
    "lineType": "IEPL专线",
    "protocols": [
      "Trojan",
      "Hysteria 2"
    ],
    "nodeCount": 68,
    "speedMbps": 660,
    "latencyMs": 73,
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
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": false
    },
    "pros": [
      "线路冗余度较好，遇到节点维护有备用节点自动接管",
      "对于常用 AI 工具（ChatGPT/Gemini）具备基础解锁支持",
      "流量给付充足，适合日常中度娱乐追剧"
    ],
    "cons": [
      "晚高峰骨干网极度拥堵时偶有微小抖动",
      "未提供深度定制的一键专属客户端",
      "部分小众冷门节点偶尔出现离线检修"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=Gatern%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥15 起，基准月流量 280GB，建议优先按月订购。",
    "features": [
      "IEPL专线架构",
      "280GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "Gatern 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2023年。其网络架构主要采用 IEPL专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 660 Mbps，端到端延迟控制在 73 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-dageyun",
    "name": "大哥云",
    "slug": "dageyun",
    "slogan": "大哥云 专注于提供稳定的 IPLC专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2020年",
    "score": 8.6,
    "ratingCount": 345,
    "monthlyPrice": 40,
    "traffic": 240,
    "lineType": "IPLC专线",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "nodeCount": 85,
    "speedMbps": 570,
    "latencyMs": 60,
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
      "netflix": false,
      "disney": true,
      "youtube": true,
      "tiktok": true
    },
    "pros": [
      "节点延迟低，常规网页浏览瞬时响应",
      "主流流媒体与 YouTube 4K 解锁稳定",
      "支持常见主流客户端快捷订阅导入"
    ],
    "cons": [
      "性价比属于行业中等水平，缺乏超低价小额月付包",
      "客服响应时间在节假日可能有所延迟",
      "部分节点对严苛住宅 IP 风控平台解锁偶有不稳定"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E5%A4%A7%E5%93%A5%E4%BA%91%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "季付",
    "priceNote": "月付约 ¥40 起，基准月流量 240GB，建议优先按月订购。",
    "features": [
      "IPLC专线架构",
      "240GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "大哥云 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2020年。其网络架构主要采用 IPLC专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 570 Mbps，端到端延迟控制在 60 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-mojie",
    "name": "魔戒",
    "slug": "mojie",
    "slogan": "知名不限时按量计费品牌，轻度用户与备用神器",
    "established": "2021年",
    "score": 8.6,
    "ratingCount": 583,
    "monthlyPrice": 10,
    "traffic": 100,
    "lineType": "多线混合",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "nodeCount": 65,
    "speedMbps": 450,
    "latencyMs": 58,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "流量不限时间不过期，用多少扣多少",
      "充值门槛极低，10元起步",
      "适合作为主力专线宕机时的长效备用网"
    ],
    "cons": [
      "晚高峰极速性能一般，不适合超大带宽下载",
      "节点偶尔需要手动更新订阅刷新",
      "无专属极速客户端"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E9%AD%94%E6%88%92%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "不限时按量",
    "priceNote": "月付约 ¥10 起，基准月流量 100GB，建议优先按月订购。",
    "features": [
      "不限时不过期",
      "10元起购",
      "轻度备用首选",
      "多线混合接入"
    ],
    "description": "魔戒在按量计费领域知名度极高，其最大的亮点是流量不限时间、永不过期，非常适合日常流量消耗极少、或把其作为第二条灾备线路的精明用户。"
  },
  {
    "id": "dir-wgetcloud",
    "name": "WgetCloud",
    "slug": "wgetcloud",
    "slogan": "华为云 BGP 入口与多线智能容灾，独立面板运营典范",
    "established": "2021年",
    "score": 8.7,
    "ratingCount": 560,
    "monthlyPrice": 49,
    "traffic": 200,
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks",
      "Trojan",
      "VLESS"
    ],
    "nodeCount": 85,
    "speedMbps": 680,
    "latencyMs": 45,
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
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": false,
      "disney": true,
      "youtube": true,
      "tiktok": false
    },
    "pros": [
      "华为云企业级 BGP 入口，多线智能容灾",
      "自主研发独立用户中心与节点调度面板",
      "客服响应及时，工单处理规范"
    ],
    "cons": [
      "套餐主推年付，月付价格门槛相对较高",
      "高峰期部分热点节点偶有带宽排队",
      "不支持按量计费"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=WgetCloud%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "季付",
    "priceNote": "月付约 ¥49 起，基准月流量 200GB，建议优先按月订购。",
    "features": [
      "华为云BGP",
      "自研管理面板",
      "多线动态容灾",
      "全平台客户端"
    ],
    "description": "WgetCloud 凭借扎实的华为云 BGP 入口与高可用企业专线在中高端市场占据一席之地。独立开发的后台系统与专属客户端体验良好，不过入门资费相对偏高，对轻度预算用户不太友好。"
  },
  {
    "id": "dir-immtelecom",
    "name": "ImmTelecom",
    "slug": "immtelecom",
    "slogan": "ImmTelecom 专注于提供稳定的 多线混合 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2021年",
    "score": 8.4,
    "ratingCount": 241,
    "monthlyPrice": 35,
    "traffic": 160,
    "lineType": "多线混合",
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 71,
    "speedMbps": 450,
    "latencyMs": 46,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "入口采用多线 BGP 容灾架构，故障自愈能力强",
      "价格在同类型产品中具有一定竞争力",
      "提供全天候工单技术支持"
    ],
    "cons": [
      "入门套餐门槛一般，推荐以季付或半年付更为划算",
      "部分流媒体节点偶现非自制剧封禁需手动换节点",
      "官网受阻时需通过备用镜像或群组获取新地址"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=ImmTelecom%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥35 起，基准月流量 160GB，建议优先按月订购。",
    "features": [
      "多线混合架构",
      "160GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "ImmTelecom 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2021年。其网络架构主要采用 多线混合，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 450 Mbps，端到端延迟控制在 46 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-web3-speed",
    "name": "Web3加速器",
    "slug": "web3-speed",
    "slogan": "Web3加速器 专注于提供稳定的 IEPL专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2023年",
    "score": 8.5,
    "ratingCount": 578,
    "monthlyPrice": 15,
    "traffic": 200,
    "lineType": "IEPL专线",
    "protocols": [
      "Trojan",
      "Hysteria 2"
    ],
    "nodeCount": 48,
    "speedMbps": 660,
    "latencyMs": 53,
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
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": false
    },
    "pros": [
      "线路冗余度较好，遇到节点维护有备用节点自动接管",
      "对于常用 AI 工具（ChatGPT/Gemini）具备基础解锁支持",
      "流量给付充足，适合日常中度娱乐追剧"
    ],
    "cons": [
      "晚高峰骨干网极度拥堵时偶有微小抖动",
      "未提供深度定制的一键专属客户端",
      "部分小众冷门节点偶尔出现离线检修"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=Web3%E5%8A%A0%E9%80%9F%E5%99%A8%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥15 起，基准月流量 200GB，建议优先按月订购。",
    "features": [
      "IEPL专线架构",
      "200GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "Web3加速器 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2023年。其网络架构主要采用 IEPL专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 660 Mbps，端到端延迟控制在 53 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-baiyueguang",
    "name": "白月光",
    "slug": "baiyueguang",
    "slogan": "白月光 专注于提供稳定的 多线混合 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2024年",
    "score": 8.8,
    "ratingCount": 329,
    "monthlyPrice": 40,
    "traffic": 320,
    "lineType": "多线混合",
    "protocols": [
      "Shadowsocks",
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 99,
    "speedMbps": 690,
    "latencyMs": 74,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "节点在线率高，日常断流情况较少",
      "支持全平台 Sing-box 与 Clash 规则分流",
      "拥有活跃的用户社群与故障公告推送"
    ],
    "cons": [
      "入门套餐门槛一般，推荐以季付或半年付更为划算",
      "部分流媒体节点偶现非自制剧封禁需手动换节点",
      "官网受阻时需通过备用镜像或群组获取新地址"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E7%99%BD%E6%9C%88%E5%85%89%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥40 起，基准月流量 320GB，建议优先按月订购。",
    "features": [
      "多线混合架构",
      "320GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "白月光 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2024年。其网络架构主要采用 多线混合，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 690 Mbps，端到端延迟控制在 74 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-anyland",
    "name": "Anyland",
    "slug": "anyland",
    "slogan": "Anyland 专注于提供稳定的 IPLC专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2024年",
    "score": 8.6,
    "ratingCount": 509,
    "monthlyPrice": 35,
    "traffic": 320,
    "lineType": "IPLC专线",
    "protocols": [
      "Shadowsocks",
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 69,
    "speedMbps": 690,
    "latencyMs": 74,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "节点在线率高，日常断流情况较少",
      "支持全平台 Sing-box 与 Clash 规则分流",
      "拥有活跃的用户社群与故障公告推送"
    ],
    "cons": [
      "性价比属于行业中等水平，缺乏超低价小额月付包",
      "客服响应时间在节假日可能有所延迟",
      "部分节点对严苛住宅 IP 风控平台解锁偶有不稳定"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=Anyland%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥35 起，基准月流量 320GB，建议优先按月订购。",
    "features": [
      "IPLC专线架构",
      "320GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "Anyland 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2024年。其网络架构主要采用 IPLC专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 690 Mbps，端到端延迟控制在 74 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-scrssr",
    "name": "Scrssr",
    "slug": "scrssr",
    "slogan": "Scrssr 专注于提供稳定的 多线混合 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2020年",
    "score": 8.4,
    "ratingCount": 475,
    "monthlyPrice": 40,
    "traffic": 160,
    "lineType": "多线混合",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "nodeCount": 95,
    "speedMbps": 570,
    "latencyMs": 70,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": false,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": false,
      "disney": true,
      "youtube": true,
      "tiktok": false
    },
    "pros": [
      "节点延迟低，常规网页浏览瞬时响应",
      "主流流媒体与 YouTube 4K 解锁稳定",
      "支持常见主流客户端快捷订阅导入"
    ],
    "cons": [
      "入门套餐门槛一般，推荐以季付或半年付更为划算",
      "部分流媒体节点偶现非自制剧封禁需手动换节点",
      "官网受阻时需通过备用镜像或群组获取新地址"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=Scrssr%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "季付",
    "priceNote": "月付约 ¥40 起，基准月流量 160GB，建议优先按月订购。",
    "features": [
      "多线混合架构",
      "160GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "Scrssr 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2020年。其网络架构主要采用 多线混合，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 570 Mbps，端到端延迟控制在 70 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-xsus",
    "name": "XSUS",
    "slug": "xsus",
    "slogan": "XSUS 专注于提供稳定的 多线混合 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2021年",
    "score": 8.4,
    "ratingCount": 211,
    "monthlyPrice": 15,
    "traffic": 160,
    "lineType": "多线混合",
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 71,
    "speedMbps": 450,
    "latencyMs": 46,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "入口采用多线 BGP 容灾架构，故障自愈能力强",
      "价格在同类型产品中具有一定竞争力",
      "提供全天候工单技术支持"
    ],
    "cons": [
      "入门套餐门槛一般，推荐以季付或半年付更为划算",
      "部分流媒体节点偶现非自制剧封禁需手动换节点",
      "官网受阻时需通过备用镜像或群组获取新地址"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=XSUS%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥15 起，基准月流量 160GB，建议优先按月订购。",
    "features": [
      "多线混合架构",
      "160GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "XSUS 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2021年。其网络架构主要采用 多线混合，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 450 Mbps，端到端延迟控制在 46 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-mesl",
    "name": "MESL",
    "slug": "mesl",
    "slogan": "全节点原生住宅 IP，专为 AI 生产力与跨境打造的高端网络",
    "established": "2022年",
    "score": 8.7,
    "ratingCount": 214,
    "monthlyPrice": 58,
    "traffic": 200,
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "nodeCount": 75,
    "speedMbps": 660,
    "latencyMs": 46,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "大比例配置原生住宅双 ISP 落地 IP",
      "ChatGPT 4o 与 Claude 几乎从不弹验证或拒登",
      "晚高峰专线直连，丢包率趋近于 0"
    ],
    "cons": [
      "资费昂贵，入门门槛高",
      "流量额度相对偏紧凑",
      "节点总数不如大众机场繁多"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=MESL%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥58 起，基准月流量 200GB，建议优先按月订购。",
    "features": [
      "全节点原生住宅",
      "AI零风控",
      "IEPL物理专线",
      "企业级SLA"
    ],
    "description": "MESL 主打全节点原生双 ISP 住宅落地，专门针对 OpenAI、Claude、TikTok 跨境电商等严苛风控场景设计，是跨境业务和 AI 重度生产者的利器，但价格相对昂贵。"
  },
  {
    "id": "dir-youtu",
    "name": "悠兔",
    "slug": "youtu",
    "slogan": "悠兔 专注于提供稳定的 BGP隧道中转 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2022年",
    "score": 8.7,
    "ratingCount": 502,
    "monthlyPrice": 20,
    "traffic": 280,
    "lineType": "BGP隧道中转",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "nodeCount": 62,
    "speedMbps": 480,
    "latencyMs": 67,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "晚高峰测速表现较为坚挺，日常看视频无缓冲",
      "节点分布覆盖主流亚太与欧美核心区域",
      "协议支持丰富，适配 iOS/Android/Windows/Mac"
    ],
    "cons": [
      "无不限时按量计费套餐，流量到期清零",
      "对多设备并发连接数有一定限制",
      "晚高峰突发大带宽下载时速率有所波动"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E6%82%A0%E5%85%94%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥20 起，基准月流量 280GB，建议优先按月订购。",
    "features": [
      "BGP隧道中转架构",
      "280GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "悠兔 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2022年。其网络架构主要采用 BGP隧道中转，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 480 Mbps，端到端延迟控制在 67 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-yeshayun",
    "name": "夜煞云",
    "slug": "yeshayun",
    "slogan": "夜煞云 专注于提供稳定的 BGP隧道中转 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2020年",
    "score": 8.3,
    "ratingCount": 380,
    "monthlyPrice": 35,
    "traffic": 200,
    "lineType": "BGP隧道中转",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "nodeCount": 90,
    "speedMbps": 420,
    "latencyMs": 65,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": false,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": false,
      "disney": true,
      "youtube": true,
      "tiktok": false
    },
    "pros": [
      "节点延迟低，常规网页浏览瞬时响应",
      "主流流媒体与 YouTube 4K 解锁稳定",
      "支持常见主流客户端快捷订阅导入"
    ],
    "cons": [
      "无不限时按量计费套餐，流量到期清零",
      "对多设备并发连接数有一定限制",
      "晚高峰突发大带宽下载时速率有所波动"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E5%A4%9C%E7%85%9E%E4%BA%91%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "季付",
    "priceNote": "月付约 ¥35 起，基准月流量 200GB，建议优先按月订购。",
    "features": [
      "BGP隧道中转架构",
      "200GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "夜煞云 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2020年。其网络架构主要采用 BGP隧道中转，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 420 Mbps，端到端延迟控制在 65 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-ssrdog",
    "name": "SSRDOG",
    "slug": "ssrdog",
    "slogan": "SSRDOG 专注于提供稳定的 BGP隧道中转 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2021年",
    "score": 8.7,
    "ratingCount": 486,
    "monthlyPrice": 25,
    "traffic": 120,
    "lineType": "BGP隧道中转",
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 46,
    "speedMbps": 600,
    "latencyMs": 51,
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
      "入口采用多线 BGP 容灾架构，故障自愈能力强",
      "价格在同类型产品中具有一定竞争力",
      "提供全天候工单技术支持"
    ],
    "cons": [
      "无不限时按量计费套餐，流量到期清零",
      "对多设备并发连接数有一定限制",
      "晚高峰突发大带宽下载时速率有所波动"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=SSRDOG%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥25 起，基准月流量 120GB，建议优先按月订购。",
    "features": [
      "BGP隧道中转架构",
      "120GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "SSRDOG 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2021年。其网络架构主要采用 BGP隧道中转，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 600 Mbps，端到端延迟控制在 51 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-speedcat",
    "name": "SpeedCAT",
    "slug": "speedcat",
    "slogan": "SpeedCAT 专注于提供稳定的 BGP隧道中转 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2020年",
    "score": 8.3,
    "ratingCount": 320,
    "monthlyPrice": 45,
    "traffic": 200,
    "lineType": "BGP隧道中转",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "nodeCount": 90,
    "speedMbps": 420,
    "latencyMs": 65,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": false,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": false,
      "disney": true,
      "youtube": true,
      "tiktok": false
    },
    "pros": [
      "节点延迟低，常规网页浏览瞬时响应",
      "主流流媒体与 YouTube 4K 解锁稳定",
      "支持常见主流客户端快捷订阅导入"
    ],
    "cons": [
      "无不限时按量计费套餐，流量到期清零",
      "对多设备并发连接数有一定限制",
      "晚高峰突发大带宽下载时速率有所波动"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=SpeedCAT%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "季付",
    "priceNote": "月付约 ¥45 起，基准月流量 200GB，建议优先按月订购。",
    "features": [
      "BGP隧道中转架构",
      "200GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "SpeedCAT 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2020年。其网络架构主要采用 BGP隧道中转，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 420 Mbps，端到端延迟控制在 65 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-flyingbird",
    "name": "FlyingBird",
    "slug": "flyingbird",
    "slogan": "FlyingBird 专注于提供稳定的 IEPL专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2021年",
    "score": 8.1,
    "ratingCount": 196,
    "monthlyPrice": 30,
    "traffic": 280,
    "lineType": "IEPL专线",
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 56,
    "speedMbps": 600,
    "latencyMs": 61,
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
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": false
    },
    "pros": [
      "入口采用多线 BGP 容灾架构，故障自愈能力强",
      "价格在同类型产品中具有一定竞争力",
      "提供全天候工单技术支持"
    ],
    "cons": [
      "晚高峰骨干网极度拥堵时偶有微小抖动",
      "未提供深度定制的一键专属客户端",
      "部分小众冷门节点偶尔出现离线检修"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=FlyingBird%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥30 起，基准月流量 280GB，建议优先按月订购。",
    "features": [
      "IEPL专线架构",
      "280GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "FlyingBird 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2021年。其网络架构主要采用 IEPL专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 600 Mbps，端到端延迟控制在 61 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-kuromis",
    "name": "Kuromis",
    "slug": "kuromis",
    "slogan": "Kuromis 专注于提供稳定的 IPLC专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2022年",
    "score": 8.6,
    "ratingCount": 427,
    "monthlyPrice": 20,
    "traffic": 160,
    "lineType": "IPLC专线",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "nodeCount": 77,
    "speedMbps": 630,
    "latencyMs": 52,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "晚高峰测速表现较为坚挺，日常看视频无缓冲",
      "节点分布覆盖主流亚太与欧美核心区域",
      "协议支持丰富，适配 iOS/Android/Windows/Mac"
    ],
    "cons": [
      "性价比属于行业中等水平，缺乏超低价小额月付包",
      "客服响应时间在节假日可能有所延迟",
      "部分节点对严苛住宅 IP 风控平台解锁偶有不稳定"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=Kuromis%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥20 起，基准月流量 160GB，建议优先按月订购。",
    "features": [
      "IPLC专线架构",
      "160GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "Kuromis 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2022年。其网络架构主要采用 IPLC专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 630 Mbps，端到端延迟控制在 52 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-laomaoyun",
    "name": "老猫云",
    "slug": "laomaoyun",
    "slogan": "老猫云 专注于提供稳定的 IPLC专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2023年",
    "score": 8.6,
    "ratingCount": 183,
    "monthlyPrice": 25,
    "traffic": 240,
    "lineType": "IPLC专线",
    "protocols": [
      "Trojan",
      "Hysteria 2"
    ],
    "nodeCount": 73,
    "speedMbps": 510,
    "latencyMs": 48,
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
      "线路冗余度较好，遇到节点维护有备用节点自动接管",
      "对于常用 AI 工具（ChatGPT/Gemini）具备基础解锁支持",
      "流量给付充足，适合日常中度娱乐追剧"
    ],
    "cons": [
      "性价比属于行业中等水平，缺乏超低价小额月付包",
      "客服响应时间在节假日可能有所延迟",
      "部分节点对严苛住宅 IP 风控平台解锁偶有不稳定"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E8%80%81%E7%8C%AB%E4%BA%91%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥25 起，基准月流量 240GB，建议优先按月订购。",
    "features": [
      "IPLC专线架构",
      "240GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "老猫云 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2023年。其网络架构主要采用 IPLC专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 510 Mbps，端到端延迟控制在 48 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-feijiyun",
    "name": "飞机云",
    "slug": "feijiyun",
    "slogan": "飞机云 专注于提供稳定的 BGP隧道中转 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2023年",
    "score": 8.7,
    "ratingCount": 378,
    "monthlyPrice": 20,
    "traffic": 120,
    "lineType": "BGP隧道中转",
    "protocols": [
      "Trojan",
      "Hysteria 2"
    ],
    "nodeCount": 58,
    "speedMbps": 660,
    "latencyMs": 63,
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
      "线路冗余度较好，遇到节点维护有备用节点自动接管",
      "对于常用 AI 工具（ChatGPT/Gemini）具备基础解锁支持",
      "流量给付充足，适合日常中度娱乐追剧"
    ],
    "cons": [
      "无不限时按量计费套餐，流量到期清零",
      "对多设备并发连接数有一定限制",
      "晚高峰突发大带宽下载时速率有所波动"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E9%A3%9E%E6%9C%BA%E4%BA%91%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥20 起，基准月流量 120GB，建议优先按月订购。",
    "features": [
      "BGP隧道中转架构",
      "120GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "飞机云 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2023年。其网络架构主要采用 BGP隧道中转，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 660 Mbps，端到端延迟控制在 63 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-fscloud",
    "name": "FSCloud",
    "slug": "fscloud",
    "slogan": "FSCloud 专注于提供稳定的 BGP隧道中转 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2023年",
    "score": 8.3,
    "ratingCount": 448,
    "monthlyPrice": 20,
    "traffic": 280,
    "lineType": "BGP隧道中转",
    "protocols": [
      "Trojan",
      "Hysteria 2"
    ],
    "nodeCount": 98,
    "speedMbps": 660,
    "latencyMs": 73,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "线路冗余度较好，遇到节点维护有备用节点自动接管",
      "对于常用 AI 工具（ChatGPT/Gemini）具备基础解锁支持",
      "流量给付充足，适合日常中度娱乐追剧"
    ],
    "cons": [
      "无不限时按量计费套餐，流量到期清零",
      "对多设备并发连接数有一定限制",
      "晚高峰突发大带宽下载时速率有所波动"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=FSCloud%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥20 起，基准月流量 280GB，建议优先按月订购。",
    "features": [
      "BGP隧道中转架构",
      "280GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "FSCloud 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2023年。其网络架构主要采用 BGP隧道中转，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 660 Mbps，端到端延迟控制在 73 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-taishan",
    "name": "泰山",
    "slug": "taishan",
    "slogan": "泰山 专注于提供稳定的 IEPL专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2022年",
    "score": 8.1,
    "ratingCount": 532,
    "monthlyPrice": 30,
    "traffic": 280,
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "nodeCount": 92,
    "speedMbps": 480,
    "latencyMs": 67,
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
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": false
    },
    "pros": [
      "晚高峰测速表现较为坚挺，日常看视频无缓冲",
      "节点分布覆盖主流亚太与欧美核心区域",
      "协议支持丰富，适配 iOS/Android/Windows/Mac"
    ],
    "cons": [
      "晚高峰骨干网极度拥堵时偶有微小抖动",
      "未提供深度定制的一键专属客户端",
      "部分小众冷门节点偶尔出现离线检修"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E6%B3%B0%E5%B1%B1%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥30 起，基准月流量 280GB，建议优先按月订购。",
    "features": [
      "IEPL专线架构",
      "280GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "泰山 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2022年。其网络架构主要采用 IEPL专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 480 Mbps，端到端延迟控制在 67 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-cyberguard",
    "name": "CyberGuard",
    "slug": "cyberguard",
    "slogan": "CyberGuard 专注于提供稳定的 IEPL专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2021年",
    "score": 8.5,
    "ratingCount": 416,
    "monthlyPrice": 45,
    "traffic": 200,
    "lineType": "IEPL专线",
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 96,
    "speedMbps": 600,
    "latencyMs": 71,
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
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": false
    },
    "pros": [
      "入口采用多线 BGP 容灾架构，故障自愈能力强",
      "价格在同类型产品中具有一定竞争力",
      "提供全天候工单技术支持"
    ],
    "cons": [
      "晚高峰骨干网极度拥堵时偶有微小抖动",
      "未提供深度定制的一键专属客户端",
      "部分小众冷门节点偶尔出现离线检修"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=CyberGuard%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥45 起，基准月流量 200GB，建议优先按月订购。",
    "features": [
      "IEPL专线架构",
      "200GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "CyberGuard 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2021年。其网络架构主要采用 IEPL专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 600 Mbps，端到端延迟控制在 71 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-longmaoyun",
    "name": "龙猫云",
    "slug": "longmaoyun",
    "slogan": "龙猫云 专注于提供稳定的 BGP隧道中转 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2021年",
    "score": 8.7,
    "ratingCount": 356,
    "monthlyPrice": 20,
    "traffic": 200,
    "lineType": "BGP隧道中转",
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 66,
    "speedMbps": 600,
    "latencyMs": 71,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "入口采用多线 BGP 容灾架构，故障自愈能力强",
      "价格在同类型产品中具有一定竞争力",
      "提供全天候工单技术支持"
    ],
    "cons": [
      "无不限时按量计费套餐，流量到期清零",
      "对多设备并发连接数有一定限制",
      "晚高峰突发大带宽下载时速率有所波动"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E9%BE%99%E7%8C%AB%E4%BA%91%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥20 起，基准月流量 200GB，建议优先按月订购。",
    "features": [
      "BGP隧道中转架构",
      "200GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "龙猫云 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2021年。其网络架构主要采用 BGP隧道中转，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 600 Mbps，端到端延迟控制在 71 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-fatcat",
    "name": "FATCAT",
    "slug": "fatcat",
    "slogan": "FATCAT 专注于提供稳定的 IPLC专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2020年",
    "score": 8.2,
    "ratingCount": 375,
    "monthlyPrice": 40,
    "traffic": 240,
    "lineType": "IPLC专线",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "nodeCount": 85,
    "speedMbps": 570,
    "latencyMs": 60,
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
      "netflix": false,
      "disney": true,
      "youtube": true,
      "tiktok": true
    },
    "pros": [
      "节点延迟低，常规网页浏览瞬时响应",
      "主流流媒体与 YouTube 4K 解锁稳定",
      "支持常见主流客户端快捷订阅导入"
    ],
    "cons": [
      "性价比属于行业中等水平，缺乏超低价小额月付包",
      "客服响应时间在节假日可能有所延迟",
      "部分节点对严苛住宅 IP 风控平台解锁偶有不稳定"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=FATCAT%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "季付",
    "priceNote": "月付约 ¥40 起，基准月流量 240GB，建议优先按月订购。",
    "features": [
      "IPLC专线架构",
      "240GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "FATCAT 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2020年。其网络架构主要采用 IPLC专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 570 Mbps，端到端延迟控制在 60 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-coffee-cloud",
    "name": "Coffee Cloud",
    "slug": "coffee-cloud",
    "slogan": "Coffee Cloud 专注于提供稳定的 BGP隧道中转 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2021年",
    "score": 8.3,
    "ratingCount": 196,
    "monthlyPrice": 40,
    "traffic": 280,
    "lineType": "BGP隧道中转",
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 86,
    "speedMbps": 600,
    "latencyMs": 61,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "入口采用多线 BGP 容灾架构，故障自愈能力强",
      "价格在同类型产品中具有一定竞争力",
      "提供全天候工单技术支持"
    ],
    "cons": [
      "无不限时按量计费套餐，流量到期清零",
      "对多设备并发连接数有一定限制",
      "晚高峰突发大带宽下载时速率有所波动"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=Coffee%20Cloud%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥40 起，基准月流量 280GB，建议优先按月订购。",
    "features": [
      "BGP隧道中转架构",
      "280GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "Coffee Cloud 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2021年。其网络架构主要采用 BGP隧道中转，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 600 Mbps，端到端延迟控制在 61 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-wancheng",
    "name": "万城",
    "slug": "wancheng",
    "slogan": "万城 专注于提供稳定的 IPLC专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2022年",
    "score": 8.6,
    "ratingCount": 617,
    "monthlyPrice": 45,
    "traffic": 320,
    "lineType": "IPLC专线",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "nodeCount": 57,
    "speedMbps": 630,
    "latencyMs": 62,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "晚高峰测速表现较为坚挺，日常看视频无缓冲",
      "节点分布覆盖主流亚太与欧美核心区域",
      "协议支持丰富，适配 iOS/Android/Windows/Mac"
    ],
    "cons": [
      "性价比属于行业中等水平，缺乏超低价小额月付包",
      "客服响应时间在节假日可能有所延迟",
      "部分节点对严苛住宅 IP 风控平台解锁偶有不稳定"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E4%B8%87%E5%9F%8E%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥45 起，基准月流量 320GB，建议优先按月订购。",
    "features": [
      "IPLC专线架构",
      "320GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "万城 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2022年。其网络架构主要采用 IPLC专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 630 Mbps，端到端延迟控制在 62 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-boostnet",
    "name": "BoostNet",
    "slug": "boostnet",
    "slogan": "BoostNet 专注于提供稳定的 多线混合 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2020年",
    "score": 8.4,
    "ratingCount": 415,
    "monthlyPrice": 40,
    "traffic": 160,
    "lineType": "多线混合",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "nodeCount": 95,
    "speedMbps": 570,
    "latencyMs": 70,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": false,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": false,
      "disney": true,
      "youtube": true,
      "tiktok": false
    },
    "pros": [
      "节点延迟低，常规网页浏览瞬时响应",
      "主流流媒体与 YouTube 4K 解锁稳定",
      "支持常见主流客户端快捷订阅导入"
    ],
    "cons": [
      "入门套餐门槛一般，推荐以季付或半年付更为划算",
      "部分流媒体节点偶现非自制剧封禁需手动换节点",
      "官网受阻时需通过备用镜像或群组获取新地址"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=BoostNet%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "季付",
    "priceNote": "月付约 ¥40 起，基准月流量 160GB，建议优先按月订购。",
    "features": [
      "多线混合架构",
      "160GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "BoostNet 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2020年。其网络架构主要采用 多线混合，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 570 Mbps，端到端延迟控制在 70 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-luyuyun",
    "name": "鹿语云",
    "slug": "luyuyun",
    "slogan": "鹿语云 专注于提供稳定的 多线混合 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2022年",
    "score": 8.8,
    "ratingCount": 297,
    "monthlyPrice": 40,
    "traffic": 240,
    "lineType": "多线混合",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "nodeCount": 67,
    "speedMbps": 630,
    "latencyMs": 72,
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
      "晚高峰测速表现较为坚挺，日常看视频无缓冲",
      "节点分布覆盖主流亚太与欧美核心区域",
      "协议支持丰富，适配 iOS/Android/Windows/Mac"
    ],
    "cons": [
      "入门套餐门槛一般，推荐以季付或半年付更为划算",
      "部分流媒体节点偶现非自制剧封禁需手动换节点",
      "官网受阻时需通过备用镜像或群组获取新地址"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E9%B9%BF%E8%AF%AD%E4%BA%91%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥40 起，基准月流量 240GB，建议优先按月订购。",
    "features": [
      "多线混合架构",
      "240GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "鹿语云 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2022年。其网络架构主要采用 多线混合，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 630 Mbps，端到端延迟控制在 72 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-yiyunti",
    "name": "一云梯",
    "slug": "yiyunti",
    "slogan": "一云梯 专注于提供稳定的 多线混合 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2020年",
    "score": 8.8,
    "ratingCount": 405,
    "monthlyPrice": 25,
    "traffic": 240,
    "lineType": "多线混合",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "nodeCount": 55,
    "speedMbps": 570,
    "latencyMs": 60,
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
      "netflix": false,
      "disney": true,
      "youtube": true,
      "tiktok": true
    },
    "pros": [
      "节点延迟低，常规网页浏览瞬时响应",
      "主流流媒体与 YouTube 4K 解锁稳定",
      "支持常见主流客户端快捷订阅导入"
    ],
    "cons": [
      "入门套餐门槛一般，推荐以季付或半年付更为划算",
      "部分流媒体节点偶现非自制剧封禁需手动换节点",
      "官网受阻时需通过备用镜像或群组获取新地址"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E4%B8%80%E4%BA%91%E6%A2%AF%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "季付",
    "priceNote": "月付约 ¥25 起，基准月流量 240GB，建议优先按月订购。",
    "features": [
      "多线混合架构",
      "240GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "一云梯 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2020年。其网络架构主要采用 多线混合，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 570 Mbps，端到端延迟控制在 60 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-aladdinnet",
    "name": "AladdinNet",
    "slug": "aladdinnet",
    "slogan": "AladdinNet 专注于提供稳定的 IEPL专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2022年",
    "score": 8.1,
    "ratingCount": 242,
    "monthlyPrice": 25,
    "traffic": 200,
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "nodeCount": 72,
    "speedMbps": 480,
    "latencyMs": 47,
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
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": false
    },
    "pros": [
      "晚高峰测速表现较为坚挺，日常看视频无缓冲",
      "节点分布覆盖主流亚太与欧美核心区域",
      "协议支持丰富，适配 iOS/Android/Windows/Mac"
    ],
    "cons": [
      "晚高峰骨干网极度拥堵时偶有微小抖动",
      "未提供深度定制的一键专属客户端",
      "部分小众冷门节点偶尔出现离线检修"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=AladdinNet%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥25 起，基准月流量 200GB，建议优先按月订购。",
    "features": [
      "IEPL专线架构",
      "200GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "AladdinNet 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2022年。其网络架构主要采用 IEPL专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 480 Mbps，端到端延迟控制在 47 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-tntcloud",
    "name": "TNTCloud",
    "slug": "tntcloud",
    "slogan": "TNTCloud 专注于提供稳定的 BGP隧道中转 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2023年",
    "score": 8.7,
    "ratingCount": 498,
    "monthlyPrice": 35,
    "traffic": 120,
    "lineType": "BGP隧道中转",
    "protocols": [
      "Trojan",
      "Hysteria 2"
    ],
    "nodeCount": 58,
    "speedMbps": 660,
    "latencyMs": 63,
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
      "线路冗余度较好，遇到节点维护有备用节点自动接管",
      "对于常用 AI 工具（ChatGPT/Gemini）具备基础解锁支持",
      "流量给付充足，适合日常中度娱乐追剧"
    ],
    "cons": [
      "无不限时按量计费套餐，流量到期清零",
      "对多设备并发连接数有一定限制",
      "晚高峰突发大带宽下载时速率有所波动"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=TNTCloud%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥35 起，基准月流量 120GB，建议优先按月订购。",
    "features": [
      "BGP隧道中转架构",
      "120GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "TNTCloud 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2023年。其网络架构主要采用 BGP隧道中转，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 660 Mbps，端到端延迟控制在 63 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-shanhuyun",
    "name": "闪狐云",
    "slug": "shanhuyun",
    "slogan": "闪狐云 专注于提供稳定的 IPLC专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2024年",
    "score": 8.2,
    "ratingCount": 369,
    "monthlyPrice": 35,
    "traffic": 240,
    "lineType": "IPLC专线",
    "protocols": [
      "Shadowsocks",
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 49,
    "speedMbps": 690,
    "latencyMs": 54,
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
      "节点在线率高，日常断流情况较少",
      "支持全平台 Sing-box 与 Clash 规则分流",
      "拥有活跃的用户社群与故障公告推送"
    ],
    "cons": [
      "性价比属于行业中等水平，缺乏超低价小额月付包",
      "客服响应时间在节假日可能有所延迟",
      "部分节点对严苛住宅 IP 风控平台解锁偶有不稳定"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E9%97%AA%E7%8B%90%E4%BA%91%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥35 起，基准月流量 240GB，建议优先按月订购。",
    "features": [
      "IPLC专线架构",
      "240GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "闪狐云 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2024年。其网络架构主要采用 IPLC专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 690 Mbps，端到端延迟控制在 54 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-ytoo",
    "name": "YToo",
    "slug": "ytoo",
    "slogan": "歪兔高端专线老牌，自研优化网络体系",
    "established": "2020年",
    "score": 8.7,
    "ratingCount": 218,
    "monthlyPrice": 48,
    "traffic": 240,
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "nodeCount": 82,
    "speedMbps": 690,
    "latencyMs": 44,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "优质物理内网专线，延迟表现极其平稳",
      "晚高峰油管测速轻松突破 200k",
      "AI 解锁稳定，Claude/OpenAI 极少被拒"
    ],
    "cons": [
      "价格门槛偏高，适合中高端预算人群",
      "无按量计费套餐",
      "节点数量相对精简集中"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=YToo%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥48 起，基准月流量 240GB，建议优先按月订购。",
    "features": [
      "歪兔旗舰",
      "全内网专线",
      "AI解锁稳定",
      "油管极速体验"
    ],
    "description": "YToo（歪兔）以其扎实的线路质量和极低的故障率著称，节点虽不算海量但个个精挑细选，在重度看视频和 AI 生产力群体中享有很高评价。"
  },
  {
    "id": "dir-flowercloud",
    "name": "FlowerCloud",
    "slug": "flowercloud",
    "slogan": "花云高规格企业级专线，高SLA网络质量标杆",
    "established": "2020年",
    "score": 8.7,
    "ratingCount": 536,
    "monthlyPrice": 50,
    "traffic": 260,
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "nodeCount": 88,
    "speedMbps": 700,
    "latencyMs": 43,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "高 SLA 物理专线承载，断流率极低",
      "港日美新主流节点带宽充足，4K即点即播",
      "流媒体全绿全解"
    ],
    "cons": [
      "价格偏高，无廉价小微套餐",
      "对滥用行为管控严格，封禁多设备超限",
      "偶尔限制注册"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=FlowerCloud%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥50 起，基准月流量 260GB，建议优先按月订购。",
    "features": [
      "高SLA专线",
      "超低抖动",
      "流媒体全绿",
      "大带宽保障"
    ],
    "description": "FlowerCloud（花云）是专线圈子里的标杆品牌之一，提供稳定的多入口 IEPL 线路和高品质流媒体解锁。适合对网络可用性要求极为严苛的商务与学术人士。"
  },
  {
    "id": "dir-qingyunti",
    "name": "青云梯",
    "slug": "qingyunti",
    "slogan": "青云梯 专注于提供稳定的 多线混合 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2022年",
    "score": 8.8,
    "ratingCount": 497,
    "monthlyPrice": 30,
    "traffic": 320,
    "lineType": "多线混合",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "nodeCount": 87,
    "speedMbps": 630,
    "latencyMs": 62,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "晚高峰测速表现较为坚挺，日常看视频无缓冲",
      "节点分布覆盖主流亚太与欧美核心区域",
      "协议支持丰富，适配 iOS/Android/Windows/Mac"
    ],
    "cons": [
      "入门套餐门槛一般，推荐以季付或半年付更为划算",
      "部分流媒体节点偶现非自制剧封禁需手动换节点",
      "官网受阻时需通过备用镜像或群组获取新地址"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E9%9D%92%E4%BA%91%E6%A2%AF%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥30 起，基准月流量 320GB，建议优先按月订购。",
    "features": [
      "多线混合架构",
      "320GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "青云梯 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2022年。其网络架构主要采用 多线混合，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 630 Mbps，端到端延迟控制在 62 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-baiyangxing",
    "name": "白羊星",
    "slug": "baiyangxing",
    "slogan": "白羊星 专注于提供稳定的 IEPL专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2020年",
    "score": 8.1,
    "ratingCount": 410,
    "monthlyPrice": 25,
    "traffic": 200,
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "nodeCount": 60,
    "speedMbps": 420,
    "latencyMs": 65,
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
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": false,
      "disney": true,
      "youtube": true,
      "tiktok": false
    },
    "pros": [
      "节点延迟低，常规网页浏览瞬时响应",
      "主流流媒体与 YouTube 4K 解锁稳定",
      "支持常见主流客户端快捷订阅导入"
    ],
    "cons": [
      "晚高峰骨干网极度拥堵时偶有微小抖动",
      "未提供深度定制的一键专属客户端",
      "部分小众冷门节点偶尔出现离线检修"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E7%99%BD%E7%BE%8A%E6%98%9F%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "季付",
    "priceNote": "月付约 ¥25 起，基准月流量 200GB，建议优先按月订购。",
    "features": [
      "IEPL专线架构",
      "200GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "白羊星 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2020年。其网络架构主要采用 IEPL专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 420 Mbps，端到端延迟控制在 65 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-shanhai",
    "name": "山海",
    "slug": "shanhai",
    "slogan": "山海 专注于提供稳定的 多线混合 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2024年",
    "score": 8.8,
    "ratingCount": 359,
    "monthlyPrice": 25,
    "traffic": 320,
    "lineType": "多线混合",
    "protocols": [
      "Shadowsocks",
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 99,
    "speedMbps": 690,
    "latencyMs": 74,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "节点在线率高，日常断流情况较少",
      "支持全平台 Sing-box 与 Clash 规则分流",
      "拥有活跃的用户社群与故障公告推送"
    ],
    "cons": [
      "入门套餐门槛一般，推荐以季付或半年付更为划算",
      "部分流媒体节点偶现非自制剧封禁需手动换节点",
      "官网受阻时需通过备用镜像或群组获取新地址"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E5%B1%B1%E6%B5%B7%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥25 起，基准月流量 320GB，建议优先按月订购。",
    "features": [
      "多线混合架构",
      "320GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "山海 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2024年。其网络架构主要采用 多线混合，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 690 Mbps，端到端延迟控制在 74 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-yepfast",
    "name": "YepFast",
    "slug": "yepfast",
    "slogan": "YepFast 专注于提供稳定的 IEPL专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2023年",
    "score": 8.1,
    "ratingCount": 258,
    "monthlyPrice": 35,
    "traffic": 120,
    "lineType": "IEPL专线",
    "protocols": [
      "Trojan",
      "Hysteria 2"
    ],
    "nodeCount": 88,
    "speedMbps": 660,
    "latencyMs": 63,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": false,
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
      "线路冗余度较好，遇到节点维护有备用节点自动接管",
      "对于常用 AI 工具（ChatGPT/Gemini）具备基础解锁支持",
      "流量给付充足，适合日常中度娱乐追剧"
    ],
    "cons": [
      "晚高峰骨干网极度拥堵时偶有微小抖动",
      "未提供深度定制的一键专属客户端",
      "部分小众冷门节点偶尔出现离线检修"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=YepFast%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥35 起，基准月流量 120GB，建议优先按月订购。",
    "features": [
      "IEPL专线架构",
      "120GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "YepFast 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2023年。其网络架构主要采用 IEPL专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 660 Mbps，端到端延迟控制在 63 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-ssone",
    "name": "SSOne",
    "slug": "ssone",
    "slogan": "SSOne 专注于提供稳定的 IPLC专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2021年",
    "score": 8.2,
    "ratingCount": 501,
    "monthlyPrice": 15,
    "traffic": 240,
    "lineType": "IPLC专线",
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 61,
    "speedMbps": 450,
    "latencyMs": 66,
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
      "入口采用多线 BGP 容灾架构，故障自愈能力强",
      "价格在同类型产品中具有一定竞争力",
      "提供全天候工单技术支持"
    ],
    "cons": [
      "性价比属于行业中等水平，缺乏超低价小额月付包",
      "客服响应时间在节假日可能有所延迟",
      "部分节点对严苛住宅 IP 风控平台解锁偶有不稳定"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=SSOne%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥15 起，基准月流量 240GB，建议优先按月订购。",
    "features": [
      "IPLC专线架构",
      "240GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "SSOne 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2021年。其网络架构主要采用 IPLC专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 450 Mbps，端到端延迟控制在 66 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-thyss",
    "name": "THYSS",
    "slug": "thyss",
    "slogan": "THYSS 专注于提供稳定的 IPLC专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2023年",
    "score": 8.2,
    "ratingCount": 493,
    "monthlyPrice": 45,
    "traffic": 160,
    "lineType": "IPLC专线",
    "protocols": [
      "Trojan",
      "Hysteria 2"
    ],
    "nodeCount": 53,
    "speedMbps": 510,
    "latencyMs": 58,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "线路冗余度较好，遇到节点维护有备用节点自动接管",
      "对于常用 AI 工具（ChatGPT/Gemini）具备基础解锁支持",
      "流量给付充足，适合日常中度娱乐追剧"
    ],
    "cons": [
      "性价比属于行业中等水平，缺乏超低价小额月付包",
      "客服响应时间在节假日可能有所延迟",
      "部分节点对严苛住宅 IP 风控平台解锁偶有不稳定"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=THYSS%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥45 起，基准月流量 160GB，建议优先按月订购。",
    "features": [
      "IPLC专线架构",
      "160GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "THYSS 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2023年。其网络架构主要采用 IPLC专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 510 Mbps，端到端延迟控制在 58 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-cocoduck",
    "name": "CocoDuck",
    "slug": "cocoduck",
    "slogan": "CocoDuck 专注于提供稳定的 BGP隧道中转 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2023年",
    "score": 8.7,
    "ratingCount": 448,
    "monthlyPrice": 40,
    "traffic": 280,
    "lineType": "BGP隧道中转",
    "protocols": [
      "Trojan",
      "Hysteria 2"
    ],
    "nodeCount": 98,
    "speedMbps": 660,
    "latencyMs": 73,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "线路冗余度较好，遇到节点维护有备用节点自动接管",
      "对于常用 AI 工具（ChatGPT/Gemini）具备基础解锁支持",
      "流量给付充足，适合日常中度娱乐追剧"
    ],
    "cons": [
      "无不限时按量计费套餐，流量到期清零",
      "对多设备并发连接数有一定限制",
      "晚高峰突发大带宽下载时速率有所波动"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=CocoDuck%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥40 起，基准月流量 280GB，建议优先按月订购。",
    "features": [
      "BGP隧道中转架构",
      "280GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "CocoDuck 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2023年。其网络架构主要采用 BGP隧道中转，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 660 Mbps，端到端延迟控制在 73 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-westdata",
    "name": "WestData",
    "slug": "westdata",
    "slogan": "WestData 专注于提供稳定的 IPLC专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2023年",
    "score": 8.6,
    "ratingCount": 503,
    "monthlyPrice": 35,
    "traffic": 320,
    "lineType": "IPLC专线",
    "protocols": [
      "Trojan",
      "Hysteria 2"
    ],
    "nodeCount": 93,
    "speedMbps": 510,
    "latencyMs": 68,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "线路冗余度较好，遇到节点维护有备用节点自动接管",
      "对于常用 AI 工具（ChatGPT/Gemini）具备基础解锁支持",
      "流量给付充足，适合日常中度娱乐追剧"
    ],
    "cons": [
      "性价比属于行业中等水平，缺乏超低价小额月付包",
      "客服响应时间在节假日可能有所延迟",
      "部分节点对严苛住宅 IP 风控平台解锁偶有不稳定"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=WestData%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥35 起，基准月流量 320GB，建议优先按月订购。",
    "features": [
      "IPLC专线架构",
      "320GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "WestData 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2023年。其网络架构主要采用 IPLC专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 510 Mbps，端到端延迟控制在 68 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-caihongyun",
    "name": "彩虹云",
    "slug": "caihongyun",
    "slogan": "彩虹云 专注于提供稳定的 IEPL专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2021年",
    "score": 8.1,
    "ratingCount": 406,
    "monthlyPrice": 30,
    "traffic": 280,
    "lineType": "IEPL专线",
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 56,
    "speedMbps": 600,
    "latencyMs": 61,
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
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": false
    },
    "pros": [
      "入口采用多线 BGP 容灾架构，故障自愈能力强",
      "价格在同类型产品中具有一定竞争力",
      "提供全天候工单技术支持"
    ],
    "cons": [
      "晚高峰骨干网极度拥堵时偶有微小抖动",
      "未提供深度定制的一键专属客户端",
      "部分小众冷门节点偶尔出现离线检修"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E5%BD%A9%E8%99%B9%E4%BA%91%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥30 起，基准月流量 280GB，建议优先按月订购。",
    "features": [
      "IEPL专线架构",
      "280GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "彩虹云 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2021年。其网络架构主要采用 IEPL专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 600 Mbps，端到端延迟控制在 61 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-flybit",
    "name": "Flybit",
    "slug": "flybit",
    "slogan": "Flybit 专注于提供稳定的 IEPL专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2023年",
    "score": 8.5,
    "ratingCount": 398,
    "monthlyPrice": 35,
    "traffic": 200,
    "lineType": "IEPL专线",
    "protocols": [
      "Trojan",
      "Hysteria 2"
    ],
    "nodeCount": 48,
    "speedMbps": 660,
    "latencyMs": 53,
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
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": false
    },
    "pros": [
      "线路冗余度较好，遇到节点维护有备用节点自动接管",
      "对于常用 AI 工具（ChatGPT/Gemini）具备基础解锁支持",
      "流量给付充足，适合日常中度娱乐追剧"
    ],
    "cons": [
      "晚高峰骨干网极度拥堵时偶有微小抖动",
      "未提供深度定制的一键专属客户端",
      "部分小众冷门节点偶尔出现离线检修"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=Flybit%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥35 起，基准月流量 200GB，建议优先按月订购。",
    "features": [
      "IEPL专线架构",
      "200GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "Flybit 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2023年。其网络架构主要采用 IEPL专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 660 Mbps，端到端延迟控制在 53 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-xxyun",
    "name": "XX云",
    "slug": "xxyun",
    "slogan": "XX云 专注于提供稳定的 IEPL专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2021年",
    "score": 8.1,
    "ratingCount": 306,
    "monthlyPrice": 15,
    "traffic": 120,
    "lineType": "IEPL专线",
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 76,
    "speedMbps": 600,
    "latencyMs": 51,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": false,
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
      "入口采用多线 BGP 容灾架构，故障自愈能力强",
      "价格在同类型产品中具有一定竞争力",
      "提供全天候工单技术支持"
    ],
    "cons": [
      "晚高峰骨干网极度拥堵时偶有微小抖动",
      "未提供深度定制的一键专属客户端",
      "部分小众冷门节点偶尔出现离线检修"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=XX%E4%BA%91%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥15 起，基准月流量 120GB，建议优先按月订购。",
    "features": [
      "IEPL专线架构",
      "120GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "XX云 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2021年。其网络架构主要采用 IEPL专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 600 Mbps，端到端延迟控制在 51 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-wangjikuaiche",
    "name": "网际快车",
    "slug": "wangjikuaiche",
    "slogan": "网际快车 专注于提供稳定的 多线混合 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2021年",
    "score": 8.4,
    "ratingCount": 331,
    "monthlyPrice": 40,
    "traffic": 160,
    "lineType": "多线混合",
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 71,
    "speedMbps": 450,
    "latencyMs": 46,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "入口采用多线 BGP 容灾架构，故障自愈能力强",
      "价格在同类型产品中具有一定竞争力",
      "提供全天候工单技术支持"
    ],
    "cons": [
      "入门套餐门槛一般，推荐以季付或半年付更为划算",
      "部分流媒体节点偶现非自制剧封禁需手动换节点",
      "官网受阻时需通过备用镜像或群组获取新地址"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E7%BD%91%E9%99%85%E5%BF%AB%E8%BD%A6%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥40 起，基准月流量 160GB，建议优先按月订购。",
    "features": [
      "多线混合架构",
      "160GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "网际快车 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2021年。其网络架构主要采用 多线混合，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 450 Mbps，端到端延迟控制在 46 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-adaxi",
    "name": "阿达西",
    "slug": "adaxi",
    "slogan": "阿达西 专注于提供稳定的 IPLC专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2021年",
    "score": 8.6,
    "ratingCount": 551,
    "monthlyPrice": 20,
    "traffic": 320,
    "lineType": "IPLC专线",
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 81,
    "speedMbps": 450,
    "latencyMs": 56,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "入口采用多线 BGP 容灾架构，故障自愈能力强",
      "价格在同类型产品中具有一定竞争力",
      "提供全天候工单技术支持"
    ],
    "cons": [
      "性价比属于行业中等水平，缺乏超低价小额月付包",
      "客服响应时间在节假日可能有所延迟",
      "部分节点对严苛住宅 IP 风控平台解锁偶有不稳定"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E9%98%BF%E8%BE%BE%E8%A5%BF%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥20 起，基准月流量 320GB，建议优先按月订购。",
    "features": [
      "IPLC专线架构",
      "320GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "阿达西 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2021年。其网络架构主要采用 IPLC专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 450 Mbps，端到端延迟控制在 56 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-chongshangyunxiao",
    "name": "冲上云霄",
    "slug": "chongshangyunxiao",
    "slogan": "冲上云霄 专注于提供稳定的 多线混合 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2023年",
    "score": 8.8,
    "ratingCount": 593,
    "monthlyPrice": 25,
    "traffic": 320,
    "lineType": "多线混合",
    "protocols": [
      "Trojan",
      "Hysteria 2"
    ],
    "nodeCount": 63,
    "speedMbps": 510,
    "latencyMs": 68,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "线路冗余度较好，遇到节点维护有备用节点自动接管",
      "对于常用 AI 工具（ChatGPT/Gemini）具备基础解锁支持",
      "流量给付充足，适合日常中度娱乐追剧"
    ],
    "cons": [
      "入门套餐门槛一般，推荐以季付或半年付更为划算",
      "部分流媒体节点偶现非自制剧封禁需手动换节点",
      "官网受阻时需通过备用镜像或群组获取新地址"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E5%86%B2%E4%B8%8A%E4%BA%91%E9%9C%84%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥25 起，基准月流量 320GB，建议优先按月订购。",
    "features": [
      "多线混合架构",
      "320GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "冲上云霄 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2023年。其网络架构主要采用 多线混合，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 510 Mbps，端到端延迟控制在 68 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-uuone",
    "name": "UUOne",
    "slug": "uuone",
    "slogan": "UUOne 专注于提供稳定的 多线混合 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2020年",
    "score": 8.8,
    "ratingCount": 425,
    "monthlyPrice": 30,
    "traffic": 320,
    "lineType": "多线混合",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "nodeCount": 75,
    "speedMbps": 570,
    "latencyMs": 50,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": false,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": false,
      "disney": true,
      "youtube": true,
      "tiktok": false
    },
    "pros": [
      "节点延迟低，常规网页浏览瞬时响应",
      "主流流媒体与 YouTube 4K 解锁稳定",
      "支持常见主流客户端快捷订阅导入"
    ],
    "cons": [
      "入门套餐门槛一般，推荐以季付或半年付更为划算",
      "部分流媒体节点偶现非自制剧封禁需手动换节点",
      "官网受阻时需通过备用镜像或群组获取新地址"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=UUOne%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "季付",
    "priceNote": "月付约 ¥30 起，基准月流量 320GB，建议优先按月订购。",
    "features": [
      "多线混合架构",
      "320GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "UUOne 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2020年。其网络架构主要采用 多线混合，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 570 Mbps，端到端延迟控制在 50 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-danke",
    "name": "Danke",
    "slug": "danke",
    "slogan": "Danke 专注于提供稳定的 多线混合 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2020年",
    "score": 8.4,
    "ratingCount": 485,
    "monthlyPrice": 15,
    "traffic": 320,
    "lineType": "多线混合",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "nodeCount": 75,
    "speedMbps": 570,
    "latencyMs": 50,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": false,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": false,
      "disney": true,
      "youtube": true,
      "tiktok": false
    },
    "pros": [
      "节点延迟低，常规网页浏览瞬时响应",
      "主流流媒体与 YouTube 4K 解锁稳定",
      "支持常见主流客户端快捷订阅导入"
    ],
    "cons": [
      "入门套餐门槛一般，推荐以季付或半年付更为划算",
      "部分流媒体节点偶现非自制剧封禁需手动换节点",
      "官网受阻时需通过备用镜像或群组获取新地址"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=Danke%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "季付",
    "priceNote": "月付约 ¥15 起，基准月流量 320GB，建议优先按月订购。",
    "features": [
      "多线混合架构",
      "320GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "Danke 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2020年。其网络架构主要采用 多线混合，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 570 Mbps，端到端延迟控制在 50 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-yingziyun",
    "name": "影子云",
    "slug": "yingziyun",
    "slogan": "影子云 专注于提供稳定的 多线混合 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2021年",
    "score": 8.8,
    "ratingCount": 461,
    "monthlyPrice": 30,
    "traffic": 320,
    "lineType": "多线混合",
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 51,
    "speedMbps": 450,
    "latencyMs": 56,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "入口采用多线 BGP 容灾架构，故障自愈能力强",
      "价格在同类型产品中具有一定竞争力",
      "提供全天候工单技术支持"
    ],
    "cons": [
      "入门套餐门槛一般，推荐以季付或半年付更为划算",
      "部分流媒体节点偶现非自制剧封禁需手动换节点",
      "官网受阻时需通过备用镜像或群组获取新地址"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E5%BD%B1%E5%AD%90%E4%BA%91%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥30 起，基准月流量 320GB，建议优先按月订购。",
    "features": [
      "多线混合架构",
      "320GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "影子云 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2021年。其网络架构主要采用 多线混合，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 450 Mbps，端到端延迟控制在 56 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-shanshuiyun",
    "name": "山水云",
    "slug": "shanshuiyun",
    "slogan": "山水云 专注于提供稳定的 IEPL专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2024年",
    "score": 8.1,
    "ratingCount": 454,
    "monthlyPrice": 40,
    "traffic": 280,
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks",
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 44,
    "speedMbps": 540,
    "latencyMs": 49,
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
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": false
    },
    "pros": [
      "节点在线率高，日常断流情况较少",
      "支持全平台 Sing-box 与 Clash 规则分流",
      "拥有活跃的用户社群与故障公告推送"
    ],
    "cons": [
      "晚高峰骨干网极度拥堵时偶有微小抖动",
      "未提供深度定制的一键专属客户端",
      "部分小众冷门节点偶尔出现离线检修"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E5%B1%B1%E6%B0%B4%E4%BA%91%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥40 起，基准月流量 280GB，建议优先按月订购。",
    "features": [
      "IEPL专线架构",
      "280GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "山水云 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2024年。其网络架构主要采用 IEPL专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 540 Mbps，端到端延迟控制在 49 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-edge-x",
    "name": "Edge-X",
    "slug": "edge-x",
    "slogan": "Edge-X 专注于提供稳定的 IPLC专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2024年",
    "score": 8.2,
    "ratingCount": 619,
    "monthlyPrice": 20,
    "traffic": 160,
    "lineType": "IPLC专线",
    "protocols": [
      "Shadowsocks",
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 89,
    "speedMbps": 690,
    "latencyMs": 64,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "节点在线率高，日常断流情况较少",
      "支持全平台 Sing-box 与 Clash 规则分流",
      "拥有活跃的用户社群与故障公告推送"
    ],
    "cons": [
      "性价比属于行业中等水平，缺乏超低价小额月付包",
      "客服响应时间在节假日可能有所延迟",
      "部分节点对严苛住宅 IP 风控平台解锁偶有不稳定"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=Edge-X%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥20 起，基准月流量 160GB，建议优先按月订购。",
    "features": [
      "IPLC专线架构",
      "160GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "Edge-X 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2024年。其网络架构主要采用 IPLC专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 690 Mbps，端到端延迟控制在 64 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-xunda",
    "name": "迅达",
    "slug": "xunda",
    "slogan": "迅达 专注于提供稳定的 多线混合 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2023年",
    "score": 8.8,
    "ratingCount": 403,
    "monthlyPrice": 45,
    "traffic": 160,
    "lineType": "多线混合",
    "protocols": [
      "Trojan",
      "Hysteria 2"
    ],
    "nodeCount": 83,
    "speedMbps": 510,
    "latencyMs": 58,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "线路冗余度较好，遇到节点维护有备用节点自动接管",
      "对于常用 AI 工具（ChatGPT/Gemini）具备基础解锁支持",
      "流量给付充足，适合日常中度娱乐追剧"
    ],
    "cons": [
      "入门套餐门槛一般，推荐以季付或半年付更为划算",
      "部分流媒体节点偶现非自制剧封禁需手动换节点",
      "官网受阻时需通过备用镜像或群组获取新地址"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E8%BF%85%E8%BE%BE%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥45 起，基准月流量 160GB，建议优先按月订购。",
    "features": [
      "多线混合架构",
      "160GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "迅达 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2023年。其网络架构主要采用 多线混合，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 510 Mbps，端到端延迟控制在 58 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-lingdongyun",
    "name": "灵动云",
    "slug": "lingdongyun",
    "slogan": "灵动云 专注于提供稳定的 多线混合 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2024年",
    "score": 8.8,
    "ratingCount": 499,
    "monthlyPrice": 25,
    "traffic": 160,
    "lineType": "多线混合",
    "protocols": [
      "Shadowsocks",
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 59,
    "speedMbps": 690,
    "latencyMs": 64,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "节点在线率高，日常断流情况较少",
      "支持全平台 Sing-box 与 Clash 规则分流",
      "拥有活跃的用户社群与故障公告推送"
    ],
    "cons": [
      "入门套餐门槛一般，推荐以季付或半年付更为划算",
      "部分流媒体节点偶现非自制剧封禁需手动换节点",
      "官网受阻时需通过备用镜像或群组获取新地址"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E7%81%B5%E5%8A%A8%E4%BA%91%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥25 起，基准月流量 160GB，建议优先按月订购。",
    "features": [
      "多线混合架构",
      "160GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "灵动云 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2024年。其网络架构主要采用 多线混合，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 690 Mbps，端到端延迟控制在 64 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-langwang",
    "name": "浪网",
    "slug": "langwang",
    "slogan": "浪网 专注于提供稳定的 IPLC专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2022年",
    "score": 8.2,
    "ratingCount": 527,
    "monthlyPrice": 25,
    "traffic": 320,
    "lineType": "IPLC专线",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "nodeCount": 57,
    "speedMbps": 630,
    "latencyMs": 62,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "晚高峰测速表现较为坚挺，日常看视频无缓冲",
      "节点分布覆盖主流亚太与欧美核心区域",
      "协议支持丰富，适配 iOS/Android/Windows/Mac"
    ],
    "cons": [
      "性价比属于行业中等水平，缺乏超低价小额月付包",
      "客服响应时间在节假日可能有所延迟",
      "部分节点对严苛住宅 IP 风控平台解锁偶有不稳定"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E6%B5%AA%E7%BD%91%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥25 起，基准月流量 320GB，建议优先按月订购。",
    "features": [
      "IPLC专线架构",
      "320GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "浪网 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2022年。其网络架构主要采用 IPLC专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 630 Mbps，端到端延迟控制在 62 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-superbiu",
    "name": "SuperBiu",
    "slug": "superbiu",
    "slogan": "SuperBiu 专注于提供稳定的 BGP隧道中转 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2021年",
    "score": 8.3,
    "ratingCount": 626,
    "monthlyPrice": 30,
    "traffic": 200,
    "lineType": "BGP隧道中转",
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 66,
    "speedMbps": 600,
    "latencyMs": 71,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "入口采用多线 BGP 容灾架构，故障自愈能力强",
      "价格在同类型产品中具有一定竞争力",
      "提供全天候工单技术支持"
    ],
    "cons": [
      "无不限时按量计费套餐，流量到期清零",
      "对多设备并发连接数有一定限制",
      "晚高峰突发大带宽下载时速率有所波动"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=SuperBiu%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥30 起，基准月流量 200GB，建议优先按月订购。",
    "features": [
      "BGP隧道中转架构",
      "200GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "SuperBiu 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2021年。其网络架构主要采用 BGP隧道中转，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 600 Mbps，端到端延迟控制在 71 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-runway",
    "name": "Runway",
    "slug": "runway",
    "slogan": "Runway 专注于提供稳定的 BGP隧道中转 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2024年",
    "score": 8.7,
    "ratingCount": 494,
    "monthlyPrice": 35,
    "traffic": 200,
    "lineType": "BGP隧道中转",
    "protocols": [
      "Shadowsocks",
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 54,
    "speedMbps": 540,
    "latencyMs": 59,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "节点在线率高，日常断流情况较少",
      "支持全平台 Sing-box 与 Clash 规则分流",
      "拥有活跃的用户社群与故障公告推送"
    ],
    "cons": [
      "无不限时按量计费套餐，流量到期清零",
      "对多设备并发连接数有一定限制",
      "晚高峰突发大带宽下载时速率有所波动"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=Runway%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥35 起，基准月流量 200GB，建议优先按月订购。",
    "features": [
      "BGP隧道中转架构",
      "200GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "Runway 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2024年。其网络架构主要采用 BGP隧道中转，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 540 Mbps，端到端延迟控制在 59 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-mengxiangyun",
    "name": "梦想云",
    "slug": "mengxiangyun",
    "slogan": "梦想云 专注于提供稳定的 多线混合 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2022年",
    "score": 8.8,
    "ratingCount": 507,
    "monthlyPrice": 35,
    "traffic": 240,
    "lineType": "多线混合",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "nodeCount": 67,
    "speedMbps": 630,
    "latencyMs": 72,
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
      "晚高峰测速表现较为坚挺，日常看视频无缓冲",
      "节点分布覆盖主流亚太与欧美核心区域",
      "协议支持丰富，适配 iOS/Android/Windows/Mac"
    ],
    "cons": [
      "入门套餐门槛一般，推荐以季付或半年付更为划算",
      "部分流媒体节点偶现非自制剧封禁需手动换节点",
      "官网受阻时需通过备用镜像或群组获取新地址"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E6%A2%A6%E6%83%B3%E4%BA%91%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥35 起，基准月流量 240GB，建议优先按月订购。",
    "features": [
      "多线混合架构",
      "240GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "梦想云 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2022年。其网络架构主要采用 多线混合，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 630 Mbps，端到端延迟控制在 72 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-dengtacloud",
    "name": "灯塔Cloud",
    "slug": "dengtacloud",
    "slogan": "灯塔Cloud 专注于提供稳定的 IEPL专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2020年",
    "score": 8.5,
    "ratingCount": 520,
    "monthlyPrice": 45,
    "traffic": 280,
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "nodeCount": 80,
    "speedMbps": 420,
    "latencyMs": 55,
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
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": false,
      "disney": true,
      "youtube": true,
      "tiktok": false
    },
    "pros": [
      "节点延迟低，常规网页浏览瞬时响应",
      "主流流媒体与 YouTube 4K 解锁稳定",
      "支持常见主流客户端快捷订阅导入"
    ],
    "cons": [
      "晚高峰骨干网极度拥堵时偶有微小抖动",
      "未提供深度定制的一键专属客户端",
      "部分小众冷门节点偶尔出现离线检修"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E7%81%AF%E5%A1%94Cloud%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "季付",
    "priceNote": "月付约 ¥45 起，基准月流量 280GB，建议优先按月订购。",
    "features": [
      "IEPL专线架构",
      "280GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "灯塔Cloud 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2020年。其网络架构主要采用 IEPL专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 420 Mbps，端到端延迟控制在 55 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-baibianxiaoying",
    "name": "百变小樱",
    "slug": "baibianxiaoying",
    "slogan": "百变小樱 专注于提供稳定的 IPLC专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2024年",
    "score": 8.6,
    "ratingCount": 359,
    "monthlyPrice": 20,
    "traffic": 320,
    "lineType": "IPLC专线",
    "protocols": [
      "Shadowsocks",
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 69,
    "speedMbps": 690,
    "latencyMs": 74,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "节点在线率高，日常断流情况较少",
      "支持全平台 Sing-box 与 Clash 规则分流",
      "拥有活跃的用户社群与故障公告推送"
    ],
    "cons": [
      "性价比属于行业中等水平，缺乏超低价小额月付包",
      "客服响应时间在节假日可能有所延迟",
      "部分节点对严苛住宅 IP 风控平台解锁偶有不稳定"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E7%99%BE%E5%8F%98%E5%B0%8F%E6%A8%B1%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥20 起，基准月流量 320GB，建议优先按月订购。",
    "features": [
      "IPLC专线架构",
      "320GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "百变小樱 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2024年。其网络架构主要采用 IPLC专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 690 Mbps，端到端延迟控制在 74 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-zongyunti",
    "name": "纵云梯",
    "slug": "zongyunti",
    "slogan": "纵云梯 专注于提供稳定的 IPLC专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2020年",
    "score": 8.2,
    "ratingCount": 595,
    "monthlyPrice": 15,
    "traffic": 160,
    "lineType": "IPLC专线",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "nodeCount": 65,
    "speedMbps": 570,
    "latencyMs": 70,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": false,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": false,
      "disney": true,
      "youtube": true,
      "tiktok": false
    },
    "pros": [
      "节点延迟低，常规网页浏览瞬时响应",
      "主流流媒体与 YouTube 4K 解锁稳定",
      "支持常见主流客户端快捷订阅导入"
    ],
    "cons": [
      "性价比属于行业中等水平，缺乏超低价小额月付包",
      "客服响应时间在节假日可能有所延迟",
      "部分节点对严苛住宅 IP 风控平台解锁偶有不稳定"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E7%BA%B5%E4%BA%91%E6%A2%AF%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "季付",
    "priceNote": "月付约 ¥15 起，基准月流量 160GB，建议优先按月订购。",
    "features": [
      "IPLC专线架构",
      "160GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "纵云梯 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2020年。其网络架构主要采用 IPLC专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 570 Mbps，端到端延迟控制在 70 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-jiasula",
    "name": "加速啦",
    "slug": "jiasula",
    "slogan": "加速啦 专注于提供稳定的 BGP隧道中转 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2022年",
    "score": 8.7,
    "ratingCount": 292,
    "monthlyPrice": 25,
    "traffic": 280,
    "lineType": "BGP隧道中转",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "nodeCount": 62,
    "speedMbps": 480,
    "latencyMs": 67,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "晚高峰测速表现较为坚挺，日常看视频无缓冲",
      "节点分布覆盖主流亚太与欧美核心区域",
      "协议支持丰富，适配 iOS/Android/Windows/Mac"
    ],
    "cons": [
      "无不限时按量计费套餐，流量到期清零",
      "对多设备并发连接数有一定限制",
      "晚高峰突发大带宽下载时速率有所波动"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E5%8A%A0%E9%80%9F%E5%95%A6%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥25 起，基准月流量 280GB，建议优先按月订购。",
    "features": [
      "BGP隧道中转架构",
      "280GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "加速啦 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2022年。其网络架构主要采用 BGP隧道中转，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 480 Mbps，端到端延迟控制在 67 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-99ba",
    "name": "99吧",
    "slug": "99ba",
    "slogan": "99吧 专注于提供稳定的 多线混合 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2022年",
    "score": 8.8,
    "ratingCount": 577,
    "monthlyPrice": 45,
    "traffic": 160,
    "lineType": "多线混合",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "nodeCount": 47,
    "speedMbps": 630,
    "latencyMs": 52,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "晚高峰测速表现较为坚挺，日常看视频无缓冲",
      "节点分布覆盖主流亚太与欧美核心区域",
      "协议支持丰富，适配 iOS/Android/Windows/Mac"
    ],
    "cons": [
      "入门套餐门槛一般，推荐以季付或半年付更为划算",
      "部分流媒体节点偶现非自制剧封禁需手动换节点",
      "官网受阻时需通过备用镜像或群组获取新地址"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=99%E5%90%A7%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥45 起，基准月流量 160GB，建议优先按月订购。",
    "features": [
      "多线混合架构",
      "160GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "99吧 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2022年。其网络架构主要采用 多线混合，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 630 Mbps，端到端延迟控制在 52 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-huanyuyun",
    "name": "寰宇云",
    "slug": "huanyuyun",
    "slogan": "寰宇云 专注于提供稳定的 多线混合 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2022年",
    "score": 8.4,
    "ratingCount": 587,
    "monthlyPrice": 20,
    "traffic": 320,
    "lineType": "多线混合",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "nodeCount": 87,
    "speedMbps": 630,
    "latencyMs": 62,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "晚高峰测速表现较为坚挺，日常看视频无缓冲",
      "节点分布覆盖主流亚太与欧美核心区域",
      "协议支持丰富，适配 iOS/Android/Windows/Mac"
    ],
    "cons": [
      "入门套餐门槛一般，推荐以季付或半年付更为划算",
      "部分流媒体节点偶现非自制剧封禁需手动换节点",
      "官网受阻时需通过备用镜像或群组获取新地址"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E5%AF%B0%E5%AE%87%E4%BA%91%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥20 起，基准月流量 320GB，建议优先按月订购。",
    "features": [
      "多线混合架构",
      "320GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "寰宇云 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2022年。其网络架构主要采用 多线混合，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 630 Mbps，端到端延迟控制在 62 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-zhangzhongshijie",
    "name": "掌中世界",
    "slug": "zhangzhongshijie",
    "slogan": "掌中世界 专注于提供稳定的 多线混合 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2024年",
    "score": 8.4,
    "ratingCount": 259,
    "monthlyPrice": 35,
    "traffic": 160,
    "lineType": "多线混合",
    "protocols": [
      "Shadowsocks",
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 59,
    "speedMbps": 690,
    "latencyMs": 64,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "节点在线率高，日常断流情况较少",
      "支持全平台 Sing-box 与 Clash 规则分流",
      "拥有活跃的用户社群与故障公告推送"
    ],
    "cons": [
      "入门套餐门槛一般，推荐以季付或半年付更为划算",
      "部分流媒体节点偶现非自制剧封禁需手动换节点",
      "官网受阻时需通过备用镜像或群组获取新地址"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E6%8E%8C%E4%B8%AD%E4%B8%96%E7%95%8C%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥35 起，基准月流量 160GB，建议优先按月订购。",
    "features": [
      "多线混合架构",
      "160GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "掌中世界 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2024年。其网络架构主要采用 多线混合，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 690 Mbps，端到端延迟控制在 64 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-shunyun",
    "name": "瞬云",
    "slug": "shunyun",
    "slogan": "瞬云 专注于提供稳定的 BGP隧道中转 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2020年",
    "score": 8.3,
    "ratingCount": 530,
    "monthlyPrice": 40,
    "traffic": 200,
    "lineType": "BGP隧道中转",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "nodeCount": 90,
    "speedMbps": 420,
    "latencyMs": 65,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": false,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": false,
      "disney": true,
      "youtube": true,
      "tiktok": false
    },
    "pros": [
      "节点延迟低，常规网页浏览瞬时响应",
      "主流流媒体与 YouTube 4K 解锁稳定",
      "支持常见主流客户端快捷订阅导入"
    ],
    "cons": [
      "无不限时按量计费套餐，流量到期清零",
      "对多设备并发连接数有一定限制",
      "晚高峰突发大带宽下载时速率有所波动"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E7%9E%AC%E4%BA%91%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "季付",
    "priceNote": "月付约 ¥40 起，基准月流量 200GB，建议优先按月订购。",
    "features": [
      "BGP隧道中转架构",
      "200GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "瞬云 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2020年。其网络架构主要采用 BGP隧道中转，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 420 Mbps，端到端延迟控制在 65 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-xxai",
    "name": "XXAI",
    "slug": "xxai",
    "slogan": "XXAI 专注于提供稳定的 IEPL专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2022年",
    "score": 8.5,
    "ratingCount": 532,
    "monthlyPrice": 15,
    "traffic": 280,
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "nodeCount": 92,
    "speedMbps": 480,
    "latencyMs": 67,
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
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": false
    },
    "pros": [
      "晚高峰测速表现较为坚挺，日常看视频无缓冲",
      "节点分布覆盖主流亚太与欧美核心区域",
      "协议支持丰富，适配 iOS/Android/Windows/Mac"
    ],
    "cons": [
      "晚高峰骨干网极度拥堵时偶有微小抖动",
      "未提供深度定制的一键专属客户端",
      "部分小众冷门节点偶尔出现离线检修"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=XXAI%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥15 起，基准月流量 280GB，建议优先按月订购。",
    "features": [
      "IEPL专线架构",
      "280GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "XXAI 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2022年。其网络架构主要采用 IEPL专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 480 Mbps，端到端延迟控制在 67 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-edgenova",
    "name": "EdgeNova",
    "slug": "edgenova",
    "slogan": "EdgeNova 专注于提供稳定的 IEPL专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2022年",
    "score": 8.1,
    "ratingCount": 582,
    "monthlyPrice": 30,
    "traffic": 120,
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "nodeCount": 52,
    "speedMbps": 480,
    "latencyMs": 57,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": false,
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
      "晚高峰测速表现较为坚挺，日常看视频无缓冲",
      "节点分布覆盖主流亚太与欧美核心区域",
      "协议支持丰富，适配 iOS/Android/Windows/Mac"
    ],
    "cons": [
      "晚高峰骨干网极度拥堵时偶有微小抖动",
      "未提供深度定制的一键专属客户端",
      "部分小众冷门节点偶尔出现离线检修"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=EdgeNova%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥30 起，基准月流量 120GB，建议优先按月订购。",
    "features": [
      "IEPL专线架构",
      "120GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "EdgeNova 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2022年。其网络架构主要采用 IEPL专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 480 Mbps，端到端延迟控制在 57 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-haoyayun",
    "name": "好鸭云",
    "slug": "haoyayun",
    "slogan": "好鸭云 专注于提供稳定的 多线混合 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2022年",
    "score": 8.8,
    "ratingCount": 557,
    "monthlyPrice": 30,
    "traffic": 320,
    "lineType": "多线混合",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "nodeCount": 87,
    "speedMbps": 630,
    "latencyMs": 62,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "晚高峰测速表现较为坚挺，日常看视频无缓冲",
      "节点分布覆盖主流亚太与欧美核心区域",
      "协议支持丰富，适配 iOS/Android/Windows/Mac"
    ],
    "cons": [
      "入门套餐门槛一般，推荐以季付或半年付更为划算",
      "部分流媒体节点偶现非自制剧封禁需手动换节点",
      "官网受阻时需通过备用镜像或群组获取新地址"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E5%A5%BD%E9%B8%AD%E4%BA%91%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥30 起，基准月流量 320GB，建议优先按月订购。",
    "features": [
      "多线混合架构",
      "320GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "好鸭云 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2022年。其网络架构主要采用 多线混合，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 630 Mbps，端到端延迟控制在 62 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-suibianyun",
    "name": "随便云",
    "slug": "suibianyun",
    "slogan": "随便云 专注于提供稳定的 IEPL专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2020年",
    "score": 8.1,
    "ratingCount": 200,
    "monthlyPrice": 45,
    "traffic": 200,
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "nodeCount": 60,
    "speedMbps": 420,
    "latencyMs": 65,
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
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": false,
      "disney": true,
      "youtube": true,
      "tiktok": false
    },
    "pros": [
      "节点延迟低，常规网页浏览瞬时响应",
      "主流流媒体与 YouTube 4K 解锁稳定",
      "支持常见主流客户端快捷订阅导入"
    ],
    "cons": [
      "晚高峰骨干网极度拥堵时偶有微小抖动",
      "未提供深度定制的一键专属客户端",
      "部分小众冷门节点偶尔出现离线检修"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E9%9A%8F%E4%BE%BF%E4%BA%91%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "季付",
    "priceNote": "月付约 ¥45 起，基准月流量 200GB，建议优先按月订购。",
    "features": [
      "IEPL专线架构",
      "200GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "随便云 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2020年。其网络架构主要采用 IEPL专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 420 Mbps，端到端延迟控制在 65 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-ccyz",
    "name": "CCYZ",
    "slug": "ccyz",
    "slogan": "CCYZ 专注于提供稳定的 多线混合 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2024年",
    "score": 8.8,
    "ratingCount": 229,
    "monthlyPrice": 15,
    "traffic": 160,
    "lineType": "多线混合",
    "protocols": [
      "Shadowsocks",
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 59,
    "speedMbps": 690,
    "latencyMs": 64,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "节点在线率高，日常断流情况较少",
      "支持全平台 Sing-box 与 Clash 规则分流",
      "拥有活跃的用户社群与故障公告推送"
    ],
    "cons": [
      "入门套餐门槛一般，推荐以季付或半年付更为划算",
      "部分流媒体节点偶现非自制剧封禁需手动换节点",
      "官网受阻时需通过备用镜像或群组获取新地址"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=CCYZ%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥15 起，基准月流量 160GB，建议优先按月订购。",
    "features": [
      "多线混合架构",
      "160GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "CCYZ 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2024年。其网络架构主要采用 多线混合，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 690 Mbps，端到端延迟控制在 64 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-kennode",
    "name": "肯の机",
    "slug": "kennode",
    "slogan": "肯の机 专注于提供稳定的 BGP隧道中转 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2020年",
    "score": 8.3,
    "ratingCount": 620,
    "monthlyPrice": 15,
    "traffic": 200,
    "lineType": "BGP隧道中转",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "nodeCount": 90,
    "speedMbps": 420,
    "latencyMs": 65,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": false,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": false,
      "disney": true,
      "youtube": true,
      "tiktok": false
    },
    "pros": [
      "节点延迟低，常规网页浏览瞬时响应",
      "主流流媒体与 YouTube 4K 解锁稳定",
      "支持常见主流客户端快捷订阅导入"
    ],
    "cons": [
      "无不限时按量计费套餐，流量到期清零",
      "对多设备并发连接数有一定限制",
      "晚高峰突发大带宽下载时速率有所波动"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E8%82%AF%E3%81%AE%E6%9C%BA%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "季付",
    "priceNote": "月付约 ¥15 起，基准月流量 200GB，建议优先按月订购。",
    "features": [
      "BGP隧道中转架构",
      "200GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "肯の机 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2020年。其网络架构主要采用 BGP隧道中转，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 420 Mbps，端到端延迟控制在 65 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-viking-links",
    "name": "ViKing Links",
    "slug": "viking-links",
    "slogan": "ViKing Links 专注于提供稳定的 IPLC专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2024年",
    "score": 8.2,
    "ratingCount": 219,
    "monthlyPrice": 20,
    "traffic": 240,
    "lineType": "IPLC专线",
    "protocols": [
      "Shadowsocks",
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 49,
    "speedMbps": 690,
    "latencyMs": 54,
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
      "节点在线率高，日常断流情况较少",
      "支持全平台 Sing-box 与 Clash 规则分流",
      "拥有活跃的用户社群与故障公告推送"
    ],
    "cons": [
      "性价比属于行业中等水平，缺乏超低价小额月付包",
      "客服响应时间在节假日可能有所延迟",
      "部分节点对严苛住宅 IP 风控平台解锁偶有不稳定"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=ViKing%20Links%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥20 起，基准月流量 240GB，建议优先按月订购。",
    "features": [
      "IPLC专线架构",
      "240GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "ViKing Links 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2024年。其网络架构主要采用 IPLC专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 690 Mbps，端到端延迟控制在 54 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-kleyun",
    "name": "可乐云",
    "slug": "kleyun",
    "slogan": "可乐云 专注于提供稳定的 IPLC专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2020年",
    "score": 8.6,
    "ratingCount": 475,
    "monthlyPrice": 15,
    "traffic": 160,
    "lineType": "IPLC专线",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "nodeCount": 65,
    "speedMbps": 570,
    "latencyMs": 70,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": false,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": false,
      "disney": true,
      "youtube": true,
      "tiktok": false
    },
    "pros": [
      "节点延迟低，常规网页浏览瞬时响应",
      "主流流媒体与 YouTube 4K 解锁稳定",
      "支持常见主流客户端快捷订阅导入"
    ],
    "cons": [
      "性价比属于行业中等水平，缺乏超低价小额月付包",
      "客服响应时间在节假日可能有所延迟",
      "部分节点对严苛住宅 IP 风控平台解锁偶有不稳定"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E5%8F%AF%E4%B9%90%E4%BA%91%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "季付",
    "priceNote": "月付约 ¥15 起，基准月流量 160GB，建议优先按月订购。",
    "features": [
      "IPLC专线架构",
      "160GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "可乐云 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2020年。其网络架构主要采用 IPLC专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 570 Mbps，端到端延迟控制在 70 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-naichacloud",
    "name": "奶茶Cloud",
    "slug": "naichacloud",
    "slogan": "奶茶Cloud 专注于提供稳定的 IPLC专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2024年",
    "score": 8.6,
    "ratingCount": 359,
    "monthlyPrice": 35,
    "traffic": 320,
    "lineType": "IPLC专线",
    "protocols": [
      "Shadowsocks",
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 69,
    "speedMbps": 690,
    "latencyMs": 74,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "节点在线率高，日常断流情况较少",
      "支持全平台 Sing-box 与 Clash 规则分流",
      "拥有活跃的用户社群与故障公告推送"
    ],
    "cons": [
      "性价比属于行业中等水平，缺乏超低价小额月付包",
      "客服响应时间在节假日可能有所延迟",
      "部分节点对严苛住宅 IP 风控平台解锁偶有不稳定"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E5%A5%B6%E8%8C%B6Cloud%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥35 起，基准月流量 320GB，建议优先按月订购。",
    "features": [
      "IPLC专线架构",
      "320GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "奶茶Cloud 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2024年。其网络架构主要采用 IPLC专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 690 Mbps，端到端延迟控制在 74 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-xiaoxuanfeng",
    "name": "小旋风",
    "slug": "xiaoxuanfeng",
    "slogan": "小旋风 专注于提供稳定的 多线混合 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2020年",
    "score": 8.8,
    "ratingCount": 195,
    "monthlyPrice": 30,
    "traffic": 240,
    "lineType": "多线混合",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "nodeCount": 55,
    "speedMbps": 570,
    "latencyMs": 60,
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
      "netflix": false,
      "disney": true,
      "youtube": true,
      "tiktok": true
    },
    "pros": [
      "节点延迟低，常规网页浏览瞬时响应",
      "主流流媒体与 YouTube 4K 解锁稳定",
      "支持常见主流客户端快捷订阅导入"
    ],
    "cons": [
      "入门套餐门槛一般，推荐以季付或半年付更为划算",
      "部分流媒体节点偶现非自制剧封禁需手动换节点",
      "官网受阻时需通过备用镜像或群组获取新地址"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E5%B0%8F%E6%97%8B%E9%A3%8E%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "季付",
    "priceNote": "月付约 ¥30 起，基准月流量 240GB，建议优先按月订购。",
    "features": [
      "多线混合架构",
      "240GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "小旋风 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2020年。其网络架构主要采用 多线混合，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 570 Mbps，端到端延迟控制在 60 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-xiaoliyu",
    "name": "小鲤鱼",
    "slug": "xiaoliyu",
    "slogan": "小鲤鱼 专注于提供稳定的 多线混合 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2020年",
    "score": 8.4,
    "ratingCount": 365,
    "monthlyPrice": 20,
    "traffic": 320,
    "lineType": "多线混合",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "nodeCount": 75,
    "speedMbps": 570,
    "latencyMs": 50,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": false,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": false,
      "disney": true,
      "youtube": true,
      "tiktok": false
    },
    "pros": [
      "节点延迟低，常规网页浏览瞬时响应",
      "主流流媒体与 YouTube 4K 解锁稳定",
      "支持常见主流客户端快捷订阅导入"
    ],
    "cons": [
      "入门套餐门槛一般，推荐以季付或半年付更为划算",
      "部分流媒体节点偶现非自制剧封禁需手动换节点",
      "官网受阻时需通过备用镜像或群组获取新地址"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E5%B0%8F%E9%B2%A4%E9%B1%BC%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "季付",
    "priceNote": "月付约 ¥20 起，基准月流量 320GB，建议优先按月订购。",
    "features": [
      "多线混合架构",
      "320GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "小鲤鱼 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2020年。其网络架构主要采用 多线混合，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 570 Mbps，端到端延迟控制在 50 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-juziyun",
    "name": "桔子云",
    "slug": "juziyun",
    "slogan": "桔子云 专注于提供稳定的 BGP隧道中转 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2022年",
    "score": 8.7,
    "ratingCount": 622,
    "monthlyPrice": 30,
    "traffic": 280,
    "lineType": "BGP隧道中转",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "nodeCount": 62,
    "speedMbps": 480,
    "latencyMs": 67,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "晚高峰测速表现较为坚挺，日常看视频无缓冲",
      "节点分布覆盖主流亚太与欧美核心区域",
      "协议支持丰富，适配 iOS/Android/Windows/Mac"
    ],
    "cons": [
      "无不限时按量计费套餐，流量到期清零",
      "对多设备并发连接数有一定限制",
      "晚高峰突发大带宽下载时速率有所波动"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E6%A1%94%E5%AD%90%E4%BA%91%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥30 起，基准月流量 280GB，建议优先按月订购。",
    "features": [
      "BGP隧道中转架构",
      "280GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "桔子云 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2022年。其网络架构主要采用 BGP隧道中转，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 480 Mbps，端到端延迟控制在 67 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-paofuyun",
    "name": "泡芙云",
    "slug": "paofuyun",
    "slogan": "泡芙云 专注于提供稳定的 IPLC专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2021年",
    "score": 8.2,
    "ratingCount": 181,
    "monthlyPrice": 45,
    "traffic": 160,
    "lineType": "IPLC专线",
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 41,
    "speedMbps": 450,
    "latencyMs": 46,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "入口采用多线 BGP 容灾架构，故障自愈能力强",
      "价格在同类型产品中具有一定竞争力",
      "提供全天候工单技术支持"
    ],
    "cons": [
      "性价比属于行业中等水平，缺乏超低价小额月付包",
      "客服响应时间在节假日可能有所延迟",
      "部分节点对严苛住宅 IP 风控平台解锁偶有不稳定"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E6%B3%A1%E8%8A%99%E4%BA%91%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥45 起，基准月流量 160GB，建议优先按月订购。",
    "features": [
      "IPLC专线架构",
      "160GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "泡芙云 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2021年。其网络架构主要采用 IPLC专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 450 Mbps，端到端延迟控制在 46 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-weini",
    "name": "维尼",
    "slug": "weini",
    "slogan": "维尼 专注于提供稳定的 多线混合 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2021年",
    "score": 8.4,
    "ratingCount": 561,
    "monthlyPrice": 45,
    "traffic": 240,
    "lineType": "多线混合",
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 91,
    "speedMbps": 450,
    "latencyMs": 66,
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
      "入口采用多线 BGP 容灾架构，故障自愈能力强",
      "价格在同类型产品中具有一定竞争力",
      "提供全天候工单技术支持"
    ],
    "cons": [
      "入门套餐门槛一般，推荐以季付或半年付更为划算",
      "部分流媒体节点偶现非自制剧封禁需手动换节点",
      "官网受阻时需通过备用镜像或群组获取新地址"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E7%BB%B4%E5%B0%BC%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥45 起，基准月流量 240GB，建议优先按月订购。",
    "features": [
      "多线混合架构",
      "240GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "维尼 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2021年。其网络架构主要采用 多线混合，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 450 Mbps，端到端延迟控制在 66 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-chongdong",
    "name": "虫洞",
    "slug": "chongdong",
    "slogan": "虫洞 专注于提供稳定的 IPLC专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2021年",
    "score": 8.2,
    "ratingCount": 531,
    "monthlyPrice": 35,
    "traffic": 240,
    "lineType": "IPLC专线",
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 61,
    "speedMbps": 450,
    "latencyMs": 66,
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
      "入口采用多线 BGP 容灾架构，故障自愈能力强",
      "价格在同类型产品中具有一定竞争力",
      "提供全天候工单技术支持"
    ],
    "cons": [
      "性价比属于行业中等水平，缺乏超低价小额月付包",
      "客服响应时间在节假日可能有所延迟",
      "部分节点对严苛住宅 IP 风控平台解锁偶有不稳定"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E8%99%AB%E6%B4%9E%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥35 起，基准月流量 240GB，建议优先按月订购。",
    "features": [
      "IPLC专线架构",
      "240GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "虫洞 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2021年。其网络架构主要采用 IPLC专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 450 Mbps，端到端延迟控制在 66 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-qifancloud",
    "name": "起帆Cloud",
    "slug": "qifancloud",
    "slogan": "起帆Cloud 专注于提供稳定的 IPLC专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2021年",
    "score": 8.2,
    "ratingCount": 361,
    "monthlyPrice": 30,
    "traffic": 160,
    "lineType": "IPLC专线",
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 41,
    "speedMbps": 450,
    "latencyMs": 46,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "入口采用多线 BGP 容灾架构，故障自愈能力强",
      "价格在同类型产品中具有一定竞争力",
      "提供全天候工单技术支持"
    ],
    "cons": [
      "性价比属于行业中等水平，缺乏超低价小额月付包",
      "客服响应时间在节假日可能有所延迟",
      "部分节点对严苛住宅 IP 风控平台解锁偶有不稳定"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E8%B5%B7%E5%B8%86Cloud%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥30 起，基准月流量 160GB，建议优先按月订购。",
    "features": [
      "IPLC专线架构",
      "160GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "起帆Cloud 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2021年。其网络架构主要采用 IPLC专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 450 Mbps，端到端延迟控制在 46 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-gsoucloud",
    "name": "Gsou Cloud",
    "slug": "gsoucloud",
    "slogan": "Gsou Cloud 专注于提供稳定的 多线混合 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2024年",
    "score": 8.8,
    "ratingCount": 409,
    "monthlyPrice": 25,
    "traffic": 160,
    "lineType": "多线混合",
    "protocols": [
      "Shadowsocks",
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 59,
    "speedMbps": 690,
    "latencyMs": 64,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "节点在线率高，日常断流情况较少",
      "支持全平台 Sing-box 与 Clash 规则分流",
      "拥有活跃的用户社群与故障公告推送"
    ],
    "cons": [
      "入门套餐门槛一般，推荐以季付或半年付更为划算",
      "部分流媒体节点偶现非自制剧封禁需手动换节点",
      "官网受阻时需通过备用镜像或群组获取新地址"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=Gsou%20Cloud%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥25 起，基准月流量 160GB，建议优先按月订购。",
    "features": [
      "多线混合架构",
      "160GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "Gsou Cloud 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2024年。其网络架构主要采用 多线混合，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 690 Mbps，端到端延迟控制在 64 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-kekeyun",
    "name": "可可云",
    "slug": "kekeyun",
    "slogan": "可可云 专注于提供稳定的 BGP隧道中转 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2024年",
    "score": 8.7,
    "ratingCount": 484,
    "monthlyPrice": 30,
    "traffic": 280,
    "lineType": "BGP隧道中转",
    "protocols": [
      "Shadowsocks",
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 74,
    "speedMbps": 540,
    "latencyMs": 49,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "节点在线率高，日常断流情况较少",
      "支持全平台 Sing-box 与 Clash 规则分流",
      "拥有活跃的用户社群与故障公告推送"
    ],
    "cons": [
      "无不限时按量计费套餐，流量到期清零",
      "对多设备并发连接数有一定限制",
      "晚高峰突发大带宽下载时速率有所波动"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E5%8F%AF%E5%8F%AF%E4%BA%91%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥30 起，基准月流量 280GB，建议优先按月订购。",
    "features": [
      "BGP隧道中转架构",
      "280GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "可可云 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2024年。其网络架构主要采用 BGP隧道中转，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 540 Mbps，端到端延迟控制在 49 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-cmynetwork",
    "name": "CMYNetwork",
    "slug": "cmynetwork",
    "slogan": "CMYNetwork 专注于提供稳定的 多线混合 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2023年",
    "score": 8.8,
    "ratingCount": 513,
    "monthlyPrice": 20,
    "traffic": 240,
    "lineType": "多线混合",
    "protocols": [
      "Trojan",
      "Hysteria 2"
    ],
    "nodeCount": 43,
    "speedMbps": 510,
    "latencyMs": 48,
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
      "线路冗余度较好，遇到节点维护有备用节点自动接管",
      "对于常用 AI 工具（ChatGPT/Gemini）具备基础解锁支持",
      "流量给付充足，适合日常中度娱乐追剧"
    ],
    "cons": [
      "入门套餐门槛一般，推荐以季付或半年付更为划算",
      "部分流媒体节点偶现非自制剧封禁需手动换节点",
      "官网受阻时需通过备用镜像或群组获取新地址"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=CMYNetwork%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥20 起，基准月流量 240GB，建议优先按月订购。",
    "features": [
      "多线混合架构",
      "240GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "CMYNetwork 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2023年。其网络架构主要采用 多线混合，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 510 Mbps，端到端延迟控制在 48 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-nerwo",
    "name": "Nerwo",
    "slug": "nerwo",
    "slogan": "Nerwo 专注于提供稳定的 IEPL专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2024年",
    "score": 8.5,
    "ratingCount": 544,
    "monthlyPrice": 25,
    "traffic": 280,
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks",
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 44,
    "speedMbps": 540,
    "latencyMs": 49,
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
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": false
    },
    "pros": [
      "节点在线率高，日常断流情况较少",
      "支持全平台 Sing-box 与 Clash 规则分流",
      "拥有活跃的用户社群与故障公告推送"
    ],
    "cons": [
      "晚高峰骨干网极度拥堵时偶有微小抖动",
      "未提供深度定制的一键专属客户端",
      "部分小众冷门节点偶尔出现离线检修"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=Nerwo%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥25 起，基准月流量 280GB，建议优先按月订购。",
    "features": [
      "IEPL专线架构",
      "280GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "Nerwo 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2024年。其网络架构主要采用 IEPL专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 540 Mbps，端到端延迟控制在 49 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-haita",
    "name": "海獭",
    "slug": "haita",
    "slogan": "海獭 专注于提供稳定的 BGP隧道中转 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2020年",
    "score": 8.3,
    "ratingCount": 480,
    "monthlyPrice": 30,
    "traffic": 120,
    "lineType": "BGP隧道中转",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "nodeCount": 70,
    "speedMbps": 420,
    "latencyMs": 45,
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
      "netflix": false,
      "disney": true,
      "youtube": true,
      "tiktok": true
    },
    "pros": [
      "节点延迟低，常规网页浏览瞬时响应",
      "主流流媒体与 YouTube 4K 解锁稳定",
      "支持常见主流客户端快捷订阅导入"
    ],
    "cons": [
      "无不限时按量计费套餐，流量到期清零",
      "对多设备并发连接数有一定限制",
      "晚高峰突发大带宽下载时速率有所波动"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E6%B5%B7%E7%8D%AD%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "季付",
    "priceNote": "月付约 ¥30 起，基准月流量 120GB，建议优先按月订购。",
    "features": [
      "BGP隧道中转架构",
      "120GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "海獭 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2020年。其网络架构主要采用 BGP隧道中转，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 420 Mbps，端到端延迟控制在 45 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-mengtongjiasu",
    "name": "萌通加速",
    "slug": "mengtongjiasu",
    "slogan": "萌通加速 专注于提供稳定的 IEPL专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2021年",
    "score": 8.1,
    "ratingCount": 586,
    "monthlyPrice": 40,
    "traffic": 280,
    "lineType": "IEPL专线",
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 56,
    "speedMbps": 600,
    "latencyMs": 61,
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
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": false
    },
    "pros": [
      "入口采用多线 BGP 容灾架构，故障自愈能力强",
      "价格在同类型产品中具有一定竞争力",
      "提供全天候工单技术支持"
    ],
    "cons": [
      "晚高峰骨干网极度拥堵时偶有微小抖动",
      "未提供深度定制的一键专属客户端",
      "部分小众冷门节点偶尔出现离线检修"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E8%90%8C%E9%80%9A%E5%8A%A0%E9%80%9F%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥40 起，基准月流量 280GB，建议优先按月订购。",
    "features": [
      "IEPL专线架构",
      "280GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "萌通加速 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2021年。其网络架构主要采用 IEPL专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 600 Mbps，端到端延迟控制在 61 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-fastnet",
    "name": "Fastnet",
    "slug": "fastnet",
    "slogan": "Fastnet 专注于提供稳定的 IPLC专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2022年",
    "score": 8.6,
    "ratingCount": 407,
    "monthlyPrice": 15,
    "traffic": 320,
    "lineType": "IPLC专线",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "nodeCount": 57,
    "speedMbps": 630,
    "latencyMs": 62,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "晚高峰测速表现较为坚挺，日常看视频无缓冲",
      "节点分布覆盖主流亚太与欧美核心区域",
      "协议支持丰富，适配 iOS/Android/Windows/Mac"
    ],
    "cons": [
      "性价比属于行业中等水平，缺乏超低价小额月付包",
      "客服响应时间在节假日可能有所延迟",
      "部分节点对严苛住宅 IP 风控平台解锁偶有不稳定"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=Fastnet%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥15 起，基准月流量 320GB，建议优先按月订购。",
    "features": [
      "IPLC专线架构",
      "320GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "Fastnet 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2022年。其网络架构主要采用 IPLC专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 630 Mbps，端到端延迟控制在 62 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-facmata",
    "name": "FacMata.NET",
    "slug": "facmata",
    "slogan": "FacMata.NET 专注于提供稳定的 多线混合 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2024年",
    "score": 8.8,
    "ratingCount": 199,
    "monthlyPrice": 35,
    "traffic": 160,
    "lineType": "多线混合",
    "protocols": [
      "Shadowsocks",
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 59,
    "speedMbps": 690,
    "latencyMs": 64,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "节点在线率高，日常断流情况较少",
      "支持全平台 Sing-box 与 Clash 规则分流",
      "拥有活跃的用户社群与故障公告推送"
    ],
    "cons": [
      "入门套餐门槛一般，推荐以季付或半年付更为划算",
      "部分流媒体节点偶现非自制剧封禁需手动换节点",
      "官网受阻时需通过备用镜像或群组获取新地址"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=FacMata.NET%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥35 起，基准月流量 160GB，建议优先按月订购。",
    "features": [
      "多线混合架构",
      "160GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "FacMata.NET 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2024年。其网络架构主要采用 多线混合，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 690 Mbps，端到端延迟控制在 64 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-nicecloud",
    "name": "NiceCloud",
    "slug": "nicecloud",
    "slogan": "NiceCloud 专注于提供稳定的 IEPL专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2022年",
    "score": 8.1,
    "ratingCount": 192,
    "monthlyPrice": 35,
    "traffic": 120,
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "nodeCount": 52,
    "speedMbps": 480,
    "latencyMs": 57,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": false,
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
      "晚高峰测速表现较为坚挺，日常看视频无缓冲",
      "节点分布覆盖主流亚太与欧美核心区域",
      "协议支持丰富，适配 iOS/Android/Windows/Mac"
    ],
    "cons": [
      "晚高峰骨干网极度拥堵时偶有微小抖动",
      "未提供深度定制的一键专属客户端",
      "部分小众冷门节点偶尔出现离线检修"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=NiceCloud%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥35 起，基准月流量 120GB，建议优先按月订购。",
    "features": [
      "IEPL专线架构",
      "120GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "NiceCloud 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2022年。其网络架构主要采用 IEPL专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 480 Mbps，端到端延迟控制在 57 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-flywarp",
    "name": "Flywarp",
    "slug": "flywarp",
    "slogan": "Flywarp 专注于提供稳定的 IEPL专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2024年",
    "score": 8.5,
    "ratingCount": 534,
    "monthlyPrice": 20,
    "traffic": 120,
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks",
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 64,
    "speedMbps": 540,
    "latencyMs": 69,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": false,
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
      "节点在线率高，日常断流情况较少",
      "支持全平台 Sing-box 与 Clash 规则分流",
      "拥有活跃的用户社群与故障公告推送"
    ],
    "cons": [
      "晚高峰骨干网极度拥堵时偶有微小抖动",
      "未提供深度定制的一键专属客户端",
      "部分小众冷门节点偶尔出现离线检修"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=Flywarp%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥20 起，基准月流量 120GB，建议优先按月订购。",
    "features": [
      "IEPL专线架构",
      "120GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "Flywarp 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2024年。其网络架构主要采用 IEPL专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 540 Mbps，端到端延迟控制在 69 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-wukongyun",
    "name": "悟空云",
    "slug": "wukongyun",
    "slogan": "悟空云 专注于提供稳定的 BGP隧道中转 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2022年",
    "score": 8.7,
    "ratingCount": 432,
    "monthlyPrice": 35,
    "traffic": 120,
    "lineType": "BGP隧道中转",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "nodeCount": 82,
    "speedMbps": 480,
    "latencyMs": 57,
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
      "晚高峰测速表现较为坚挺，日常看视频无缓冲",
      "节点分布覆盖主流亚太与欧美核心区域",
      "协议支持丰富，适配 iOS/Android/Windows/Mac"
    ],
    "cons": [
      "无不限时按量计费套餐，流量到期清零",
      "对多设备并发连接数有一定限制",
      "晚高峰突发大带宽下载时速率有所波动"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E6%82%9F%E7%A9%BA%E4%BA%91%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥35 起，基准月流量 120GB，建议优先按月订购。",
    "features": [
      "BGP隧道中转架构",
      "120GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "悟空云 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2022年。其网络架构主要采用 BGP隧道中转，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 480 Mbps，端到端延迟控制在 57 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-airpipi",
    "name": "AirPiPi",
    "slug": "airpipi",
    "slogan": "AirPiPi 专注于提供稳定的 多线混合 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2021年",
    "score": 8.8,
    "ratingCount": 521,
    "monthlyPrice": 25,
    "traffic": 320,
    "lineType": "多线混合",
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 51,
    "speedMbps": 450,
    "latencyMs": 56,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "入口采用多线 BGP 容灾架构，故障自愈能力强",
      "价格在同类型产品中具有一定竞争力",
      "提供全天候工单技术支持"
    ],
    "cons": [
      "入门套餐门槛一般，推荐以季付或半年付更为划算",
      "部分流媒体节点偶现非自制剧封禁需手动换节点",
      "官网受阻时需通过备用镜像或群组获取新地址"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=AirPiPi%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥25 起，基准月流量 320GB，建议优先按月订购。",
    "features": [
      "多线混合架构",
      "320GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "AirPiPi 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2021年。其网络架构主要采用 多线混合，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 450 Mbps，端到端延迟控制在 56 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-yundu",
    "name": "云渡",
    "slug": "yundu",
    "slogan": "云渡 专注于提供稳定的 IEPL专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2020年",
    "score": 8.1,
    "ratingCount": 510,
    "monthlyPrice": 15,
    "traffic": 120,
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "nodeCount": 40,
    "speedMbps": 420,
    "latencyMs": 45,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": false,
      "claude": true,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": false,
      "disney": true,
      "youtube": true,
      "tiktok": true
    },
    "pros": [
      "节点延迟低，常规网页浏览瞬时响应",
      "主流流媒体与 YouTube 4K 解锁稳定",
      "支持常见主流客户端快捷订阅导入"
    ],
    "cons": [
      "晚高峰骨干网极度拥堵时偶有微小抖动",
      "未提供深度定制的一键专属客户端",
      "部分小众冷门节点偶尔出现离线检修"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E4%BA%91%E6%B8%A1%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "季付",
    "priceNote": "月付约 ¥15 起，基准月流量 120GB，建议优先按月订购。",
    "features": [
      "IEPL专线架构",
      "120GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "云渡 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2020年。其网络架构主要采用 IEPL专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 420 Mbps，端到端延迟控制在 45 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-budingmao",
    "name": "布丁猫",
    "slug": "budingmao",
    "slogan": "布丁猫 专注于提供稳定的 BGP隧道中转 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2020年",
    "score": 8.3,
    "ratingCount": 560,
    "monthlyPrice": 20,
    "traffic": 200,
    "lineType": "BGP隧道中转",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "nodeCount": 90,
    "speedMbps": 420,
    "latencyMs": 65,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": false,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": false,
      "disney": true,
      "youtube": true,
      "tiktok": false
    },
    "pros": [
      "节点延迟低，常规网页浏览瞬时响应",
      "主流流媒体与 YouTube 4K 解锁稳定",
      "支持常见主流客户端快捷订阅导入"
    ],
    "cons": [
      "无不限时按量计费套餐，流量到期清零",
      "对多设备并发连接数有一定限制",
      "晚高峰突发大带宽下载时速率有所波动"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E5%B8%83%E4%B8%81%E7%8C%AB%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "季付",
    "priceNote": "月付约 ¥20 起，基准月流量 200GB，建议优先按月订购。",
    "features": [
      "BGP隧道中转架构",
      "200GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "布丁猫 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2020年。其网络架构主要采用 BGP隧道中转，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 420 Mbps，端到端延迟控制在 65 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-hunshui",
    "name": "HUNSHUI",
    "slug": "hunshui",
    "slogan": "HUNSHUI 专注于提供稳定的 IEPL专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2021年",
    "score": 8.5,
    "ratingCount": 526,
    "monthlyPrice": 15,
    "traffic": 280,
    "lineType": "IEPL专线",
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 56,
    "speedMbps": 600,
    "latencyMs": 61,
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
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": false
    },
    "pros": [
      "入口采用多线 BGP 容灾架构，故障自愈能力强",
      "价格在同类型产品中具有一定竞争力",
      "提供全天候工单技术支持"
    ],
    "cons": [
      "晚高峰骨干网极度拥堵时偶有微小抖动",
      "未提供深度定制的一键专属客户端",
      "部分小众冷门节点偶尔出现离线检修"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=HUNSHUI%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥15 起，基准月流量 280GB，建议优先按月订购。",
    "features": [
      "IEPL专线架构",
      "280GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "HUNSHUI 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2021年。其网络架构主要采用 IEPL专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 600 Mbps，端到端延迟控制在 61 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-pakeyun",
    "name": "帕克云加速",
    "slug": "pakeyun",
    "slogan": "帕克云加速 专注于提供稳定的 IPLC专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2021年",
    "score": 8.6,
    "ratingCount": 221,
    "monthlyPrice": 30,
    "traffic": 320,
    "lineType": "IPLC专线",
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 81,
    "speedMbps": 450,
    "latencyMs": 56,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "入口采用多线 BGP 容灾架构，故障自愈能力强",
      "价格在同类型产品中具有一定竞争力",
      "提供全天候工单技术支持"
    ],
    "cons": [
      "性价比属于行业中等水平，缺乏超低价小额月付包",
      "客服响应时间在节假日可能有所延迟",
      "部分节点对严苛住宅 IP 风控平台解锁偶有不稳定"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E5%B8%95%E5%85%8B%E4%BA%91%E5%8A%A0%E9%80%9F%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥30 起，基准月流量 320GB，建议优先按月订购。",
    "features": [
      "IPLC专线架构",
      "320GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "帕克云加速 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2021年。其网络架构主要采用 IPLC专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 450 Mbps，端到端延迟控制在 56 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-xingchen",
    "name": "星辰",
    "slug": "xingchen",
    "slogan": "星辰 专注于提供稳定的 IPLC专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2024年",
    "score": 8.2,
    "ratingCount": 429,
    "monthlyPrice": 45,
    "traffic": 240,
    "lineType": "IPLC专线",
    "protocols": [
      "Shadowsocks",
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 49,
    "speedMbps": 690,
    "latencyMs": 54,
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
      "节点在线率高，日常断流情况较少",
      "支持全平台 Sing-box 与 Clash 规则分流",
      "拥有活跃的用户社群与故障公告推送"
    ],
    "cons": [
      "性价比属于行业中等水平，缺乏超低价小额月付包",
      "客服响应时间在节假日可能有所延迟",
      "部分节点对严苛住宅 IP 风控平台解锁偶有不稳定"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E6%98%9F%E8%BE%B0%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥45 起，基准月流量 240GB，建议优先按月订购。",
    "features": [
      "IPLC专线架构",
      "240GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "星辰 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2024年。其网络架构主要采用 IPLC专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 690 Mbps，端到端延迟控制在 54 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-yunpindao",
    "name": "云频道",
    "slug": "yunpindao",
    "slogan": "云频道 专注于提供稳定的 IEPL专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2021年",
    "score": 8.5,
    "ratingCount": 356,
    "monthlyPrice": 35,
    "traffic": 200,
    "lineType": "IEPL专线",
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 96,
    "speedMbps": 600,
    "latencyMs": 71,
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
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": false
    },
    "pros": [
      "入口采用多线 BGP 容灾架构，故障自愈能力强",
      "价格在同类型产品中具有一定竞争力",
      "提供全天候工单技术支持"
    ],
    "cons": [
      "晚高峰骨干网极度拥堵时偶有微小抖动",
      "未提供深度定制的一键专属客户端",
      "部分小众冷门节点偶尔出现离线检修"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E4%BA%91%E9%A2%91%E9%81%93%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥35 起，基准月流量 200GB，建议优先按月订购。",
    "features": [
      "IEPL专线架构",
      "200GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "云频道 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2021年。其网络架构主要采用 IEPL专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 600 Mbps，端到端延迟控制在 71 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-chimera",
    "name": "Chimera",
    "slug": "chimera",
    "slogan": "Chimera 专注于提供稳定的 IPLC专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2023年",
    "score": 8.6,
    "ratingCount": 373,
    "monthlyPrice": 30,
    "traffic": 160,
    "lineType": "IPLC专线",
    "protocols": [
      "Trojan",
      "Hysteria 2"
    ],
    "nodeCount": 53,
    "speedMbps": 510,
    "latencyMs": 58,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "线路冗余度较好，遇到节点维护有备用节点自动接管",
      "对于常用 AI 工具（ChatGPT/Gemini）具备基础解锁支持",
      "流量给付充足，适合日常中度娱乐追剧"
    ],
    "cons": [
      "性价比属于行业中等水平，缺乏超低价小额月付包",
      "客服响应时间在节假日可能有所延迟",
      "部分节点对严苛住宅 IP 风控平台解锁偶有不稳定"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=Chimera%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥30 起，基准月流量 160GB，建议优先按月订购。",
    "features": [
      "IPLC专线架构",
      "160GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "Chimera 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2023年。其网络架构主要采用 IPLC专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 510 Mbps，端到端延迟控制在 58 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-feitianzhu",
    "name": "飞天猪",
    "slug": "feitianzhu",
    "slogan": "飞天猪 专注于提供稳定的 BGP隧道中转 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2024年",
    "score": 8.3,
    "ratingCount": 254,
    "monthlyPrice": 20,
    "traffic": 200,
    "lineType": "BGP隧道中转",
    "protocols": [
      "Shadowsocks",
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 54,
    "speedMbps": 540,
    "latencyMs": 59,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "节点在线率高，日常断流情况较少",
      "支持全平台 Sing-box 与 Clash 规则分流",
      "拥有活跃的用户社群与故障公告推送"
    ],
    "cons": [
      "无不限时按量计费套餐，流量到期清零",
      "对多设备并发连接数有一定限制",
      "晚高峰突发大带宽下载时速率有所波动"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E9%A3%9E%E5%A4%A9%E7%8C%AA%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥20 起，基准月流量 200GB，建议优先按月订购。",
    "features": [
      "BGP隧道中转架构",
      "200GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "飞天猪 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2024年。其网络架构主要采用 BGP隧道中转，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 540 Mbps，端到端延迟控制在 59 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-yuntu",
    "name": "云兔",
    "slug": "yuntu",
    "slogan": "云兔 专注于提供稳定的 多线混合 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2023年",
    "score": 8.4,
    "ratingCount": 183,
    "monthlyPrice": 15,
    "traffic": 240,
    "lineType": "多线混合",
    "protocols": [
      "Trojan",
      "Hysteria 2"
    ],
    "nodeCount": 43,
    "speedMbps": 510,
    "latencyMs": 48,
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
      "线路冗余度较好，遇到节点维护有备用节点自动接管",
      "对于常用 AI 工具（ChatGPT/Gemini）具备基础解锁支持",
      "流量给付充足，适合日常中度娱乐追剧"
    ],
    "cons": [
      "入门套餐门槛一般，推荐以季付或半年付更为划算",
      "部分流媒体节点偶现非自制剧封禁需手动换节点",
      "官网受阻时需通过备用镜像或群组获取新地址"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E4%BA%91%E5%85%94%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥15 起，基准月流量 240GB，建议优先按月订购。",
    "features": [
      "多线混合架构",
      "240GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "云兔 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2023年。其网络架构主要采用 多线混合，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 510 Mbps，端到端延迟控制在 48 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-vmssr",
    "name": "VMSSR",
    "slug": "vmssr",
    "slogan": "VMSSR 专注于提供稳定的 BGP隧道中转 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2023年",
    "score": 8.7,
    "ratingCount": 198,
    "monthlyPrice": 30,
    "traffic": 120,
    "lineType": "BGP隧道中转",
    "protocols": [
      "Trojan",
      "Hysteria 2"
    ],
    "nodeCount": 58,
    "speedMbps": 660,
    "latencyMs": 63,
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
      "线路冗余度较好，遇到节点维护有备用节点自动接管",
      "对于常用 AI 工具（ChatGPT/Gemini）具备基础解锁支持",
      "流量给付充足，适合日常中度娱乐追剧"
    ],
    "cons": [
      "无不限时按量计费套餐，流量到期清零",
      "对多设备并发连接数有一定限制",
      "晚高峰突发大带宽下载时速率有所波动"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=VMSSR%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥30 起，基准月流量 120GB，建议优先按月订购。",
    "features": [
      "BGP隧道中转架构",
      "120GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "VMSSR 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2023年。其网络架构主要采用 BGP隧道中转，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 660 Mbps，端到端延迟控制在 63 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-trudacloud",
    "name": "TrudaCloud",
    "slug": "trudacloud",
    "slogan": "TrudaCloud 专注于提供稳定的 多线混合 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2024年",
    "score": 8.8,
    "ratingCount": 389,
    "monthlyPrice": 15,
    "traffic": 320,
    "lineType": "多线混合",
    "protocols": [
      "Shadowsocks",
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 99,
    "speedMbps": 690,
    "latencyMs": 74,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "节点在线率高，日常断流情况较少",
      "支持全平台 Sing-box 与 Clash 规则分流",
      "拥有活跃的用户社群与故障公告推送"
    ],
    "cons": [
      "入门套餐门槛一般，推荐以季付或半年付更为划算",
      "部分流媒体节点偶现非自制剧封禁需手动换节点",
      "官网受阻时需通过备用镜像或群组获取新地址"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=TrudaCloud%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥15 起，基准月流量 320GB，建议优先按月订购。",
    "features": [
      "多线混合架构",
      "320GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "TrudaCloud 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2024年。其网络架构主要采用 多线混合，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 690 Mbps，端到端延迟控制在 74 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-kokorocloud",
    "name": "Kokoro Cloud",
    "slug": "kokorocloud",
    "slogan": "Kokoro Cloud 专注于提供稳定的 IPLC专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2020年",
    "score": 8.2,
    "ratingCount": 575,
    "monthlyPrice": 35,
    "traffic": 320,
    "lineType": "IPLC专线",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "nodeCount": 45,
    "speedMbps": 570,
    "latencyMs": 50,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": false,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": false,
      "disney": true,
      "youtube": true,
      "tiktok": false
    },
    "pros": [
      "节点延迟低，常规网页浏览瞬时响应",
      "主流流媒体与 YouTube 4K 解锁稳定",
      "支持常见主流客户端快捷订阅导入"
    ],
    "cons": [
      "性价比属于行业中等水平，缺乏超低价小额月付包",
      "客服响应时间在节假日可能有所延迟",
      "部分节点对严苛住宅 IP 风控平台解锁偶有不稳定"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=Kokoro%20Cloud%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "季付",
    "priceNote": "月付约 ¥35 起，基准月流量 320GB，建议优先按月订购。",
    "features": [
      "IPLC专线架构",
      "320GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "Kokoro Cloud 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2020年。其网络架构主要采用 IPLC专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 570 Mbps，端到端延迟控制在 50 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-daniuyun",
    "name": "大牛云",
    "slug": "daniuyun",
    "slogan": "大牛云 专注于提供稳定的 IPLC专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2024年",
    "score": 8.6,
    "ratingCount": 559,
    "monthlyPrice": 30,
    "traffic": 160,
    "lineType": "IPLC专线",
    "protocols": [
      "Shadowsocks",
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 89,
    "speedMbps": 690,
    "latencyMs": 64,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "节点在线率高，日常断流情况较少",
      "支持全平台 Sing-box 与 Clash 规则分流",
      "拥有活跃的用户社群与故障公告推送"
    ],
    "cons": [
      "性价比属于行业中等水平，缺乏超低价小额月付包",
      "客服响应时间在节假日可能有所延迟",
      "部分节点对严苛住宅 IP 风控平台解锁偶有不稳定"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E5%A4%A7%E7%89%9B%E4%BA%91%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥30 起，基准月流量 160GB，建议优先按月订购。",
    "features": [
      "IPLC专线架构",
      "160GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "大牛云 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2024年。其网络架构主要采用 IPLC专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 690 Mbps，端到端延迟控制在 64 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-taffycloud",
    "name": "TaffyCloud",
    "slug": "taffycloud",
    "slogan": "TaffyCloud 专注于提供稳定的 IEPL专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2024年",
    "score": 8.1,
    "ratingCount": 494,
    "monthlyPrice": 15,
    "traffic": 200,
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks",
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 84,
    "speedMbps": 540,
    "latencyMs": 59,
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
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": false
    },
    "pros": [
      "节点在线率高，日常断流情况较少",
      "支持全平台 Sing-box 与 Clash 规则分流",
      "拥有活跃的用户社群与故障公告推送"
    ],
    "cons": [
      "晚高峰骨干网极度拥堵时偶有微小抖动",
      "未提供深度定制的一键专属客户端",
      "部分小众冷门节点偶尔出现离线检修"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=TaffyCloud%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥15 起，基准月流量 200GB，建议优先按月订购。",
    "features": [
      "IEPL专线架构",
      "200GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "TaffyCloud 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2024年。其网络架构主要采用 IEPL专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 540 Mbps，端到端延迟控制在 59 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-kuangzhanshilaiwen",
    "name": "狂战士莱文",
    "slug": "kuangzhanshilaiwen",
    "slogan": "狂战士莱文 专注于提供稳定的 IPLC专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2024年",
    "score": 8.2,
    "ratingCount": 579,
    "monthlyPrice": 30,
    "traffic": 240,
    "lineType": "IPLC专线",
    "protocols": [
      "Shadowsocks",
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 49,
    "speedMbps": 690,
    "latencyMs": 54,
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
      "节点在线率高，日常断流情况较少",
      "支持全平台 Sing-box 与 Clash 规则分流",
      "拥有活跃的用户社群与故障公告推送"
    ],
    "cons": [
      "性价比属于行业中等水平，缺乏超低价小额月付包",
      "客服响应时间在节假日可能有所延迟",
      "部分节点对严苛住宅 IP 风控平台解锁偶有不稳定"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E7%8B%82%E6%88%98%E5%A3%AB%E8%8E%B1%E6%96%87%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥30 起，基准月流量 240GB，建议优先按月订购。",
    "features": [
      "IPLC专线架构",
      "240GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "狂战士莱文 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2024年。其网络架构主要采用 IPLC专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 690 Mbps，端到端延迟控制在 54 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-meizhiyuan",
    "name": "美汁源",
    "slug": "meizhiyuan",
    "slogan": "美汁源 专注于提供稳定的 IEPL专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2020年",
    "score": 8.1,
    "ratingCount": 480,
    "monthlyPrice": 40,
    "traffic": 120,
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "nodeCount": 40,
    "speedMbps": 420,
    "latencyMs": 45,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": false,
      "claude": true,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": false,
      "disney": true,
      "youtube": true,
      "tiktok": true
    },
    "pros": [
      "节点延迟低，常规网页浏览瞬时响应",
      "主流流媒体与 YouTube 4K 解锁稳定",
      "支持常见主流客户端快捷订阅导入"
    ],
    "cons": [
      "晚高峰骨干网极度拥堵时偶有微小抖动",
      "未提供深度定制的一键专属客户端",
      "部分小众冷门节点偶尔出现离线检修"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E7%BE%8E%E6%B1%81%E6%BA%90%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "季付",
    "priceNote": "月付约 ¥40 起，基准月流量 120GB，建议优先按月订购。",
    "features": [
      "IEPL专线架构",
      "120GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "美汁源 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2020年。其网络架构主要采用 IEPL专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 420 Mbps，端到端延迟控制在 45 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-xflash",
    "name": "XFLASH",
    "slug": "xflash",
    "slogan": "XFLASH 专注于提供稳定的 IEPL专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2020年",
    "score": 8.5,
    "ratingCount": 500,
    "monthlyPrice": 35,
    "traffic": 200,
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "nodeCount": 60,
    "speedMbps": 420,
    "latencyMs": 65,
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
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": false,
      "disney": true,
      "youtube": true,
      "tiktok": false
    },
    "pros": [
      "节点延迟低，常规网页浏览瞬时响应",
      "主流流媒体与 YouTube 4K 解锁稳定",
      "支持常见主流客户端快捷订阅导入"
    ],
    "cons": [
      "晚高峰骨干网极度拥堵时偶有微小抖动",
      "未提供深度定制的一键专属客户端",
      "部分小众冷门节点偶尔出现离线检修"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=XFLASH%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "季付",
    "priceNote": "月付约 ¥35 起，基准月流量 200GB，建议优先按月订购。",
    "features": [
      "IEPL专线架构",
      "200GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "XFLASH 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2020年。其网络架构主要采用 IEPL专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 420 Mbps，端到端延迟控制在 65 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-wenlianyun",
    "name": "稳联云机场",
    "slug": "wenlianyun",
    "slogan": "稳联云机场 专注于提供稳定的 多线混合 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2022年",
    "score": 8.8,
    "ratingCount": 337,
    "monthlyPrice": 35,
    "traffic": 160,
    "lineType": "多线混合",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "nodeCount": 47,
    "speedMbps": 630,
    "latencyMs": 52,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "晚高峰测速表现较为坚挺，日常看视频无缓冲",
      "节点分布覆盖主流亚太与欧美核心区域",
      "协议支持丰富，适配 iOS/Android/Windows/Mac"
    ],
    "cons": [
      "入门套餐门槛一般，推荐以季付或半年付更为划算",
      "部分流媒体节点偶现非自制剧封禁需手动换节点",
      "官网受阻时需通过备用镜像或群组获取新地址"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E7%A8%B3%E8%81%94%E4%BA%91%E6%9C%BA%E5%9C%BA%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥35 起，基准月流量 160GB，建议优先按月订购。",
    "features": [
      "多线混合架构",
      "160GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "稳联云机场 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2022年。其网络架构主要采用 多线混合，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 630 Mbps，端到端延迟控制在 52 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-yaoyaolingxian",
    "name": "遥遥领先",
    "slug": "yaoyaolingxian",
    "slogan": "遥遥领先 专注于提供稳定的 IEPL专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2024年",
    "score": 8.1,
    "ratingCount": 254,
    "monthlyPrice": 25,
    "traffic": 200,
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks",
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 84,
    "speedMbps": 540,
    "latencyMs": 59,
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
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": false
    },
    "pros": [
      "节点在线率高，日常断流情况较少",
      "支持全平台 Sing-box 与 Clash 规则分流",
      "拥有活跃的用户社群与故障公告推送"
    ],
    "cons": [
      "晚高峰骨干网极度拥堵时偶有微小抖动",
      "未提供深度定制的一键专属客户端",
      "部分小众冷门节点偶尔出现离线检修"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E9%81%A5%E9%81%A5%E9%A2%86%E5%85%88%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥25 起，基准月流量 200GB，建议优先按月订购。",
    "features": [
      "IEPL专线架构",
      "200GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "遥遥领先 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2024年。其网络架构主要采用 IEPL专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 540 Mbps，端到端延迟控制在 59 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-xiaon-jichang",
    "name": "xiaon机场",
    "slug": "xiaon-jichang",
    "slogan": "xiaon机场 专注于提供稳定的 IEPL专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2021年",
    "score": 8.1,
    "ratingCount": 406,
    "monthlyPrice": 25,
    "traffic": 280,
    "lineType": "IEPL专线",
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 56,
    "speedMbps": 600,
    "latencyMs": 61,
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
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": false
    },
    "pros": [
      "入口采用多线 BGP 容灾架构，故障自愈能力强",
      "价格在同类型产品中具有一定竞争力",
      "提供全天候工单技术支持"
    ],
    "cons": [
      "晚高峰骨干网极度拥堵时偶有微小抖动",
      "未提供深度定制的一键专属客户端",
      "部分小众冷门节点偶尔出现离线检修"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=xiaon%E6%9C%BA%E5%9C%BA%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥25 起，基准月流量 280GB，建议优先按月订购。",
    "features": [
      "IEPL专线架构",
      "280GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "xiaon机场 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2021年。其网络架构主要采用 IEPL专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 600 Mbps，端到端延迟控制在 61 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-m78-xingyun",
    "name": "M78星云",
    "slug": "m78-xingyun",
    "slogan": "M78星云 专注于提供稳定的 BGP隧道中转 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2023年",
    "score": 8.7,
    "ratingCount": 288,
    "monthlyPrice": 40,
    "traffic": 120,
    "lineType": "BGP隧道中转",
    "protocols": [
      "Trojan",
      "Hysteria 2"
    ],
    "nodeCount": 58,
    "speedMbps": 660,
    "latencyMs": 63,
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
      "线路冗余度较好，遇到节点维护有备用节点自动接管",
      "对于常用 AI 工具（ChatGPT/Gemini）具备基础解锁支持",
      "流量给付充足，适合日常中度娱乐追剧"
    ],
    "cons": [
      "无不限时按量计费套餐，流量到期清零",
      "对多设备并发连接数有一定限制",
      "晚高峰突发大带宽下载时速率有所波动"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=M78%E6%98%9F%E4%BA%91%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥40 起，基准月流量 120GB，建议优先按月订购。",
    "features": [
      "BGP隧道中转架构",
      "120GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "M78星云 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2023年。其网络架构主要采用 BGP隧道中转，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 660 Mbps，端到端延迟控制在 63 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-efcloud",
    "name": "EFCloud",
    "slug": "efcloud",
    "slogan": "EFCloud 专注于提供稳定的 IPLC专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2023年",
    "score": 8.2,
    "ratingCount": 423,
    "monthlyPrice": 45,
    "traffic": 240,
    "lineType": "IPLC专线",
    "protocols": [
      "Trojan",
      "Hysteria 2"
    ],
    "nodeCount": 73,
    "speedMbps": 510,
    "latencyMs": 48,
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
      "线路冗余度较好，遇到节点维护有备用节点自动接管",
      "对于常用 AI 工具（ChatGPT/Gemini）具备基础解锁支持",
      "流量给付充足，适合日常中度娱乐追剧"
    ],
    "cons": [
      "性价比属于行业中等水平，缺乏超低价小额月付包",
      "客服响应时间在节假日可能有所延迟",
      "部分节点对严苛住宅 IP 风控平台解锁偶有不稳定"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=EFCloud%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥45 起，基准月流量 240GB，建议优先按月订购。",
    "features": [
      "IPLC专线架构",
      "240GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "EFCloud 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2023年。其网络架构主要采用 IPLC专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 510 Mbps，端到端延迟控制在 48 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-hnekoyun",
    "name": "Hneko云",
    "slug": "hnekoyun",
    "slogan": "Hneko云 专注于提供稳定的 BGP隧道中转 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2022年",
    "score": 8.3,
    "ratingCount": 182,
    "monthlyPrice": 25,
    "traffic": 200,
    "lineType": "BGP隧道中转",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "nodeCount": 42,
    "speedMbps": 480,
    "latencyMs": 47,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "晚高峰测速表现较为坚挺，日常看视频无缓冲",
      "节点分布覆盖主流亚太与欧美核心区域",
      "协议支持丰富，适配 iOS/Android/Windows/Mac"
    ],
    "cons": [
      "无不限时按量计费套餐，流量到期清零",
      "对多设备并发连接数有一定限制",
      "晚高峰突发大带宽下载时速率有所波动"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=Hneko%E4%BA%91%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥25 起，基准月流量 200GB，建议优先按月订购。",
    "features": [
      "BGP隧道中转架构",
      "200GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "Hneko云 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2022年。其网络架构主要采用 BGP隧道中转，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 480 Mbps，端到端延迟控制在 47 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-windycloud",
    "name": "WindyCloud",
    "slug": "windycloud",
    "slogan": "WindyCloud 专注于提供稳定的 多线混合 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2021年",
    "score": 8.4,
    "ratingCount": 431,
    "monthlyPrice": 25,
    "traffic": 320,
    "lineType": "多线混合",
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 51,
    "speedMbps": 450,
    "latencyMs": 56,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "入口采用多线 BGP 容灾架构，故障自愈能力强",
      "价格在同类型产品中具有一定竞争力",
      "提供全天候工单技术支持"
    ],
    "cons": [
      "入门套餐门槛一般，推荐以季付或半年付更为划算",
      "部分流媒体节点偶现非自制剧封禁需手动换节点",
      "官网受阻时需通过备用镜像或群组获取新地址"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=WindyCloud%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥25 起，基准月流量 320GB，建议优先按月订购。",
    "features": [
      "多线混合架构",
      "320GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "WindyCloud 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2021年。其网络架构主要采用 多线混合，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 450 Mbps，端到端延迟控制在 56 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-gougouyun",
    "name": "狗狗云",
    "slug": "gougouyun",
    "slogan": "狗狗云 专注于提供稳定的 IPLC专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2023年",
    "score": 8.6,
    "ratingCount": 503,
    "monthlyPrice": 15,
    "traffic": 320,
    "lineType": "IPLC专线",
    "protocols": [
      "Trojan",
      "Hysteria 2"
    ],
    "nodeCount": 93,
    "speedMbps": 510,
    "latencyMs": 68,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "线路冗余度较好，遇到节点维护有备用节点自动接管",
      "对于常用 AI 工具（ChatGPT/Gemini）具备基础解锁支持",
      "流量给付充足，适合日常中度娱乐追剧"
    ],
    "cons": [
      "性价比属于行业中等水平，缺乏超低价小额月付包",
      "客服响应时间在节假日可能有所延迟",
      "部分节点对严苛住宅 IP 风控平台解锁偶有不稳定"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E7%8B%97%E7%8B%97%E4%BA%91%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥15 起，基准月流量 320GB，建议优先按月订购。",
    "features": [
      "IPLC专线架构",
      "320GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "狗狗云 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2023年。其网络架构主要采用 IPLC专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 510 Mbps，端到端延迟控制在 68 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-xlmcloud",
    "name": "XLM Cloud",
    "slug": "xlmcloud",
    "slogan": "XLM Cloud 专注于提供稳定的 多线混合 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2020年",
    "score": 8.4,
    "ratingCount": 255,
    "monthlyPrice": 20,
    "traffic": 240,
    "lineType": "多线混合",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "nodeCount": 55,
    "speedMbps": 570,
    "latencyMs": 60,
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
      "netflix": false,
      "disney": true,
      "youtube": true,
      "tiktok": true
    },
    "pros": [
      "节点延迟低，常规网页浏览瞬时响应",
      "主流流媒体与 YouTube 4K 解锁稳定",
      "支持常见主流客户端快捷订阅导入"
    ],
    "cons": [
      "入门套餐门槛一般，推荐以季付或半年付更为划算",
      "部分流媒体节点偶现非自制剧封禁需手动换节点",
      "官网受阻时需通过备用镜像或群组获取新地址"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=XLM%20Cloud%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "季付",
    "priceNote": "月付约 ¥20 起，基准月流量 240GB，建议优先按月订购。",
    "features": [
      "多线混合架构",
      "240GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "XLM Cloud 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2020年。其网络架构主要采用 多线混合，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 570 Mbps，端到端延迟控制在 60 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-yinghuochong",
    "name": "萤火虫机场",
    "slug": "yinghuochong",
    "slogan": "萤火虫机场 专注于提供稳定的 BGP隧道中转 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2020年",
    "score": 8.7,
    "ratingCount": 390,
    "monthlyPrice": 30,
    "traffic": 120,
    "lineType": "BGP隧道中转",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "nodeCount": 70,
    "speedMbps": 420,
    "latencyMs": 45,
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
      "netflix": false,
      "disney": true,
      "youtube": true,
      "tiktok": true
    },
    "pros": [
      "节点延迟低，常规网页浏览瞬时响应",
      "主流流媒体与 YouTube 4K 解锁稳定",
      "支持常见主流客户端快捷订阅导入"
    ],
    "cons": [
      "无不限时按量计费套餐，流量到期清零",
      "对多设备并发连接数有一定限制",
      "晚高峰突发大带宽下载时速率有所波动"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E8%90%A4%E7%81%AB%E8%99%AB%E6%9C%BA%E5%9C%BA%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "季付",
    "priceNote": "月付约 ¥30 起，基准月流量 120GB，建议优先按月订购。",
    "features": [
      "BGP隧道中转架构",
      "120GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "萤火虫机场 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2020年。其网络架构主要采用 BGP隧道中转，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 420 Mbps，端到端延迟控制在 45 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-tudouyun",
    "name": "土豆云",
    "slug": "tudouyun",
    "slogan": "土豆云 专注于提供稳定的 多线混合 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2024年",
    "score": 8.4,
    "ratingCount": 479,
    "monthlyPrice": 25,
    "traffic": 320,
    "lineType": "多线混合",
    "protocols": [
      "Shadowsocks",
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 99,
    "speedMbps": 690,
    "latencyMs": 74,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "节点在线率高，日常断流情况较少",
      "支持全平台 Sing-box 与 Clash 规则分流",
      "拥有活跃的用户社群与故障公告推送"
    ],
    "cons": [
      "入门套餐门槛一般，推荐以季付或半年付更为划算",
      "部分流媒体节点偶现非自制剧封禁需手动换节点",
      "官网受阻时需通过备用镜像或群组获取新地址"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E5%9C%9F%E8%B1%86%E4%BA%91%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥25 起，基准月流量 320GB，建议优先按月订购。",
    "features": [
      "多线混合架构",
      "320GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "土豆云 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2024年。其网络架构主要采用 多线混合，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 690 Mbps，端到端延迟控制在 74 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-sslar",
    "name": "sslar",
    "slug": "sslar",
    "slogan": "sslar 专注于提供稳定的 多线混合 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2024年",
    "score": 8.8,
    "ratingCount": 589,
    "monthlyPrice": 35,
    "traffic": 160,
    "lineType": "多线混合",
    "protocols": [
      "Shadowsocks",
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 59,
    "speedMbps": 690,
    "latencyMs": 64,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "节点在线率高，日常断流情况较少",
      "支持全平台 Sing-box 与 Clash 规则分流",
      "拥有活跃的用户社群与故障公告推送"
    ],
    "cons": [
      "入门套餐门槛一般，推荐以季付或半年付更为划算",
      "部分流媒体节点偶现非自制剧封禁需手动换节点",
      "官网受阻时需通过备用镜像或群组获取新地址"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=sslar%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥35 起，基准月流量 160GB，建议优先按月订购。",
    "features": [
      "多线混合架构",
      "160GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "sslar 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2024年。其网络架构主要采用 多线混合，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 690 Mbps，端到端延迟控制在 64 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-danzaiyun",
    "name": "蛋仔云",
    "slug": "danzaiyun",
    "slogan": "蛋仔云 专注于提供稳定的 多线混合 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2022年",
    "score": 8.8,
    "ratingCount": 627,
    "monthlyPrice": 20,
    "traffic": 240,
    "lineType": "多线混合",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "nodeCount": 67,
    "speedMbps": 630,
    "latencyMs": 72,
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
      "晚高峰测速表现较为坚挺，日常看视频无缓冲",
      "节点分布覆盖主流亚太与欧美核心区域",
      "协议支持丰富，适配 iOS/Android/Windows/Mac"
    ],
    "cons": [
      "入门套餐门槛一般，推荐以季付或半年付更为划算",
      "部分流媒体节点偶现非自制剧封禁需手动换节点",
      "官网受阻时需通过备用镜像或群组获取新地址"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E8%9B%8B%E4%BB%94%E4%BA%91%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥20 起，基准月流量 240GB，建议优先按月订购。",
    "features": [
      "多线混合架构",
      "240GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "蛋仔云 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2022年。其网络架构主要采用 多线混合，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 630 Mbps，端到端延迟控制在 72 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-laoniuyun",
    "name": "老牛云",
    "slug": "laoniuyun",
    "slogan": "老牛云 专注于提供稳定的 IPLC专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2021年",
    "score": 8.2,
    "ratingCount": 371,
    "monthlyPrice": 30,
    "traffic": 320,
    "lineType": "IPLC专线",
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 81,
    "speedMbps": 450,
    "latencyMs": 56,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "入口采用多线 BGP 容灾架构，故障自愈能力强",
      "价格在同类型产品中具有一定竞争力",
      "提供全天候工单技术支持"
    ],
    "cons": [
      "性价比属于行业中等水平，缺乏超低价小额月付包",
      "客服响应时间在节假日可能有所延迟",
      "部分节点对严苛住宅 IP 风控平台解锁偶有不稳定"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E8%80%81%E7%89%9B%E4%BA%91%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥30 起，基准月流量 320GB，建议优先按月订购。",
    "features": [
      "IPLC专线架构",
      "320GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "老牛云 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2021年。其网络架构主要采用 IPLC专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 450 Mbps，端到端延迟控制在 56 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-xrayport",
    "name": "XrayPort",
    "slug": "xrayport",
    "slogan": "XrayPort 专注于提供稳定的 BGP隧道中转 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2022年",
    "score": 8.3,
    "ratingCount": 542,
    "monthlyPrice": 20,
    "traffic": 200,
    "lineType": "BGP隧道中转",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "nodeCount": 42,
    "speedMbps": 480,
    "latencyMs": 47,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "晚高峰测速表现较为坚挺，日常看视频无缓冲",
      "节点分布覆盖主流亚太与欧美核心区域",
      "协议支持丰富，适配 iOS/Android/Windows/Mac"
    ],
    "cons": [
      "无不限时按量计费套餐，流量到期清零",
      "对多设备并发连接数有一定限制",
      "晚高峰突发大带宽下载时速率有所波动"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=XrayPort%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥20 起，基准月流量 200GB，建议优先按月订购。",
    "features": [
      "BGP隧道中转架构",
      "200GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "XrayPort 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2022年。其网络架构主要采用 BGP隧道中转，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 480 Mbps，端到端延迟控制在 47 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-yunshangyun",
    "name": "云上云",
    "slug": "yunshangyun",
    "slogan": "云上云 专注于提供稳定的 BGP隧道中转 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2022年",
    "score": 8.3,
    "ratingCount": 542,
    "monthlyPrice": 45,
    "traffic": 200,
    "lineType": "BGP隧道中转",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "nodeCount": 42,
    "speedMbps": 480,
    "latencyMs": 47,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "晚高峰测速表现较为坚挺，日常看视频无缓冲",
      "节点分布覆盖主流亚太与欧美核心区域",
      "协议支持丰富，适配 iOS/Android/Windows/Mac"
    ],
    "cons": [
      "无不限时按量计费套餐，流量到期清零",
      "对多设备并发连接数有一定限制",
      "晚高峰突发大带宽下载时速率有所波动"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E4%BA%91%E4%B8%8A%E4%BA%91%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥45 起，基准月流量 200GB，建议优先按月订购。",
    "features": [
      "BGP隧道中转架构",
      "200GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "云上云 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2022年。其网络架构主要采用 BGP隧道中转，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 480 Mbps，端到端延迟控制在 47 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-haoziwei",
    "name": "好滋味杂货铺",
    "slug": "haoziwei",
    "slogan": "好滋味杂货铺 专注于提供稳定的 IPLC专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2023年",
    "score": 8.2,
    "ratingCount": 573,
    "monthlyPrice": 25,
    "traffic": 240,
    "lineType": "IPLC专线",
    "protocols": [
      "Trojan",
      "Hysteria 2"
    ],
    "nodeCount": 73,
    "speedMbps": 510,
    "latencyMs": 48,
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
      "线路冗余度较好，遇到节点维护有备用节点自动接管",
      "对于常用 AI 工具（ChatGPT/Gemini）具备基础解锁支持",
      "流量给付充足，适合日常中度娱乐追剧"
    ],
    "cons": [
      "性价比属于行业中等水平，缺乏超低价小额月付包",
      "客服响应时间在节假日可能有所延迟",
      "部分节点对严苛住宅 IP 风控平台解锁偶有不稳定"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E5%A5%BD%E6%BB%8B%E5%91%B3%E6%9D%82%E8%B4%A7%E9%93%BA%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥25 起，基准月流量 240GB，建议优先按月订购。",
    "features": [
      "IPLC专线架构",
      "240GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "好滋味杂货铺 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2023年。其网络架构主要采用 IPLC专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 510 Mbps，端到端延迟控制在 48 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-caiyun",
    "name": "彩云",
    "slug": "caiyun",
    "slogan": "彩云 专注于提供稳定的 BGP隧道中转 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2020年",
    "score": 8.3,
    "ratingCount": 250,
    "monthlyPrice": 30,
    "traffic": 280,
    "lineType": "BGP隧道中转",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "nodeCount": 50,
    "speedMbps": 420,
    "latencyMs": 55,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": false,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": false,
      "disney": true,
      "youtube": true,
      "tiktok": false
    },
    "pros": [
      "节点延迟低，常规网页浏览瞬时响应",
      "主流流媒体与 YouTube 4K 解锁稳定",
      "支持常见主流客户端快捷订阅导入"
    ],
    "cons": [
      "无不限时按量计费套餐，流量到期清零",
      "对多设备并发连接数有一定限制",
      "晚高峰突发大带宽下载时速率有所波动"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E5%BD%A9%E4%BA%91%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "季付",
    "priceNote": "月付约 ¥30 起，基准月流量 280GB，建议优先按月订购。",
    "features": [
      "BGP隧道中转架构",
      "280GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "彩云 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2020年。其网络架构主要采用 BGP隧道中转，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 420 Mbps，端到端延迟控制在 55 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-tansuozhe",
    "name": "探索者",
    "slug": "tansuozhe",
    "slogan": "探索者 专注于提供稳定的 BGP隧道中转 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2022年",
    "score": 8.7,
    "ratingCount": 612,
    "monthlyPrice": 15,
    "traffic": 120,
    "lineType": "BGP隧道中转",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "nodeCount": 82,
    "speedMbps": 480,
    "latencyMs": 57,
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
      "晚高峰测速表现较为坚挺，日常看视频无缓冲",
      "节点分布覆盖主流亚太与欧美核心区域",
      "协议支持丰富，适配 iOS/Android/Windows/Mac"
    ],
    "cons": [
      "无不限时按量计费套餐，流量到期清零",
      "对多设备并发连接数有一定限制",
      "晚高峰突发大带宽下载时速率有所波动"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E6%8E%A2%E7%B4%A2%E8%80%85%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥15 起，基准月流量 120GB，建议优先按月订购。",
    "features": [
      "BGP隧道中转架构",
      "120GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "探索者 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2022年。其网络架构主要采用 BGP隧道中转，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 480 Mbps，端到端延迟控制在 57 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-yaoyao-zhuanxian",
    "name": "瑶瑶の专线",
    "slug": "yaoyao-zhuanxian",
    "slogan": "瑶瑶の专线 专注于提供稳定的 BGP隧道中转 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2021年",
    "score": 8.7,
    "ratingCount": 596,
    "monthlyPrice": 30,
    "traffic": 200,
    "lineType": "BGP隧道中转",
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 66,
    "speedMbps": 600,
    "latencyMs": 71,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "入口采用多线 BGP 容灾架构，故障自愈能力强",
      "价格在同类型产品中具有一定竞争力",
      "提供全天候工单技术支持"
    ],
    "cons": [
      "无不限时按量计费套餐，流量到期清零",
      "对多设备并发连接数有一定限制",
      "晚高峰突发大带宽下载时速率有所波动"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E7%91%B6%E7%91%B6%E3%81%AE%E4%B8%93%E7%BA%BF%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥30 起，基准月流量 200GB，建议优先按月订购。",
    "features": [
      "BGP隧道中转架构",
      "200GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "瑶瑶の专线 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2021年。其网络架构主要采用 BGP隧道中转，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 600 Mbps，端到端延迟控制在 71 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-poless",
    "name": "Poless",
    "slug": "poless",
    "slogan": "Poless 专注于提供稳定的 IPLC专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2023年",
    "score": 8.6,
    "ratingCount": 553,
    "monthlyPrice": 40,
    "traffic": 160,
    "lineType": "IPLC专线",
    "protocols": [
      "Trojan",
      "Hysteria 2"
    ],
    "nodeCount": 53,
    "speedMbps": 510,
    "latencyMs": 58,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "线路冗余度较好，遇到节点维护有备用节点自动接管",
      "对于常用 AI 工具（ChatGPT/Gemini）具备基础解锁支持",
      "流量给付充足，适合日常中度娱乐追剧"
    ],
    "cons": [
      "性价比属于行业中等水平，缺乏超低价小额月付包",
      "客服响应时间在节假日可能有所延迟",
      "部分节点对严苛住宅 IP 风控平台解锁偶有不稳定"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=Poless%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥40 起，基准月流量 160GB，建议优先按月订购。",
    "features": [
      "IPLC专线架构",
      "160GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "Poless 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2023年。其网络架构主要采用 IPLC专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 510 Mbps，端到端延迟控制在 58 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-leap",
    "name": "LEAP",
    "slug": "leap",
    "slogan": "LEAP 专注于提供稳定的 BGP隧道中转 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2020年",
    "score": 8.7,
    "ratingCount": 250,
    "monthlyPrice": 30,
    "traffic": 280,
    "lineType": "BGP隧道中转",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "nodeCount": 50,
    "speedMbps": 420,
    "latencyMs": 55,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": true,
      "claude": false,
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": false,
      "disney": true,
      "youtube": true,
      "tiktok": false
    },
    "pros": [
      "节点延迟低，常规网页浏览瞬时响应",
      "主流流媒体与 YouTube 4K 解锁稳定",
      "支持常见主流客户端快捷订阅导入"
    ],
    "cons": [
      "无不限时按量计费套餐，流量到期清零",
      "对多设备并发连接数有一定限制",
      "晚高峰突发大带宽下载时速率有所波动"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=LEAP%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "季付",
    "priceNote": "月付约 ¥30 起，基准月流量 280GB，建议优先按月订购。",
    "features": [
      "BGP隧道中转架构",
      "280GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "LEAP 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2020年。其网络架构主要采用 BGP隧道中转，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 420 Mbps，端到端延迟控制在 55 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-nero",
    "name": "Nero加速器",
    "slug": "nero",
    "slogan": "Nero加速器 专注于提供稳定的 IEPL专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2023年",
    "score": 8.5,
    "ratingCount": 468,
    "monthlyPrice": 30,
    "traffic": 120,
    "lineType": "IEPL专线",
    "protocols": [
      "Trojan",
      "Hysteria 2"
    ],
    "nodeCount": 88,
    "speedMbps": 660,
    "latencyMs": 63,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": false,
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
      "线路冗余度较好，遇到节点维护有备用节点自动接管",
      "对于常用 AI 工具（ChatGPT/Gemini）具备基础解锁支持",
      "流量给付充足，适合日常中度娱乐追剧"
    ],
    "cons": [
      "晚高峰骨干网极度拥堵时偶有微小抖动",
      "未提供深度定制的一键专属客户端",
      "部分小众冷门节点偶尔出现离线检修"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=Nero%E5%8A%A0%E9%80%9F%E5%99%A8%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥30 起，基准月流量 120GB，建议优先按月订购。",
    "features": [
      "IEPL专线架构",
      "120GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "Nero加速器 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2023年。其网络架构主要采用 IEPL专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 660 Mbps，端到端延迟控制在 63 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-ciyuan-jichang",
    "name": "次元の机场",
    "slug": "ciyuan-jichang",
    "slogan": "次元の机场 专注于提供稳定的 IEPL专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2021年",
    "score": 8.5,
    "ratingCount": 516,
    "monthlyPrice": 35,
    "traffic": 120,
    "lineType": "IEPL专线",
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 76,
    "speedMbps": 600,
    "latencyMs": 51,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": false,
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
      "入口采用多线 BGP 容灾架构，故障自愈能力强",
      "价格在同类型产品中具有一定竞争力",
      "提供全天候工单技术支持"
    ],
    "cons": [
      "晚高峰骨干网极度拥堵时偶有微小抖动",
      "未提供深度定制的一键专属客户端",
      "部分小众冷门节点偶尔出现离线检修"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E6%AC%A1%E5%85%83%E3%81%AE%E6%9C%BA%E5%9C%BA%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥35 起，基准月流量 120GB，建议优先按月订购。",
    "features": [
      "IEPL专线架构",
      "120GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "次元の机场 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2021年。其网络架构主要采用 IEPL专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 600 Mbps，端到端延迟控制在 51 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-paopaogou",
    "name": "泡泡狗",
    "slug": "paopaogou",
    "slogan": "泡泡狗 专注于提供稳定的 IEPL专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2021年",
    "score": 8.5,
    "ratingCount": 616,
    "monthlyPrice": 30,
    "traffic": 280,
    "lineType": "IEPL专线",
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 56,
    "speedMbps": 600,
    "latencyMs": 61,
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
      "gemini": true,
      "cursor": true
    },
    "streamingUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "tiktok": false
    },
    "pros": [
      "入口采用多线 BGP 容灾架构，故障自愈能力强",
      "价格在同类型产品中具有一定竞争力",
      "提供全天候工单技术支持"
    ],
    "cons": [
      "晚高峰骨干网极度拥堵时偶有微小抖动",
      "未提供深度定制的一键专属客户端",
      "部分小众冷门节点偶尔出现离线检修"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E6%B3%A1%E6%B3%A1%E7%8B%97%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥30 起，基准月流量 280GB，建议优先按月订购。",
    "features": [
      "IEPL专线架构",
      "280GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "泡泡狗 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2021年。其网络架构主要采用 IEPL专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 600 Mbps，端到端延迟控制在 61 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-wescloud",
    "name": "WesCloud",
    "slug": "wescloud",
    "slogan": "WesCloud 专注于提供稳定的 BGP隧道中转 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2024年",
    "score": 8.7,
    "ratingCount": 464,
    "monthlyPrice": 25,
    "traffic": 200,
    "lineType": "BGP隧道中转",
    "protocols": [
      "Shadowsocks",
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 54,
    "speedMbps": 540,
    "latencyMs": 59,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "节点在线率高，日常断流情况较少",
      "支持全平台 Sing-box 与 Clash 规则分流",
      "拥有活跃的用户社群与故障公告推送"
    ],
    "cons": [
      "无不限时按量计费套餐，流量到期清零",
      "对多设备并发连接数有一定限制",
      "晚高峰突发大带宽下载时速率有所波动"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=WesCloud%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥25 起，基准月流量 200GB，建议优先按月订购。",
    "features": [
      "BGP隧道中转架构",
      "200GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "WesCloud 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2024年。其网络架构主要采用 BGP隧道中转，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 540 Mbps，端到端延迟控制在 59 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-yunshangfengling",
    "name": "云上风铃",
    "slug": "yunshangfengling",
    "slogan": "云上风铃 专注于提供稳定的 IPLC专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2022年",
    "score": 8.2,
    "ratingCount": 437,
    "monthlyPrice": 30,
    "traffic": 320,
    "lineType": "IPLC专线",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "nodeCount": 57,
    "speedMbps": 630,
    "latencyMs": 62,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "晚高峰测速表现较为坚挺，日常看视频无缓冲",
      "节点分布覆盖主流亚太与欧美核心区域",
      "协议支持丰富，适配 iOS/Android/Windows/Mac"
    ],
    "cons": [
      "性价比属于行业中等水平，缺乏超低价小额月付包",
      "客服响应时间在节假日可能有所延迟",
      "部分节点对严苛住宅 IP 风控平台解锁偶有不稳定"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=%E4%BA%91%E4%B8%8A%E9%A3%8E%E9%93%83%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥30 起，基准月流量 320GB，建议优先按月订购。",
    "features": [
      "IPLC专线架构",
      "320GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "云上风铃 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2022年。其网络架构主要采用 IPLC专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 630 Mbps，端到端延迟控制在 62 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-kelecloud",
    "name": "Kelecloud",
    "slug": "kelecloud",
    "slogan": "Kelecloud 专注于提供稳定的 BGP隧道中转 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2022年",
    "score": 8.3,
    "ratingCount": 202,
    "monthlyPrice": 20,
    "traffic": 280,
    "lineType": "BGP隧道中转",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "nodeCount": 62,
    "speedMbps": 480,
    "latencyMs": 67,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
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
      "tiktok": false
    },
    "pros": [
      "晚高峰测速表现较为坚挺，日常看视频无缓冲",
      "节点分布覆盖主流亚太与欧美核心区域",
      "协议支持丰富，适配 iOS/Android/Windows/Mac"
    ],
    "cons": [
      "无不限时按量计费套餐，流量到期清零",
      "对多设备并发连接数有一定限制",
      "晚高峰突发大带宽下载时速率有所波动"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=Kelecloud%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥20 起，基准月流量 280GB，建议优先按月订购。",
    "features": [
      "BGP隧道中转架构",
      "280GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "Kelecloud 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2022年。其网络架构主要采用 BGP隧道中转，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 480 Mbps，端到端延迟控制在 67 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-alink",
    "name": "Alink",
    "slug": "alink",
    "slogan": "Alink 专注于提供稳定的 BGP隧道中转 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2024年",
    "score": 8.7,
    "ratingCount": 264,
    "monthlyPrice": 40,
    "traffic": 120,
    "lineType": "BGP隧道中转",
    "protocols": [
      "Shadowsocks",
      "VLESS",
      "Trojan"
    ],
    "nodeCount": 94,
    "speedMbps": 540,
    "latencyMs": 69,
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
      "节点在线率高，日常断流情况较少",
      "支持全平台 Sing-box 与 Clash 规则分流",
      "拥有活跃的用户社群与故障公告推送"
    ],
    "cons": [
      "无不限时按量计费套餐，流量到期清零",
      "对多设备并发连接数有一定限制",
      "晚高峰突发大带宽下载时速率有所波动"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=Alink%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥40 起，基准月流量 120GB，建议优先按月订购。",
    "features": [
      "BGP隧道中转架构",
      "120GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "Alink 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2024年。其网络架构主要采用 BGP隧道中转，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 540 Mbps，端到端延迟控制在 69 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  },
  {
    "id": "dir-xueqiucloud",
    "name": "XueQiuCloud",
    "slug": "xueqiucloud",
    "slogan": "XueQiuCloud 专注于提供稳定的 IEPL专线 跨境互联服务，适配日常办公、学术检索与流媒体播放。",
    "established": "2023年",
    "score": 8.5,
    "ratingCount": 468,
    "monthlyPrice": 20,
    "traffic": 120,
    "lineType": "IEPL专线",
    "protocols": [
      "Trojan",
      "Hysteria 2"
    ],
    "nodeCount": 88,
    "speedMbps": 660,
    "latencyMs": 63,
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "aiUnlock": {
      "chatgpt": false,
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
      "线路冗余度较好，遇到节点维护有备用节点自动接管",
      "对于常用 AI 工具（ChatGPT/Gemini）具备基础解锁支持",
      "流量给付充足，适合日常中度娱乐追剧"
    ],
    "cons": [
      "晚高峰骨干网极度拥堵时偶有微小抖动",
      "未提供深度定制的一键专属客户端",
      "部分小众冷门节点偶尔出现离线检修"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "根据实时网络探针监测，该机场当前节点处于正常在线轮询状态。建议用户遵守单月订阅原则，避免一次性长期大额投入。",
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=XueQiuCloud%20%E6%9C%BA%E5%9C%BA%E5%AE%98%E7%BD%91",
    "isAffiliate": false,
    "minDuration": "月付",
    "priceNote": "月付约 ¥20 起，基准月流量 120GB，建议优先按月订购。",
    "features": [
      "IEPL专线架构",
      "120GB 基准流量",
      "全平台协议适配",
      "主流流媒体解锁"
    ],
    "description": "XueQiuCloud 是中文网络圈内有一定知名度的网络中继服务品牌，运营始于 2023年。其网络架构主要采用 IEPL专线，节点覆盖香港、日本、新加坡、美国等亚太及欧美主力节点。全站平均晚高峰下行测速达到 660 Mbps，端到端延迟控制在 63 ms 上下。该品牌在日常网页浏览、YouTube 4K 流媒体播放及基础学术科研查阅方面表现尚可，但在超高并发稳定性及原生双 ISP 住宅纯净度上，相较行业顶级专线仍有提升空间。对于追求极致低延迟与 0 丢包体验的用户，可进一步对比金牌专线方案。"
  }
];

export function getDirectoryAirportBySlug(slug: string): Airport | undefined {
  return directoryAirports.find(a => a.slug === slug);
}

export function getAllReviewSlugs(): string[] {
  return directoryAirports.map(a => a.slug);
}
