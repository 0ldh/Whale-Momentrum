const slidebtnDiv = document.querySelector(".slidebtn");
const slideBtn1 = slidebtnDiv.querySelector(".page1");
const slideBtn2 = slidebtnDiv.querySelector(".page2");

const slideDiv = document.querySelector("#slide_div");

const subBtn = viewportSub.querySelector(".btn");

const todosCountUpdate = () => {

    subBtn.className = "btn-todo"
    subBtn.innerHTML = `<span>할 일 목록</span>`

    if (JSON.parse(localStorage.getItem("todos")) !== null) {
        const todosCount = JSON
            .parse(localStorage.getItem("todos"))
            .length;
        if (todosCount !== 0) {
            subBtn.innerHTML += `<span>${todosCount}</span>`
        }
    }
}

const page2Clock = () => {
    subBtn.innerHTML = ""
    subBtn.className = "btn-clock"
    // ! clock
    const getSubClock = () => {
        const subClock = document.querySelector(".btn-clock");
        // ? padStart(x,y), padEnd(x,y) => String 자료형의 길이수를 x로 바꾸고 자리가 비어있을 경우 y로 채운다
        const date = new Date();
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");
        if (subClock) {
            subClock.innerText = `${hours} : ${minutes} :${seconds}`;
        }
    }
    getSubClock();
    setInterval(getSubClock, 1000);
}

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
    todosCountUpdate();
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
        <input type="text" maxlength="25" placeholder="할 일을 입력하세요">
    </form>
    `;
    importTodo();
    page2Clock();

}

window.addEventListener("load", toPage1);
slideBtn2.addEventListener("click", toPage2);
slideBtn1.addEventListener("click", toPage1);
console.dir(slideBtn1);