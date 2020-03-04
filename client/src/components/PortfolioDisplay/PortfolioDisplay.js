import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import { FaGithub } from "react-icons/fa";
import './portfolio-display.css';
import comic from './random-button.gif';
import goose from './clicky-game.gif';

class PortfolioDisplay extends Component {
  
    render() {
        return (
            <div>
                <div className="gallery">
                <h4 className="portfolio-title">Portfolio</h4>
                <h5 className="project-title">Comic Hero Finder</h5>
                    <Image src={comic} fluid />
                    <button className="btn btn-outline-dark" onClick={()=> {
                        window.location.href="/portfolio-one"
                    }}> See Project Details</button>
                <h5 className="project-title">Untitled Goose Memory Game</h5>
                    <Image src={goose} fluid />
                    <button className="btn btn-outline-dark" onClick={()=> {
                        window.location.href="/portfolio-two"
                    }}>See Project Details</button> 
                    <h4 className="portfolio-title">Open Source Contributions</h4>
                <h5 className="project-title">Town Hall Project</h5>
                <p>Link to Project: <a href="https://townhallproject.com/" target="_blank" rel="noopener noreferrer">https://townhallproject.com/</a></p>
                <p>Link to Github Repo: <a style={{textDecoration: 'none', color: 'inherit'}} href="https://github.com/townhallproject/townHallProject" target="_blank" rel="noopener noreferrer">
                <FaGithub size={45} className="social-icons"/>
                </a></p>
                <p>I got involved with this project by attending a local She's Coding Meetup. This is a group where a participants can assist with open-source website that educates women, allies and companies about the gender gap, developed in mentorship-based volunteer groups.</p>
                <p>You can read more about it here <a href="https://www.meetup.com/shescoding-seattle/" target="_blank" rel="noopener noreferrer">https://www.meetup.com/shescoding-seattle/</a></p>
                <ul id="issues-list"><strong>Issues assisted with</strong>
                    <li>#597 Update Donate button text</li>
                    <li>#614 Adding Autocomplete Component</li>
                    <li>#632 Create a Thank You message after users sign up</li>
                    <li>#657 Increase spacing between bottom of the table and the footer</li>
                </ul>
            </div>
        </div>
        )
    }
}

export default PortfolioDisplay;