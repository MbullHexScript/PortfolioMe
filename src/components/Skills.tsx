import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../data/portfolio';
import type { Skill } from '../types';
import './Skills.css';

const tabs = ['All','Framework','Language','Tool'] as const;
type Tab = typeof tabs[number];

function SkillCard({ sk, index }: { sk: Skill; index: number }) {
  return (
    <motion.div
      className="sk-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      whileHover={{ y: -4, borderColor: 'rgba(79,189,186,.4)' }}
    >
      <div className="sk-icon">
        <img src={sk.icon} alt={sk.name} style={sk.invert ? { filter: 'invert(1) brightness(.4) sepia(1) hue-rotate(145deg) saturate(3)' } : {}} />
      </div>
      <div className="sk-info">
        <div className="sk-name">{sk.name}</div>
        <div className="sk-cat">{sk.cat}</div>
        <div className="sk-bar">
          <motion.div
            className="sk-fill"
            style={{ background: `linear-gradient(90deg,${sk.color[0]},${sk.color[1]})` }}
            initial={{ width: 0 }}
            whileInView={{ width: `${sk.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: index * 0.05, ease: 'easeOut' }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [active, setActive] = useState<Tab>('All');
  const filtered = active === 'All' ? skills : skills.filter(s => s.cat === active.toLowerCase());

  return (
    <section id="skills" className="skills-section">
      <div className="section-wrap">
        <div className="sec-header">
          <motion.div className="sec-tag" initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.5}}>02 — Skills</motion.div>
          <motion.h2 className="sec-title" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6,delay:.1}}>Tools &amp; <em>Technologies</em></motion.h2>
          <motion.p className="skills-sub" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:.2}}>My Professional Skills</motion.p>
        </div>

        <div className="skills-layout">
          <div className="skill-tabs">
            {tabs.map(t => (
              <button key={t} className={`stab ${active === t ? 'stab--on' : ''}`} onClick={() => setActive(t)}>
                {active === t && <motion.span className="stab-bg" layoutId="stabBg" />}
                <span className="stab-label">{t}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={active} className="skill-cards"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
              {filtered.map((sk, i) => <SkillCard key={sk.name} sk={sk} index={i} />)}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
