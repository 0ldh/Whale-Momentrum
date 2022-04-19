const cal = (a,b,c)=>{
   if (b === "+") return a + b;
   if (b === "-") return a - b;
   if (b === "*") return a * b;
   if (b === "/") return a / b;
   else alert("연산자를 올바르게 입력해주세요");
}

const clog = () => {
   return console.log(3);
}


console.log(cal(3,4));
clog()
