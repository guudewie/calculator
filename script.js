// select operators
const ADD = document.querySelector('.plus')
const SUBTRACT = document.querySelector(".minus")
const DIVIDE = document.querySelector(".divide")
const MULTIPLY = document.querySelector(".multiply")

// select numbers
const ZERO = document.querySelector('.zero.button')
const ONE = document.querySelector(".one.button")
const TWO = document.querySelector(".two.button")
const THREE = document.querySelector(".three.button")
const FOUR = document.querySelector(".four.button")
const FIVE = document.querySelector(".five.button")
const SIX = document.querySelector(".six.button")
const SEVEN = document.querySelector(".seven.button")
const EIGHT = document.querySelector(".eight.button")
const NINE = document.querySelector(".nine.button")

// select other buttons/elements
const DISPLAY = document.getElementById("big-display")
const SMALLDISPLAY = document.getElementById("small-display")

// event listeners
ZERO.addEventListener("click", () => decide("0"))
ONE.addEventListener("click", () => decide("1"))
TWO.addEventListener("click", () => decide("2"))
THREE.addEventListener("click", () => decide("3"))
FOUR.addEventListener("click", () => decide("4"))
FIVE.addEventListener("click", () => decide("5"))
SIX.addEventListener("click", () => decide("6"))
SEVEN.addEventListener("click", () => decide("7"))
EIGHT.addEventListener("click", () => decide("8"))
NINE.addEventListener("click", () => decide("9"))

ADD.addEventListener("click", () => decide("+"))
SUBTRACT.addEventListener("click", () => decide("-"))
DIVIDE.addEventListener("click", () => decide("/"))
MULTIPLY.addEventListener("click", () => decide("*"))



// DISPLAY LOGIC START

function appendDisplay(value) {
    DISPLAY.textContent += value
}

// CALCULATOR OPERATION START
let number1 = 0;
let number2 = 0;
let operator = "";
let displayValue;

function operate() {

    switch (operator) {
        case "+":
            add(number1, number2)
            break;

        case "-":
            sub(number1, number2)
            break;

        case "*":
            mul(number1, number2)
            break;

        case "/":
            div(number1, number2)
    };
};

function add(number1, number2) {
    return number1 + number2
}

function sub(number1, number2) {
    return number1 - number2
}

function mul(number1, number2) {
    return number1 * number2
}

function div(number1, number2) {
    return number1 / number2
}


function decide (value) {

    let numericValue = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    let operatorValue = ["+", "-", "*", "/"];

    if (numericValue.includes(value)) {
       
        appendDisplay(value)
            
        // check whether this is the first number to be input
        if (!operator) {number1 += value;
        } else {number2 += value}

    } else if (operatorValue.includes(value)) {

        if (number1) {operator += value
        } else if (number2) {operate()}

    };

    console.log("number 1: ", number1)
    console.log("number 2: ", number2)
    console.log("operator: ", operator)
};




/*

PSEUDOCODE

if (number input AND
    operator)

then safe number (number1) and operator (operator) and operate ()

operate()

    if (next input === number)
        append input to number2
    
    else if (next input === operator || equal)
        call math function(n1, n2)
        store result
        display result

    else if (next input === AC || plusminus || %)
        clear all
        toggle plus minus current number
        take 10th of number

    return result


*/