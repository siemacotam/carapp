import React from "react";
import { typeOfIcon } from "../../utils/typeOfIcon";

export const correctLabel = (data, setFilterOption, filterOption) => {
  const closeMenu = () => {
    document.querySelector(".mapWrapper").classList.toggle("none");
    document.querySelector(".sortPanel").classList.toggle("active");
  };

  const { filterTxt, label } = data;
  return (
    <label
      className={
        filterOption[filterTxt] ? "sortPanel__label bold" : "sortPanel__label"
      }
    >
      <input
        className="sortPanel__input"
        type="checkbox"
        checked={filterOption[filterTxt]}
        onChange={() => {
          closeMenu();

          if (filterTxt === "NONE") {
            if (filterOption[filterTxt] === true) {
              setFilterOption({
                ...filterOption,
                [filterTxt]: false,
                ALL: true,
              });
            } else {
              setFilterOption({
                ...filterOption,
                ALL: false,
                NONE: true,
                AVAILABLE: false,
                TAKEN: false,
                FULL: false,
                HALF: false,
              });
            }
          }

          if (filterTxt === "ALL") {
            if (filterOption[filterTxt] === true) {
              setFilterOption({
                ...filterOption,
                [filterTxt]: false,
                NONE: true,
              });
            } else {
              setFilterOption({
                ...filterOption,
                NONE: false,
                ALL: true,
                AVAILABLE: false,
                TAKEN: false,
                FULL: false,
                HALF: false,
              });
            }
          }

          if (filterTxt === "AVAILABLE") {
            if (filterOption[filterTxt] === false) {
              setFilterOption({
                ...filterOption,
                NONE: false,
                ALL: false,
                AVAILABLE: true,
                TAKEN: false,
              });
            }
          }
          if (filterTxt === "TAKEN") {
            if (filterOption[filterTxt] === false) {
              setFilterOption({
                ...filterOption,
                NONE: false,
                ALL: false,
                AVAILABLE: false,
                TAKEN: true,
              });
            }
          }
          if (filterTxt === "FULL") {
            if (filterOption[filterTxt] === false) {
              setFilterOption({
                ...filterOption,
                NONE: false,
                ALL: false,
                FULL: true,
                HALF: false,
              });
            }
          }
          if (filterTxt === "HALF") {
            if (filterOption[filterTxt] === false) {
              setFilterOption({
                ...filterOption,
                NONE: false,
                ALL: false,
                FULL: false,
                HALF: true,
              });
            }
          }

          const poiArray = ["LIBRARY", "BED", "FOOD", "INFO", "PARKING"];
          poiArray.map((el) => {
            if (filterTxt === el) {
              if (filterOption[filterTxt] === true) {
                setFilterOption({ ...filterOption, [filterTxt]: false });
              } else {
                setFilterOption({ ...filterOption, [filterTxt]: true });
              }
            }
          });
        }}
      />
      {typeOfIcon(filterTxt) ? <img src={typeOfIcon(filterTxt)} style={{height: "20px", width: "20px", marginRight: '5px'}} alt="" /> : null}
      {label}
    </label>
  );
};
