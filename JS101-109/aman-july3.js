// The code below logs "Online" Instead of logging "Offline",
// can you explain why? What concept this demonstrates? - Patricia
let status = "Online";

function changeStatus(status) {
  status = "Offline";
  return status;
}

changeStatus();
console.log(status); // "Online"

/*
When the changeStatus function is invoked without an argument on line 10,  
JavaScripts goes into the function's body defined on lines 6 and 57. It declares 
and initializes a local variable status that is different from the global status 
variable declared in line 1.  Because the function invocation doesn't have an argument, 
JavaScript initializes status to undefined.  Further, this local variable status 
shadows or blocks the global status variable declared on line 1.   
In line 6, the function reassigns status from undefined to Offline and then returns it.

On line 11, when logging status to the console, this method has access only to 
the globally scoped status variable declared on line 1, thus the output is 
the string Online.

The concept that this code demonstrates is shadowing and variable scope.  
Inner scoped variables with the same name as the outer scope, shadows or blocks 
the outer scope variable.  Functions and methods such as changeStatus and 
console.log have access to outer or globally scoped variables. 
*/

// Explain why the `printName` function invocation logs the string "Emma"
// while the last line logs "John". - Generosa
let name = "John";

function printName() {
  let name = "Emma";
  console.log(name); // Output: Emma
}

printName();
// console.log(name); // Output: John

/*
The printName function invocation logs the string "Emma" because the name variable
in the function on line 20 shadows the global variable declared on line 17.  As
a result, when the function is invoked in line 24, the function logs the name variable
declared on line 20, which is "Emma"

For the last line, which is a console.log method with the name argument, 
it logs the global variable "John" because of scope.  
This console log method has access to the global variable declared in line 14 
and not the name variable declared within the printName function.  
*/

// What's gonna log at the end of this code snippet and why? - Esteban
let cities = ["Tokyo", "Berlin", "Rio"];

function mutater(list) {
  list = ["Banana", "Pineapple", "Apple"];
  list[2] = "Denver";
}

mutater(cities);
// console.log(cities);

/*
The code outputs the array ["Tokyo", "Berlin", "Rio"].

When the mutator function is invoked with the cities array passed by reference,
The function initializes a list variable which at this time, references the same 
array as the cities global variable declared on line 2.
However, the function reassigns list to another array, ["Banana", "Pineapple", "Apple"],
mutates the 2nd index with the string "Denver" and returns it.

At this point, list and cities point to two different arrays which is why logging
cities to the console results in the cities array ["Tokyo", "Berlin", "Rio"].
*/

// Explain why firstName contains the string "Aman"
// while the lastName contains the string "Shinwari"? - Mohammed
let firstName = "Aman" || "Zakir";
// let lastName = "" || "Shinwari";

let lastName = "" || 0; //returns the last evaluated value
console.log(`My first name is ${firstName} and my last name is ${lastName}.`);
// Logs: "My first name is Aman and my last name is Shinwari."

/*
Short circuiting
*/
