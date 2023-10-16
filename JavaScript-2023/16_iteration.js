// For loop 

for(let i=0; i<10; i++)
{

    console.log(i);


    if(i==5)
    {
        console.log("5");

    }

}





let myArray = ["Shoaib", "Akhtar","babar"]

for(let i=0; i< myArray.length; i++)
{
    const element = myArray[i];  
    console.log(element);

} 


//------------------While loop-----------------------------------------------

let index = 0;

while (index <=10)
{
    console.log(`The value is ${index}`);
    index++;

}

let myArray2 = ["Shoaib", "Akhtar","babar","Hello","123"]

let index2 = 0

while(index2< myArray2.length)
{
    let element = myArray2[index2]
    console.log(element)
    index2++;

}




//------------------do While loop-----------------------------------------------


let score = 10

do {
        console.log(`Current score is ${score }`);
        score --; 

        if(score == 5)
        {

            console.log(`Gameover`);
        }


}   while(score>5);

