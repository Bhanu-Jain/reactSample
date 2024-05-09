const calculatorActions = [
    {
        id: "1",
        buttonId: "add",
        name: "Add"
    },
    {
        id: "2",
        buttonId: "subtract",
        name: "Subtract"
    },
    {
        id: "3",
        buttonId: "multiply",
        name: "Multiply"
    },
    {
        id: "4",
        buttonId: "divide",
        name: "Divide"
    }
]

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

export { calculatorActions, add, subtract, multiply, divide };