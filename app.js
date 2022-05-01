const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")
const link = document.querySelector("a")
const HIDDEN_CLASSNAME = "hidden"
const body = document.querySelector("body");

const onLoginSubmit = (event) => {
   event.preventDefault();
   loginForm.classList.add(HIDDEN_CLASSNAME);
   const userName = loginInput.value;

   localStorage.setItem("username", userName);

   greeting.innerText = `Hello ${userName}`;
   greeting.classList.remove(HIDDEN_CLASSNAME);

   console.log(userName);
}

const onLoadBody = () => {
   if (localStorage.getItem("username")) {
      const userName = localStorage.getItem("username"); 
      greeting.innerText = `Hello ${userName}`;
      loginForm.classList.add(HIDDEN_CLASSNAME);
      greeting.classList.remove(HIDDEN_CLASSNAME);

      console.log("LOAD")
   } 
}


body.addEventListener("load", onLoadBody)
loginForm.addEventListener("submit", onLoginSubmit)


// preventDefault() =>  기본동작을 막아줌
// addEventListener => 이벤트를 매개변수로 함수를 실행한다

