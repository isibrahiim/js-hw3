/****************************************************************************************************
                                            HOMEWORK THREE
*****************************************************************************************************/

// /****************************************************************************************************
//        1.Calculate the sum of all numbers in a user-specified range.
//                         user in put JavaScript Style
// *****************************************************************************************************/
let specifiedRange = parseInt( prompt("plz enter anumber to Calculate the sum of all numbers"));
let total = 0;
for (i = 0; i <= specifiedRange; i++) {
  total += i;
}
console.log(`The Sum of All Numbers of ${specifiedRange} is ${total}`);

// /****************************************************************************************************
//     2.Query 2 numbers and find only the greatest common factor user in put JavaScript Style
// *****************************************************************************************************/
let gcd=0;
let firstNo = parseInt(prompt("enter 1st number to find  the greatest common factor:"));
let secondNo = parseInt(prompt("enter 2nd number to find the greatest common factor:"));

for (i = 1; i <= firstNo && i <= secondNo; i++) {
  if (firstNo % i == 0 && secondNo % i == 0) {
    gcd = i;
  }
}
console.log( `The Greatest Common Factor is ${gcd}`);

/****************************************************************************************************
3. Ask the user for a number and display all the divisors of that number user in put JavaScript Style
*****************************************************************************************************/

let divisor = parseInt(
  prompt("enter a number to display all the divisors of that number")
);
let result = 0;
for (i = 1; i <= divisor; i++) {
  if (divisor % i == 0) {
    result = i;
  }
  console.log(`all the divisors of that number are ${result}`);
}

/****************************************************************************************************
                    4.Determine the number of digits in the entered number 
                               user in put JavaScript Style
*****************************************************************************************************/

let numberOfDigits = parseInt(
  prompt("enter a number To Determine the number of digits ")
);
let count = 0;

if (numberOfDigits >= 1) ++count;
while (numberOfDigits / 10 >= 1) {
  numberOfDigits /= 10;
  ++count;
}

console.log("this number is ", count, "digits");

/****************************************************************************************************
5.Ask the user for 10 numbers and count how many positive, negative and zeros he entered. 
In this case, also count how many odd and even ones. Display statistics on the screen. 
Note that one variable (not 10) is sufficient for user input of numbers.
*****************************************************************************************************/
let determine = prompt(
  "enter a number to determine how many positive, negative and zeros are entered "
);
determine = parseInt(determine);
let zeros = 0;
let positivs = 0;
let negatives = 0;
if (determine === 0) {
  zeros++;
} else if (determine < 0) {
  negatives++;
} else if (determine > 0) {
  positivs++;
}

console.log("ZeroCount:" + zeros);
console.log("PositiveCount :" + positivs);
console.log("NegativeCount: " + negatives);

/****************************************************************************************************
6.Loop calculator. Ask the user for 2 numbers and a sign, solve the example, display the result and ask 
          if he wants to solve another example. And so on until the user refuses.
*****************************************************************************************************/


/****************************************************************************************************
7.Ask the user for a number and how many digits to move it. Shift the digits of the number and print
         the result (if you shift the number 123456 by 2 digits, you get 345612).
*****************************************************************************************************/


/****************************************************************************************************
8.Loop the output of the days of the week like this: “Day of the week. Want to see the next day? " 
                          and so on until the user clicks OK.
*****************************************************************************************************/


/****************************************************************************************************
9. Print the multiplication table for all numbers from 2 to 9.Each number must be multiplied by numbers
                                               from 1 to 10.
*****************************************************************************************************/


/****************************************************************************************************
10.Guess the number game. Ask the user to guess a number from 0 to 100 and guess it in the following way: 
each iteration of the loop, divide the range of numbers in half, write the result in N and 
ask the user "Is your number> N, <N or == N?" Decrease the range depending on what the user specified.
 The initial range was from 0 to 100, divided in half and got 50. 
 If the user indicated that his number is> 50, then the range was changed from 51 to 100
 . And so on until the user chooses == N.
*****************************************************************************************************/
