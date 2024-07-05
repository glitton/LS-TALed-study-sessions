// What’s the output of the last 2 lines?
// What concept does the code demonstrate? -- Generosa

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

/*
12 and 5 are logged to the console.

Two functions are declared:
- The function increment which has a num parameter and returns num with 1 added to it.  
- The function double which has a num parameter and returns num multiplied by 2.

A global variable myNumber is declared on line 11 with the value of 5 assigned to it
Another global variable result is declared which takes the result of invoking 
the double function passing it the function increment with myNumber as the argument.  

Logging the value of result outputs the value of invoking double with the value of 
invoking increment passing in the argument of myNumber 5.  The value of result is 12 
which is what is logged to the console.

myNumber logs 5 which is the global valuable.

The concept that the code demonstrates is pass by value for primitives.  Both the increment and double
functions receive a copy of the variable myResult to return their respective values.  
In addition, since myNumber is a primitive, it is immutable thus it can't be changed by
invoking the functions.   
*/
// What is logged on the last 2 lines? Why? -- Will

function updateArray(arr1, arr2) {
  arr1.push(4);
  arr2 = [4, 5, 6];
  arr2.push(7);
}

// const array1 = [1, 2, 3];
// const array2 = [1, 2, 3];

// updateArray(array1, array2);

// console.log(array1);
// console.log(array2);

// What will be logged to the console and why? What concepts are demonstrated? -- Mohamed

const a = 0;
const b = "0";
const c = "";

console.log(a || b); // 0 the number OR returns true when one is true
console.log(b && c); // '' empty string returns true when both are true
console.log(a && b); // 0 the string - number 0 is falsy, string 0 is truthy
// console.log(typeof b);

// functions return a value, expressions evaluate to a value
