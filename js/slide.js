const slidebtnDiv = document.querySelector(".slidebtn");    // 슬라이드 버튼 모음 Div 태그 선택
const slideBtn1 = slidebtnDiv.querySelector(".page1");      // page 1 버튼 태그 선택
const slideBtn2 = slidebtnDiv.querySelector(".page2");      // page 2 버튼 태그 선택 

const slideDiv = document.querySelector("#slide_div");      // 바뀌는 화면 div 태그 선택

const subBtn = viewportSub.querySelector(".btn");           // viewPort-sub의 시간 넣을 태그 선택

let selectBool = false; // 전체선택 버튼 handle용 변수 (전체선택 시 true, 선택해제 시 false)
/*  
    * page 1 사용 함수
    importClock(); => 시계 추가
    importGreeting(); => username 추가
    todosCountUpdate(); => viewPort-sub 할 일 목록 추가
    page1ToDo(); => viewPort-sub의 할 일 목록 팝업 창 추가
    * page 2 사용 함수
    importTodo(); => todo handle 함수 모음
    page2Clock(); => viewPort-sub의 시계 추가
*/
//* 최초 페이지 로딩 함수
const loadPage = () => {
    slideBtn1.disabled = true; // 최초 페이지는 page1이기 때문에 페이지 이동 제한을 위해 disabled 속성 추가
    slideBtn1.style.background = "hsla(0,0%,100%,1)" // 선택된 page 버튼 스타일
    slideBtn2.style.background = "hsla(0,0%,100%,0.4)" // 선택되지 않은 page 버튼 스타일
    slideDiv.id = "slide_div1" // 선택된 화면 div태그에 page1의 id 할당
    slideDiv.innerHTML = `
    <div id="clock"></div>
    <form class="hidden" id="login-form">
    <p class="nameQ">What is your name?</p>
    <input required="" maxlength="15" type="text">
    </form>
    <div id="greeting" class=""></div>
    `; //그릴 HTML 태그 할당
    importClock(); 
    importGreeting(); 
    todosCountUpdate();
    page1ToDo(); 
}

//* 첫 번째 버튼 클릭 시 page1 로딩 함수
const toPage1 = () => {
    // 첫 번째 버튼 누름
    slideBtn1.disabled = true;
    slideBtn2.removeAttribute("disabled") // page 이동을 위해 disabled 속성 제거
    slideBtn1.style.background = "hsla(0,0%,100%,1)"
    slideBtn2.style.background = "hsla(0,0%,100%,0.4)"
    slideDiv.className = 'slideout2' // 슬라이드 애니메이션을 위한 클래스 네임 할당
    setTimeout(() => { // 슬라이드 이벤트 후 함수 실행을 위해서 setTimeout 메서드 사용
        slideDiv.className = 'slidein1'
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
        page1ToDo();
    }, 500);

}

const toPage2 = () => {
    // 두 번째 버튼 누름
    slideBtn2.disabled = true;
    slideBtn1.removeAttribute("disabled")
    slideBtn1.style.background = "hsla(0,0%,100%,0.4)";
    slideBtn2.style.background = "hsla(0,0%,100%,1)";
    slideDiv.className = 'slideout1';
    setTimeout(() => {
        slideDiv.className = 'slidein2';
        slideDiv.id = "slide_div2";
        slideDiv.innerHTML = `
        <div class="todo-title">Todo-List</div>
        <div class="todo-content"><ul id="todo-list"></ul></div>
        <div class="seldelBtn">
        <input class="selectAllbtn" type="button" value="전체선택">
        <input class="deleteBtn" type="button" value="선택삭제">
        </div> 
        <form id="todo-form">
            <input type="text" maxlength="25" placeholder="할 일을 입력하세요">
        </form>
        `;
        importTodo();
        page2Clock();
    }, 500);

}

//* page1의 viewPort-sub의 todo 팝업창 그리는 함수
const page1ToDo = ()=> {
    let popToDos = []; // 팝업창에 그릴 할 일 저장 변수
    let popToDoCount = 0; // 할 일 목록 순번 Count
    const toDoContent = document.querySelector(".pop-content") // 할 일 목록 태그 할당
    const savedToDos = localStorage.getItem("todos"); // "todos"를 Key로 하여 할 일 할당
    toDoContent.innerHTML = ""; // 중복으로 그려지기 때문에 HTML태그 비워줌
    if (savedToDos !== null) { // 할 일 목록이 있을 경우
        const parseTodos = JSON.parse(savedToDos); // parse 메서드를 통해 문자열을 배열형태로 바꾸어 할당
        parseTodos.forEach(e => { // parseTodos의 요소를 1개씩 추출
            if(!e.bool) { // 요소의 bool 속성이 false라면
                popToDos.push(e) // 배열에 요소 추가
            }
        });
        popToDos.forEach((e)=>{ // 저장된 할 일 하나씩 호출
            popToDoCount++; // 호출 될 떄 마다 할 일 순번 1씩 증가
            const input = document.createElement("input"); // 할 일 목록 태그 새엇ㅇ
            input.type = "text" // 타입 설정
            input.value = `${popToDoCount}. ${e.text}`; // 할 일 순번, 할 일 할당
            input.disabled = true; // 재입력 불가능 하게 disabled 속성 추가
            toDoContent.appendChild(input); // 할 일 목록 div에 자식요소로 태그 추가
        })
    }
}

//* page2 viewPort-sub의 시계 그리는 함수 
const page2Clock = () => {
    subBtn.innerHTML = "" // page1 할 일 목록 제거
    subBtn.className = "btn-clock" // 클래스네임 할당
    //* 시계 함수
    const getSubClock = () => {
        const subClock = document.querySelector(".btn-clock"); // 시계 그릴 태그 선택
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

//* Page1의 viewPort-sub의 할 일 목록 카운트 함수
const todosCountUpdate = () => {
    const savedToDos = JSON.parse(localStorage.getItem("todos"));
    let todosCount = 0; // Count 초기값 할당

    subBtn.className = "btn-todo" // 클래스네임 할당
    subBtn.innerHTML = `<span>할 일 목록</span>` // 태그 추가

    if (savedToDos !== null) {
        savedToDos.forEach(e => {
            if (e.bool === false) {
                todosCount += 1;
            }
        });
        subBtn.innerHTML += `<span>${todosCount}</span>`
    }
}

window.addEventListener("load", loadPage); // window load 시 LoadPage 함수 실행

// 버튼 클릭 이벤트 발생 시 해당 페이지 이동 및 그리기
slideBtn1.addEventListener("click", toPage1); 
slideBtn2.addEventListener("click", toPage2);


//? setTimeout(funtion(), timeout); => timeout만큼 (1000 = 1초) 딜레이 후 함수 실행
//? array.forEach(element => {}); => array 요소들을 하나씩 뽑음
//? padStart(x,y), padEnd(x,y) => String 자료형의 길이수를 x로 바꾸고 자리가 비어있을 경우 y로 채운다