import React from "react";
import '../assets/css/portfolio.css';
import {Container, Image, Badge} from 'react-bootstrap';
import githubLogo from "../icons/github.svg";
import linkLogo from "../icons/link.svg";

const badgeColours = ['primary', 'secondary', 'success', 'danger' , 'warning' , 'info' , 'dark']

 const getbadges = (stack) => {
    let badges = []
    if (stack.length > 0){
        stack.forEach((element, index) => {
            badges.push(<Badge key={index} bg={badgeColours[Math.floor(Math.random() * badgeColours.length)]}>{element}</Badge>)
        });
    }    
    return badges;
 }

const ProjectCard = (project, key) =>{
    return(
        <Container className="project-card">
            <Container className="project-details">
                <h5 className="project-title">{project.name}</h5>
                <a className={project.github ? null: "disabled"} href={project.github}><Image src={githubLogo} alt="github"></Image></a>
                <a className={project.link ? null: "disabled"} href={project.link}><Image src={linkLogo} alt="link"></Image></a>
                <p className="project-description">{project.desc}</p>
                {getbadges(project.stack)}
            </Container>
        </Container>
    );
}

export default ProjectCard