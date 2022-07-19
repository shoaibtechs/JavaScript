let elem = document.getElementById('click');
console.log(elem);


let elemClass = document.getElementsByClassName('container');
console.log(elemClass);

elemClass[0].style.background = "yellow";



//Now adding a class 

elemClass[0].classList.add("bg-primary")
elemClass[0].classList.add("text-sucess")


console.log(elem.innerHTML);
console.log(innerText);

console.log(elemClass[0].innerHTML);
console.log(elemClass[0].innerTExt);


var tn = document.getElementsByTagName('div')
console.log(tn)

 let createdElement  = document.createElement('p');
 createdElement.innerText = "This is a create para";
 tn[0].appendChild(createdElement);
 
 
 let  createdElement2  = document.createElement('b');
 createdElement2.innerText = "This is a created bold";
 tn[0].replaceChild(createdElement2, createdElement);

//Selecting using Query 

sel = document.querySelector('.container');
console.log(sel);

sel =  document.querySelectorAll(".container");
console.log(sel);
