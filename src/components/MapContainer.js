
import React, { Component } from 'react';
import ReactDOM from 'react-dom'

export default class MapContainer extends Component {

//creating a state object in order to add additional locations (potentially houses) at a later stage.
state = {
    locations: [
            { 
            name: "Augusta Rise, 27 Kaylene Place, Omokoroa", 
            location: {lat: -37.645128, lng: 176.026101} 
            }
        ]
    }
    

  componentDidUpdate() {
    this.loadMap(); // call loadMap function to load the google map
  }

  loadMap() {
    if (this.props && this.props.google) { // checks to make sure that props have been passed
      const {google} = this.props; // sets props equal to google
      const maps = google.maps; // sets maps to google maps props

      const mapRef = this.refs.map; 
      const node = ReactDOM.findDOMNode(mapRef); 

      const mapConfig = Object.assign({}, {
        center: {lat: -37.575571, lng: 176.084981}, 
        zoom: 10, 
        mapTypeId: 'roadmap' 
      })

      this.map = new maps.Map(node, mapConfig); 

      this.state.locations.forEach( location => { // iterate through locations saved in state
        const marker = new google.maps.Marker({ // creates a new Google maps Marker object.
          position: {lat: location.location.lat, lng: location.location.lng}, // sets position of marker to specified location
          map: this.map,
          title: location.name 
        });
      })

    }
  }

  render() {
    const style = { 
      height: '83vh' //additional flexbox styles in component css file.
    }

    return ( 
      <div ref="map" style={style}>
        loading map...
      </div>
    )
  }
}