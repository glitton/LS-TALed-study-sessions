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

// const a = [["foo", "bar"], "baz"];
// const b = a;
// a[1] = a[1].toUpperCase();
// let c = b[0];
// c.push("qux");

// console.log(a); //[ [ 'foo', 'bar', 'qux' ], 'BAZ' ]
// console.log(b); //[ [ 'foo', 'bar', 'qux' ], 'BAZ' ]
// console.log(c); //[ 'foo', 'bar', 'qux' ]

//  What will be logged to the console, and why?

// function arrayModifier(arr) {
//   arr[0] = 100; //[100, 2, 3, 11]
//   // console.log("array", arr);
//   arr = arr.filter((num) => num > 10); //[100, 11]
//   // console.log("filter", arr);
//   arr.push(200); ////[100, 11, 200]
//   // console.log("push", arr);
// }

// const originalArray = [1, 2, 3, 11];
// arrayModifier(originalArray);
// console.log(originalArray); //[100, 2, 3, 11];

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

// const person = {
//   name: "Alice",
//   age: 30,
// };

// function updateAge(obj) {
//   obj = { name: "Alice", age: 31 };
// }

// updateAge(person);

//Variables: person, function updateAge, obj parameter
//Primitives: "Alice", 30 in the person object, "Alice", 31 in the updateAge
// function
// objects: person, function updateAge, obj

// const original = {
//   a: 1,
//   b: { c: 2 },
// };

// const shallowCopy = { ...original };
// shallowCopy.a = 10;
// shallowCopy.b.c = 20;

// console.log(original.a, original.b.c); // 1, 2
// console.log(shallowCopy.a, shallowCopy.b.c); //10,20

/*
The console logs 1, 2 and 10, 20

An variable original is initialized as an object and then a shallowCopy variable
is initialized assigning its value to original using the spread operator which assigns
the key-value pair of the object that was initialized in line 92.   Lines 98 and 99
show the keys a and b.c being reassigned to different values than the original object.

Thus logging original.a and original.b.c logs the values of the original object 1, 2 
while shallowCopy.a and shallowCopy.b.c log values of the reassigned values.  

This code demonstrates that primitive values are immutable and reassigning an object
changes the key-value pair and not the primitive value itself.  

*/

// let status = "offline";
// let mode = status === "offline" || "online";

// if (mode === "online") {
//   console.log("System is online");
// } else {
//   console.log("System is offline");
// }

/*
The output is "System is online"

A status variable is initialized an assigned to the string "online".  Another
variable mode is assigned to status which uses the strict equality operator to 
evaluate whether status is "offline" or "online" using the logical OR operator.  
The variable mode will equal the first truthy value of status.  Since status is
assigned to online, mode will be assigned the string "online".

As a result, the if condition will be true for mode === "online" and logs
"System is online".
*/

greeter();
greetiest();

function greeter() {
  const hello = "Hello";
  const world = "World";

  function greetiest() {
    console.log(world);
  }

  console.log(hello);
}

/*
The console outputs a ReferenceError: greetiest is not defined.  This error
is due to an issue with scope.  The greetiest function is inner scoped as it 
is nested inside of the greeter function, thus it can't be accessed in the outer 
scope which is where the function invocation of greetiest was called.  
The only way to invoke the greetiest function is by moving its invocation 
inside the greeter function's block (between it's curly braces) making it 
in scope.  
*/
