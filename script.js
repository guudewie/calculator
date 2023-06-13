// select operators
const ADD = document.querySelector('.plus')
const SUBTRACT = document.querySelector(".minus")
const DIVIDE = document.querySelector(".divide")
const DULTIPLY = document.querySelector(".multiply")

console.log(ADD)

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
const DISPLAY = document.getElementById("display")

// event listeners
ZERO.addEventListener("click", () => {DISPLAY.textContent = "0"})
ONE.addEventListener("click", () => populateDisplay("1"))
TWO.addEventListener("click", () => populateDisplay("2"))
THREE.addEventListener("click", () => populateDisplay("3"))
FOUR.addEventListener("click", () => populateDisplay("4"))
FIVE.addEventListener("click", () => populateDisplay("5"))
SIX.addEventListener("click", () => populateDisplay("6"))
SEVEN.addEventListener("click", () => populateDisplay("7"))
EIGHT.addEventListener("click", () => populateDisplay("8"))
NINE.addEventListener("click", () => populateDisplay("9"))


// DISPLAY LOGIC START

function populateDisplay(value) {
    DISPLAY.textContent += value
}

// CALCULATOR OPERATION START
let number1;
let number2;
let operator;
let displayValue;

function operate(number1, number2, operator) {
    
}

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