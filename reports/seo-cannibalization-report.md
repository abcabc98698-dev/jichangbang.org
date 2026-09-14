# 全站 SEO 关键词防内耗与冲突监控总报告

> 本报告基于《反重力 SEO 内容生产与关键词防内耗总规范》建立，记录全站已识别的关键词潜在冲突组、搜索意图隔离方案、已执行的重定向治理与常态化防内耗监控状态。

---

## 一、防内耗治理总览 (Summary)

- **主搜索意图空间数量：** 12 个独立意图命名空间（100% 隔离）
- **已识别历史冲突组 (Conflict Groups)：** 6 组
- **已解决冲突组：** 6 组 (100% 治理完毕)
- **活动竞争 URL (Active Competing URLs)：** 0
- **全站 301 永久重定向映射：** 34 条物理生效
- **规范执行状态：** 全面强制执行中 (STRICT ENFORCEMENT)

---

## 二、冲突组治理清单 (Conflict Groups Registry)

| Conflict Group | Primary Keyword | Search Intent | Primary URL | Competing URLs (Historical) | Risk Level | Recommended Action | Current Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **CG-01: 推荐 vs 排行** | 机场推荐 | 商业转化 vs 量化打分 | `/recommend` (推荐)<br>`/ranking` (排行) | 历史首页模块混合抢词 | High | **Reposition & Split**：`/recommend` 专注人群分层转化；`/ranking` 专注晚高峰实测打分天梯 | **Resolved** (完全分流) |
| **CG-02: 品牌库 vs 评测** | 机场评测 | 深度评测 vs 参数大盘 | `/reviews` (评测大厅)<br>`/providers` (数据库) | `/brands` (混杂了列表与详情) | High | **Split & 301**：拆分为 `/reviews`（测速截图与评测报告）与 `/providers`（纯技术参数表格），`/brands` 301 重定向至 `/providers` | **Resolved** (301 生效) |
| **CG-03: 线路网络意图** | 线路与协议 | 底层骨干技术科普 | `/protocols` | `/routes` (命名模糊，易被误解为交通路由) | Medium | **Migrate & 301**：迁移至 `/protocols`，`/routes` 100% 301 重定向 | **Resolved** (301 生效) |
| **CG-04: 网络排障意图** | 网络排障 | 报错代码诊断与修复 | `/issues` | `/troubleshooting` (URL 层级深且生僻) | Medium | **Migrate & 301**：迁移至精炼短 URL `/issues`，`/troubleshooting` 100% 301 重定向 | **Resolved** (301 生效) |
| **CG-05: 跑路雷达意图** | 机场风险情报 | 安全预警与失联雷达 | `/risk` | `/intel` (机构情报腔，与用户搜索词脱节) | Medium | **Migrate & 301**：迁移至 `/risk`，`/intel` 100% 301 重定向 | **Resolved** (301 生效) |
| **CG-06: 百科知识库** | 常青知识百科 | 权威出海技术百科 | `/wiki` | `/blog` (典型内容农场扁平目录，混杂营销文) | High | **Dismantle & 301**：解构平铺 `/blog/`，重组为 `/wiki/` Topic Cluster，`/blog` 301 重定向 | **Resolved** (301 生效) |

---

## 三、文章创建强制前置检查流水线 (Standard Operating Procedure)

收到任何“新增文章”“扩展文章”“添加页面”“增加 10 篇 SEO 内容”的任务后：

1. **绝对禁止直接生成或创建文件。**
2. 检索 `SEO-Keyword-URL-Mapping.csv`。
3. 计算：
   - Title 相似度
   - H1 相似度
   - Keyword 相似度
   - Search Intent 相似度
   - Topic 相似度
4. 输出预检报告：
   ```markdown
   ### SEO PRE-CHECK
   - **目标关键词：** [Keyword]
   - **Search Intent：** [Intent]
   - **现有相关 URL：** [URLs]
   - **是否已有 Primary URL：** [Yes / No]
   - **潜在竞争页面：** [Competing Pages]
   - **风险等级：** [Low / Medium / High]
   - **判定决策：** [CREATE / UPDATE / MERGE / REPOSITION]
   ```
5. **只有当决策为 `CREATE` 时，才允许创建新文件。若已有 Primary URL，必须且只能选择 `UPDATE` 原页面。**
6. 完成后必须执行 `SEO POST-CHECK`，核验 Title/H1/Canonical/Schema/内链锚文本一致性。

---

## 四、常态化内耗审计指令

本项目已集成自动化防内耗审计脚本，可通过以下命令随时运行：

```bash
pnpm run audit
```

执行项目包含：
- 干净空间验证（排除残留模板、淘汰旧路由）
- URL 命名规范（小写、中划线、无拼音/数字机械翻页）
- 301 重定向图谱闭环验证（零自重定向、零死循环）
- 12 大搜索意图空间严格隔离度检验
