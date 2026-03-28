import { motion } from 'framer-motion';
import { projects } from '../data/portfolio';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-wrap">
        <div className="sec-header">
          <motion.div
            className="sec-tag"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            03 — Projects
          </motion.div>
          <motion.h2
            className="sec-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Karya &amp; <em>Proyek</em>
          </motion.h2>
        </div>

        <div className="proj-grid">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              className="proj-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -6 }}
            >
              {/* ── THUMBNAIL ── */}
              <div className="proj-thumb">

                {/* Background gradient selalu ada sebagai base */}
                <div className="proj-thumb-bg" style={{ background: p.bg }} />

                {/* Gambar — render selalu, tapi hanya visible jika ada */}
                {p.image && (
                  <img
                    src={p.image}
                    alt={p.name}
                    className="proj-img"
                    onError={(e) => {
                      // Jika gambar gagal load, sembunyikan
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                )}

                {/* Overlay gradient supaya teks terbaca */}
                <div className="proj-img-overlay" />

                {/* Emoji — tampil hanya jika TIDAK ada gambar */}
                {!p.image && (
                  <div className="proj-emoji-wrap">
                    <span className="proj-fallback-emoji">{p.emoji}</span>
                    <div className="proj-fallback-grid" aria-hidden>
                      {Array.from({ length: 6 }).map((_, j) => (
                        <span key={j} className="proj-fallback-line" />
                      ))}
                    </div>
                  </div>
                )}

                {/* Hover overlay */}
                <div className="proj-ov">
                  <span className="proj-ov-text">View Project →</span>
                </div>
              </div>

              {/* ── BODY ── */}
              <div className="proj-body">
                <div className="proj-tags">
                  {p.tags.map(t => (
                    <span key={t} className="proj-tag">{t}</span>
                  ))}
                </div>
                <div className="proj-name">{p.name}</div>
                <div className="proj-desc">{p.desc}</div>
                <div className="proj-foot">
                  <a href={p.demo} target="_blank" rel="noreferrer" className="proj-lnk">↗ Demo</a>
                  <a href={p.github} target="_blank" rel="noreferrer" className="proj-lnk">⌥ GitHub</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
