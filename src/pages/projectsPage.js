import React from "react";
import '../assets/css/portfolio.css';
import {Container, Row, Col} from 'react-bootstrap';
import ProjectCard from "../components/ProjectCard";
import data from "../data/projectsData"

const getProjects = () => {
    let projectsList = []
    data.projects.forEach((project, index) => {
       projectsList.push(
            <Row>
                <Col className="d-flex justify-content-center align-items-center project-col col1 "> <ProjectCard {...project} {...index}/> </Col>
            </Row>
        )
    })
    return(<>{projectsList}</>)
}

const Project = () => {
    return(
        <Container id="project-container"> {getProjects()} </Container>
    );
}

export default Project;