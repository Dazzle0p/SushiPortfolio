import { useState } from "react";
import emailjs from "@emailjs/browser";
import { CONTACT_LINKS } from "../data/index.js";
import styles from "./Section.module.css";
import c from "./Contact.module.css";

// ── Replace these three values after creating a free EmailJS account ──
const SERVICE_ID = "service_bbz6997";
const TEMPLATE_ID = "template_m7jihw9";
const PUBLIC_KEY = "7i1fTxhGPihKapn1d";
// ─────────────────────────────────────────────────────────────────────

export default function Contact({ sectionRef }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: "sushantjha1205@gmail.com",
        },
        PUBLIC_KEY,
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section
      className={styles.section}
      id="contact"
      data-section="Contact"
      ref={sectionRef}
    >
      <p className={styles.label} data-aos="fade-up">
        Get in Touch
      </p>
      <h2 className={styles.title} data-aos="fade-up" data-aos-delay="60">
        Contact
      </h2>

      <div className={c.grid}>
        {/* Left */}
        <div data-aos="fade-right" data-aos-delay="80">
          <p className={c.quote}>
            "First make it work. Then make it scalable. Then make it fast."
          </p>
          <p className={c.blurb}>
            Available for full-time roles, internships and freelance projects. I
            reply within 24 hours.
          </p>
          <div className={c.links}>
            {CONTACT_LINKS.map(({ label, val, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className={c.link}
              >
                <span className={c.linkLabel}>{label}</span>
                <span className={c.linkVal}>{val}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <form
          data-aos="fade-left"
          data-aos-delay="120"
          className={c.form}
          onSubmit={handleSubmit}
          noValidate
        >
          <input
            className={c.input}
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            className={c.input}
            type="email"
            placeholder="Your email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <textarea
            className={c.textarea}
            placeholder="Your message"
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <button
            type="submit"
            className={c.submitBtn}
            disabled={status === "sending"}
          >
            {status === "sending"
              ? "Sending…"
              : status === "success"
                ? "Message sent ✓"
                : status === "error"
                  ? "Error — try email directly"
                  : "Send Message →"}
          </button>
          {status === "success" && (
            <p className={c.msgOk}>Thanks! I'll reply within 24 hours.</p>
          )}
          {status === "error" && (
            <p className={c.msgErr}>
              Something went wrong. Email me directly at
              sushantjha1205@gmail.com
            </p>
          )}
          {/* <p className={c.note}>
            To activate: create a free{' '}
            <a href="https://emailjs.com" target="_blank" rel="noreferrer" className={c.noteLink}>EmailJS</a>
            {' '}account and replace the three IDs at the top of <code>Contact.jsx</code>.
          </p> */}
        </form>
      </div>
    </section>
  );
}
