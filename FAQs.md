# ❓ FREQUENTLY ASKED QUESTIONS (FAQs)

Jawaban untuk pertanyaan yang sering diajukan tentang portfolio ini.

---

## 🚀 GETTING STARTED

### Q: Apakah saya perlu install sesuatu untuk membuat ini berjalan?
**A:** Tidak! Pure HTML/CSS/JS. Cukup buka `index.html` di browser, selesai!

### Q: Apakah saya perlu coding experience?
**A:** Tidak perlu. Cukup edit nama & foto dengan text editor sederhana.

### Q: Berapa lama untuk setup?
**A:** 5-10 menit untuk setup awal. 30 menit untuk full customization.

### Q: Bisa digunakan di Mac/Linux?
**A:** Ya! Works di semua OS modern (Windows, Mac, Linux).

### Q: Apakah gratis?
**A:** 100% gratis! No hidden charges.

---

## 🎨 CUSTOMIZATION

### Q: Bagaimana cara mengubah nama saya?
**A:** Buka `index.html` dengan text editor, cari `ALEX CIPHER`, ganti dengan nama Anda. Lihat CUSTOMIZATION.md #1 untuk detail.

### Q: Bagaimana cara menambah foto profil?
**A:** Simpan foto di folder yang sama (misalnya `photo.jpg`), kemudian ubah src di HTML. Lihat ASSETS_GUIDE.md untuk detail.

### Q: Bagaimana cara mengubah warna?
**A:** Buka COLOR_PRESETS.md untuk 10 tema siap pakai, atau edit CSS di index.html. Lihat CUSTOMIZATION.md #2.

### Q: Berapa banyak project yang bisa ditambah?
**A:** Unlimited! Duplicate project card template sebanyak yang mau.

### Q: Bisa ubah font?
**A:** Ya! Lihat CUSTOMIZATION.md #5 untuk guide mengubah fonts dari Google Fonts.

### Q: Bagaimana cara disable animasi?
**A:** Buka CSS → cari `animation:` → ubah ke `animation: none;`

### Q: Bagaimana cara ubah dark mode?
**A:** Di CUSTOMIZATION.md #10 ada cara menambah dark mode toggle.

### Q: Bisa add lebih banyak sections?
**A:** Ya! Copy-paste section yang ada, modify sesuai kebutuhan.

---

## 📸 IMAGES & ASSETS

### Q: Foto saya tidak muncul, kenapa?
**A:** Check path:
- Pastikan `photo.jpg` di folder yang sama dengan `index.html`
- Pastikan nama file tepat (case-sensitive)
- Inspect dengan DevTools (F12) → Console → lihat error

### Q: Berapa ukuran foto yang ideal?
**A:** 224x224 px atau 256x256 px (square), < 100KB. Lihat ASSETS_GUIDE.md.

### Q: Bisa pakai URL gambar langsung (bukan local)?
**A:** Ya! Ganti path dengan URL lengkap, contoh:
```html
<img src="https://yoursite.com/photo.jpg" alt="Photo">
```

### Q: Gambar terlihat blur/pixelated, bagaimana?
**A:** 
- Tingkatkan resolusi gambar
- Gunakan gambar yang lebih besar
- Compress dengan TinyPNG, bukan bagus

### Q: Bisa embed video di portfolio?
**A:** Ya! Lihat ASSETS_GUIDE.md section "VIDEO BACKGROUND (ADVANCED)".

---

## 🚀 DEPLOYMENT

### Q: Apa platform hosting terbaik?
**A:** **Netlify** (recommended) - paling mudah & tercepat.

### Q: Berapa biaya hosting?
**A:** Gratis! Netlify, Vercel, GitHub Pages, Firebase semuanya gratis untuk static sites.

### Q: Bagaimana cara deploy ke Netlify?
**A:** 
1. Buka netlify.com
2. Drag & drop `index.html`
3. Done! (30 detik)
Lihat DEPLOYMENT.md #1 untuk detail.

### Q: Berapa lama sampai online?
**A:** Instant! Dalam hitungan detik.

### Q: Bisa pakai custom domain?
**A:** Ya! Beli domain (Namecheap, GoDaddy), kemudian point ke hosting. Lihat DEPLOYMENT.md #9.

### Q: Apakah website saya aman (SSL)?
**A:** Ya! Semua platform modern auto provide HTTPS.

### Q: Bagaimana kalau data saya hilang?
**A:** Backup sendiri! Upload ke GitHub atau dropbox. Tidak ada server database.

### Q: Bisa update portfolio setelah deploy?
**A:** Ya! Edit file → re-upload. Platform seperti Netlify auto-detect changes.

---

## 🎯 FUNCTIONALITY

### Q: Bagaimana cara membuat contact form working?
**A:** HTML ini tidak punya backend. Untuk form, gunakan service seperti:
- Formspree (formspree.io)
- Netlify Forms (built-in)
- EmailJS (emailjs.com)

Lihat CUSTOMIZATION.md untuk implementasi.

### Q: Bagaimana cara track visitor?
**A:** Tambah Google Analytics. Lihat CUSTOMIZATION.md #10 + ASSETS_GUIDE.md.

### Q: Animasi berjalan lambat, bagaimana?
**A:** 
- Refresh browser (Ctrl+F5)
- Close tab lain yang heavy
- Update browser ke versi terbaru
- Disable browser extensions

### Q: Mobile view terlihat aneh?
**A:** 
- Open DevTools (F12)
- Device Toolbar → pilih mobile device
- Refresh (Ctrl+F5)
- Check CUSTOMIZATION.md untuk responsive adjustments

### Q: Typing animation tidak berjalan?
**A:** Check console (DevTools F12 → Console). Biasanya ada JavaScript error.

---

## 🐛 TROUBLESHOOTING

### Q: Styles tidak muncul (berwarna putih saja)
**A:** Kemungkinan:
1. Tailwind CDN tidak load → check internet connection
2. Browser cache → Ctrl+Shift+Del → Clear cache
3. Browser tidak support → update browser

### Q: Images broken (X icon)
**A:**
1. Pastikan path image benar
2. File image exists di folder
3. Gunakan path relatif bukan absolute

### Q: Navigation links tidak work
**A:** Check HTML:
```html
<a href="#about">ABOUT</a> <!-- harus match dengan id="about" di section -->
```

### Q: Font berbeda dari yang diharapkan
**A:**
1. Check Google Fonts loading di DevTools
2. Mungkin ada adblocker blocking
3. Try incognito mode (Ctrl+Shift+N)

### Q: Glow effects tidak kelihatan
**A:**
1. Background monitor perlu brightness adjustment
2. Buka DevTools → Device Emulation → lihat rendering
3. Try di browser lain

### Q: Website lambat loading
**A:**
1. Compress images (TinyPNG)
2. Minify CSS/JS (optional)
3. Check network tab di DevTools
4. Upload ke CDN untuk assets

---

## 💡 TIPS & TRICKS

### Q: Bagaimana cara membuat portfolio terlihat professional?
**A:**
1. Gunakan foto berkualitas tinggi
2. Tulis bio yang menarik & clear
3. Showcase best projects saja
4. Update social media links
5. Check typo & grammar
6. Test di multiple devices

### Q: Berapa banyak projects harus ditampilkan?
**A:** 3-6 project yang terbaik. Kualitas > Kuantitas.

### Q: Apa warna terbaik untuk portfolio?
**A:** Tergantung brand Anda. Coba COLOR_PRESETS.md untuk inspirasi. Default cyberpunk sudah bagus!

### Q: Bagaimana cara meningkatkan SEO?
**A:** 
1. Update meta tags di `<head>`
2. Add Google Analytics
3. Use descriptive text
4. Optimize images
5. Mobile-friendly (sudah!)
6. Fast loading time

### Q: Bagaimana cara membuat portfolio stand out?
**A:**
1. Unique color scheme
2. Professional content
3. Clear typography
4. Smooth animations
5. Fast loading
6. Mobile optimized

### Q: Bisa add resume/CV download?
**A:** Ya! Simpan PDF di folder, kemudian:
```html
<a href="resume.pdf" download>DOWNLOAD CV</a>
```

### Q: Bisa add blog/articles?
**A:** Bisa! Tambah section baru atau gunakan platform seperti Medium & link di portfolio.

---

## 🔧 TECHNICAL

### Q: Apakah website ini SEO friendly?
**A:** Ya! Sudah semantic HTML5, meta tags, responsive, fast. Bagus untuk SEO.

### Q: Apakah bisa di-inspect dengan DevTools?
**A:** Ya! Press F12 di browser. Tapi jangan modify, edit di text editor saja.

### Q: Bagaimana cara source code?
**A:** Lihat dengan DevTools (F12) atau buka index.html dengan text editor.

### Q: Bisa minify/uglify CSS & JS?
**A:** Bisa! Untuk production, gunakan tools seperti:
- CSS Minifier (cssminifier.com)
- JavaScript Minifier (jsminifier.com)

### Q: Bagaimana cara test performance?
**A:** Gunakan Lighthouse:
1. Open DevTools (F12)
2. Lighthouse tab
3. Generate report
4. Target: 90+ score

### Q: Browser compatibility?
**A:** Works di:
- Chrome ✓
- Firefox ✓
- Safari ✓
- Edge ✓
- Mobile browsers ✓

Tidak support:
- IE11 (use modern browser!)

---

## 📱 MOBILE ISSUES

### Q: Mobile view terlihat kecil/besar
**A:** Update viewport meta tag di HTML:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Q: Touch animation tidak smooth di mobile
**A:** Normal! Desktop & mobile experience berbeda. Optimize di CUSTOMIZATION.md.

### Q: Mobile horizontal scroll terjadi
**A:** Check CSS width properties, pastikan tidak overflow.

---

## 🎯 ADVANCED QUESTIONS

### Q: Bagaimana cara pakai dengan React?
**A:** Buat React project baru, copy struktur ini. Atau cari React portfolio template di GitHub.

### Q: Bisa pakai CMS?
**A:** Bisa! Tapi ini static site, tidak butuh CMS. Jika mau, gunakan:
- Headless CMS (Contentful, Strapi)
- JAMstack (Netlify CMS)

### Q: Bagaimana cara add search functionality?
**A:** Static site tidak bisa search built-in. Use client-side search library seperti Lunr.js atau Fuse.js.

### Q: Bisa integration dengan email service?
**A:** Ya! Gunakan:
- Formspree (formspree.io)
- EmailJS (emailjs.com)
- Netlify Forms (netlify.com)

### Q: Bagaimana cara real-time notifications?
**A:** Perlu backend server. Atau gunakan service seperti:
- Firebase
- Supabase
- PusherJS

---

## 🎓 LEARNING

### Q: Di mana saya bisa belajar HTML/CSS/JS lebih lanjut?
**A:**
- FreeCodeCamp (freecodecamp.org)
- MDN Web Docs (developer.mozilla.org)
- Udemy (udemy.com)
- Codecademy (codecademy.com)

### Q: Di mana saya bisa belajar web design?
**A:**
- Figma tutorials (figma.com)
- Dribbble (dribbble.com) - untuk inspiration
- Design system resources

### Q: Bagaimana cara jadi developer profesional?
**A:** Tips umum:
1. Buat projects (seperti portfolio ini!)
2. Contribute ke open source
3. Belajar terus-menerus
4. Network dengan developer lain
5. Share knowledge

---

## ❓ TIDAK MELIHAT JAWABAN?

### Jika pertanyaan Anda tidak ada:
1. **Check documentation**:
   - README.md
   - CUSTOMIZATION.md
   - DEPLOYMENT.md
   - INDEX.md

2. **Google your question** + "cyberpunk portfolio" atau "HTML CSS JS"

3. **Inspect dengan DevTools** (F12) → Console → lihat error messages

4. **Try community**:
   - Stack Overflow
   - Reddit (r/webdev, r/learnprogramming)
   - GitHub Issues

---

## 📊 FAQ STATISTICS

**Top 5 Pertanyaan:**
1. ✅ "Bagaimana cara deploy?" → DEPLOYMENT.md
2. ✅ "Bagaimana cara ubah warna?" → COLOR_PRESETS.md
3. ✅ "Foto tidak muncul?" → ASSETS_GUIDE.md
4. ✅ "Bagaimana cara customize?" → CUSTOMIZATION.md
5. ✅ "Apakah gratis?" → Ya! 100% free

---

**Semoga membantu! Jika ada pertanyaan lain, cek dokumentasi yang relevan. 🚀**

**Happy building your cyberpunk portfolio! ✨**

