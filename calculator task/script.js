let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

let operand1 = '';
let operand2 = '';
let operator = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('number')) {
      if (operator === '') {
        operand1 += button.innerText;
        display.innerText = operand1;
      } else {
        operand2 += button.innerText;
        display.innerText = operand2;
      }
    } else if (button.classList.contains('operator')) {
      if (button.id === 'clear') {
        operand1 = '';
        operand2 = '';
        operator = '';
        display.innerText = '0';
      } else if (button.id === 'equals') {
        let result = calculate(parseFloat(operand1), parseFloat(operand2), operator);
        operand1 = result.toString();
        operand2 = '';
        operator = '';
        display.innerText = result;
      } else {
        operator = button.innerText;
      }
    }
  });
});

function calculate(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return 0;
  }
}
