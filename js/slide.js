const slideDiv = document.querySelector(".slidebtn");
const slideBtn1 = slideDiv.querySelector(".page1");
const slideBtn2 = slideDiv.querySelector(".page2");

const page1 = document.querySelector("#slide_div1");
const page2 = document.querySelector("#slide_div2");

const toPage2 = () => {
    // 두 번째 버튼 누름
    page1.innerHTML = `
    <form id="todo-form">
    <input type="text" placeholder="할 일을 입력하세요">
    </form>
    <ul id="todo-list"></ul>
    `;
    importTodo();

}

const toPage1 = () => {
    // 첫 번째 버튼 누름
    page1.innerHTML = `
    <div id="clock"></div>
    <form class="hidden" id="login-form">
        <input required="" maxlength="15" type="text" placeholder="이름을 입력하세요">
    </form>
    <div id="greeting" class=""></div>

    <ul id="todo-list"></ul>
    `;
    importClock();
    importGreeting();

}

window.addEventListener("load", toPage1);
slideBtn2.addEventListener("click", toPage2);
slideBtn1.addEventListener("click", toPage1);
console.dir(slideBtn1);