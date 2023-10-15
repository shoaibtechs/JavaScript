console.log(null >  0)
console.log(null == 0)
console.log(null >=0 )

/* 
The reason is that an equality check "==" and comparison check ">=" work differenly. Comparison convert null to a number, treting 
as 0. That's why (3) null >=0 is true. (1) null > 0 is false.   
*/

