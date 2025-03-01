// Array in JavaScript is a global object that is used in the construction of arrays; which are high-level, list-like objects.
// The Array object is used to store multiple values in a single variable. It is often more convenient to use an array than to declare separate variables for each value.
// Array objects can be created using the Array() constructor or the array initializer / literal syntax.
// Array elements are accessed using their index number.
// Array elements are mutable, meaning that they can be changed or reassigned.

let arr1 = [11, 12, 13, 171, "Helloworld", true];
let myHeros = [
  "Batman",
  "Superman",
  "Spiderman",
  "Ironman",
  "Thor",
  "Hulk",
  "Captain America",
  "Black Widow",
];

console.log(arr1);
console.log(myHeros);
console.log(myHeros[2]);
console.log(myHeros[3]);

//* Array Methods
// Push();
// The push() method adds one or more elements to the end of an array and returns the new length of the array.
// Syntax: array.push(element1, element2, ..., elementX)
arr1.push(15);
arr1.push(1911);
arr1.push(1919121);
console.log(arr1);

// unshift()
arr1.unshift(11);
arr1.unshift(11);
arr1.unshift(11);
arr1.unshift(11);
console.log(arr1);

// pop()
// The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
// Syntax: array.pop()
arr1.pop();
arr1.pop();
arr1.pop();
console.log(arr1);

// shift
arr1.shift();
arr1.shift();
arr1.shift();
arr1.shift();
arr1.shift();
arr1.shift();
arr1.shift();
arr1.shift();
arr1.shift();
arr1.shift();
arr1.shift();

console.log(arr1);

console.log(arr1);

// concat()
// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
// Syntax: array1.concat(array2, array3, ..., arrayX)
let arr2 = [14, 15, 16];
let arr3 = arr1.concat(arr2);
console.log("After concat:", arr3);

let isPresentNot = arr3.includes(15);
console.log(isPresentNot);
