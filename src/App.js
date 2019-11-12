import React, { Component } from 'react';
import './resources/styles.css';


import {Element} from 'react-scroll';


import Header from './components/header_footer/Header';
import Featured from './components/featured/Index';
import VenueNfo from './components/VenueNfo/Index'; 
import Highlights from './components/Highlights/Index';
import Pricing from './components/Pricing/Index';
import Location from './components/Location/Index';
import Footer from './components/header_footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height:"1500px", background:'cornflowerblue'}}>
        
        <Header/>
        
        <Element name="featured">
          <Featured/>
        </Element>


        <Element name="venuenfo">
          <VenueNfo/>
        </Element>


        <Element name="highlights">
          <Highlights/>
        </Element>


        <Element name="pricing">
          <Pricing/>
        </Element>
        

        <Element name="location">
          <Location/>
        </Element>
        
        
        
        <Footer/>
      </div>
    );
  }
}

export default App;