import React from "react";
import bed from "../../images/bed.jpg";
import food from "../../images/food.jpg";
import info from "../../images/info.jpg";
import book from "../../images/book.jpg";
import { closeButton } from "./closeButton";

const kindOfImg = (data) => {
  switch (data.status) {
    case "INFO":
      return info;
    case "FOOD":
      return food;
    case "BED":
      return bed;
    case "LIBRARY":
      return book;
  }
};

export const poiDetails = (setIsOpen, data) => {
  const rate = Math.floor(Math.random() * 3 + 2);
  const howManyOpinion = Math.floor(Math.random() * 1000);
  return (
    <div className="popupinfo">
      <div className="popup__wrap">
        {closeButton(setIsOpen)}
        <div className="popup__title-wrap">
          <p className="popup__title">{data && data.name}</p>
          <p className="popup__status">
            Status: <span className="green">Otwarte. Zapraszamy !</span>
          </p>
        </div>
        <div>
          <img className="popup__img" src={kindOfImg(data)} alt="logo" />
        </div>
      </div>
      <div className="popup__info">
        <p className="popup__text bold">Lokalizacja :</p>
        <p className="popup__text">
          {data.location.latitude}, {data.location.longitude}{" "}
        </p>
        <p className="popup__text bold">Godziny otwarcia :</p>
        <p className="popup__text">
          Zapraszamy 8-18 / od poniedziałku do piątku
        </p>
        <p className="popup__text bold">Średnia ocen :</p>
        <p className="popup__text">
          <span className={rate < 3 ? "red" : "green"}>{rate}</span> (
          {howManyOpinion} opini)
        </p>
      </div>
      <button className="btn">Nawiguj</button>
    </div>
  );
};
