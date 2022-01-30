import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import MarkerClusterer from "@google/markerclusterer";
import "./GoogleMapContainer.css";

export default class GoogleMapContainer extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src =
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js";
    script.async = true;
    document.body.appendChild(script);
  }

  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  createMarkers() {
    let locations = this.props.locations;

    let markers =
      locations &&
      locations.map((location) => {
        let item = new this.googleRef.Marker({
          position: location.position,
          icon: location.icon,
        });
        google.maps.event.addListener(item, "click", location.fn);
        return item;
      });
    return markers;
  }

  setGoogleMapRef = (map, maps) => {
    this.googleMapRef = map;
    this.googleRef = maps;
    let markers = this.createMarkers();
    this.markerCluster = new MarkerClusterer(map, markers, {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
      gridSize: 60,
      minimumClusterSize: 2,
    });
  };

  render() {
    if (this.googleMapRef) {
      let markers = this.createMarkers();
      this.markerCluster.clearMarkers();
      this.markerCluster.addMarkers(markers);
    }

    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: `AIzaSyBzQ1DKtNZv04P4Tkml8RonB_sCgWBGWtc` }}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => this.setGoogleMapRef(map, maps)}
        defaultCenter={{ lat: 51.271239, lng: 18.085767 }}
        defaultZoom={8}
        options={{ streetViewControl: true }}
      />
    );
  }
}
