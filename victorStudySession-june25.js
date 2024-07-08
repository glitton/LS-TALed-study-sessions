// What’s the output of the last 2 lines?
// What concept does the code demonstrate? -- Generosa

function increment(num) {
  return num + 1;
}

function double(num) {
  return num * 2;
}

let myNumber = 5;
// let result = double(increment(myNumber));

// console.log(result);
// console.log(myNumber);

/*
12 and 5 are logged to the console.

Two functions are declared:
- The function increment which has a num parameter and returns num with 1 added to it.  
- The function double which has a num parameter and returns num multiplied by 2.

A global variable myNumber is declared on line 11 with the value of 5.
Another global variable result is declared which is assigned to the return 
value from invoking the double function.  Double is invoked with the argument 
of increment having myNumber with the value of 5 as its argument.  

Logging result outputs 12 and logging myNumber outputs 5.  

The concept that the code demonstrates is pass by value for primitives.  
When invoked, both the increment and double functions receive a copy of the 
variable myNumber to return their respective values.  Since myNumber is a 
primitive and thus immutable, any mutations made within the functions doesn't 
affect the original variable, myNumber. As a result logging myNumber outputs 5.

*/
// What is logged on the last 2 lines? Why? -- Will

function updateArray(arr1, arr2) {
  arr1.push(4);
  arr2 = [4, 5, 6];
  arr2.push(7);
}

const array1 = [1, 2, 3];
const array2 = [1, 2, 3];

updateArray(array1, array2);

// console.log(array1);
// console.log(array2);

/*
The output are arrays [ 1, 2, 3, 4 ] and [ 1, 2, 3 ]

When the updateArray function is invoked passing by reference array1 and array2 
as arguments, JavaScript initializes arr1 and arr2 as variables and they reference
array1 and array2 respectively.

The function mutates arr1 using the push method, adding 4.  This causes both
arr1 and array1 to be mutated.  At this point, both variables reference 
the array [ 1, 2, 3, 4 ].

arr2 gets reassigned a new array [4, 5, 6], and it is then mutated via the push
method, adding in 7.  At this point, arr2 and array2 are referencing two different
arrays.  

Logging array1 results in [ 1, 2, 3, 4 ] due to the mutation in the function.
Logging array2 however, results in [1, 2, 3] as the mutation to arr2 didn't affect
array2 as arr2 was reassigned to a new array.  


*/

// What will be logged to the console and why? What concepts are demonstrated? -- Mohamed

// const a = 0;
// const b = "0";
// const c = "";

// console.log(a || b); // 0 the number OR returns true when one is true
// console.log(b && c); // '' empty string returns true when both are true
// console.log(a && b); // 0 the string - number 0 is falsy, string 0 is truthy
// console.log(typeof b);

// functions return a value, expressions evaluate to a value

// console.log(a || b);
// console.log(b && c);
// console.log(a && b);
// console.log(typeof b);

// const a = 0;
// const b = 5;

// const result = a && b;

// console.log(result); //0

const a = null;
const b = "Hello";

const result = a || b; //Hello
// console.log(result);

const userAge = undefined;
const defaultAge = 30;

const age = userAge || defaultAge;
// console.log(age); //30

const isAdmin = true;

isAdmin && console.log("Access granted"); //Access granted

const isOnline = false;
const goOnline = () => console.log("Going online...");
const stayOffline = () => console.log("Staying offline...");

const action = (isOnline && goOnline) || stayOffline();

//Staying offline ...
