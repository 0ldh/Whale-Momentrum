//* 변수 선언
const images = {
  // 배경이미지 이름을 저장한 객체
  morning: [
    // 아침 배경
    'morning1.jpeg',
    'morning2.jpg',
    'morning3.jpeg',
  ],
  noon: [
    // 점심 배경
    'noon1.jpeg',
    'noon2.jpeg',
    'noon3.jpeg',
  ],
  afternoon: [
    // 오후 배경
    'afternoon1.jpeg',
    'afternoon2.jpeg',
    'afternoon3.jpeg',
  ],
  evening: [
    // 저녁 배경
    'evening1.jpeg',
    'evening2.jpeg',
    'evening3.jpeg',
  ],
};

const bgdiv = document.querySelector('.bgdiv'); // 배경이미지를 넣을 요소 태그
let time; // 시간대를 저장하는 변수

const dateHours = new Date(); // 날짜 데이터 저장 (연,월,시간,분,초)

// ? moring : 06 ~ 12 / noon : 12 ~ 15 / afternoon : 15 ~ 20 / evening : 20 ~ 06

//* 시간별 배경이미지 가져오는 함수
const times = () => {
  if (dateHours.getHours() >= 6 && dateHours.getHours() < 12) {
    // 브라우저에서 받은 시간이 6~12 사이라면
    time = 'Morning'; // time 변수에 morning 저장
    return images.morning[
      Math.floor(Math.random() * images.morning.length)
    ]; // 배경이미지 객체의 배열moring중 랜덤한 이미지 이름 return
  }
  if (dateHours.getHours() >= 12 && dateHours.getHours() < 15) {
    time = 'Noon';
    return images.noon[Math.floor(Math.random() * images.noon.length)];
  }
  if (dateHours.getHours() >= 15 && dateHours.getHours() < 20) {
    time = 'Afternoon';
    return images.afternoon[
      Math.floor(Math.random() * images.afternoon.length)
    ];
  }
  time = 'Evening';
  return images.evening[Math.floor(Math.random() * images.evening.length)];
};

//* 이미지 그리기
const img = document.createElement('img'); // 배경이미지를 넣고 추가 할 img element 생성
img.src = `img/${times()}`; // 이미지 경로 추가
img.className = 'bgimg'; // 이미지 클래스이름 설정 ( CSS )
bgdiv.appendChild(img); // 배경이미지를 넣을 공간에 img element 추가

//* 배경 투명도
const bgop = document.createElement('div'); // 배경 투명도용 div element 생성
bgop.className = 'bgop'; // div 클래스이름 설정 ( CSS )
bgdiv.appendChild(bgop); // background 뒤에 (요소 마지막 자식요소로) 추가

// ? Math
/*  ㄴ  ceil() : 소수점 올림, 정수 return
    ㄴ  floor(): 소수점 버림, 정수 return
    ㄴ  round(): 소수점 반올림, 정수 retrun
    ㄴ  random() + a * b : a 이상 b 까지의 난수 생성 */
// ? ES6 : `` 백틱 () => 화살표 함수 ?
/* element.append : 가장 뒤에 추가
element.prepend : 가장 위에 추가 */
