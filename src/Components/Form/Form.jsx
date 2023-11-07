import React, { useState } from "react";
import "./Form.css";
import ReactInputMask from "react-input-mask";

export default function Form(props) {
  const [holderError, setHolderError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [dataError, setDataError] = useState("");
  const [pinError, setPinError] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    let hasError = false;
    if (!props.holder) {
      setHolderError("Can't be empty");
      hasError = true;
    }

    if (props.number.replaceAll(" ", "").length <= 15) {
      setNumberError("Wrong format");
      hasError = true;
    }

    if (!props.month || !props.year) {
      setDataError("Can’t be blank");
      hasError = true;
    }

    if (!props.pin) {
      setPinError("Can’t be blank");
      hasError = true;
    }

    if (!hasError) {
      props.setConfirm(true);
    }
  };

  return (
    <>
      <form className="formDiv">
        <div className="cardHolderName">
          <label id="card-name" htmlFor="holder">
            Cardholder Name
          </label>
          <input
            className={`card-name-input ${
              holderError == "Can't be empty" ? "numberInputError" : null
            }`}
            type="text"
            placeholder="e.g. Jane Appleseed"
            onChange={(event) => {
              props.setHolder(event.target.value.toUpperCase());
              setHolderError("");
            }}
          />
          <p className="error">{holderError}</p>
        </div>

        <div className="cardHolderNumber">
          <label id="card-number" htmlFor="number">
            Card Number
          </label>
          <ReactInputMask
            mask={"9999 999 9999 99999"}
            maskChar={null}
            className={`card-number-input ${
              numberError == "Wrong format" ? "numberInputError" : null
            }`}
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
            onChange={(event) => {
              props.setNumber(event.target.value);
              setNumberError("");
            }}
          />
          <p className="error">{numberError}</p>
        </div>

        <div className="lastDiv">
          <div className="cardHolderMonth">
            <label id="card-month" htmlFor="month">
              Exp. Date (MM/YY)
            </label>
            <div className="input-fields">
              <ReactInputMask
                mask={"99"}
                maskChar={null}
                className={`card-mm-input ${
                  dataError == "Can’t be blank" ? "numberInputError" : null
                }`}
                type="text"
                placeholder="MM"
                onChange={(event) => {
                  props.setMonth(event.target.value);
                  setDataError("");
                }}
              />
              <p className="errorData">{dataError}</p>
              <ReactInputMask
                mask={"99"}
                maskChar={null}
                className={`card-yy-input ${
                  dataError == "Can’t be blank" ? "numberInputError" : null
                }`}
                type="text"
                placeholder="YY"
                onChange={(event) => {
                  props.setYear(event.target.value);
                  setDataError("");
                }}
              />
            </div>
          </div>

          <div className="cardHolderCvc">
            <label id="cvcLabel" htmlFor="cvc">
              CVC
            </label>
            <ReactInputMask
              mask={"999"}
              maskChar={null}
              className={`cvc-input ${
                pinError == "Can’t be blank" ? "numberInputError" : null
              }`}
              type="text"
              placeholder="e.g. 123"
              onChange={(event) => {
                props.setPin(event.target.value);
                setPinError("");
              }}
            />
            <p className="error">{pinError}</p>
          </div>
        </div>

        <button id="button" type="submit" onClick={handleSubmit}>
          Confirm
        </button>
      </form>
    </>
  );
}
