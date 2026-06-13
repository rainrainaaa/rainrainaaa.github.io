# 🚀 DEPLOYMENT GUIDE - Cyberpunk Portfolio

Panduan lengkap untuk deploy portfolio Anda ke berbagai platform hosting.

---

## 1️⃣ DEPLOYMENT KE NETLIFY (REKOMENDASI - FREE)

### Metode A: Drag & Drop (Tercepat)

1. Buka [netlify.com](https://netlify.com)
2. Scroll down ke section "Drop your site here"
3. Drag file `index.html` ke area yang ditunjukkan
4. ✅ Selesai! Portfolio Anda online dalam 30 detik
5. Copy URL yang diberikan Netlify

### Metode B: Via GitHub (Recommended)

1. Push file ke GitHub repository
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git push origin main
   ```

2. Di Netlify, klik "New site from Git"
3. Connect dengan GitHub
4. Select repository
5. Deploy! ✅

### Custom Domain di Netlify

1. Dashboard → Domain settings
2. Klik "Add custom domain"
3. Masukkan domain Anda
4. Ikuti instruksi DNS

---

## 2️⃣ DEPLOYMENT KE GITHUB PAGES (FREE)

### Setup Repository

1. Buat repository baru bernama:
   ```
   username.github.io
   ```
   (ganti `username` dengan GitHub username Anda)

2. Push `index.html`:
   ```bash
   git init
   git add index.html README.md CUSTOMIZATION.md
   git commit -m "Add portfolio"
   git remote add origin https://github.com/username/username.github.io
   git push origin main
   ```

3. ✅ Portfolio siap di: `https://username.github.io`

### Dengan Custom Domain

1. Di repository, go to Settings → Pages
2. Custom domain → masukkan domain Anda
3. Update DNS settings di domain provider:
   - Tipe: CNAME
   - Name: www
   - Value: username.github.io

---

## 3️⃣ DEPLOYMENT KE VERCEL (FREE)

### Via GitHub

1. Buka [vercel.com](https://vercel.com)
2. Klik "New Project"
3. Import dari GitHub
4. Select repository
5. Deploy! ✅

### Via Upload

1. Di Vercel, klik "New Project"
2. Select "Continue from scratch"
3. Upload folder portfolio
4. Deploy otomatis

---

## 4️⃣ DEPLOYMENT KE HEROKU (PAID TIER)

### Setup Heroku

1. Install Heroku CLI: `npm install -g heroku`
2. Login: `heroku login`
3. Create app: `heroku create app-name`
4. Tambah `Procfile`:
   ```
   web: php -S localhost:$PORT
   ```
   (atau gunakan static hosting)

5. Push: `git push heroku main`

### Atau gunakan static buildpack:

```bash
heroku buildpacks:set https://github.com/heroku/heroku-buildpack-static.git
git push heroku main
```

---

## 5️⃣ DEPLOYMENT KE AWS S3 + CloudFront

### S3 Setup

1. Buat S3 bucket
2. Enable "Static website hosting"
3. Upload `index.html`
4. Setup permissions:
   ```json
   {
       "Version": "2012-10-17",
       "Statement": [{
           "Sid": "PublicRead",
           "Effect": "Allow",
           "Principal": "*",
           "Action": "s3:GetObject",
           "Resource": "arn:aws:s3:::bucket-name/*"
       }]
   }
   ```

5. Get public URL ✅

### CloudFront Setup (untuk CDN)

1. Create CloudFront distribution
2. S3 bucket sebagai origin
3. Enable caching
4. Deploy! ✅

---

## 6️⃣ DEPLOYMENT MANUAL (VPS/Shared Hosting)

### Via FTP

1. Buat folder `portfolio` di public_html
2. Upload via FTP:
   - `index.html`
   - `README.md`
   - Semua asset lainnya

3. Access via `yourdomain.com/portfolio`

### Via SSH

```bash
scp index.html user@server.com:/home/user/public_html/
scp README.md user@server.com:/home/user/public_html/
```

---

## 7️⃣ DEPLOYMENT KE FIREBASE HOSTING (GOOGLE)

### Setup Firebase

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialize
firebase init hosting

# Deploy
firebase deploy
```

---

## 8️⃣ MENGGUNAKAN LOCAL SERVER (DEVELOPMENT)

### Python 3

```bash
python -m http.server 8000
```

Access: `http://localhost:8000`

### Python 2

```bash
python -m SimpleHTTPServer 8000
```

### Node.js

```bash
npx http-server
```

### PHP

```bash
php -S localhost:8000
```

---

## 9️⃣ CUSTOM DOMAIN SETUP

### Dari Domain Provider

1. Beli domain dari:
   - Namecheap
   - GoDaddy
   - Cloudflare
   - Google Domains

2. Update DNS:
   - Tergantung hosting platform
   - Netlify: Auto setup
   - GitHub Pages: CNAME record
   - Vercel: CNAME atau A record

3. Tunggu DNS propagation (24 jam)

4. ✅ Akses via domain Anda!

---

## 🔟 PRE-DEPLOYMENT CHECKLIST

- [ ] **Images Optimized**
  ```bash
  # Compress dengan TinyPNG
  # atau ImageOptim
  ```

- [ ] **SEO Tags Updated**
  ```html
  <meta name="description" content="Your description">
  <meta name="keywords" content="developer, portfolio">
  <title>Your Name - Developer Portfolio</title>
  ```

- [ ] **All Links Tested**
  - Social media links
  - Project links
  - Email links
  - Navigation

- [ ] **Mobile Responsive Tested**
  - DevTools (F12) → Device Toolbar
  - Test di iPhone, Android

- [ ] **Browser Compatibility**
  - Chrome ✓
  - Firefox ✓
  - Safari ✓
  - Edge ✓

- [ ] **Performance Checked**
  - DevTools → Lighthouse
  - Target: 90+ score

- [ ] **Analytics Added** (optional)
  ```html
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
  ```

---

## 1️⃣1️⃣ PERFORMANCE TIPS

### Image Optimization

```bash
# Using ImageMagick
convert input.jpg -quality 85 output.jpg

# Using online: tinypng.com
```

### CSS Minification

```bash
# Using online tools
# Or with build tools like Webpack
npm install -g clean-css-cli
cleancss style.css -o style.min.css
```

### Lazy Loading Images

```html
<img src="image.jpg" loading="lazy" alt="Description">
```

---

## 1️⃣2️⃣ SSL CERTIFICATE (HTTPS)

### Netlify/Vercel/GitHub Pages
✅ Automatic HTTPS (Free)

### Custom VPS
```bash
# Using Let's Encrypt
sudo certbot certonly --standalone -d yourdomain.com
```

### AWS
- Use ACM (AWS Certificate Manager) - Free
- Attach ke CloudFront

---

## 1️⃣3️⃣ MONITORING & ANALYTICS

### Google Analytics

```html
<!-- Add before </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Uptime Monitoring

- UptimeRobot (Free)
- Pingdom
- StatusCake

### Performance Monitoring

- Google Lighthouse
- GTmetrix
- WebPageTest

---

## 1️⃣4️⃣ TROUBLESHOOTING

### Issue: 404 Error

**Solution:**
- Check file paths
- Verify file exists
- Check file naming (case-sensitive)

### Issue: Styles Not Loading

**Solution:**
- Clear browser cache (Ctrl+Shift+Del)
- Check CSS file path
- Verify Tailwind CDN is loading

### Issue: Images Broken

**Solution:**
- Verify image paths
- Check image file format
- Compress large images

### Issue: Slow Performance

**Solution:**
- Optimize images
- Minify CSS/JS
- Use CDN for assets
- Enable caching headers

---

## 1️⃣5️⃣ RECOMMENDED HOSTING SUMMARY

| Platform | Price | Ease | Custom Domain | Deploy Time |
|----------|-------|------|---------------|------------|
| Netlify | FREE | ⭐⭐⭐⭐⭐ | ✅ | 30s |
| Vercel | FREE | ⭐⭐⭐⭐⭐ | ✅ | 1m |
| GitHub Pages | FREE | ⭐⭐⭐⭐ | ✅ | 2m |
| Firebase | FREE | ⭐⭐⭐⭐ | ✅ | 1m |
| Heroku | $5/mo | ⭐⭐⭐ | ✅ | 2m |
| AWS S3 | $1-5/mo | ⭐⭐ | ✅ | 5m |

**REKOMENDASI TERBAIK: Netlify (tercepat & termudah) 🎯**

---

**Selamat deploy! 🚀✨**

