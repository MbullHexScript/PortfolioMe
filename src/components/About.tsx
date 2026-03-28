import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { profile } from '../data/portfolio';
import './About.css';

const info = [
  { icon: '📍', label: 'Lokasi',   value: profile.location },
  { icon: '💼', label: 'Status',   value: profile.status },
  { icon: '🐙', label: 'GitHub',   value: profile.githubUsername, href: profile.github },
  { icon: '⚡', label: 'Fokus',    value: 'Web Dev · App Dev · Artificial Intelligence' },
  { icon: '🌐', label: 'Bahasa',   value: 'Indonesia · English' },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const numRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!inView) return;
    numRef.current.forEach((el) => {
      if (!el) return;
      const target = parseInt(el.dataset.target || '0');
      gsap.fromTo({ v: 0 }, { v: target }, {
        duration: 1.6, ease: 'power2.out',
        onUpdate() { el.textContent = Math.round((this as any).targets()[0].v).toString(); },
      });
    });
  }, [inView]);

  return (
    <section id="about" ref={ref} className="about-section">
      <div className="section-wrap">
        <div className="about-grid">
          <div>
            <div className="sec-header">
              <motion.div className="sec-tag" initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.5}}>01 — About Me</motion.div>
              <motion.h2 className="sec-title" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6,delay:.1}}>Tentang <em>Saya</em></motion.h2>
            </div>
            {[
              <>Saya adalah seorang <strong>Full-Stack Developer</strong> yang passionate dalam membangun produk digital berkualitas tinggi. Dengan motto <em className="lime">„Evita, oppure assumitene il compito"</em> — saya selalu mengambil tanggung jawab penuh atas setiap proyek.</>,
              <>Fokus saya adalah menciptakan pengalaman web yang <strong>modern, performatif, dan user-friendly</strong> — dari antarmuka yang clean hingga sistem backend yang solid dan skalabel.</>,
              <>Berdomisili di <strong>Serang, Banten</strong>, saya terbuka untuk kolaborasi freelance dan proyek-proyek menarik dari seluruh Indonesia maupun internasional.</>,
            ].map((p, i) => (
              <motion.p key={i} className="about-p" initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.55,delay:i*0.1}}>
                {p}
              </motion.p>
            ))}
          </div>

          <div className="about-right">
            <div className="info-grid">
              {info.map((item, i) => (
                <motion.div key={i} className="info-row"
                  initial={{opacity:0,x:24}} whileInView={{opacity:1,x:0}} viewport={{once:true}}
                  transition={{duration:.5,delay:i*0.08}} whileHover={{x:4}}>
                  <span className="info-icon">{item.icon}</span>
                  <div>
                    <div className="info-lbl">{item.label}</div>
                    <div className="info-val">
                      {item.href
                        ? <a href={item.href} target="_blank" rel="noreferrer" className="info-link">{item.value}</a>
                        : item.value}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
