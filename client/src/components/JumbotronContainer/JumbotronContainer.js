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
                <h2 className="welcome-header">Welcome my name is Ashley</h2>
                <h3 className="intro">I am a </h3>
                <h3 className="intro">Developer</h3>
                <h3 className="intro">Professional</h3>
                <h3 className="intro">Team Member</h3>
            </Jumbotron>
        )
    }
}

export default JumbotronContainer; 