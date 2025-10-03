import React from "react";
import "./Skills.css";

const skills = [
  {
    name: "HTML",
    icon: "devicon-html5-plain colored",
    desc: "Building the structure of web pages with semantic markup."
  },
  {
    name: "CSS",
    icon: "devicon-css3-plain colored",
    desc: "Styling websites with modern layouts and animations."
  },
  {
    name: "JavaScript",
    icon: "devicon-javascript-plain colored",
    desc: "Adding interactivity and logic to web applications."
  },
  {
    name: "React.js",
    icon: "devicon-react-original colored",
    desc: "Building fast and scalable single-page applications."
  },
  {
    name: "C++ (DSA)",
    icon: "devicon-cplusplus-plain colored",
    desc: "Problem-solving with data structures and algorithms."
  }
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">My <span>Skills</span></h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <i className={skill.icon}></i>
            <h3>{skill.name}</h3>
            <p>{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
