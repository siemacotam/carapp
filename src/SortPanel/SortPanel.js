import React from "react";
import "./SortPanel.css";

const SortPanel = ({ data, setFilterOption, filterOption }) => {
  const closeMenu = () => {
    document.querySelector(".mapWrapper").classList.toggle("none");
    document.querySelector(".sortPanel").classList.toggle("active");
  };

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
      filterTxt: "75",
      label: `Więcej niż 75% (
        ${data && data.filter((i) => i.batteryLevelPct > 75).length})`,
    },
    {
      filterTxt: "50",
      label: `Więcej niż 50% (
        ${data && data.filter((i) => i.batteryLevelPct > 50).length})`,
    },
    {
      filterTxt: "25",
      label: `Więcej niż 25% (
        ${data && data.filter((i) => i.batteryLevelPct > 25).length})`,
    },
    {
      filterTxt: "PARKING",
      label: `Pokaż stacje`,
    },
    {
      filterTxt: "POI",
      label: `Pokaż poi`,
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

  const correctLabel = (data) => {
    return (
      <label className="sortPanel__label">
        <input
          className="sortPanel__input"
          type="checkbox"
          checked={filterOption === data.filterTxt}
          onChange={() => {
            closeMenu();
            setFilterOption(data.filterTxt);
          }}
        />
        {data.label}
      </label>
    );
  };

  return (
    <aside className="sortPanel">
      <p className="sortPanel__title">Wyszukaj auto</p>
      <div className="sortPanel__modul">
        {correctLabel(filterOptions[0])}
        {correctLabel(filterOptions[1])}
      </div>
      <div className="sortPanel__modul">
        <p className="sortPanel__subtitle">Wg dostępności</p>
        {correctLabel(filterOptions[2])}
        {correctLabel(filterOptions[3])}
      </div>
      <div className="sortPanel__modul">
        <p className="sortPanel__subtitle">Wg poziomu baterii</p>
        {correctLabel(filterOptions[4])}
        {correctLabel(filterOptions[5])}
        {correctLabel(filterOptions[6])}
      </div>
      <div className="sortPanel__modul">
        <p className="sortPanel__subtitle">Stacje benzynowe</p>
        {correctLabel(filterOptions[7])}
      </div>
      <div className="sortPanel__modul">
        <p className="sortPanel__subtitle">Poi</p>
        {correctLabel(filterOptions[8])}
        {correctLabel(filterOptions[9])}
        {correctLabel(filterOptions[10])}
        {correctLabel(filterOptions[11])}
        {correctLabel(filterOptions[12])}
      </div>
    </aside>
  );
};

export default SortPanel;
