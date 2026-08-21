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
  content = content.replace(/[^\x00-\x7F]/g, char => {
    // try to guess the character
    const hex = char.charCodeAt(0).toString(16);
    if (hex === '2014') return '-'; // em dash
    if (hex === '2013') return '-'; // en dash
    if (hex === '2019') return '\''; // right single quote
    if (hex === '2018') return '\''; // left single quote
    if (hex === '201c') return '\"'; // left double quote
    if (hex === '201d') return '\"'; // right double quote
    if (hex === '2022') return '•'; // bullet
    if (hex === '2192') return '->'; // right arrow
    if (hex === '2713') return '✓'; // checkmark
    if (hex === '20b9') return '₹'; // rupee
    if (char === 'â') return ''; 
    if (char === '€') return ''; 
    if (char === '”') return '';
    if (char === '“') return '';
    if (char === '') return '';
    if (char === '?') return ''; 
    return char;
  });
  
  // Clean up any double dashes or weird artifacts
  content = content.replace(/â/g, '');
  content = content.replace(/\?"/g, '-');
  content = content.replace(/\+'/g, '->');
  content = content.replace(/\?/g, '•');
  content = content.replace(/,\d+/g, '₹');
  content = content.replace(/o"/g, '✓');
  
  fs.writeFileSync(file, content, 'utf8');
});
console.log('Fixed encodings broadly.');
