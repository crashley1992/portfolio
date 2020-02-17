import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import comicWireframe from './images/comicWireframe.PNG';
import './styles/project-one.css';
import comic from '../components/PortfolioDisplay/comic.gif'
import Footer from '../components/Footer/Footer';
import { FaGithub } from "react-icons/fa";

class ProjectOne extends Component {
    render() {
        return (
            <div className="page-one">
            <h1>Summary of app</h1>
            {/* Gif Container*/}
            <div className="gif-container">
            <Image className="comic-gif" src={comic} fluid />
            </div>
            <p>This app is a Comic Hero Finder. A user should be able to type a comic hero's name and infomation about them will display. Some features in the works will allow users to save and look up comics associated with a hero.</p>
            <h5><strong>In progress Features</strong></h5>
            <p>I will be adding in MongoDB so that user information can be saved. Ideally, users should be able to save a character's info and be able to view characters that they have liked. This will involve users being able to create an account and login for future use. Additionally, I would like to make it so users can look up available comics on Amazon or other online stores for a selected character.</p>
            {/* Link to deployed site */}
            <h5>Link to deployed site: <a href="https://rocky-headland-64193.herokuapp.com/" target="_blank">https://rocky-headland-64193.herokuapp.com/</a></h5>
            <h5>Link to Github Repo: <a href="https://github.com/crashley1992/comic-hero-finder" target="_blank">https://github.com/crashley1992/comic-hero-finder</a></h5>
            {/* Design Section */}
            <h1>Design:</h1>
            <div className="image-container">
            <Image className="comic-wireframe" src={comicWireframe} />
            </div>
            {/* Design process explanation */}
            <p>Before starting on the code I created a prototype with UXPin. This helped with fleshing out functionality ideas as well as how information and components should be rendered.</p>
            {/* Tech section */}
            <h1>Technologies Used:</h1>
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
            <h1>Process</h1>
            <h5><strong>Why choose React?</strong></h5>
            <p>A previous version of this project was made using jQuery. Nothing agaisnt jQuery, but it felt like code was getting repetitive in certain parts of the project such as the results display. React seemed like a better choice for scalability,readability, and overall maintainence of the project. This is escpecially true as new features are added.</p>
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