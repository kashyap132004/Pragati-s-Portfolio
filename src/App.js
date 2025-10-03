import React, { useRef, useState, useEffect } from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contacts from "./Components/Contacts";
import Contactform from "./Components/Contactform";
import "./App.css";
import "./Colors.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [darkMode]);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactFormRef = useRef(null);
  const contactsRef = useRef(null);

  const scrollToRef = (section) => {
    const refs = {
      home: homeRef,
      about: aboutRef,
      skills: skillsRef,
      projects: projectsRef,
      contactForm: contactFormRef,
      contacts: contactsRef,
    };
    refs[section]?.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      {/* Theme Toggle Button - Fixed Top Right */}
      <button
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>

      <Header scrollToRef={scrollToRef} />

      <div ref={homeRef} id="home" className="section-box">
        <Home scrollToRef={scrollToRef} />
      </div>
      <div ref={aboutRef} id="about" className="section-box">
        <About />
      </div>
      <div ref={skillsRef} id="skills" className="section-box">
        <Skills />
      </div>
      <div ref={projectsRef} id="projects" className="section-box">
        <Projects />
      </div>
      <div ref={contactFormRef} id="contact-form" className="section-box">
        <Contactform />
      </div>
      <div ref={contactsRef} id="contacts" className="section-box">
        <Contacts />
      </div>
    </div>
  );
}

export default App;
