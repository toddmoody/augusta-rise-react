import React, { Component } from 'react';

import SectionMap from '../assets/section-map.jpg'

import './css/StageOne.css';

class StageOne extends Component {
    render() {
      return (
      <div className="stage-one-container">
        <div className="stage-one-img">
          <img src={SectionMap} alt="Stage One Now Selling" />
        </div>
        <div className="stage-one-para">
          <p className="lead">Stage one comprises of 23 level aspect sections, ranging in size from 406 - 565 m².</p>
          <p className="lead">Located on Kaylene Place, Augusta Rise is conveniently positioned to take advantage of everything Omokoroa has to offer.</p>
          <p className="lead">Our Design Guidelines have been developed to protect your investment and ensure all construction is in keeping with our vision.</p>
          <p className="lead">Check out a couple of our featured listings below. Finance options are also available.</p>
          <a href="#" className="details-link">Section details</a>
        </div>
      </div>
      );
    }
  }
    export default StageOne;