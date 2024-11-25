
const operations = document.querySelectorAll(".operations")
const display = document.querySelector("#display div")
const numbers = document.querySelectorAll(".numbers")
const modifiers = document.querySelectorAll(".modifiers")

let operator
let firstNum
let input = ""




// Math functions
function add (a, b){        
    return Number(a) + Number(b)
}

function substract (a, b){  
    return a - b
}

function multiply (a, b){   
    return a * b
}

function divide (a, b){     
    return a / b
}



// Main operational function

function operate (a, b, operator){
    switch (operator){
        case "+":
            return add(a, b)
        case "-":
            return substract(a, b)
        case "x":
            return multiply(a, b)
        case "/":
            return divide(a, b)
        default:
            return b
    }
}



function populateDisplay (input){
    display.textContent = input
    display.style.fontSize = "3.5rem";

    // Reduce display text size
    switch(input.length) {
        case 7:
            display.style.fontSize = "3rem";
            break 
        case 8:
            display.style.fontSize = "2.8rem";
            break 
        case 9:
            display.style.fontSize = "2.6rem";
            break 
    }
}

function clearDisplay() {
    input = "0"
    operator = null
    firstNum = null
    populateDisplay(input)
}

numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
        if (input.includes(".") && e.target.textContent === ".") {
            return; // Prevents multiple dots
        }
        if (input === "0") {
            input = "" //Removes 0 as a first digit
        }
        if (input.length < 9) {
            input += e.target.textContent.trim()
            populateDisplay(input)
        }
    })
    
    number.addEventListener("mousedown", (e) => {       // Changes button brightness while clicking
        e.target.style.filter = "brightness(1.2)";
    });

    number.addEventListener("mouseup", (e) => {
        e.target.style.filter = "brightness(1)";
    });
})

operations.forEach((operation) => {
    operation.addEventListener("click", (e) => {
        let operationType = e.target.textContent.trim()      

        if (operationType === "=") {
            let result = operate(Number(firstNum), Number(input), operator)
            populateDisplay(result.toString())
            input = result.toString()
            operator = null
            firstNum = null
        } else {
            operator = operationType
            firstNum = input
            input = ""
        }

        operations.forEach((op) => op.classList.remove("selected"))
        operation.classList.add("selected")
    })
})



modifiers.forEach((button) => {
    
    button.addEventListener("click", (e) => {
        let modifier = e.target.textContent.trim()

        if (modifier === "C") {
            clearDisplay()
            operations.forEach((op) => op.classList.remove("selected"))
        }
    })
    
    button.addEventListener("mousedown", (e) => {       // Changes button brightness while clicking
        e.target.style.filter = "brightness(1.2)";
    });

    button.addEventListener("mouseup", (e) => {
        e.target.style.filter = "brightness(1)";
    });
})

