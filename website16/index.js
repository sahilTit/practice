/*let numbers = [1 , 2 , 3, 4 , 5, 6,7,8,9,11,12];
let maximum =Math.max(...numbers);
console.log(maximum);
let class1 = ["sahil", "shubham", "ashish"];
let class2 = ["harshal", "ritesh", "shivam"];
class1.push(...class2);

console.log(...class1);
*/
let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(sum(a, b,c,d,e));

function sum(...numbers) {
  let total = 0;
  for(let number of numbers){
    total +=number
  }
  return total
}
