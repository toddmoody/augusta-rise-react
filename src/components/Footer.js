import React, { Component } from 'react';

import FooterLogo from '../assets/augusta-rise-dark@2x.png'

import './css/Footer.css';

class Footer extends Component {
    render() {
      return (
        <div className="footer-container">
          <div className="footer">
            <div className="footer-col-1">
              <h4>Site links</h4>
              <ul>
                <li><a href="#top">Top</a></li>
                <li><a href="#intro">Location</a></li>
                <li><a href="#sections">Sections</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-col-2">
              <h4>About</h4>
                <p>Augusta Rise is an exclusive development in Omokoroa, located in the beautiful Western Bay of Plenty. Stage One is selling now!</p>
            </div>
            <div className="footer-col-3">
              <h4>Contact</h4>
                <p>(021) 734 775</p>
            </div>
          </div>
          <footer>
            <img className="footer-logo" src={FooterLogo} alt="Augusta Rise" />
            <p className="footer-sm">Copyright 2018 | Website by <a href="http://moodsdigital.co.nz" target="blank">Moods Digital</a></p>
          </footer>
        </div> 
      );
    }
  }
  
  export default Footer;