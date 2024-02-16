// let userName = "Sahil";
// let items = 3;
// let total = 75;

// console.log(`Hello ${userName}`);
// console.log(`You have ${items}items in your cart`);
// console.log(`your total is $${total}`);
const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;
document.getElementById("submitButton").onclick = function () {
  let guess = document.getElementById("guessField").value;
  guesses += 1;
  if (guess == answer) {
    alert(`${answer}is the Number.it took you ${guesses} guesses`);
  } else if (guess < answer) {
    alert("# too Small!");
  }else{
    alert("To Large");
  }
};
