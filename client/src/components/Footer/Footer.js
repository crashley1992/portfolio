import React from 'react';
import { FaLinkedin, FaTwitterSquare, FaGithub } from "react-icons/fa";
import './footer.css';

const Footer = () => {
    return(
        <div>
        <h1>Thanks for Stopping By!</h1>
            <div className="icon-container">
            <FaLinkedin size={45} className="social-icons"/>
            <FaTwitterSquare size={45} className="social-icons"/>
            <FaGithub size={45} className="social-icons"/>
            </div>
        </div>
    )
}

export default Footer;