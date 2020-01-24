import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import { FaLinkedin, FaTwitterSquare, FaGithub } from "react-icons/fa";
import './nav-tabs.css'

const NavTabs = () => {
    return (
        <Navbar expand="lg">
            <Navbar.Brand href="/">
            Ashley Clarke</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
                <Nav.Link href="/">Home</Nav.Link>             
                </Nav>
            <Nav>
                <Nav.Link href="#">About</Nav.Link>
                </Nav>
            <Nav>
                <NavDropdown title="Portfolio" id="basic-nav-dropdown">
                <NavDropdown.Item href="/portfolio-one">Project One</NavDropdown.Item>
                <NavDropdown.Item href="/portfolio-two">Project Two</NavDropdown.Item>
                </NavDropdown>
            </Nav>
                </Navbar.Collapse>
            {/* Nav Bar icons, used font awesome */}
                <Nav.Link style={{ textDecoration: 'none', color: "inherit" }} target="_blank" href="https://www.linkedin.com/in/ashley-clarke-113557124/">
                <FaLinkedin size={32} />
                </Nav.Link>

                <Nav.Link style={{ textDecoration: 'none', color: "inherit" }} target="_blank" href="https://twitter.com/CrashleyGames">
                <FaTwitterSquare size={32}/>
                </Nav.Link>

                <Nav.Link style={{ textDecoration: 'none', color: "inherit" }} target="_blank" href="https://github.com/crashley1992">
                <FaGithub size={32} />
                </Nav.Link>
          </Navbar>
    )
}

export default NavTabs;
