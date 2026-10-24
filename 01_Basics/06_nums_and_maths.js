const score = 100
console.log(score);

//another way to declare a number
const score2 = new Number(100) // this is called number object, it is not recommended to use this way to declare a number because it is slower than the primitive way and it can cause unexpected behavior in some cases.
console.log(score2);

//some imp methods of number object
console.log(score2.toString()); // this method is used to convert a number to a string.
console.log(score2.toFixed(2)); // returns a string representation of the number with a specified number of decimal places.

const num = 10.123456789
console.log(num.toPrecision(5)); // returns a string representation of the number with a specified number of significant digits.    

console.log(num.toLocaleString()); // returns a string representation of the number with a specified locale and formatting options. It is used to format numbers according to the conventions of a specific locale, such as adding commas as thousands separators or using a different decimal separator.


// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // returns a random number between 0 (inclusive) and 1 (exclusive)
console.log((Math.random()*10) + 1); // returns a random number between 1 (inclusive) and 11 (exclusive)
console.log(Math.floor(Math.random()*10) + 1); // returns a random integer between 1 (inclusive) and 10 (inclusive)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
//expresssion explanation: Math.random() generates a random number between 0 and 1. Multiplying it by (max - min + 1) scales it to the desired range, and adding min shifts the range to start from the minimum value. Finally, Math.floor() rounds down to the nearest integer, ensuring that the result is an integer within the specified range.

