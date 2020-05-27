import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import { FaGithub } from "react-icons/fa";
import './portfolio-display.css';
import comic from './random-button.gif';
import goose from './clicky-game.gif';
import midi from '../../pages/images/midi-finial.gif';

class PortfolioDisplay extends Component {
  
    render() {
        return (
            <div>
                <div className="gallery">
                <h3 className="portfolio-title">Portfolio</h3>
                {/* Project 1 */}
                <h4 className="project-title">Comic Hero Finder</h4>
                    <Image src={comic} fluid />
                    <p className="tech-details"><strong>Tech used</strong>: React, MongoDB, Node.js, CSS, Heroku, RESTful API, CRUD API</p>
                    <button className="btn btn-outline-dark" onClick={()=> {
                        window.location.href="/portfolio-one"
                    }}> See Project Details</button>

                    {/* Project 2 */}
                <h4 className="project-title">Untitled Goose Memory Game</h4>
                    <Image src={goose} fluid />
                    <p className="tech-details"><strong>Tech used</strong>: React, CSS</p>
                    <button className="btn btn-outline-dark" onClick={()=> {
                        window.location.href="/portfolio-two"
                    }}>See Project Details</button> 

                    {/* Project 3 */}
                    <h4 className="project-title">Midi Controller</h4>
                    <Image src={midi} fluid />
                    <p className="tech-details"><strong>Tech used</strong>: JavaScript, CSS, Photoshop</p>
                    <button className="btn btn-outline-dark" onClick={()=> {
                        window.location.href="/portfolio-three"
                    }}>See Project Details</button> 

                    {/* Open Source Section */}
                    <h3 className="portfolio-title" id="open-source">Open Source Contributions</h3>
                <h4 className="project-title">Town Hall Project</h4>
                <a style={{textDecoration: 'none', width: "30%"}} href="https://townhallproject.com/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">Checkout TownHall Project</a>
                <p>Link to Github Repo: <a style={{textDecoration: 'none', color: 'inherit'}} href="https://github.com/townhallproject/townHallProject" target="_blank" rel="noopener noreferrer">
                <FaGithub size={45} className="social-icons"/>
                </a></p>
                <p>I got involved with this project by attending a local She's Coding Meetup. This is a group where a participants can assist with open-source website that educates women, allies and companies about the gender gap, developed in mentorship-based volunteer groups.</p>
                <a style={{textDecoration: 'none', width: "25%"}} href="https://www.meetup.com/shescoding-seattle/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">Learn About She's Coding</a>
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