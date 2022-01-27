import { Marker } from "google-maps-react";
import React, { useEffect, useState } from "react";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";
// import cars from './map.json'
import PopUp from "./Popup/PopUp";
import { parkingDetails } from "./Popup/subcomponents/parkingDetails";

const numbOfCars = 500;
const numbOfParkings = 100;
const numbOfPoi = 200;

const cars2 = {
  objects: [
    {
      discriminator: "vehicle",
      platesNumber: "WZPV001",
      sideNumber: "Z3-PVAN-01",
      color: "White",
      type: "TRUCK",
      picture: {
        id: "e7ace1de-ab7f-4120-922d-23441a041bd9",
        name: "e7ace1de-ab7f-4120-922d-23441a041bd9",
        extension: null,
        contentType: null,
      },
      rangeKm: 193,
      batteryLevelPct: 98,
      reservationEnd: null,
      reservation: null,
      status: "AVAILABLE",
      locationDescription: null,
      address: null,
      mapColor: { rgb: "ffffff", alpha: 0.5 },
      promotion: null,
      id: "00000000-0000-0000-0005-000000000003",
      name: "Enigma Python Van",
      description: null,
      location: { latitude: 52.1935161702226, longitude: 20.9304286193486 },
      metadata: null,
    },
  ],
};

export default function App() {
  const [markers, setMarkers] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null);
  const [carsData, setCarsData] = useState(null);
  const [parkingData, setParkingData] = useState(null);
  const [poiData, setPoiData] = useState(null);
  const [filterOption, setFilterOption] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [locations, setLocations] = useState(null);

  const createPOI = () => {
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
        cars2.objects[0].location.latitude - randomLatiNumber;
      newPoi.location.longitude =
        cars2.objects[0].location.longitude - randomLongiNumber;
      newPoi.location.latitude = newPoi.location.latitude.toFixed(6);
      newPoi.location.longitude = newPoi.location.longitude.toFixed(6);
      poiArray.push(newPoi);
    }
    setPoiData(poiArray);
    return poiArray;
  };

  const createParkings = () => {
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
        cars2.objects[0].location.latitude - randomLatiNumber;
      newParking.location.longitude =
        cars2.objects[0].location.longitude - randomLongiNumber;
      newParking.location.latitude = newParking.location.latitude.toFixed(6);
      newParking.location.longitude = newParking.location.longitude.toFixed(6);
      parkingArray.push(newParking);
    }
    setParkingData(parkingArray);
    return parkingArray;
  };

  const createCars = () => {
    let carArray = [...cars2.objects];
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
        cars2.objects[0].location.latitude - randomLatiNumber;
      newCar.location.longitude =
        cars2.objects[0].location.longitude - randomLongiNumber;
      newCar.location.latitude = newCar.location.latitude.toFixed(6);
      newCar.location.longitude = newCar.location.longitude.toFixed(6);
      carArray.push(newCar);
    }
    setCarsData(carArray);
    setFilteredData(carArray);
    setFilterOption("ALL");
    return carArray;
  };

  const filterData = () => {
    switch (filterOption) {
      case "ALL":
        setFilteredData(carsData);
        break;
      case "NONE":
        setFilteredData([]);
        break;
      case "AVAILABLE":
        setFilteredData(carsData.filter((i) => i.status === "AVAILABLE"));
        break;
      case "TAKEN":
        setFilteredData(carsData.filter((i) => i.status === "TAKEN"));
        break;
      case "75":
        setFilteredData(carsData.filter((i) => i.batteryLevelPct > 75));
        break;
      case "50":
        setFilteredData(carsData.filter((i) => i.batteryLevelPct > 50));
        break;
      case "25":
        setFilteredData(carsData.filter((i) => i.batteryLevelPct > 25));
        break;
      case "PARKING":
        setFilteredData(parkingData);
        break;
      case "POI":
        setFilteredData(poiData);
        break;
      case "INFO":
        setFilteredData(poiData.filter((i) => i.status === "INFO"));
        break;
      case "FOOD":
        setFilteredData(poiData.filter((i) => i.status === "FOOD"));
        break;
      case "BED":
        setFilteredData(poiData.filter((i) => i.status === "BED"));
        break;
      case "LIBRARY":
        setFilteredData(poiData.filter((i) => i.status === "LIBRARY"));
        break;
    }
  };

  const typeOfIcon = (data) => {
    switch (data) {
      case "AVAILABLE":
        return "http://maps.google.com/mapfiles/ms/icons/green-dot.png";
        break;
      case "TAKEN":
        return "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
        break;
      case "PARKING":
        // return "https://developers.google.com/maps/documentation/javascript/examples/full/images/parking_lot_maps.png";
        return "http://maps.google.com/mapfiles/ms/icons/gas.png"
        break;
      case "LIBRARY":
        return "https://developers.google.com/maps/documentation/javascript/examples/full/images/library_maps.png";
        break;
      case "INFO":
        return "https://developers.google.com/maps/documentation/javascript/examples/full/images/info-i_maps.png";
        break;
      case "FOOD":
        return "http://maps.google.com/mapfiles/kml/pal2/icon40.png";
        break;
      case "BED":
        return "http://maps.google.com/mapfiles/kml/pal2/icon28.png";
        break;
    }
  };

  const makeMarkers = () => {
    const carStatus =
      filteredData &&
      filteredData.map((el) => {
        let locationsList = poiData.map((el) => {
          const lati = Number(el.location.latitude).toFixed(6);
          const longi = Number(el.location.longitude).toFixed(6);
          return {
            position: { lat: Number(lati), lng: Number(longi) },
            icon: typeOfIcon(el.status),
            fn: () => {
              setIsOpen(true);
              setData(el);
            },
          };
        });
        setLocations(locationsList);
        console.log("locations zaktualizowane", locationsList.length);

        const lati = Number(el.location.latitude).toFixed(6);
        const longi = Number(el.location.longitude).toFixed(6);
        return (
          <Marker
            key={el.platesNumber}
            position={{ lat: Number(lati), lng: Number(longi) }}
            onClick={() => {
              setIsOpen(true);
              setData(el);
            }}
            icon={typeOfIcon(el.status)}
          />
        );
      });
    return carStatus;
  };

  useEffect(() => {
    createCars();
    createParkings();
    createPOI();
  }, []);
  useEffect(() => {
    filterData();
  }, [filterOption]);
  useEffect(() => {
    setMarkers(makeMarkers());
    // setLocations(makeMarkers())
  }, [filteredData]);


  return (
    <div className="appWrap">
      <Header />
      <Main
        markers={filteredData}
        data={carsData}
        setFilterOption={setFilterOption}
        filterOption={filterOption}
        setIsOpen={setIsOpen}
        setData={setData}
        typeOfIcon={typeOfIcon}
        locations={locations}
      />
      <PopUp open={isOpen} setIsOpen={setIsOpen} data={data} />
      <Footer />
    </div>
  );
}
