// Will the code run without errors? Why or why not?

let a = 10;

function outer() {
  let b = 20;

  function inner() {
    a = 30;
    let c = 40;
    console.log(a, b, c);
  }

  console.log(a, b);
  return inner;
}

let test = outer(); // this is assigned to the return value of the outer function
test();

// let a = 10;

// function outer() {
//   b = 20;

//   function inner() {
//     a = 30;
//     let c = 40;
//     console.log(a, b, c);
//   }

//   console.log(a, b);
//   return inner;
// }

// outer();

// console.log(b);
//once outer() executes, the variable b becomes available in the global scope
// What’s the output of the last 2 lines? What concept does the code demonstrate?

function increment(num) {
  return num + 1;
}

function double(num) {
  return num * 2;
}

let myNumber = 5;
let result = double(increment(myNumber));

// console.log(result);
// console.log(myNumber);

// What the does the last line log? Explain how you arrived at your answer. -- Generosa
let conditionA = false;
let conditionB = true;
let log = [];

function checkConditionA() {
  log.push("Condition A checked");
  return conditionA;
}

function checkConditionB() {
  log.push("Condition B checked");
  return conditionB;
}

if (checkConditionA() || (checkConditionB() && !checkConditionA())) {
  log.push("Inside if block");
} else {
  log.push("Inside else block");
}

// console.log(log);

/*
The last line logs [
  'Condition A checked',
  'Condition B checked',
  'Condition A checked',
  'Inside if block'
]

Three variables are declared, conditionA which is assigned to false,  conditionB
which is assigned to true, and log which is assigned to an empty array.  

The if/else statement uses a logical OR statement to evaluate the return value of 
invoking checkConditionA and the return values of invoking checkConditionB() 
with a logical AND with NOT checkConditionA().

Invoking checkConditionA results in adding the string "Condition A checked" to the 
log array and its return value is false thus the OR operator continues checking
the right-hand sub-expression.  This sub-expression evaluates the return
values of invoking checkConditionB() and NOT checkConditionA which both return true.
The invocations add the strings "Condition B checked" and "Condition A checked" to the log
array.  At this time, the log array contains the elements

 'Condition A checked',
  'Condition B checked',
  'Condition A checked',

  The overall if statements is truthy thus it proceeds to pushing the string 'Inside if block'
  to the log array.  

Logging the log array results in the output of [
  'Condition A checked',
  'Condition B checked',
  'Condition A checked',
  'Inside if block'
]

Evaluating an expression, invoking a function and using the return value.  


*/
