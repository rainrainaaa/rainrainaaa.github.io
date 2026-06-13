/* 
   CYBERPUNK PORTFOLIO - COLOR PRESETS
   Copy-paste seluruh section <style> dari preset yang Anda pilih ke index.html
*/

/* ============================================================
   🟢 PRESET 1: ORIGINAL CYBERPUNK GREEN (DEFAULT)
   ============================================================ */

/* 
   Color Scheme:
   - Primary: #00ff99 (Neon Green)
   - Secondary: #0064ff (Neon Blue)
   - Accent: #ff0096 (Neon Pink)
   - Dark BG: #0a0e27
   
   Ini adalah default, tidak perlu diubah!
*/


/* ============================================================
   🔵 PRESET 2: COOL CYAN THEME
   ============================================================ */

/*
   Gunakan color substitution ini di index.html:
   
   Find & Replace:
   - #00ff99 → #00ffff (Cyan)
   - rgba(0, 255, 150, → rgba(0, 255, 255,
   - #0064ff → #0050ff (Deep Blue)
   - rgba(0, 100, 255, → rgba(0, 80, 255,
   
   Result: Cyber blue/cyan theme yang lebih cool
*/


/* ============================================================
   🟣 PRESET 3: PURPLE DREAM THEME
   ============================================================ */

/*
   Find & Replace:
   - #00ff99 → #c000ff (Purple)
   - rgba(0, 255, 150, → rgba(192, 0, 255,
   - #ff0096 → #00ffff (Cyan)
   - rgba(255, 0, 150, → rgba(0, 255, 255,
   - #0a0e27 → #1a0033 (Dark Purple BG)
   
   Result: Purple-dominated mystical theme
*/


/* ============================================================
   🔴 PRESET 4: HOT MAGENTA THEME
   ============================================================ */

/*
   Find & Replace:
   - #00ff99 → #ff0080 (Hot Magenta)
   - rgba(0, 255, 150, → rgba(255, 0, 128,
   - #0064ff → #ff6600 (Orange)
   - rgba(0, 100, 255, → rgba(255, 102, 0,
   - #ff0096 → #ffff00 (Yellow)
   - rgba(255, 0, 150, → rgba(255, 255, 0,
   
   Result: Hot, energetic theme dengan magenta dominan
*/


/* ============================================================
   ⚪ PRESET 5: DARK GRAYSCALE THEME
   ============================================================ */

/*
   Find & Replace:
   - #00ff99 → #ffffff (White)
   - rgba(0, 255, 150, → rgba(255, 255, 255,
   - #0064ff → #cccccc (Light Gray)
   - rgba(0, 100, 255, → rgba(204, 204, 204,
   - #ff0096 → #888888 (Dark Gray)
   - rgba(255, 0, 150, → rgba(136, 136, 136,
   - #0a0e27 → #1a1a1a (Almost Black)
   
   Result: Professional dark minimalist theme
*/


/* ============================================================
   🟠 PRESET 6: SUNSET ORANGE THEME
   ============================================================ */

/*
   Find & Replace:
   - #00ff99 → #ffaa00 (Golden Orange)
   - rgba(0, 255, 150, → rgba(255, 170, 0,
   - #0064ff → #ff6600 (Bright Orange)
   - rgba(0, 100, 255, → rgba(255, 102, 0,
   - #ff0096 → #ff0033 (Deep Red)
   - rgba(255, 0, 150, → rgba(255, 0, 51,
   
   Result: Warm sunset vibes
*/


/* ============================================================
   💚 PRESET 7: MATRIX GREEN (CLASSIC)
   ============================================================ */

/*
   Find & Replace:
   - #00ff99 → #00ff00 (Pure Green)
   - rgba(0, 255, 150, → rgba(0, 255, 0,
   - #0064ff → #00aa00 (Dark Green)
   - rgba(0, 100, 255, → rgba(0, 170, 0,
   - #ff0096 → #00ff88 (Light Green)
   - rgba(255, 0, 150, → rgba(0, 255, 136,
   - #0a0e27 → #001a00 (Very Dark Green)
   
   Result: Classic Matrix-style green terminal
*/


/* ============================================================
   🎮 PRESET 8: RETRO ARCADE THEME
   ============================================================ */

/*
   Find & Replace:
   - #00ff99 → #ff00ff (Magenta)
   - rgba(0, 255, 150, → rgba(255, 0, 255,
   - #0064ff → #00ffff (Cyan)
   - rgba(0, 100, 255, → rgba(0, 255, 255,
   - #ff0096 → #ffff00 (Yellow)
   - rgba(255, 0, 150, → rgba(255, 255, 0,
   - #0a0e27 → #000033 (Very Dark Blue)
   
   Result: 80s arcade game aesthetic
*/


/* ============================================================
   ❄️ PRESET 9: ICE BLUE THEME
   ============================================================ */

/*
   Find & Replace:
   - #00ff99 → #00e5ff (Ice Cyan)
   - rgba(0, 255, 150, → rgba(0, 229, 255,
   - #0064ff → #0099ff (Sky Blue)
   - rgba(0, 100, 255, → rgba(0, 153, 255,
   - #ff0096 → #0066ff (Royal Blue)
   - rgba(255, 0, 150, → rgba(0, 102, 255,
   - #0a0e27 → #0a1a2e (Deep Blue)
   
   Result: Cool, icy blue theme
*/


/* ============================================================
   🌈 PRESET 10: RAINBOW GRADIENT THEME
   ============================================================ */

/*
   Advanced approach - ubah gradient backgrounds:
   
   Dari:
   from-blue-900 to-black
   
   Menjadi:
   from-purple-900 via-pink-900 to-orange-900
   
   Kombinasi warna gradien:
   - Purple + Pink + Orange
   - Blue + Green + Purple
   - Red + Orange + Yellow
   - Cyan + Blue + Purple
*/


/* ============================================================
   HOW TO APPLY PRESETS
   ============================================================
   
   METHOD 1: Manual Find & Replace
   1. Open index.html in text editor
   2. Use Find & Replace (Ctrl+H)
   3. Follow the "Find & Replace" section for each preset
   4. Apply all changes from the preset
   5. Save & reload browser
   
   METHOD 2: CSS Variables (Advanced)
   Add this at top of <style>:
   
   :root {
       --primary: #00ff99;
       --secondary: #0064ff;
       --accent: #ff0096;
       --dark-bg: #0a0e27;
   }
   
   Then replace all color values with CSS variables
   
   METHOD 3: Browser DevTools
   1. Open in browser
   2. Press F12 to open DevTools
   3. Go to Elements/Inspector
   4. Find color values in <style>
   5. Double-click to edit and preview
   6. Copy the CSS when happy
   7. Update index.html

   ============================================================
*/


/* ============================================================
   QUICK COLOR REFERENCE
   ============================================================ */

/*
   HEX TO RGB CONVERSION (for CSS var usage):
   
   #00ff99 = rgb(0, 255, 153)
   #0064ff = rgb(0, 100, 255)
   #ff0096 = rgb(255, 0, 150)
   #0a0e27 = rgb(10, 14, 39)
   
   Replace in rgba() functions as:
   rgba(0, 255, 150, ...) instead of rgba(0, 255, 153, ...)
   
   (slight difference but visually same)
*/


/* ============================================================
   POPULAR COLOR COMBINATIONS FOR CYBERPUNK
   ============================================================ */

/*
   🟢 Green + Blue + Pink (Original)
   Primary: #00ff99, Secondary: #0064ff, Accent: #ff0096
   
   🟣 Purple + Cyan + Yellow
   Primary: #b400ff, Secondary: #00ffff, Accent: #ffff00
   
   🔵 Blue + Orange + Purple
   Primary: #0099ff, Secondary: #ff6600, Accent: #9933ff
   
   🔴 Red + Green + Cyan
   Primary: #ff0033, Secondary: #00ff00, Accent: #00ffff
   
   ⚪ Teal + Pink + White
   Primary: #00ffaa, Secondary: #ff0088, Accent: #ffffff
*/

