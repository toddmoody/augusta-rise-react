import React, { Component } from 'react';

import SectionMap from '../assets/ar-sitemap-v2.png'
import DesignGuide from '../assets/AR_DESIGN.pdf'
import SectionGuide from '../assets/AR_SECTION.pdf'

import './css/StageOne.css';

class StageOne extends Component {
    render() {
      return (
      <div id="sections" className="stage-one-container">
        <div className="stage-one-img">
          <img src={SectionMap} alt="Stage One Now Selling" />
        </div>
        <div className="stage-one-para">
          <p className="lead">Stage one comprises of 23 level aspect sections, ranging in size from 406 - 565 m².</p>
          <p className="lead">Located on Kayelene Place, Augusta Rise is conveniently positioned to take advantage of everything Omokoroa has to offer.</p>
          <p className="lead">Our <a href={DesignGuide} target="blank" className="design-link">Design Guidelines</a> have been developed to protect your investment and ensure all construction is in keeping with our vision.</p>
          <p className="lead">Check out a couple of our featured listings below.</p>
          <a href={SectionGuide} target="blank" className="details-link">Section details</a>
        </div>
      </div>
      );
    }
  }
    export default StageOne;