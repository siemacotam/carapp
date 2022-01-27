import React from 'react';
import gas from "../../images/gasstation.jpg";
import { closeButton } from './closeButton';

export const parkingDetails = (setIsOpen, data) => { 
    return <div className="popupinfo">
<div className="popup__wrap">
  {closeButton(setIsOpen)}
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
</div>}
