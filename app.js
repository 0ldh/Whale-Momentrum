const a = 5; // ! 상수 ( Constant ) 재할당 불가능
const b = 2;
let myName = "LeeDongHyeon"; // ! 재할당 가능

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

console.log("Hello " + myName);

myName = "DongHyeon";

console.log("Your name is " + myName);

// * 연계 ==> Hoisting , 변수 선언 3단계 (선언 초기화 할당)