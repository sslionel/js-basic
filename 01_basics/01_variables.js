const accountId = 21052703 //this cannot be changed 
// rest all the values below this can be changed because they are not constant
let accountEmail = "satwikbksc@gmail.com"
var accountPassword = "12345"
// there are 2 ways to declare a variable in javascript i.e. let and war, but we dont use var because 
// ( {} -> these curly braces means scope ) of issue in black scope and functional scope, so always prefer let which dosesn't have thses issues.

// in js without writing anything before a variable name we can reserve the memory of a variable though this is not 
// the correct thing to prefer.
accountCity = "Bokaro"

let accountState //if in js we dont assign any value to a declared variable then js considers it as 'undefined'. 

// print in a table format
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) 