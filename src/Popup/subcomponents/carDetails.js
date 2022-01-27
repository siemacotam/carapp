import React from 'react';
import car from "../../images/car.jpg";
import { closeButton } from './closeButton';

export const carDetails = (setIsOpen, data) => {
    return <div className="popupinfo">
    <div className="popup__wrap">
      {closeButton(setIsOpen)}
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
}
    