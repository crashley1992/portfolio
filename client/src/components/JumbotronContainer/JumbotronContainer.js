import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './jumbotron.css';

class JumbotronContainer extends Component{
 
    render(){
        return (
            <Jumbotron>
                <h2 className="welcome-header">Welcome!</h2>
                <h2 className="welcome-header">my</h2>
                <h2 className="welcome-header">name</h2>
                <h2 className="welcome-header">is</h2>
                <h2 className="welcome-header">Ashley</h2>
                <h2 className="welcome-header-md-lg-screens">Welcome! My name is Ashley</h2>
            </Jumbotron>
        )
    }
}

export default JumbotronContainer; 