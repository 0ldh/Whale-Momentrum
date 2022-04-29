const h1 = document.querySelector(".hello h1");


const  handleTitleClick = () =>{
   const currentColor = h1.style.color;
   let newColor;

   if(currentColor === "blue") newColor = "tomato";
   else newColor = "blue";

   h1.style.color = newColor;
   console.log("title was clicked");
}


h1.addEventListener("click", handleTitleClick);