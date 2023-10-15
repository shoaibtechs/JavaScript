const accountId = 12345 //This variable can not be changed 

var name = "shoaib" // Don't use this because this creates problem in scope. Now

let email = "shoaibbabar524@gmial.com" // Now a days the scope problem is solved by 'let'. Always use this and 'const'.

password = 44324 // Also this is possible but it is not recommended 


console.log(accountId,email);

console.table([accountId,email,password]) //Incase want to print all variables with indexes.... Also it can be done with console.log but its good to do with this 

