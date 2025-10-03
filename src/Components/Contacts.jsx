import React from 'react'; 
import './Contacts.css';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contacts({ scrollToRef }) {
  return (
    <section id="contacts">
      <h2 className="section-title">Contact <span>Me</span></h2>
      <p>I’m always open to discuss new opportunities
        I’m always open to discussing <strong>new projects, collaborations, or job opportunities </strong> 
        where I can contribute my skills as a web developer. Whether you have a 
        question, want to build something creative together, or just wish to connect, 
        feel free to reach out. I believe in continuous learning and love connecting 
        with people who share the same passion for technology and innovation. 🚀
      </p>

      <div className="contact-box">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:kashyappragati89@gmail.com">kashyappragati89@gmail.com</a>
        </div>

        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <a href="tel:+91931479177">+91 931479177</a>
        </div>

        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <a href="https://www.linkedin.com/in/pragati--rr93" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>

        <div className="contact-item">
          <FaGithub className="contact-icon" />
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>

  
      <div className="footer-nav">
        <span onClick={() => scrollToRef("home")}>Home</span>
        <span onClick={() => scrollToRef("about")}>About</span>
        <span onClick={() => scrollToRef("skills")}>Skills</span>
        <span onClick={() => scrollToRef("projects")}>Projects</span>
        <span onClick={() => scrollToRef("contacts")}>Contact</span>
      </div>
    </section>
  );
}
