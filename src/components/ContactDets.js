import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react' 
// import google map child component
import MapContainer from './MapContainer'

import './css/ContactDets.css';

class ContactDets extends Component {
    render() {
      return (
        <div id="contact" className="dets-container">
          <div id="map" className="dets-container-left">
              <MapContainer google={this.props.google} />
          </div>
          <div className="dets-container-right">
            <h2>Get in touch</h2>
              <p className="lead">For more information, please complete the form below or call (021) 734 775. </p>
              <p className="lead">Or, visit our on-site sales office which is open<br />
              <strong>Friday 12:00 - 4:00pm</strong>
              </p>
            <address>  
              <h2>Location</h2>
                <p className="lead">
                27 Kaylene Place<br/>
                Omokoroa<br/>
                Western Bay of Plenty, NZ<br/>
                </p>
                <p className="lead"><abbr title="Phone Number"></abbr><strong>Phone:</strong> (021) 734 775</p>
            </address>
          </div>
        </div>
      );
    }
  }
  
  // Exporting the App component WITH the GoogleApiWrapper. Passing it down with an object containing the API key
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBV50yNh1_mI48ZW_Yd4HNoQfZD_1cigqg',
  })(ContactDets)