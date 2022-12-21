import times from './BackGround';

const importGreeting = (): void => {
  const loginForm = document.querySelector('#login-form')!;
  const loginInput = loginForm?.querySelector('#login-form input');
  const greeting = document.querySelector('#greeting') as HTMLElement;

  const HIDDEN_CLASSNAME = 'hidden';
  const USERNAME_KEY = 'username';

  const paintGreeting = (): void => {
    const userName = localStorage.getItem(USERNAME_KEY);
    greeting?.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Good ${times()}, ${userName}`;
  };
};

export default importGreeting;
