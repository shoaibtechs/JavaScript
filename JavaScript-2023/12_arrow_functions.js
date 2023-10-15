const user =  {

    username: "shoaib",
    price: 999,

    //To declare a function in object 

    welcomeMessage: function()
    {
        console.log(`${this.username} welcome to my website`);

    
    }

}

user.welcomeMessage()
user.username = "Akhtar"
user.welcomeMessage()



//We can not use 'this.' in the function it only works in objects 

const  hello1 = function()
{
        const myname =  "shoaib"

        console.log(this.myname); // The output will be 'undefined'
}

hello1()


//also we can't use 'this' here
const  hello2 = () =>
{
        const myname =  "shoaib"

        console.log(this.myname); // The output will be 'undefined'
}

hello2()



const addTwo =  (num1, num2) => {

return num1 + num2 



}


console.log(addTwo(3,4))

//the upper function can be written as the below functiona nd it will be called as the "Implicit return"

const addTwoNum =  (num1, num2) =>  (num1 + num2) 
    
    
    
    
    
    
    console.log(addTwoNum(3,4))


//Returning the object using arrow function 


 const returnObject = (name) => ({"username":name})    

console.log(returnObject("shoaib"));