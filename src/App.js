import React, { Component } from 'react';
import './App.css';

import MainNav from './components/MainNav'
import Header from './components/Header'
import Intro from './components/Intro'
import ParallaxRender from './components/ParallaxRender'
import StageOne from './components/StageOne'
import SpeakToday from './components/SpeakToday'
import ImageGallery from './components/ImageGallery'
import NotReady from './components/NotReady'
import ContactDets from './components/ContactDets'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
      <MainNav />   
      <Header />                                                   
      <Intro />
      <ParallaxRender />
      <StageOne />
      <SpeakToday />
      <ImageGallery />
      <NotReady />
      <ContactDets />
      <ContactForm />
      <Footer />
    </div>
    );
  }
}

export default App;
