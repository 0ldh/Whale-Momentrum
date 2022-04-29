const h1 = document.querySelector(".hello h1");


const  handleTitleClick = () =>{
   if(h1.style.color == "blue") h1.style.color = "tomato";
   else h1.style.color = "blue";
   console.log("title was clicked");
}


h1.addEventListener("click", handleTitleClick);