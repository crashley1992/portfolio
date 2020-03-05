import React, { Component } from 'react';
import './App.css';
import NavTabs from './components/NavTabs/NavTabs';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home';
import ProjectOne from './pages/ProjectOne';
import ProjectTwo from './pages/ProjectTwo';

class App extends Component {
  render() {
    return (
      <div>
      <Router>
      <NavTabs />
      <Route exact path="/" component={Home} />
      <Route exact path="/portfolio-one" 
      component={ProjectOne} />
      <Route exact path="/portfolio-two" 
      component={ProjectTwo} />
      </Router>
      </div>
    )
  }
}

export default App;
