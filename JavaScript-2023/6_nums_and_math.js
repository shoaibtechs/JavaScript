const score = 400

console.log(score)

const balance = new Number(100)   // It creates a Number object instead of a primitive number. 
console.log(balance )


console.log(balance.toFixed(2)) // If we want fix numebrs after the decimal


//To find the length of the numebr convert it to string and then use '.length' method on it.
console.log(balance.toString().length); 

//Learn this precision 

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3))


const hundreads = 1000000
console.log(hundreads.toLocaleString()) // Assigns cooma and makes the code readable

//-------------------------------------------------------Maths--------------------------------------------



console.log(Math); //It's an object which has alot of libraries

console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.6))
console.log(Math.min(4,3,6,4,3))
console.log(Math.max(4,3,6,4,3))

/*Below method returns the number between 0 and 1 and. So we want the numebrs between so we will multiply it with 10 and then so the number 
will be converted... For exp if:- 0.323 *10 then it will becomes 3.23. In case if them is 0.023 so we also add 1 in it */


console.log(Math.random()); 


console.log((Math.random()*10) + 1 ); 




const min =  10
const max =  20



console.log(Math.floor(Math.random()* (max - min + 1)) + min )





















