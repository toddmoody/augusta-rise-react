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
              <p className="lead">For more information, please complete the form below or call (027) 230 5232. </p>
              <p className="lead">Or, visit our on-site Showhome which is open Thursday - Sunday<strong> 12:00pm until 4:00pm.</strong>
              </p>
            <address>  
              <h2>Location</h2>
                <p className="lead">
                27 Kayelene Place<br/>
                Omokoroa<br/>
                Western Bay of Plenty, NZ<br/>
                </p>
                <p className="lead"><abbr title="Phone Number"></abbr><strong>Phone:</strong> (027) 230 5232.</p>
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