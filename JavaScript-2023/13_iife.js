//Immediately Invoked Function Expressioin (IIFE)

//Interview Question...Global scope ke pollution se problem hoti hai kayee baar so, global scope ki pollution ko hatana ke liye 'iife' use karte hain 

//Global



//named IIFE 
(   function hello()
{


        console.log("DB connected");
}) ();


//IIFE function can be written as below arrow function and called as unnamed IIFE 


((name) => {
    console.log(`DB connectedTWO ${name} `)

}) ();