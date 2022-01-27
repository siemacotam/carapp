import React from "react";

const SortPanel = ({ data, setFilterOption, filterOption }) => {
  const closeMenu = () => {
    document.querySelector(".mapWrapper").classList.toggle("none");
    document.querySelector(".sortPanel").classList.toggle("active");
  };

  return (
    <aside className="sortPanel">
      <p className="sortPanel__title">Wyszukaj auto</p>
      <div className="sortPanel__modul">
        <label className="sortPanel__label">
          <input
            className="sortPanel__input"
            type="checkbox"
            checked={filterOption === "ALL"}
            onChange={() => {
              closeMenu();
              setFilterOption("ALL");
            }}
          />
          Wszystkie ({data && data.filter((i) => i).length})
        </label>
        <label className="sortPanel__label">
          <input
            className="sortPanel__input"
            type="checkbox"
            checked={filterOption === "NONE"}
            onChange={() => {
              closeMenu();
              setFilterOption("NONE");
            }}
          />
          Schowaj auta
        </label>
      </div>
      <div className="sortPanel__modul">
        <p className="sortPanel__subtitle">Wg dostępności</p>

        <label className="sortPanel__label">
          <input
            className="sortPanel__input"
            type="checkbox"
            checked={filterOption === "AVAILABLE"}
            onChange={() => {
              closeMenu();
              setFilterOption("AVAILABLE");
            }}
          />
          Wolne ({data && data.filter((i) => i.status === "AVAILABLE").length})
        </label>

        <label className="sortPanel__label">
          <input
            className="sortPanel__input"
            type="checkbox"
            checked={filterOption === "TAKEN"}
            onChange={() => {
              closeMenu();
              setFilterOption("TAKEN");
            }}
          />
          Zajęte({data && data.filter((i) => i.status === "TAKEN").length})
        </label>
      </div>
      <div className="sortPanel__modul">
        <p className="sortPanel__subtitle">Wg poziomu baterii</p>

        <label className="sortPanel__label">
          <input
            className="sortPanel__input"
            type="checkbox"
            checked={filterOption === "75"}
            onChange={() => {
              closeMenu();
              setFilterOption("75");
            }}
          />
          Więcej niż 75% (
          {data && data.filter((i) => i.batteryLevelPct > 75).length})
        </label>

        <label className="sortPanel__label">
          <input
            className="sortPanel__input"
            type="checkbox"
            checked={filterOption === "50"}
            onChange={() => {
              closeMenu();
              setFilterOption("50");
            }}
          />
          Więcej niż 50%(
          {data && data.filter((i) => i.batteryLevelPct > 50).length})
        </label>

        <label className="sortPanel__label">
          <input
            className="sortPanel__input"
            type="checkbox"
            checked={filterOption === "25"}
            onChange={() => {
              closeMenu();
              setFilterOption("25");
            }}
          />
          Więcej niż 25%(
          {data && data.filter((i) => i.batteryLevelPct > 25).length})
        </label>
      </div>
      <div className="sortPanel__modul">
        <p className="sortPanel__subtitle">Parkingi</p>
        <label className="sortPanel__label">
          <input
            className="sortPanel__input"
            type="checkbox"
            checked={filterOption === "PARKING"}
            onChange={() => {
              closeMenu();
              setFilterOption("PARKING");
            }}
          />
          Pokaż parkingi
        </label>
      </div>
      <div className="sortPanel__modul">
        <p className="sortPanel__subtitle">Parkingi</p>
        <label className="sortPanel__label">
          <input
            className="sortPanel__input"
            type="checkbox"
            checked={filterOption === "POI"}
            onChange={() => {
              closeMenu();
              setFilterOption("POI");
            }}
          />
          Pokaż POI
        </label>
        <label className="sortPanel__label">
          <input
            className="sortPanel__input"
            type="checkbox"
            checked={filterOption === "LIBRARY"}
            onChange={() => {
              closeMenu();
              setFilterOption("LIBRARY");
            }}
          />
          Pokaż biblioteki
        </label>
        <label className="sortPanel__label">
          <input
            className="sortPanel__input"
            type="checkbox"
            checked={filterOption === "BED"}
            onChange={() => {
              closeMenu();
              setFilterOption("BED");
            }}
          />
          Pokaż hotele
        </label>
        <label className="sortPanel__label">
          <input
            className="sortPanel__input"
            type="checkbox"
            checked={filterOption === "FOOD"}
            onChange={() => {
              closeMenu();
              setFilterOption("FOOD");
            }}
          />
          Pokaż restauracje
        </label>
        <label className="sortPanel__label">
          <input
            className="sortPanel__input"
            type="checkbox"
            checked={filterOption === "INFO"}
            onChange={() => {
              closeMenu();
              setFilterOption("INFO");
            }}
          />
          Pokaż punkty informacyjne
        </label>
      </div>
    </aside>
  );
};

export default SortPanel;
