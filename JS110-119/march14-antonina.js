/*
You are given an array of strings and want to find the sum of their numeric values.
On each string, the numeric value can be found by combining the first digit
and the last digit to form a single two-digit number.

Consider your entire array. What is the sum of all of the numeric values?
*/

// console.log(
//   sumStringValues(["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"])
// ); // 142

// console.log(
//   sumStringValues([
//     "ninesixthree8six8",
//     "5tnzrrzmcsnfivefeightrjninexrhnnfbcb",
//     "dcjcj2",
//     "4fhcmhdtfourlzdphfxvlmvm6",
//   ])
// ); // 211

// Given a list of integers and a single sum value, return the first two values
// in order of appearance that add up to form the sum.

// If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.

//Example:

// console.log(sumPairs([4, 3, 2, 3, 4], 6));
//                    ^-----^         4 + 2 = 6, indices: 0, 2
//                       ^-----^      3 + 3 = 6, indices: 1, 3
//                          ^-----^   2 + 4 = 6, indices: 2, 4
// == [4, 2]

// Negative numbers and duplicate numbers can and will appear.

/*
D: Arrays

A:
- minSecondIndex assign to large number (infinity)
- initialize a finalPairs array, set to undefined
- iterate through the array
  - if currNum and element sum up to the target
    - check if the current index is less than the minSecondIndex
    - yes, reassign minSecondIndex to current index
    - store the found pair
  
if no pairs, return undefined
*/

function sumPairs(arr, sum) {
  let minSecondIdx = Infinity;
  let finalPair = undefined;

  for (let idx = 0; idx < arr.length - 1; idx++) {
    let currNumber = arr[idx];
    for (let jdx = idx + 1; jdx < arr.length; jdx++) {
      let nextNumber = arr[jdx];

      if (currNumber + nextNumber === sum) {
        if (jdx < minSecondIdx) {
          minSecondIdx = jdx;
          finalPair = [currNumber, nextNumber];
        }
      }
    }
  }
  return finalPair;
}

//Test cases
// console.log(sumPairs([11, 3, 7, 5], 10)); // [3, 7]
// console.log(sumPairs([0, 0, -2, 3], 2)); // undefined
console.log(sumPairs([1, 2, 3, 4, 1, 0], 2)); // [1, 1]
// console.log(sumPairs([10, 5, 2, 3, 7, 5], 10)); // [3, 7]
// console.log(sumPairs([0, 2, 0], 0)); // [0, 0]
// console.log(sumPairs([5, 9, 13, -3], 10)); // [13, -3]
