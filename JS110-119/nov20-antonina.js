// The maximum sum subarray problem consists in finding the maximum sum
// of a contiguous subsequence in an array of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) -- should be 6: [4, -1, 2, 1]
// If the array is made up of only negative numbers, return 0 instead.

// The maximum sum subarray problem consists in finding the maximum sum
// of a contiguous subsequence in an array of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) -- should be 6: [4, -1, 2, 1]
// If the array is made up of only negative numbers, return 0 instead.

// Test Cases
console.log(maxSequence([]) === 0); // true
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6); // true
console.log(maxSequence([11]) === 11); // true
console.log(maxSequence([-32]) === 0); // true
console.log(maxSequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) === 12); // true

/*
Write a function that takes an array and return the maximum sum of any consecutive elements of teh array. 

If there are no positive elements, return 0. If there are no elements, also return 0.

Examples:
See test cases above.

Input: array
Output: an integers

Algorithm:
Write a function maxSequence that receives an array as an argument
If the length of the paramter is 0 or it does not include any integers > 0, return 0
For each element of the array starting with the first, slice a substring of the array that includes  the next element. Return the sum of those elements and map it to a new array called sum. Repeat this step for each remaining element in the array. 
  On the outer iterating, move on to the next element of the array, and continue to map these return values to the sums array.
  Return the max value of the sums array.


*/

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // true

function maxSequence(array) {
  // if (array.length === 0){
  //   return 0
  // }
  // if (!array.every(el => el > 0)){
  //   return 0
  // }

  let sum = [];
  let value = 0;

  for (let idx = 0; idx < array.length; idx += 1) {
    for (let j = 0; j < array.length; j += 1) {
      value = array.slice(idx, 1);
      sum += value;
      console.log(sum);
    }
  }
}

// Test Cases
console.log(maxSequence([]) === 0); // true
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6); // true
console.log(maxSequence([11]) === 11); // true
console.log(maxSequence([-32]) === 0); // true
console.log(maxSequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) === 12); // true

// You are given an array of strings and an integer `k`.
// Your task is to return the first longest string consisting of `k` consecutive strings taken from the array.

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

// Test Cases
console.log(
  longestConsec(
    ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"],
    2
  ) === "abigailtheta"
);
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
  longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3) ===
    "ixoyx3452zzzzzzzzzzzz"
); // true
console.log(
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""
); // true
console.log(
  longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""
); // true
console.log(
  longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""
); // true
