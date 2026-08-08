const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const dir = path.join(__dirname, 'src', 'app');

walkDir(dir, (filePath) => {
  if (filePath.endsWith('.html') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let original = content;

    // Green to Gold mappings
    content = content.replace(/text-eco-green/g, 'text-brand-gold');
    content = content.replace(/bg-eco-green/g, 'bg-brand-gold');
    content = content.replace(/border-eco-green/g, 'border-brand-gold');
    content = content.replace(/hover:bg-eco-green/g, 'hover:bg-brand-gold-light');
    content = content.replace(/hover:text-eco-green/g, 'hover:text-brand-gold-light');
    content = content.replace(/ring-eco-green/g, 'ring-brand-gold');
    content = content.replace(/focus:ring-eco-green/g, 'focus:ring-brand-gold');

    // Fix gold button text contrast (from white to navy)
    content = content.replace(/bg-brand-gold\s+text-white/g, 'bg-brand-gold text-brand-navy');
    content = content.replace(/text-white\s+bg-brand-gold/g, 'text-brand-navy bg-brand-gold');

    // Dark to Navy mappings
    content = content.replace(/text-eco-dark/g, 'text-brand-navy');
    content = content.replace(/bg-eco-dark/g, 'bg-brand-navy');
    content = content.replace(/border-eco-dark/g, 'border-brand-navy');
    content = content.replace(/hover:bg-eco-dark/g, 'hover:bg-brand-navy-light');
    content = content.replace(/hover:text-eco-dark/g, 'hover:text-brand-navy-light');
    content = content.replace(/from-eco-dark/g, 'from-brand-navy');
    content = content.replace(/to-eco-dark/g, 'to-brand-navy');
    content = content.replace(/via-eco-dark/g, 'via-brand-navy');

    // Blue to Navy Light
    content = content.replace(/text-eco-blue/g, 'text-brand-navy-light');
    content = content.replace(/bg-eco-blue/g, 'bg-brand-navy-light');

    if (content !== original) {
      fs.writeFileSync(filePath, content);
      console.log(`Updated ${filePath}`);
    }
  }
});
