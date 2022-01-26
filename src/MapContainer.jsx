import { Map, GoogleApiWrapper } from "google-maps-react";

export const MapContainer = () => {
  const mapStyles = {
    width: "100%",
    height: "100%",
  };

  return (
    <Map
      google={this.props.google}
      zoom={8}
      style={mapStyles}
      initialCenter={{ lat: 47.444, lng: -122.176 }}
    />
  );
};

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyBzQ1DKtNZv04P4Tkml8RonB_sCgWBGWtc",
// })(MapContainer);
