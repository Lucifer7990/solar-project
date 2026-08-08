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

    // Replace lingering eco and emerald classes
    content = content.replace(/eco-green/g, 'brand-gold');
    content = content.replace(/emerald-100/g, 'amber-100');
    content = content.replace(/emerald-200/g, 'brand-gold-light');
    content = content.replace(/emerald-300/g, 'brand-gold-light');
    content = content.replace(/emerald-400/g, 'brand-gold');
    content = content.replace(/emerald-500/g, 'brand-gold');
    content = content.replace(/emerald-600/g, 'brand-navy');
    content = content.replace(/emerald-700/g, 'brand-navy');
    content = content.replace(/emerald-800/g, 'brand-navy');
    content = content.replace(/emerald-900/g, 'brand-navy');
    
    content = content.replace(/16,185,129/g, '212,175,55'); // rgba of emerald-500 to gold

    // Any new buttons that ended up bg-brand-gold text-white need fixing
    content = content.replace(/bg-brand-gold text-white/g, 'bg-brand-gold text-brand-navy');
    content = content.replace(/text-white bg-brand-gold/g, 'text-brand-navy bg-brand-gold');
    content = content.replace(/bg-gradient-to-r from-brand-gold to-brand-gold text-white/g, 'bg-gradient-to-r from-brand-gold to-brand-gold text-brand-navy');

    if (content !== original) {
      fs.writeFileSync(filePath, content);
      console.log(`Updated ${filePath}`);
    }
  }
});
