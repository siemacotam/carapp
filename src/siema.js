import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

export class Mapa extends Component {
  state = { };

  render() {
    const mapStyles = {
      width: "100%",
      height: "100%",
      position: "relative",
      margin: "0 auto",
    };

    console.log(this.props.markers)

    const itemsToShow = this.props.markers && this.props.markers.map( i => i )

    return (
      <Map
        google={this.props.google}
        zoom={7}
        style={mapStyles}
        initialCenter={{ lat: 52.193275, lng: 20.930372 }}
      >
        {itemsToShow}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBzQ1DKtNZv04P4Tkml8RonB_sCgWBGWtc",
})(Mapa);
