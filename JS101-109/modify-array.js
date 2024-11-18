// Analyze the output of the following code.
// Discuss how JavaScript treats arrays when passed to functions and the concept of references. -- Generosa

const numbers = [1, 2, 3];

function modifyArray(arr) {
  arr.push(4);
  arr = [5, 6, 7];
  arr.push(8);
}

modifyArray(numbers);
console.log(numbers);

/*
The code outputs an array [1, 2, 3, 4].

When the modifyArray function is invoked passing it the numbers array argument 
by reference, JavaScript initializes the modifyArray function parameter arr as 
a variable.  At this point, arr references the same numbers array resulting 
in both variables numbers and arr pointing to the array [1, 2, 3].

In the function, arr is mutated using the push method adding an element, 4, 
which affects the numbers array as well. At this point, both variables, arr and 
numbers reference the array with a value of [1, 2, 3, 4].

In line 8, arr is reassigned a different array, [5, 6, 7] thus arr and numbers 
are now referencing two different arrays.  Applying the push method to arr doesn't
affect the numbers array. This is why when logging numbers to the console, 
the output is [1, 2, 3, 4].

The code demonstrates that arrays are passed by reference and when the operation 
within a function mutates its argument, the original object (arrays are objects) 
is affected.  In addition, when the function re-assigns its argument, 
the original object is not affected.
*/
