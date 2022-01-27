import React from "react";
import GoogleMapContainer from "../GoogleMapContainer";
import SortPanel from "../SortPanel/SortPanel";
import './style/Main.css'

const Main = ({
  data,
  setFilterOption,
  filterOption,
  setIsOpen,
  setData,
  typeOfIcon,
  locations,
  setGoogleMapRef
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
          data={data}
          setIsOpen={setIsOpen}
          setData={setData}
          typeOfIcon={typeOfIcon}
          locations={locations}
          setGoogleMapRef={setGoogleMapRef}
        />
      </div>
    </main>
  );
};

export default Main;
