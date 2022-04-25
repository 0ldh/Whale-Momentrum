var a = 3; // 재선언, 재할당 가능
let b = 4; // 재할당 가능
const c = 5; // 재선언, 재할당 불가능

const name = "LeeDongHyeon";

console.log(name);

// Boolean
// ? True or False
const amIFat = false;
console.log(amIFat);

// null
// ? 아무것도 아닌 값
const a = null;
console.log(a);

// undefined 
// ? 값이 할당되지 않음

console.log(b);

// Referance Error
// ? 변수가 선언되지 않음
if (true) {
   const c = 3;
}
console.log(c);
// * 스코프 개념

const mon = 'mon';
const tue = 'tue';
const wed = 'wed';
const thu = 'thu';
const fri = 'fri';
const sat = 'sat';
const sun = 'sun';

const week = [mon, tue, wed, thu, fri, sat];

// * 배열 요소 추출
console.log(week[5]);

// * 배열 요소 추가
week.push(sun);
console.log(week);

// 객체생성

const me = {
   firstName : "Lee",
   name : "DongHyeon",
   weight : "72kg",
   height : "177cm"
}

console.log(me);
console.log(me.firstName);
console.log(me[0]);
console.log(me["weight"]);