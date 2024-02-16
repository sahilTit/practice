// const gretting = function () {
//   console.log("Hello!");
// };
// gretting();
/*
function increaseCount(){
    count+=1;
    document.getElementById("myLabel").innerHTML = count;
}
function decreaseCount(){
    count-=1;
    document.getElementById("myLabel").innerHTML = count;
}
*/
// let count = 0;
// document.getElementById("increaseButton").onclick = function(){
//     count+=1;
//     document.getElementById("myLabel").innerHTML = count;
// }
// document.getElementById("decreaseButton").onclick = function(){
//     count-=1;
//     document.getElementById("myLabel").innerHTML = count;
// }

// const greeting = (userName)=>console.log(`Helllo ${userName}`);

// greeting("Sahil");

// const percent = (x, y) =>
//    (x / y) * 100;

// console.log(`${percent(83, 130)}%`);

// let grades = [100, 80, 60, 40, 20];

// grades.sort((x, y) => y - x);
// grades.forEach((element) => console.log(element));
let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

shuffle(cards);
console.log(cards);

function shuffle(array) {
  let currentIndex = array.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * array.length);
    currentIndex -= 1;

    let temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
}
