const clock = document.querySelector("#clock");

const sayHello = () => {
   console.log("Hello")
}

setInterval(sayHello, 5000);

console.log(clock);