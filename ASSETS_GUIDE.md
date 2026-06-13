# 🖼️ ASSETS & IMAGES GUIDE

Panduan menggunakan images dan assets di portfolio Anda.

---

## 📸 PROFIL PHOTO

### Rekomendasi
- **Ukuran**: 224x224 px atau 256x256 px (square)
- **Format**: JPG atau PNG
- **Size**: < 100KB (compress dengan TinyPNG)
- **Style**: Professional headshot atau tech aesthetic
- **Background**: Dark atau solid color (match dengan theme)

### Cara Mengubah:
```html
<!-- Dari ini: -->
<img src="https://via.placeholder.com/224/0a0e27/00ff99?text=Developer" alt="Developer Profile">

<!-- Ke ini: -->
<img src="profile.jpg" alt="Your Name">
```

### Tools untuk Edit Foto:
- **Canva** (canva.com) - Template siap pakai
- **Pixlr** (pixlr.com) - Free editor
- **Photoshop** - Professional
- **GIMP** - Open source gratis

### Tempat Foto Gratis Berkualitas:
- Unsplash (unsplash.com)
- Pexels (pexels.com)
- Pixabay (pixabay.com)
- Flaticon (flaticon.com)

---

## 🖼️ PROJECT IMAGES

### Rekomendasi
- **Ukuran**: 300x200 px (landscape/wide)
- **Format**: JPG atau PNG
- **Size**: < 150KB per image
- **Aspect Ratio**: 3:2 atau 16:10

### Cara Menambah Project Image:
```html
<div class="mb-4 h-40 bg-gradient-to-br from-blue-500 to-purple-500 rounded flex items-center justify-center overflow-hidden">
    <img src="project1.jpg" alt="Project Name">
</div>
```

### Tools untuk Capture Screenshot:
- **ShareX** (Free, Windows)
- **Greenshot** (Free, Windows)
- **Mac Screenshot** (Built-in)
- **Figma** (figma.com) - Design mockups
- **Framer** (framer.com) - Design mockups

---

## 🎨 MOCKUP & PREVIEW

### Tempat Membuat Mockup Gratis:
- **Mockup Generator** (mockup-generator.com)
- **Smartmockups** (smartmockups.com)
- **Placeit** (placeit.net)
- **Figma** (figma.com)

### Contoh: Device Mockup
```html
<!-- Buat dengan Figma atau Mockup Generator, kemudian embed -->
<img src="laptop-mockup.png" alt="Project Screenshot">
```

---

## 🌈 PLACEHOLDER IMAGES ONLINE

Jika ingin test sebelum punya gambar sendiri:

### Image Placeholder Services:
```html
<!-- Random cyberpunk images -->
<img src="https://via.placeholder.com/300/0a0e27/00ff99" alt="Project">

<!-- Lorem Picsum (random photos) -->
<img src="https://picsum.photos/300/200?random=1" alt="Project">

<!-- PlaceImg -->
<img src="https://placeimg.com/300/200/tech" alt="Project">

<!-- Unsplash Random -->
<img src="https://source.unsplash.com/300x200/?cyberpunk" alt="Project">

<!-- Placeholder.com -->
<img src="https://via.placeholder.com/300x200/0a0e27/00ff99?text=Project+Demo" alt="Project">
```

---

## 🎬 VIDEO BACKGROUND (ADVANCED)

Jika ingin add video background di hero:

```html
<video autoplay muted loop style="position: absolute; width: 100%; height: 100%; object-fit: cover; z-index: -1;">
    <source src="background.mp4" type="video/mp4">
</video>
```

### Video Resources:
- Pexels Videos (pexels.com/videos) - Free stock videos
- Pixabay Videos (pixabay.com/videos) - Free stock videos
- Coverr (coverr.co) - Free background videos

### Video Converter:
- Online-Convert (online-convert.com)
- CloudConvert (cloudconvert.com)
- FFmpeg (command-line)

---

## 🎵 BACKGROUND MUSIC (OPTIONAL)

Tambah audio di hero section:

```html
<audio autoplay muted loop style="display: none;">
    <source src="ambient.mp3" type="audio/mpeg">
</audio>
```

### Audio Resources:
- Freepik Music (freepik.com/music)
- Pixabay Music (pixabay.com/music)
- Epidemic Sound (epidemicsound.com) - Paid
- Artlist (artlist.io) - Paid

---

## 🖥️ ICON & LOGO

### Font Awesome Icons (Free CDN):
```html
<!-- Add di <head> -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

<!-- Gunakan di HTML -->
<i class="fab fa-github"></i>
<i class="fab fa-linkedin"></i>
<i class="fab fa-twitter"></i>
```

### Icon Libraries:
- **Font Awesome** (fontawesome.com) - 2000+ icons
- **Feather Icons** (feathericons.com) - Minimal design
- **Material Icons** (google) - 1000+ icons
- **Bootstrap Icons** (bootstrap icons) - Free

### Logo Design Tools:
- **Looka** (looka.com) - AI logo generator
- **Canva** (canva.com) - Logo templates
- **Figma** (figma.com) - Design custom
- **Adobe Express** (express.adobe.com) - Free logo maker

---

## 📊 FAVICON

Ubah browser tab icon:

```html
<!-- Add di <head> -->
<link rel="icon" href="favicon.ico" type="image/x-icon">
```

### Cara Membuat Favicon:
1. Desain image 32x32 px
2. Convert ke .ico format di: **favicon-generator.org**
3. Save sebagai `favicon.ico`
4. Add di HTML seperti di atas

---

## 🎨 SVG GRAPHICS (RECOMMENDED)

SVG lebih ringan daripada PNG/JPG. Gunakan untuk:

### Icons:
```html
<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <!-- SVG path -->
</svg>
```

### Get SVG Icons:
- **Feather Icons** (feathericons.com)
- **Heroicons** (heroicons.com)
- **Tabler Icons** (tabler-icons.io)
- **Remix Icon** (remixicon.com)

---

## 📱 SOCIAL MEDIA THUMBNAILS

Jika share di Twitter/LinkedIn, add:

```html
<!-- Open Graph Meta Tags -->
<meta property="og:title" content="Developer Portfolio">
<meta property="og:description" content="Modern cyberpunk portfolio">
<meta property="og:image" content="thumbnail.jpg">
<meta property="og:url" content="https://yoursite.com">

<!-- Twitter Cards -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="thumbnail.jpg">
```

### Thumbnail Size:
- **Open Graph**: 1200x630 px
- **Twitter**: 1024x512 px
- **LinkedIn**: 1200x627 px

---

## 🔗 IMAGE HOSTING

Jika tidak ingin host di folder yang sama:

### Free Image Hosting:
- **Imgur** (imgur.com)
- **imgbb** (imgbb.com)
- **Cloudinary** (cloudinary.com) - Free plan 25GB
- **AWS S3** - $$$
- **Firebase Storage** - Free 5GB

### Cara Upload & Get URL:
1. Upload gambar
2. Copy public URL
3. Use di `<img src="URL">`

---

## 📦 FOLDER STRUCTURE (RECOMMENDED)

```
portofolio_03/
├── index.html
├── assets/
│   ├── images/
│   │   ├── profile.jpg
│   │   ├── project1.jpg
│   │   ├── project2.jpg
│   │   └── project3.jpg
│   ├── icons/
│   │   └── favicon.ico
│   ├── videos/
│   │   └── background.mp4
│   └── audio/
│       └── ambient.mp3
├── README.md
├── CUSTOMIZATION.md
└── ...
```

Update HTML paths:
```html
<img src="assets/images/profile.jpg" alt="Profile">
```

---

## ✅ IMAGE OPTIMIZATION CHECKLIST

- [ ] Image adalah square (untuk profile)
- [ ] Ukuran tepat sesuai rekomendasi
- [ ] File size < 100KB (compress dengan TinyPNG)
- [ ] Format optimal (JPG untuk photos, PNG untuk graphics)
- [ ] Alt text sudah di-set
- [ ] Responsive images tested
- [ ] SEO meta tags sudah
- [ ] Social media thumbnails ready

---

## 🚀 TOOLS REKOMENDASI

| Kebutuhan | Tool | Link |
|-----------|------|------|
| Compress Image | TinyPNG | tinypng.com |
| Edit Foto | Canva | canva.com |
| Mockup | Figma | figma.com |
| Placeholder | Unsplash | unsplash.com |
| Icon | Font Awesome | fontawesome.com |
| Video | Pexels | pexels.com |

---

**Selamat menambahkan assets Anda! 🎨✨**

