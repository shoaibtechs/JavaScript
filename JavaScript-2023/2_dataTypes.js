"use strict"; //treat all JS code as newer version 

// alert(3+3) //We're using nodejs, not browser. So it will not work. :)


let name = "shoaib" //String 
let age = 23         // Number 
let honest = true    //Boolean 

let caste =  null // If we dont want to give value;

let password  // Undefined 

console.log(typeof(honest)) 

//Interview Questions while Job

console.log(typeof(undefined)) //'undefined' 
console.log(typeof(null)) // 'Object'. Its a fault of language.



//---------------------------DataTypes Interview questions------------------------------------

/* 

Primitive DataTypes :- If we make any changes in these. It doesn't affect the original one. It will change the value of the copy

seven types: String, Number, Boolean, null, undefined, Symbol, BigInt
*/  



//Reference (Non premetive)----------------three types:- Array, Objects, Functions

//Array 
const heros = ["Shoaib", "Akhtar", "Babar"]

//Object 

let myObj = {

    fName:"shoaib",
    lName: "akhtar"
}

//Functions

const Myfunction = function()
{
        console.log("Hello World")

}










/*
2:- JJavaScript is a dynamically typed language. This means that the data type of a variable is determined at runtime, 
not at the time of compilation. In JavaScript, you can use a variable to store different types of data, and you can 
change the type of a variable during the execution of the program.

example:
         let number = 42

 Static typed Language:- C, C++ 

 example: 
         int number = 23

*/



const id =  Symbol("123")
const anotherId = Symbol("123")

console.log(id)
console.log(anotherId)

console.log(id == anotherId)







//-------------------------------------------------------------------------

//Primitive values goes into Stack. And No premetice goes into (Heap)
let myName1 = "shoaib"

let myName2 = myName1

 myname2 =  "akhtar"

 console.log(myName1)
 console.log(myName2)

 







