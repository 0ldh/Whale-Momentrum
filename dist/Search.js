"use strict";
const searchBox = document.querySelector('.searchbox');
const search = searchBox === null || searchBox === void 0 ? void 0 : searchBox.querySelector('input');
const searchImg = searchBox === null || searchBox === void 0 ? void 0 : searchBox.querySelector('img');
const handleFocus = () => {
    searchBox.style.backgroundColor = 'White';
    searchImg.style.filter = 'grayscale(0)';
};
const handleFocusOut = () => {
    searchBox.style.backgroundColor = 'hsla(0,0%,100%,.5)';
    searchImg.style.filter = 'grayscale(1)';
    search.className = 'hidden';
};
const doSearch = (event) => {
    if (event.key === 'Enter') {
        const val = search.value; // 검색 할 내용
        window.location.href = `https://google.com/search?q=${val}`;
    }
};
search.addEventListener('focus', handleFocus);
search.addEventListener('focusout', handleFocusOut);
search.addEventListener('keyup', doSearch);
