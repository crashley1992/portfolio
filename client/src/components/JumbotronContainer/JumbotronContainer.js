import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './jumbotron.css';

class JumbotronContainer extends Component{
    state = {
        opacity: 0
    }

    handleClick = (event) => {
        event.preventDefault();
        this.setState({opacity: 1}, () => setTimeout(() => this.setState({opacity:0}),4000));         
    }

    render(){
        return (
            <Jumbotron>
                <h2 className="welcome-header">Welcome! My name is Ashley</h2>
            </Jumbotron>
        )
    }
}

export default JumbotronContainer; 