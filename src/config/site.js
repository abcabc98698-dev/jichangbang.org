// 站点基础配置 - 机场榜一 (jichangbang.org)
const SITE_URL = import.meta.env.PUBLIC_SITE_URL || 'https://jichangbang.org';

export const siteConfig = {
	title: "机场榜一",
	name: "机场榜一",
	author: "机场榜一团队",
	url: SITE_URL,
	mail: "contact@jichangbang.org",
	slogan: "2026 性价比机场推荐榜 · 稳定好用机场推荐更新",
	utm: {
		source: `${SITE_URL}`,
		medium: "referral",
		campaign: "navigation",
	},
	meta: {
		title: "机场榜一 — 2026性价比机场推荐榜 · VPN免费翻墙机场测评与稳定好用机场推荐更新",
		description: "机场榜一 (jichangbang.org) 专注提供客观真实的 2026 性价比机场推荐榜、VPN 免费翻墙与专线机场测评、价格套餐对比与客户端教程。覆盖 IEPL/IPLC 专线、ChatGPT/Claude 解锁、Netflix 4K 流媒体与稳定好用机场推荐更新。",
		keywords: "2026性价比机场推荐榜, VPN, 免费翻墙, 机场测评, 稳定好用机场推荐更新, 机场推荐, 2026机场推荐, 机场排行榜, 机场哪个好, 高性价比机场, 便宜机场, 专线机场, IPLC机场, IEPL机场, ChatGPT机场, 机场榜一",
		image: `${SITE_URL}/og.jpg`,
		twitterHandle: "@jichangbang",
	},
	social: {
		twitter: "https://x.com/jichangbang",
		twitterName: "jichangbang",
		telegram: "https://t.me/jichangbang",
		github: "https://github.com/jichangbang",
		rss: "/rss.xml",
	},
	// 站长平台验证配置 (可通过环境变量或此处直接填入对应验证代码)
	verification: {
		google: import.meta.env.PUBLIC_GOOGLE_SITE_VERIFICATION || '',
		bing: import.meta.env.PUBLIC_BING_SITE_VERIFICATION || '', // msvalidate.01
		baidu: import.meta.env.PUBLIC_BAIDU_SITE_VERIFICATION || '', // baidu-site-verification
		shenma: import.meta.env.PUBLIC_SHENMA_SITE_VERIFICATION || '', // shenma-site-verification
	},
};

// 页脚社交与快捷外链
export const socialLinks = [
	{
		name: 'Telegram',
		url: 'https://t.me/jichangbang',
		icon: `<svg class="icon ic-tg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.93-1.28 4.88-2.12 5.86-2.54 2.79-1.16 3.37-1.36 3.75-1.37.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z"/></svg>`
	},
	{
		name: 'RSS',
		url: '/rss.xml',
		icon: `<svg class="icon ic-rss" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M329.143 768q0 45.714-32 77.714t-77.714 32-77.715-32-32-77.714 32-77.714 77.715-32 77.714 32 32 77.714z m292.571 70.286q1.143 16-9.714 27.428-10.286 12-26.857 12H508q-14.286 0-24.571-9.428T472 844.57q-12.571-130.857-105.429-223.714T142.857 515.43q-14.286-1.143-23.714-11.429t-9.429-24.571v-77.143q0-16.572 12-26.857 9.715-9.715 24.572-9.715h2.857q91.428 7.429 174.857 46T472 515.43q65.143 64.571 103.714 148t46 174.857z m292.572 1.143q1.143 15.428-10.286 26.857-10.286 11.428-26.286 11.428H796q-14.857 0-25.429-10T759.43 843.43Q752.57 720.57 701.714 610T569.43 418t-192-132.286T144 227.43q-14.286-0.572-24.286-11.143t-10-24.857v-81.715q0-16 11.429-26.285 10.286-10.286 25.143-10.286H148q149.714 7.428 286.571 68.571t243.143 168q106.857 106.286 168 243.143t68.572 286.572z" fill="currentColor"></path></svg>`
	},
];