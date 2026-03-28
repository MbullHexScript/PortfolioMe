import { motion } from 'framer-motion';
import { education, competencies } from '../data/portfolio';
import './Education.css';

export default function Education() {
  return (
    <section id="education">
      <div className="section-wrap">
        <div className="edu-grid">
          <div>
            <div className="sec-header">
              <motion.div className="sec-tag" initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.5}}>04 — Education</motion.div>
              <motion.h2 className="sec-title" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6,delay:.1}}>Latar Belakang <em>Pendidikan</em></motion.h2>
            </div>
            <div className="edu-timeline">
              {education.map((edu, i) => (
                <motion.div key={i} className="edu-item"
                  initial={{opacity:0,x:-24}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.55,delay:i*.12}}>
                  <div className="edu-dot">{edu.icon}</div>
                  <div className="edu-body">
                    <div className="edu-period">{edu.period}</div>
                    <div className="edu-school">{edu.school}</div>
                    <div className="edu-major">{edu.major}</div>
                    <div className="edu-desc">{edu.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.div className="sec-tag" style={{marginBottom:'28px'}} initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.5}}>Core Competencies</motion.div>
            <div className="comp-list">
              {competencies.map((c, i) => (
                <motion.div key={i} className="comp-item"
                  initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5,delay:i*.08}}>
                  <div className="comp-head">
                    <div className="comp-name">{c.name}</div>
                    <div className="comp-pct">{c.pct}%</div>
                  </div>
                  <div className="comp-bar">
                    <motion.div className="comp-fill"
                      style={{ background: `linear-gradient(90deg,${c.color[0]},${c.color[1]})` }}
                      initial={{ width: 0 }} whileInView={{ width: `${c.pct}%` }}
                      viewport={{ once: true }} transition={{ duration: 1.1, delay: i * 0.08, ease: 'easeOut' }} />
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
