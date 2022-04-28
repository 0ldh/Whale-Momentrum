const title = document.querySelector(".hello h1");


const  handleTitleClick = () =>{
   title.style.color = "blue"
   console.log("title was clicked");
}

const handleMouserEnter = () => {
   title.innerText = "Mouse is here!"
}

const handleMouserLeave = () => {
   title.innerText = "Mouse is gone!"
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter",handleMouserEnter);
title.addEventListener("mouseleave",handleMouserLeave);