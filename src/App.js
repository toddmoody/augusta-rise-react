import React, { Component } from 'react';
import './App.css';

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

const listingDets = [
  {
    listing: "Lot 1",
    price: "$545000",
    status: "For sale",
    button: "More Details",
    url: "https://barretthomes.co.nz/property/lot-1-augusta-rise-omokoroa/"
  },
  {
    listing: "Lot 3",
    price: "$615000",
    status: "For sale",
    button: "More Details",
    url: "https://barretthomes.co.nz/property/lot-3-augusta-rise-omokoroa/"
  },
  {
    listing: "Lot 31",
    price: "$690000",
    status: "For sale",
    button: "More Details",
    url: "https://barretthomes.co.nz/property/lot-31-augusta-rise-omokoroa/"
  },
  {
    listing: "Lot 32",
    price: "$660000",
    status: "For Sale",
    button: "More Details",
    url: "https://barretthomes.co.nz/property/lot-32-augusta-rise-omokoroa/"
  },
  {
    listing: "Lot 36",
    price: "$680000",
    status: "For Sale",
    button: "More Details",
    url: "https://barretthomes.co.nz/property/lot-36-augusta-rise-omokoroa/"
  },
  {
    listing: "Lot 39",
    price: "$725000",
    status: "For Sale",
    button: "More Details",
    url: "https://barretthomes.co.nz/property/lot-39-augusta-rise-omokoroa/"
  }
]

class App extends Component {
  render() {
    return (
      <div id="top" className="App">
      <Header />                                         
      <Intro />
      <ParallaxRender />
      <StageOne />
      <ImageGallery data={listingDets} />
      <SpeakToday />
      <NotReady />
      <ContactDets />
      <ContactForm />
      <Footer />
    </div>
    );
  }
}

export default App;
