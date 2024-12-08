/* P: Write a function that takes two or more objects and returns
a new object which combines all the input objects.

Objects are combined together so that the values of matching keys are added together.

Input: two objects
Output: Combined object with values of matching keys are added together
Rules: The combine function should not mutate the input objects.

E: 
D:
A:

- Create deep copies of each input object
- Combine the input objects into a combinedObj 
- Iterate over combinedObj
-   Check if the keys in obj1 and the keys in obj2 are in combinedObj
    - If yes, add the value of obj1 with that key to the combinedObj
    - If not, then the key/value pair is already in combined and doesn't need to be combined
- Return the combined object
*/

function combine(obj1, obj2) {
  let copyObj1 = JSON.parse(JSON.stringify(obj1));
  let copyObj2 = JSON.parse(JSON.stringify(obj2));

  let combinedObj = Object.assign(copyObj1, copyObj2);
  // console.log(combinedObj); { a: 3, b: 20, c: 6, d: 3 }
  for (let key in combinedObj) {
    if (Object.keys(obj1).includes(key) && Object.keys(obj2).includes(key)) {
      combinedObj[key] += obj1[key];
    }
  }
  return combinedObj;
}

const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
console.log(combine(objA, objB)); // Returns { a: 13, b: 20, c: 36, d: 3 }
