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
    price: "$669000",
    status: "For sale",
    button: "More Details",
    url: "https://barretthomes.co.nz/property/lot-1-augusta-rise-omokoroa/"
  },
  {
    listing: "Lot 10",
    price: "$669000",
    status: "For sale",
    button: "More Details",
    url: "https://barretthomes.co.nz/property/lot-10-augusta-rise-omokoroa/"
  },
  {
    listing: "Lot 39",
    price: "$669000",
    status: "For sale",
    button: "More Details",
    url: "https://barretthomes.co.nz/property/lot-39-augusta-rise-omokoroa/"
  },
  {
    listing: "Lot 3",
    price: "$669000",
    status: "Under Offer",
    button: "More Details",
    url: "https://barretthomes.co.nz/property/lot-3-augusta-rise-omokoroa/"
  },
  {
    listing: "Lot 40",
    price: "$669000",
    status: "Under Offer",
    button: "More Details",
    url: "https://barretthomes.co.nz/property/lot-40-augusta-rise-omokoroa/"
  },
  {
    listing: "Lot 42",
    price: "$669000",
    status: "Under Offer",
    button: "More Details",
    url: "https://barretthomes.co.nz/property/lot-42-augusta-rise-omokoroa/"
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
