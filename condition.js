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

console.log(log);

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
