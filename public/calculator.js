let display = document.getElementById('display');

function addToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function clearLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    if (e instanceof SyntaxError) {
      alert('Invalid expression');
      clearDisplay();
    } else {
      throw e;
    }
  }
}
