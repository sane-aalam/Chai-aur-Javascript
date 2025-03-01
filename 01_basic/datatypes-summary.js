// #primitive data types
// #non-primitive data types
// #reference data types
// #value data types
// #object data types
// #function data types
// #undefined data types
// #null data types

//primitive
const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;
console.log(userEmail); // undefined

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

// storing large number (BigInt)
const bigNumber = 2323232323232323232323232n;

//Reference (Non-primitive datatype)
const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
  name: "sarfaraz",
  age: 17,
};

//* Mostly used data types in javascript(asked in interview)
//* #stack memory
//* #heap memory
// C++ (call by value and call by reference)
// Java (call by value and call by reference)
// JavaScript (call by value and call by reference)
// Copy of actual data not actual Data (call by value)
// Actual Data (call by reference)

let currentGmailAccount = "sane@gmail.com";
let updateGmailAccount = currentGmailAccount;
updateGmailAccount = "mynamesane@gmail.com";
console.log(currentGmailAccount);
console.log(updateGmailAccount);

let userInfromation = {
  email: "user@gmail.com",
  upi: "user@ybl",
  number: "919191001",
};

let updateUserInformation = userInfromation;
updateUserInformation.email = "sane@gmail.com";
console.log(updateUserInformation);
console.log(userInfromation);
