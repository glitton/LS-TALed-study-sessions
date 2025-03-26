/*Given a sentence, write a function that finds the starting index of the rightmost occurrence of any consecutive vowel sequence in the sentence and the word it belongs to. The function should be case-insensitive and should only consider vowel sequences within individual words (not spanning multiple words).

 If a consecutive vowel sequence is found, return an array where the first element is the starting index of the sequence and the second element is the word containing that sequence.

If no consecutive vowels are found, return an empty array.

input: string
output: array containing the index of the rightmost occurrence of consec vowel and the word it belongs to
rules:
- return an array containing the index and the word
- case-insensitive

E: "The quick brown fox jumps over the laaazy dog" => laaazy has consec vowels "aaa", middle a starts at index 37, word is laaazy

D: string and array

A:
FIND THE INDEX
Assign a constant to a string of vowels
Initialize a result array
Initialize char1 and char2 variables
Iterate over the string from the end
- if curr and next char are vowels, append the index to the result array

FIND THE WORD
Keep iterating backwards until char is equal to a space
Save the str from the space + 1 index 
Split the new string by words
Append the word at index 0 to the result array

*/

const VOWELS = "aeiou";

function rightmostConsecutiveVowel(str) {
  let result = [];
  let rightmostIdx = 0;
  let words = "";

  for (let idx = str.length - 1; idx >= 0; idx--) {
    let char1 = str[idx];
    let char2 = str[idx - 1];

    if (VOWELS.includes(char1) && VOWELS.includes(char2)) {
      rightmostIdx = idx - 1;
      break;
    }
  }

  if (rightmostIdx === 0) return result;

  for (let idx = rightmostIdx; idx >= 0; idx--) {
    let currLetter = str[idx - 1];

    if (currLetter === " ") {
      words = str.slice(idx);
      break;
    }
  }

  let word = words.split(" ")[0];

  result.push(rightmostIdx, word);
  return result;
}

// Test Cases
console.log(
  rightmostConsecutiveVowel("The quick brown fox jumps over the laaazy dog")
); // Output: [37, "laaazy"]
console.log(rightmostConsecutiveVowel("She sells sea shells on the sea shore")); // Output: [29, "sea"]
console.log(rightmostConsecutiveVowel("I like eating aaapples and oranGEs")); // Output: [15, "aaapples"]
console.log(
  rightmostConsecutiveVowel("This sentence has no consecutive vowels")
);
// ); // Output: []
console.log(rightmostConsecutiveVowel("Queueing is fun but cooool")); // Output: [23, "cooool"]

// Start from the left
function rightmostConsecutiveVowelWord(sentence) {
  const vowels = ["a", "e", "i", "o", "u"];
  let sentenceLowerCase = sentence.toLowerCase();
  let rightmostIndex = -1;
  let rightmostWord = null;

  // Split the sentence into words and check each word for consecutive vowels
  let words = sentenceLowerCase.split(" ");

  words.forEach((word) => {
    // Find the starting position of the word in the original sentence
    let wordStartIndex = sentenceLowerCase.indexOf(
      word,
      rightmostIndex === -1 ? 0 : rightmostIndex + 1
    );

    for (let i = 0; i < word.length - 1; i++) {
      if (vowels.includes(word[i]) && vowels.includes(word[i + 1])) {
        // Calculate the starting index of the sequence in the original sentence
        let currentIndex = wordStartIndex + i;

        // Only update if the currentIndex is greater than any previously found index
        if (currentIndex > rightmostIndex) {
          rightmostIndex = currentIndex;
          rightmostWord = word;
        }
      }
    }
  });

  return rightmostIndex !== -1 ? [rightmostIndex, rightmostWord] : [];
}

// // # & Implement the function/method, minimum shorten. The function shortens a sentence such that it will fit within the character limit set. It shortens by removing vowels in the sequence of `a`, `e`, `i`, `o`, and `u`. Start removing from the end of the sentence. If it can not be shortened to fit within character limit, return an empty string. Spaces don’t count for the limit. -- Avi

// // Test cases
// console.log(minimumShorten("This is a test sentence", 18)); // This is  test sentence
// console.log(minimumShorten("Hello World", 8)); // Hllo Wrld
// console.log(minimumShorten("Short", 10)); // Short
// console.log(minimumShorten("A very long sentence with many vowels", 10)); // ""

// // Create a function called decoder that decodes a secret message from a sentence. The secret message is formed by retrieving every nth character from every nth word of the sentence. -- Hamza

// // •  If the word has fewer than n characters, skip that word.

// // •  If there are fewer than n words in the sentence, return an empty string.

// // •  Words in the sentence are separated by spaces.

// // Test cases
// console.log(decoder("She sells sea shells on the sea shore", 2));  // Output: "elhlshhr"
// console.log(decoder("The quick brown fox jumps over the lazy dog", 3));  // Output: "oeg"
// console.log(decoder("I love programming in JavaScript", 3));  // Output: "oai"
// console.log(decoder("Just a simple test sentence to decode", 4));  // Output: "t"
// console.log(decoder("This will not work well", 5));  // Output: ""
// console.log(decoder("Send every code to find secrets hidden", 2));  // Output: "vroert"

function minimumShorten(sentence, limit) {
  let nonSpaceCount = sentence.replace(/\s/g, "").length;
  if (nonSpaceCount <= limit) return sentence;

  const vowels = ["a", "e", "i", "o", "u"];
  let shortened = sentence;

  for (let vowel of vowels) {
    while (nonSpaceCount > limit && shortened.includes(vowel)) {
      const index = shortened.lastIndexOf(vowel);
      shortened =
        shortened.substring(0, index) + shortened.substring(index + 1);
      nonSpaceCount--;
    }
  }

  return nonSpaceCount <= limit ? shortened : "";
}

//database: make a string for result

//declare `code` and init to ''
//convert the string to an array of words
//iterate through the array
//identify every number word
//identify every number character in word
//add that character to the code string
//return code

function decoder(str, num) {
  let code = "";
  let arr = str.split(" ");
  // console.log(arr)
  for (let idx = 1; idx < arr.length; idx++) {
    if ((idx + 1) % num === 0) {
      for (let i = 1; i < arr[idx].length; i++) {
        if ((i + 1) % num === 0) {
          code += arr[idx][i];
        }
      }
    }
  }
  return code;
}

//Victor's solution
function decoder(sentence, n) {
  const words = sentence.split(" ");
  let result = "";

  // Iterate over every n-th word
  for (let i = n - 1; i < words.length; i += n) {
    const word = words[i];

    // Iterate over every n-th character of the n-th word
    for (let j = n - 1; j < word.length; j += n) {
      result += word[j];
    }
  }

  return result;
}
