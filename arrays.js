function modifyArray(array) {
  let val = array.pop(); //3
  return val;
  3;
}
let arr = [1, 2, 3];
let result = modifyArray(arr);
console.log(result); //3
console.log(arr); //[1,2]

/*
The console outputs 3 and the array [1,2]

A modifyArray function is declared with one parameter, array.  In the function body, a variable val is declared assigning it the return value of the array.pop() method and it is returned.  This method removes the last element of an array and returns it.  

A variable arr is declared assigned to the array [1, 2, 3].  Another variable result is declared and is assigned to the return value of invoking modifyingArray passing the argument arr by reference.

At this time, modifyingArray is referencing arr.  Thus applying the pop method, mutates the array resulting in val being assigned 3 which is then returned.  Since array references arr, arr is also mutated.  At this point both arr and array point to [1,2].

This is why logging result, outputs 3 and logging arr results in [1,2].

This code demonstrates that objects and arrays are passed by reference in JavaScript functions. When an operation within the function mutates its argument such as the pop method, it affects the original object as seen in arr also being mutated.  
*/

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
// https://www.youtube.com/playlist?list=PLPVUV61a5r7-kC5b0dhZGFDQm2wJDJZsA
// function reassignmentArray() {
//   arr = [4, 5, 6];
//   return arr;
// }
// let arr = [1, 2, 3];
// let result = reassignmentArray(arr);
// console.log(result);
// console.log(arr);
