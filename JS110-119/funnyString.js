/*
P: Capitalize each distinct character in a string, however, only its second to last occurrence. If the character
occurs only once in a string, leave it unchanged.
input: string
output: modified string where the character is distinct and occurs more than once
rules:
- capitalize the second to last occurrence of a character that occurs more than once
E:

D: input string, object to track whether string has been seen

A:
Initialize a result array
Initialize a seen object
Transform the input string to an array and reverse it 

Iterate over the array
  - if char is not seen
    - add it as a key to the seen object, assign the value of 1
    - append the char to the result array
    else char is seen again, increment seen[char] by 1 
      if the value of seen is 2  
      - append the char to the result array in uppercase
      else append the char as is

Reverse the array
return result as a string   

*/

function funnyString(str) {
  let result = [];
  let seen = {};

  let strArrayReversed = str.split("").reverse();

  strArrayReversed.forEach((char) => {
    if (!seen[char]) {
      seen[char] = 1;
      result.push(char);
    } else {
      seen[char]++;
      if (seen[char] === 2) {
        result.push(char.toUpperCase());
      } else {
        result.push(char);
      }
    }
  });
  return result.reverse().join("");
}

let p = console.log; // p is an alias for console.log

p(funnyString("") == "");
p(funnyString("aa") == "Aa");
p(funnyString("launchschool") == "LaunCHschOol");
p(funnyString("assessments") == "assEsSments");
