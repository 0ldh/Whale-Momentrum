const searchBox = document.querySelector(".searchbox");
const search = searchBox.querySelector("input");
const searchImg = searchBox.querySelector("img");

const handleFocus = () => {
    searchBox.style.backgroundColor = "White";
    searchImg.style.filter = "grayscale(0)";
    search.placeholder.color = "black";
};

const handleFocusOut = () => {
    searchBox.style.backgroundColor = "hsla(0,0%,100%,.5)";
    searchImg.style.filter = "grayscale(1)";
    search.placeholder.color = "white";
};

const doSearch = (event) => {
    if (event.keyCode === 13) {
        const val = search.value;
        console.log(val)
        location.href = `https://google.com/search?q=${val}`
    }
}

search.addEventListener("focus", handleFocus);
search.addEventListener("focusout", handleFocusOut);

// google.com/search?q= + value값

search.addEventListener("keyup", doSearch);