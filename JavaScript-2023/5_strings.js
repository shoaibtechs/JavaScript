const name = "shoaib"
const rollNo = 50

console.log("My name is " + name + " and my roll no is "+ rollNo  ) //This is outdated and not recommended in JavaScript

console.log(`My name is ${name} and my roll no is ${rollNo} `)


console.log(name.slice(0,3)) //Substring slicing


// 2nd method for to assign a string 



const gameName = new String("Teeken3")

console.log(gameName)



//---------------------------Built in Methods----------------------------------------------------- 

console.log(`The length of the the ${gameName} is ${gameName.length}`) //Find the length of string 

console.log(gameName.toUpperCase())    //Convert string into upperCase

console.log(gameName.charAt(2)) //Find which character is on 2nd position

console.log(gameName.indexOf('e')) //Find the index of 't' character 


//-------------------------------------------StringSlicing--------------------------------------------------


/* substring(startIndex, endIndex)
   slice(startIndex, endIndex) 

The Differece between them is that when we give:-
 
    substring(): If startIndex is greater than endIndex, substring() swaps the two arguments before extracting the substring.

    slice(): If startIndex is greater than endIndex, slice() returns an empty string.


 */

const newString1 = gameName.substring(-7,2)


const newString2 = gameName.slice(-7,7)

console.log(`with substring method the output is  ${newString1}`)

console.log(`with slice method the output is  ${newString2}`)


const newStringOne = "   ShoaibAkhtar   "


console.log(newStringOne.trim()) //It removes the starting and Ending Spaces 



const url = "https: //shoaib.com/akhtar%20"

console.log(url.replace('%20','-'))  //It will replace the string in the url 

console.log(url.includes('shoaib'))    //It will tell us about whether that string is present in this url or not.



let newString = "shoaib Akhtar Babar"

console.log(newString.split(' ')); //It splits the Stirng and creates the stores it an array

///-----Try the string methods they are very importnat----------------------







