const fs = require('fs');
const path = require('path');
function walkDir(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    if (fs.statSync(file).isDirectory()) {
      results = results.concat(walkDir(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}
const files = walkDir('src');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;
  
  content = content.replace(/py-20 lg:py-32/g, 'py-16 lg:py-24');
  content = content.replace(/py-24 lg:py-40/g, 'py-16 lg:py-24');
  content = content.replace(/space-y-16/g, 'space-y-10 sm:space-y-12');
  content = content.replace(/space-y-12 sm:space-y-16/g, 'space-y-10 sm:space-y-12');
  
  if (original !== content) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed spacing in ' + file);
  }
});
