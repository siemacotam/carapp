import { car } from "./carinfo";
import { numbOfPoi } from "../App";

export const createPOI = (setPoiData) => {
  let poiArray = [];
  for (let i = 0; i < numbOfPoi; i++) {
    let newPoi = {
      name: "teatr",
      location: { latitude: 0, longitude: 0 },
      discriminator: "poi",
      status: "POI",
    };
    let typeOfPoi = Math.floor(Math.random() * 4 + 1);
    switch (typeOfPoi) {
      case 1:
        newPoi.name = "Biblioteka";
        newPoi.status = "LIBRARY";
        break;
      case 2:
        newPoi.name = "Punkt informacyjny";
        newPoi.status = "INFO";
        break;
      case 3:
        newPoi.name = "Restauracja";
        newPoi.status = "FOOD";
        break;
      case 4:
        newPoi.name = "Hotel";
        newPoi.status = "BED";
        break;
    }
    let randomLatiNumber = Math.random() * 4 - 1;
    let randomLongiNumber = Math.random() * 6 - 1;
    newPoi.location.latitude =
      car.objects[0].location.latitude - randomLatiNumber;
    newPoi.location.longitude =
      car.objects[0].location.longitude - randomLongiNumber;
    newPoi.location.latitude = newPoi.location.latitude.toFixed(6);
    newPoi.location.longitude = newPoi.location.longitude.toFixed(6);
    poiArray.push(newPoi);
  }
  setPoiData(poiArray);
  return poiArray;
};
