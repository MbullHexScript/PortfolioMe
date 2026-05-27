import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { profile } from '../data/portfolio';
import './About.css';

const info = [
  {
    iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    tinted: true,
    label: 'GitHub',
    value: profile.githubUsername,
    href: profile.github,
  },
  {
    iconSrc: 'https://cdn.simpleicons.org/gmail/35858B',
    tinted: false,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    iconSrc: 'https://cdn.simpleicons.org/instagram/35858B',
    tinted: false,
    label: 'Instagram',
    value: profile.instagram,
    href: '#',
  },
  {
    iconSrc: 'https://cdn.simpleicons.org/googlemaps/35858B',
    tinted: false,
    label: 'Lokasi',
    value: profile.location,
    href: '#',
  },
  {
    iconSrc: 'https://cdn.simpleicons.org/freelancer/35858B',
    tinted: false,
    label: 'Status',
    href: '#',
  },
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
              <>Saya adalah seorang <strong>Software Engineer</strong> yang berfokus pada pengembangan utilitas ringan, model machine learning, dan eksplorasi teknologi IoT.</>,
              <>Saya terbiasa membangun software menggunakan <strong>Python, Lua, C++, C#, dan Dart</strong>, mulai dari scripting, backend systems, hingga aplikasi lintas platform dan integrasi perangkat.</>,
              <>Saya tertarik pada bagaimana sebuah ide dapat diubah menjadi sistem yang efisien, scalable, dan memiliki fungsi nyata di dunia digital maupun hardware.</>,
            ].map((p, i) => (
              <motion.p key={i} className="about-p" initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.55,delay:i*0.1}}>
                {p}
              </motion.p>
            ))}
          </div>

          <div className="about-right">
            <div className="info-grid">
              {info.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noreferrer"
                  className="info-row"
                  initial={{opacity:0,x:24}} whileInView={{opacity:1,x:0}} viewport={{once:true}}
                  transition={{duration:.5,delay:i*0.08}}
                >
                  <div className="info-icon-wrap">
                    <img
                      src={item.iconSrc}
                      alt={item.label}
                      className={`info-icon-img ${item.tinted ? 'info-icon-tinted' : ''}`}
                    />
                  </div>
                  <div>
                    <div className="info-lbl">{item.label}</div>
                    <div className="info-val">{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
