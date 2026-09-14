import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const statePath = path.resolve(rootDir, 'seo-system/indexnow-state.json');
const registryPath = path.resolve(rootDir, 'seo-system/existing-url-registry.json');
const keyPath = path.resolve(rootDir, 'public/8d7f2b9a4c1e6f3085a2b1c4e9d7f023.txt');

console.log('🚀 Running IndexNow Incremental Submission Engine...');

if (!fs.existsSync(statePath) || !fs.existsSync(registryPath) || !fs.existsSync(keyPath)) {
  console.error('❌ Missing required files for IndexNow engine.');
  process.exit(1);
}

const key = fs.readFileSync(keyPath, 'utf-8').trim();
const state = JSON.parse(fs.readFileSync(statePath, 'utf-8'));
const registry = JSON.parse(fs.readFileSync(registryPath, 'utf-8'));

// Extract active canonical URLs
const currentUrls = registry
  .filter(item => item.status === 'active' && item.slug !== '404')
  .map(item => item.url);

const trackedUrls = state.trackedUrls || {};
const newUrls = [];
const updatedUrls = [];
const deletedUrls = [];

for (const url of currentUrls) {
  if (!trackedUrls[url]) {
    newUrls.push(url);
  }
}

for (const url of Object.keys(trackedUrls)) {
  if (!currentUrls.includes(url)) {
    deletedUrls.push(url);
  }
}

const changedUrls = [...newUrls, ...updatedUrls];

console.log(`📊 IndexNow Audit Result:`);
console.log(`   - Total Canonical URLs: ${currentUrls.length}`);
console.log(`   - New URLs Detected: ${newUrls.length}`);
console.log(`   - Updated URLs: ${updatedUrls.length}`);
console.log(`   - Deleted URLs: ${deletedUrls.length}`);

if (changedUrls.length === 0) {
  console.log('✅ No new or updated URLs detected since last run. Skipping IndexNow API call.');
  process.exit(0);
}

const payload = {
  host: state.host || 'jichangbang.org',
  key: key,
  keyLocation: state.keyLocation || `https://jichangbang.org/${key}.txt`,
  urlList: changedUrls
};

console.log(`📡 Preparing payload for ${changedUrls.length} URLs to https://api.indexnow.org/indexnow`);
console.log(JSON.stringify(payload, null, 2));

// Update state tracking
for (const url of newUrls) {
  trackedUrls[url] = new Date().toISOString();
}
for (const url of deletedUrls) {
  delete trackedUrls[url];
}

state.lastSubmissionTime = new Date().toISOString();
state.trackedUrls = trackedUrls;
state.history.push({
  timestamp: state.lastSubmissionTime,
  submittedCount: changedUrls.length,
  urls: changedUrls
});

fs.writeFileSync(statePath, JSON.stringify(state, null, 2), 'utf-8');
console.log('💾 IndexNow state successfully persisted to seo-system/indexnow-state.json');
