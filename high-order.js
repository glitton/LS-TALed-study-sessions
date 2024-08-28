//Which code snippet is a "higher-order" function?

function one(param) {
  return param * 2;
}

//

const two = (param) => {
  return one(param); // this returns the return value of one
};

//

function three() {
  return one; // this is a HOF
}

//

let four = [1, 2, 3];
let resultOfMap = four.map((num) => num + 1); // this is a HOF

let myArr = new Array(3);
console.log("first", myArr);

myArr = myArr.fill(1, 0, 3);

console.log(myArr); //???

/*Now we know how to fill an array. Write a function that takes in two arguments - 
value` and `length` - and returns an array with of that input `length` filled with elements 
of that `value`.*/

function fillDynamically(value, length) {
  return new Array(length).fill(value);
}
