import React from 'react';
import "./Projects.css";
import { projects } from '../../data/constants';

function Projects() {

    const redirectToGithub = (githubLink) => {
        window.open(githubLink, '_blank');
    };

    const redirectToLive = (liveLink) => {
        window.open(liveLink, '_blank');
    };

    return (
        <div id='projects'>
            <h1>Projects</h1>

            <div className="mern__projects">

                {projects.map((project) => (
                    <div className="project" key={project.id}>
                        <img src={project.image} alt="img" />
                        <h2>{project.title}</h2>
                        <div className="buttons">
                            <button className='redirect' onClick={() => redirectToGithub(project.github)}>Code</button>
                            <button className='redirect2' onClick={() => redirectToLive(project.webapp)}>Live App</button>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Projects;