// Analyze the output of the following code.
// Discuss how JavaScript treats arrays when passed to functions and the concept of references. -- Generosa

const numbers = [1, 2, 3];

function modifyArray(arr) {
  arr.push(4);
  arr = [5, 6, 7]; // Is this a different array pass by reference?
  arr.push(8); // doesn't return any value
}

modifyArray(numbers); //function is invoked and now modifies the numbers array
// console.log(numbers); // this outputs the numbers array with the value 4 added at the end

// Examine the following code snippet. What will be logged to the console, and why?
// Highlight the use of logical operators and conditional execution in JavaScript. -- Mohamed

// let status = "online";
// let mode = status === "offline" || "online";

// if (mode === "online") {
//   console.log("System is online");
// } else {
//   console.log("System is offline");
// }

// What will be logged to the console and why? -- Will

const original = {
  a: 1,
  b: { c: 2 },
};

const shallowCopy = { ...original };
shallowCopy.a = 10;
shallowCopy.b.c = 20;

/*
console.log(original.a, original.b.c); // primitive doesn't change,
changes the key value pair of the object only
console.log(shallowCopy.a, shallowCopy.b.c); 
*/

let greeting = "Hello";

while (true) {
  greeting = "Hi";
  break;
}

// console.log(greeting);

function replace(str, value) {
  while (true) {
    break;
  }

  str = value;
}

let greet = "Hey!";
replace(greet, "Hello");
// console.log(greet);

// console.log(23 + true);

// let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

// let newArray = myArray.sort();
// console.log(newArray);

// newArray.forEach((element) => {
//   if (element % 2 === 0) {
//     // console.log(element);
//   }
// });

let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

function oddsEvens(arr) {
  let finalArray = [];
  arr.map((num) => {
    if (num % 2 === 0) {
      finalArray.push("even");
    } else {
      finalArray.push("odd");
    }
  });
  return finalArray;
}

// console.log(oddsEvens(myArray));

function oddsAndEvens(arr) {
  let finalArray = arr.map(function (value) {
    if (value % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  });
  return finalArray;
}

// console.log(oddsAndEvens(myArray));

let newArray = myArray.map(function (value) {
  if (value % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
});

// console.log(newArray);

// function findIntegers(array) {
//   return array.filter((item) => Number.isInteger(item));
// }

// let things = [1, "a", "1", 3, NaN, 3.1415, -4, null, false];
// let integers = findIntegers(things);
// console.log(integers); // => [1, 3, -4]

// function oddLengths(array) {
//   // let newArray = array.map((item) => item.length);
//   // return newArray.filter((item) => item % 2 !== 0);
//   return array.map((item) => item.length).filter((item) => item % 2 !== 0);
// }
// let arr = ["a", "abcd", "abcde", "abc", "ab"];
// console.log(oddLengths(arr)); // => [1, 5, 3]

// let array = [3, 5, 7];

// function sumOfSquares(arr) {
//   return arr.reduce((acc, number) => acc + number * number, 0);
// }
// console.log(sumOfSquares(array)); // => 83

function oddLengthsArray(strings) {
  return strings.reduce((filteredArrayLength, letters) => {
    let length = letters.length;
    if (length % 2 !== 0) {
      filteredArrayLength.push(length);
    }

    return filteredArrayLength;
  }, []);
}

// let arr = ["a", "abcd", "abcde", "abc", "ab"];
// console.log(oddLengthsArray(arr));

// function numberThree(arr) {
//   return arr.includes(3);
// }

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

// console.log(numberThree(numbers3));

let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12],
];
arr[1][3] = 606;

console.log(arr);
