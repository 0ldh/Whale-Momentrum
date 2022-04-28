const title = document.querySelector(".hello h1");


const  handleTitleClick = () =>{
   title.style.color = "blue"
   console.log("title was clicked");
}

const handleMouserEnter = () => {
   console.log("Mouse is here")
}


title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter",handleMouserEnter)