import React, { useState } from "react";
import car from "./images/car.jpg";
import gas from "./images/gasstation.jpg";
import bed from "./images/bed.jpg";
import food from "./images/food.jpg";
import info from "./images/info.jpg";
import book from "./images/book.jpg";

const PopUp = ({ open, setIsOpen, data }) => {
  if (!data) {
    return null;
  }

  const parkingDetails = (
    <div className="popupinfo">
      <div className="popup__wrap">
        <button
          className="popup__button"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          x
        </button>
        <div className="popup__title-wrap">
          <p className="popup__title">{data && data.name}</p>
          <p>
            Status: <span className="green">Otwarta. Zapraszamy !</span>
          </p>
        </div>
        <div>
          <img className="popup__img" src={gas} alt="logo" />
        </div>
      </div>
      <div className="popup__info">
        <p className="popup__text">Godziny otwarcia :</p>
        <p className="popup__text">24H / 7 dni w tygodniu</p>
        <p className="popup__text">Lokalizacja :</p>
        <p className="popup__text">
          {data.location.latitude}, {data.location.longitude}{" "}
        </p>
      </div>
    </div>
  );

  const carDetails = (
    <div className="popupinfo">
      <div className="popup__wrap">
        <button
          className="popup__button"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          x
        </button>
        <div className="popup__title-wrap">
          <p className="popup__title">{data && data.name}</p>
          <p>
            Status:{" "}
            <span
              className={data && data.status === "AVAILABLE" ? "green" : "red"}
            >
              {data && data.status === "AVAILABLE" ? "Dostępny" : "Niedostępny"}
            </span>
          </p>
        </div>
        <div>
          <img className="popup__img" src={car} alt="logo" />
        </div>
      </div>
      <div className="popup__info">
        <p className="popup__text">Lokalizacja :</p>
        <p className="popup__text">
          {data.location.latitude}, {data.location.longitude}{" "}
        </p>
        <p className="popup__text">Status baterii :</p>
        <p className="popup__text">{data && data.batteryLevelPct} %</p>
        <p className="popup__text">tablice </p>
        <p className="popup__text">{data && data.platesNumber}</p>
        <p className="popup__text">zasięg </p>
        <p className="popup__text">{data && data.rangeKm} km</p>
        <p className="popup__text">cena </p>
        <p className="popup__text">
          <span className="green">już od 200 zł</span>
        </p>
      </div>
      <button className="btn">
        {data && data.status === "AVAILABLE"
          ? "Zarezerwuj"
          : "Sprawdź dostępność"}
      </button>
    </div>
  );

  const kindOfImg = () => {
    switch (data.status) {
      case "INFO":
        return info;
        break;
      case "FOOD":
        return food;
        break;
      case "BED":
        return bed;
        break;
      case "LIBRARY":
        return book;
        break;
    }
  };

  const rate = Math.floor(Math.random() * 3 + 2);
  const howManyOpinion = Math.floor(Math.random() * 1000);

  const poiDetails = (
    <div className="popupinfo">
      <div className="popup__wrap">
        <button
          className="popup__button"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          x
        </button>
        <div className="popup__title-wrap">
          <p className="popup__title">{data && data.name}</p>
          <p>
            Status: <span className="green">Otwarta. Zapraszamy !</span>
          </p>
        </div>
        <div>
          <img className="popup__img" src={kindOfImg()} alt="logo" />
        </div>
      </div>
      <div className="popup__info">
        <p className="popup__text">Lokalizacja :</p>
        <p className="popup__text">
          {data.location.latitude}, {data.location.longitude}{" "}
        </p>
        <p className="popup__text">Godziny otwarcia :</p>
        <p className="popup__text">
          Zapraszamy 8-18 / od poniedziałku do piątku
        </p>
        <p className="popup__text">Średnia ocen :</p>
        <p className="popup__text">
          <span className={rate < 3 ? "red" : "green"}>{rate}</span> (
          {howManyOpinion} opini)
        </p>
      </div>
    </div>
  );

  const details = (
    <div>
      <div className="popup" onClick={() => setIsOpen(false)}></div>
      {data.discriminator === "vehicle" && carDetails}
      {data.discriminator === "parking" && parkingDetails}
      {data.discriminator === "poi" && poiDetails}
    </div>
  );

  return open && details;
};

export default PopUp;
