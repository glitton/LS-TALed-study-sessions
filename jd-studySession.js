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

// The number is evenly divisible by the divisor
// Say the words integer in the arguments,
// Say that the variables are local to the for loop

/* The console will output 8.

When multisum is invoked with the argument 5, the variable maxValue is set to 5.  A local variable, sum is assigned to 0.  

The for loop executes with the ff. condition: 
- a local variable number set to 1, 
- the loop continues as long as number is less than or equal to the maxValue of 5
- number is incremented by 1

Within the for loop, an if condition is evaluated using the logical OR which is whether the ff. functions evaluate to a truthy value 
-isMultiple with the arguments number and 3 OR isMultiple with the arguments number and 5.


When the evaluation is truthy, then the number is added to sum which is then returned.

Within the for loop, when number is 3 and when it is 5, the if condition evaluates to truthy thus, 3 and 5 are added to sum returning 8.
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

Within the function, an if else statement is evaluated.  The if statement evaluates if the array at the index is an even number then it is pushed to the evens array.
If this condition is not met, the else statement is executed where in the element at the
array index is an odd integer thus it is added to the odds array.  

The function then returns an array with evens and odds as sub-arrays.  
*/

// let num = [];

// function myFunc(num) {
//   num += 2;
//   return num;
// }

// myFunc(num);
// console.log(num);

/*
The output is an empty array.

A global variable num is declared an assigned to an empty array.

When myFunc is invoked passing the argument num by reference, the function concatenates 2 to num which is an array.  The `+=` operator with an array and number converts the number to a string and concatenates it with the array.  The function then returns the string num, a primitive value with its own memory address which is locally scoped to the function and therefore doesn't affect the global num variable.   As a result, logging num to the console outputs `[]`
*/

// let arr = [];

// function addTwo(num) {
//   num += 2;
//   return num;
// }

// console.log(addTwo(arr));
// console.log(arr);

function myFunc(num) {
  num += 2;
  return num;
}

myFunc(2);
console.log(myFunc(2));
