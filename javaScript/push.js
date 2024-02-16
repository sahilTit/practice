// var output = [1,2,3,4,5];

// // output.push(1,2,3,4,5);
// output.pop(4);

// console.log(output);

var output = [];
var count = 1;

function fizzBuzz() {
if(count % 3 ===0 && count % 5 === 0){
    output.push("fizzBuzz");
}
else if(count % 3 === 0){
    output.push("Fizz");
}else if(count % 5 ===0){
    output.push("Buzz");
}else{
    output.push(count)
}
    count++;
    console.log(output);
}

