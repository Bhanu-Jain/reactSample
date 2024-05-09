import React, { useState } from 'react';

function CalculatorInput({ inputId, inputIndex, handleKeyPress,value }) {

    return <input type="number" id={inputId} className="input" placeholder={`Enter ${inputIndex} number`} onChange={(event) => handleKeyPress(event)} name="input1"  value={value} />;
}

export default CalculatorInput;