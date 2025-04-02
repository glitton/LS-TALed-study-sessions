/* 
P: "Given a sentence, group words by their lengths into subarrays. Within each group, sort the words alphabetically. Then, for each group with an odd number of words, rotate the words one position to the right (last word moves to the front). Finally, flatten the groups back into a single sentence, maintaining the original order of length groups (ascending length)."
input: string
output: string
rules
1. group words by theirs lengths into subarrays, ascending
2. Within the group sort the words alphabetically
3. rotate the words, last word moves to the front

E: 2 [cat dog bee] [apple] 
[bee cat dog ] [apple]
[dog bee cat] [apple]
dog bee cat apple

D: input string, array to store the groups

A:
Create the arrays
  - Use a helper function to populate an object where the key is the length and the values are the array of words with the corresponding length
  - assign the returned value to a variable

Sort the words in the sub-arrays alphabetically, maintaining the order
Iterate over the sortedWords array
  - For each array that has an odd length
    - rotate the words where the last word moves to the front
  - Else keep word order as is

Return the arrays as a single string
  Iterate over the array
    - for each subarray, append each word to a finalString variable
Return the finalString    
*/

function groupedLengthSort(str) {
  let arrayOfWords = createArrays(str);
  let sortedWords = arrayOfWords.map((arr) => arr.sort());

  let rotatedWords = sortedWords.map((arr) => {
    if (arr.length % 2 === 1 && arr.length > 1) {
      let firstChar = arr.pop();
      arr.unshift(firstChar);
    }
    return arr;
  });
  let finalWords = rotatedWords.flat();
  return finalWords.join(" ");
}

function createArrays(str) {
  let arrayCount = {};
  str.split(" ").forEach((word) => {
    arrayCount[word.length] = arrayCount[word.length] || [];
    arrayCount[word.length].push(word);
  });

  let arrays = Object.values(arrayCount);
  return arrays;
}

console.log(groupedLengthSort("cat dog apple bee")); // "dog bee cat apple"
console.log(groupedLengthSort("I am happy now")); // "I am now happy"
console.log(groupedLengthSort("the quick brown fox")); // "fox the brown quick"
console.log(groupedLengthSort("a ab abc abcd ba")); // "a ab ba abc abcd"
