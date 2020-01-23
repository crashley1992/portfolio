import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import './portfolio-display.css';
import mountain from './mountain.png';

class PortfolioDisplay extends Component {
    state = {
        showCompontent: null
    }
    
    render() {
        return (
            <div>
                <div className="gallery">
                <h4 className="portfolio-title">Portfolio</h4>
                    <Image src={mountain} fluid />
                    <Image src={mountain} fluid />
            </div>
        </div>
        )
    }
}

export default PortfolioDisplay;