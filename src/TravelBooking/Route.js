import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Polyline } from 'google-maps-react';

class StreetMap extends Component {
  render() {
    const mapStyles = {
      width: '100%',
      height: '100%',
    };

    const polylineCoordinates = [
      { lat: 37.774929, lng: -122.419416 }, // Example coordinates
      { lat: 37.781537, lng: -122.432513 }, // Example coordinates
      { lat: 37.773972, lng: -122.431297 }, // Example coordinates
    ];

    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 37.774929,
          lng: -122.419416,
        }}
      >
        <Polyline
          path={polylineCoordinates}
          strokeColor="#0000FF"
          strokeOpacity={0.8}
          strokeWeight={2}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'YOUR_GOOGLE_MAPS_API_KEY',
})(StreetMap);
