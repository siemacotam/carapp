import React from "react";
import GoogleMapContainer from "../GoogleMapContainer";
import SortPanel from "../SortPanel/SortPanel";
import "./style/Main.css";

const Main = ({
  data,
  setFilterOption,
  filterOption,
  setIsOpen,
  setData,
  typeOfIcon,
  locations,
  setGoogleMapRef,
}) => {
  return (
    <main>
      <SortPanel
        data={data}
        setFilterOption={setFilterOption}
        filterOption={filterOption}
      />
      <div className="mapWrapper">
        <GoogleMapContainer
          locations={locations}
        />
      </div>
    </main>
  );
};

export default Main;
