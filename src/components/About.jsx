import React from 'react';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <h2>A Little About My Journey</h2>
      <p className="section-subtitle">Blending creative vision with technical execution.</p>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm Stephanie Gapang, a 21-year-old aspiring developer and a 3rd-year Computer Science student at Pamantasan ng Cabuyao. (Born September 11, 2004).
          </p>
          <p>
            My focus within the College of Computing Studies is heavily weighted toward UI/UX designing and building exceptional user interfaces. I passionately believe that the intersection of clean code and beautiful aesthetics is where truly great digital experiences are born.
          </p>
          <p>
            I am developing my expertise across the front-end stack, but my primary goal is mastering the art of creating intuitive, accessible, and visually appealing systems.
          </p>
          <p>
            When I'm not in class or coding, I enjoy exploring new design trends, prototyping concepts, and refining my creative vision.
          </p>
          <a href="#contact" className="explore button contact-link-button">Let's Connect</a>
        </div>
        <div className="skills-grid">
          <h3>Core Skills</h3>
          <div className="skill-item">Focus: UI/UX Design, Front-End Development</div>
          <div className="skill-item">Familiar With: React, HTML, CSS, JavaScript, Python, Java, C++</div>
          <div className="skill-item">Tools: Figma, Canva, Git</div>
          <div className="skill-item">Education: Computer Science (3rd Year)</div>
        </div>
      </div>
    </section>
  );
}