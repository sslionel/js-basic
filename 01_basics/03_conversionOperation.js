let score = "33"
console.log(typeof score)

let valueInNumber = Number(score) //this line gurantees that it is changed to number
console.log(typeof valueInNumber)
console.log(valueInNumber)

// now suppose, issues begin from here when its written like given below
let age ="33abc"
console.log(typeof(age))

let valueInNumber2 = Number(age)
console.log(typeof(valueInNumber2))
console.log(valueInNumber2) //it gives NaN i.e. Not a Number this is a problem in js so be carefeul

// what if we try with null
let a =null
console.log(typeof(a))

let b = Number(a)
console.log(typeof(b))
console.log(b) // it gives the value 0

// now try with undefined
let c =undefined
console.log(typeof(c))

let d = Number(c)
console.log(typeof(d))
console.log(d)

// now try for boolean value
let e =true
console.log(typeof(e))

let f = Number(e)
console.log(typeof(f))
console.log(f)

// "33" -> 33
//  "33abc" ->NaN
//  true -> 1
//  false -> 0
//  null -> 0
//  undefined -> NaN

let isLoggedIn = 1 //true
// let isLoggedIn = 0 // false
// let isLoggedIn = "satwik" //true for not empty string
// let isLoggedIn = "" //false for empty string

let bool = Boolean(isLoggedIn)
console.log(typeof(bool))
console.log(bool)


let num =33
let stringNum = String(num)
console.log(typeof(stringNum))
console.log(stringNum)


// ********************operations*********************
let value = 3
let negValue = -value
console.log(negValue)

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**3) //2 raised to the power 3
console.log(2/2)
console.log(2%2)

let str1 = "hello"
let str2= " satwik"
let str3 = str1 + str2
console.log(str3)


//complex situations

console.log("1"+2) //12
console.log(1+"2") //12
console.log("1"+"2") //12
console.log("1"+2+2) //122
console.log(2+1+"2") //32

console.log(true)// true
console.log(+true) //1
console.log(+"")// 0


let gameCounter = 100
let gameCounter2 = gameCounter++;
console.log(`gameCounter:${gameCounter}, gameCounter2:${gameCounter2}`) 
//gameCounter:101, gameCounter2:100

let gameCounter3 = 100
let gameCounter4 = ++gameCounter3;
console.log(`gameCounter3:${gameCounter3}, gameCounter4:${gameCounter4}`)
//gameCounter3:100, gameCounter4:102
