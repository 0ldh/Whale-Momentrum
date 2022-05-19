const slidebtnDiv = document.querySelector(".slidebtn");
const slideBtn1 = slidebtnDiv.querySelector(".page1");
const slideBtn2 = slidebtnDiv.querySelector(".page2");

const slideDiv = document.querySelector("#slide_div");

const toPage1 = () => {
    // 첫 번째 버튼 누름
    slideBtn1.style.background = "hsla(0,0%,100%,1)"
    slideBtn2.style.background = "hsla(0,0%,100%,0.4)"
    slideDiv.id = "slide_div1"
    slideDiv.innerHTML = `
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
    slideDiv.id = "slide_div2"
    slideDiv.innerHTML = `
    <div class="todo-title">할 일 목록</div>
    <div class="todo-content"><ul id="todo-list"></ul></div>
    <form id="todo-form">
        <input type="text" placeholder="할 일을 입력하세요">
    </form>

    `;
    importTodo();

}



window.addEventListener("load", toPage1);
slideBtn2.addEventListener("click", toPage2);
slideBtn1.addEventListener("click", toPage1);
console.dir(slideBtn1);