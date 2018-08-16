import React from 'react';

import './css/ImageGallery.css';

import LotOne from '../assets/gallery/lot-1-gall-rf.jpg'
import LotThree from '../assets/gallery/lot-3-gall-rf.jpg'
import LotThirtyOne from '../assets/gallery/lot-31-gall-rf.jpg' 
import LotThirtyTwo from '../assets/gallery/lot-32-gall-rf.jpg'
import LotThirtySix from '../assets/gallery/lot-36-gall-rf.jpg'
import LotThirtyNine from '../assets/gallery/lot-39-gall-rf.jpg'

class ImageGallery extends React.Component {

  render() {
   
    return (
    <section className="flex-container">
      <div className="image-container">
      <img className="image" src={LotOne} alt="Lot 1 - Augusta Rise" />
        <div className="tag">{this.props.data[0].status}</div>
        <div className="middle">
          <h3>{this.props.data[0].listing}</h3>
          <a href={this.props.data[0].url} target="blank"><button>{this.props.data[0].button}</button></a>
        </div>
      </div>
      <div className="image-container">
        <img className="image" src={LotThree} alt="Lot 3 - Augusta Rise" />
        <div className="tag">{this.props.data[1].status}</div>
      <div className="middle">
        <h3>{this.props.data[1].listing}</h3>
        <a href={this.props.data[1].url} target="blank"><button>{this.props.data[1].button}</button></a>
      </div>
    </div>
    <div className="image-container">
        <img className="image" src={LotThirtyOne} alt="Lot 31 - Augusta Rise" />
        <div className="tag">{this.props.data[2].status}</div>
      <div className="middle">
        <h3>{this.props.data[2].listing}</h3>
        <a href={this.props.data[2].url} target="blank"><button>{this.props.data[2].button}</button></a>
      </div>
    </div>
    <div className="image-container">
        <img className="image" src={LotThirtyTwo} alt="Lot 32 - Augusta Rise" />
        <div className="tag">{this.props.data[3].status}</div>
      <div className="middle">
        <h3>{this.props.data[3].listing}</h3>
        <a href={this.props.data[3].url} target="blank"><button>{this.props.data[3].button}</button></a>
      </div>
    </div>
    <div className="image-container">
      <img className="image" src={LotThirtySix} alt="Lot 36 - Augusta Rise" />
      <div className="tag">{this.props.data[4].status}</div>
      <div className="middle">
        <h3>{this.props.data[4].listing}</h3>
        <a href={this.props.data[4].url} target="blank"><button>{this.props.data[4].button}</button></a>
      </div>
    </div>
        <div className="image-container">
          <img className="image" src={LotThirtyNine} alt="Lot 39 - Augusta Rise" />
          <div className="tag">{this.props.data[5].status}</div>
          <div className="middle">
            <h3>{this.props.data[5].listing}</h3>
            <a href={this.props.data[5].url} target="blank"><button>{this.props.data[5].button}</button></a>
          </div>
        </div>
      </section>
    );
  }
}

  export default ImageGallery;
