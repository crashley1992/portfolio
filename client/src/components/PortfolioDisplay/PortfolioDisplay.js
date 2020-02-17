import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import './portfolio-display.css';
import comic from './comic.gif';
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
            </div>
        </div>
        )
    }
}

export default PortfolioDisplay;