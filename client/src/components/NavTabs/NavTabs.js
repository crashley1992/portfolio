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
                <NavDropdown title="Portfolio" id="basic-nav-dropdown">
                <NavDropdown.Item href="/portfolio-one">Project One: Comic Hero Finder</NavDropdown.Item>
                <NavDropdown.Item href="/portfolio-two">Project Two</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <div class="icon">
            {/* Nav Bar icons, used font awesome */}
                <FaLinkedin size={45} className="social-icons"/>
                <FaTwitterSquare size={45} className="social-icons"/>
                <FaGithub size={45} className="social-icons"/>
                </div>
                </Navbar.Collapse>
          </Navbar>
    )
}

export default NavTabs;
