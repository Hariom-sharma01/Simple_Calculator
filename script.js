// Insert value into the input field
function insertValue(value) {
    const display = document.getElementById('show');
    display.value += value;
  }
  
  // Clear the entire input field
  function clearDisplay() {
    const display = document.getElementById('show');
    display.value = '';
  }
  
  // Delete the last character in the input field
  function deleteLast() {
    const display = document.getElementById('show');
    display.value = display.value.slice(0, -1);
  }
  
  // Evaluate the expression in the input field
  function evaluateExpression() {
    const display = document.getElementById('show');
    try {
      display.value = eval(display.value);
    } catch {
      display.value = 'Error';
    }
  }
  