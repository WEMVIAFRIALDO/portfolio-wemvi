# Wemvi Portfolio: Design System

Sumber token: `app/globals.css`. Komponen hero dari 21st.dev adalah acuan utama; hasil ui-ux-pro-max yang bertentangan dengan hero tidak dipakai.

## Arah
Dark only, hitam pekat, tipografi besar, satu warna aksen. Tidak ada tombol tema.

## Warna
| Token | Nilai | Pakai untuk |
|---|---|---|
| `background` | `#000000` | Latar halaman |
| `foreground` | `#FAFAFA` | Teks utama |
| `card` | `#0E0E0E` | Permukaan kartu |
| `popover` | `#0A0A0A` | Menu |
| `primary` | `#C3E41D` | Nama, aksen, label, ikon |
| `primary-foreground` | `#0A0A0A` | Teks di atas aksen |
| `secondary` / `muted` | `#171717` | Badge, area redup |
| `muted-foreground` | `#A3A3A3` | Teks sekunder |
| `accent` / `accent-foreground` | `#1F2408` / `#C3E41D` | Badge "Sedang Dipelajari" |
| `border` / `input` | `#262626` | Garis |
| `ring` | `#C3E41D` | Fokus keyboard |

`muted-foreground` sengaja lebih terang dari `neutral-500` di komponen hero asli, yang hanya sekitar 4.4:1 di atas hitam (di bawah batas 4.5:1).

## Tipografi
| Token | Font | Pakai untuk |
|---|---|---|
| `font-display` | Fira Code | Nama, judul, label, badge |
| `font-sans` | Antic (hanya 400) | Tagline, isi. Jangan ditebalkan. |
| `font-signature` | Yellowtail | Huruf signature "W" |
| `text-hero` | `min(20vw, 30svh)` | Nama di hero |

## Bentuk dan layout
- Radius dasar `0.75rem`. Foto selalu berbentuk pil vertikal.
- Lebar konten `max-w-6xl`, header `max-w-screen-2xl`.
- Section: `py-20` di semua ukuran, `px-4 sm:px-6`, `scroll-mt-20`.
- Header: tinggi 80px, `bg-background/70` + `backdrop-blur-md` + garis `border-border/60`, supaya konten tidak bertabrakan saat di-scroll.
- Hero di HP (di bawah 640px): foto besar di atas nama. Mulai `sm`: foto menumpuk di tengah nama.

- Semua section memakai komponen `Section`, supaya label dan judulnya seragam.
- Label kecil di atas judul: pil `bg-primary` dengan teks `primary-foreground`, tebal.
- Kartu: `Card` dengan `border-border`, hover `border-primary/50`. Tahun dan subjudul memakai `text-primary`.
- Timeline Pengalaman: garis `border-border`, titik `bg-primary`, tahun terbaru di atas.
- Ukuran teks minimum 14px; isi dan tagline minimum 16px. Lebar paragraf panjang `max-w-2xl`.
- `tracking-tighter` hanya untuk nama di hero; judul lain `tracking-tight` supaya huruf tidak menempel.
- Tablet (768 sampai 1023px): kartu proyek mendatar, kartu Skills dua kolom.
- Urutan halaman: Home, About, Skills, Projects, Experience, Education, Contact, Footer.

## Gerak (paket `motion`)
- Masuk section: `RevealGroup` + `RevealItem`, fade dan naik 16px, 450ms, jeda 80ms.
- Hero: `BlurText`, 500ms per segmen.
- Hover: 150 sampai 300ms, hanya warna atau skala.
- Smooth scrolling: Lenis (`components/smooth-scroll.tsx`), digerakkan oleh loop frame motion. Link ke section memakai `HashLink`, bukan `<a>` atau `<Link>` biasa.
- `prefers-reduced-motion`: `MotionConfig reducedMotion="user"`, smooth scroll dimatikan, Spline tidak dimuat.

## Keputusan terhadap hasil ui-ux-pro-max
| Hasil | Keputusan |
|---|---|
| Gaya Dark Mode (OLED), checklist kontras/fokus/reduced motion | Dipakai |
| Durasi stagger 300 sampai 450ms | Dipakai, diterapkan dengan `motion`, bukan GSAP |
| Palet slate + hijau `#22C55E` | Ditolak: berbenturan dengan hitam + lime hero |
| JetBrains Mono / IBM Plex Sans | Ditolak: hero memakai Fira Code + Antic |
| Pola FAQ/Documentation Landing | Ditolak: salah sasaran untuk portofolio |
