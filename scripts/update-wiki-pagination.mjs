import fs from 'fs';

let content = fs.readFileSync('src/pages/wiki/page/[page].astro', 'utf8');

content = content.replace(
  'const { page } = Astro.props;\nconst currentPage = parseInt(page);',
  'const { page } = Astro.props;\nconst currentPage = parseInt(page);\n\nif (currentPage === 1) {\n  return Astro.redirect("/wiki/", 301);\n}'
);

content = content.replace(
  'title="出海网络常青知识百科"',
  'title={currentPage > 1 ? `出海网络常青知识百科 (第 ${currentPage} 页)` : "出海网络常青知识百科"}'
);

fs.writeFileSync('src/pages/wiki/page/[page].astro', content, 'utf8');
console.log('src/pages/wiki/page/[page].astro updated successfully!');
