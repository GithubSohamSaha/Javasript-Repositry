let score = "33"

//we can convert string to number using Number() function
scoreNumber = Number(score)
console.log(typeof score)
console.log(typeof scoreNumber)

let newScore = "333abc"
newScoreNumber = Number(newScore)

//this will return NaN because the string contains alpha-numeric characters and cannot be converted to a number
console.log(typeof newScore)
console.log(typeof newScoreNumber) 

let value = null
newValue = Number(value)
//this will return 0 because null is converted to 0 when converted to number
console.log(typeof value)
console.log(typeof newValue)

let value2 = undefined
newValue2 = Number(value2)
//this will return NaN because undefined cannot be converted to a number
console.log(typeof value2)
console.log(typeof newValue2)

let value3 = 1
newValue3 = Boolean(value3)
//this will return true because 1 is converted to true when converted to boolean
//same as 0 is converted to false when converted to boolean
console.log(typeof value3)
console.log(typeof newValue3)

let value4 = ""
newValue4 = Boolean(value4)
//this will return false because empty string is converted to false when converted to boolean
//in same way any non-empty string is converted to true when converted to boolean
console.log(typeof value4)
console.log(typeof newValue4)

