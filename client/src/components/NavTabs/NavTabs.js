import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './nav-tabs.css'

const NavTabs = () => {
    return (
        <Navbar expand="lg">
            <Navbar.Brand href="/">
            Ashley Clarke</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
                <Nav.Link href="/">Home</Nav.Link>                </Nav>
            <Nav>
                <Nav.Link href="/about">About</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            </Nav>
                </Navbar.Collapse>
        </Navbar>
    )
}

export default NavTabs;
