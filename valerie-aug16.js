//What is printed to the console? Explain why?

let str1 = "abcdef";
let str2 = "ABCDEF-ABCDEF";

// console.log(str1.includes("b")); // true
// console.log(str1.includes("b", 2)); // false, b is not in after index 2
// console.log(str2.includes("b")); // false, case sensitive
// console.log(str2.includes("B", 2)); // true, search starts from index 2

//What is printed to the console? Explain why?

let nums = [4, 6, 8];

let result = nums.map((num) => {
  let prod = num * num;
  // console.log(prod); //16, 36, 64
});

// console.log(result); //[undefined, undefined, undefined];
// console.log(nums);

//map returns a new array, but no explicit return returns
//[undefined, undefined, undefined]

let obj1 = { a: 1, b: 2, c: 3 };
let obj2 = { b: 21 };
let obj3 = Object.assign(obj1, obj2);

// console.log(obj1); // { a: 1, b: 21, c: 3 }
// console.log(obj2); // { b: 21 };
// console.log(obj3); // { a: 1, b: 21, c: 3 }

//Object.assign(<target>, <source>), reassigns shared key from target to source,
// returns target

//STRATEGY 1: Remove duplicates from an Array.

let array = [1, 2, 2, 2, 3, 3, 4, 5, 5, 5, 6];

function removeDuplicates(arr) {
  let result = arr.filter((num, ind) => {
    if (arr.indexOf(num) === ind) {
      // console.log(arr.indexOf(num));
      // console.log("id", ind);

      return num;
    }
  });

  return result;
}

// console.log(removeDuplicates(array));

// function removeDuplicates(array) {
//   let newArray = [];

//   array.map((number) => {
//     if (!newArray.includes(number)) {
//       newArray.push(number);
//     }
//   });
//   return newArray;
// }

/*
Questions to ask:  
- Whether mutate an array?
- Selecting, transforming, manipulating???
*/

//STRATEGY 4: Create an Object to count the frequencies of the elements of a string or array.

let string = "12333255788888";

//Generosa
function countCharacters(string) {
  let count = {};
  let stringArray = string.split("");

  for (let idx = 0; idx < stringArray.length; idx++) {
    let currElement = stringArray[idx];
    count[currElement] = count[currElement] || 0;
    count[currElement] += 1;
  }
  return count;
}

countCharacters(string);

function frequencies2(string) {
  let arrOfNums = string.split("");

  let result = arrOfNums.reduce((acc, val) => {
    if (acc[val] !== undefined) {
      acc[val] += 1;
      return acc;
    }
    acc[val] = 1;
    return acc;
  }, {});

  return result;
}

function getFrequency(string) {
  let frequency = {};

  for (let char of string) {
    if (!frequency.hasOwnProperty(char)) {
      frequency[char] = 1;
    } else {
      frequency[char] += 1;
    }
  }

  return frequency;
}

console.log(getFrequency(string));

//STRATEGY 2: Find the unique values in an array and return those values in a new
//array.

const myArray = [1, 1, 2, 2, 3, 4, 8, 5, 5, 4, 2];

function findUniques(arr) {
  let result = arr.filter((num) => {
    if (arr.indexOf(num) === arr.lastIndexOf(num)) {
      return num;
    }
  });

  return result;
}

/* 

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 2, 3, 5, 6];

Find the shared elements, return a new array

*/
