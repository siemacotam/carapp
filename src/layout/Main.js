import React from "react";
import GoogleMapContainer from "../siema";
import SortPanel from "../SortPanel";

const Main = ({
  markers,
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
          markers={markers}
          data={data}
          setIsOpen={setIsOpen}
          setData={setData}
          typeOfIcon={typeOfIcon}
          locations={locations}
          setGoogleMapRef={setGoogleMapRef}
        />
      </div>
      {/* <Mapa /> */}
    </main>
  );
};

export default Main;
