import { PROJECTS } from '../data/index.js'
import styles from './Section.module.css'
import proj from './Projects.module.css'

export default function Projects({ sectionRef }) {
  return (
    <section className={styles.section} data-section="Projects" ref={sectionRef}>
      <p className={styles.label} data-aos="fade-up">Work</p>
      <h2 className={styles.title} data-aos="fade-up" data-aos-delay="60">Projects</h2>

      <div className={proj.grid}>
        {PROJECTS.map((p, i) => (
          <div
            key={p.name}
            className={`${proj.card} ${p.featured ? proj.featured : ''}`}
            style={{ borderLeftColor: p.accent + '30' }}
            data-aos="fade-up"
            data-aos-delay={Math.min(i * 60, 240)}
          >
            {p.featured && (
              <span className={proj.featuredBadge} style={{ background: p.accent + '15', color: p.accent, borderColor: p.accent + '30' }}>
                FEATURED
              </span>
            )}

            <div className={proj.topRow}>
              <span className={proj.tag} style={{ background: p.accent + '15', color: p.accent, borderColor: p.accent + '30' }}>
                {p.tag}
              </span>
              <span className={proj.period}>{p.period}</span>
            </div>

            <h3 className={proj.name}>{p.name}</h3>
            <p className={proj.desc}>{p.desc}</p>
            <p className={proj.highlight} style={{ color: p.accent }}>↳ {p.highlight}</p>

            <div className={proj.stack}>
              {p.stack.map((s) => <span key={s} className={proj.chip}>{s}</span>)}
            </div>

            <div className={proj.actions}>
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer" className={`${proj.btn} ${proj.btnPrimary}`} style={{ background: p.accent, color: '#080808' }}>
                  Live ↗
                </a>
              )}
              {p.github && (
                <a href={p.github} target="_blank" rel="noreferrer" className={`${proj.btn} ${proj.btnGhost}`}>
                  GitHub ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
