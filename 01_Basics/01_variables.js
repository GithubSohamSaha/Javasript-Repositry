/*
Today we will learn about variables in JavaScript.
Variables are used to store data that can be used later in the program.
Variables can hold different types of data, such as numbers, strings, and objects.
In JavaScript, we can create variables using the keywords `var`, `let`, or `const`.

The `var` old method of declaring variables, which are not uded anymore because of some issues.
which are:
1. Variables declared with `var` are function-scoped, meaning they are only accessible within the function they are declared in.
2. Variables declared with `var` can be re-declared and updated within the same scope, which can lead to confusion and bugs in the code.
3. Variables declared with `var` are hoisted to the top of their scope, meaning they can be used before they are declared, which can lead to unexpected behavior.
4. Variables declared with `var` do not have block scope, meaning they are accessible outside of the block they are declared in, which can lead to unintended consequences.

The `let` keyword is used to declare block-scoped variables, which means they are only accessible within the block they are declared in.
The `let` keyword allows you to create variables that can be updated, but not re-declared within the same scope.

The `const` keyword is used to declare block-scoped variables that cannot be updated or re-declared within the same scope.
The `const` keyword is used to declare variables that are constant, meaning they cannot be updated or re-declared within the same scope.
*/

const accountId = 1234567890; // number
var accountName = "John Doe"; // string
let accountBalance = 1000.50; // number
let accountActive = true; // boolean
accountState = "Westbangal"; // string

//if we do noiot initialze any value to the variable then it will be undefined
let accountDistrict

// console.table is used to display data in a tabular format
//syntax - console.table([variable1, variable2, variable3, ...])
console.table([accountId, accountName, accountBalance, accountActive, accountState, accountDistrict]);