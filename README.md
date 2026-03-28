# NaufalNyaa Portfolio v2 — React + TypeScript

Website portfolio Naufal Afaf Ekayana. Dibangun dengan React + TypeScript, animasi GSAP & Framer Motion, tema Lime Green & Black.

## Tech Stack
- **React 19** + **TypeScript** + **Vite**
- **Framer Motion** — page transitions, scroll animations, hover effects
- **GSAP** — grid line reveal, mouse-follow glow di Hero
- **CSS Custom Properties** — tema warna terpusat di index.css

## Struktur
```
src/
├── components/         ← Navbar, Hero, About, Skills, Projects, Education, Contact, Footer, Cursor
├── data/portfolio.ts   ← Semua konten (EDIT DI SINI)
├── types/index.ts      ← TypeScript interfaces
├── App.tsx
├── main.tsx
└── index.css           ← CSS variables & global styles
```

## Cara Jalankan
```bash
npm install
npm run dev        # development
npm run build      # production build
```

## Kustomisasi
- **Data & konten** → edit `src/data/portfolio.ts`
- **Warna tema** → edit `:root` di `src/index.css`
- **Foto profil** → taruh foto di `src/assets/photo.jpg`, lalu di `Hero.tsx` ubah:
  ```ts
  // Ganti baris const PHOTO = 'data:image/png;base64,...'
  import PHOTO from '../assets/photo.jpg';
  ```
