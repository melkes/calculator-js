// business logic
function add(number1, number2) {
  return number1 + number2;
}
function subtract(number1, number2) {
  return number1 - number2;
}
function multiply(number1, number2) {
  return number1 * number2;
}
function divide(number1, number2) {
  return number1 / number2;
}

// user interface logic 
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

window.alert(number1 + " + " + number2 + " = " + add(number1, number2) + ", " + number1 + " - " + number2 + " = " + subtract(number1, number2) + ", " + number1 + " x " + number2 + " = " + multiply(number1, number2) + ", and " + number1 + " ÷ " + number2 + " = " + divide(number1, number2));

// window.alert("The numbers add up to " + add(number1, number2) + "." + " The first number minus the second is " + subtract(number1, number2) + "." + " Multiplied together you get " + multiply(number1, number2) + "." + " And dividing them makes " + divide(number1, number2) + ".");
