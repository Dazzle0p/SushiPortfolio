import { EXPERIENCE } from '../data/index.js'
import styles from './Section.module.css'
import exp from './Experience.module.css'

export default function Experience({ sectionRef }) {
  return (
    <section className={styles.section} data-section="Experience" ref={sectionRef}>
      <p className={styles.label} data-aos="fade-up">Career</p>
      <h2 className={styles.title} data-aos="fade-up" data-aos-delay="60">Experience</h2>

      {EXPERIENCE.map((e, i) => (
        <div
          key={e.company}
          className={exp.card}
          style={{ borderLeftColor: e.color + '40' }}
          data-aos="fade-up"
          data-aos-delay={i * 80}
        >
          <div className={exp.header}>
            <div>
              <h3 className={exp.role}>{e.role}</h3>
              <p className={exp.meta}>
                <span style={{ color: e.color }}>{e.company}</span>
                <span className={exp.metaSub}> · {e.type}</span>
              </p>
            </div>
            <span className={exp.period}>{e.period}</span>
          </div>
          <ul className={exp.list}>
            {e.points.map((p, j) => (
              <li key={j} className={exp.point}>
                <span className={exp.dot} style={{ background: e.color }} />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
