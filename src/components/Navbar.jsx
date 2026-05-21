import { useState } from "react";
import styles from "./Navbar.module.css";

const NAV = ["About", "Experience", "Projects", "Skills", "Contact"];

export default function Navbar({ active, onNav }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <span className={styles.logo}>
          SUSH<span className={styles.dot}>ANT</span>
        </span>
        <button
          type="button"
          className={styles.toggle}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className={styles.toggleIcon} />
        </button>
        <div className={`${styles.links} ${open ? styles.open : ""}`}>
          {NAV.map((n) => (
            <span
              key={n}
              className={`${styles.link} ${active === n ? styles.active : ""}`}
              onClick={() => {
                onNav(n);
                setOpen(false);
              }}
            >
              {n}
            </span>
          ))}
        </div>
      </div>
    </nav>
  );
}
