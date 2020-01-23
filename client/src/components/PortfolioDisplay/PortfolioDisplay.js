import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import './portfolio-display.css';
import mountain from './mountain.png';

class PortfolioDisplay extends Component {
    state = {
        showCompontent: null
    }

    handleDisplay = () => {
        this.setState({showCompontent: true});
    }

    handleClose = () => {
        this.setState({showCompontent: false});
    }

    render() {
        return (
            <div>
                <div className="gallery">
                <h4 className="portfolio-title">Portfolio</h4>
                    <Image src={mountain} fluid />
                    <button className="btn btn-outline-dark"> See Project Details</button>
                    <Image src={mountain} fluid />
                    <button className="btn btn-outline-dark">See Project Details</button> 
            </div>
        </div>
        )
    }
}

export default PortfolioDisplay;