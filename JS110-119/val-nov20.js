//Problem 1:

/*
Alphabet Symmetry
Consider the word "abode".
The letter `a` is in position 1 and `b` is in position 2.
In the alphabet, `a` and `b` are also in positions 1 and 2.

The letters `d` and `e` in "abode" occupy the positions they would occupy in the 
alphabet, which are positions 4 and 5. 

Given an array of words, return an array of the number of letters that occupy their positions 
in the alphabet for each word. For example,

`solve(["abode","ABc","xyzD"])` // [4, 3, 1]

Test cases: 
console.log(solve(["abode","ABc","xyzD"])); // [4,3,1]
console.log(solve(["abide","ABc","xyz"]));  // [4,3,0]
console.log(solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"])); // [6,5,7]
console.log(solve(["encode","abc","xyzD","ABmD"])); // [1, 3, 1, 3]
*/

//Problem 2:

/*
Given an array of numbers, return true if at least 3 sets of 3 consecutive numbers 
are increasing order. 

Test cases: 
console.log(threeIncreasingSets([1, 2, 3, 4, 5, 6, 7])); // true (1,2,3), (2,3,4), (3,4,5)...
console.log(threeIncreasingSets([1, 3, 5, 7, 9, 11, 13])); // true (1,3,5), (3,5,7), (5,7,9)...
console.log(threeIncreasingSets([1, 2, 1, 3, 4, 5, 7, 8])); // true (1,3,4), (3,4,5), (5,7,8)
console.log(threeIncreasingSets([1, 2, 3, 1, 2, 1, 2])); // false
console.log(threeIncreasingSets([10, 9, 8, 7, 6, 5, 4])); // false
*/

//Problem 3:

/*
Given a sentence, find all pairs of words whose first letter matches the last letter of its pair. 

Return an empty array if there’s no such pair. 

Only consider words that have at least length of 2 for the pairings. 

Test cases:
console.log(findMatchingPairs("The cat in the hat")); // [ [ 'The', 'cat' ], [ 'The', 'hat' ], [ 'the', 'hat' ] ]
console.log(findMatchingPairs("A man a plan a canal Panama")); // []
console.log(findMatchingPairs("This sentence has no pairs")); // [ [ 'sentence', 'has' ], [ 'sentence', 'pairs' ] ]
console.log(findMatchingPairs("Apple leads to leap")); // []
*/

//Problem 1:

/*
Alphabet Symmetry
Consider the word "abode".
The letter `a` is in position 1 and `b` is in position 2.
In the alphabet, `a` and `b` are also in positions 1 and 2.

The letters `d` and `e` in "abode" occupy the positions they would occupy in the 
alphabet, which are positions 4 and 5. 

Given an array of words, return an array of the number of letters that occupy their positions 
in the alphabet for each word. For example,

`solve(["abode","ABc","xyzD"])` // [4, 3, 1]

Test cases: 
console.log(solve(["abode","ABc","xyzD"])); // [4,3,1]
console.log(solve(["abide","ABc","xyz"]));  // [4,3,0]
console.log(solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"])); // [6,5,7]
console.log(solve(["encode","abc","xyzD","ABmD"])); // [1, 3, 1, 3]
*/

/*
P:
Write a function that takes an array of words as an argument, and returns another array. The returned array is composed of the numbers that represent the number of letters in each of the words that occupy the positions in the string as they would in the alphabet. For example, in the word `abode`, the letter `a` occupies first place, `b` occupies second place, `d` occupies third place, and `e` occupies fifth place - exactly the positions they occupy in the alphabet. So in the result array, the number corresponding to that word should be 5. Has to be case insensitive

Input: array of strings
output: array of numbers

E: 
see above

M:
make a lookup table object of the alphabet, with each letter a key and each corresponding value that letter's position in the alphabet. 
Then process each string in the argument array, and see how many of the letter's index positions in the string match with the corresponding value of that letter in the lookup object. And add that total number to the result array, then move on to the next string in the argument array. 

D:
array

A:

-declare a function `solve` which defines one parameter, `arr`
 -declare a variable `alphaLookup` and initialise it to an object where each of the keys are the letters of the alphabet, in order, and each of the keys' values is its place in the alphabet. 
- declare a variable `resArr` and initialise it to an empty array
- declare a variable `idx` and initialise it to 0
-WHILE `idx` is less than the length of `arr`:
-declare a variable `currWord` and initialise it to the element of `arr` at `idx`
-declare a variable `matchCount` and iniitalise it to 0
- declare a variable `jdx` and initialise it to 0
- declare a variable `currLett` and initialise it to the character of `currWord` at `jdx`
-WHILE `jdx` is less than the length of `currWord`:
 - IF the index of `currLett` is the same as the value of `currLett` in `alphaLookup` minus one, then increment `matchCount`
-increment `jdx`
- add `matchCount` to `resArr`
-increment `idx`
- return `resArr`

*/
function solve(arr) {
  let alphaLookup = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  let resArr = [];

  for (let idx = 0; idx < arr.length; idx++) {
    let currWord = arr[idx].toLowerCase();

    let matchCount = 0;
    for (let jdx = 0; jdx < currWord.length; jdx++) {
      let currLett = currWord[jdx];
      //console.log(currWord.indexOf(currLett), alphaLookup[currLett] - 1);
      if (jdx === alphaLookup[currLett] - 1) matchCount++;
    }
    resArr.push(matchCount);
  }

  return resArr;
}

console.log(solve(["abode", "ABc", "xyzD"])); // [4,3,1]
console.log(solve(["abide", "ABc", "xyz"])); // [4,3,0]
console.log(solve(["IAMDEFANDJKL", "thedefgh", "xyzDEFghijabc"])); // [6,5,7]
console.log(solve(["encode", "abc", "xyzD", "ABmD"])); // [1, 3, 1, 3]

/*
Given an array of numbers, return true if at least 3 sets of 3 consecutive numbers 
are increasing order. 



Problem
Write a function that receives an array as a parameter and returns true
if there are at least 3 sets of 3 numbers in increasing order

Test cases: 
console.log(threeIncreasingSets([1, 2, 3, 4, 5, 6, 7])); // true (1,2,3), (2,3,4), (3,4,5)...
console.log(threeIncreasingSets([1, 3, 5, 7, 9, 11, 13])); // true (1,3,5), (3,5,7), (5,7,9)...
console.log(threeIncreasingSets([1, 2, 1, 3, 4, 5, 7, 8])); // true (1,3,4), (3,4,5), (5,7,8)
console.log(threeIncreasingSets([1, 2, 3, 1, 2, 1, 2])); // false
console.log(threeIncreasingSets([10, 9, 8, 7, 6, 5, 4])); // false

Algorithm 

Declare and intialize a variable called count to 0
Iterate through the numbers starting with the first element, stopping after the third last element
Check if the next number in the array is greater than the current AND the following number is greater than the previous one
  if they are, increment count by 1
Check if the length of count is equal to 3
  If it is, return true
Repeat with the next index number
If end of the function is reached, return false


CODE
*/

function threeIncreasingSets(array) {
  let count = 0;
  for (let index = 0; index < array.length - 3; index++) {
    if (
      array[index] < array[index + 1] &&
      array[index + 1] < array[index + 2]
    ) {
      count += 1;
      if (count === 3) return true;
    }
  }
  return false;
}

console.log(threeIncreasingSets([1, 2, 3, 4, 5, 6, 7])); // true (1,2,3), (2,3,4), (3,4,5)...
console.log(threeIncreasingSets([1, 3, 5, 7, 9, 11, 13])); // true (1,3,5), (3,5,7), (5,7,9)...
console.log(threeIncreasingSets([1, 2, 1, 3, 4, 5, 7, 8])); // true (1,3,4), (3,4,5), (5,7,8)
console.log(threeIncreasingSets([1, 2, 3, 1, 2, 1, 2])); // false
console.log(threeIncreasingSets([10, 9, 8, 7, 6, 5, 4])); // false
