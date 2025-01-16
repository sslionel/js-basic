const name = "satwik"
const age = 22
// console.log(name + " " + age + " years"); //this is an outdated way to use this syntax
// we now use backticks ` `, it's advantage is "string interpolation" which is that we can inject any variable `inside the placeholders which we have created.
console.log(`my name is ${name} and i am ${age} years old.`);

// another way to declare string
const newGame = new String('hitesh-hc-com') //string is an object don't confuse it as array
console.log(newGame);
console.log(newGame[0])
console.log(newGame[1])
console.log(newGame[2])
console.log(newGame[3])
console.log(newGame[4])

// we can also access various prototypes using following syntax
// console.log(newGame.__proto__)

console.log(newGame.length)
console.log(newGame.toUpperCase()) //but remember the original value is not changed as string is primitive datatype and is accessed by copy by value.
console.log(newGame.charAt(3))// here u will get the char at the particular index.
console.log(newGame.indexOf('o'))// here u will get the index at which the particular char is at.

// suppose we need to slice into substrings
const newString = newGame.substring(0,2) // 0(start) to (end-1) eg: Ma  //substring doesn't take negative values it considers it as 0 and starts from there only.
// console.log(newString)

const anotherString = newGame.slice(0,2)
// console.log(anotherString)

const anotherString1 = newGame.slice(-8,4) //we can also take negative values in these cases
console.log(anotherString1)

// trim method
const string1 = "   satwik   " //these situations occur when on website a user by mistake adds spaces or extra characters
// which is not needed so we remove the spaces. eg:
console.log(string1)
console.log(string1.trim())


// replace method
const url ="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))

// u can even check if a word is present in string or not
console.log(url.includes('hitesh')) //true
console.log(url.includes('satwik')) //false



//convert string to arrays
console.log(newGame.split('-'))  //syntax: split(separator, limit) or split(separator)