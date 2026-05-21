import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        Sushant Kumar Jha · 2026 ·{' '}
        <a href="https://github.com/Dazzle0p" target="_blank" rel="noreferrer" className={styles.link}>
          github.com/Dazzle0p
        </a>
      </p>
    </footer>
  )
}
