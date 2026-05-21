import { SKILLS } from '../data/index.js'
import styles from './Section.module.css'
import sk from './Skills.module.css'

export default function Skills({ sectionRef }) {
  return (
    <section className={styles.section} data-section="Skills" ref={sectionRef}>
      <p className={styles.label} data-aos="fade-up">Tech</p>
      <h2 className={styles.title} data-aos="fade-up" data-aos-delay="60">Skills</h2>

      <div className={sk.grid}>
        {Object.entries(SKILLS).map(([cat, items], i) => (
          <div key={cat} className={sk.card} data-aos="fade-up" data-aos-delay={i * 60}>
            <h4 className={sk.catLabel}>{cat}</h4>
            <div className={sk.chips}>
              {items.map((s) => <span key={s} className={sk.chip}>{s}</span>)}
            </div>
          </div>
        ))}
      </div>

      <div className={sk.footer} data-aos="fade-up" data-aos-delay="200">
        <div className={sk.footerCard}>
          <p className={sk.footerLabel}>Certifications</p>
          <p className={sk.footerVal}>Oracle Certified – Database Programming with SQL · Java Foundations</p>
        </div>
        <div className={sk.footerCard}>
          <p className={sk.footerLabel}>Education</p>
          <p className={sk.footerVal}>B.Tech CSE · Galgotias University · 2022 – 2026</p>
        </div>
      </div>

      <div className={sk.dsaBar} data-aos="fade-up" data-aos-delay="240">
        <div>
          <p className={sk.footerLabel}>Problem Solving</p>
          <p className={sk.footerVal}>550+ DSA problems solved on LeetCode, GeeksforGeeks & CodeChef</p>
        </div>
        <a href="https://codolio.com" target="_blank" rel="noreferrer" className={sk.dsaBtn}>
          Codolio ↗
        </a>
      </div>
    </section>
  )
}
