console.log("-------------------------------Example-1---------------------------------")



let score = "33"

console.log(typeof(score))

let valueInNumber = Number(score) //Type casting

console.log(typeof(valueInNumber)) 

// See the Below example 


console.log("--------------------------------------------Example-2-----------------------------------------------")

let score2 = "33aa"

console.log(typeof(score2))

let valueInNumber2 = Number(score2) //Type casting

console.log(typeof(valueInNumber2)) 

console.log(valueInNumber2) // This will print NaN. It means not a Number...


// "33" => 33
// "33abc" => NaN
// true => 1; false =>0 


console.log("--------------------------------------------Example-3-----------------------------------------------")

let isLoggedIn = 1

console.log("isLoggedIn: ", isLoggedIn)

let booleanIsLoggedIn =  Boolean(isLoggedIn)

console.log("booleanIsLoggedIn: ", booleanIsLoggedIn)
    

//  1 => true 
//  0 => flase
//  "shoaib" => true 
//  " "      => false 







//---------------------------------------------Operations-----------------------------




let value = 3

let negValue = -value 


console.log(negValue)


let str1 = "hello, "
let str2 = "Shoaib"


let str3 = str1 + str2 

console.log(str3)



console.log("1" + 2 + 2)      
console.log( 1 + 2 + "2" ) //Bad Practice 

console.log((3+4) + "5")  //Always use paranthesis...



let num1, num2 , num3 

num1 =  num2 = num3 = 5 //Bad practice...


// ---------------------Prefix increment VS Postfix Increment -------------------------------------------

let gameCounter = 100;
let result = ++gameCounter; // gameCounter becomes 101, and result is also 101


let gameCounter = 100;
let result = gameCounter++; // result is 100, gameCounter becomes 101 after this line




