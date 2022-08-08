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

window.alert("the numbers add up to " + add(number1, number2)+ ".");
window.alert("the first number minus the second is " + subtract(number1, number2) + ".");
window.alert("multiplied together you get " + multiply(number1, number2) + ".");
window.alert("the divided comes to " + divide(number1, number2)+ ".");
