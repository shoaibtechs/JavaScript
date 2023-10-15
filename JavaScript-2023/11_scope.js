var  a = 10 

if(true)
{

    var a =  2222;

    console.log(a);

}
//Remeber we have change the value of 'a' in local scope but it is changed in the global scope also...
console.log(a);


//To avoid this kind of problem we will use the 'let' datatype. So, if we will chnage the value in local. It will not be changed in gloabal scope 



let  b = 30 

if(true)
{

    let b =  333;

    console.log(b);

}


console.log(b);





//-------------More on scopes--------------------------------------------------

function one()
{
    const username = "shoaib"

    function two()
    {
        const website = "shoaibtechs.wordpress.com"


        console.log(username); //We can acess the function one variable because the second function is also in scope of first 


    }

    // console.log(website); // This will trough na error cause the body of this 2nd function is over we can not acess it


    two()



}


one()


//------------------------------More on Scopes


if(true)
{

    const username = "shoaib"

    if(username == "shoaib")
    {
        const website =  "shoaibtechs.wordpress.com"

        console.log(`My name is ${username} and my website is ${website}`);



    }


    //console.log(website) // This will through an error... Think why ??
 

}


// console.log(username); // this will aslo through an error 



//--------------By this declarion of the function we can call the function before its declaration.......

console.log(addOne(5));


function addOne(num)
{
    return num+1


}



//--------------By this declarion of the function we can't call the function before its declaration.......

// addTwo(5) this will through an error 

const addTwo = function(num)
{

        return num+2
}








