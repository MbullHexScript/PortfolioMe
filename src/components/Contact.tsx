import { useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/portfolio';
import './Contact.css';

const links = [
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
];

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', message:'' });
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => { setSent(false); setForm({ name:'', email:'', message:'' }); }, 3000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-wrap">
        <div className="sec-header">
          <motion.div className="sec-tag" initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.5}}>05 — Contact</motion.div>
          <motion.h2 className="sec-title" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6,delay:.1}}>Mari <em>Berkolaborasi</em></motion.h2>
        </div>
        <div className="contact-grid">
          <div>
            <motion.p className="contact-intro" initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5}}>
              Punya proyek menarik atau ide yang ingin diwujudkan? Saya siap mengubah visi kamu menjadi produk digital yang luar biasa.
            </motion.p>
            <div className="c-links">
              {links.map((l, i) => (
                <motion.a
                  key={i}
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noreferrer"
                  className="c-link"
                  initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}}
                  transition={{duration:.45,delay:i*.07}}
                >
                  <div className="c-icon-wrap">
                    <img
                      src={l.iconSrc}
                      alt={l.label}
                      className={`c-icon-img ${l.tinted ? 'c-icon-tinted' : ''}`}
                    />
                  </div>
                  <div>
                    <div className="c-lbl">{l.label}</div>
                    <div className="c-val">{l.value}</div>
                  </div>
                  <span className="c-link-arr">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          <motion.form className="cf" onSubmit={onSubmit}
            initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6,delay:.15}}>
            <div className="cf-row">
              <div className="cf-group">
                <label className="cf-label">Nama</label>
                <input className="cf-input" type="text" placeholder="Nama Kamu" value={form.name} onChange={e => setForm({...form,name:e.target.value})} required />
              </div>
              <div className="cf-group">
                <label className="cf-label">Email</label>
                <input className="cf-input" type="email" placeholder="emailkamu@gmail.com" value={form.email} onChange={e => setForm({...form,email:e.target.value})} required />
              </div>
            </div>
            <div className="cf-group">
              <label className="cf-label">Pesan</label>
              <textarea className="cf-ta" placeholder="Sampaikan Pesanmu..." value={form.message} onChange={e => setForm({...form,message:e.target.value})} />
            </div>
            <motion.button type="submit" className={`cf-btn ${sent ? 'cf-btn--sent' : ''}`}
              whileTap={{ scale: 0.98 }}>
              <span>{sent ? '✓ Terkirim!' : 'Kirim Pesan →'}</span>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
