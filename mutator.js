// What's the output and why? - Generosa
let cities = ["Tokyo", "Berlin", "Rio"];

function mutater(list) {
  list = ["Banana", "Pineapple", "Apple"];
  list[2] = "Denver";
  return list;
}

mutater(cities);
console.log(cities);

/*
The code outputs the array ["Tokyo", "Berlin", "Rio"].

When the mutator function is invoked with the cities array passed by reference,
The function initializes a list variable which at this time, references the same 
array as the cities global variable declared on line 2.
However, the function reassigns list to another array, ["Banana", "Pineapple", "Apple"],
mutates the 2nd index with the string "Denver" and returns it.

At this point, list and cities point to two different arrays which is why logging
cities to the console results in the cities array ["Tokyo", "Berlin", "Rio"].
*/
