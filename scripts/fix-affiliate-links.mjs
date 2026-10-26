import fs from 'fs';

// 1. src/pages/pricing.astro
let pricing = fs.readFileSync('src/pages/pricing.astro', 'utf8');
pricing = pricing.replace(
  'rel="noopener noreferrer"\n                      class="px-2.5 py-1 rounded bg-primary text-white hover:opacity-90 text-[11px] font-semibold"',
  'rel="noopener noreferrer nofollow sponsored"\n                      class="px-2.5 py-1 rounded bg-primary text-white hover:opacity-90 text-[11px] font-semibold"'
);
pricing = pricing.replace(
  'href="https://gsy001.xyz"\n              target="_blank"\n              rel="noopener noreferrer"',
  'href="https://gsy001.xyz"\n              target="_blank"\n              rel="noopener noreferrer nofollow sponsored"'
);
pricing = pricing.replace(
  'href="https://gsy001.xyz"\n                target="_blank"\n                rel="noopener noreferrer"',
  'href="https://gsy001.xyz"\n                target="_blank"\n                rel="noopener noreferrer nofollow sponsored"'
);
fs.writeFileSync('src/pages/pricing.astro', pricing, 'utf8');
console.log('Fixed src/pages/pricing.astro');

// 2. src/pages/providers/index.astro
let providers = fs.readFileSync('src/pages/providers/index.astro', 'utf8');
providers = providers.replace(
  'href={item.affiliateUrl}\n                        target="_blank"\n                        rel="noopener noreferrer"',
  'href={item.affiliateUrl}\n                        target="_blank"\n                        rel="noopener noreferrer nofollow sponsored"'
);
fs.writeFileSync('src/pages/providers/index.astro', providers, 'utf8');
console.log('Fixed src/pages/providers/index.astro');

// 3. src/pages/compare.astro
let compare = fs.readFileSync('src/pages/compare.astro', 'utf8');
compare = compare.replace(
  'href="https://guangsu.cloud" target="_blank" rel="noopener noreferrer nofollow"',
  'href="https://guangsu.cloud" target="_blank" rel="noopener noreferrer nofollow sponsored"'
);
compare = compare.replace(
  'href="https://yuzhou.cloud" target="_blank" rel="noopener noreferrer nofollow"',
  'href="https://yuzhou.cloud" target="_blank" rel="noopener noreferrer nofollow sponsored"'
);
compare = compare.replace(
  'href={airport.affiliateUrl}\n                    target="_blank"\n                    rel="noopener noreferrer nofollow"',
  'href={airport.affiliateUrl}\n                    target="_blank"\n                    rel="noopener noreferrer nofollow sponsored"'
);
fs.writeFileSync('src/pages/compare.astro', compare, 'utf8');
console.log('Fixed src/pages/compare.astro');

// 4. src/pages/ranking.astro
let ranking = fs.readFileSync('src/pages/ranking.astro', 'utf8');
ranking = ranking.replace(
  'href={airport.affiliateUrl}\n                    target="_blank"\n                    rel="noopener noreferrer nofollow"',
  'href={airport.affiliateUrl}\n                    target="_blank"\n                    rel="noopener noreferrer nofollow sponsored"'
);
ranking = ranking.replace(
  '<a href={airport.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow" class="text-neutral-500 hover:text-neutral-700">官网</a>',
  '<a href={airport.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow sponsored" class="text-neutral-500 hover:text-neutral-700">官网</a>'
);
fs.writeFileSync('src/pages/ranking.astro', ranking, 'utf8');
console.log('Fixed src/pages/ranking.astro');

// 5. src/pages/recommend.astro
let recommend = fs.readFileSync('src/pages/recommend.astro', 'utf8');
recommend = recommend.replace(
  'href={topGoldAirport.affiliateUrl}\n              target="_blank"\n              rel="noopener noreferrer nofollow"',
  'href={topGoldAirport.affiliateUrl}\n              target="_blank"\n              rel="noopener noreferrer nofollow sponsored"'
);
recommend = recommend.replace(
  '<a href={airport.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow" class="text-[11px] px-2.5 py-1 rounded bg-bg-primary dark:bg-neutral-800 border border-primary/20 hover:border-primary text-neutral-700 dark:text-neutral-200">',
  '<a href={airport.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow sponsored" class="text-[11px] px-2.5 py-1 rounded bg-bg-primary dark:bg-neutral-800 border border-primary/20 hover:border-primary text-neutral-700 dark:text-neutral-200">'
);
recommend = recommend.replace(
  '<a href={airport.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow" class="text-[11px] px-2 py-0.5 rounded border border-primary/20 text-neutral-700 dark:text-neutral-300">入口</a>',
  '<a href={airport.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow sponsored" class="text-[11px] px-2 py-0.5 rounded border border-primary/20 text-neutral-700 dark:text-neutral-300">入口</a>'
);
fs.writeFileSync('src/pages/recommend.astro', recommend, 'utf8');
console.log('Fixed src/pages/recommend.astro');

// 6. src/pages/reviews/index.astro
let reviewsIndex = fs.readFileSync('src/pages/reviews/index.astro', 'utf8');
reviewsIndex = reviewsIndex.replace(
  'href="https://guangs.vipaff.cc/#/?code=xhX5X22f"\n          target="_blank"\n          rel="noopener noreferrer"',
  'href="https://guangs.vipaff.cc/#/?code=xhX5X22f"\n          target="_blank"\n          rel="noopener noreferrer nofollow sponsored"'
);
fs.writeFileSync('src/pages/reviews/index.astro', reviewsIndex, 'utf8');
console.log('Fixed src/pages/reviews/index.astro');
