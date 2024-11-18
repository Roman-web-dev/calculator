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

function operate (firstNum, secondNum, operator){
    switch (operator){
        case 0:
            add(firstNum, secondNum)
            break;
        case 1:
            substract(firstNum, secondNum)
            break;
        case 2:
            multiply(firstNum, secondNum)
            break;
        case 3:
            divide(firstNum, secondNum)
            break;
    }
}