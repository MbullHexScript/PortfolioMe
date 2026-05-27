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
  role: 'Software Engineer',
  tagline: 'Building experimental software, AI-powered utilities, and low-level systems that blend performance, automation, and modern engineering.',
  quote: '"Engineering tools, systems, and ideas into reality."',
  location: 'Serang, Banten — Indonesia',
  email: 'naufalafaf09@gmail.com',
  github: 'https://github.com/MbullHexScript',
  githubUsername: 'MbullHexScript',
  instagram: '@AlwaysVodka_',
};

export const stats: Stat[] = [
  { num: '6',   suffix: '+',  label: 'Proyek Selesai' },
  { num: '12',  suffix: '+',  label: 'Tech Stack' },
  { num: '1',   suffix: '+',  label: 'Tahun Coding' },
  { num: '100', suffix: '%',  label: 'Komitmen' },
];

export const skills: Skill[] = [
  { name: 'Visual Studio Code', cat: 'tool', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', level: 95, color: ['#007ACC', '#1BA8E0'] },
  { name: 'Visual Studio', cat: 'tool', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg', level: 80, color: ['#68217A', '#9B4F96'] },
  { name: 'Jupyter Notebook', cat: 'tool', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg', level: 85, color: ['#F37626', '#F5A623'] },
  { name: 'GitHub', cat: 'tool', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',level: 88, color: ['#24292E', '#57606A'], invert: true },
  { name: 'Canva', cat: 'tool', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg', level: 80, color: ['#00C4CC', '#7D2AE8'] },
  { name: 'Laravel', cat: 'framework', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg', level: 70, color: ['#FF2D20', '#FB5034'] },
  { name: 'Dart', cat: 'language', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg', level: 85, color: ['#0175C2', '#13B9FD'] },
  { name: 'Flutter', cat: 'framework', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg', level: 80, color: ['#02569B', '#54C5F8']},
  { name: 'Python', cat: 'language', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', level: 90, color: ['#FFCA28','#4FBDBA'] },
  { name: 'Lua', cat: 'language', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/lua/lua-plain.svg', level: 75, color: ['#00007C', '#6E6ECC'], invert: true },
  { name: 'C++', cat: 'language',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg', level: 65, color: ['#00599C', '#004482'] },
  { name: 'C#', cat: 'language',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg', level: 65, color: ['#68217A', '#9A4993'] },

];

export const projects: Project[] = [
  { name: 'LuaShell',
    image: LuaShellIMG,
    desc: 'Implementasi custom CLI shell yang menerapkan Lua sebagai bahasa utama untuk command processing dan system configuration. Arsitektur clean layer separation antara Rust (host operations) dan Lua (business logic) extensibility tinggi melalui plugin system, event hooks, dan dynamic configuration tidak perlu compile ulang.',
    tags: ['Lua','Rust','PowerShell','Shell'],
    bg: 'linear-gradient(135deg,#072227,#0d3a3a)',
    demo: 'https://github.com/MbullHexScript/LuaShell.git',
    github: 'https://github.com/MbullHexScript/LuaShell.git'
  },
  { name: 'Pes21 Downloader',
    image: Pes21DownloaderIMG,
    desc: 'Dashboard untuk download semua kebutuhan Game PES 2021, mulai dari patch, mod, hingga update terbaru.',
    tags: ['Astro','TypeScript','JavaScript','CSS'],
    bg: 'linear-gradient(135deg,#072227,#0f2e30)',
    demo: 'https://mbull-pes21home.vercel.app/',
    github: 'https://github.com/MbullHexScript/Mbull-Pes21Home.git'
  },
  { name: 'TugasKu',
    image: tugaskuIMG,
    desc: 'Aplikasi Mobile untuk Android bertujuan melacak semua tugas yang harus dikerjakan oleh siswa/mahasiswa, dengan cara menginput matakuliah dan tugas nya.',
    tags: ['Dart','Kotlin'],
    bg: 'linear-gradient(135deg,#072227,#0a2525)',
    demo: 'https://github.com/MbullHexScript',
    github: 'https://github.com/MbullHexScript'
  },
  { name: 'SportEase',
    image: SportEaseIMG,
    desc: 'Website simulasi berbentuk landing page untuk booking tempat olahraga sederhana.',
    tags: ['HTML','CSS','JavaScript'],
    bg: 'linear-gradient(135deg,#0d2a2a,#0f3333)',
    demo: 'https://mbullhexscript.github.io/SportEase/',
    github: 'https://github.com/MbullHexScript/SportEase.git'
  },
  { name: 'Complaint Management System Desa',
    image: scmsdesaIMG,
    desc: 'Platform sistem pelaporan masyarakat didesa dengan UX sederhana untuk keluhan infrastruktur, pelayanan, sosial & keamanan.',
    tags: ['TypeScript','CSS','PostgreSQL'],
    bg: 'linear-gradient(135deg,#091220,#0c2020)',
    demo: 'https://github.com/MbullHexScript',
    github: 'https://github.com/MbullHexScript'
  },
  { name: 'LuaHook',
    image: luahookIMG,
    desc: 'Pemisah logika dari kode inti sistem, sehingga aturan/rules bisa diubah tanpa restart aplikasi atau compile ulang.',
    tags: ['Python','Lua'],

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
    icon: '🎓' },
];

export const competencies: Competency[] = [
  { name: 'Dart / Flutter', pct: 80, color: ['#02569B', '#54C5F8'] },
  { name: 'C++ / C#', pct: 85, color: ['#00599C','#68217A'] },
  { name: 'Python / Jupyter', pct: 90, color: ['#3776AB','#F37626'] },
  { name: 'Machine Learning', pct: 70, color: ['#6C3ECC', '#A78BFA'] },
  { name: 'Git / GitHub', pct: 88, color: ['#072227','#35858B'] },
];
