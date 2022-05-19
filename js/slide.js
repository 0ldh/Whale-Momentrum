const slideDiv = document.querySelector(".slidebtn");
const slideBtn1 = slideDiv.querySelector(".page1");
const slideBtn2 = slideDiv.querySelector(".page2");

const page1 = document.querySelector("#slide_div1");
const page2 = document.querySelector("#slide_div2");

const toPage1 = () => {
    // 첫 번째 버튼 누름
    slideBtn1.style.background = "hsla(0,0%,100%,1)"
    slideBtn2.style.background = "hsla(0,0%,100%,0.4)"
    page1.innerHTML = `
    <div id="clock"></div>
    <form class="hidden" id="login-form">
        <p class="nameQ">What is your name?</p>
        <input required="" maxlength="15" type="text">
    </form>
    <div id="greeting" class=""></div>
    `;
    importClock();
    importGreeting();
}


const toPage2 = () => {
    // 두 번째 버튼 누름
    slideBtn1.style.background = "hsla(0,0%,100%,0.4)"
    slideBtn2.style.background = "hsla(0,0%,100%,1)"
    page1.innerHTML = `
    <form id="todo-form">
    <input type="text" placeholder="할 일을 입력하세요">
    </form>
    <ul id="todo-list"></ul>
    `;
    importTodo();

}



window.addEventListener("load", toPage1);
slideBtn2.addEventListener("click", toPage2);
slideBtn1.addEventListener("click", toPage1);
console.dir(slideBtn1);