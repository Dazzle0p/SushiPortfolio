import { useState, useEffect, useRef } from "react";
import { ROLES, WHAT_I_BRING, STATS } from "../data/index.js";
import styles from "./About.module.css";

export default function About({ sectionRef }) {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const timer = useRef(null);

  useEffect(() => {
    const target = ROLES[roleIdx];
    clearTimeout(timer.current);
    if (typing) {
      if (displayed.length < target.length) {
        timer.current = setTimeout(
          () => setDisplayed(target.slice(0, displayed.length + 1)),
          55,
        );
      } else {
        timer.current = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timer.current = setTimeout(
          () => setDisplayed(displayed.slice(0, -1)),
          28,
        );
      } else {
        setRoleIdx((i) => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timer.current);
  }, [displayed, typing, roleIdx]);

  return (
    <section className={styles.section} data-section="About" ref={sectionRef}>
      {/* Availability pill */}
      <div data-aos="fade-down" className={styles.pill}>
        <span className={styles.pillDot} />
        Open to opportunities
      </div>

      {/* Name */}
      <div data-aos="fade-up" data-aos-delay="80">
        <h1 className={styles.name}>
          Sushant
          <br />
          <span className={styles.nameGreen}>Jha</span>
        </h1>
        <p className={styles.role}>
          <span className={styles.roleText}>{displayed}</span>
          <span className={styles.cursor} />
        </p>
      </div>

      {/* What I bring */}
      <div data-aos="fade-up" data-aos-delay="140" className={styles.bringGrid}>
        {WHAT_I_BRING.map((w) => (
          <div key={w.title} className={styles.bringCard}>
            <span className={styles.bringIcon}>{w.icon}</span>
            <h3 className={styles.bringTitle}>{w.title}</h3>
            <p className={styles.bringDesc}>{w.desc}</p>
          </div>
        ))}
      </div>

      {/* CTAs */}
      <div data-aos="fade-up" data-aos-delay="200" className={styles.ctas}>
        <a
          href="https://linkedin.com/in/sushantjha1205"
          target="_blank"
          rel="noreferrer"
          className={`${styles.btn} ${styles.btnPrimary}`}
        >
          LinkedIn ↗
        </a>
        <a
          href="https://github.com/Dazzle0p"
          target="_blank"
          rel="noreferrer"
          className={`${styles.btn} ${styles.btnGhost}`}
        >
          GitHub ↗
        </a>
        <a href="#contact" className={`${styles.btn} ${styles.btnGhost}`}>
          Contact Me
        </a>
      </div>

      {/* Stats */}
      <div data-aos="fade-up" data-aos-delay="260" className={styles.statsGrid}>
        {STATS.map(([n, l]) => (
          <div key={l} className={styles.statCard}>
            <div className={styles.statNum}>{n}</div>
            <div className={styles.statLabel}>{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
