/*
forEach, no return value, returns undefined

Side effect is less desirable.
*/

let carArray = ["honda", "jeep", "audi"];
// let cars = [];

// carArray.forEach((car) => {
//   let newCarName = car + "isNew";

//   console.log(newCarName);

//   cars.push(newCarName);
// });

// console.log(cars);

// let allCarNames = carArray.reduce((acc, curr, idx) => {
//   let namesConcat = acc + curr;
//   return namesConcat;
// }, "");

// console.log(allCarNames);

let allCarNames = carArray.reduce((acc, curr, idx) => {
  if (idx === 0) {
    acc = [];
  }

  let newCarName = curr + "isNew";
  // console.log(newCarName);
  acc.push(newCarName);
  return acc;
}, "");

console.log(allCarNames);
