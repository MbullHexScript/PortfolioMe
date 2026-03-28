import { motion } from 'framer-motion';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <motion.div className="footer-logo" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
          Naufal<span>Nyaa</span>
        </motion.div>
        <motion.div className="footer-links" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:.1}}>
          {['About','Skills','Projects','Education','Contact'].map(l => (
            <button key={l} className="footer-link" onClick={() => document.getElementById(l.toLowerCase())?.scrollIntoView({behavior:'smooth'})}>
              {l}
            </button>
          ))}
        </motion.div>
        <motion.p className="footer-copy" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:.2}}>
          © 2025 Naufal Afaf Ekayana · Built with <span style={{color:'var(--lime)'}}>React + TS</span> from Serang
        </motion.p>
      </div>
    </footer>
  );
}
