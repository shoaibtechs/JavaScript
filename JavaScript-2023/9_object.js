
//Object Literals 




//Declaring the symbol and make it act like a key values--------___Interview Question 



const mySym =  Symbol("key1")


const JsUser = {

        name:"Shoaib", //'name' will also treated as string 
        age :  23, 
        "Father's  Name": "Ghulam Qadir" ,//we can't acess this with dot method...

        [mySym]: "mykey1", //---------------------------------------interview Question 
        location: "Peshawar",
        email: "shoaibbabar524@gmail.com",
        isLoggedIN: false,
        lastLoginDays: ["Monday","wednesday"]


}

//Two methods to acess the objects 


console.log(JsUser.email)
console.log(JsUser["email"])

console.log("Father's name ") //This can be only acesses with this method 

console.log(JsUser[mySym]) 



//Changing the values of obnjects

JsUser.email = "akhtarbabar1232@gmail.com"


//If you want that noone want to make changes in my objects then just add the freeze with it..


// Object.freeze(JsUser) //Noone will change my object 


JsUser.greeting = function()
{
        console.log("hello JS User") //Simply we are printing an string 

}

JsUser.greetingTwo =  function()
{
        console.log(`Hello js User, ${this.name}`) //Refering the name which is in  object 


}


console.log(JsUser.greeting())

console.log(JsUser.greetingTwo())




//-------------------------------Singelton Objects -------------------------------------------------

const tinderUser1 = new Object() //Singleton object 

const tinderUser2 = {} // Non singleton object. No difference in above and this. Only remember singleton and nonsingleton...while interviews 

console.log(tinderUser1)

console.log(tinderUser2)


tinderUser1.id = "123abc"
tinderUser1.name = "Shoaib"
tinderUser1.isLoggedIN =  false 


console.log(tinderUser1)


// Object within Object 

const regularUser = {

        email : "some@gmail.com",
        fullName: {

                userFullName: {

                        firstName: "akhtar ",
                        lastName: "babar"


                }


        }
}

console.log(regularUser.fullName.userFullName.firstName)



//-----------------------------Merging two objects---------------------

const obj1 = {"A":1, "B": 2}
const obj2 = {"C":2, "D":2 }
const obj3 = {"E":3, "F":4}

//cosnt obj3  =  {obj1,obj2}

const obj4  =  Object.assign({}, obj1,obj2,obj3)

console.log(obj4)




//--------Spread method to join the objects..90% we use this method 

const obj5 =  {...obj1, ...obj2, ...obj3}
console.log(obj5)



// From database the values come in the form of array objects....like below 


const users = [

{
        id:1,
        email: "shoaib@gmail.com",

}


]
console.log(users[0].id)
console.log(users[0].email)


//Get the keys of an object in an array 


console.log(tinderUser1)


const arr1  =  Object.keys(tinderUser1)
console.log(arr1)
console.log(arr1[0])


//Get the values of an object in an array 

console.log(tinderUser1)  //Just printing the already created object for better understanding 

const arr2  =  Object.values(tinderUser1)
console.log(arr2)
console.log(arr2[0])


console.log(tinderUser1.hasOwnProperty('isLoggedIN'))



//Obejct Destructing and JSON API



const course =  {

        coursename: "jaVaScript ",
        price: "999",
        courseInstructor: "Hitesh"

}

const {courseInstructor: instructor } =  course 

console.log(instructor )


























