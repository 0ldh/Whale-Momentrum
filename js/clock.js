const clock = document.querySelector("#clock");

const getClock = () => {
   const date = new Date();
   clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

}

getClock();
setInterval(getClock, 1000);