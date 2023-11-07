import React, { useState } from "react";
import "./Card.css";
import CardBack from "../../../public/assets/bg-card-back.png";
import CardFront from "../../../public/assets/bg-card-front.png";
import Circle from "../../../public/assets/Group 8.svg";

export default function Card(props) {
  return (
    <div className="card-container">
      <div className="backDiv">
        <img className="BackCardImg" src={CardBack} alt="back card" />
        <p className="backText">{props.pin ? props.pin : "000"}</p>
      </div>

      <div className="frontDiv">
        <img className="FrontCardImg" src={CardFront} alt="front card" />
        <img className="circle" src={Circle} alt="circle image" />
        <p className="cardNumber">
          {props.number ? props.number : "0000 0000 0000 0000"}
        </p>
        <div className="NameDate">
          <p className="cardName">
            {props.holder ? props.holder : "JANE APPLESEED"}
          </p>
          <p className="cardDate">
            <span>{props.month ? props.month : "00"}</span>/
            <span>{props.year ? props.year : "00"}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
