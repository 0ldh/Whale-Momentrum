"use strict";
var searchBox = document.querySelector('.searchbox');
var search = searchBox === null || searchBox === void 0 ? void 0 : searchBox.querySelector('input');
var searchImg = searchBox === null || searchBox === void 0 ? void 0 : searchBox.querySelector('img');
var handleFocus = function () {
    searchBox.style.backgroundColor = 'White';
    searchImg.style.filter = 'grayscale(0)';
};
var handleFocusOut = function () {
    searchBox.style.backgroundColor = 'hsla(0,0%,100%,.5)';
    searchImg.style.filter = 'grayscale(1)';
    search.className = 'hidden';
};
var doSearch = function (event) {
    if (event.key === 'Enter') {
        var val = search.value; // 검색 할 내용
        window.location.href = "https://google.com/search?q=".concat(val);
    }
};
search.addEventListener('focus', handleFocus);
search.addEventListener('focusout', handleFocusOut);
search.addEventListener('keyup', doSearch);
