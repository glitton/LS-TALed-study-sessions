/*
P: You are given an array of student objects, where each student object contains:

•  An integer id (representing the student’s ID).

•  An array grades of integers (representing the student’s grades).

You need to write a function/method that finds the nth largest grade across all students and returns the id of the student who received that grade. If there are multiple students with the same grade, return the student with the **lowest id**. -- Generosa

input: array of objects
output: student id with the highest grade
rules:
- return the nth largest grade across all students
- if there are multiple students with the same grade, return the lowest id 

E: 
[95, 75, 88], [95, 85, 78], [95, 70, 85] 70, 75, 78, 85, 85, 88, 95
3rd largest grade is 85, from array[1], index is 1

D: Input is an array and an object, output is an integer

A: 
Create an array of all grades, sorted from highest to lowest
Based on nthLargest, find that grade from the array
  - Use nthLargest as the index - 1 to find the grade
  - If there are multiple grades that satisfy the condition
    - find the one with the lowest id value

Return the id
*/

function nthLargestGrade(arr, nthLargest) {
  let allGrades = arr.map((obj) => obj.grades);
  let sortedGrades = allGrades.flat().sort((a, b) => b - a);

  if (sortedGrades.length < nthLargest) return null;

  let grade = sortedGrades[nthLargest - 1];

  let idArray = [];

  for (let data of students) {
    if (data.grades.includes(grade)) {
      idArray.push(data.id);
    }
  }
  return idArray.sort((a, b) => a - b)[0];
}

// Test Cases
const students = [
  { id: 2, grades: [95, 75, 88] },
  { id: 1, grades: [95, 85, 78] },
  { id: 3, grades: [95, 70, 85] },
];

console.log(nthLargestGrade(students, 3)); // Output: 1
console.log(nthLargestGrade(students, 1)); // Output: 1
console.log(nthLargestGrade(students, 4)); // Output: 2
console.log(nthLargestGrade(students, 5)); // Output: 1
console.log(nthLargestGrade(students, 10)); // Output: null

/*
Given a sentence, write a function that finds the starting index 
of the rightmost occurrence of any consecutive vowel sequence in 
the sentence. The function should be case-insensitive and should 
only consider vowel sequences within individual words
(not spanning multiple words).

If no consecutive vowels are found, return null. -- Hamza

input is a string
output is a number

lowercase the string
initialize a vowels array
iterate from the end of the string
  check for two conescutive integers (consider making a helper function)
  if found return their index
return null
*/
function rightmostConsecutiveVowel(str) {
  str = str.toLowerCase();
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = str.length - 1; i >= 0; i--) {
    if (twoConsecVowels(str[i], str[i - 1])) return i - 1;
    //if (vowels.includes(str[i]) && vowels.includes(str[i - 1])) return i - 1;
  }
  return null;
}

function twoConsecVowels(char1, char2) {
  let vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(char1) && vowels.includes(char2)) return true;
  return false;
}

console.log(
  rightmostConsecutiveVowel("The quick brown fox jumps over the laaazy dog")
); // Output: 37
console.log(rightmostConsecutiveVowel("She sells sea shells on the sea shore")); // Output: 29
console.log(rightmostConsecutiveVowel("I like eating aaapples and oranGEs")); // Output: 15
console.log(
  rightmostConsecutiveVowel("This sentence has no consecutive vowels")
); // Output: null
console.log(rightmostConsecutiveVowel("Queueing is fun but cooool")); // Output: 23
