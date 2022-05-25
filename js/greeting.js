//* slide.js에 import용으로 전부 묶어줌
const importGreeting = () => {
    //* 변수 생성
    const loginForm = document.querySelector("#login-form"); // 사용자가 입력할 폼 태그
    const loginInput = loginForm.querySelector("#login-form input"); 
    const greeting = document.querySelector("#greeting") // 사용자 이름 그릴 곳

    const HIDDEN_CLASSNAME = "hidden"; // 클래스명
    const USERNAME_KEY = "username"; // loaclStorage Key 값

    //* username 표시 함수
    const paintGreeting = () => {
        const userName = localStorage.getItem(USERNAME_KEY) // localsotrage에서 바로 userName에 저장
        greeting
            .classList // greeting의 class 목록 불러오기
            .remove(HIDDEN_CLASSNAME); // classList에서 클래스명 hidden 제거
        greeting.innerText = `Good ${time}, ${userName}`; // greeting에 시간에 따른 인사, 유저이름 입력
    }

    //* username 입력 함수
    const onLoginSubmit = (event) => {
        event.preventDefault(); // submit 이벤트의 기본행동을 멈춤 (reload)
        loginForm
            .classList  // 로그인 form의 class List 불러오기
            .add(HIDDEN_CLASSNAME); // username을 입력하면 form에 .hidden 추가
        const userName = loginInput.value; // 유저가 입력한 username 할당

        localStorage.setItem(USERNAME_KEY, userName); // username locastorage에 저장

        paintGreeting(); // paint greeting 함수 실행
    }

    const savedUsername = localStorage.getItem(USERNAME_KEY); // localstorage에 있는 username을 키로 value 값 호출

    if (savedUsername === null) { // localsotrage에서 usernmae이 비어있는 경우
        loginForm
            .classList
            .remove(HIDDEN_CLASSNAME); // loginForm 태그 클래스 리스트 불러와서 클래스명 hidden 삭제
        loginForm.addEventListener("submit", onLoginSubmit) // loginForm에서 submit 이벤트가 발생 할 경우 onLoginSubmit 함수 실행
    } else { // username이 입력되어 있는 경우
        paintGreeting(); // paint greeting 함수 실행 
    }
}
    // ? .hideen class는 display: none;으로 설정되어 있음
    // ? ClassList => 해당 HTML이 가지고 있는 클래스 목록
    /*  remove(x) : x라는 이름의 클래스명 제거
        add(x) : x라는 이름의 클래스명 추가
        toggle(x) : x라는 이름의 클래스명이 있을 경우 제거 or 추가 */
    // ? preventDefault() =>  기본동작을 막아줌 ? addEventListener => 이벤트를 매개변수로 함수를 실행한다