const fs = require('fs');
const path = require('path');

function countArticleMetrics(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const stat = fs.statSync(filePath);

  // 移除 frontmatter
  let text = content.replace(/^---[\s\S]*?---\n/, '');

  // 移除代码块与 Mermaid
  text = text.replace(/```[\s\S]*?```/g, '');

  // 移除行内代码
  text = text.replace(/`[^`]+`/g, '');

  // 移除 HTML 标签
  text = text.replace(/<[^>]+>/g, '');

  // 移除 Markdown 链接但保留锚文本: [text](url) -> text
  text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');

  // 移除 Markdown 图片
  text = text.replace(/!\[([^\]]*)\]\([^)]+\)/g, '');

  // 移除 Markdown 标号和符号 (#, *, >, -, |, 等)
  text = text.replace(/^[#>\-*+\d\.\s|:]+/gm, '');
  text = text.replace(/[|#*~`]/g, '');

  // 纯中文字符匹配 (CJK Unified Ideographs: \u4e00-\u9fa5)
  const chineseMatches = text.match(/[\u4e00-\u9fa5]/g) || [];
  const pureChineseCount = chineseMatches.length;

  // 统计 H2 和 H3 数量
  const h2Count = (content.match(/^##\s+/gm) || []).length;
  const h3Count = (content.match(/^###\s+/gm) || []).length;

  // 统计代码块与 Mermaid
  const mermaidCount = (content.match(/```mermaid/g) || []).length;
  const codeBlocksCount = (content.match(/```/g) || []).length / 2;

  // 统计案例与 FAQ
  const caseMatches = (content.match(/案例[一二三四五六七八九十\d]/g) || []).length;
  const faqMatches = (content.match(/^###\s+(?:Q\d+|常见问题|\d+\.)/gm) || []).length;

  console.log('====================================================');
  console.log('📊 文章自动验收与纯中文字数统计报告');
  console.log('====================================================');
  console.log(`文件路径: ${filePath}`);
  console.log(`文件大小: ${(stat.size / 1024).toFixed(2)} KB`);
  console.log(`纯中文字符数: ${pureChineseCount}`);
  console.log(`H2 核心章节数: ${h2Count}`);
  console.log(`H3 子章节数: ${h3Count}`);
  console.log(`Mermaid 架构图: ${mermaidCount}`);
  console.log(`代码块/配置示例: ${codeBlocksCount}`);
  console.log(`排障实战案例: ${caseMatches}`);
  console.log(`常见问题 FAQ: ${faqMatches}`);
  console.log('----------------------------------------------------');
  console.log(`正文最低硬性要求: 7,500 个纯中文字符`);
  
  if (pureChineseCount >= 7500) {
    console.log(`🎉 最终验收结果: PASS (${pureChineseCount} >= 7500)`);
    return true;
  } else {
    console.log(`❌ 最终验收结果: FAIL (${pureChineseCount} < 7500, 还缺 ${7500 - pureChineseCount} 字)`);
    return false;
  }
}

const targetFile = process.argv[2] || path.join(__dirname, '../2026-airport-buying-guide.md');
if (fs.existsSync(targetFile)) {
  const passed = countArticleMetrics(targetFile);
  process.exit(passed ? 0 : 1);
} else {
  console.error(`Target file does not exist: ${targetFile}`);
  process.exit(1);
}
