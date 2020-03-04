import React, { Component } from 'react';
import Footer from '../components/Footer/Footer';
import goose from '../components/PortfolioDisplay/clicky-game.gif'
import '../pages/styles/project-one.css';
import { FaGithub } from "react-icons/fa";
import Image from 'react-bootstrap/Image';

class ProjectTwo extends Component {
    render() {
        return (
            <div className="page-one">
            <h1><strong>Summary of app</strong></h1>
            {/* Gif Container*/}
            <div className="gif-container">
            <Image className="comic-gif" style={{marginBottom: '2%'}} src={goose} fluid />
            </div>
            <p>This is a memory game where a player will try and select a unique card each time without clicking on one that they already have selected previously. Once a card is selected, the cards will reshuffle so the player will have to try and remember a previously chosen card. The current score and high score are tracked so a player can gauge how well they are doing. </p>
            <p>This game is not mobile responsive due to phones having too small of a screen. I did not want to try and make the cards smaller because it might be hard for people to see. Additionally, if the cards were displayed in a column it would make things less user friendly due to having to scroll up and down the screen so much. </p>
            <h5><strong>In progress Features</strong></h5>
            <p>When I have time, I'd like to add some music and sound effects to indicate game over. This is to to help players realize when they lost.</p>
            {/* Link to deployed site */}
            <div className="center-button">
            <a href="https://crashley1992.github.io/clicky-game/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', width: '30%'}}><button className="btn btn-outline-dark">Click Me to view Deployed Site</button></a>
            </div>
            <h5>Click Icon to see Github Repo: <a style={{textDecoration: 'none', color: 'inherit'}} href="https://github.com/crashley1992/clicky-game" target="_blank" rel="noopener noreferrer">
                <FaGithub size={45} className="social-icons"/>
                </a></h5>
            {/* Design Section */}
            <h1><strong>Design:</strong></h1>
            {/* Design process explanation */}
            <p>Before drafting up a design, the rules for the game were laid out as well as what features the game should have. These rules were how the mechanics of the memory game should work as well as scoring. I was inspired to do Untitled Goose because I love video games and my current job involves engaging with the gaming community. At the time, Untitled Goose was very popular and the sneaky goose seemed perfect for a memory game. </p>
            <h5><strong>Why choose React?</strong></h5>
            <p>I wanted to learn React! I had mostly been using vanilla Javascript and jQuery. This was the first project I made in React. I felt this game would be a good opportunity to apply some of React’s fundamentals such as how to map json information to a component, and pass values using props. </p>
            <p>HONK! HONK!</p>
            <Footer />
        </div> 
        )
    }
}

export default ProjectTwo;