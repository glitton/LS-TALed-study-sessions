function anyNegatives(arr) {
  return arr.forEach((num) => {
    if (num < 0) return true;
  });
}

let numbers = [1, 2, 3, -5, 4];

if (anyNegatives(numbers)) {
  console.log("The array contains at least one negative number!");
} else {
  console.log("The array contains no negatives!");
}

//forEach returns undefined and it is a falsey value, the callback returns true but the method returns false.  Better to use filter or better to use the some method

let pets = {
  jerry: { species: "cat", age: 3 },
  luna: { species: "dog", age: 5 },
  gold: { species: "fish", age: 1 },
};

function incrementAge(animals) {
  return Object.values(animals).map((animal) => {
    animal.age += 1;
  });
}

function foo() {
  console.log("foo");
}

console.log(incrementAge(pets));
console.log(pets);

// undefined is returned implicitly
// map performs transformation, map uses the return value of the callback, transformed to a new array that contains undefined values

// lexicographical

let arr = [
  ["a", "b", "c"],
  [0, 1, 2, 3],
  [, , , , undefined],
  [49, 293, 20, 6, 2],
].sort();

console.log(arr);

//coerce the elements to strings convert the array elements to a string, perform the comparison to ascending lexicographical order.  Sort mutates and returns the calling array.
