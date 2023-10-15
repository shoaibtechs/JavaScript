//In javaScript whenever we create the copy of an array. The shallow copy is being created. See the differnce in shallow and Deep copy.
const myArr = [88, 1, 323, 3, 4, 5]

const myHeros = ["spiderMan", "batMan", "Hatim"]

console.log(myArr[0])



//2nd Method to create an array in JavaScript...

const myArr2 = new Array(45,2,3,4)

console.log(myArr2[0])


//---------------Array Methods-------------------------------------


//1.--------------The psuh add the element at last index and pop removes the element at last  index-----------------

myArr.push(876)


console.log(myArr)


myArr.pop() 

console.log(myArr)


//2.------------------The unshift add the element at 0th index and shift removes the element at 0th index


myArr.unshift(23294)

console.log(myArr)

myArr.shift(23294)

console.log(myArr)


//3.-----------------includes method tell us that the values exists in the array or not...

console.log(myArr.includes(9)) //It returns a Boolean dataType 



//4.-----------------indexOf method tells us the index of an element and if an element is not presnet then it return -1.
console.log(myArr.indexOf(78))


//5.----join() method converts the array into the string

const newArr =  myArr.join()

console.log(`After converting myArr into the newArr the type of the newArr is ${typeof(newArr)}`)




//6. --------------------------Slice and Splice ----------------------------------------

 // i-Slice just make the copy of of array and also the last element of range is not included 
 // ii-While Splice does the work like 'cut' it removes elements from original array and then puts in 2nd and also in splice 
 //the first parameter is starting index while second is, how many elements want to remove....

 const arr1 =  [0, 1, 2, 3, 4]
 console.log("arr1 ", arr1)

 const arr2 = arr1.slice(0,3) //2 will not be included. Its kind of loop 
 console.log("arr2 ", arr2)
 console.log("After aplying slice() method the arr1, ",arr1)


 const arr3 = arr1.splice(1,3) //(startingIndex, noOfElementsWanttoRemove)
 console.log("arr3 ", arr3)
 console.log("After aplying slice() method the arr1, ",arr1)    

 const marvel_heros =  ["thor", "Ironman", "SpiderMan"] 

 const dc_heros = ["Superman", "Hatim", "SonPari"]

 marvel_heros.push(dc_heros) //It will take a whole array as an element 

 console.log(marvel_heros)

 console.log(marvel_heros[3][1]) //Hatim will be printed 



 const allHeros =  marvel_heros.concat(dc_heros) //It return a new array 

 console.log(allHeros)


 //If we want to merget more arrays then we will use the below method called "Spread Operator "


 const all_new_heros =  [...marvel_heros, ...dc_heros]

console.log(all_new_heros)





//If we are  get into this situaton then in this way we can escape from it...

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]] ]

const real_another_array = another_array.flat(Infinity)


console.log(real_another_array)



//Want to check whether it is an arrya or not 

console.log(Array.isArray("Shoaib"))

//We can create an array from anything using the below method 

console.log(Array.from("Shoaib"))


console.log(Array.from({name:"shoaib"})) //Interview Question


//If we want to convert the variables into an arrya 


let score1 =100

let score2 = 200

let score =  300



console.log(Array.of(score1,score2, score3))








 









 







