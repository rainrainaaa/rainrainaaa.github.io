#!/usr/bin/env node

/**
 * QUICK START HELPER SCRIPT
 * Jalankan: node setup.js
 */

const fs = require('fs');
const path = require('path');

console.log('\n╔════════════════════════════════════════════════════════════════╗');
console.log('║         🌐 CYBERPUNK PORTFOLIO - QUICK START HELPER            ║');
console.log('╚════════════════════════════════════════════════════════════════╝\n');

// Check if index.html exists
const indexPath = path.join(__dirname, 'index.html');
if (!fs.existsSync(indexPath)) {
    console.log('❌ ERROR: index.html not found!');
    process.exit(1);
}

console.log('✅ index.html found!');
console.log('\n📋 FILES IN THIS PORTFOLIO:\n');
console.log('  • index.html         → Main portfolio file');
console.log('  • README.md          → Documentation');
console.log('  • CUSTOMIZATION.md   → Customization guide');
console.log('  • setup.js           → This file\n');

console.log('🚀 QUICK START OPTIONS:\n');
console.log('  1️⃣  Open index.html directly in your browser');
console.log('  2️⃣  Use a local server (recommended for better experience)\n');

console.log('📚 TO USE LOCAL SERVER:\n');
console.log('  Option A - Python 3:');
console.log('    python -m http.server 8000\n');
console.log('  Option B - Python 2:');
console.log('    python -m SimpleHTTPServer 8000\n');
console.log('  Option C - Node.js (Install http-server first)');
console.log('    npx http-server\n');
console.log('  Then open: http://localhost:8000\n');

console.log('🎨 CUSTOMIZATION:\n');
console.log('  1. Edit index.html with your text editor');
console.log('  2. Change name, role, photo, projects');
console.log('  3. Update contact information');
console.log('  4. See CUSTOMIZATION.md for detailed guide\n');

console.log('🚀 DEPLOYMENT OPTIONS:\n');
console.log('  • Netlify      → Drag & drop index.html (FREE)');
console.log('  • Vercel       → Connect your repository (FREE)');
console.log('  • GitHub Pages → Upload to your-username.github.io');
console.log('  • Heroku       → Deploy with single command');
console.log('  • Your Server  → Copy index.html to public folder\n');

console.log('📱 TESTING:\n');
console.log('  • Desktop: Chrome, Firefox, Safari, Edge');
console.log('  • Mobile: iOS Safari, Chrome Mobile');
console.log('  • Use DevTools (F12) → Device Toolbar for mobile preview\n');

console.log('💡 PRO TIPS:\n');
console.log('  • Compress images for faster loading');
console.log('  • Use your own profile photo');
console.log('  • Update all social media links');
console.log('  • Test all links before deploying');
console.log('  • Use a custom domain for professional look\n');

console.log('❓ NEED HELP?\n');
console.log('  • Check README.md for features');
console.log('  • Check CUSTOMIZATION.md for how to customize');
console.log('  • Edit colors in CSS section of index.html');
console.log('  • Test in browser DevTools (F12)\n');

console.log('═══════════════════════════════════════════════════════════════════\n');
console.log('✨ Ready to showcase your skills? Let\'s make it amazing! ✨\n\n');
