import viewportSub from './ViewportSub';
import importClock from './Clock';
import importGreeting from './Greeting';
// eslint-disable-next-line import/prefer-default-export
export const slide = {
    slidebtnDiv: document.querySelector('.slidebtn'),
    slideBtn1: document.querySelector('.slidebtn .page1'),
    slideBtn2: document.querySelector('.slidebtn .page2'),
    slideDiv: document.querySelector('#slide_div'),
    subBtn: viewportSub.querySelector('.btn'),
    selectBool: false,
};
// eslint-disable-next-line import/prefer-default-export
const todosCountUpdate = () => {
    const savedToDos = JSON.parse(localStorage.getItem('todos'));
    let todosCount = 0;
    slide.subBtn.className = 'btn-todo';
    slide.subBtn.innerHTML = '<span>할 일 목록</span>';
    if (savedToDos !== null) {
        savedToDos.forEach((e) => {
            if (e.bool === false) {
                todosCount += 1;
            }
        });
        slide.subBtn.innerHTML += `<span>${todosCount}</span>`;
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
    slide.slideBtn1.disabled = true;
    slide.slideBtn1.style.background = 'hsla(0,0%,100%,1)';
    slide.slideBtn2.style.background = 'hsla(0,0%,100%,0.4)';
    slide.slideDiv.id = 'slide_div1';
    slide.slideDiv.innerHTML = `
    <div id="clock"></div>
    <form class="hidden" id="login-form">
    <p class="nameQ">What is your name?</p>
    <input required="" maxlength="15" type="text">
    </form>
    <div id="greeting" class=""></div>
    `;
    importClock();
    importGreeting();
    todosCountUpdate();
    page1ToDo();
};
