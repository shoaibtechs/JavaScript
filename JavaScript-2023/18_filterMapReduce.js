const myNums = [1,2,3,4,5,6,7,8,9,10]


// //Opening the paranthesis so, we have to write the "return" word


let newNums1 =  myNums.filter( (val) => {
            
        return val >4  
})



// //Dont have to use the retuen word. Because we are not using the paranthesis 
let newNums2 = myNums.filter( (num) =>   num > 4 ) 

    console.log(newNums2);




    


    const books = [
        { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
        { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
        { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
        { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
        { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
        { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
        { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
        { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
        { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
      ];


    
     // Real life project example...getting a values from array with object whose "genre is fiction"

      let newUser =  books.filter( (bk) => bk.genre === 'Fiction')  //"bk is pointing at all objects"

     console.log(newUser);



     //Print those books which are published after 2000

     let bookUser =  books.filter(  (bk)  => bk.publish > 2000  )

     console.log(bookUser);



    //----------------------------------MaP method----------------------------------------


    const myNumbers1 = [1,2,3,4,5,6,7,8,9,10 ]

    const newNum3 = myNumbers1.map( (num) => num+10)

    console.log(newNum3)




      //The below code is called chaining. We can also use filter method after an map and viceversa


    const myNumbers2 = [1,2,3,4,5,6,7,8,9,10]

    const newNum4 = myNumbers2
                    
                    .map((num)  => num *10 )
                    .map((num)   => num +1 )
                    .filter(  (num) => num >= 25 )



    

//----------------------Reduce Method------------------------------------------------------------------------

const myNums3 =  [1,2,3]

const myTotal =  myNums3.reduce(function (acc,curVal) {

    console.log(`acc: ${acc} and  curVal: ${curVal} `);
    return acc + curVal

},0)

console.log(myTotal);

//Writing the above function with an arrow function 

const mytotal1 =  myNums3.reduce ( (acc,curr) => acc+curr,0 )
console.log(mytotal1);


//add the price of all courses 



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);



