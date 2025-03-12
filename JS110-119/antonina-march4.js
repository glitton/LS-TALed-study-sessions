/*
// Your job is to write a function that increments a string to create a new string.
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number, the number 1 should be appended to the new string.
/*
input: string
output:string
rules
- if the string ends with a number, increment by 1
if not, add 1 to the end

E:

D: input string, array?

A:
Initialize a result variable, assign to an empty string
EDGE CASES:
if string length is 1 and if it is a number
  - increment the number by 1
  - return the result as a string

Iterate over the string from the end
  - find the numbers
    - use a constant '0123456789' to see if the curr element includes a number
      - create a slice of the string without the number
      - get a portion of a string with the number
      - convert stringNumber to a number, increment the number by 1
    - recreate the string, append number portion to the alphabet portion
  if no number
    append 1 to the end of the string  
return the new string   

*/
// function incrementString(str) {
//   const NUMBERS = "0123456789";
//   let result = "";
//   let numbers = "";
//   let letters = "";

//   if (str.length === 1 && NUMBERS.includes(str)) {
//     numbers = Number(str) + 1;
//     result = String(numbers);
//     return result;
//   }

//   for (let idx = str.length - 1; idx >= 0; idx--) {
//     if (!NUMBERS.includes(str[idx])) {
//       letters = str.slice(0, idx + 1);
//       numbers = str.slice(idx + 1);
//       break;
//     }
//   }
//   numbers = Number(numbers) + 1;
//   result = letters + numbers;
//   return result;
// }

// function incrementString(str) {
//   // let result = "";
//   let letters = "";
//   let numbers = "";
//   const digits = "0123456789";
//   for (let i = str.length - 1; i >= 0; i--) {
//     if (digits.includes(str[i])) numbers += str[i];
//     else {
//       letters += str.slice(0, i + 1);
//       break;
//     }
//   }
//   return letters + (Number(numbers) + 1);
// }

function incrementString(str) {}

console.log(incrementString("foobar0")); // "foobar1"
console.log(incrementString("foobar999")); // "foobar1000"
console.log(incrementString("foo")); // "foo1"
console.log(incrementString("foobar1")); // "foobar2"
console.log(incrementString("1")); // "2"
console.log(incrementString("9")); // "10"
console.log(incrementString("fo99obar99")); // "fo99obar100"
console.log(incrementString("10")); // "11"
console.log(incrementString("foobar98")); // "foobar99"
