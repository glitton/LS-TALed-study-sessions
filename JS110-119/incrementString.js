/*
P: Your job is to write a function that increments a string to create a new string.
If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number, the number 1 should be appended to the new string.
input: string
output:string
rules
- if the string ends with a number, increment by 1
if not, add 1 to the end

E:

D: input string, use an array to store characters

A:
EDGE CASES:
- if every element is a string digit,
  - convert to a number,  increment by 1
return string version of the number  

Iterate over the string from the end
  - find the numbers: use a constant '0123456789'
    - if currentElement is not a number, this means we've reached a letter
      - create a slice of the string with numbers
      - get a portion of a string without the numbers
    - convert string version of the Number to a number, increment the number by 1
    - recreate the string, append number portion to the alphabet portion
  if no number
    append 1 to the end of the string  
return the new string  
*/

function incrementString(str) {
  const DIGITS = "0123456789";
  let strArray = str.split("");

  let numbers = "";
  let letters = "";

  if (strArray.every((el) => DIGITS.includes(el))) {
    numbers = Number(strArray.join(""));
    numbers = numbers + 1;
    return String(numbers);
  }

  for (let idx = strArray.length - 1; idx >= 0; idx--) {
    if (!DIGITS.includes(strArray[idx])) {
      numbers = strArray.slice(idx + 1).join("");
      letters = strArray.slice(0, idx + 1).join("");
      break;
    }
  }
  numbers = Number(numbers) + 1;
  return letters + numbers;
}

console.log(incrementString("foobar0")); // "foobar1"
console.log(incrementString("foobar999")); // "foobar1000"
console.log(incrementString("foo")); // "foo1"
console.log(incrementString("foobar1")); // "foobar2"
console.log(incrementString("1")); // "2"
console.log(incrementString("9")); // "10"
console.log(incrementString("fo99obar99")); // "fo99obar100"
console.log(incrementString("10")); // "11"
console.log(incrementString("foobar98")); // "foobar99"
