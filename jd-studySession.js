function isMultiple(number, divisor) {
  return number % divisor === 0;
}

function multisum(maxValue) {
  let sum = 0;

  for (let number = 1; number <= maxValue; number += 1) {
    if (isMultiple(number, 3) || isMultiple(number, 5)) {
      sum += number;
    }
  }

  return sum;
}

// console.log(multisum(5));

// console.log(1 % 3);

// The number is evenly divisible by the divisor
// Say the words integer in the arguments,
// Say that the variables are local to the for loop

/* The console will output 8.

When multisum is invoked with the argument 5, the variable maxValue is 5.  A
local variable sum is initialized to 0.  A for loop is executed with the local 
varia


*/

function sortContainer(arr) {
  let evens = [];
  let odds = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evens.push(arr[i]);
    } else {
      odds.push(arr[i]);
    }
  }

  return [evens, odds];
}

// console.log(sortContainer([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // invocation expression

/*
The console will output `[ [ 2, 4, 6, 8, 10 ], [ 1, 3, 5, 7, 9 ] ] `

When the sortContainer function is invoked with an array argument 
of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], the function declares two variables evens and odds
that are initialized to empty arrays, 
  
In the function, a for loop is executed with the condition of using the variable i as an index.  
This loop will stop when this index is less than the array length value.

Within the function, an if else statement is evaluated.  The if statement evaluates
is the array at the index is an even number then it is pushed to the evens array.
If this condition is not met, the else statement is executed where in the element at the
array index is an odd integer thus it is added to the odds array.  

The function then returns an array with evens and odds as sub-arrays.  
*/

let num = [];

function myFunc(num) {
  return (num += 2);
}

myFunc(num);
console.log(num);
// console.log(myFunc(num));
// console.log(typeof myFunc(num));
