// What is the value logged on the last three lines? What concept is demonstrated?

// const a = [["foo", "bar"], "baz"];
// const b = a; //[["foo", "bar"], "baz"]
// let c = b[0]; //["foo", "bar"]
// c.push("qux"); //["foo", "bar", "qux"];

// console.log(a); //[["foo", "bar", "qux"], "baz"];
// console.log(b); //[["foo", "bar", "qux"], "baz"];
// console.log(c); //["foo", "bar", "qux"];

/*
Logging the variable a outputs [["foo", "bar", "qux"], "baz"]
Logging the variable b outputs [["foo", "bar", "qux"], "baz"]
Logging the variable c outputs ["foo", "bar", "qux"]

The concept that this code demonstrates is variables as pointers.  
Variable a was declared and assigned to an array of two elements.  Variable b was
declared and assigned to a.  At this point a and b both reference the same array.
Variable c is declared and assigned to the value of the 0 index of variable b, 
its value at this point is the array ["foo", "bar"]. 
The variable c is then mutated with the push method, adding the string "qux" 
resulting in c referencing the value ["foo", "bar", "qux"]. 
Since c references b at index 0, variable b is also mutated at index 0 and thus its
value at index 0 is ["foo", "bar", "qux"], the same is true with a since it references
b.  Both a and b will now reference the array [["foo", "bar", "qux"], "baz"], hence
logging a, b, and c results in [["foo", "bar", "qux"], "baz"] twice and ["foo", "bar", "qux"].

*/

// What is the value logged on the last three lines? What concept is demonstrated?

const a = [["foo", "bar"], "baz"];
const b = a;
a[1] = a[1].toUpperCase();
let c = b[0];
c.push("qux");

console.log(a); //[ [ 'foo', 'bar', 'qux' ], 'BAZ' ]
console.log(b); //[ [ 'foo', 'bar', 'qux' ], 'BAZ' ]
console.log(c); //[ 'foo', 'bar', 'qux' ]

//  What will be logged to the console, and why?

function arrayModifier(arr) {
  arr[0] = 100; //[100, 2, 3, 11]
  // console.log("array", arr);
  arr = arr.filter((num) => num > 10); //[100, 11]
  console.log("filter", arr);
  arr.push(200); ////[100, 11, 200]
  console.log("push", arr);
}

const originalArray = [1, 2, 3, 11];
arrayModifier(originalArray);
console.log(originalArray); //[100, 2, 3, 11];

/*
The output is [100, 2, 3, 11].

A constant originalArray is declared and assigned to [1, 2, 3, 11]
When the function arrayModifier is invoked passing by reference originalArray,
JavaScript initializes the arr parameter to reference originalArray.  Then 
the 0 index of arr is re-assigned to 100.  At this point, arr and 
originalArray reference [100, 2, 3, 11].  Then a filter method is applied to arr
returning a different arr.  Now arr is referencing a different array and the push
method that is applied to it doesn't affect originalArray.

This code demonstrates the concept of pass-by-reference where functions that 
mutates is argument, arr in this case, affects the original object, originalArray
in this case.  
*/

// Identify the variables, primitives, and objects in the code

const person = {
  name: "Alice",
  age: 30,
};

function updateAge(obj) {
  obj = { name: "Alice", age: 31 };
}

updateAge(person);

//Variables: person, function updateAge, obj parameter
//Primitives: "Alice", 30 in the person object, "Alice", 31 in the updateAge
// function
// objects: person, function updateAge, obj
