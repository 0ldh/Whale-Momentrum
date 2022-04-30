const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

const onLoginBtnClick = () => {
   console.log("Hello", loginInput.value);
}

loginButton.addEventListener("click", onLoginBtnClick);