const h1 = document.querySelector(".hello h1");


const  handleTitleClick = () =>{
   const currentColor = h1.style.color;
   if(currentColor === "blue") currentColor = "tomato";
   else currentColor = "blue";
   console.log("title was clicked");
}


h1.addEventListener("click", handleTitleClick);