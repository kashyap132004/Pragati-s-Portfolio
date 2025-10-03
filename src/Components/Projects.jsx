import React from "react";
import "./Projects.css";

const projects = [
  {
    name: "Portfolio Website",
    image: "https://via.placeholder.com/300x200", // replace with your screenshot
    desc: "A personal portfolio website to showcase my skills and projects.",
    link: "https://github.com/yourusername/portfolio"
  },
  {
    name: "Weather App",
    image: "https://via.placeholder.com/300x200",
    desc: "A weather forecasting app using React and OpenWeather API.",
    link: "https://github.com/yourusername/weather-app"
  },
  {
    name: "To-Do List",
    image: "https://via.placeholder.com/300x200",
    desc: "A simple task manager with add, edit, and delete functionality.",
    link: "https://github.com/yourusername/todo-list"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">My <span>Projects</span></h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.name} />
            <h3>{project.name}</h3>
            <p>{project.desc}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
