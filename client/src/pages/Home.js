import React, { Component } from 'react';
import JumbotronContainer from '../components/JumbotronContainer/JumbotronContainer';
import About from '../components/About/About';
import PortfolioDisplay from '../components/PortfolioDisplay/PortfolioDisplay';
import Footer from '../components/Footer/Footer';
class Home extends Component {
    render() {
        return (
            <div>
       <JumbotronContainer />
       <About />
       <PortfolioDisplay />
       <Footer />
         </div>
        )
    }
}

export default Home;