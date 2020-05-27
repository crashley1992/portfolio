import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import comicWireframe from './images/comicWireframe.PNG';
import './styles/project-one.css';
import comicTwo from './images/full project.gif';
import Footer from '../components/Footer/Footer';
import { FaGithub } from "react-icons/fa";

class ProjectOne extends Component {
    render() {
        return (
            <div className="page-one">
            <h1><strong>Summary of app</strong></h1>
            {/* Gif Container*/}
            <div className="gif-container">
            <Image className="comic-gif" src={comicTwo} fluid />
            </div>
            <p></p>
            <h5><strong>In progress Features</strong></h5>
            <p>This app is a Comic Hero Finder. A user should be able to type a comic hero's name and information about them will display. If a hero is liked they will appear on the Liked Heroes page. Some features in the works will allow users to look up comics associated with a hero. This is being incorporated using the Google Books API.</p>
            {/* Link to deployed site */}
            <div className="center-button">
            <a href="https://shrouded-woodland-60395.herokuapp.com/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', width: "30%"}} className="btn btn-outline-dark">Click Me to view Deployed Site</a>
            </div>
            <h5>Click Icon to see Github Repo: <a style={{textDecoration: 'none', color: 'inherit'}} href="https://github.com/crashley1992/hero-finder" target="_blank" rel="noopener noreferrer">
                <FaGithub size={45} className="social-icons"/>
                </a></h5>
            {/* Design Section */}
            <h1><strong>Design:</strong></h1>
            <div className="image-container">
            <Image className="comic-wireframe" src={comicWireframe} />
            </div>
            {/* Design process explanation */}
            <p>Before starting on the code I created a prototype with UXPin. This helped with fleshing out functionality ideas as well as how information and components should be rendered.</p>
            {/* Tech section */}
            <h1><strong>Technologies Used:</strong></h1>
            {/* List for MERN stack */}
            <ul><strong>MERN Stack</strong>
                <li>React</li>
                <li>MongoDB</li>
                <li>Node.js</li>
            </ul>
            {/* List for packages used with Node */}
            <ul><strong>Node Packages</strong>
            <li>Express</li>
            <li>Axios</li>
            <li>CORS</li>
            <li>Mongoose</li>
            <li>Http-proxy-middleware</li>
            </ul>
            {/* Process Section */}
            <h1><strong>Process</strong></h1>
            <h5><strong>Why choose React?</strong></h5>
            <p>A previous version of this project was made using jQuery. Nothing against jQuery, but it felt like code was getting repetitive in certain parts of the project such as the results display. React seemed like a better choice for scalability,readability, and overall maintenance of the project. This is especially true as new features are added.</p>
            <h5><strong>Why choose MongoDB?</strong></h5>
            <p>Flexibility! Since new features are being added to the project, MongoDB is really easy to configure and organize without having to worry about complex object-relational mapping(ORM). Additionally, there are cloud features such as MongoDB Atlas that allows for more secure storage of data.</p>
            <h5><strong>Why choose Node?</strong></h5>
            <p>Node with Express makes creating routes and using 3rd APIs easy. Use of NPM packages make it simpler to use multiple tools and modules. Additionally, an app can be built using only JavaScript, which did not require me learning another language.</p>
            <Footer />
        </div>
        )
    }
}

export default ProjectOne;