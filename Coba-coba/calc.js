
const calculatorScreen = document.querySelector('.calculator-screen')
const updateScreen = (number) => {
    calculatorScreen.value = number
}

let prevnumber = ''
let calculationoperator = ''
let currentnumber = '0'
const inputNumber = (number) => {
    if (currentnumber === '0') {
        currentnumber = number
    } else {
        currentnumber += number
    }
}
const numbers = document.querySelectorAll(".number")
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentnumber)
    })
})
const inputoperator = (operator) => {
    if (calculationoperator === '') {
        prevnumber = currentnumber
    }
   
    calculationoperator = operator
    currentnumber = '0'
}
const operators = document.querySelectorAll(".operator")
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputoperator(event.target.value)
        updateScreen('')
    })
})

const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentnumber)
})
const calculate = () => {
    let result = ''
    switch (calculationoperator) {
        case '+':
            result = parseFloat(prevnumber) + parseFloat(currentnumber)
            break
        case '-':
            result = parseFloat(prevnumber) - parseFloat(currentnumber)
            break
        case '*':
            result = parseFloat(prevnumber) * parseFloat(currentnumber)
            break
        case '/':
            result = parseFloat(prevnumber) / parseFloat(currentnumber)
            break
        case '%':
            result = parseFloat(prevnumber) % parseFloat(currentnumber)
            break    
        default:
            return    

    }
    currentnumber = result
    calculationoperator = ''
}
const clearBtn = document.querySelector('.all-clear')
clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentnumber)
})
const clearAll = () => {
    prevnumber = ''
    calculationoperator = ''
    currentnumber = '0'
}
const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentnumber)
})
inputDecimal = (dot) => {
    if(currentnumber.includes('.')) {
        return
    }
    currentnumber += dot
}
const percentage = document.querySelector('.percentage')
percentage.addEventListener('click', () => {
    currentnumber = currentnumber/100
    updateScreen(currentnumber)
})