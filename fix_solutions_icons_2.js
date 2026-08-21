const fs = require('fs');
const file = 'src/components/sections/Solutions.tsx';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(/<TabIcon className="w-3\.5 h-3\.5" \/>/g, '');
fs.writeFileSync(file, content, 'utf8');
