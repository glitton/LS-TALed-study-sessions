/*
P: You are given an array of strings and want to find the sum of their numeric values.
On each string, the numeric value can be found by combining the first digit
and the last digit to form a single two-digit number.
Consider your entire array. What is the sum of all of the numeric values?

Input: array of strings 
Output: sum of the digits
Rules: 
- Find the numeric value by combining the first digit
and the last digit to form a single two-digit number
- If there is only one digit, it will represent the first and last number
- For strings that have many digits, only use the first and last digit

E:
D:
array: to store the numbers from the input array 

A: 
- Iterate over the array until array.length (outer loop)
 - Get the first number (inner loop 1): 
    - For each string in the array, iterate over the array starting from the 0 index, 
    - when a number is found, append that number to an array called firstNum
    - break out of the loop

- Get the last number (inner loop 2):  
  - For each string in the array, iterate over the array starting from the end (string.length - 1) 
  - when a number is found, append that number to an array called lastNum
  - break out of the loop

Helper function: concatenate firstNum and secondNum using twoDigits helper function
  - Initialize a sumArray equal to an empty array
  - Iterate over array1, concatenate the elements from the same index from arr1 and arr2 and append to sumArray
  - return sumArray

Main function:
- After outer for loop, return twoDigits with the arr1 and arr2 as arguments.
- Use the reduce method to get the sum of each of the two digit elements converted to a Number
- return the sum

*/

function getFirstNumber(string) {
  let arr1 = [];
  for (let char of string) {
    if (char.match(/\d/g)) {
      arr1.push(char);
      break;
    }
  }
  console.log("help", arr1);
  return arr1;
}

function getLastNumber(string) {
  let arr2 = [];
  for (let idx = string.length - 1; idx > -1; idx -= 1) {
    if (string[idx].match(/\d/g)) {
      arr2.push(string[idx]);
      break;
    }
  }
  return arr2;
}

function sumStringValues(array) {
  let firstNum = [];
  let lastNum = [];

  // get the firstNum and lastNum
  for (let str of array) {
    for (let char of str) {
      if (char.match(/\d/g)) {
        firstNum.push(char);
        break;
      }
    }

    for (let idx = str.length - 1; idx > -1; idx -= 1) {
      if (str[idx].match(/\d/g)) {
        lastNum.push(str[idx]);
        break;
      }
    }
  }
  // console.log(firstNum);
  //Combine firstNum and lastNum, add them all together
  return twoNumbers(firstNum, lastNum).reduce(
    (sum, num) => Number(sum) + Number(num)
  );
}

//Helper function
function twoNumbers(arr1, arr2) {
  let sumArray = [];

  for (let idx = 0; idx < arr1.length; idx += 1) {
    sumArray.push(arr1[idx] + arr2[idx]);
  }
  return sumArray;
}

console.log(
  sumStringValues(["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"])
); // 142

console.log(
  sumStringValues([
    "ninesixthree8six8",
    "5tnzrrzmcsnfivefeightrjninexrhnnfbcb",
    "dcjcj2",
    "4fhcmhdtfourlzdphfxvlmvm6",
  ])
); // 211

// console.log(twoNumbers(["1", "3", "1", "7"], ["2", "8", "5", "7"]));
