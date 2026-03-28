import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const links = ['About','Skills','Projects','Education','Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
    }, { threshold: 0.4 });
    links.forEach(l => { const el = document.getElementById(l.toLowerCase()); if (el) io.observe(el); });
    return () => { window.removeEventListener('scroll', onScroll); io.disconnect(); };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16,1,0.3,1] }}
    >
      <button className="nav-logo" onClick={() => window.scrollTo({top:0,behavior:'smooth'})}>
        Naufal<span>Nyaa</span>
        <span className="nav-logo-dot" />
      </button>

      <ul className="nav-links">
        {links.map(l => (
          <li key={l}>
            <button
              className={`nav-link ${active === l.toLowerCase() ? 'nav-link--active' : ''}`}
              onClick={() => scrollTo(l)}
            >
              {l}
              {active === l.toLowerCase() && (
                <motion.span className="nav-link-dot" layoutId="navDot" />
              )}
            </button>
          </li>
        ))}
      </ul>

      <button className="nav-cta" onClick={() => scrollTo('Contact')}>
        Hire Me <span className="nav-cta-arrow">→</span>
      </button>

      <button className="nav-burger" onClick={() => setOpen(!open)} aria-label="menu">
        <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }} />
        <motion.span animate={{ opacity: open ? 0 : 1 }} />
        <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {links.map((l, i) => (
              <motion.button
                key={l} className="nav-mobile-link"
                onClick={() => scrollTo(l)}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.06 }}
              >
                <span className="nav-mobile-num">0{i+1}</span> {l}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
