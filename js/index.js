//1.Calculate the sum of all numbers in a user-specified range.
//user in put JavaScript Style

let specifiedRange = prompt("plz enter anumber to Calculate the sum of all numbers");
let range = parseInt(specifiedRange);
let total = 0;
for (i = 0; i <= range; i++) {
  total += i;
}
console.log("the user input value of", range, "is", "", total);

// 2.Query 2 numbers and find only the greatest common factor
//user in put JavaScript Style
let firstNo = prompt("enter 1st number to find  the greatest common factor:");
firstNo = parseInt(firstNo);

let secondNo = prompt("enter 2nd number to find the greatest common factor:");
secondNo = parseInt(secondNo);

for (i = 1; i <= firstNo && i <= secondNo; i++) {
  if (firstNo % i == 0 && secondNo % i == 0) {
    var gcd = i;
  }
}
console.log("The greatest common factor is:", gcd);

//3. Ask the user for a number and display all the divisors of that number
//user in put JavaScript Style
let divisor = prompt(
  "enter a number to display all the divisors of that number"
);
divisor = parseInt(divisor);

for (i = 1; i <= divisor; i++) {
  if (divisor % i == 0) {
    var result = i;
  }
  console.log("all the divisors of that number are ", result);
}
//4.Determine the number of digits in the entered number
// user in put JavaScript Style
let numberOfDigits = prompt(
  "enter a number To Determine the number of digits "
);
let digits = parseInt(numberOfDigits);

var count = 0;
if (digits >= 1) ++count;

while (digits / 10 >= 1) {
  digits /= 10;
  ++count;
}

console.log("this number is ", count, "digits");

// ****************************************************************************//
// the following is the same task but using  function and input value from html//
//****************************************************************************//

// 1.Calculate the sum of all numbers in a user-specified range.
function sumAll(arr) {
  let start = Math.min(arr[0], arr[1]);
  let end = Math.max(arr[0], arr[1]);
  let total = 0;
  for (i = start; i <= end; i++) {
    total += i;
  }
  console.log("default value of [1,5]", total);
}
sumAll([1, 5]);

//2.Query 2 numbers and find only the greatest common factor
function gcd() {
  let x = Number(document.getElementById("a").value);
  let y = Number(document.getElementById("b").value);
  for (i = 1; i <= x && i <= y; i++) {
    if (x % i == 0 && y % i == 0) {
      var g = i;
    }
  }
  console.log(g);
}

//3. Ask the user for a number and display all the divisors of that number.

function divisors() {
  let z = Number(document.getElementById("c").value);
  for (i = 1; i <= z; i++) {
    if (z % i == 0) {
      var str = i;
    }
    console.log(str);
  }
}

//4 Determine the number of digits in the entered number
function digits_count(n) {
  var count = 0;
  if (n >= 1) ++count;

  while (n / 10 >= 1) {
    n /= 10;
    ++count;
  }

  return count;
}

console.log(digits_count(12345));

console.log(digits_count(321));
