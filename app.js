const h1 = document.querySelector(".hello h1");


const  handleTitleClick = () =>{
   const clickedClass = "clicked"
   if (h1.className === "clicked") h1.className ="";
   else h1.className = "clicked";
}


h1.addEventListener("click", handleTitleClick);