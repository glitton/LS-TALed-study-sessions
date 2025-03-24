/*
P: You're given an array of integers. You must return the number of 'arithmetic progressions' of size 3 that are possible from that list.

In each progression, the differences between the elements must be the same.

Example:
[1, 2, 3, 5, 7, 9] ==> 5
The above has 5 progressions, seen below:
[1, 2, 3], [1, 3, 5], [1, 5, 9], [3, 5, 7], and [5, 7, 9]

All array elements will be unique and the array will be sorted.

input: array
output: integer representing the number of progressions
rules:
- each progression must contain three elements
- the diff of the elements in each progression are the same
- array elements are unique and sorted

E: [0, 5, 8, 9, 11, 13, 14, 16, 17, 19]
[0, 8, 16], 
[5, 8, 11], [5, 9, 13], [5, 11, 17]
[8, 11, 14], 
[9, 11, 13], [9, 13, 17]
[11, 14, 17], 
[13, 16, 19]

D: array and integer

A:
Initialize a progressions empty array
Iterate over the input array using a nested loop 
  - assign difference to 0
  - check the difference between currNum, secondNum, assign to difference
  - assign possibleThirdNum to secondNum + difference
  - check the array for possibleThirdNum
    if it exists, append currNum, secondNum and possibleThirdNum as an array to progressions
return progressions.length

[1, 2, 3, 5, 7, 9]
progressions = [] 
diff = 0
diff = Math.abs(1 - 2) = 1
currNum = idx (1), nextNum = idx + 1 (2)
possibleThirdNum = 2 + 1, 3
Is there a 3, yes?  
append [1, 2, 3]
currNum = 1, nextNum = 3
diff = 2, possibleThirdNum = 3 + 2 = 5
append [1, 3, 5]
currNum = 1, nextNum = 5, diff = 4, possibleThirdNum = 5 + 4 = 9
append [1, 5, 9]
currNum = 1, nextNum = 7, diff = 7, possibleThirdNum = 7 + 7 = 14
no 14, go to next idx
...

*/

function progressions(arr) {
  let progressionsArray = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let difference = 0;
      let currNum = arr[i];
      let secondNum = arr[j];
      difference = Math.abs(currNum - secondNum);
      let possibleThirdNum = secondNum + difference;

      if (arr.includes(possibleThirdNum)) {
        progressionsArray.push([currNum, secondNum, possibleThirdNum]);
      }
    }
  }
  return progressionsArray.length;
}

// Test Cases
console.log(progressions([1, 2, 3, 5, 7, 9])); // 5
console.log(progressions([1, 2, 3, 4, 5])); // 4
console.log(progressions([0, 5, 8, 9, 11, 13, 14, 16, 17, 19])); // 10

/*
You are given an array of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

problem/rules:
- take an array of strings and an integer, return the first longest string that is made of the integer amount of consecutive strings.
- if array is empty return an empty string 
- if integer is 0 or less than zero return an empty string
- if integer is greater than the length of the array, return an empty string

examples:
- (["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)
-> "abigailtheta"

integer is 2 and the longest two consecutive strings we can come up with in this examples are
"abigail" + "theta" -> "abigailtheta"

input:
- array: an array of words/strings
- number: an integer that determines the number of consecutive strings we can concatenate to make the longest string 

output:
- string 

ds:
- 

algo: 
- initialize `result` to an empty string
- if array is empty return `result` 
- if integer is 0 or less than zero return `result`
- if integer is greater than the length of the array, return `result`

- loop through the input array: 
  - initialize `concat` a copy of the array from the current index to the current index plus integer
  - convert the array back to a string
  - if the length of `concat` is greater than the length of result
    - reassing `result` to `concat`

- return `result`
*/

longestConsec(
  ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"],
  2
);
// "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

// Test Cases

console.log(
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) ===
    "abigailtheta"
); // true

console.log(
  longestConsec(
    [
      "ejjjjmmtthh",
      "zxxuueeg",
      "aanlljrrrxx",
      "dqqqaaabbb",
      "oocccffuucccjjjkkkjyyyeehh",
    ],
    1
  ) === "oocccffuucccjjjkkkjyyyeehh"
); // true

console.log(longestConsec([], 3) === ""); // true

console.log(
  longestConsec(
    [
      "itvayloxrp",
      "wkppqsztdkmvcuwvereiupccauycnjutlv",
      "vweqilsfytihvrzlaodfixoyxvyuyvgpck",
    ],
    2
  ) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"
); // true

console.log(
  longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2) ===
    "wlwsasphmxxowiaxujylentrklctozmymu"
); // true

console.log(
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""
); // true

console.log(
  longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3) ===
    "ixoyx3452zzzzzzzzzzzz"
); // true

console.log(
  longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""
); // true

console.log(
  longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""
); // true

let exp = (num1) => (num2) => num1 ** num2;
console.log(exp(3));
