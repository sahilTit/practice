var ramdomNumber1 = Math.floor(Math.random()*6)+1;

// console.log(ramdomNumber1);

// var randomImage = Math.floor(Math.random()*dice6.png)+dice1;

// console.log(randomImage);

//  var img = ["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"]

//  function imgRandom (imgArry){
//     return imgArry[Math.floor(Math.random()*imgArry.length)];
//  }
//  console.log(imgRandom(img));

var ramdomDiceImage = "dice" + ramdomNumber1 + ".png";

var randomImageSource = "images/" + ramdomDiceImage ;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);

var ramdomNumber2 = Math.floor(Math.random()*6)+1;

var randomImageSource1 = "images/dice" + ramdomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource1);

if (ramdomNumber1 > ramdomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}else if (ramdomNumber1 < ramdomNumber2){
    document.querySelector("h1").innerHTML = "player 2 wins";
}else{
    document.querySelector("h1").innerHTML = "Match draw";
}