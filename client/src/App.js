import React, { Component } from 'react';
import './App.css';
import NavTabs from './components/NavTabs/NavTabs';
import JumbotronContainer from './components/JumbotronContainer/JumbotronContainer';
import About from './components/About/About';
import PortfolioDisplay from './components/PortfolioDisplay/PortfolioDisplay';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
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
