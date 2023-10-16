// For of


const arr = [1,2,3,4,5]

for(const num of arr)
{
    console.log(num);

}



const string1  =  "Hello World"

for(const value of string1 )
{
    console.log(value);

}

//----------------------------Maps---------------------------------------------------

const map =  new Map()

map.set("IN", "India")
map.set("USA", "United States Of America ")
map.set("IN","India") //We can not give the same 'key' but we can give the same 'value' 


//console.log(`Printing the values of MAP ${map}`);



for(const [key, value] of map)
{
    console.log(key, ":-", value);



}



//Objects are not iterable with "for of" loop. We have to use the "for in" loop for the objects...



//---------------for in loop on object -------------------------------
const myObject  = {

    "name":"shoaib",
    "fatherName":"GhulamQadir",
    "caster":"babar"



}

for(const key in myObject)
{

    console.log(`${key} shortcut is for ${myObject[key]}`)

}





// for in loop on array will rerturn us index of anArray.


const programing = ["Js","rb", "py", "java", "cpp"]


for( const key in programing)
{

    console.log(key)

}




//COnclusion for 'objects' we will use the 'for in' loop and for the arrays we will use 'for of' loop.