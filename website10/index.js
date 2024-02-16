/*let userName = "";

do {
  userName = window.prompt("Enter Your Name");
} while (userName == "" || userName == null);
console.log("hello", userName);
*/

// for(let counter = 1;counter <= 100;counter+=1){
//     console.log(counter)
// }
/*
for (let i = 1; i <= 20; i += 1) {
  if (i == 13) {
    continue;
  }
  console.log(i);
}
*/
let symbol = window.prompt("Enter a symbol to use");
let rows = window.prompt("Enter # of rows");
let columns = window.prompt("Enter # of columns");

for (i = 1; i <= rows; i++) {
  for (j = 1; j <= columns; j++) {
    document.getElementById("myRectangle").innerHTML += symbol;
  }
  document.getElementById("myRectangle").innerHTML += "<br>";
}
