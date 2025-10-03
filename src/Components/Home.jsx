import React from "react";
import { ReactTyped } from "react-typed";
import "./Home.css";

export default function Home({ scrollToRef }) {
  return (
    <section id="home" className="home-section section-box">

      
      <div className="home-mini-nav">
        <button onClick={() => scrollToRef("home")}>Home</button>
        <button onClick={() => scrollToRef("about")}>About</button>
        <button onClick={() => scrollToRef("skills")}>Skills</button>
        <button onClick={() => scrollToRef("projects")}>Projects</button>
        <button onClick={() => scrollToRef("contacts")}>Contacts</button>
      </div>

      <h1>Hi, I am Pragati Kashyap</h1>

      
      <p>
        <ReactTyped
          strings={[
            "Web Developer",
            "DSA",
            "SQL",
            "GitHub",
            "Communication"
          ]}
          typeSpeed={60}
          backSpeed={40}
          loop
          className="typed-text"
        />
      </p>

      <p>
        A passionate web developer with expertise in building responsive and deployed web applications.
      </p>
      <p className="tagline">
        A passionate <strong>Web Developer</strong> who loves crafting modern, 
        responsive, and user-friendly web applications.
      </p>
      <p className="intro">
        I enjoy turning ideas into reality through code and design. 
        With a strong foundation in <strong>React, JavaScript, and backend technologies</strong>, 
        I aim to build impactful solutions that make a difference.  
      </p>
      <p className="motto">✨ Let’s create something amazing together! ✨</p>

      <div className="button-container">
        <button onClick={() => scrollToRef("projects")}>View My Work</button>
        <button onClick={() => scrollToRef("contacts")}>Contact Me</button>
      </div>
    </section>
  );
}
