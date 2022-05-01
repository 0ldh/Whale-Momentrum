const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

const onLoginBtnClick = () => {
   const userName = loginInput.value;

   console.log(userName);
}

// loginButton.addEventListener("click", onLoginBtnClick);