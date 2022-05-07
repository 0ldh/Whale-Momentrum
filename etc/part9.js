const age = parseInt(prompt("How old are you?"))

if (isNaN(age) || age < 0) console.log("Please write a real positive number");
else if (age < 18) console.log("You are too young.")
else if (age >=18 && age <=50) console.log("You can Drink")
else if (age > 50 && age <= 80) console.log("You should exercise")
else if (age > 80) console.log("You cna do whatever you wnat.")
else if (age === 100) console.log("WOW you are wise")
else console.log("You can't drink") 


class person {
   name;
   age;
   sex;
}

const mike = new person("mike", 26, "man")
