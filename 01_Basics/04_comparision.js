// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// this type of comparison is called type coercion, where the string is converted to a number before comparison
// console.log("2" > 1);
// console.log("02" > 1);

//Intersting, here null > 0 is false, null == 0 is false, but null >= 0 is true.
// the reason is that am equality check (==) and comparison check (>, <, >=, <=) are different. 
// Comparioson converts null to number, treating it as 0, while equality check does not convert null to number.
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === this is called strict equality check, where the type of the operands are also checked along with the value.

console.log("2" === 2);