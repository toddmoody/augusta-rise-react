import React from 'react';

import './css/ImageGallery.css';

import LotOne from '../assets/gallery/lot-1-gall.jpg'
import LotThree from '../assets/gallery/lot-3-gall.jpg'
import LotFourty from '../assets/gallery/lot-40-gall.jpg'
import LotFourtyTwo from '../assets/gallery/lot-42-gall.jpg'

const listingDets = [
  {
    listing: "Lot 1",
    price: "$669000",
    status: "For sale",
    button: "More Details",
    url: "https://barretthomes.co.nz/property/lot-1-augusta-rise-omokoroa/"
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

class ImageGallery extends React.Component {

  render() {
   
    return (
        <section className="flex-container">
         <div className="image-container">
          <img className="image" src={LotOne} alt="Lot 1 - Augusta Rise" />
            <div className="tag">{listingDets[0].status}</div>
          <div className="middle">
            <h3>{listingDets[0].listing}</h3>
            <a href={listingDets[0].url} target="blank"><button>{listingDets[0].button}</button></a>
          </div>
        </div>
        <div className="image-container">
          <img className="image" src={LotThree} alt="Lot 1 - Augusta Rise" />
            <div className="tag">{listingDets[1].status}</div>
          <div className="middle">
            <h3>{listingDets[1].listing}</h3>
            <a href={listingDets[1].url} target="blank"><button>{listingDets[1].button}</button></a>
          </div>
        </div>
        <div className="image-container">
          <img className="image" src={LotFourty} alt="Lot 1 - Augusta Rise" />
            <div className="tag">{listingDets[2].status}</div>
          <div className="middle">
            <h3>{listingDets[2].listing}</h3>
            <a href={listingDets[2].url} target="blank"><button>{listingDets[2].button}</button></a>
          </div>
        </div>
        <div className="image-container">
          <img className="image" src={LotFourtyTwo} alt="Lot 1 - Augusta Rise" />
            <div className="tag">{listingDets[3].status}</div>
          <div className="middle">
            <h3>{listingDets[3].listing}</h3>
            <a href={listingDets[3].url} target="blank"><button>{listingDets[3].button}</button></a>
          </div>
        </div>
      </section>
    );
  }
}

  export default ImageGallery;
