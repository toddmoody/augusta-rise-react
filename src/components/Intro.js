import React, { Component } from 'react';

import './css/Intro.css';

class Intro extends Component {
    render() {
      return (
          <section className="intro-text">
              <h2>Welcome to Augusta Rise.<br/>Secure a section in stunning Omokoroa!</h2>
              <p>Augusta Rise is an exclusive development in Omokoroa, located in the beautiful Western Bay of Plenty. Stage One is selling now!</p>
              <a className="cta-link" href="#">House and Land Packages available</a>
          </section>
      );
    }
  }
    export default Intro;
