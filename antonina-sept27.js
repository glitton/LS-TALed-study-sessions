// 2
// Given a list of integers and a single sum value, return the first two values
// in order of appearance that add up to form the sum.

// If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.

/*
P:
In: integers, number
Out: number

- return the first two values that if sum up, make the target sum
- if multiples pairs are found with the same criteria, the pair whose second element has the smallest indes is the answer


D:
n/a

A:
- Try to find every possible pair
- keep track of the pair that make the sum and the index of its second element
- Return the pair that fullfills the requirements
-------------
1. Initialize pair to undefined
2. Initialize secondIndex to Infinity
3. Iterate over the input array
  - Iterate over the input array again starting from 2nd element
  - If the sum of current pair equals the target sum 
  - AND the current index is less than secondIndex:
    - Upadate pair to the second pair
    - Update secondIndex to the current index

4. After iteration, return pair
*/
//Example:

console.log(sumPairs([4, 3, 2, 3, 4], 6));
//                    ^-----^         4 + 2 = 6, indices: 0, 2
//                       ^-----^      3 + 3 = 6, indices: 1, 3
//                          ^-----^   2 + 4 = 6, indices: 2, 4
// == [4, 2]

// Negative numbers and duplicate numbers can and will appear.

function sumPairs(arr, targetSum) {
  let pair = undefined;
  let secondIndex = Infinity;

  for (let idx = 0; idx < arr.length; idx += 1) {}
}
//Test cases
console.log(sumPairs([11, 3, 7, 5], 10)); // [3, 7]
console.log(sumPairs([0, 0, -2, 3], 2)); // undefined
console.log(sumPairs([1, 2, 3, 4, 1, 0], 2)); // [1, 1]
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10)); // [3, 7]
console.log(sumPairs([0, 2, 0], 0)); // [0, 0]
console.log(sumPairs([5, 9, 13, -3], 10)); // [13, -3]
