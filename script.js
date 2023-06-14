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

// others
const EQUAL = document.querySelector('.button.equal')
const AC = document.querySelector('.AC')
const MINUSTOGGLE = document.querySelector('.toggle')
const HUNDREDTH = document.querySelector('.hundredth')
const DOT = document.querySelector('.dot')


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
EQUAL.addEventListener("click", () => decide("="))

AC.addEventListener("click", () => reset())
MINUSTOGGLE.addEventListener("click", () => toggle())
HUNDREDTH.addEventListener("click", () => hundredth())
DOT.addEventListener("click", () => addDot("."))

// CALCULATOR OPERATION START
let number1 = 0;
let number2 = 0;
let operator = "";
let displayValue;
let result;
let cage;


function updateAC() {
    if (DISPLAY.textContent && result) {
        AC.textContent = "AC"
    } else if (DISPLAY.textContent) {
        AC.textContent = "C"
    } else {
        AC.textContent = "AC"
    }
}

function toggle() {

    if (number1 && number2) {
        number2 *= -1
        DISPLAY.textContent = number2
    } else if (number1 && result) {
        cage = result;
        reset();
        number1 = cage * (-1)
        DISPLAY.textContent = number1
    } else if (number1 && !operator) {
        number1 *= -1
        DISPLAY.textContent = number1
    }
}

function hasDots(num) {
    numStr = num.toString()

    //allow . as first character
    if (numStr == 0) return false

    //check for any dots
    for (char in numStr) {
        if (numStr.charAt(char) == ".") return true
    }
    return false
}

function addDot() {

    // case: first number (to be) entered
    if (result) {
        if (hasDots(number1)) return

        cage = result;
        reset();
        number1 = Number(cage) + "."
        DISPLAY.textContent = number1
    
    // case: second number (to be) entered
    } else if (operator){
        if (hasDots(number2)) return
        
        number2 = Number(number2) + "."
        DISPLAY.textContent = number2

    // case: result exists 
    } else if (!operator && !result){
        if (hasDots(number1)) return
        
        number1 = Number(number1) + "."
        DISPLAY.textContent = number1
    };
};

function hundredth() {

    let onePercent = 0.01;

    if (number1 && number2) {
        number2 *= onePercent
        DISPLAY.textContent = number2
    } else if (number1 && result) {
        cage = result;
        reset();
        number1 = cage * onePercent
        DISPLAY.textContent = number1
    } else if (number1 && !operator) {
        number1 *= onePercent
        DISPLAY.textContent = number1
    }
}

function reset() {

    switch (AC.textContent) {

        case "AC":
            number1 = 0;
            number2 = 0;
            operator = "";
            result = 0;
            DISPLAY.textContent = "";
            SMALLDISPLAY.textContent = "";
            break;

        case "C":
            if (result) {
                number1 = 0;
                number2 = 0;
                operator = "";
                result = 0;
                DISPLAY.textContent = "";
                SMALLDISPLAY.textContent = "";
            } else if (number2) {
                number2 = 0;
                DISPLAY.textContent = "";
            } else if (number1) {
                number1 = 0;
                DISPLAY.textContent = "";
            }

    }

    updateAC()
}

function operate(operator) {

    switch (operator) {
        case "+":
            return add(number1, number2)
            break;

        case "-":
            return sub(number1, number2)
            break;

        case "*":
            return mul(number1, number2)
            break;

        case "/":
            return div(number1, number2)
    };
};

function add(number1, number2) {
    return Number(number1) + Number(number2);
}

function sub(number1, number2) {
    return Number(number1) - Number(number2);
}

function mul(number1, number2) {
    let resultMul = Number(number1) * Number(number2);
    return Math.round(resultMul * 100000) / 100000
}

function div(number1, number2) {
    return Number(number1) / Number(number2);
}


function decide (value) {

    let numericValue = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",]; 
    let operatorValue = ["+", "-", "*", "/"];
    let equalSign = "=";

    if (numericValue.includes(value)) {
       
        if (number1 && !number2 && !operator && result) {
            cage = result;
            reset();
            number1 = Number(cage) + value
            DISPLAY.textContent = number1
        
        // case: second number (to be) entered
        } else {
            DISPLAY.textContent += value
            
            // asign value to number1 if empty and number2 if already assigned
            if (!operator) {number1 += value;
            } else {number2 += value}
        }

    } else if (operatorValue.includes(value)) {

        if (number2 && number1) {
            result = operate(operator)
            operator = value
            DISPLAY.textContent = result
            number1 = result
            number2 = 0;
            SMALLDISPLAY.textContent = `${Number(number1)} ${value}`
            DISPLAY.textContent = ""
        } else if (number1) {
            operator += value
            SMALLDISPLAY.textContent = `${Number(number1)} ${operator}`
            DISPLAY.textContent = ""
        }

    } else if (value === equalSign){

        if (number1 && operator && number2) {
            SMALLDISPLAY.textContent = `${Number(number1)} ${operator} ${Number(number2)} =`
            result = operate(operator)
            DISPLAY.textContent = result
            number1 = result
            number2 = 0;
            operator = "";
        }
    }

    console.log(`******** ${value} ********`)
    console.log("number 1: ", number1)
    console.log("number 2: ", number2)
    console.log("operator: ", operator)
    console.log("result: ", result)
    console.log("display: ", DISPLAY.textContent)

    updateAC()
};