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
  // Only remove <span>emoji</span> if it's right before a word inside badge-plum
  // or generally any span that only contains an emoji/dot
  const original = content;
  content = content.replace(/<span>[^<a-zA-Z0-9]+<\/span>\s*/g, '');
  
  if (original !== content) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed badges in ' + file);
  }
});
