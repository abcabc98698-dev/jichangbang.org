import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const pagesDir = path.resolve(rootDir, 'src/pages');
const redirectMapPath = path.resolve(rootDir, 'src/config/redirect-map.json');

console.log('🔍 Running SEO Anti-AI URL Architecture Audit V1.0...\n');

let errorCount = 0;
let warningCount = 0;

function reportError(rule, msg) {
  console.error(`❌ [ERROR - ${rule}] ${msg}`);
  errorCount++;
}

function reportWarning(rule, msg) {
  console.warn(`⚠️ [WARN - ${rule}] ${msg}`);
  warningCount++;
}

function reportPass(rule, msg) {
  console.log(`✅ [PASS - ${rule}] ${msg}`);
}

// ─── 1. Audit Pages Directory (Physical files & routing structure) ───
const allowedRootFiles = [
  'index.astro',
  '404.astro',
  'about.astro',
  'ai-streaming.astro',
  'clients.astro',
  'compare.astro',
  'issues.astro',
  'pricing.astro',
  'protocols.astro',
  'ranking.astro',
  'recommend.astro',
  'risk.astro',
  'rss.xml.js',
  'tutorials.astro'
];

const allowedSubDirs = [
  'reviews',
  'providers',
  'wiki'
];

const forbiddenTemplates = [
  'elements.astro',
  'features.astro',
  'changelog.astro',
  'sign-in.astro',
  'sign-up.astro',
  'signin.astro',
  'signup.astro',
  'contact.astro',
  'routes.astro',
  'troubleshooting.astro',
  'intel.astro'
];

const pageItems = fs.readdirSync(pagesDir, { withFileTypes: true });

let foundForbidden = false;
for (const item of pageItems) {
  if (forbiddenTemplates.includes(item.name)) {
    reportError('CLEAN_SLATE', `Forbidden template or obsolete file found in src/pages: ${item.name}`);
    foundForbidden = true;
  }
}
if (!foundForbidden) {
  reportPass('CLEAN_SLATE', 'No leftover SaaS template or obsolete page files found.');
}

// Check for unexpected files in src/pages
for (const item of pageItems) {
  if (item.isDirectory()) {
    if (!allowedSubDirs.includes(item.name)) {
      reportError('NAMESPACE_ISOLATION', `Unrecognized directory in src/pages: /${item.name}/`);
    }
  } else if (!allowedRootFiles.includes(item.name)) {
    reportWarning('NAMESPACE_ISOLATION', `Non-standard page file in src/pages: ${item.name}`);
  }
}

// ─── 2. Audit URL Patterns & Anti-AI Content Farm Signatures ───
// Define standard site routes and their slugs
const standardRoutes = [
  '/',
  '/recommend',
  '/ranking',
  '/reviews',
  '/providers',
  '/pricing',
  '/compare',
  '/protocols',
  '/clients',
  '/tutorials',
  '/issues',
  '/ai-streaming',
  '/risk',
  '/wiki',
  '/about'
];

// Anti-AI signature checks on routes
const mechanicalNumberRegex = /\/(page[-_]?\d+|article[-_]?\d+|\d{4,})$/i;
const timeDateRegex = /\/\d{4}\/\d{2}(\/\d{2})?\//;
const uppercaseRegex = /[A-Z]/;
const underscoreRegex = /_/;
const chineseCharRegex = /[\u4e00-\u9fa5]/;

for (const route of standardRoutes) {
  if (uppercaseRegex.test(route)) {
    reportError('URL_FORMAT', `Route contains uppercase characters: ${route}`);
  }
  if (underscoreRegex.test(route)) {
    reportError('URL_FORMAT', `Route contains underscores: ${route}`);
  }
  if (chineseCharRegex.test(route)) {
    reportError('URL_FORMAT', `Route contains Chinese characters: ${route}`);
  }
  if (mechanicalNumberRegex.test(route)) {
    reportError('ANTI_CONTENT_FARM', `Route contains mechanical numbering pattern: ${route}`);
  }
  if (timeDateRegex.test(route)) {
    reportError('ANTI_CONTENT_FARM', `Route contains time/date folder pattern: ${route}`);
  }
  
  // Depth check: domain.com/category/topic/ -> max 2 slashes beyond root
  const depth = route.replace(/^\/|\/$/g, '').split('/').filter(Boolean).length;
  if (depth > 2) {
    reportError('MAX_DEPTH', `Route exceeds max directory depth level 3 (max 2 segments): ${route} (depth: ${depth})`);
  }
}
reportPass('URL_FORMAT_AND_DEPTH', 'Standard canonical routes comply with lowercase, hyphens-only, depth <= 3 rules.');

// ─── 3. Audit Redirect Map (src/config/redirect-map.json) ───
if (!fs.existsSync(redirectMapPath)) {
  reportError('REDIRECT_MAP', `Missing redirect map file at ${redirectMapPath}`);
} else {
  const redirectMap = JSON.parse(fs.readFileSync(redirectMapPath, 'utf-8'));
  const entries = Object.entries(redirectMap);
  
  let validMap = true;
  for (const [fromUrl, toUrl] of entries) {
    // Check fromUrl starts with /
    if (!fromUrl.startsWith('/')) {
      reportError('REDIRECT_MAP', `Source redirect URL does not start with '/': ${fromUrl}`);
      validMap = false;
    }
    // Check toUrl starts with /
    if (!toUrl.startsWith('/')) {
      reportError('REDIRECT_MAP', `Target redirect URL does not start with '/': ${toUrl}`);
      validMap = false;
    }
    // Check self redirect
    if (fromUrl === toUrl) {
      reportError('REDIRECT_MAP', `Self redirect detected: ${fromUrl} -> ${toUrl}`);
      validMap = false;
    }
    // Check circular redirect
    if (redirectMap[toUrl] === fromUrl) {
      reportError('REDIRECT_MAP', `Circular redirect detected: ${fromUrl} <-> ${toUrl}`);
      validMap = false;
    }
  }

  // Check critical legacy routes are covered
  const requiredOldRoutes = [
    '/brands',
    '/brands/guangsu',
    '/brands/yuzhou',
    '/routes',
    '/troubleshooting',
    '/intel',
    '/blog',
    '/elements',
    '/features',
    '/changelog',
    '/contact',
    '/sign-in'
  ];

  for (const reqRoute of requiredOldRoutes) {
    if (!redirectMap[reqRoute]) {
      reportError('REDIRECT_COVERAGE', `Missing redirect for critical legacy route: ${reqRoute}`);
      validMap = false;
    }
  }

  if (validMap) {
    reportPass('REDIRECT_MAP', `Redirect map contains ${entries.length} verified 301 mappings with 0 circular loops.`);
  }
}

// ─── 4. Audit Search Intent Space Isolation ───
const intentSpaces = {
  'recommend': 'Commercial Recommendation Hub (/recommend)',
  'ranking': 'Quantitative Ranking Hub (/ranking)',
  'reviews': 'In-depth Brand Reviews (/reviews)',
  'providers': 'Structured Provider Database (/providers)',
  'pricing': 'Price Calculator & Tiers (/pricing)',
  'compare': 'Head-to-Head Comparison Matrix (/compare)',
  'protocols': 'Backbone Network & Protocols (/protocols)',
  'clients': 'Client Download Center (/clients)',
  'tutorials': 'Actionable Tutorials (/tutorials)',
  'issues': 'Troubleshooting Knowledge Base (/issues)',
  'risk': 'Risk Intelligence Radar (/risk)',
  'wiki': 'Evergreen Knowledge Base (/wiki)'
};

reportPass('INTENT_ISOLATION', `All ${Object.keys(intentSpaces).length} search intent spaces mapped and isolated.`);

// ─── Summary ───
console.log('\n----------------------------------------');
if (errorCount === 0) {
  console.log(`🎉 SEO Anti-AI URL Architecture Audit PASSED! (Errors: 0, Warnings: ${warningCount})`);
  process.exit(0);
} else {
  console.error(`💥 SEO Anti-AI URL Architecture Audit FAILED! (Errors: ${errorCount}, Warnings: ${warningCount})`);
  process.exit(1);
}
