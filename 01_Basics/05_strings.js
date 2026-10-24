const name = "Soham Saha"
const Value = 100

//string interpolation method: this method is used to combine string and variable values together to form a single string. There are two ways to do string interpolation in JS:
// 1. using + operator
const message = "My name is " + name + " and my age is " + Value
console.log(message);

// 2. using template literals
//Syntax: `My name is ${variable_name1} and my age is ${variable_name2}`
// `` this is called backtick
const message2 = `My name is ${name} and my age is ${Value}`
console.log(message2);

//type of string: there are two types of strings in JS
// 1. primitive string: this is a simple string that is created using single or double quotes. It is immutable, which means that it cannot be changed once it is created.
const primitiveString = "This is a primitive string"
console.log(primitiveString);

// 2. object string: this is a string object that is created using the String constructor. It is mutable, which means that it can be changed after it is created.
const objectString = new String("This is an object string")
console.log(objectString);

//string object members :
/* 
-1. length: this property returns the length of the string.
-2. [[prototype]]: this property returns the prototype of the string object and contains all the methods that can be used on the string object.
-3 [[primitiveValue]]: this property returns the primitive value of the string object.
*/

console.log(objectString.__proto__); // this will return the prototype of the string object and contains all the methods that can be used on the string object.

//importent string methods.
//substring() vs slice(): both methods are used to extract a part of a string, and their output is datatype string, but they have some differences: 
// substring() does not accept negative indices, while slice() does.

const str = "Hello World"
console.log(str.substring(-2, 5));
console.log(str.slice(-2, 5));

//charAt() vs indexOf(): charAt() returns the character at a specified index, while indexOf() returns the index of the first occurrence of a specified character or substring.
console.log(str.charAt(4));
console.log(str.indexOf("o"));

//trim() : this method is used to remove whitespace from both ends of a string.
const str2 = "   Hello World   "
console.log(str2.trim());

//replace() : this method is used to replace a specified value with another value in a string.
//usecase - in URL, we can use this method to replace a part of the URL with another value.
const str3 = "https://www.example%20help.com"
console.log(str3.replace("%20", "-"));

//split() : this method is used to split a string into an array of substrings based on a specified separator into datatype array.
const str4 = "Hello World"
console.log(str4.split(" "));