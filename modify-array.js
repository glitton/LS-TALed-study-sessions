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
The code outputs an array [1, 2, 3, 4]

When the modifyArray function is invoked passing it the numbers array as a reference,
The function parameter arr points to the numbers array.  At this point, both numbers and arr
reference the same array.  In line 7, arr is modified by adding an new element, 4.  
At this point, both arr and numbers have this new element and the array looks like
[1, 2, 3, 4]

In line 8, arr is reassigned a different array, [5, 6, 7].  At this point, arr 
is referencing a different array than numbers. Applying the push method to arr doesn't
affect the value of the numbers array.   This is why when logging numbers 
to the console, the output is [1, 2, 3, 4].
*/
