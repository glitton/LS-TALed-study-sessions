/*
Difference of Two
P: The objective is to return all pairs of numbers from a given array of numbers that have a difference of 2.
The result array should be sorted in ascending order of values.
Assume there are no duplicate numbers in the array.
The order of the numbers in the input array should not matter.
input: array of numbers;
output: 
- nested array of number pairs which have a difference of two, sort the numbers
- sort the pairs in ascending order
- Rules:
  - no duplicate numbers 
  - input array numbers are not ordered
E:
D: Empty array to store the final result
A:
- Initialize a pairNums array 
- Sort the array in ascending order
- Iterate over the input array
  - compare the current element with the next element
  - Check if the difference between current and next is equal to 2
    - If yes, push the pair as an array to the pairNums array.  
      The next value will have a difference greater than 2 so, set current to the next element index 1
    - If no, check the difference between the current and next + i (next index) 
    - If yes, push the pair as an array to the pairNums array
      The next value will have a difference greater than 2 so, set current to the next element index 1
  - Go to the next index, set this to current  
    - Repeat until you compare the current with the last element
  - return the pairNums array  

*/

function differenceOfTwo(array) {
  let pairNums = [];
  let sortedArray = array.slice().sort((a, b) => a - b);
  for (let idx = 0; idx < sortedArray.length - 1; idx += 1) {
    for (let j = idx + 1; j < sortedArray.length; j++) {
      if (sortedArray[j] - sortedArray[idx] === 2) {
        pairNums.push([sortedArray[idx], sortedArray[j]]);
      }
    }
  }
  return pairNums;
}

// Test cases
console.log(differenceOfTwo([1, 2, 3, 4]));
// [[1, 3], [2, 4]]
console.log(differenceOfTwo([4, 1, 2, 3]));
// // [[1, 3], [2, 4]]
console.log(differenceOfTwo([1, 23, 3, 4, 7]));
// //  [[1, 3]]
console.log(differenceOfTwo([4, 3, 1, 5, 6]));
// // [[1, 3], [3, 5], [4, 6]]
console.log(differenceOfTwo([2, 4]));
// // [[2, 4]]
console.log(differenceOfTwo([1, 4, 7, 10, 13]));
// []
