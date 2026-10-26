import fs from 'fs';

let content = fs.readFileSync('src/data/directory-airports.ts', 'utf8');

const kuailiEntry = `  {
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
  },
`;

if (!content.includes('"slug": "kuaili"')) {
  // Insert before first entry
  content = content.replace('export const directoryAirports: Airport[] = [\n', 'export const directoryAirports: Airport[] = [\n' + kuailiEntry);
  fs.writeFileSync('src/data/directory-airports.ts', content, 'utf8');
  console.log('Successfully added kuaili to directoryAirports!');
} else {
  console.log('kuaili already in directoryAirports');
}
