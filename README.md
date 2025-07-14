📊 Facebook Ads Analyzer - Telegram Integration 

Aplikasi web Realtime Analytics & Monitoring iklan Facebook Ads, terintegrasi dengan Telegram Bot untuk notifikasi otomatis!
Mudah di-deploy via Netlify. Cocok untuk digital marketer, agency, maupun UMKM yang ingin memantau kampanye Iklan Facebook dengan praktis. 
✨ Fitur Utama 

     🔍 Analisa performa detail: CTR, CPC, CPM, ROAS, Conversion Rate, dsb
     🤖 Auto notifikasi Telegram saat performa turun atau event penting
     📈 Realtime monitoring Campaign
     🟢 Simulasi Demo Mode tanpa akses Facebook API (data dummy interaktif)
     📝 Rekomendasi sukses & optimasi otomatis
     🏆 Skoring campaign A/B/C/D/Excellent
     🚀 Deploy instant di Netlify (tanpa CORS problem, serverless)
     🔐 Data tetap lokal/browser (kecuali saat kirim Telegram)
     

🚀 Cara Deploy & Pakai 

     Deploy ke Netlify
         Clone repo ini
         Pastikan struktur:
   
        1 netlify/functions/send-telegram.js
        2 netlify.toml
        3 index.html
        
         Deploy ke Netlify (via Git atau drag&drop)
         
     Setup Telegram Bot
         Buat bot: @BotFather 
         Dapatkan Bot Token & Chat ID (@userinfobot )
         
     Isi credentials di aplikasi
     Isi Facebook Access Token & Ad Account (atau klik Demo Mode untuk simulasi)
     Analisa, monitoring, & kirim hasil ke Telegram!
     

🔧 Stack & Teknologi 

     Frontend: HTML, TailwindCSS (CDN, untuk demo)
     Serverless: Netlify Functions (Node.js) untuk Proxy ke Telegram API
     Deploy: Netlify (otomatis tanpa ribet)
     Integration: Telegram Bot API, Facebook Marketing API (opsional, pada mode real)
     

📷 Tampilan (Preview Screenshot) 

![Uploading image.png…]()
     

💻 Struktur File Utama 
1 ├── index.html               # UI/Front-end aplikasi utama
2 ├── netlify.functions/
3 └── send-telegram.js         # Function kirim ke Telegram
4 ├── netlify.toml             # Konfigurasi Netlify build & functions
 
❓ FAQ 

Q: Apakah analisa bisa tanpa Facebook token?
A: Ya, aktifkan Demo Mode untuk simulasi data. 

Q: Data saya aman?
A: Semua data tetap di browser lokal, kecuali kamu klik "Kirim ke Telegram". 

Q: Bisa deploy selain Netlify?
A: Ya, bisa di Vercel/Cyclic dsb, selama mendukung Serverless Function Node.js. 
📩 Kontribusi & Masukan 

     Pull request & issue welcome!
     Saran, bug, masalah deploy Telegram/API, silakan lapor via issue github 
     

🏷️ Lisensi 

MIT License. 
