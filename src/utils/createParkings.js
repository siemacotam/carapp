import { car } from "./carinfo";
import { numbOfParkings } from "../App";

export const createParkings = (setParkingData) => {
  let parkingArray = [];
  for (let i = 0; i < numbOfParkings; i++) {
    let newParking = {
      name: "CPN",
      PB95: 6.5,
      location: { latitude: 0, longitude: 0 },
      PB98: 7.2,
      diesel: 6.3,
      discriminator: "parking",
      status: "PARKING",
    };
    let randomLatiNumber = Math.random() * 4 - 1;
    let randomLongiNumber = Math.random() * 6 - 1;
    newParking.location.latitude =
      car.objects[0].location.latitude - randomLatiNumber;
    newParking.location.longitude =
      car.objects[0].location.longitude - randomLongiNumber;
    newParking.location.latitude = newParking.location.latitude.toFixed(6);
    newParking.location.longitude = newParking.location.longitude.toFixed(6);
    parkingArray.push(newParking);
  }
  setParkingData(parkingArray);
  return parkingArray;
};
