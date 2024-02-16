/*
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(square);
let cubes = numbers.map(cube);

cubes.forEach(print);

// squares.forEach(print);

function square(element) {
  return Math.pow(element, 2);
}

function cube(element){
    return Math.pow(element,3);
}

function print(element) {
  console.log(element);
}
*/
/*
let age = [18,16,21,17,19,21]
let adults = age.filter(checkAge);

adults.forEach(print);

function checkAge(element){
    return element>=18;
}

function print(element){
    console.log(element)
}
*/
// let prices = [5,10,15,20,25];
// let total = prices.reduce(checkOut);

// console.log(`The total is $ ${total}`);

// function checkOut(total,element){
//   return total+element
// }
let grades = [100,90,40,35,76];

grades = grades.sort(decendingOrderSort);

grades.forEach(print);

function decendingOrderSort(x,y){
  return y -x;
}
function ascendinghOrderSort(x,y){
  return x - y;
}
function print(element){
  console.log(element);
}