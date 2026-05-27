const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const componentsDir = path.join(__dirname, '../src/app/components');

walkDir(componentsDir, (filePath) => {
  if (filePath.includes('.component.')) {
    const newPath = filePath.replace('.component.', '.');
    fs.renameSync(filePath, newPath);
    console.log(`Renamed: ${filePath} -> ${newPath}`);
  }
});

// Now update all .ts files
walkDir(componentsDir, (filePath) => {
  if (filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace templateUrl and styleUrl
    content = content.replace(/\.component\.html/g, '.html');
    content = content.replace(/\.component\.css/g, '.css');
    
    // Convert to use DataService instead of static import
    if (content.includes('import { siteData } from \'../../data\';')) {
        content = content.replace('import { siteData } from \'../../data\';', 'import { inject } from \'@angular/core\';\nimport { DataService } from \'../../services/data.service\';');
        
        // Find properties assigned from siteData and wrap in signals/getters
        // e.g. services = siteData.services; -> dataService = inject(DataService); services = this.dataService.siteData().services;
        content = content.replace(/(\w+)\s*=\s*siteData\.(\w+);/g, '$1 = this.dataService.siteData().$2;');
        
        // Insert dataService = inject(DataService); if not present
        if (!content.includes('dataService = inject(DataService);')) {
            content = content.replace('export class', 'export class'); // just a trick to anchor
            const classMatch = content.match(/export class \w+\s*{/);
            if (classMatch) {
                content = content.replace(classMatch[0], classMatch[0] + '\n  dataService = inject(DataService);');
            }
        }
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated content: ${filePath}`);
  }
});
