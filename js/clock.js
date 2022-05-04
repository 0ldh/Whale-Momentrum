const clock = document.querySelector("#clock");

const getClock = () => {
   const date = new Date();
   clock.innerText = `${date.getHours()}:${date.getMinutes()}:${String(date.getSeconds()).padStart(2,"0")}`

}

getClock();
setInterval(getClock, 1000);

// ? padStart(x,y), padEnd(x,y) => String 자료의 길이수를 x로 바꾸고 자리가 비어있을 경우 y로 채운다