import http from 'http';

const testUrls = [
  '/',
  '/about/',
  '/methodology/',
  '/disclosure/',
  '/privacy/',
  '/terms/',
  '/pricing/',
  '/ranking/',
  '/recommend/',
  '/compare/',
  '/reviews/guangsu/',
  '/reviews/kuaili/',
  '/wiki/',
  '/wiki/page/2/',
  '/wiki/page/3/'
];

function checkUrl(urlPath) {
  return new Promise((resolve) => {
    const req = http.get(`http://localhost:5200${urlPath}`, (res) => {
      resolve({ url: urlPath, status: res.statusCode });
    });
    req.on('error', (e) => {
      resolve({ url: urlPath, status: 'ERROR', error: e.message });
    });
  });
}

async function run() {
  const results = [];
  for (const u of testUrls) {
    const res = await checkUrl(u);
    results.push(res);
  }
  console.log(JSON.stringify(results, null, 2));
}

run();
