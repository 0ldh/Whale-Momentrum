const age = parseInt(prompt("How old are you?"))

if (isNaN(age)) console.log("Please write a number");
else if (age < 18) console.log("You are too young.")
else console.log("You can drink") 