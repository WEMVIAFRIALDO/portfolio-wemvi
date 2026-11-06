# Portofolio Wemvi Afrialdo

Website portofolio pribadi Wemvi Afrialdo, Mobile & Web Developer sekaligus mahasiswa Pendidikan Teknologi Informasi Universitas Lampung. Website ini menampilkan profil, keahlian, proyek beserta halaman detailnya, pengalaman, pendidikan, dan kontak, dengan tampilan gelap yang menyesuaikan layar HP, tablet, dan laptop.

## Cara menjalankan

Pastikan [Node.js](https://nodejs.org) versi 20.9 atau lebih baru sudah terpasang, lalu jalankan:

```bash
git clone <url-repositori-ini>
cd <nama-folder-repositori>
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

Untuk menjalankan versi production:

```bash
npm run build
npm start
```

Koneksi internet dibutuhkan saat build untuk mengunduh font, dan saat website dibuka di layar laptop untuk memuat scene 3D Spline.

## Mengubah isi

Semua data portofolio ada di `data/portfolio.ts`. Untuk menambahkan screenshot proyek, simpan gambarnya di `public/projects/`, lalu isi `image` atau `gallery` pada proyek terkait. Selama belum diisi, website menampilkan placeholder.

## Tools yang digunakan

- [Next.js](https://nextjs.org): framework website
- [Tailwind CSS](https://tailwindcss.com): styling
- [Motion](https://motion.dev): animasi
- [Lenis](https://lenis.darkroom.engineering): smooth scrolling
- Komponen dari [21st.dev](https://21st.dev): dasar komponen hero dan scene 3D
- [Spline](https://spline.design): scene 3D interaktif
- Plugin Claude Code `frontend-design` dan `ui-ux-pro-max`: membantu desain dan review tampilan
