import React from 'react';
import Project from './Project';
import Placeholder from '../images/placeholder-image.webp';
import '../App.css';
import Project1 from '../images/Project-MasterPlanner9000.png';
import Project2 from '../images/Project-taskithomepage.png';
import Project3 from '../images/HPOE-showcase.png';

function Portfolio() {
  const projects = [
    {
      title: 'Master Planner 9000',
      image: Project1,
      deployedLink: 'https://byxzesc.github.io/01-GroupProject-EventPlanner/',
      githubLink: 'https://github.com/byxzESC/01-GroupProject-EventPlanner',
      description:'Search any major city for a Ticketmaster event, such as Sporting events, Music concerts and more. You can filter your search by genre and date range. On the event cards you will see the name of the event, the date of the event, a price range for tickets and a more "More Info" button.',
    },
    {
        title: 'Task-it',
        image: Project2,
        deployedLink: 'https://calm-tor-44072.herokuapp.com/login',
        githubLink: 'https://github.com/makeitouthill/taskit',
        description:'Sometimes there are odd jobs that you need to complete and you can’t always find the right person to handle it TaskIt makes it easy to find a person or group who can take care of your job for you in a one stop location to find and hire.',
    },
    {
        title: 'Hobbiest Place On Earth',
        image: Project3,
        deployedLink: 'https://hobbiest-place-ons-earth.herokuapp.com/',
        githubLink: 'https://github.com/makeitouthill?tab=repositories',
        description:'Hobby platform with the intentions to help Users find Hobbies and communities',
    },
    {
        title: 'Project 4',
        image: Placeholder,
        deployedLink: 'https://codepen.io/CucuIonel/pen/pjBGVe',
        githubLink: 'https://github.com/makeitouthill?tab=repositories',
        description:';( "Pending..." :{/ rawr',
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
            description={project.description}
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
