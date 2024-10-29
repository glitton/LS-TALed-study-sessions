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

E:
D:
array: to store the numbers from the input array 



A: 
- iterate through the input array 
- ge all the numbers from the input array 
- iterate through the input array 
- get the sum of all the numbers 

  - initialize numStr to all the numbers from 1 to 9
  - initialize numsArr to empty array 
  - iterate through the input array 
  -- convert the current string to an array of characters 
  -- iterate through the current string  
  --- if the current character is includes within the numStr 
  --- get the index of the current character 
  ---- splice the current character from the array of characters
  ---- append it to the numsArr 

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
