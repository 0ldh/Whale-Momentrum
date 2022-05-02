const cal = (a,b,c)=>{
   if (b == "+") return console.log(a + c);
   if (b == "-") return console.log(a - c);
   if (b == "*") return console.log(a * c);
   if (b == "/") return console.log(a / c);
   else alert("연산자를 올바르게 입력해주세요");
};

const clog = () => {
   return console.log(3);
}


clog()

// ------------------------ 강의 

// function sayHello(name, age) {
//    console.log("Hello " + name + "Age is " + age);
//    return 111;
// }

// sayHello("a", 13);
// sayHello("b", 15);
// sayHello("c", 22);
// sayHello("D", 256);
// console.log(sayHello("a",30))

cal(100, "-", 50);


const player = {
   name : "ldH",
   sayHello : (name) => {
      console.log("Hello " + name);
   }
}

console.log(player["name"])
player.sayHello("nico")
