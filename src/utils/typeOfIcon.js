export const typeOfIcon = (data) => {
  switch (data) {
    case "AVAILABLE":
      return "http://maps.google.com/mapfiles/ms/icons/green-dot.png";
    case "TAKEN":
      return "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
    case "PARKING":
      return "http://maps.google.com/mapfiles/ms/icons/gas.png";
    case "LIBRARY":
      return "https://developers.google.com/maps/documentation/javascript/examples/full/images/library_maps.png";
    case "INFO":
      return "https://developers.google.com/maps/documentation/javascript/examples/full/images/info-i_maps.png";
    case "FOOD":
      return "http://maps.google.com/mapfiles/kml/pal2/icon40.png";
    case "BED":
      return "http://maps.google.com/mapfiles/kml/pal2/icon28.png";
  }
};
