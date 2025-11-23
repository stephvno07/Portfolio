import React from 'react';

// NOTE: We only include the repoLink for Essentico since the demo is unavailable.
const projectsData = [
  {
    title: "Essentico (E-commerce Project)",
    description: "An innovative E-commerce platform built to demonstrate front-end architectural best practices and a user-friendly shopping experience.",
    tags: ["React", "CSS", "E-commerce", "Figma"],
    repoLink: "https://github.com/pugarioo/Essentico.git", // <-- Your GitHub Link
  },
  {
    title: "Book-Management System",
    description: "Developed a real-time conversational interface for customer support using custom NLP models.",
    tags: ["Docker", "Javascript", "CSS"],
    repoLink: "https://github.com/pugarioo/book-management.git",
  },
];

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <h3>{project.title}</h3>
    <p>{project.description}</p>
    <div className="project-tags">
      {project.tags.map(tag => (
        <span key={tag} className="tag">{tag}</span>
      ))}
    </div>
    <div className="project-links-group">
        {/*
          LOGIC CHECK: This link only renders if project.demoLink is NOT '#' or empty.
          Since Essentico's demoLink is '#', this link will NOT appear.
        */}
        {project.demoLink && project.demoLink !== '#' && (
            <a href={project.demoLink} className="project-link" target="_blank" rel="noopener noreferrer">
              View Live Demo &rarr;
            </a>
        )}
        {/*
          LOGIC CHECK: This link only renders if project.repoLink is NOT '#' or empty.
          This will render for Essentico.
        */}
        {project.repoLink && project.repoLink !== '#' && (
            <a href={project.repoLink} className="project-link repo-link" target="_blank" rel="noopener noreferrer">
              View Code (GitHub)
            </a>
        )}
    </div>
  </div>
);

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <h2>Featured Projects</h2>
      <p className="section-subtitle">A selection of my best work.</p>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}