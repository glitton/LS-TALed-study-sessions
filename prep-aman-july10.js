let firstName = true || false;
let lastName = false || true;

console.log(firstName, lastName);
// This operation returns true or returns a falsy value
// If we use comparison for operations,
// OR, if it doesn't return a truthy value, it returns the last operand

// Explain why firstName contains the string "Aman" while the lastName contains the string "Shinwari"? - Mohammed
// let firstName = "Aman" || "Zakir";
// let lastName = "" || "Shinwari";
// console.log(`My first name is ${firstName} and my last name is ${lastName}.`);
// // Logs: "My first name is Aman and my last name is Shinwari."

// /*
// Returns the first truthy value first, and short-circuited.  lastName, first value
// is a falsy value, which is why it returned Shinwari.
// */

// let firstName = "Aman" && "Zakir";
// let lastName = "" && "Shinwari";
// console.log(`My first name is ${firstName} and my last name is ${lastName}.`);

/*
&& operator short-circuits 
Truthy value is the technical term

Use true when there is an operation
*/

//TRUTHINESS

let truthiness = "";

if (truthiness) {
  //checks if the var thruthiness contains a thruthy value
  console.log("It's a truthy value!");
} else {
  console.log("It's a falsy value! ");
}
