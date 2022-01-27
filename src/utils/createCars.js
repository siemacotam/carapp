import { car } from "./carinfo";
import { numbOfCars } from "../App";

export const createCars = ( setCarsData, setFilteredData, setFilterOption) => {
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
      let randomLatiNumber = Math.random() * 4 - 1;
      let randomLongiNumber = Math.random() * 6 - 1;
      let batteryStatus = Math.floor(Math.random() * 100);
      let rangeKmStatus = Math.floor(Math.random() * 400);
      let carStatus = Math.random() >= 0.5 ? 1 : 0;
      let newCarPlates = Math.floor(Math.random() * 999999);
      if (carStatus === 1) {
        newCar.status = "AVAILABLE";
      } else {
        newCar.status = "TAKEN";
      }
      newCar.rangeKm = rangeKmStatus;
      newCar.platesNumber = "WI" + newCarPlates;
      newCar.batteryLevelPct = batteryStatus;
      newCar.location.latitude =
        car.objects[0].location.latitude - randomLatiNumber;
      newCar.location.longitude =
        car.objects[0].location.longitude - randomLongiNumber;
      newCar.location.latitude = newCar.location.latitude.toFixed(6);
      newCar.location.longitude = newCar.location.longitude.toFixed(6);
      carArray.push(newCar);
    }
    setCarsData(carArray);
    setFilteredData(carArray);
    setFilterOption("ALL");
    return carArray;
  };