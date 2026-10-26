import http from 'http';

const testUrls = [
  '/',
  '/about/',
  '/pricing/',
  '/ranking/',
  '/recommend/',
  '/compare/',
  '/free/',
  '/providers/',
  '/reviews/',
  '/reviews/guangsu/',
  '/reviews/feimao/',
  '/reviews/breeze/',
  '/reviews/wgetcloud/',
  '/reviews/tag-vpn/',
  '/reviews/nexitally/',
  '/wiki/',
  '/wiki/page/1/',
  '/wiki/page/2/',
  '/wiki/page/3/',
  '/tutorials/',
  '/clients/',
  '/protocols/',
  '/issues/',
  '/ai-streaming/',
  '/risk/',
  '/non-existent-page-test-404/'
];

function checkUrl(urlPath) {
  return new Promise((resolve) => {
    const req = http.get(`http://localhost:5200${urlPath}`, (res) => {
      resolve({ url: urlPath, status: res.statusCode, headers: res.headers });
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
