import viewportSub from './ViewportSub';
import importClock from './Clock';
import importGreeting from './Greeting';
// eslint-disable-next-line import/prefer-default-export
export var slide = {
    slidebtnDiv: document.querySelector('.slidebtn'),
    slideBtn1: document.querySelector('.slidebtn .page1'),
    slideBtn2: document.querySelector('.slidebtn .page2'),
    slideDiv: document.querySelector('#slide_div'),
    subBtn: viewportSub.querySelector('.btn'),
    selectBool: false,
};
// eslint-disable-next-line import/prefer-default-export
var todosCountUpdate = function () {
    var savedToDos = JSON.parse(localStorage.getItem('todos'));
    var todosCount = 0;
    slide.subBtn.className = 'btn-todo';
    slide.subBtn.innerHTML = '<span>할 일 목록</span>';
    if (savedToDos !== null) {
        savedToDos.forEach(function (e) {
            if (e.bool === false) {
                todosCount += 1;
            }
        });
        slide.subBtn.innerHTML += "<span>".concat(todosCount, "</span>");
    }
};
var page1ToDo = function () {
    var popToDos = [];
    var popToDoCount = 0;
    var toDoContent = document.querySelector('.pop-content');
    var savedToDos = localStorage.getItem('todos');
    toDoContent.innerHTML = '';
    if (savedToDos !== null) {
        var parseTodos = JSON.parse(savedToDos);
        parseTodos.forEach(function (e) {
            if (!e.bool) {
                popToDos.push(e);
            }
        });
        popToDos.forEach(function (e) {
            popToDoCount++;
            var input = document.createElement('input');
            input.type = 'text';
            input.value = "".concat(popToDoCount, ". ").concat(e.text);
            input.disabled = true;
            toDoContent.appendChild(input);
        });
    }
};
var loadPage = function () {
    slide.slideBtn1.disabled = true;
    slide.slideBtn1.style.background = 'hsla(0,0%,100%,1)';
    slide.slideBtn2.style.background = 'hsla(0,0%,100%,0.4)';
    slide.slideDiv.id = 'slide_div1';
    slide.slideDiv.innerHTML = "\n    <div id=\"clock\"></div>\n    <form class=\"hidden\" id=\"login-form\">\n    <p class=\"nameQ\">What is your name?</p>\n    <input required=\"\" maxlength=\"15\" type=\"text\">\n    </form>\n    <div id=\"greeting\" class=\"\"></div>\n    ";
    importClock();
    importGreeting();
    todosCountUpdate();
    page1ToDo();
};
