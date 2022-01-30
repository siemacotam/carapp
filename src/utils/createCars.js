import { car } from "./carinfo";
import { numbOfCars } from "../App";

export const createCars = (
  setCarsData,
  setFilteredData,
  setFilterOption,
  filterOption
) => {
  let carArray = [...car.objects];
  for (let i = 0; i < numbOfCars; i++) {
    let newCar = {
      name: "Skoda Fabia",
      batteryLevelPct: 0,
      location: { latitude: 0, longitude: 0 },
      rangeKm: 0,
      status: "AVAILABLE",
      platesNumber: "dw12345",
      discriminator: "vehicle",
    };
    let batteryStatus = Math.floor(Math.random() * 100);
    newCar.batteryLevelPct = batteryStatus;

    let rangeKmStatus = Math.floor(Math.random() * 400);
    newCar.rangeKm = rangeKmStatus;

    let carStatus = Math.random() >= 0.5 ? 1 : 0;
    if (carStatus === 1) {
      newCar.status = "AVAILABLE";
    } else {
      newCar.status = "TAKEN";
    }

    let newCarPlates = Math.floor(Math.random() * 999999);
    newCar.platesNumber = "WI" + newCarPlates;

    let randomLatiNumber = Math.random() * 6 - 1;
    let randomLongiNumber = Math.random() * 8 - 1;
    let newLatitude = car.objects[0].location.latitude - randomLatiNumber;
    let newlongitude = car.objects[0].location.longitude - randomLongiNumber;
    newCar.location.latitude = newLatitude.toFixed(6);
    newCar.location.longitude = newlongitude.toFixed(6);
    carArray.push(newCar);
  }
  setCarsData(carArray);
  setFilteredData(carArray);
  setFilterOption({ ...filterOption, ALL: true });
  return carArray;
};
