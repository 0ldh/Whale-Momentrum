const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

const onLoginBtnClick = () => {
   const userName = loginInput.value;

   if (userName==="") alert("이름을 입력해 주세요");
   else if (userName.length > 15) alert("15글자를 초과한 이름입니다");
   
}

loginButton.addEventListener("click", onLoginBtnClick);