//For Loop
//Ist Method to iterate from an array using for each

var arr  =  [1,2,3,4,6,99];

for(var i = 0; i<arr.length; i++)
{

    console.log(arr[i]);

}

//2nd method to iterate from an array using forEach
var arr  =  [1,2,3,4,6,99]
 arr.forEach(function(element)
 {
    console.log(element)

 })

//3rd method with while loop

var arr  =  [1,2,3,4,6,99];

var j = 0;

while(j<arr.length)
{
    console.log(arr[j]);
    j++;
}


//4th Method with do while loop 

let j = 0 ;
do{
    console.log(arr[j]);
    j+=1;



}while(j< arr.length);



//------Continue----------

for(var i = 0; i<10; i++)
{
    if(i==4)
    {
        continue;

        //The loop only will escape this iteration
    }

    else
    {
        console.log(i);

    }

}


//---------Break---------------


for(var i = 0; i<10; i++)
{
    if(i==4)
    {
       break;

       //The Loop will be stopped forever
    }

    else
    {
        console.log(i);

    }

}