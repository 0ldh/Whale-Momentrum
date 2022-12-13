"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.slide = void 0;
const ViewportSub_1 = __importDefault(require("./ViewportSub"));
const Clock_1 = __importDefault(require("./Clock"));
const Greeting_1 = __importDefault(require("./Greeting"));
// eslint-disable-next-line import/prefer-default-export
exports.slide = {
    slidebtnDiv: document.querySelector('.slidebtn'),
    slideBtn1: document.querySelector('.slidebtn .page1'),
    slideBtn2: document.querySelector('.slidebtn .page2'),
    slideDiv: document.querySelector('#slide_div'),
    subBtn: ViewportSub_1.default.querySelector('.btn'),
    selectBool: false,
};
// eslint-disable-next-line import/prefer-default-export
const todosCountUpdate = () => {
    const savedToDos = JSON.parse(localStorage.getItem('todos'));
    let todosCount = 0;
    exports.slide.subBtn.className = 'btn-todo';
    exports.slide.subBtn.innerHTML = '<span>할 일 목록</span>';
    if (savedToDos !== null) {
        savedToDos.forEach((e) => {
            if (e.bool === false) {
                todosCount += 1;
            }
        });
        exports.slide.subBtn.innerHTML += `<span>${todosCount}</span>`;
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
    exports.slide.slideBtn1.disabled = true;
    exports.slide.slideBtn1.style.background = 'hsla(0,0%,100%,1)';
    exports.slide.slideBtn2.style.background = 'hsla(0,0%,100%,0.4)';
    exports.slide.slideDiv.id = 'slide_div1';
    exports.slide.slideDiv.innerHTML = `
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
