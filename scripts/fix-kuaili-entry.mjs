import fs from 'fs';

let content = fs.readFileSync('src/data/directory-airports.ts', 'utf8');

const targetKuaili = `  {
    "id": "dir-kuaili",
    "name": "快狸",
    "slug": "kuaili",
    "slogan": "稳定 VLESS 协议叠加 IEPL 专线，自研多端一键客户端",
    "established": "2023年",
    "score": 8.5,
    "ratingCount": 180,
    "monthlyPrice": 25,
    "traffic": 150,
    "lineType": "IEPL专线",
    "protocols": ["VLESS", "Shadowsocks"],
    "nodeCount": 66,
    "speedMbps": 840,
    "latencyMs": 30,
    "regions": ["香港", "日本", "新加坡", "美国", "德国"],
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
      "VLESS 叠加 IEPL 专线，晚高峰 840Mbps 高速下行",
      "自研一键连接客户端，新手上手门槛极低",
      "香港与新加坡主流流媒体及 AI 工具解锁稳定"
    ],
    "cons": [
      "月费 25 元起步，预算敏感型用户定价稍高",
      "落地节点聚焦 5 个主力地区，长尾小众节点较少"
    ],
    "riskStatus": "正常运营",
    "riskNote": "2023 年上线至今持续运行，工单响应平稳，常规运维正常。",
    "isAffiliate": false,
    "affiliateUrl": "#",
    "minDuration": "月付"
  },`;

const fixedKuaili = `  {
    "id": "dir-kuaili",
    "name": "快狸",
    "slug": "kuaili",
    "slogan": "稳定 VLESS 协议叠加 IEPL 专线，自研多端一键客户端",
    "established": "2023年",
    "score": 8.5,
    "ratingCount": 180,
    "monthlyPrice": 25,
    "traffic": 150,
    "lineType": "IEPL专线",
    "protocols": ["VLESS", "Shadowsocks"],
    "nodeCount": 66,
    "speedMbps": 840,
    "latencyMs": 30,
    "regions": ["香港", "日本", "新加坡", "美国", "德国"],
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
      "VLESS 叠加 IEPL 专线，晚高峰 840Mbps 高速下行",
      "自研一键连接客户端，新手上手门槛极低",
      "香港与新加坡主流流媒体及 AI 工具解锁稳定"
    ],
    "cons": [
      "月费 25 元起步，预算敏感型用户定价稍高",
      "落地节点聚焦 5 个主力地区，长尾小众节点较少"
    ],
    "targetUsers": [
      "日常轻度外网浏览",
      "Google 与学术资料检索",
      "YouTube/Netflix 追剧",
      "备用翻墙线路"
    ],
    "riskStatus": "正常运营",
    "riskNote": "2023 年上线至今持续运行，工单响应平稳，常规运维正常。",
    "isAffiliate": false,
    "affiliateUrl": "#",
    "officialUrl": "https://www.google.com/search?q=快狸%20机场官网",
    "minDuration": "月付",
    "priceNote": "月付约 ¥25 起，基准月流量 150GB，建议优先按月订购。",
    "features": [
      "IEPL专线",
      "VLESS协议",
      "自研客户端",
      "AI全解"
    ],
    "description": "快狸主打 VLESS 协议与 IEPL 国际专线组合，自研客户端对新手极其友好，晚高峰延迟低且流媒体解锁良好。"
  },`;

content = content.replace(targetKuaili, fixedKuaili);
fs.writeFileSync('src/data/directory-airports.ts', content, 'utf8');
console.log('Fixed kuaili entry in src/data/directory-airports.ts!');
