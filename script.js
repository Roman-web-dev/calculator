const numbers = document.querySelectorAll(".numbers")
const operations = document.querySelectorAll(".operations")
const display = document.querySelector("#display div")
const buttons = document.querySelectorAll(".numbers, .modifiers")


buttons.forEach((button) => {
    button.addEventListener("mousedown", (e) => {       // Changes button brightness while clicking
        e.target.style.filter = "brightness(1.2)";
    });

    button.addEventListener("mouseup", (e) => {
        e.target.style.filter = "brightness(1)";
    });
    
})

//Populates display
buttons.forEach((number) => {
    number.addEventListener("click", (e) => {
        if (input.includes(".") && e.target.textContent === ".") {  // Prevents multiple dots
            return;
        }

        populateDisplay(e.target.textContent.trim())
    
    })
})

// Math functions
function add (a, b){        //case 0
    return a + b
}

function substract (a, b){  //case 1
    return a - b
}

function multiply (a, b){   //case 2
    return a * b
}

function divide (a, b){     //case 3
    return a / b
}



// Main operational function
let operateResult = 0
function operate (firstNum, secondNum, operator){
    switch (operator){
        case 0:
            operateResult = add(firstNum, secondNum)
            display.textContent = operateResult
            break;
        case 1:
            operateResult = substract(firstNum, secondNum)
            display.textContent = operateResult
            break;
        case 2:
            operateResult = multiply(firstNum, secondNum)
            display.textContent = operateResult
            break;
        case 3:
            operateResult = divide(firstNum, secondNum)
            display.textContent = operateResult
            break;
    }
    input = ""
}

let input = ""

function populateDisplay (numBtn){
    display.style.fontSize = "3.5rem";
    if (input === "0"){       // Removes 0 if it's the only digit
        input = ""
    }
    if (display.textContent.length < 9) {
        input += numBtn.toString()
    }
    if (numBtn === "C") {
        input = "0"
    }

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
 

    display.textContent = input
}