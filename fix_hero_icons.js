const fs = require('fs');
const file = 'src/components/sections/Hero.tsx';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(/<IconComponent className="w-3 h-3 sm:w-3.5 sm:h-3.5" \/>/g, '');
content = content.replace(/<div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white\/10 flex items-center justify-center text-\[#CCFF00\] flex-shrink-0">[\s\S]*?<\/div>/g, '');
fs.writeFileSync(file, content, 'utf8');
