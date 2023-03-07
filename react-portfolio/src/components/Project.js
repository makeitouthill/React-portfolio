import React from 'react';
import '../App.css';

function Project({ title, image, deployedLink, githubLink }) {
  return (
    <div id="about-me" className="project">
      <img src={image} alt={title}/>
      <div className="project-title">{title}</div>
      <div className="project-links">
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">
          Deployed Link
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub Link
        </a>
      </div>
    </div>
  );
}

export default Project;