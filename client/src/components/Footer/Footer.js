import React from 'react';
import { FaLinkedin, FaTwitterSquare, FaGithub } from "react-icons/fa";
import './footer.css';

const Footer = () => {
    return(
        <div className="footer">
        <h1>Thanks for Stopping By!</h1>
            <div className="icon-container">
            <a href="https://www.linkedin.com/in/ashley-clarke-113557124/" style={{color: 'inherit'}} target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={45} className="social-icons"/></a>
                <a href="https://twitter.com/CrashleyGames" style={{color: 'inherit'}} target="_blank" rel="noopener noreferrer">
                <FaTwitterSquare size={45} className="social-icons"/></a>
                <a href="https://github.com/crashley1992" style={{color: 'inherit'}} target="_blank" rel="noopener noreferrer">
                <FaGithub size={45} className="social-icons"/></a>
            </div>
        </div>
    )
}

export default Footer;