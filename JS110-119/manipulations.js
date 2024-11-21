let nums = [4, 6, 8];

let result = nums.map((num) => {
  let prod = num * num;
  console.log(prod);
});

console.log(result);
console.log(nums);
//What is printed to the console? Explain why?

//SNIPPET 7 (concept: higher-order function)

//Which code snippet is a "higher-order" function?

function one(param) {
  return param * 2;
}

//

const two = (param) => {
  return one(param);
};

//

function three() {
  return one;
}

//

let four = [1, 2, 3];
let resultOfMap = four.map((num) => num + 1);
// last 2,

//SIDE PROBLEM 1: Extract unique even numbers

const thisArray = [1, 2, 3, 4, 2, 2, 5, 6, 6, 7, 8, 9, 10, 11, 12, 12];

function uniqueEvens() {
  // use filter and indexOf
  // create an array, check if element is in it.
}

console.log(uniqueEvens(thisArray)); //[2, 4, 6, 8, 10, 12]

//SIDE PROBLEM 1: Extract unique even numbers

const thisArray = [1, 2, 3, 4, 2, 2, 5, 6, 6, 7, 8, 9, 10, 11, 12, 12];

function uniqueEvens() {}

console.log(uniqueEvens(thisArray)); //[2, 4, 6, 8, 10, 12]

// Write a function that takes two or more objects and returns
// a new object which combines all the input objects.

// Objects are combined together so that the values of matching keys are added together.

// An example:

const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
//combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }

// The combine function should not mutate the input objects.

// check if key is not in A

let copyOfObjA = structuredClone(objA);
let copyOfObjB = structuredClone(objB);

const result = Object.assign(copyOfObjA, copyOfObjB);

for (let key in result) {
  if (Object.keys(objA).includes(key) && Object.keys(objB).includes(key)) {
    result[key] += objA[key];
  }
}
console.log(result);
