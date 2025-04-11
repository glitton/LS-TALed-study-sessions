/* 
P: Given an array of numbers and a segment length k, reverse every consecutive segment of k elements. If the last segment is shorter than k, leave it unchanged. Do not use the reverse function/method.
input: numbers array and segmentLength
output: array containing consecutive segments of k elements but reversed
rules:
- if the last segment is shorter than k, leave it unchanged and add it to the array as is
- do not use the reverse function/method

E: [1, 2, 3, 4, 5], 2
segments: [1, 2], [3, 4], [5]
output: [2, 1, 4, 3, 5]

D: array and integer, outputs is an array

A:
Initialize an empty array to hold the result
Check if input array's length is less than segmentLength, return array as is
Loop through the input array in increments of segmentLength
  Get the currentSegment of segmentLength elements
  check if the currentSegment's length is greater than or equal to the segment length
    - yes, reverse the currentSegment by iterating from the append
      - append each element to result
    - no, append the segment as is to result  
Return the result array        

 */

function reverseSegments(arr, segmentLength) {
  let result = [];

  if (arr.length < segmentLength) return arr;

  for (let idx = 0; idx < arr.length; idx += segmentLength) {
    let currentSegment = arr.slice(idx, idx + segmentLength);

    if (currentSegment.length === segmentLength) {
      for (let jdx = currentSegment.length - 1; jdx >= 0; jdx--) {
        result.push(currentSegment[jdx]);
      }
    } else {
      result.push(...currentSegment);
    }
  }
  return result;
}

// Test cases
console.log(reverseSegments([1, 2, 3, 4, 5, 6], 3)); // [3, 2, 1, 6, 5, 4]
console.log(reverseSegments([1, 2, 3, 4, 5], 2)); // [2, 1, 4, 3, 5]
console.log(reverseSegments([7, 8, 9], 4)); // [7, 8, 9]
console.log(reverseSegments([1, 2, 3, 4], 2)); // [2, 1, 4, 3]
console.log(reverseSegments([1, 3, 4, 6, 2], 2));

// Write a function, snakecase, that transforms each word in a sentence to alternate between lower (even index value) and upper (odd index value) cases when the word before or after it  begins with "s". -- Avi

// Test cases
// console.log(snakecase("Snakes slither silently")); // "sNaKeS sLiThEr sIlEnTlY"
// console.log(snakecase("simple sentence structure")); // "sImPlE sEnTeNcE sTrUcTuRe"
// console.log(snakecase("sapples are weet")); // "apples aRe sweet"
// console.log(snakecase("swiftly swimming swans")); // "sWiFtLy sWiMmInG sWaNs"
// console.log(snakecase("the sun sets slowly")); // "tHe sUn sEtS sLoWlY"
// console.log(snakecase("A quick brown fox")); // "A quick brown fox"
