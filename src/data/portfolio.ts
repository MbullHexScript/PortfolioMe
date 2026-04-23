import type { Skill, Project, EducationItem, Competency, Stat } from '../types';
const Pes21DownloaderIMG = "https://raw.githubusercontent.com/FrostGitFX/my-image-assets/main/image-portfolio/1.png";
const LuaShellIMG = "https://raw.githubusercontent.com/FrostGitFX/my-image-assets/main/image-portfolio/2.png";
const SportEaseIMG = "https://raw.githubusercontent.com/FrostGitFX/my-image-assets/main/image-portfolio/3.png";
const scmsdesaIMG = "https://raw.githubusercontent.com/FrostGitFX/my-image-assets/main/image-portfolio/4.png";
const luahookIMG = "https://raw.githubusercontent.com/FrostGitFX/my-image-assets/main/image-portfolio/5.png";
const tugaskuIMG = "https://raw.githubusercontent.com/FrostGitFX/my-image-assets/main/image-portfolio/TugasKu.png";

export const profile = {
  name: 'Naufal Afaf Ekayana',
  nickname: 'NaufalNyaa',
  role: 'Full-Stack Developer',
  tagline: 'A passionate application and web developer dedicated to crafting modern, high-performance digital experiences through innovative and user-friendly solutions.',
  quote: '"Evita, oppure assumitene il compito"',
  location: 'Serang, Banten — Indonesia',
  email: 'naufalafaf09@gmail.com',
  github: 'https://github.com/MbullHexScript',
  githubUsername: 'MbullHexScript',
  instagram: '@AlwaysVodka_',
  status: 'Open to Freelance Work',
};

export const stats: Stat[] = [
  { num: '6',   suffix: '+',  label: 'Proyek Selesai' },
  { num: '12',  suffix: '+',  label: 'Tech Stack' },
  { num: '1',   suffix: '+',  label: 'Tahun Coding' },
  { num: '100', suffix: '%',  label: 'Komitmen' },
];

export const skills: Skill[] = [
  { name: 'VS Code',      cat: 'tool',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',         level: 95, color: ['#007ACC','#4FC3F7'] },
  { name: 'React JS',     cat: 'framework', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',            level: 80, color: ['#61DAFB','#00BFFF'] },
  { name: 'Next JS',      cat: 'framework', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',          level: 75, color: ['#35858B','#4FBDBA'], invert: true },
  { name: 'Tailwind CSS', cat: 'framework', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',   level: 85, color: ['#06B6D4','#4FBDBA'] },
  { name: 'JavaScript',   cat: 'language',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',  level: 85, color: ['#F7DF1E','#4FBDBA'] },
  { name: 'Node JS',      cat: 'framework', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',          level: 70, color: ['#339933','#4FBDBA'] },
  { name: 'GitHub',       cat: 'tool',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',          level: 88, color: ['#35858B','#4FBDBA'], invert: true },
  { name: 'Canva',        cat: 'tool',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg',            level: 80, color: ['#00C4CC','#4FBDBA'] },
  { name: 'Python',     cat: 'language', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',   level: 65, color: ['#FFCA28','#4FBDBA'] },
  { name: 'HTML',         cat: 'language',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',            level: 92, color: ['#E34F26','#4FBDBA'] },
  { name: 'CSS',          cat: 'language',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',              level: 88, color: ['#1572B6','#4FBDBA'] },
  { name: 'TypeScript',   cat: 'language',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',  level: 65, color: ['#3178C6','#4FBDBA'] },
];

export const projects: Project[] = [
  { name: 'LuaShell',
    image: LuaShellIMG,
    desc: 'Implementasi custom CLI shell yang menerapkan Lua sebagai bahasa utama untuk command processing dan system configuration. Arsitektur clean layer separation antara Rust (host operations) dan Lua (business logic) extensibility tinggi melalui plugin system, event hooks, dan dynamic configuration tidak perlu compile ulang.',
    tags: ['Lua','Rust','PowerShell','Shell'],
    emoji: '🛒',
    bg: 'linear-gradient(135deg,#072227,#0d3a3a)',
    demo: 'https://github.com/MbullHexScript/LuaShell.git',
    github: 'https://github.com/MbullHexScript/LuaShell.git'
  },
  { name: 'Pes21 Downloader',
    image: Pes21DownloaderIMG,
    desc: 'Dashboard untuk download semua kebutuhan Game PES 2021, mulai dari patch, mod, hingga update terbaru.',
    tags: ['Astro','TypeScript','JavaScript','CSS'],
    emoji: '🎮',
    bg: 'linear-gradient(135deg,#072227,#0f2e30)',
    demo: 'https://mbull-pes21home.vercel.app/',
    github: 'https://github.com/MbullHexScript/Mbull-Pes21Home.git'
  },
  { name: 'TugasKu',
    image: tugaskuIMG,
    desc: 'Aplikasi Mobile untuk Android bertujuan melacak semua tugas yang harus dikerjakan oleh siswa/mahasiswa, dengan cara menginput matakuliah dan tugas nya.',
    tags: ['Dart','Kotlin'],
    emoji: '📱',
    bg: 'linear-gradient(135deg,#072227,#0a2525)',
    demo: 'https://github.com/MbullHexScript',
    github: 'https://github.com/MbullHexScript'
  },
  { name: 'SportEase',
    image: SportEaseIMG,
    desc: 'Website simulasi berbentuk landing page untuk booking tempat olahraga sederhana.',
    tags: ['HTML','CSS','JavaScript'],
    emoji: '💬',
    bg: 'linear-gradient(135deg,#0d2a2a,#0f3333)',
    demo: 'https://mbullhexscript.github.io/SportEase/',
    github: 'https://github.com/MbullHexScript/SportEase.git'
  },
  { name: 'Complaint Management System Desa',
    image: scmsdesaIMG,
    desc: 'Platform sistem pelaporan masyarakat didesa dengan UX sederhana untuk keluhan infrastruktur, pelayanan, sosial & keamanan.',
    tags: ['TypeScript','CSS','PostgreSQL'],
    emoji: '📝',
    bg: 'linear-gradient(135deg,#091220,#0c2020)',
    demo: 'https://github.com/MbullHexScript',
    github: 'https://github.com/MbullHexScript'
  },
  { name: 'LuaHook',
    image: luahookIMG,
    desc: 'Pemisah logika dari kode inti sistem, sehingga aturan/rules bisa diubah tanpa restart aplikasi atau compile ulang.',
    tags: ['Python','Lua'],
    emoji: '💀',
    bg: 'linear-gradient(135deg,#0a1720,#0e2222)',
    demo: 'https://github.com/MbullHexScript',
    github: 'https://github.com/MbullHexScript'
  },
];

export const education: EducationItem[] = [
  { period: '2024 — Sekarang',
    school: 'Universitas Islam Negeri SMH Banten',
    major: 'Teknik Informatika',
    desc: 'Belajar pemrograman, algoritma, dan pengembangan software. Aktif dalam berbagai proyek dan komunitas developer.',
    icon: '🎓' },
  { period: '2021 — 2024',
    school: 'SMK Negeri 1 Kragilan',
    major: 'Rekayasa Perangkat Lunak - RPL',
    desc: 'Belajar mengenal teknologi serta mulai belajar pemrograman seperti C++ & PHP.',
    icon: '💡' },
];

export const competencies: Competency[] = [
  { name: 'React / Next.js',          pct: 80, color: ['#35858B','#4FBDBA'] },
  { name: 'JavaScript / TypeScript',  pct: 85, color: ['#4FBDBA','#AEFEFF'] },
  { name: 'HTML / CSS / Tailwind',    pct: 90, color: ['#35858B','#4FBDBA'] },
  { name: 'Node.js',                  pct: 70, color: ['#4FBDBA','#072227'] },
  { name: 'Git / GitHub',             pct: 88, color: ['#072227','#35858B'] },
];
