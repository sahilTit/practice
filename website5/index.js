// let userName = "   Sahil Titarmare    ";
// let phoneNumber = "123-456-7890";

// console.log(userName.length);
// console.log(userName.charAt(0));
// console.log(userName.indexOf("T"));
// console.log(userName.lastIndexOf("r"));

// userName = userName.trim();
// userName = userName.toUpperCase();

// phoneNumber = phoneNumber.replaceAll("-","/");

// console.log(userName);
// console.log(phoneNumber);

let fullName = "Sahil Titarmare";
let firstName;
let lastName;

/*
 *firstName= fullName.slice(0,5);
 *lastName = fullName.slice(5);
 */
firstName = fullName.slice(0,fullName.indexof(" "));
lastName = fullName.slice(fullName.indexOf(" ")+1);
console.log(lastName);
console.log(firstName);
