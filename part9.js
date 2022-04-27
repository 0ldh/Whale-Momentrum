const age = parseInt(prompt("How old are you?"))

if (isNaN(age)) console.log("Please write a number");
else if (age < 18) console.log("You are too young.")
else if (age >=18 && age <=50) console.log("You can Drink")
else if (age > 50 && age <= 80) console.log("You should exercise")
else console.log("You can't drink") 