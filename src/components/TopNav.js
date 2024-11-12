import React from 'react';
import '../assets/css/portfolio.css';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import navbarLogo from "../icons/navbar_logo.svg"

const TopNav = () => {
    return (
        <>
            <Navbar expand="lg">
                <Container >
                    <Navbar.Brand id="brand-logo">
                        <Nav.Link as={Link} eventKey="1" to="/about">
                            <img
                            src={navbarLogo}
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                            alt="logo"/>
                    </Nav.Link>
                    </Navbar.Brand>
                    <Navbar.Toggle  aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                        <Nav defaultActiveKey="1" variant="pills" className="flex-row justify-content-between">
                            <Nav.Item>
                                <Nav.Link as={Link} eventKey="2" to="/about">About</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} eventKey="3" to="/projects">Projects</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} eventKey="4" to="/experience" >Experience</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
  
export default TopNav;
