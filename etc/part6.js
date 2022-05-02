const cal = {
   plus : (a,b) =>{
      return a + b
   },
   minus : (a,b) =>{
      return a - b;
   },
   mul : (a,b) => {
      return a*b;
   },
   square : (a,b) => {
      return a**b;
   },
   division: (a,b) => {
      return a / b;
   }
}

let res = [];


res.push(cal.plus(6,3),cal.minus(6,3),cal.mul(6,3),cal.square(6,3),cal.division(6,3));

console.log(res)

