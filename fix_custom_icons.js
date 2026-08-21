const fs = require('fs');
const file = 'src/components/sections/CustomSolutions.tsx';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(/<div className={w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center flex-shrink-0 [\s\S]*?<\/div>/g, '');
fs.writeFileSync(file, content, 'utf8');
