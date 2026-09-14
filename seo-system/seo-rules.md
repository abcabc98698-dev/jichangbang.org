# 机场榜一 (jichangbang.org) - SEO / GEO 规范手册与内容决策指南

本文档为 `jichangbang.org` 的核心搜索策略与防内耗（Anti-Cannibalization）规范，适用于所有未来的内容更新、页面扩展、SEO 优化与 GEO（Generative Engine Optimization）落地。

---

## 一、最高优先级保护原则

1. **主题与 UI 零侵入保护**：
   - 严禁任何形式的主题重构、视觉样式篡改或 Tailwind / CSS 配置推翻。
   - 所有 SEO/GEO 优化均通过底层数据层、Head 标签、JSON-LD、Sitemap、robots.txt、RSS、IndexNow 和内链拓扑实现，保持前端视觉与交互体验 100% 连贯。
2. **存量 URL 永久保护**：
   - 所有在 `seo-system/existing-url-registry.json` 中标记为 `"protected": true` 的 37 个正式页面 URL 属于受保护核心资产。
   - 严禁为了“统一 URL 格式”而强行重命名、迁移或删除已有有效页面。
3. **内容质量优先原则**：
   - 系统支持大规模扩展，但不等于盲目生成。
   - 严禁批量拼接 AI 低质页面，严禁创建无信息增量的翻版页面。

---

## 二、关键词决策流程与防内耗机制 (Anti-Cannibalization)

### 1. 决策流向链条
任何新词或长尾词进入系统，必须严格遵循以下单向决策流：

```text
新关键词输入
    ↓
1. 识别核心搜索意图 (Search Intent)
    ↓
2. 识别相关实体 (Entity: 品牌/协议/客户端/流媒体/场景)
    ↓
3. 查询 seo-system/existing-url-registry.json
    ↓
4. 判断现有页面是否已能承载该意图？
   ├─【是】→ 复用现有 URL (createNewPage: false)
   │         └─ 作为 Secondary Keyword / H2 / H3 / FAQ 补充进现有页面
   │         └─ 建立锚文本映射，增加内链权重
   │
   └─【否】→ 评估是否具有独立 Landing Page 价值 (深度/差异/搜索量)
             ├─【不满足】→ 降级为 IGNORE 或 MERGE
             └─【满足】  → 规划新 URL，进入审查队列 (createNewPage: true)
```

### 2. 关键词优先级评级
- **A (最高优先级)**：核心商业转化词、高流量枢纽词，优先优化现有页面或高规格建页。
- **B (规划创建)**：具备独立商业/技术价值且现有页面无法承接的长尾主题。
- **C (后续补充)**：低竞争、长尾辅助词，后续排期更新。
- **MERGE (合并)**：意图与现有页面重合（如“机场推荐”与“2026好用机场推荐”），强制合并至既有主 URL，禁止开辟新 URL。
- **IGNORE (忽略)**：无搜索价值、无信息增量或无效噪音词，无需创建独立页面。

---

## 三、新 URL 生成架构规范 (仅适用于未来新增页面)

未来经批准新增的页面，必须严格遵循以下 URL 结构，层级最大不超过 3 级（`domain.com/category/topic/`）：

| 命名空间 | 用途与搜索意图 | 示例 |
| :--- | :--- | :--- |
| `/category/` | 一级核心分类、行业入口词、Pillar Page | `/category/reviews/` |
| `/topics/` | 专项聚合 Hub（如工具、特定生态） | `/topics/clash/` |
| `/tutorials/` | 操作指南、安装配置、订阅导入教程 (How-To) | `/tutorials/clash-verge-setup/` |
| `/problems/` | 故障诊断、错误代码、超时报错排查 (Troubleshooting) | `/problems/connection-timeout/` |
| `/brands/` | 唯一品牌实体档案页 (Entity) | `/brands/guangsu/` |
| `/reviews/` | 独立深度综合测评报告 (In-depth Review) | `/reviews/guangsu-review/` |
| `/compare/` | 双雄对决、产品横向参数 PK (Comparison) | `/compare/guangsu-vs-yuzhou/` |
| `/clients/` | 客户端下载与使用汇总 (Download/Tool) | `/clients/sing-box/` |
| `/wiki/` | 常青科普知识百科、网络协议与硬件原理 (Evergreen Wiki) | `/wiki/what-is-double-isp/` |
| `/pricing/` | 资费分级与价格计算器 (Commercial Budget) | `/pricing/` |
| `/risk/` | 风险情报预警、跑路黑名单与节点检修跟踪 (Risk & Trust) | `/risk/` |

### URL 格式五大硬性约束：
1. **字符集**：仅限小写英文 `[a-z]`、数字 `[0-9]` 与连字符 `-`。
2. **严禁符号**：严禁大写字母、下划线 `_`、中文拼音及汉字字符。
3. **词数控制**：Slug 保持在 1~3 个有意义的自然英语单词，禁止堆砌短语。
4. **反 AI 农场指纹**：严禁出现 `/article-01/`、`/page-2/` 等机械编号。
5. **去时间戳**：严禁在路径中带有年份、月份、日期目录（如 `/2026/09/`）。

---

## 四、GEO (Generative Engine Optimization) 内容结构准则

为了确保内容能被 AI 搜索引擎（如 Perplexity, SearchGPT, Google Gemini Search, Bing Copilot）高效采纳为直接答案，新撰写内容应采纳如下结构：

1. **直接答案胶囊 (Answer Capsule)**：
   - 文章首屏或每个核心 H2 下方，提供 50~100 字的精炼直接结论，使用事实陈述句，直接解答用户核心疑问。
2. **倒金字塔结构**：
   - 核心结论与实测数据在先，原理机制与拓展背景在后。
3. **结构化数据与对比表格**：
   - 优先使用 Markdown 表格、编号步骤列表（`1. 2. 3.`）和真实测试数据。
4. **FAQ 语义块**：
   - 文末配置 3~5 个针对性高频问题，紧贴长尾疑问，并同步映射至 `FAQPage` Schema。
5. **去模型化文风**：
   - 避免无信息增量的泛泛之谈、公文套话或空洞的开场白/总结段落。

---

## 五、内部链接网状拓扑 (Internal Links)

1. **层级垂直链接**：
   - Supporting Content (Tutorial/Problem/Review) 必须包含指向所属 Topic Hub 和 Pillar 的链接。
   - Pillar Page 必须具备指向其核心 Hub 与高优先级 Cluster 页面的导航。
2. **横向对等链接**：
   - Problem ↔ Tutorial（故障排查与正确配置教程互相导流）。
   - Review ↔ Brand / Comparison（评测报告与参数数据库相互引用）。
3. **孤岛页面绝对清零**：
   - 任何新页面上线前，必须在至少 2 个现有相关页面中建立明确锚文本链接。
   - 锚文本必须精准体现目标页核心关键词，严禁同一锚文本指向不同页面。

---

## 六、结构化数据 (JSON-LD) 规范

1. **全站基础层**：
   - 全局加载 `Organization` 与 `WebSite` Schema，指明官方网站、Logo 与定位。
2. **内容类型精准匹配**：
   - 百科/常青文章：必须输出 `Article` Schema，声明 `headline`, `datePublished`, `dateModified`, `author`。
   - 教程页面：必须输出真实合规的 `HowTo` Schema，包含 `HowToStep`，严禁虚构步骤。
   - 问答模块：存在问答块的页面输出 `FAQPage` Schema，问答须与页面正文完全一致。
   - 导航层级：输出 `BreadcrumbList` Schema，反映真实目录层级。
3. **域名唯一性**：
   - 所有 Schema 内部的 `@id`, `url`, `logo` 必须统一使用规范 Apex 域名：`https://jichangbang.org`。

---

## 七、Search Discovery 与主动推送 (IndexNow)

1. **增量提交机制**：
   - 通过 `seo-system/indexnow-state.json` 记录构建产生的 URL 哈希或时间戳。
   - 仅将新增（Added）、修改（Updated）或移除（Removed）的 URL 提交给 IndexNow API，严禁每次构建无差别全量轰炸提交。
2. **Sitemap 纯净性**：
   - `sitemap-index.xml` 与子 sitemap 仅允许收录返回 HTTP 200 的 Canonical 页面。
   - 严禁收录 301 重定向、404 错误页、带参数 URL 或 `noindex` 页面。
3. **Robots.txt 守则**：
   - 允许所有搜索引擎抓取合法内容（`User-agent: *`, `Allow: /`），并明确指向 `https://jichangbang.org/sitemap-index.xml`。
