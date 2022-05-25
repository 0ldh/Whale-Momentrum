//* 검색창
const searchBox = document.querySelector(".searchbox"); // 검색창 전체 태그 선택 
const search = searchBox.querySelector("input"); // 검색창 태그 선택
const searchImg = searchBox.querySelector("img"); // 검색창 구글 로고 넣을 태그 선택

//* 검색창 focus 함수
const handleFocus = () => {
    // 스타일 변경 코드
    searchBox.style.backgroundColor = "White"; // 배경색
    searchImg.style.filter = "grayscale(0)"; // 흑백
};

//* 검색청 focusOut 함수
const handleFocusOut = () => {
    // 스타일 변경 코드
    searchBox.style.backgroundColor = "hsla(0,0%,100%,.5)";  
    searchImg.style.filter = "grayscale(1)";
    search.placeholder.color = "white";
};

//* 검색 함수
const doSearch = (event) => {
    if (event.keyCode === 13) { // 키코드가 엔터키일 경우 (EnterKeyCode = 13) 
        const val = search.value; // 검색 할 내용
        location.href = `https://google.com/search?q=${val}` // 검색 결과 페이지로 이동
    }
}

search.addEventListener("focus", handleFocus); // 검색창 focus 이벤트 시 handleFocus 함수 실행
search.addEventListener("focusout", handleFocusOut); // 검색창 focusOut 이벤트 시 handleFoucsOut 함수 실행 
search.addEventListener("keyup", doSearch); // 검색창에서 key 이벤트 발생 시 doSearch 함수 실행

//? HSLA 색상 값은 색상의 불투명도를 지정하는 알파 채널을 사용한 HSL 색상 값의 확장입니다. alpha 매개 변수는 0.0 (완전 투명)과 1.0 (완전 불투명) 사이의 숫자
//? keyup : 키가 떼어졌을 때