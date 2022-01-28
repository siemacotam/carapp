import React, { useEffect, useState } from "react";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";
import PopUp from "./Popup/PopUp";
import { createCars } from "./utils/createCars";
import { createParkings } from "./utils/createParkings";
import { createPOI } from "./utils/createPoi";
import { filterData } from "./utils/filterData";
import { makeLocations } from "./utils/makeLocations";

export const numbOfCars = 475;
export const numbOfParkings = 197;
export const numbOfPoi = 243;

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null);
  const [carsData, setCarsData] = useState(null);
  const [parkingData, setParkingData] = useState(null);
  const [poiData, setPoiData] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [locations, setLocations] = useState(null);
  const [filterOption, setFilterOption] = useState({
    ALL: false,
    NONE: false,
    AVAILABLE: false,
    TAKEN: false,
    FULL: false,
    HALF: false,
    PARKING: false,
    LIBRARY: false,
    BED: false,
    FOOD: false,
    INFO: false,
  });

  useEffect(() => {
    createCars(setCarsData, setFilteredData, setFilterOption, filterOption);
    createParkings(setParkingData);
    createPOI(setPoiData);
  }, []);
  useEffect(() => {
    filterData(filterOption, carsData, parkingData, poiData, setFilteredData);
  }, [filterOption]);
  useEffect(() => {
    makeLocations(filteredData, setLocations, setData, setIsOpen);
  }, [filteredData]);

  return (
    <div className="appWrap">
      <Header />
      <Main
        carsData={carsData}
        parkingData={parkingData}
        poiData={poiData}
        setFilterOption={setFilterOption}
        filterOption={filterOption}
        locations={locations}
      />
      <PopUp open={isOpen} setIsOpen={setIsOpen} data={data} />
      <Footer />
    </div>
  );
}
