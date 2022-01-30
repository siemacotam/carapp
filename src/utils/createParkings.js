import { car } from "./carinfo";
import { numbOfParkings } from "../App";

export const createParkings = (setParkingData) => {
  let parkingArray = [];
  for (let i = 0; i < numbOfParkings; i++) {
    let newParking = {
      name: "Parking",
      location: { latitude: 0, longitude: 0 },
      discriminator: "parking",
      status: "PARKING",
    };
    let randomLatiNumber = Math.random() * 6 - 1;
    let randomLongiNumber = Math.random() * 8 - 1;
    let newLatitude = car.objects[0].location.latitude - randomLatiNumber;
    let newLongitude = car.objects[0].location.longitude - randomLongiNumber;
    newParking.location.latitude = newLatitude.toFixed(6);
    newParking.location.longitude = newLongitude.toFixed(6);
    parkingArray.push(newParking);
  }
  setParkingData(parkingArray);
  return parkingArray;
};
