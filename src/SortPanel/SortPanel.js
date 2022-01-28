import React from "react";
import "./SortPanel.css";
import { correctLabel } from "./utils/correctLabel";

const SortPanel = ({
  carsData,
  poiData,
  parkingData,
  setFilterOption,
  filterOption,
}) => {
  const filterOptions = [
    {
      filterTxt: "ALL",
      label: `Wszystkie (${carsData && carsData.filter((i) => i).length})`,
    },
    {
      filterTxt: "NONE",
      label: `Ukryj`,
    },
    {
      filterTxt: "AVAILABLE",
      label: `Dostępne (${
        carsData && carsData.filter((i) => i.status === "AVAILABLE").length
      })`,
    },
    {
      filterTxt: "TAKEN",
      label: `Niedostępne (${
        carsData && carsData.filter((i) => i.status === "TAKEN").length
      })`,
    },
    {
      filterTxt: "FULL",
      label: `Więcej niż 75% (
        ${carsData && carsData.filter((i) => i.batteryLevelPct > 75).length})`,
    },
    {
      filterTxt: "HALF",
      label: `Więcej niż 50% (
        ${carsData && carsData.filter((i) => i.batteryLevelPct > 50).length})`,
    },
    {
      filterTxt: "PARKING",
      label: `Pokaż parkingi (${parkingData && parkingData.length})`,
    },
    {
      filterTxt: "LIBRARY",
      label: `Pokaż biblioteki (
        ${poiData && poiData.filter((i) => i.status === "FOOD").length})`,
    },
    {
      filterTxt: "BED",
      label: `Pokaż hotele (
        ${poiData && poiData.filter((i) => i.status === "BED").length})`,
    },
    {
      filterTxt: "FOOD",
      label: `Pokaż restauracje (
        ${poiData && poiData.filter((i) => i.status === "FOOD").length})`,
    },
    {
      filterTxt: "INFO",
      label: `Pokaż punkty informacyjne (
        ${poiData && poiData.filter((i) => i.status === "INFO").length})`,
    },
  ];

  return (
    <aside className="sortPanel">
      <div className="sortPanel__panelwrap">
        <p className="sortPanel__subtitle bordertopradious">Auta</p>
        <div className="sortPanel__modul">
          {correctLabel(filterOptions[0], setFilterOption, filterOption)}
          {correctLabel(filterOptions[1], setFilterOption, filterOption)}
        </div>
        <div className="sortPanel__modul">
          <p className="sortPanel__subtitle">Dostępność</p>
          {correctLabel(filterOptions[2], setFilterOption, filterOption)}
          {correctLabel(filterOptions[3], setFilterOption, filterOption)}
        </div>
        <div className="sortPanel__modul">
          <p className="sortPanel__subtitle">Poziom baterii</p>
          {correctLabel(filterOptions[4], setFilterOption, filterOption)}
          {correctLabel(filterOptions[5], setFilterOption, filterOption)}
        </div>
      </div>
      <div className="sortPanel__panelwrap">
        <div className="sortPanel__modul">
          <p className="sortPanel__subtitle">Parkingi</p>
          {correctLabel(filterOptions[6], setFilterOption, filterOption)}
        </div>
        <div className="sortPanel__modul">
          <p className="sortPanel__subtitle">POI</p>
          {correctLabel(filterOptions[7], setFilterOption, filterOption)}
          {correctLabel(filterOptions[8], setFilterOption, filterOption)}
          {correctLabel(filterOptions[9], setFilterOption, filterOption)}
          {correctLabel(filterOptions[10], setFilterOption, filterOption)}
        </div>
      </div>
    </aside>
  );
};

export default SortPanel;
