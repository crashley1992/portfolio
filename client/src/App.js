import React, { Component } from 'react';
import './App.css';
import NavTabs from './components/NavTabs/NavTabs';
import JumbotronContainer from './components/JumbotronContainer/JumbotronContainer';
import About from './components/About/About';
import PortfolioDisplay from './components/PortfolioDisplay/PortfolioDisplay';

class App extends Component {
  render() {
    return (
      <div>
        <NavTabs />
        <JumbotronContainer />
        <About />
        <PortfolioDisplay />
      </div>
    )
  }
}

export default App;
