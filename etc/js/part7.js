const age = 97;
const calculate = (a) => {
   return a + 2;
}

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

const plusRes = cal.plus(6,3);
const minusRes = cal.minus(plusRes, 3);
const squaerRes = cal.minus(minusRes, 3);
const mulRes = cal.minus(squaerRes, 3);
const diviRes = cal.minus(mulRes, 3);

res.push(plusRes,minusRes,squaerRes,squaerRes,mulRes,diviRes);

console.log(res)

