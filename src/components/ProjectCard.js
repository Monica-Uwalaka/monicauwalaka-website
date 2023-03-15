import React from "react";
import '../assets/css/portfolio.css';
import {Container, Image} from 'react-bootstrap';

const ProjectCard = (project, key) =>{
    console.log(project,key)
    return(
        <Container className="project-card">
            <div className="project-details">
                <h5 className="project-title">{project.name}</h5>
                <a className={project.link ? null: "disabled"} href={project.github}><Image src="/icons/github.svg" alt="github"></Image></a>
                <a className={project.link ? null: "disabled"} href={project.link}><Image src="/icons/link.svg" alt="link"></Image></a>
                <p className="project-description">{project.desc}</p>
            </div>

            <div className="tech-stack-div">
                <p className="project-tech-stack"> </p> 
            </div>
        </Container>
    );
}

export default ProjectCard