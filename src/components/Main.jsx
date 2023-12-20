import React, { useState } from "react";
import "./main.css";
const Main = () => {
  const [value, setValue] = useState(null);
  const [isCelsius, setIsCelsius] = useState(null);
  const [result, setResult] = useState("");
  function handleChange(event) {
    setValue(event.target.value);
  }
  function handleClick() {
    if (isCelsius === true) {
      const newValue = (value * 9) / 5 + 32;
      setResult(newValue);
    } else {
      const newValue = (5 / 9) * (value - 32);
      setResult(newValue);
    }
  }
  return (
    <>
      <div className="MainBox">
        <h1 className="heading">Temperature Converter Web-App</h1>
        <div className="displayValue">
          <h1>{result}</h1>
        </div>
        <div className="InputBox">
          <input
            className="inputBox_input"
            type="number"
            name="temperature"
            placeholder="Please Enter the Temperature"
            onChange={handleChange}
          />
        </div>
        <div className="dropDownMenu">
          <div className="dropDownContent">
            <label class="custom-radio">
              <input
                onClick={() => {
                  setIsCelsius(true);
                }}
                type="radio"
                name="temperature"
                value="celsius"
              />
              <span class="radio-label">Celsius</span>
            </label>
            <label class="custom-radio">
              <input
                onClick={() => {
                  setIsCelsius(false);
                }}
                type="radio"
                name="temperature"
                value="fahrenheit"
              />
              <span class="radio-label">Fahrenheit</span>
            </label>
          </div>
        </div>
        <button className="convertButton" type="onSubmit" onClick={handleClick}>
          Convert
        </button>
      </div>
    </>
  );
};
export default Main;
