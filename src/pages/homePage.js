import React from "react";
import '../assets/css/portfolio.css';
import { Container, Row, Card, Col,Image } from "react-bootstrap";
import data from "../data/homeData"
import githubLogo from "../icons/github.svg";
import linkedinLogo from "../icons/linkedin.svg";
import profilePicture from "../images/profile_picture.jpg";
import gmailLogo from "../icons/email.svg"


const Content = () => {
    return(
        <Container className="intro-section">
            {/* intro section */}
            <Row  className="intro-section-row">
                <Col>
                    <Card id="intro-section-left">
                        <Card.Title id="title">{data.introSection.name}</Card.Title >
                        <Card.Text id="job-title">{data.introSection.jobTitle}</Card.Text>
                    </Card>
                </Col>
                <Col>
                    <Card id="intro-section-right">
                        <Card.Img id ='profile-picture' src={profilePicture}/>
                        <Card id="contact-card">
                            <Card.Link href="https://github.com/Monica-Uwalaka">
                                <Image src={githubLogo}></Image>
                            </Card.Link>
                            <Card.Link href="https://www.linkedin.com/in/monica-uwalaka/">
                                <Image src={linkedinLogo}></Image>
                            </Card.Link>
                            <Card.Link href="mailto:uwalakamo@gmail.com">
                                <Image src={gmailLogo}></Image>
                            </Card.Link>
                        </Card>
                    </Card>
                </Col>
            </Row>

            {/* about section */}
            <Row id="about-section-row">
                <Col id="about-section-col">
                    <Card id="about-card">
                        <Card.Title className="text-center" id="about-card-title">
                            {data.aboutSection.title}
                        </Card.Title >
                        <Card.Body id="about-section-body">
                        <p>{data.aboutSection.p1}</p> 
                        <p>{data.aboutSection.p2}</p> 
                        </Card.Body>                    
                    </Card>
                </Col>
                
            </Row>
        </Container>
    );
}

const About = () => {
    return(
        <>
         <Content/>
        </> 
    );
}

export default About;