import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const SECTIONS = ["About", "Experience", "Projects", "Skills", "Contact"];

export default function App() {
  const [activeSection, setActiveSection] = useState("About");
  const refs = useRef({});

  // Initialise AOS once
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
    });
    // Ensure AOS/layout recalculates after fonts/assets load — helps mobile initial layout
    const onLoad = () => {
      AOS.refresh();
      // dispatch a resize to force any layout listeners to recalc widths
      setTimeout(() => window.dispatchEvent(new Event("resize")), 120);
    };
    window.addEventListener("load", onLoad);
    // also run a short delayed refresh in case load already fired
    const t = setTimeout(() => {
      AOS.refresh();
      window.dispatchEvent(new Event("resize"));
    }, 300);
    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(t);
    };
  }, []);

  // Track which section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.dataset.section);
          }
        });
      },
      { threshold: 0.25 },
    );
    Object.values(refs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    refs.current[id]?.scrollIntoView({ behavior: "smooth" });
  };

  const setRef = (name) => (el) => {
    refs.current[name] = el;
  };

  return (
    <>
      <Navbar active={activeSection} onNav={scrollTo} />

      <main>
        <About sectionRef={setRef("About")} />
        <Experience sectionRef={setRef("Experience")} />
        <Projects sectionRef={setRef("Projects")} />
        <Skills sectionRef={setRef("Skills")} />
        <Contact sectionRef={setRef("Contact")} />
      </main>

      <Footer />
    </>
  );
}
