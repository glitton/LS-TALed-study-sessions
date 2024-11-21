// The maximum sum subarray problem consists in finding the maximum sum
// of a contiguous subsequence in an array of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) -- should be 6: [4, -1, 2, 1]
// If the array is made up of only negative numbers, return 0 instead.

// The maximum sum subarray problem consists in finding the maximum sum
// of a contiguous subsequence in an array of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) -- should be 6: [4, -1, 2, 1]
// If the array is made up of only negative numbers, return 0 instead.

// Test Cases
// console.log(maxSequence([]) === 0); // true
// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6); // true
// console.log(maxSequence([11]) === 11); // true
// console.log(maxSequence([-32]) === 0); // true
// console.log(maxSequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) === 12); // true

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

function maxSequence(array) {
  if (array.length === 0) {
    return 0;
  }
  if (!array.every((el) => el > 0)) {
    return 0;
  }

  let sum = [];
  let value = 0;

  for (let idx = 0; idx < array.length; idx += 1) {
    for (let j = 1; j <= array.length; j += 1) {
      value = array.slice(idx, j);
      sum.push(value);
    }
  }
  console.log(sum);
}

// Test Cases
// console.log(maxSequence([]) === 0); // true
// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6); // true
// console.log(maxSequence([11]) === 11); // true
// console.log(maxSequence([-32]) === 0); // true
// console.log(maxSequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) === 12); // true

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // true
