import React from "react";
import parking from "../../images/parking.jpg";
import { closeButton } from "./closeButton";

export const parkingDetails = (setIsOpen, data) => {
  const numberOfPlaces = Math.floor(Math.random() * 200 + 50);
  return (
    <div className="popupinfo">
      <div className="popup__wrap">
        {closeButton(setIsOpen)}
        <div className="popup__title-wrap">
          <p className="popup__title">{data && data.name}</p>
          <p className="popup__status">
            Status: <span className="green">Otwarty. Zapraszamy !</span>
          </p>
        </div>
        <div>
          <img className="popup__img" src={parking} alt="logo" />
        </div>
      </div>
      <div className="popup__info">
        <p className="popup__text">Godziny otwarcia :</p>
        <p className="popup__text">24H / 7 dni w tygodniu</p>
        <p className="popup__text">Lokalizacja :</p>
        <p className="popup__text">
          {data.location.latitude}, {data.location.longitude}{" "}
        </p>
        <p className="popup__text">Liczba miejsc parkingowych :</p>
        <p className="popup__text">{numberOfPlaces}</p>
      </div>
      <button className="btn">Nawiguj</button>
    </div>
  );
};
