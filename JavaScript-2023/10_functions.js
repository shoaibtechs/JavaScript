function sayMyName(){

    

    console.log("Hello World ")



}



sayMyName()



//code to add two numbers 

function addNumbers(number1, number2)
{

    return number1 + number2 

}

num1 = 8
num2 = 2
const result  = addNumbers(8,2)

console.log(`The sum of ${num1} and ${num2} is:  ${result}`)


//--------------------------------------------Use a function to user logged in -----------------------------------------------------------------


function userLoggedIn(username) // default value  (username =  "sam")

{


    if (username ===  undefined) // if(!username)
    {

        console.log("Please eneter the useer name ")

        return 

    }

    return `${username} logged in Sucessfully!`


}


const result2 =  userLoggedIn("Shoaib Akhtar")

console.log(result2)


//If we pass more values as a parameter

function calculateCartPrice(...num1) // If we dont use 'rest operator then it only returns the first parameter '
{
    return  num1 

}


console.log(calculateCartPrice(200,222,4442,222))



//How to pass on object in a function 

const user = {

        userName:  "Shoaib",
        id : 123,
        caste: "babar"

}


function handleObject(anyobject)
{
        console.log(`UserName is ${anyobject.userName} and id is ${anyobject.id} `)


}

handleObject(user) //passing the object as a parameter 


/* aslo we can directly pass an object 


 handleObject({

    username: 'sam',
    price : 00

})

*/


//Passing an array as a paramter to a function  

const newArray = [33,33,2,3,3,3,44]

function showArray(anyArray)

{

    console.log(`The value od an array is: ${anyArray}`)

    // return anyArray[1] ....// Also this can be done 

}

showArray(newArray)


