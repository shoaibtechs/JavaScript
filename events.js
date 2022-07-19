function clicked(){

    console.log("The button was clicked.")


}

window.onload = function()
{
    console.log("The document was loaded")

}

firstContainer.addEventListener('click',function(){

    console.log("Clicked on container")



})


firstContainer.addEventListener('mouseover',function(){

    console.log("mouse on container")



})


firstContainer.addEventListener('mouseout',function(){

    console.log("mouse out of container")

})
