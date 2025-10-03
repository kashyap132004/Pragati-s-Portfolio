import React from 'react';
import './About.css'; 

export default function About() {
  return (
    <section id="AboutMe">
      <h2 className="section-title">About <span>Me</span></h2>
      <img src="profile.png" alt="Pragati Kashyap" className="profile-pic" />
      <p>
        I am Pragati Kashyap, a Frontend Developer with expertise in creating responsive and user-friendly web applications. 
        Currently pursuing B.Tech in Computer Science, I have hands-on experience in HTML, CSS, JavaScript, and React.js, 
        with a strong foundation in data structures and algorithms. I have successfully developed and deployed projects such as 
        a portfolio website, a task management application, and a sports networking platform, demonstrating my skills in both 
        design and development. I am passionate about delivering high-quality, efficient, and scalable solutions while continuously learning 
        emerging technologies to enhance user experiences. I am open to professional opportunities where I can contribute, collaborate, 
        and grow as a software developer.
      </p>
      <div className="contact-box">
        <p><i className="fa fa-envelope"></i> Email: kashyappragati89@gmail.com</p>
        <p><i className="fa fa-phone"></i> Phone: 93941479177</p>
      </div>
    </section>
  );
}
