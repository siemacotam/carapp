import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import MarkerClusterer from "@google/markerclusterer";

export default class GoogleMapContainer extends Component {
  state = {
    locationsToShow: null,
  };

  componentDidMount() {
    const script = document.createElement("script");
    script.src =
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js";
    script.async = true;
    document.body.appendChild(script);
  }

  componentDidUpdate(prevProps) {
    if (this.props.locations !== prevProps.locations) {
      this.setState({ locationsToShow: this.props.locations });
    }
  }
  shouldComponentUpdate(nextProps){
    if (nextProps.locations !== this.props.locations) {
      return true;
    } else {
      return false;
    }
  }

  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  render() {
    const setGoogleMapRef = (map, maps) => {
      this.googleMapRef = map;
      this.googleRef = maps;
      let locations = this.props.locations;
      console.log("locations w propsie");

      let markers =
        this.state.locationsToShow &&
        this.state.locationsToShow.map((location) => {
          let item = new this.googleRef.Marker({
            position: location.position,
            icon: location.icon,
          });
          google.maps.event.addListener(item, "click", location.fn);
          return item;
        });
      let markerCluster = new MarkerClusterer(map, markers, {
        imagePath:
          "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
        gridSize: 60,
        minimumClusterSize: 2,
      });
    };


    


    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: `AIzaSyBzQ1DKtNZv04P4Tkml8RonB_sCgWBGWtc` }}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => setGoogleMapRef(map, maps)}
        defaultCenter={{ lat: 52.193275, lng: 20.930372 }}
        defaultZoom={7}
        options={{ streetViewControl: true }}
      />
    );
  }
}
