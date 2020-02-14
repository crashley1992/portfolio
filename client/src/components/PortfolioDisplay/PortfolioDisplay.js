import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import './portfolio-display.css';
import mountain from './mountain.png';

class PortfolioDisplay extends Component {
  
    render() {
        return (
            <div>
                <div className="gallery">
                <h4 className="portfolio-title">Portfolio</h4>
                <h6 className="project-title">Comic Hero Finder</h6>
                    <Image src={mountain} fluid />
                    <button className="btn btn-outline-dark" onClick={()=> {
                        window.location.href="/portfolio-one"
                    }}> See Project Details</button>
                <h6 className="project-title">Memory Game</h6>
                    <Image src={mountain} fluid />
                    <button className="btn btn-outline-dark" onClick={()=> {
                        window.location.href="/portfolio-two"
                    }}>See Project Details</button> 
            </div>
        </div>
        )
    }
}

export default PortfolioDisplay;