// # Write a function, `negate`, that converts all `“yes”` words to `"no"` and `"no"` words to `"yes"` in a sentence. The comparison for `"yes"` and `"no"` should be case insensitive.`"yes"` and `"no"` should be negated even if ending with `.`, `?`, `,`, or `!`. - Hamdi

// Test cases
// console.log(negate("Yes, I said no but now I say yes.")); // "No, I said yes but now I say no."
// console.log(negate("no way, yes way!")); // "yes way, no way!"
// console.log(negate("Yesterday is not today?")); // "Yesterday is not today?"
// console.log(negate("No, I do not know!")); // "Yes, I do not know!"

/* P: Write a function, snakecase, that transforms each word in a sentence to alternate between lower (even index value) and upper (odd index value) cases when the word before or after it  begins with "s". -- Generosa
Input and output: strings
Rules:
- return a new string where in the word alternates between lower and upper case when the word before or after it begins with an 's'
E:
D: Array

A:
- Initialize a variable that will store the final string
- Convert the string to an array of words
- Iterate over the array
- check the index to make sure it is greater than 0 then check the word before it to see if it starts with 's' word[0]
  - If true, apply the convert function (helper) to the word before 
- 
- return the final string

snakeCase helper function
- Convert the string to an array of words and iterate over the array
- transform the letter at even index to lowercase
- transform the letter at odd index to uppercase
- return the new word

C:

*/

function snakecase(sentence) {
  let finalString = "";
  let sentenceArr = sentence.split(" ");

  for (let idx = 0; idx < sentenceArr.length; idx++) {
    let word = sentenceArr[idx];
    let shouldConvert = false;
    // check the previous word
    if (idx > 0 && sentenceArr[idx - 1][0].toLowerCase() === "s") {
      shouldConvert = true;
    }
    //check the next word
    if (
      idx < sentenceArr.length - 1 &&
      sentenceArr[idx + 1][0].toLowerCase() === "s"
    ) {
      shouldConvert = true;
    }

    if (shouldConvert) {
      finalString += `${convert(word)} `;
    } else {
      finalString += `${word} `;
    }
  }
  return finalString;
}

function convert(word) {
  let convertedWord = "";

  for (let idx = 0; idx < word.length; idx++) {
    if (idx % 2 === 0) {
      convertedWord += word[idx].toLowerCase();
    } else {
      convertedWord += word[idx].toUpperCase();
    }
  }
  return convertedWord;
}

// console.log(convert("slither"));

// Test cases
console.log(snakecase("Snakes slither silently")); // "sNaKeS sLiThEr sIlEnTlY"
console.log(snakecase("simple sentence structure")); // "sImPlE sEnTeNcE sTrUcTuRe"
console.log(snakecase("apples are sweet")); // "apples aRe sweet"
console.log(snakecase("swiftly swimming swans")); // "sWiFtLy sWiMmInG sWaNs"
console.log(snakecase("the sun sets slowly")); // "tHe sUn sEtS sLoWlY"
console.log(snakecase("A quick brown fox")); // "A quick brown fox"
