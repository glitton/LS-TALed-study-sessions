/*
Detect Pangram
A pangram is a sentence that contains every single letter of the alphabet at least once.  
For example: the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. 
Return True if it is, False if not. Ignore numbers and punctuation.

P
Given a string, detect whether it uses all letters in the alphabet at least once. 
If it does, return true, else return false.

Rules
  - Ignore numbers and punctuation
  - letters can be considered case-insensitive
  - Each letter should appear at least once to return true
  - English alphabet

D
Input: String
Output: Boolean  
Intermediate: 
- Array of the characters from the input string
- Array to store the alphabet characters a to z

Algorithm:
High-level algorithm:
 Iterate through the alphabet, check if each letter is in the input string. 
 If I get to the end of the alphabet and all were in the string, return true. 
 If any of the letters don't appear in the string, return false.

Deeper Algorithm:
1. Create an array/list `alphabets` containing the alphabets from a to z
2. Iterate through `alphabets`
 - If the current character exists in the input string case-insensitively
  - Move to the next iteration
 - Otherwise, return false
3. Return true

Code:

*/

// Test cases

function isPangram(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  string = string.toLowerCase();
}

// console.log(isPangram("The quick brown fox jumps over the lazy dog.") == true);
// console.log(isPangram("This is not a pangram.") == false);

/*
Dmitrii:
1. Convert the input string to lowercase (make the case check insensitive)
2. Create an array of alphabet characters (from "a" to "z")
3. Iterate through each letter in the alphabet array.
- Check if the current letter is included in the lowercase input string
- If any letter is not found in the string, return false
4. If the loop completes without returning false, return true (all letters were found)

Aman:
1. Create an array/list `alphabets` containing the alphabets from a to z
2. Iterate through `alphabets`
 - If the current character exists in the input string case-insensitively
  - Move to the next iteration
 - Otherwise, return false
3. Return true
*/

function isPangram(string) {
  let lowerCaseString = string.toLowerCase();
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  for (let idx = 0; idx < alphabet.length; idx++) {
    let currentLetter = alphabet[idx];
    // console.log(alphabet[idx]);
    if (!lowerCaseString.includes(currentLetter)) return false;
  }
  return true;
}

// Test cases
console.log(isPangram("The quick brown fox jumps over the lazy dog.") == true);
console.log(isPangram("This is not a pangram.") == false);
// console.log(isPangram("This is not a pangram."));
