import React, { useState } from "react";
import { carDetails } from "./subcomponents/carDetails";
import { parkingDetails } from "./subcomponents/parkingDetails";
import { poiDetails } from "./subcomponents/poiDetails";

const PopUp = ({ open, setIsOpen, data }) => {
  if (!data) {
    return null;
  }

  const details = (
    <div>
      <div className="popup" onClick={() => setIsOpen(false)}></div>
      {data.discriminator === "vehicle" && carDetails(setIsOpen, data)}
      {data.discriminator === "parking" && parkingDetails(setIsOpen, data)}
      {data.discriminator === "poi" && poiDetails(setIsOpen, data)}
    </div>
  );

  return open && details;
};

export default PopUp;
