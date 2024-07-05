// What's the output and why? - Generosa
let cities = ["Tokyo", "Berlin", "Rio"];

function mutater(list) {
  list = ["Banana", "Pineapple", "Apple"];
  list[2] = "Denver";
  return list;
}

mutater(cities);
console.log(cities);

console.log(mutater(cities));
