import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import type { Transition } from 'framer-motion';
import gsap from 'gsap';
import { profile, stats } from '../data/portfolio';
import './Hero.css';

const PHOTO = "https://raw.githubusercontent.com/FrostGitFX/my-image-assets/main/image-portfolio/gitpp.jpeg";

const tr = (delay = 0): Transition => ({
  duration: 0.7,
  delay,
  ease: [0.16, 1, 0.3, 1] as unknown as Transition['ease'],
});

export default function Hero() {
  const gridRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gridRef.current) {
      const lines = gridRef.current.querySelectorAll('.hero-grid-line');
      gsap.fromTo(lines,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 1.4, stagger: 0.08, ease: 'power3.out', delay: 0.3 }
      );
    }
    const onMove = (e: MouseEvent) => {
      if (glowRef.current) {
        gsap.to(glowRef.current, {
          x: e.clientX - window.innerWidth / 2,
          y: e.clientY - window.innerHeight / 2,
          duration: 1.2, ease: 'power2.out',
        });
      }
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section id="hero" className="hero">
      <div ref={gridRef} className="hero-grid-bg" aria-hidden>
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="hero-grid-line" style={{ top: `${12 + i * 11}%` }} />
        ))}
      </div>
      <div ref={glowRef} className="hero-mouse-glow" aria-hidden />

      <div className="hero-wrap">
        {/* Photo card — visible on mobile too via CSS grid reorder */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={tr(0.3)}
        >
          <div className="hero-card">
            <div className="hero-card-scan" aria-hidden />
            <div className="hero-card-glow" aria-hidden />
            <img className="hero-photo" src={PHOTO} alt="Naufal Afaf" />
            <div className="hero-card-overlay" />
            <div className="hero-card-info">
              <div className="hci-name">Naufal Afaf</div>
              <div className="hci-role">Web Developer</div>
              <div className="hci-status">
                <span className="hci-dot" />
                @NaufalNyaa · Online
              </div>
            </div>
            <span className="corner corner-tl" /><span className="corner corner-tr" />
            <span className="corner corner-bl" /><span className="corner corner-br" />
          </div>
          <motion.div className="hero-badge hero-badge-1" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={tr(0.7)}>
            <div className="badge-n">6</div><div className="badge-l">Projects</div>
          </motion.div>
          <motion.div className="hero-badge hero-badge-2" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={tr(0.85)}>
            <div className="badge-n">12+</div><div className="badge-l">Tech Stack</div>
          </motion.div>
        </motion.div>

        {/* Text content */}
        <div className="hero-left">
          <motion.div className="hero-chip" initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={tr(0.2)}>
            <span className="hero-chip-dot" />
            <span>Available · Open to Freelance</span>
          </motion.div>

          <motion.h1 className="hero-name" initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={tr(0.35)}>
            <span className="hero-name-top">Naufal</span>
            <span className="hero-name-bot">
              <span className="hero-name-outline">Afaf</span>
              <span className="hero-name-cursor">_</span>
            </span>
          </motion.h1>

          <motion.div className="hero-role" initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={tr(0.45)}>
            <span className="hero-role-line" />
            Full-Stack Developer
          </motion.div>

          <motion.p className="hero-desc" initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={tr(0.5)}>
            {profile.tagline}
          </motion.p>

          <motion.div className="hero-btns" initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={tr(0.58)}>
            <button className="hero-btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Projects
              <span className="hero-btn-arrow">→</span>
            </button>
            <a href={profile.github} target="_blank" rel="noreferrer" className="hero-btn-ghost">
              GitHub ↗
            </a>
          </motion.div>

          <motion.div className="hero-stats" initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={tr(0.65)}>
            {stats.map((s, i) => (
              <div key={i} className="hero-stat">
                <div className="hero-stat-num">{s.num}<em>{s.suffix}</em></div>
                <div className="hero-stat-lbl">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div className="hero-scroll" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.6 }}>
        <div className="hero-scroll-line" />
        <span>scroll</span>
      </motion.div>
    </section>
  );
}
