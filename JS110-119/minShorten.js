/*
P: Implement the function/method, minimum shorten. The function shortens a sentence such that it will fit within the character limit set. It shortens by removing vowels in the sequence of `a`, `e`, `i`, `o`, and `u`. Start removing from the end of the sentence. If it can not be shortened to fit within character limit, return an empty string. Spaces don’t count for the limit. 
input: string
output: string modified by  removing vowels in the sequence of aeiou and start removing from the end
rules:
- remove vowels from the end of the sentence
- if the string can't be shortened within the char limit by removing vowels, return an empty string
- spaces don't count in terms of the string length and limit

E: Hello World = string length without space is 10, limit is 8
need to remove two vowels 
  - remove e, string is Hllo World - length is 9
  - remove o from World, string is Hllo Wrld, length is 8

D: input is a string, use an array to store each word

A:

Initialize a finalString variable, assign to an empty string
Get the string's length without spaces

EDGE CASE: if the string's length is less than the limit, return an empty string

Initialize a vowel array constant assign to vowels
Initialize a shortenedSentence var, assing to input string
Iterate over the vowel array
- while the length of the nonSpaceSentence is greater than the limit and the shortenedSentence includes the current vowel
  - get a substring of the sentence without the current vowel
  - decrease the nonSpaceSentenceCount
Return the shortenedSentence if it can be shortened, otherwise, return an empty string

*/
