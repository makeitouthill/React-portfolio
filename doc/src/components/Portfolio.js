import React from 'react';
import Project from './Project';
import Placeholder from '../images/placeholder-image.webp';
import '../App.css';

function Portfolio() {
  const projects = [
    {
      title: 'Project 1',
      image: Placeholder,
      deployedLink: 'https://www.google.com/',
      githubLink: 'https://github.com/makeitouthill?tab=repositories',
    },
    {
        title: 'Project 2',
        image: Placeholder,
        deployedLink: 'https://www.google.com/',
        githubLink: 'https://github.com/makeitouthill?tab=repositories',
    },
    {
        title: 'Project 3',
        image: Placeholder,
        deployedLink: 'https://www.google.com/',
        githubLink: 'https://github.com/makeitouthill?tab=repositories',
    },
    {
        title: 'Project 4',
        image: Placeholder,
        deployedLink: 'https://www.google.com/',
        githubLink: 'https://github.com/makeitouthill?tab=repositories',
    },
  ];

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="project-container">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
