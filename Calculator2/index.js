//i have to work on the backspace button


//selector Variable
let display = document.querySelector('.display')
const controlButtons = document.querySelector('.controls').children
const allSymbols = ['+', '-', 'X', '÷', '%', 'C', '=','⌫']

// nullvariable
let firstValue = ''
let secondValue = ''
let symbol  = ''
let result = ''
let screenValue = ''


const calculate = () => {
  firstValue = parseFloat(firstValue)
  secondValue = parseFloat(secondValue)

  if (symbol === '+') result = firstValue + secondValue
  if (symbol === '-') result = firstValue - secondValue
  if (symbol === 'X') result = firstValue * secondValue
  if (symbol === '÷') result = firstValue / secondValue
  if (symbol === '%') result = firstValue % secondValue

  display.innerText = result
  firstValue = result
  secondValue = ''
}

//using for of loop
for (let button of controlButtons) {
  button.addEventListener('click', () => {
    const { innerText: btnValue } = button
    const btnValueIsSymbol = allSymbols.includes(btnValue)
    screenValue = display.value
    if (!secondValue && btnValue === '=') return null

    if (btnValue === 'AC') {
      firstValue = secondValue = symbol = ''
      return display.innerText = ''
    }

    // if(btnValue === "⌫") {
    //   display.value = screenValue.substr(0,screenValue.length-1);
    //   return;
    // }

    if (firstValue && btnValueIsSymbol) {
      secondValue && calculate()
      symbol = btnValue
    }
    else if (!symbol) firstValue += btnValue
    else if (symbol) secondValue += btnValue
    if (btnValue !== '=') display.innerText += btnValue
  })
}
