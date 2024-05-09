import React from 'react';
import { add, subtract, multiply, divide } from "./CalculatorHelper.jsx";

function CalculatorButton({ btnId, btnText, handleClick }) {

    return <button id={btnId} className="btn" onClick={handleClick}>{btnText}</button>;
}

export default CalculatorButton;