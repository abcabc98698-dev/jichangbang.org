# SEO Anti-AI URL Architecture Optimization System V1.0
## 网站底层 URL 防批量 AI 识别优化系统实施规范

本文档为 **机场榜一 (jichangbang.org)** 专属底层 URL 架构设计与长期演进规范。核心目标是通过自然、语义化、Topic Cluster 驱动与意图隔离的目录设计，彻底消除被搜索引擎（Google / Bing / AI Search）标记为“批量 AI 生成站、内容农场”的技术指纹。

---

### 一、当前 URL 结构全量分析报告

#### 1. 存量 URL 密度统计 (共 187 个有效页面)
- **网站根首页** (`/`): 1 个
- **商业推荐与排行** (`/recommend/`, `/ranking/`, `/compare/`, `/pricing/`): 4 个
- **品牌数据库与评测大盘** (`/providers/`, `/reviews/`): 2 个
- **品牌独立深度评测** (`/reviews/[slug]/`): 167 个
- **网络技术与客户端教程** (`/protocols/`, `/tutorials/`, `/clients/`): 3 个
- **故障排除与安全情报** (`/issues/`, `/risk/`): 2 个
- **专项场景与知识百科** (`/ai-streaming/`, `/wiki/`, `/wiki/[slug]`): 6 个
- **公司信息与法律** (`/about/`): 1 个
- **自定义 404 容灾页**: 1 个

#### 2. 底层架构优缺点评估
- **合规优势**：
  - 全站 100% 采用语义化小写英文短词与中划线命名（Kebab-case）。
  - 杜绝了 `/article/001`、`/post/1001` 等机械递增编号。
  - 杜绝了 `/2026/08/` 等典型自动化采集站的时间驱动路径。
  - 100% 配置绝对自引用 Apex Canonical URL，消除了路径末尾斜杠（Trailing Slash）导致的权重分散。
- **潜在风险点**：
  - `/reviews/` 目录下集中了 167 个品牌评测，属于典型的单目录高密度扁平结构（Flat Overload）。在搜索引擎 SpamBrain 检测模型中，若单目录无二级语义折叠且模板高度相似，存在触发批量生成审查的风险。

---

### 二、优化后的 URL 架构与 6 大 Topic Cluster 意图空间

为防止内容农场特征，全站实施**严格的搜索意图隔离（Search Intent Isolation）**，最大物理层级严控在 3 级以内：

```text
jichangbang.org (Domain)
│
├── 1. 商业推荐与决策集群 (Commercial Selection Cluster)
│   ├── /recommend/             # [Pillar] 2026 机场推荐与综合选购指南
│   ├── /ranking/               # [Cluster] 实时测速综合性能排行榜单
│   └── /compare/               # [Cluster] 多品牌参数横向对比决策工具
│
├── 2. 品牌深度评测与数据库集群 (Brand Reviews & Directory Cluster)
│   ├── /providers/             # [Pillar] 全网 167+ 机场品牌官方数据库大盘
│   ├── /reviews/               # [Hub] 评测中心总览大厅 (带即时搜索检索)
│   └── /reviews/[slug]/        # [Single] 品牌深度实测与全景报告 (149 家万字矩阵)
│
├── 3. 网络协议与技术百科集群 (Protocols & Technical Academy Cluster)
│   ├── /protocols/             # [Pillar] 专线与跨境协议百科 (IEPL/IPLC/BGP/VLESS)
│   ├── /tutorials/             # [Cluster] 全平台客户端操作实操配置步骤
│   └── /clients/               # [Cluster] 开源代理工具与客户端生态总览
│
├── 4. 故障排查与安全情报集群 (Security & Intelligence Cluster)
│   ├── /risk/                  # [Pillar] 机场跑路预警雷达与资金安全指南
│   └── /issues/                # [Cluster] Access Denied / 节点超时排错手册
│
├── 5. 垂直专题与知识库集群 (Topic Hub & Long-form Knowledge Cluster)
│   ├── /wiki/                  # [Pillar] 机场前沿知识百科库
│   └── /wiki/[slug]/           # [Cluster] 独立万字长篇技术与行业专题
│
└── 6. 特殊应用场景专区 (Scenario-specific Hub)
    └── /ai-streaming/          # [Pillar] ChatGPT/Claude 原生解锁与流媒体 4K 专区
```

---

### 三、旧 URL 301 迁移与重定向规则

所有历史废弃路径与重组路径严格配置单跳 301 永久重定向，并同步记录于 `src/config/redirect-map.json` 与 `seo-system/redirects.json`：

| 历史废弃路径 | 301 目标新路径 | 迁移意图匹配依据 |
| :--- | :--- | :--- |
| `/blog` | `/wiki` | 从泛博客迁移至专业结构化知识百科 |
| `/blog/[...slug]` | `/wiki/[...slug]` | 深度长文一对一权重无损平移 |
| `/brands` | `/providers` | 品牌大盘规范语义化 |
| `/brands/[slug]` | `/reviews/[slug]` | 评测单页统一收敛至 reviews 意图空间 |
| `/routes` | `/protocols` | 技术线路统一收敛至协议百科 |
| `/troubleshooting` | `/issues` | 故障排查语义精简 |
| `/intel` | `/risk` | 风险情报统一到 risk 命名空间 |
| `/features` | `/` | 冗余模板页收敛至首页 |
| `/pricing` (冗余部分) | `/recommend` | 价格选购引导收敛至商业推荐枢纽 |

---

### 四、新 URL 生成与增长规范

任何未来新增页面必须严格遵循以下黄金法则：
1. **命名三原则**：
   - 纯小写英文字母 + 减号（`-`），严禁任何下划线（`_`）、大写字母、中文编码或数字序列。
   - 单个 Slug 关键词数量严控在 1 至 3 个核心语义词（如 `chatgpt-guide`，禁止 `best-chatgpt-ai-free-tool-2026`）。
2. **层级深度上限**：
   - 结构必须符合：`域名 / 目录 (Pillar) / [子主题 (Cluster)] / 具体页面`。
   - 禁止超过 3 级（严禁出现 `/a/b/c/d/e/page`）。
3. **意图唯一性原则**：
   - 严禁两个页面竞争同一核心搜索词。
   - `guide` 专属综合导购与体系入口；`tutorial` 专属步骤操作指南；`reviews` 专属单个品牌深度评测；`wiki` 专属概念与深度原理解构。
4. **参数阻断与索引保护**：
   - `public/robots.txt` 明确配置 `Disallow: /*?*`、`Disallow: /*?`、`Disallow: /*&`，严禁动态参数 URL 被爬虫抓取产生重复页面。

---

### 五、自动生成 URL 审查机制与工具链

项目已部署专属自动化审查脚本 `scripts/seo-url-audit.mjs`，并通过 npm scripts 挂载：
```bash
pnpm run audit:url
```

#### 自动化拦截审查项：
1. **机械编号检测**：正则匹配 `/(article|post|page|item)?[_-]?\d{2,}$/i`，触发即阻断。
2. **时间戳路径检测**：正则匹配 `/\d{4}\/\d{2}/`，防止时间驱动伪静态暴露。
3. **层级超限检测**：路径分段统计，超过 3 层自动报错。
4. **字符合法性检测**：严格匹配 `^[a-z0-9\-]+$`。
5. **关键词堆叠检测**：单个 Slug 中划线分词超过 5 个自动拦截。
6. **单目录扁平超载预警**：单目录直属页面超过 50 项时发出架构细分预警。
7. **参数阻断验证**：自动校验 `robots.txt` 是否有效屏蔽 Query String。

---

### 六、多维度 Sitemap 隔离系统

废弃单一单体 Sitemap 模式，采用 5 维专业意图细分 Sitemap，由 `scripts/split-sitemaps.mjs` 自动维护：
- `https://jichangbang.org/sitemap-index.xml`（主索引入口）
- `https://jichangbang.org/sitemap-main.xml`（核心枢纽与大盘：`/`, `/about`, `/recommend`, `/ranking`, `/compare`）
- `https://jichangbang.org/sitemap-reviews.xml`（168 个品牌深度评测独立专属）
- `https://jichangbang.org/sitemap-providers.xml`（品牌数据库大盘）
- `https://jichangbang.org/sitemap-wiki.xml`（长篇技术专题与知识百科）
- `https://jichangbang.org/sitemap-guides.xml`（技术实操、协议与排障指南）
