const clock = document.querySelector("#clock");

const getClock = () => {
   const date = new Date();
   clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

}


setInterval(getClock, 1000);