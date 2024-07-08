// Analyze the output of the following code.
// Discuss how JavaScript treats arrays when passed to functions and the concept of references. -- Generosa

const numbers = [1, 2, 3];

function modifyArray(arr) {
  arr.push(4);
  arr = [5, 6, 7]; // Is this a different array pass by reference?
  arr.push(8); // doesn't return any value
}

modifyArray(numbers); //function is invoked and now modifies the numbers array
console.log(numbers);
