import fs from 'fs';

let jsonLd = fs.readFileSync('src/components/seo/JsonLd.astro', 'utf8');

// Add 'Review' to Props interface
jsonLd = jsonLd.replace(
  "type?: 'WebSite' | 'Organization' | 'FAQPage' | 'ItemList' | 'BreadcrumbList' | 'Article' | 'HowTo' | 'WebPage' | 'CollectionPage';",
  "type?: 'WebSite' | 'Organization' | 'FAQPage' | 'ItemList' | 'BreadcrumbList' | 'Article' | 'Review' | 'HowTo' | 'WebPage' | 'CollectionPage';"
);

// Add Review handling block before "else if (type === 'HowTo'"
const reviewBlock = `} else if (type === 'Review' && data) {
  jsonLdPayload = {
    "@context": "https://schema.org",
    "@type": "Review",
    "name": data.title,
    "headline": data.title,
    "reviewBody": data.description,
    "itemReviewed": {
      "@type": "Product",
      "name": data.airportName,
      "description": data.description,
      "brand": {
        "@type": "Brand",
        "name": data.airportName
      },
      "offers": {
        "@type": "Offer",
        "price": data.monthlyPrice,
        "priceCurrency": "CNY",
        "availability": "https://schema.org/InStock"
      }
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": data.score,
      "bestRating": "10",
      "worstRating": "1"
    },
    "author": {
      "@type": "Person",
      "name": "机场榜网络技术评测组",
      "jobTitle": "资深网络评测工程师"
    },
    "publisher": {
      "@type": "Organization",
      "name": "机场榜一",
      "url": "https://jichangbang.org"
    },
    "datePublished": "2026-08-19",
    "dateModified": "2026-10-26"
  };
`;

if (!jsonLd.includes('"@type": "Review"')) {
  jsonLd = jsonLd.replace("} else if (type === 'Article' && article) {", reviewBlock + "} else if (type === 'Article' && article) {");
  fs.writeFileSync('src/components/seo/JsonLd.astro', jsonLd, 'utf8');
  console.log('JsonLd.astro updated with Review Schema support!');
} else {
  console.log('Review Schema already in JsonLd.astro');
}
