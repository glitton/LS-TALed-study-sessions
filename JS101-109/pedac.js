// PEDAC
// ===================================
// - Solves two-layer problem
// - Reduces mental load

// P - [Understanding the] Problem
// ===================================
// - Explore the requirements
// - Ask questions, clarify technical terms
// - Summarise problem

// E - Examples / Test Cases
// ===================================
// - Note explicit and implicit rules
// - Note edge cases, gotchas
// - Ensure you are solving the right problem

// D - Data
// ===================================
// - Inputs and outputs
// - Data structures: Arrays, Objects or even Strings

// A - Algorithm
// ===================================
// - Summarise high level strategy
// - Write step-by-step instructions
// - Look for potential sub-processes
// - Language agnostic, keep options open
// - Run test cases through algorithm
// - Algorithm that looks like code - stop and think

// C - Code
// ===================================
// - Translate algorithm into code
// - Test frequently (every 2-3 lines)
// - Hack and slash - stop and think

/*
Sum of Numbers
Implement a function that calculates the sum of numbers inside of a string.
Example: "L12aun3ch Sch3oo45l" should output 63.

You can expect that the string will include only positive numbers.

P
Find numbers that are in a string and add them up.

E
No negative numbers
No fractions or decimals or exponents
Adjacent digits are numbers, e.g. '45' is 45, not 4 and 5
Return 0 if the given string contains no numbers

D
Input: string
Output: number - integer
Intermediate: 
  - array of the numbers from the string
  - array to separate the digits from the letters
  - create an array of digits to determine if a character is a digit
Convert strings to numbers before adding them
Use `Number` to convert a string to a number and then back again to determine if the string is a number
Split with regex

A
Generosa
- Create an array that separates the letters from the numbers ['L', '12', 'a', 'u', 'n', ...], filter for which elements are numbers, sum the numbers.

Aman
- Given a string, find the numbers, add the numbers, return the sum of the numbers.

ALGORITHM
- Convert the string to lower case which makes the letter O not confused with the number 0
- Iterate through each character in the string for the length of the entire string
- Check if the character is a digit, if so, check if the character is the number 0, if so, 
    - check the next character and determine if it is a digit, 
    - if next character is a digit then store 0 in the variable
    - Check if the next character after the digit is a digit, keep going until you reach a letter
    - concatenate the digits and convert to a number
- If adjacent character is not a digit, 
- Assign the previous character that is a digit and convert it to a number.  
- Assign this number to a variable and add subsequent digits to this variable
- Return the variable which should be the sum of all digits

TEST CASES
'B3nn13b07' b3nn13b07
Is b a number?  No.
Is 3 a number, yes, is n a number no, store 3 in variable
Is n a number no, is 1 a number, yes, is 3 a number yes, is b a number no, 
Concatenate 1 and 3 using +, convert to a number
Assign to a variable num
Is b a number, no, is 0 a number, yes


Pablo

declare a function that takes a string
  declare a var array and init to the given string with split called on it. 
  inside of split we pass a regex /[a-z]/gi
  the array will contain empty strings and the numbers we need

  we return our array with the reduce method called on it and that will give us 0 if there are no numbers or give us the sum we are looking for.

  declare a function that takes a string
  declare a var numbers init to '0123456789'
  declare a var array init to string.split('')
  declare var sum init to 0

  start a for loop with the idx being 0 and the condition being idx < array.length
    declare a var number init to ''
    inside the for loop we will take our current idx and check if the the current idx is included in the numbers string
   if yes we concatenate current
      else if number is '' continue
        else add number to sum and reassign number to ''

  return sum

  

*/

const DIGITS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function getNumbers(str) {
  for (let i = 0; i < str.length; i++) {}
}

// Test Cases
// console.log(sumOfNumbers("HI") === 0);
// console.log(sumOfNumbers("HE2LL3O W1OR5LD") === 11);
// console.log(sumOfNumbers("L12aun3ch Sch3ool45") === 63);
// console.log(sumOfNumbers("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog") === 3635);

function sumOfNumbers(str) {
  const numbers = "0123456789";
  let arr = str.split("");
  let sum = 0;
  let number = "";

  for (let idx = 0; idx < arr.length; idx++) {
    let current = arr[idx];
    if (numbers.includes(current)) {
      number += current;
    } else if (number === "") continue;
    else {
      sum += Number(number);
      number = "";
    }
  }
  sum += Number(number);
  console.log(sum);
  return sum;
}
