import React, { Component } from 'react';

import './css/SpeakToday.css';

class SpeakToday extends Component {
    render() {
      return (
        <div className="container-speak">
          <h2 className="speak-lead">Speak to us today</h2>
          <a href="#"><button className="speak-btn">Contact us</button></a>
        </div>
      );
    }
  }
  
  export default SpeakToday;