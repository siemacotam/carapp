import React from "react";
import GoogleMapContainer from "../GoogleMapContainer/GoogleMapContainer";
import SortPanel from "../SortPanel/SortPanel";
import "./style/Main.css";

const Main = ({
  carsData,
  setFilterOption,
  filterOption,
  locations,
  parkingData,
  poiData,
}) => {
  return (
    <main>
      <SortPanel
        carsData={carsData}
        setFilterOption={setFilterOption}
        filterOption={filterOption}
        parkingData={parkingData}
        poiData={poiData}
      />
      <div className="mapWrapper">
        <GoogleMapContainer locations={locations} />
      </div>
    </main>
  );
};

export default Main;
