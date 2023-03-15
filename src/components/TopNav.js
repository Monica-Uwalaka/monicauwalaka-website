import React from 'react';
import '../assets/css/portfolio.css';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';


const TopNav = () => {
    return (
        <>
            <Navbar expand="lg">
                <Container >
                    <Navbar.Brand id="brand-logo"href="/about">
                        <img
                        src="navbar_logo.svg"
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        alt="logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle  aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                        <Nav defaultActiveKey="1" variant="pills" className="flex-row justify-content-between">
                            <Nav.Item>
                                <Nav.Link as={Link} eventKey="1" to="/about">About</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} eventKey="2" to="/projects">Projects</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} eventKey="3" to="/experience" >Experience</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
  
export default TopNav;
