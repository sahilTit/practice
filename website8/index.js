let grade = -5;
/*
if (grade == "A") {
  console.log("you did great!");
} else if (grade == "B") {
  console.log("you did good");
} else if (grade == "C") {
  console.log("you did okay!");
} else if (grade == "D") {
  console.log("you passed...Barely!!!");
} else if (grade == "F") {
  console.log("You Failed!!!...");
} else {
  console.log("is not a Grade Letter");
}
*/

switch (true) {
  case grade >=90:
    console.log("You did Great!");
    break;
  case grade >=70:
    console.log("You did good");
    break;
  case grade >=50:
    console.log("you did okay ");
    break;
  case grade >= 35:
    console.log("you passed Barely");
    break;
  case grade > 0:
    console.log("you have failed");
    break;
  default:
    console.log("is not a letter grade!");
}
