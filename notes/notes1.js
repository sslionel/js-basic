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


// ******************************Memory***********************
// 2 types:
// -> stack (all primitive datatypes uses stack memory and if we pick anything from stack we always get a copy of it)
// -> heap (all non primitive datatypes uses heap memory and if we pick anything from heap we always get a reference of it)

// primitive eg:
let name1 = "satwik"

let name2 = name1
console.log(name2)

name2 = "shivangi"
console.log(name2) //this is changed
console.log(name1) //this remains same bcoz a copy of name1 was assigned to name2.


// non primitive (call by ref)
let user1 = { //all this content goes to heap 
    email: "user@gmail.com",
    upi: "user@icici"
}

let user2=user1 //here same ref of user1 is assigned to user2 not a copy.

user2.email = "user2@gmail.com"
console.log(user1.email) //we can se here that user1.email has been changed 
console.log(user2.email)






