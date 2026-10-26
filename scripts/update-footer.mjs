import fs from 'fs';

let footer = fs.readFileSync('src/components/sections/Footer.astro', 'utf8');

const target = `  about: [
    { name: "关于机场榜一", url: "/about" },
    { name: "评测与测速规范", url: "/tutorials" },
    { name: "风险与免责声明", url: "/risk" },
    { name: "网站地图与架构", url: "/providers" },
  ],`;

const replacement = `  about: [
    { name: "关于机场榜一", url: "/about" },
    { name: "评测方法与标准", url: "/methodology" },
    { name: "推广与商业披露", url: "/disclosure" },
    { name: "隐私保护政策", url: "/privacy" },
    { name: "服务条款与免责", url: "/terms" },
  ],`;

if (footer.includes(target) || footer.replace(/\r\n/g, '\n').includes(target.replace(/\r\n/g, '\n'))) {
  footer = footer.replace(/\r\n/g, '\n').replace(target.replace(/\r\n/g, '\n'), replacement.replace(/\r\n/g, '\n'));
  fs.writeFileSync('src/components/sections/Footer.astro', footer, 'utf8');
  console.log('Footer updated successfully!');
} else {
  console.log('Target string not found in footer!');
}
