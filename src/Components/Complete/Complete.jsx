import React, { useState } from "react";
import "./Complete.css";
import Icon from "../../../public/assets/icon-complete.svg";

export default function Complete() {
  return (
    <div className="thankYou">
      <img className="iconComplete" src={Icon} alt="icon complete" />
      <h1 className="thankYouText">THANK YOU!</h1>
      <p className="thankYouParagraph">We’ve added your card details</p>
      <button
        className="continue"
        onClick={() => {
          location.reload();
        }}
      >
        Continue
      </button>
    </div>
  );
}
