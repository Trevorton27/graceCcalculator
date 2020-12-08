let firstNumber = null;
let secondNumber = null;
let operator = null;

let memoryButtons = document.querySelectorAll('.memory-btn');
const numbersButtons = document.querySelectorAll('.number-btn');
let operatorButtons = document.querySelectorAll('.operator');
const displayOutput = document.getElementById('display');

function getFirstNumber(number) {
  firstNumber === null ? (firstNumber = number) : (firstNumber += number);
}

function getSecondNumber(number) {
  secondNumber === null ? (secondNumber = number) : (secondNumber += number);
}

for (let i = 0; i < numbersButtons.length; i++) {
  let number = numbersButtons[i];

  number.addEventListener('click', (e) => {
    e.preventDefault();
    if (operator === null) {
      getFirstNumber(e.target.value);
      console.log('firstNumber: ', e.target.value);
      renderValue(firstNumber);
    } else {
      getSecondNumber(e.target.value);
      renderValue(secondNumber);
    }
  });
}

for (let i = 0; i < operatorButtons.length; i++) {
  let theOperator = operatorButtons[i];
  console.log(theOperator.value);

  theOperator.addEventListener('click', (e) => {
    e.preventDefault();
    operator = e.target.value;
    console.log('operator =', operator);
  });
}

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(`clicked: ${clearButton.textContent}`);
  displayOutput.value = clearButton.textContent;
});

const equalButton = document.getElementById('equal');
equalButton.addEventListener('click', calculate(firstNumber, secondNumber));

function calculate(firstNumber, secondNumber) {
  let num1 = parseFloat(firstNumber);
  let num2 = parseFloat(secondNumber);

  const result = num1 + num2;
  displayOutput.value = result;
}

function renderValue(value) {
  displayOutput.value = value;
  console.log('display value: ', value);
}

memoryButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(`clicked: ${button.textContent}`);
    displayOutput.value = button.textContent;
  });
});

// numbersButtons.forEach((button) => {
//   button.addEventListener('click', (event) => {
//     event.preventDefault();
//     console.log(`clicked: ${button.textContent}`);
//     displayOutput.value = button.textContent;
//   });
// });

// operatorButtons.forEach((button) => {
//   button.addEventListener('click', (event) => {
//     event.preventDefault();
//     console.log(`clicked: ${button.textContent}`);
//     console.log('button value: ', button.value);
//   });
// });

// / TEST CASE
// Description: Adding 1 + 2 = 3
// 1.) Click on the number one button
// EXPECTATION: Show 1 in the display
// ACTUAL: ???  DONE - THE NUMBER 1 APPEARS

// 2.) Click on the plus button
// EXPECTATION: Nothing. (Still showing 1 in the display)
// ACTUAL: ??? DONE - THE + SIGN APPEARS

// 3.) Click on the number two button
// EXPECTATION: Show 2 in the display
// ACTUAL: ??? DONE - THE NUMBER 2 APPEARS

// 4.) Click on the equals button
// EXPECTATION: Show 3 in the display
// ACTUAL: ??? need to display 3 = NO
// ** Need to create a variable number1 and number 2 assign value of the button click, where it will return the value in a number not a string -
// create or assign function that will execute this and add a operator and create an eventListener that upon clicking the equal button it will process the mathematical function and render the result on the screen.
// ===========================================
// // TEST CASE
// // Description: Adding 11 + 22 = 33  (use += to display 111111)

// 1.) Click on the number one button
// EXPECTATION: Show 1 in the display
// ACTUAL: ???

// 2.) Click on the number one button
// EXPECTATION: Show 11 in the display
// ACTUAL: ???

// 3.) Click on the plus button
// EXPECTATION: Nothing. (Still showing 11 in the display)
// ACTUAL: ???

// 4.) Click on the number two button
// EXPECTATION: Show 2 in the display
// ACTUAL: ???

// 5.) Click on the number two button
// EXPECTATION: Show 22 in the display
// ACTUAL: ???

// 6.) Click on the equals button
// EXPECTATION: Show 33 in the display
// ACTUAL: ???
