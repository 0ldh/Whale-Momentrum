import times from './BackGround';
const importGreeting = () => {
    const loginForm = document.querySelector('#login-form');
    const loginInput = loginForm === null || loginForm === void 0 ? void 0 : loginForm.querySelector('#login-form input');
    const greeting = document.querySelector('#greeting');
    const HIDDEN_CLASSNAME = 'hidden';
    const USERNAME_KEY = 'username';
    const paintGreeting = () => {
        const userName = localStorage.getItem(USERNAME_KEY);
        greeting === null || greeting === void 0 ? void 0 : greeting.classList.remove(HIDDEN_CLASSNAME);
        greeting.innerText = `Good ${times()}, ${userName}`;
    };
};
export default importGreeting;
