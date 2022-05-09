// ! backGoround img
const images = {
   morning : ["morning1.jpeg", "morning2.jpg", "morning3.jpeg"],
   noon : ["noon1.jpeg", "noon2.jpeg", "noon3.jpeg"],
   afternoon : ["afternoon1.jpeg", "afternoon2.jpeg", "afternoon3.jpeg"],
   evening : ["evening1.jpeg", "evening2.jpeg", "evening3.jpeg"]
};

const dateHours = new Date();


// * moring : 06 ~ 12 / noon : 12 ~ 15 / afternoon : 15 ~ 20 / evening : 20 ~ 06

 const times = () => {
   if (6 <= dateHours.getHours() && dateHours.getHours() < 12) return images.morning[Math.floor(Math.random() * images.morning.length)];
   else if (12<= dateHours.getHours() && dateHours.getHours() < 15 ) return images.noon[Math.floor(Math.random() * images.noon.length)];
   else if ( 15 <= dateHours.getHours() && dateHours.getHours() < 20) return images.afternoon[Math.floor(Math.random() * images.afternoon.length)];
   else return images.evening[Math.floor(Math.random() * images.evening.length)];
}

const img = document.createElement("img");
img.src = `img/${times()}`;
console.log(img)

document.body.appendChild(img);


//? append : 가장 뒤에
//? prepend : 가장 위에