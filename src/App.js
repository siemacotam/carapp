import { Marker } from "google-maps-react";
import React, { useEffect, useState } from "react";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";
import PopUp from "./Popup/PopUp";
import { createCars } from "./utils/createCars";
import { createParkings } from "./utils/createParkings";
import { createPOI } from "./utils/createPoi";
import { typeOfIcon } from "./utils/typeOfIcon";

export const numbOfCars = 500;
export const numbOfParkings = 200;
export const numbOfPoi = 200;

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null);
  const [carsData, setCarsData] = useState(null);
  const [parkingData, setParkingData] = useState(null);
  const [poiData, setPoiData] = useState(null);
  const [filterOption, setFilterOption] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [locations, setLocations] = useState(null);


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


  const makeLocations = () => {
    if(filteredData.length === 0){
        setLocations([])
    }

    const locationsToShow =
      filteredData &&
      filteredData.map((el) => {
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
      setLocations(locationsToShow)
  };

  useEffect(() => {
    createCars( setCarsData, setFilteredData, setFilterOption);
    createParkings( setParkingData);
    createPOI( setPoiData);
  }, []);
  useEffect(() => {
    filterData();
  }, [filterOption]);
  useEffect(() => {
    makeLocations();
  }, [filteredData]);


  return (
    <div className="appWrap">
      <Header />
      <Main
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
