import React from "react";
import '../assets/css/portfolio.css';
import { Container, Row, Card, Col,Image } from "react-bootstrap";

const Content = () => {
    return(
        <Container className="intro-section">
            {/* intro section */}
            <Row  className="intro-section-row">
                <Col>
                    <Card id="intro-section-left">
                        <Card.Title id="title">Monica Uwalaka</Card.Title >
                        <Card.Text id="job-title">Software Engineer</Card.Text>
                    </Card>
                </Col>
                <Col>
                    <Card id="intro-section-right">
                        <Card.Img id ='profile-picture' src="/images/profile_picture.jpg"/>
                        <Card id="contact-card">
                            <Card.Link href="https://github.com/Monica-Uwalaka">
                                <Image src="/icons/github.svg"></Image>
                            </Card.Link>
                            <Card.Link href="https://www.linkedin.com/in/monica-uwalaka/">
                                <Image src={"/icons/linkedin.svg"}></Image>
                            </Card.Link>
                            <Card.Link href="mailto:uwalakamo@gmail.com">
                                <Image src={"/icons/email.svg"}></Image>
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
                            About Me
                        </Card.Title >
                        <Card.Body id="about-section-body">
                        <p>
                        Hello! My name is Monica, and I am a Software Engineer. As a Software Engineer, I am passionate about positively impacting people's lives through technology and software development. I graduated with a degree in Computer Science from the University of Alberta. My background in Computer Science has equipped me with problem-solving abilities that I creatively apply to design, build, and deploy efficient software solutions that meet the needs of my clients and end-users.
                        I pride myself as an engineer not limited by technology or tool. I enjoy the benefits of learning that come with taking on challenging tasks and thinking outside the box. 
                        </p> 
                        <p>
                        Asides from software-related stuff, I enjoy working out, listening to music, talking to friends, researching skincare, and learning how to live a healthy life.                        
                        </p> 
                        </Card.Body>                    
                    </Card>
                </Col>
                
            </Row>
            <Row>
                <Col id="skills-section">
                    <Card>
                        
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

const About = () => {
    return(
        <>
         <  Content/>
            {/* <AboutSection/> */}
        </>
       
    );
}

export default About;