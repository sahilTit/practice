// let total = sum(8,8);
// displayDom(total);

// function sum(x,y){
// let result = x+y;
// return result
// }
/*
sum(2, 1, displayDom);
function sum(x, y, callBack) {
  let result = x + y;
  callBack(result);
}
function displayConsole(output) {
  console.log(output);
}

function displayDom(output) {
  document.getElementById("myLabel").innerHTML = output;
}
*/

let students = ["sahil", "shubham", "ashish", "harshal"];

students.forEach(capitalize);
students.forEach(print); 


function capitalize(element, index, array) {
  array[index] = element[0].toUpperCase() + element.substring(1);
}

// console.log(students[3]);

function print(element){
    console.log(element);
}
