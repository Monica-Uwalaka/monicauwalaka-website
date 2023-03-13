import React from "react";
import '../assets/css/portfolio.css';
import {Container, Row, Col, Image} from 'react-bootstrap';

const ProjectCard = () =>{
    return(
        <Container className="project-card">
            {/* <div className="project-img-div">
                <Image alt="project-image" className="project-img" src="images/github.svg"></Image>
            </div > */}

            <div className="project-details">
                <h5 className="project-title">Project Name</h5>
                <a href="/"><Image src="/icons/github.svg" alt="github"></Image></a>
                <p className="project-description"> Make it easier for my families to collect, share, plan, and cook our home recipes. Features: Upload and convert</p>
            </div>

            <div className="tech-stack-div">
                <p className="project-tech-stack"> </p> 
            </div>
        </Container>
    );
}

const Project = () => {
    return(
        <Container id="project-container">
            <Row>
                <Col className="d-flex justify-content-center align-items-center project-col col1 "> <ProjectCard/> </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center align-items-center project-col col1 "> <ProjectCard/> </Col>

            </Row>
            <Row>
                <Col className="d-flex justify-content-center align-items-center project-col col1 "> <ProjectCard/> </Col>
            </Row>
        </Container>
    );
}

export default Project;