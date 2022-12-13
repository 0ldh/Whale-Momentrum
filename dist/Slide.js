"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ViewportSub_1 = __importDefault(require("./ViewportSub"));
const Clock_1 = __importDefault(require("./Clock"));
const Greeting_1 = __importDefault(require("./Greeting"));
const slidebtnDiv = document.querySelector('.slidebtn');
const slideBtn1 = slidebtnDiv.querySelector('.page1');
const slideBtn2 = slidebtnDiv.querySelector('.page2');
const slideDiv = document.querySelector('#slide_div');
const subBtn = ViewportSub_1.default.querySelector('.btn');
const selectBool = false;
const todosCountUpdate = () => {
    const savedToDos = JSON.parse(localStorage.getItem('todos'));
    let todosCount = 0;
    subBtn.className = 'btn-todo';
    subBtn.innerHTML = '<span>할 일 목록</span>';
    if (savedToDos !== null) {
        savedToDos.forEach((e) => {
            if (e.bool === false) {
                todosCount += 1;
            }
        });
        subBtn.innerHTML += `<span>${todosCount}</span>`;
    }
};
const page1ToDo = () => {
    const popToDos = [];
    let popToDoCount = 0;
    const toDoContent = document.querySelector('.pop-content');
    const savedToDos = localStorage.getItem('todos');
    toDoContent.innerHTML = '';
    if (savedToDos !== null) {
        const parseTodos = JSON.parse(savedToDos);
        parseTodos.forEach((e) => {
            if (!e.bool) {
                popToDos.push(e);
            }
        });
        popToDos.forEach((e) => {
            popToDoCount++;
            const input = document.createElement('input');
            input.type = 'text';
            input.value = `${popToDoCount}. ${e.text}`;
            input.disabled = true;
            toDoContent.appendChild(input);
        });
    }
};
const loadPage = () => {
    slideBtn1.disabled = true;
    slideBtn1.style.background = 'hsla(0,0%,100%,1)';
    slideBtn2.style.background = 'hsla(0,0%,100%,0.4)';
    slideDiv.id = 'slide_div1';
    slideDiv.innerHTML = `
    <div id="clock"></div>
    <form class="hidden" id="login-form">
    <p class="nameQ">What is your name?</p>
    <input required="" maxlength="15" type="text">
    </form>
    <div id="greeting" class=""></div>
    `;
    (0, Clock_1.default)();
    (0, Greeting_1.default)();
    todosCountUpdate();
    page1ToDo();
};
