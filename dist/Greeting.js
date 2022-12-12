"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BackGround_1 = __importDefault(require("./BackGround"));
const importGreeting = () => {
    const loginForm = document.querySelector('#login-form');
    const loginInput = loginForm?.querySelector('#login-form input');
    const greeting = document.querySelector('#greeting');
    const HIDDEN_CLASSNAME = 'hidden';
    const USERNAME_KEY = 'username';
    const paintGreeting = () => {
        const userName = localStorage.getItem(USERNAME_KEY);
        greeting?.classList.remove(HIDDEN_CLASSNAME);
        greeting.innerText = `Good ${(0, BackGround_1.default)()}, ${userName}`;
    };
};
