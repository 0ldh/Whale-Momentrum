// ! 변수
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")
const link = document.querySelector("a")
const body = document.querySelector("body");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// ! 함수
const paintGreeting = () => {
   const userName = localStorage.getItem(USERNAME_KEY) // todo localsotrage에서 바로 userName에 저장
   greeting.classList.remove(HIDDEN_CLASSNAME); // todo username을 매개변수로 .hidden 제거
   greeting.innerText = `Hello ${userName}`; // todo #greeting에 username text로 입력
   greeting.style.color = "white";
   greeting.style.zIndex = "2";
}

const onLoginSubmit = (event) => {
   event.preventDefault(); // todo submit 이벤트의 기본행동을 멈춤 (refresh)
   loginForm.classList.add(HIDDEN_CLASSNAME); // todo username을 입력하면 form에 .hidden 추가 후 숨김
   const userName = loginInput.value; // todo user가 입력한 username 변수에 저장

   localStorage.setItem(USERNAME_KEY, userName); // todo username locastorage에 저장
   
   paintGreeting(); // todo paint greeting 함수 실행

   console.log(userName); //
}

// ********************************************************
const savedUsername = localStorage.getItem(USERNAME_KEY); // todo localstorage에 있는 username을 키로 value 값 호출

if (savedUsername === null) { // todo usernmae이 비어있는 경우 
   loginForm.classList.remove(HIDDEN_CLASSNAME);
   loginForm.addEventListener("submit", onLoginSubmit)
} else { // todo username이 입력되어 있는 경우
   paintGreeting();
}

// ? ClassList => 해당 HTML이 가지고 있는 클래스 목록
/* remove(x) : x라는 이름의 클래스명 제거 
   add(x) : x라는 이름의 클래스명 추가
   toggle(x) : x라는 이름의 클래스명이 있을 경우 제거 or 추가 */
// ? preventDefault() =>  기본동작을 막아줌
// ? addEventListener => 이벤트를 매개변수로 함수를 실행한다

