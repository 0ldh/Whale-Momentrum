import times from './BackGround';
var importGreeting = function () {
    var loginForm = document.querySelector('#login-form');
    var loginInput = loginForm === null || loginForm === void 0 ? void 0 : loginForm.querySelector('#login-form input');
    var greeting = document.querySelector('#greeting');
    var HIDDEN_CLASSNAME = 'hidden';
    var USERNAME_KEY = 'username';
    var paintGreeting = function () {
        var userName = localStorage.getItem(USERNAME_KEY);
        greeting === null || greeting === void 0 ? void 0 : greeting.classList.remove(HIDDEN_CLASSNAME);
        greeting.innerText = "Good ".concat(times(), ", ").concat(userName);
    };
};
export default importGreeting;
