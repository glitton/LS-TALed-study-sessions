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
