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
  content = content.replace(/â€”/g, '-');
  content = content.replace(/â†’/g, '->');
  content = content.replace(/â€¢/g, '•');
  content = content.replace(/âœ“/g, '✓');
  content = content.replace(/â‚¹/g, '₹');
  fs.writeFileSync(file, content, 'utf8');
});
console.log('Fixed encodings in all files.');
