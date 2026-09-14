const fs = require('fs');
let content = fs.readFileSync('iepl-vs-iplc-private-line-guide.md', 'utf8');

content = content.replace('- **顶级物理专线与全场景生产力首选：光速云', '- **顶级物理专线与全场景生产力首选** 光速云');
content = content.replace('- **高性价比多点中转实力派：飞猫云', '- **高性价比多点中转实力派** 飞猫云');
content = content.replace('- **异构容灾战略储备标杆：星岛梦', '- **异构容灾战略储备标杆** 星岛梦');

fs.writeFileSync('iepl-vs-iplc-private-line-guide.md', content, 'utf8');
console.log('Cleaned list colons!');
