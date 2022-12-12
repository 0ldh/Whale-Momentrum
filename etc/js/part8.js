 let age = prompt("How old are you?")

age = parseInt(age);
age2 =  Number(age);

 console.log(isNaN(age));
 console.log(isNaN(age2));


let phoneNumber = parseInt( prompt("What's your phone number?"))

console.log(isNaN(phoneNumber));

if (isNaN(phoneNumber)) console.log("숫자가 아님")
else console.log("숫자가 맞음")