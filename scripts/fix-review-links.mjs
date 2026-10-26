import fs from 'fs';

let content = fs.readFileSync('src/pages/reviews/[slug].astro', 'utf8');

content = content.replaceAll(
  'https://guangs.vipaff.cc/#/?code=xhX5X22f',
  'https://sahude.gsyvipaff.com/#/?code=keqgvT5Y'
);

content = content.replaceAll(
  'rel="noopener noreferrer"',
  'rel="nofollow sponsored noopener"'
);

fs.writeFileSync('src/pages/reviews/[slug].astro', content, 'utf8');
console.log('Successfully updated reviews/[slug].astro links and rel attributes');
