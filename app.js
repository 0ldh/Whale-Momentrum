// ! 변수
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")
const link = document.querySelector("a")
const body = document.querySelector("body");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// ! 함수
const paintGreeting = (username) => {
   greeting.classList.remove(HIDDEN_CLASSNAME);
   greeting.innerText = `Hello ${username}`;
}

const onLoginSubmit = (event) => {
   event.preventDefault();
   loginForm.classList.add(HIDDEN_CLASSNAME);
   const userName = loginInput.value;

   localStorage.setItem(USERNAME_KEY, userName);
   
   paintGreeting(userName);

   console.log(userName);
}

// ********************************************************
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
   // USER NAME이 저장되어 있는 경우
   loginForm.classList.remove(HIDDEN_CLASSNAME);
   loginForm.addEventListener("submit", onLoginSubmit)
} else {
   paintGreeting(savedUsername);
}

// preventDefault() =>  기본동작을 막아줌
// addEventListener => 이벤트를 매개변수로 함수를 실행한다

