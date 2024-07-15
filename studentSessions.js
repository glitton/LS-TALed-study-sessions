// Pass By Value vs Pass By Reference
// Function, Variable Shadowing Concept
// Pseudocode
// Variables as Pointers
// Objects - Mutations (Arrays)

let hello = "Hello, world!";
function myFunc() {
  console.log(hello);
}
// myFunc();

/*
The output to the console is Hello, world! 
A global variable hello is declared with the string "Hello, world!" as its value.
Then a function myFunc is declared without any parameters and it outputs the variable hello to the console.

In line 11, when myFunc is invoked, it doesn't have any parameters, when executing line 9, it looks for the variable hello which is at the global scope declared in line 7.  As a result, the output to the console is Hello, world! 
*/

function replace(str, value) {
  while (true) {
    break;
  }
  str = value; // example 0x123
}
let greet = "Hey!"; // 0x456
let a = replace(greet, "Hello");
console.log(a);
console.log(greet);

/*
The output is undefined and Hey!

A global variable greet is declared and is assigned the string Hey!.  Another global variable a is declared and it is assigned to the return
value of invoking replace passing-by-value the arguments greet, and "Hello".  

Because the replace function doesn't explicitly return a value, logging a results in undefined.  Logging greet logs the global variable greet.  

This code demonstrates that JavaScript passes primitives by value.  When a function receives a primitive, it creates a copy and doesn't modify the original value.   
*/

/*
function modifyArray(array) {
  let val = array.pop(); // 3
  return val;
}
let arr = [1, 2, 3];
let result = modifyArray(arr);
console.log(result); // 3
console.log(arr); // [1, 2]
*/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
// https://www.youtube.com/playlist?list=PLPVUV61a5r7-kC5b0dhZGFDQm2wJDJZsA
function reassignmentArray() {
  arr = [4, 5, 6];
  return arr;
}
let arr = [1, 2, 3];
let result = reassignmentArray(arr);
// console.log(result);
// console.log(arr);
