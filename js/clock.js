// ! clock
const clock = document.querySelector("#clock");
// ? padStart(x,y), padEnd(x,y) => String 자료형의 길이수를 x로 바꾸고 자리가 비어있을 경우 y로 채운다
const getClock = () => {
   const date = new Date();
   const hours = String(date.getHours()).padStart(2, "0");
   const minutes = String(date.getMinutes()).padStart(2, "0");
   const seconds = String(date.getSeconds()).padStart(2, "0");
   clock.innerText = `${hours}:${minutes}:${seconds}`;   
}

getClock();
setInterval(getClock, 1000);



