//* Slide.js에서 사용하기 위해 importClock으로 전부 묶어줌
const importClock = () => {
  //* 시계 변수
  const clock = document.querySelector('#clock') // 시계를 넣을 태그
  //* 시간 가져오는 함수
  const getClock = () => {
    const date = new Date() // Date 객체로 현재시간 확인
    const hours = String(date.getHours()).padStart(2, '0') // 시간값 문자형태로 변환, 2자리 이하일 시 앞에 0을 채워줌 (ex 09, 01)
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')

    clock.innerText = `${hours}:${minutes}:${seconds}` // element에 text로 할당
  }

  getClock() // 최초 실행
  setInterval(getClock, 1000) // 1초마다 함수 실행
}

// ? padStart(x,y), padEnd(x,y) => String 자료형의 길이수를 x로 바꾸고 자리가 비어있을 경우 y로 채운다
// ? setInterval(function, 1000) => 1초마다 함수(function) 실행 (1초는 1000)
