const searchBox = document.querySelector(".searchbox");
const search = searchBox.querySelector("input");

const handleFocus = () => {
    searchBox.style.opacity = "1";
};
const handleFocusOut = ()=> {
    searchBox.style.opacity = "0.5";
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