/*Given an array of integers, find the longest consecutive slice where all elements are equal. Return an empty array if no such slice exists (minimum length 2). -- Generosa
input: array
output: array
rules: 
- find the longest consecutive slice of numbers where they are all equal
- if no such slice exist, return an empty array

E:

D: Array

A:
Variables: 
- keep track of current start of slice, assign to 0 initially
- keep track of slice length when consecutive slice is found
- have a maxLength to compare curr length of slice
- keep track of currSlice and maxSlice arrays

Iterate over the array
- assign currStart to 0
- check if currNum is equal to prevNum
  - get currentSlice which is currStart to idx + 1 (?)
  - get currSliceLength, if it is greater than  maxSliceLength
    - reassign maxSliceLength equal to currSliceLength
    - reassign maxSlice equal to currSlice
- else,
  currStart is equal to idx    
- return maxSlice    

*/

// function longestEqualSlice(arr) {
//   let currStart = 0;
//   let currLength = 0;
//   let maxLength = 1;
//   let maxSlice = [];

//   for (let idx = 1; idx < arr.length; idx++) {
//     let currNum = arr[idx];
//     let prevNum = arr[idx - 1];

//     if (currNum === prevNum) {
//       let currSlice = arr.slice(currStart, idx + 1);
//       currLength = idx - currStart + 1;
//       if (currLength > maxLength) {
//         maxLength = currLength;
//         maxSlice = currSlice;
//       }
//     } else {
//       currStart = idx;
//     }
//   }
//   return maxSlice;
// }

function longestEqualSlice(arr) {
  let currStart = 0;
  // let currLength = 0;
  // let maxLength = 1;
  let maxSlice = [];

  for (let idx = 1; idx < arr.length; idx++) {
    let currNum = arr[idx];
    let prevNum = arr[idx - 1];

    if (currNum === prevNum) {
      let currSlice = arr.slice(currStart, idx + 1);
      // currLength = idx - currStart + 1;
      if (currSlice.length > maxSlice.length) {
        // maxLength = currLength;
        maxSlice = currSlice;
      }
    } else {
      currStart = idx;
    }
  }
  return maxSlice;
}
// Test cases
// console.log(longestEqualSlice([1, 1, 1, 2, 3, 3])); // [1, 1, 1]
// console.log(longestEqualSlice([2, 3, 4, 4, 5])); // [4, 4]
// console.log(longestEqualSlice([1, 2, 3, 4])); // []
// console.log(longestEqualSlice([5, 5, 5, 5])); // [5, 5, 5, 5]

/*
P:Write a function that returns the longest consecutive numbers that are factors of the given target number.  
input: array and integer
output: array
rules - output array contains consecutive numbers from the input array that are factors of the target integer

E:

D: arrays

A:
Initialize variables
  - currSequence to keep track of the current sequence of factors
  - maxSequence to assign the longest consecutive factors 
Iterate over the input array
  - check if the currNumber is a factor of the target using modulo with a remainder of 0
    - yes, append the number to currSequence
    - compare the length of currSequence to maxSequence
      - if currSequence is longer, reassign maxSequence to equal currSequence
   - no
    - reset currSequence to an empty array
return maxSequence       
*/

function longestConsecutiveFactors(arr, target) {
  let currSequence = [];
  let maxSequence = [];

  for (let idx = 0; idx < arr.length; idx++) {
    let currNumber = arr[idx];

    if (target % currNumber === 0) {
      currSequence.push(currNumber);
      if (currSequence.length > maxSequence.length) {
        maxSequence = currSequence;
      }
    } else {
      currSequence = [];
    }
  }
  return maxSequence;
}

// Test cases
console.log(longestConsecutiveFactors([1, 2, 11, 12, 5, 4], 60)); // Expected: [12, 5, 4]
console.log(longestConsecutiveFactors([1, 2, 3, 4, 5, 6], 12)); // Expected: [1, 2, 3, 4]
console.log(longestConsecutiveFactors([10, 15, 20, 25, 30], 150)); // Expected: [10, 15]
console.log(longestConsecutiveFactors([1, 3, 7, 9], 21)); // Expected: [1, 3, 7]
console.log(longestConsecutiveFactors([2, 4, 6, 8, 10], 40)); // Expected: [2, 4]
