import fs from 'fs';
import path from 'path';

function findAstroFiles(dir) {
  let list = [];
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) list = list.concat(findAstroFiles(full));
    else if (f.endsWith('.astro')) list.push(full);
  }
  return list;
}

const astroFiles = findAstroFiles('src');
let totalReplaced = 0;

for (const filePath of astroFiles) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Replace any link with affiliateUrl or external referral that doesn't have sponsored
  // Regex pattern for rel inside tags with affiliateUrl or target="_blank"
  // 1. Specific cases with affiliateUrl
  content = content.replace(/(href=\{[^}]*affiliateUrl[^}]*\}[\s\S]*?rel=["'])([^"']*)(["'])/gi, (m, p1, p2, p3) => {
    let rels = p2.split(/\s+/).filter(Boolean);
    if (!rels.includes('noopener')) rels.push('noopener');
    if (!rels.includes('noreferrer')) rels.push('noreferrer');
    if (!rels.includes('nofollow')) rels.push('nofollow');
    if (!rels.includes('sponsored')) rels.push('sponsored');
    totalReplaced++;
    return `${p1}${rels.join(' ')}${p3}`;
  });

  // Also where rel precedes href
  content = content.replace(/(rel=["'])([^"']*)(["'][\s\S]*?href=\{[^}]*affiliateUrl[^}]*\})/gi, (m, p1, p2, p3) => {
    let rels = p2.split(/\s+/).filter(Boolean);
    if (!rels.includes('noopener')) rels.push('noopener');
    if (!rels.includes('noreferrer')) rels.push('noreferrer');
    if (!rels.includes('nofollow')) rels.push('nofollow');
    if (!rels.includes('sponsored')) rels.push('sponsored');
    totalReplaced++;
    return `${p1}${rels.join(' ')}${p3}`;
  });

  // 2. Specific external links to affiliate domains (gsy001, guangs.vipaff, guangsu.cloud, yuzhou.cloud)
  const affiliateDomains = ['gsyvipaff', 'flycataff', 'breezenetaff', 'twilightaff', 'dalaoyunaff', 'xingdaomeng', '2maoyunaff', 'worryfreeaff', 'v2yunvipaff', 'fireflyaff', 'yuzoucloud', 'vipaff', 'civetnet', 'jlyvipaff', 'gntaff', '1flyunaff', 'sogoyunaff', 'kosingaff', 'speedworldaff', 'flashleapaff', 'gcvipaff', 'shandianshuaff', 'yunjiexianaff', 'liulianyunaff', 'shenxingaff', 'huanqiutiaff', 'invisibleaff', 'ladderaff', 'wgetcloud', 'sibker', 'cyberguard', 'ssyylf', 'lingdongaff', 'wavenetaff', 'edgenovaaff', 'gsy001.xyz', 'guangsu.cloud', 'yuzhou.cloud'];

  for (const dom of affiliateDomains) {
    const domRegex = new RegExp(`(<a[^>]+href=["'][^"']*${dom}[^"']*["'][^>]*rel=["'])([^"']*)(["'])`, 'gi');
    content = content.replace(domRegex, (m, p1, p2, p3) => {
      let rels = p2.split(/\s+/).filter(Boolean);
      if (!rels.includes('noopener')) rels.push('noopener');
      if (!rels.includes('noreferrer')) rels.push('noreferrer');
      if (!rels.includes('nofollow')) rels.push('nofollow');
      if (!rels.includes('sponsored')) rels.push('sponsored');
      totalReplaced++;
      return `${p1}${rels.join(' ')}${p3}`;
    });
  }

  // 3. Fallback: if tag has affiliateUrl but NO rel attribute at all:
  content = content.replace(/(<a\s+[^>]*href=\{[^}]*affiliateUrl[^}]*\}(?![^>]*\brel=)[^>]*)(>)/gi, (m, p1, p2) => {
    totalReplaced++;
    return `${p1} rel="noopener noreferrer nofollow sponsored"${p2}`;
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated affiliate rel attributes in: ${filePath.replace(/\\/g, '/')}`);
  }
}

console.log(`Robust replacement completed! Total replacements: ${totalReplaced}`);
