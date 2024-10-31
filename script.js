// script.js

function appendToDisplay(value) {
  const display = document.getElementById('display');

  if (display.innerText === '0') {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  document.getElementById('display').innerText = '0'; // Clear display to 0
}

function calculateResult() {
  const display = document.getElementById('display');

  try {
    // Evaluate the expression in display
    const result = eval(display.innerText);
    display.innerText = result;
  } catch (error) {
    display.innerText = 'Error'; // Handle invalid expressions
  }
}
