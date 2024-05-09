import React, { useState } from 'react';
import './CalculatorStyle.css';
import CalculatorInput from './CalculatorInput';
import CalculatorOutput from './CalculatorOutput';
import CalculatorButton from './CalculatorButton';
import { calculatorActions, add, subtract, multiply, divide } from "./CalculatorHelper.jsx";




function DisplayCalculatorActions({ btnText, id, buttonId, handler }) {

    return (
        <CalculatorButton key={id} btnId={buttonId} btnText={btnText} handleClick={handler} />
    );

}

function Calculator() {

    const [finalOutput, setFinalOutput] = useState(0);
    const [input1, setInput1] = useState(0);
    const [input2, setInput2] = useState(0);

    function handleAddition() {

        setFinalOutput(Number(input1) + Number(input2));
    }

    function handleSubtraction() {

        setFinalOutput(input1 - input2);
    }

    function handleMultiplication() {

        setFinalOutput(input1 * input2);
    }

    function handleDivision() {

        setFinalOutput(input1 / input2);
    }

    function handleNothing() {
        setFinalOutput(finalOutput);
    }


    function handlerMapper(action) {

        if (action == "Add") {

            return handleAddition;

        } else if (action == "Subtract") {

            return handleSubtraction;

        } else if (action == "Multiply") {

            return handleMultiplication;

        } else if (action == "Divide") {

            return handleDivision;
        }

        return handleNothing;
    }

    function handleKeyPress(event) {

        if (event.target.id === "input1") {

            setInput1(event.target.value);
        } else {

            setInput2(event.target.value);
        }
    }

    return (
        <>
            <div className="tempMain">
                <div className="temp" />
                <div id="calculator_main" className="calculatorMain">
                    <div id="calculator_sub_1" className="calculatorSub" />
                    <div id="calculator_sub_main" className="calculatorMainSub">
                        <h1 className="heading">Calculator</h1>
                        {/* INPUT 1 */}
                        <CalculatorInput inputId="input1" inputIndex="1st" handleKeyPress={handleKeyPress} value={input1} />

                        {/* INPUT 2 */}
                        <CalculatorInput inputId="input2" inputIndex="2nd" handleKeyPress={handleKeyPress} value={input2} />

                        {/* BUTTONS */}
                        <div id="buttons_holder" className="buttonHolder">
                            {calculatorActions.map((data) =>
                                <DisplayCalculatorActions
                                    btnText={data.name}
                                    id={data.id}
                                    buttonId={data.buttonId}
                                    handler={handlerMapper(data.name)}
                                />)
                            }
                        </div>

                        {/* OUTPUT */}
                        <CalculatorOutput outputId="output1" finalOutput={finalOutput} />
                    </div>
                    <div id="calculator_sub_2" className="calculatorSub" />
                </div>
                <div className="temp" />
            </div>
        </>
    );
}

// let outputElement = document.getElementById("output");
// console.log(outputElement);

// let addButtonElement = document.getElementById("add")
// console.log(addButtonElement);

// .addEventListener('click', () => {

//     console.log("Add clicked");
// });

export default Calculator;