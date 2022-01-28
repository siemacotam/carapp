import React from "react";
import "./SortPanel.css";
import { correctLabel } from "./utils/correctLabel";

const SortPanel = ({ data, setFilterOption, filterOption }) => {

  const filterOptions = [
    {
      filterTxt: "ALL",
      label: `Wszystkie (${data && data.filter((i) => i).length})`,
    },
    {
      filterTxt: "NONE",
      label: `Schowaj pojazdy`,
    },
    {
      filterTxt: "AVAILABLE",
      label: `Wolne (${
        data && data.filter((i) => i.status === "AVAILABLE").length
      })`,
    },
    {
      filterTxt: "TAKEN",
      label: `Zajęte(${
        data && data.filter((i) => i.status === "TAKEN").length
      })`,
    },
    {
      filterTxt: "FULL",
      label: `Więcej niż 75% (
        ${data && data.filter((i) => i.batteryLevelPct > 75).length})`,
    },
    {
      filterTxt: "HALF",
      label: `Więcej niż 50% (
        ${data && data.filter((i) => i.batteryLevelPct > 50).length})`,
    },
    {
      filterTxt: "PARKING",
      label: `Pokaż parkingi`,
    },
    {
      filterTxt: "LIBRARY",
      label: `Pokaż biblioteki`,
    },
    {
      filterTxt: "BED",
      label: `Pokaż hotele`,
    },
    {
      filterTxt: "FOOD",
      label: `Pokaż restauracje`,
    },
    {
      filterTxt: "INFO",
      label: `Pokaż punkty informacyjne`,
    },
  ];



  return (
    <aside className="sortPanel">
      <p className="sortPanel__title">Wyszukaj auto</p>
      <div className="sortPanel__panelwrap">
        <div className="sortPanel__modul">
          {correctLabel(filterOptions[0],setFilterOption, filterOption)}
          {correctLabel(filterOptions[1],setFilterOption, filterOption)}
        </div>
        <div className="sortPanel__modul">
          <p className="sortPanel__subtitle">Wg dostępności</p>
          {correctLabel(filterOptions[2],setFilterOption, filterOption)}
          {correctLabel(filterOptions[3],setFilterOption, filterOption)}
        </div>
        <div className="sortPanel__modul">
          <p className="sortPanel__subtitle">Wg poziomu baterii</p>
          {correctLabel(filterOptions[4],setFilterOption, filterOption)}
          {correctLabel(filterOptions[5],setFilterOption, filterOption)}
        </div>
      </div>
      <div className="sortPanel__panelwrap">
        <div className="sortPanel__modul">
          <p className="sortPanel__subtitle">Parkingi</p>
          {correctLabel(filterOptions[6],setFilterOption, filterOption)}
        </div>
        <div className="sortPanel__modul">
          <p className="sortPanel__subtitle">Poi</p>
          {correctLabel(filterOptions[7],setFilterOption, filterOption)}
          {correctLabel(filterOptions[8],setFilterOption, filterOption)}
          {correctLabel(filterOptions[9],setFilterOption, filterOption)}
          {correctLabel(filterOptions[10],setFilterOption, filterOption)}
        </div>
      </div>
    </aside>
  );
};

export default SortPanel;
