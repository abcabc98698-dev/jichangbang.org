import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const blog = await getCollection('post');
  return rss({
    title: '机场榜一 — 2026稳定好用机场推荐与实时综合排行榜',
    description: '机场榜一 (jichangbang.org) 官方订阅源：客观实测机场推荐、晚高峰测速数据与跑路预警情报。',
    site: context.site,
    items: blog.map((post) => {
      const link = `/wiki/${post.id}/`;
      return {
        title: post.data.title,
        pubDate: post.data.publishDate,
        description: post.data.description,
        link,
        stylesheet: '/rss/pretty-feed-v3.xsl',
      };
    }),
  });
}