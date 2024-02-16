/*
let fruits = ["apple","Orange","Banana","tomato"];

fruits.push("Lemon");
fruits.pop();
fruits.unshift("Mango");
fruits.shift();

let length = fruits.length;

let index = fruits.indexOf("Lemon");

console.log(index);
*/
/*
let prices = [5, 10, 15, 20, 25];
for (let i =prices.length - 1;i>=0; i -= 1) {
  console.log(prices[i]);
}
for (let price of prices){
    console.log(price)
}
*/
let fruits = ["banana","apple","orange","mango"];

// fruits = fruits.sort();
// fruits = fruits.sort().reverse();

// for(let fruit of fruits){
//     console.log(fruit);
// }

let vegetables = ["carrots","onions","potatoes"];
let meats = ["eggs","chicken","fish"];

let groceryList = [fruits,vegetables,meats];

groceryList[2][0]="steak";

for(let list of groceryList){
    for(let food of list){
        console.log(food);
    }
}