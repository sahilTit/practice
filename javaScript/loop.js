// var i = 1;

// while (i<5){
//     console.log(i);
//     i++;
// }

// var output = [];
// var count = 1;


// function fizzBuzz() {
//     while (count <= 50){

// if(count % 3 ===0 && count % 5 === 0){
//     output.push("fizzBuzz");
// }
// else if(count % 3 === 0){
//     output.push("Fizz");
// }else if(count % 5 ===0){
//     output.push("Buzz");
// }else{
//     output.push(count)
// }
//     count++;
// }
//     console.log(output);
// }

// for(var i=1 ; i < 10; i++){
//     console.log(i);
// }

var output = [];
// var count = 1;


function fizzBuzz() {
    for (var count = 100; count>1;count--){

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
    // count++;
}
    console.log(output);
}