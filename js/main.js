import Calc from './Calc.js';

const display = document.getElementById('result-value');
const deleteButton = document.getElementById('btn-delete');
const resetButton = document.getElementById('btn-reset');
const equalsButton = document.getElementById('btn-equals');

const calculator = new Calc(display);

const buttons = {
  one: document.getElementById('btn-1'),
  two: document.getElementById('btn-2'),
  three: document.getElementById('btn-3'),
  four: document.getElementById('btn-4'),
  five: document.getElementById('btn-5'),
  six: document.getElementById('btn-6'),
  seven: document.getElementById('btn-7'),
  eight: document.getElementById('btn-8'),
  nine: document.getElementById('btn-9'),
  zero: document.getElementById('btn-0'),
  decimal: document.getElementById('btn-decimal'),
  delete: document.getElementById('btn-delete'),
  reset: document.getElementById('btn-reset'),
  plus: document.getElementById('btn-plus'),
  minus: document.getElementById('btn-minus'),
  times: document.getElementById('btn-times'),
  divide: document.getElementById('btn-divide'),
  equals: document.getElementById('btn-equals'),
}

const inputButtons = [
  buttons.one,
  buttons.two,
  buttons.three,
  buttons.four,
  buttons.five,
  buttons.six,
  buttons.seven,
  buttons.eight,
  buttons.nine,
  buttons.zero,
  buttons.plus,
  buttons.minus,
  buttons.times,
  buttons.divide,
  buttons.decimal
]

const theme = document.getElementById('theme-css');
const chooser = document.getElementById('theme-range');
function changeTheme() {
  let themeChoice = chooser.value;
  if (themeChoice === "1") {
    theme.href = "css/theme-1.css";
  } else if (themeChoice === "2") {
    theme.href = "css/theme-2.css";
  } else if (themeChoice === "3") {
    theme.href = "css/theme-3.css";
  }
}

chooser.addEventListener('input', changeTheme);

buttons.seven.addEventListener('click', (e) => {
  console.log(e.target.getAttribute('value'));
})

inputButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    calculator.handleInput(e.target.getAttribute('value'));
    console.log(calculator.memory);
  });
});

deleteButton.addEventListener('click', () => {
  calculator.delete();
  console.log(calculator.memory);
})

resetButton.addEventListener('click', () => {
  calculator.reset();
  console.log(calculator.memory);
})

equalsButton.addEventListener('click', () => {
  calculator.evaluate();
  console.log(calculator);

});