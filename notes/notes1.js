// on the basis of the way you keep or store data in memory and the way you can access your data datatypes are divided into
// 2 types :
// 1.primitive datatype: (call by value)
// ->Boolean
// ->String
// ->Number
// ->Bigint
// ->null
// ->undefined
// ->Symbol

// 2. non primitive datatype: (call by reference)
// -> arrays
// -> objects
// -> functions


// is js dynamically typed language or statically typed language?


// there is nothing special for decmials like float we represent all number as same in js
const num = 100
const decimal = 100.3

// usage of symbol
const id = Symbol('123')
const id2 = Symbol('123')
console.log(id === id2) //even if we take same value inside the symbol operation we will get unique representation only.

// arrays
const heroes = ["superman","batman"]

// objects: we write objects inside curly braces and inside we write in format of key value pairs
let myobj = {
    name: "satwik",
    age: 22
}

// function

const myFunction = function(){
    console.log("Hello World")
}





