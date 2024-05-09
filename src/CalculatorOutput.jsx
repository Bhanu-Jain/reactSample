import React from 'react';

function CalculatorOutput({ finalOutput, outputId }) {

    return <input type="number" id={outputId} className="output" placeholder = {finalOutput} disabled />;
}

export default CalculatorOutput;