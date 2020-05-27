import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import './styles/project-one.css';
import midi from './images/midi-finial.gif';
import example from './images/midi-controller-example.PNG';
import Footer from '../components/Footer/Footer';
import { FaGithub } from "react-icons/fa";

class ProjectThree extends Component {
    render() {
        return (
            <div className="page-one">
            <h1><strong>Summary of app</strong></h1>
            {/* Gif Container*/}
            <div className="gif-container">
            <Image className="comic-gif" src={midi} fluid />
            </div>
            <p></p>
            <h5><strong>In progress Features</strong></h5>
            <p>This is a Midi controller. Users can map what drum beats they want to use by selecting the checkbox associated with each drum. Currently working on making a recording button. 
            In order to keep high quality audio that isn't recorded from the computer speakers, each keystroke will be tracked with a timer and played back.
            </p>
            {/* Link to deployed site */}
            <div className="center-button">
            <a href="https://crashley1992.github.io/midi-controller/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', width: "30%"}} className="btn btn-outline-dark">Click Me to view Deployed Site</a>
            </div>
            <h5>Click Icon to see Github Repo: <a style={{textDecoration: 'none', color: 'inherit'}} href="https://github.com/crashley1992/midi-controller" target="_blank" rel="noopener noreferrer">
                <FaGithub size={45} className="social-icons"/>
                </a></h5>
            {/* Design Section */}
            <h1><strong>Design:</strong></h1>
            <div className="image-container">
            <Image className="comic-wireframe" src={example} />
            </div>
            {/* Design process explanation */}
            <p>I wanted to make a midi controller and used the above image as an example. Next in Photoshop I designed a logo and background for the header of the page.</p>
            {/* Tech section */}
            <h1><strong>Technologies Used:</strong></h1>
            {/* List for MERN stack */}
            <ul>
                <li>JavaScript</li>
                <li>Photoshop</li>
                <li>CSS</li>
            </ul>
            {/* Process Section */}
            <h5><strong>Why choose vanilla JavaScript?</strong></h5>
            <p>I wanted to build a project just using JavaScript and no frameworks or libraries to practice JavaScript fundamentals. 
            This project pushed me to think creatively and problem solve. One of the more tricky issues was figuring out how to queue the drum beats and allow users to remove or add a new beat. Another issue I'm currently working on is getting a clean recording of a user's drum beat. 
            My goal is to track a user's drum input with a time interval and allow it so play back.</p>
            <Footer />
        </div>
        )
    }
}

export default ProjectThree;