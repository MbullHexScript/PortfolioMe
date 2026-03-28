import { useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/portfolio';
import './Contact.css';

const links = [
  { icon: '🐙', label: 'GitHub',    value: profile.githubUsername, href: profile.github },
  { icon: '✉️',  label: 'Email',     value: profile.email,          href: `mailto:${profile.email}` },
  { icon: '💬', label: 'Instagram', value: profile.instagram,      href: '#' },
  { icon: '📍', label: 'Lokasi',    value: profile.location,       href: '#' },
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
                <motion.a key={i} href={l.href} target={l.href.startsWith('http') ? '_blank' : '_self'} rel="noreferrer" className="c-link"
                  initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}}
                  transition={{duration:.45,delay:i*.07}} whileHover={{x:5}}>
                  <div className="c-link-icon">{l.icon}</div>
                  <div>
                    <div className="c-lbl">{l.label}</div>
                    <div className="c-val">{l.value}</div>
                  </div>
                  <span className="c-link-arr">→</span>
                </motion.a>
              ))}
            </div>
          </div>

          <motion.form className="cf" onSubmit={onSubmit}
            initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6,delay:.15}}>
            <div className="cf-row">
              <div className="cf-group">
                <label className="cf-label">Nama</label>
                <input className="cf-input" type="text" placeholder="John Doe" value={form.name} onChange={e => setForm({...form,name:e.target.value})} required />
              </div>
              <div className="cf-group">
                <label className="cf-label">Email</label>
                <input className="cf-input" type="email" placeholder="john@email.com" value={form.email} onChange={e => setForm({...form,email:e.target.value})} required />
              </div>
            </div>
            <div className="cf-group">
              <label className="cf-label">Pesan</label>
              <textarea className="cf-ta" placeholder="Ceritakan proyekmu..." value={form.message} onChange={e => setForm({...form,message:e.target.value})} />
            </div>
            <motion.button type="submit" className={`cf-btn ${sent ? 'cf-btn--sent' : ''}`}
              whileTap={{ scale: 0.97 }} whileHover={{ boxShadow: sent ? 'none' : '0 0 30px rgba(163,230,53,.35)' }}>
              {sent ? '✓ Terkirim!' : 'Kirim Pesan →'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
