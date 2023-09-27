/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
  return number1 + number2;
}

function addNumbers() {
  const add1 = Number(document.getElementById("add1").value);
  const add2 = Number(document.getElementById("add2").value);
  document.getElementById("sum").value = add(add1, add2);
}
document.getElementById("addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */

const subtract = function (num1, num2) {
  return num1 - num2;
};

const subtractNumbers = function () {
  const num1 = Number(document.getElementById("subtract1").value);
  const num2 = Number(document.getElementById("subtract2").value);
  document.getElementById("difference").value = subtract(num1, num2);
};

document
  .getElementById("subtractNumbers")
  .addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */

const multiply = (num1, num2) => num1 * num2;

const multiplyNumbers = () => {
  const num1 = Number(document.getElementById("factor1").value);
  const num2 = Number(document.getElementById("factor2").value);
  document.getElementById("product").value = multiply(num1, num2);
};

document
  .getElementById("multiplyNumbers")
  .addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */

const divide = (num1, num2) => num1 / num2;

const divideNumbers = () => {
  const num1 = Number(document.getElementById("dividend").value);
  const num2 = Number(document.getElementById("divisor").value);
  document.getElementById("quotient").value = divide(num1, num2);
};

document
  .getElementById("divideNumbers")
  .addEventListener("click", divideNumbers);

/* Decision Structure */
const currentDate = new Date();
let currentYear;
currentYear = currentDate.getFullYear();
console.log(currentYear);
document.getElementById("year").value = currentYear;

/* ARRAY METHODS - Functional Programming */
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
/* Output Source Array */
document.getElementById("array").innerHTML = numbersArray;
/* Output Odds Only Array */
document.getElementById("odds").innerHTML = numbersArray.filter(
  (n) => n % 2 == 1
);
/* Output Evens Only Array */
document.getElementById("evens").innerHTML = numbersArray.filter(
  (n) => n % 2 == 0
);
/* Output Sum of Org. Array */
document.getElementById("sumOfArray").innerHTML = numbersArray.reduce(
  (acc, num) => acc + num,
  0
);

/* Output Multiplied by 2 Array */
document.getElementById("multiplied").innerHTML = numbersArray.map(
  (n) => n * 2
);
/* Output Sum of Multiplied by 2 Array */
document.getElementById("sumOfMultiplied").innerHTML = numbersArray
  .map((n) => n * 2)
  .reduce((acc, num) => acc + num, 0);
