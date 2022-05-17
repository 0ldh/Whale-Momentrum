const searchBox = document.querySelector(".searchbox");
const search = searchBox.querySelector("input");

console.log(search);
console.log(searchBox);

const handleOp = () => {
    searchBox.style.opacity = "1";
}


search.addEventListener("focus", handleOp)
search.addEventListener("focusout", ()=> {
    searchBox.style.opacity = "0.5";
})