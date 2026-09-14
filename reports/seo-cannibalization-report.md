# 全站 SEO 关键词冲突与防内耗治理报告 (SEO Cannibalization Report)

> 更新时间：2026-09-14  
> 治理原则：1 个 Search Intent = 1 个 Primary URL | 拒绝同义词建站 | 统一内链锚文本

---

## 一、冲突组 (Conflict Groups) 审计与治理全景表

| Conflict Group | Primary Keyword | 核心搜索意图 (Search Intent) | 唯一 Primary URL | 潜在竞争/历史冲突 URL (Competing URLs) | 风险等级 | Recommended Action | 治理状态 (Status) |
| :--- | :--- | :--- | :--- | :--- | :---: | :--- | :---: |
| **CG-01: 核心推荐** | 机场推荐 | 寻找 2026 全网最好用、稳定、靠谱的机场综合购买建议 | `/recommend` | `/ranking`, `/reviews`, `/pricing`, `/airport-recommend-2026` | 高危 | 严格隔离：`/recommend` 负责综合选购导购，`/ranking` 负责打分天梯，统一主词锚向 `/recommend` | **RESOLVED** |
| **CG-02: 排名天梯** | 机场排行榜 | 查看客观测速分值、晚高峰稳定性排名天梯图 | `/ranking` | `/recommend`, `/compare` | 高危 | 分离两页定位：`/ranking` 纯技术打分和排名序列，不重复导购说辞 | **RESOLVED** |
| **CG-03: 便宜低价** | 便宜机场推荐 | 寻找 10元/15元/20元低价套餐、学生党平价、性价比对账 | `/recommend#budget` & `/pricing` | `/cheap-airport`, `/free` | 中危 | 统一收敛至推荐页价格主线与价格工具页，避免单独分裂出低质列表 | **RESOLVED** |
| **CG-04: 免费白嫖** | 免费机场 | 寻找免费试用、免费节点、免费订阅、免费VPN | `/free` | `/free-node`, `/free-vpn`, `/free-trial`, `/recommend` | 极高 | 独立建构 `/free` 作为唯一漏斗，融合科普+避坑+对比，强力导流付费专线 | **RESOLVED** |
| **CG-05: 线路技术** | IEPL与IPLC专线 | 了解专线原理、跨境光缆、晚高峰不卡顿、BGP中转区别 | `/protocols` | `/routes`, `/wiki/iepl-vs-iplc` | 中危 | `/routes` 301 重定向至 `/protocols`，`/wiki` 作为深度长文展开，内链指向 `/protocols` | **RESOLVED** |
| **CG-06: 客户端工具** | 代理客户端下载 | 获取 Clash Verge, Shadowrocket, v2rayN 客户端 | `/clients` | `/tutorials`, `/tools` | 低危 | `/clients` 负责软件工具总览与下载，`/tutorials` 负责配置步骤，意图互补 | **RESOLVED** |
| **CG-07: 实操配置** | 机场使用教程 | 学习如何导入订阅链接、配置规则、TUN 模式 | `/tutorials` | `/clients`, `/wiki` | 低危 | 明确教程定义：仅承接动手配置、一键导入与订阅更新排障 | **RESOLVED** |
| **CG-08: 海外访问痛点** | 国外网站打不开 | 寻找 ChatGPT/Google/GitHub/Netflix 打不开的解决方案 | `/issues` | `/troubleshooting`, `/solutions` | 高危 | `/troubleshooting` 301 映射至 `/issues`，并在 `/issues` 深度承接 12 类场景与报错排错 | **RESOLVED** |
| **CG-09: AI与流媒体** | ChatGPT与流媒体解锁 | 解决 Access Denied、Netflix 4K、TikTok 住宅双 ISP | `/ai-streaming` | `/recommend#scenes`, `/wiki/chatgpt-claude-unblock` | 中危 | 确立 `/ai-streaming` 为场景专区，百科长文作为深度支撑回链 | **RESOLVED** |
| **CG-10: 跑路与安全** | 机场跑路预警 | 监测机场失联跑路信号、资金安全与避坑守则 | `/risk` | `/intel`, `/risk-warning` | 低危 | `/intel` 301 映射至 `/risk`，打造权威风险档案雷达 | **RESOLVED** |
| **CG-11: 品牌实体评测** | [品牌名]怎么样 | 查询特定机场官网入口、测速表现、是否跑路、优惠码 | `/reviews/[slug]` | `/brands/[slug]`, `/reviews` | 极高 | 167 品牌全部单页挂载，统一 Canonical，`/brands/*` 全量 301，正文主词必须为“品牌名+评测” | **RESOLVED** |

---

## 二、防内耗硬性约束记录
1. **Pillar 与 Cluster 明确分工**：所有 Cluster 必须包含回链指向对应 Pillar，Pillar 页面自然锚定 Cluster。
2. **内链锚文本强一致性**：全站锚文本 100% 遵照 `SEO-Anchor-URL-Mapping.csv`，严禁同一锚文本指向不同目标。
3. **首 500 字差异化**：严禁各页面统一使用“随着互联网发展……”等模板开场，第一段直接命中当前意图核心痛点。
4. **FAQ 严禁机械复刻**：各页面 FAQ 必须针对当前意图定制，输出独立的 `FAQPage` JSON-LD Schema。
