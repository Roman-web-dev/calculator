const numbers = document.querySelectorAll(".numbers")
const operations = document.querySelectorAll(".operations")
const display = document.querySelector("#display")

numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
        populateDisplay(e.target.textContent.trim())
    })
})

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
    input += numBtn.toString()

    display.textContent = input
}