var numberOfDrumsbuttons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumsbuttons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHtml;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}

addEventListener("keypress", function (event) {
  // alert("Key was pressed");
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(Key) {
  switch (Key) {
    case "w":
      var tom1 = new Audio("images/sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("images/sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("images/sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("images/sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var crash = new Audio("images/sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var kick = new Audio("images/sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      var snare = new Audio("images/sounds/snare.mp3");
      snare.play();
      break;
    default:
      console.log(buttonInnerHtml);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
