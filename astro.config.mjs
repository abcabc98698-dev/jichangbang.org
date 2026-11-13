import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const redirectMap = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "./src/config/redirect-map.json"), "utf-8")
);

const siteUrl = import.meta.env.PUBLIC_SITE_URL || 'https://jichangbang.org';

// Rehype plugin to automatically add loading="lazy" & decoding="async" to markdown images
function rehypeLazyImages() {
  return (tree) => {
    function visit(node) {
      if (node.type === 'element' && node.tagName === 'img') {
        node.properties = node.properties || {};
        if (!node.properties.loading) {
          node.properties.loading = 'lazy';
        }
        if (!node.properties.decoding) {
          node.properties.decoding = 'async';
        }
      }
      if (node.children) {
        node.children.forEach(visit);
      }
    }
    visit(tree);
  };
}

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  base: '/',
  trailingSlash: 'always',
  envPrefix: 'PUBLIC_',
  redirects: redirectMap,
  markdown: {
    rehypePlugins: [rehypeLazyImages]
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  },

  server: {
    port: 5200,
  },

  integrations: [
    mdx(),
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname;
        // 过滤 301 重定向占位页、旧版博客分页、/wiki/page/1/ 与 404 页，避免进入 sitemap
        if (/^\/blog\/page\/\d+\/?$/.test(pathname)) return false;
        if (pathname === '/wiki/page/1/' || pathname === '/404/' || pathname === '/404') return false;
        return true;
      }
    }),
  ],
});
