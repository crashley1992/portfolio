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
                <Nav.Link href='./Ashley_Clarke.pdf' download="Ashley_Clarke.pdf">Resume</Nav.Link>             
                </Nav>
            <Nav>
                <NavDropdown title="Portfolio" id="basic-nav-dropdown">
                <NavDropdown.Item href="/portfolio-one">Project One: Comic Hero Finder</NavDropdown.Item>
                <NavDropdown.Item href="/portfolio-two">Project Two: Untitled Goose Memory Game</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <div class="icon">
            {/* Nav Bar icons, used font awesome */}
                <a href="https://www.linkedin.com/in/ashley-clarke-113557124/" style={{color: 'inherit'}} target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={45} className="social-icons"/></a>
                <a href="https://twitter.com/CrashleyGames" style={{color: 'inherit'}} target="_blank" rel="noopener noreferrer">
                <FaTwitterSquare size={45} className="social-icons"/></a>
                <a href="https://github.com/crashley1992" style={{color: 'inherit'}} target="_blank" rel="noopener noreferrer">
                <FaGithub size={45} className="social-icons"/></a>
                </div>
                </Navbar.Collapse>
          </Navbar>
    )
}

export default NavTabs;
