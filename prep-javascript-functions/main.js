function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return 60 * hours;
}
var minutes = convertHoursToMinutes(4);
console.log('convertHoursToMinutes', minutes);

function getGreeting(name) {
  return 'Hello ' + name;
}
var greeting = getGreeting('World');
console.log(greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var sum2 = addAndMultiplyBy5(10, 5);
console.log('output', sum2);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var sum3 = multiplyAndDivideBy5(35, 10);
console.log('output', sum3);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var sum4 = subtractTwoNumbers(22, 7);
console.log('output', sum4);

function getCircleCircumference(radius) {
  return 2 * 3.14159265359 * radius;
}
var sum5 = getCircleCircumference(5);
console.log('output', sum5);

function getFullName(firstname, lastname) {
  return firstname + ' ' + lastname;
}
var fullName = getFullName('Juan', 'Ramirez');
console.log('Full name is', fullName);

function cube(number) {
  return number * number * number;
}
var sum6 = cube(5);
console.log('output', sum6);
