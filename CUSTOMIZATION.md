# 🎨 CUSTOMIZATION GUIDE - Cyberpunk Portfolio

Panduan lengkap untuk customize portfolio sesuai keinginan Anda!

## 1️⃣ MENGUBAH INFORMASI PRIBADI

### Nama & Role

Buka `index.html` dan cari baris:
```html
<h1 class="neon-glow-blue typing-text">ALEX CIPHER</h1>
```

Ganti `ALEX CIPHER` dengan nama Anda. Contoh:
```html
<h1 class="neon-glow-blue typing-text">BUDI SANTOSO</h1>
```

Kemudian ganti role di bawahnya:
```html
<p class="text-2xl md:text-3xl neon-glow-pink">Full Stack Developer</p>
```

Ganti menjadi:
```html
<p class="text-2xl md:text-3xl neon-glow-pink">UI/UX Designer • Frontend Dev</p>
```

### Foto Profil

Letakkan foto Anda di folder yang sama dengan `index.html`, contoh: `profile.jpg`

Kemudian ubah baris:
```html
<img src="https://via.placeholder.com/224/0a0e27/00ff99?text=Developer" alt="Developer Profile">
```

Menjadi:
```html
<img src="profile.jpg" alt="Developer Profile">
```

### Bio / Deskripsi

Cari section:
```html
<p class="max-w-2xl mx-auto text-lg leading-relaxed mb-8 text-blue-300">
    Passionate coder transforming ideas into elegant digital solutions.<br>
    Specializing in modern web technologies and futuristic design.
</p>
```

Ubah ke deskripsi Anda sendiri!

---

## 2️⃣ MENGUBAH WARNA (COLOR SCHEMES)

### Opsi 1: Mengubah Seluruh Tema dengan Mudah

Di bagian `<style>`, Anda akan menemukan class-class dengan warna. Berikut warna-warna utama:

**Default Cyberpunk (Green):**
- Primary Green: `#00ff99`
- Primary Blue: `#0064ff`
- Primary Pink: `#ff0096`

**Untuk mengubah ke Cyan Theme:**
1. Cari `.neon-glow` dan ubah semua `rgba(0, 255, 150, ...)` menjadi `rgba(0, 255, 255, ...)`
2. Cari `.neon-glow-blue` dan ubah `rgba(0, 100, 255, ...)` menjadi `rgba(0, 200, 255, ...)`

### Opsi 2: Color Palette Templates

Copy-paste seluruh CSS theme yang sesuai keinginan Anda:

**🟢 ORIGINAL GREEN CYBERPUNK**
```css
--primary: #00ff99;
--secondary: #0064ff;
--accent: #ff0096;
--dark-bg: #0a0e27;
```

**🔵 COOL BLUE THEME**
```css
--primary: #00d9ff;
--secondary: #0066ff;
--accent: #ff0099;
--dark-bg: #0a1328;
```

**🟣 PURPLE DREAM**
```css
--primary: #c000ff;
--secondary: #ff0066;
--accent: #00ffff;
--dark-bg: #1a0033;
```

**🔴 HOT MAGENTA**
```css
--primary: #ff0080;
--secondary: #ff6600;
--accent: #ffff00;
--dark-bg: #2a0015;
```

**⚫ DARK GRAYSCALE**
```css
--primary: #ffffff;
--secondary: #cccccc;
--accent: #888888;
--dark-bg: #1a1a1a;
```

---

## 3️⃣ EDIT SKILLS & TEKNOLOGI

### Mengubah Skills

Cari section `<!-- About Section -->`, kemudian find:
```html
<h3 class="neon-glow-pink mb-6">KEY SKILLS</h3>
```

Ubah skill badges:
```html
<span class="tech-badge">React</span>
<span class="tech-badge">JavaScript</span>
<span class="tech-badge">Tailwind CSS</span>
```

Contoh untuk UI Designer:
```html
<span class="tech-badge">Figma</span>
<span class="tech-badge">Adobe XD</span>
<span class="tech-badge">Prototyping</span>
```

---

## 4️⃣ MENAMBAH/MENGUBAH PROJECTS

### Menambah Project Baru

Cari section `<!-- Projects Section -->`:

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <!-- Existing projects here -->
    
    <!-- TAMBAH YANG BARU INI -->
    <div class="project-card glow-box hologram">
        <div class="p-6 bg-gradient-to-br from-indigo-900 to-black rounded-lg">
            <div class="mb-4 h-40 bg-gradient-to-br from-indigo-500 to-blue-500 rounded flex items-center justify-center overflow-hidden">
                <img src="project4.jpg" alt="Project Name">
            </div>
            <h3 class="neon-glow-blue mb-3">PROJECT TITLE</h3>
            <p class="text-sm text-indigo-300 mb-4">
                Deskripsi project Anda di sini...
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
                <span class="text-xs border border-indigo-500 text-indigo-400 px-2 py-1 rounded">Tech1</span>
                <span class="text-xs border border-indigo-500 text-indigo-400 px-2 py-1 rounded">Tech2</span>
            </div>
            <button class="btn-glow-blue w-full">VIEW PROJECT</button>
        </div>
    </div>
</div>
```

### Color Variations untuk Project Cards

Ganti `from-blue-900 to-black` dengan:
- **Pink**: `from-pink-900 to-black`
- **Purple**: `from-purple-900 to-black`
- **Green**: `from-green-900 to-black`
- **Indigo**: `from-indigo-900 to-black`
- **Red**: `from-red-900 to-black`

---

## 5️⃣ MENGUBAH FONT

### Font yang Digunakan Saat Ini

```html
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
```

- **Orbitron** - Untuk judul (h1, h2, h3)
- **Space Mono** - Untuk body text

### Alternative Futuristic Fonts

**Dari Google Fonts, ubah link dengan:**

```html
<!-- Cyberpunk Aggressive -->
<link href="https://fonts.googleapis.com/css2?family=Oxanium:wght@400;700;800&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
```

```html
<!-- Tech Minimal -->
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;700&family=Audiowide&display=swap" rel="stylesheet">
```

```html
<!-- Retro Futurism -->
<link href="https://fonts.googleapis.com/css2?family=VT323&family=Press+Start+2P&display=swap" rel="stylesheet">
```

---

## 6️⃣ MENGUBAH CONTACT LINKS

```html
<a href="mailto:your-email@example.com" class="contact-link">EMAIL ME</a>
<a href="https://github.com/your-username" target="_blank" class="contact-link">GITHUB</a>
<a href="https://linkedin.com/in/your-profile" target="_blank" class="contact-link">LINKEDIN</a>
<a href="https://twitter.com/your-handle" target="_blank" class="contact-link">TWITTER</a>
```

Tambahkan social link baru:
```html
<a href="https://instagram.com/your-handle" target="_blank" class="contact-link">INSTAGRAM</a>
<a href="https://dribbble.com/your-profile" target="_blank" class="contact-link">DRIBBBLE</a>
<a href="https://behance.net/your-profile" target="_blank" class="contact-link">BEHANCE</a>
```

---

## 7️⃣ MENGUBAH EFEK & ANIMASI

### Menonaktifkan Scanline Effect

Cari CSS:
```css
body::after {
    /* ... */
    animation: scanlines 8s linear infinite;
}
```

Ubah ke:
```css
body::after {
    /* ... */
    animation: none; /* Scanline OFF */
}
```

### Mengubah Kecepatan Typing Animation

Cari:
```css
animation: typing 3.5s steps(40, end);
```

Ubah nilai `3.5s`:
- `2s` - Lebih cepat
- `5s` - Lebih lambat

### Mengubah Kecepatan Floating Animation

Cari:
```css
@keyframes float-hero {
    /* ... */
}

animation: float-hero 3s ease-in-out infinite;
```

Ubah `3s` untuk mengubah kecepatan.

### Menonaktifkan Particle Effect

Cari di JavaScript:
```javascript
function createParticle() {
    const hero = document.querySelector('.hero');
    if (hero && Math.random() > 0.7) { // Ubah 0.7 jadi 1.1 untuk disable
```

---

## 8️⃣ RESPONSIVE ADJUSTMENTS

### Untuk Mobile-First Approach

Ubah breakpoints di media queries:
```css
@media (max-width: 768px) {
    h1 { font-size: 2rem; } /* Dari 2.5rem */
}
```

### Menambah Custom Breakpoint

```css
@media (max-width: 1024px) {
    .project-card {
        grid-column: span 1;
    }
}
```

---

## 9️⃣ ABOUT SECTION CUSTOMIZATION

### Mengubah About Text

```html
<p class="text-lg leading-relaxed mb-6 text-blue-300">
    Ubah teks ini dengan bio Anda...
</p>
```

### Menambah Experience Section

Tambahkan sebelum closing `</section>`:
```html
<div class="divider"></div>

<div class="mt-16">
    <h3 class="neon-glow-pink mb-6">EXPERIENCE</h3>
    <div class="space-y-6">
        <div class="border-l-4 border-blue-400 pl-6">
            <h4 class="text-blue-300 font-bold">Senior Developer</h4>
            <p class="text-sm text-gray-400">Tech Company • 2022 - Present</p>
            <p class="text-sm mt-2">Deskripsi pengalaman kerja...</p>
        </div>
    </div>
</div>
```

---

## 🔟 ADVANCED CUSTOMIZATION

### Menambah Dark Mode Toggle

Tambahkan di nav:
```html
<button id="theme-toggle" class="btn-glow-blue">THEME</button>
```

Tambahkan JavaScript:
```javascript
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
    document.body.style.filter = document.body.style.filter === 'invert(1)' ? 'none' : 'invert(1)';
});
```

### Custom Google Analytics

Tambahkan sebelum `</head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_ID');
</script>
```

---

## 📋 CHECKLIST SEBELUM DEPLOY

- [ ] Ubah nama & foto profil
- [ ] Ganti dengan project Anda sendiri
- [ ] Update contact links
- [ ] Periksa semua link berfungsi
- [ ] Test di mobile & desktop
- [ ] Compress images
- [ ] Update meta description di `<head>`
- [ ] Periksa typo & grammar
- [ ] Test semua animasi di berbagai browser

---

## 🆘 TROUBLESHOOTING

**Q: Gambar tidak muncul**
A: Pastikan path gambar benar. Gunakan path relatif jika di folder yang sama.

**Q: Animasi tidak berfungsi**
A: Periksa browser support. Update browser Anda ke versi terbaru.

**Q: Font tidak load**
A: Pastikan internet connection baik. Cek Network tab di DevTools.

---

**Selamat customize! 🚀**

