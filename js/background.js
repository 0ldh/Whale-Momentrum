const images = {
   morning : ["morning1.jpeg", "morning2.jpg", "morning3.jpeg"],
   noon : ["noon1.jpeg", "noon2.jpeg", "noon3.jpeg"],
   afternoon : ["afternoon1.jpeg", "afternoon2.jpeg", "afternoon3.jpeg"],
   evening : ["evening1.jpeg", "evening2.jpeg", "evening3.jpeg"]
};


// * moring : 06 ~ 12 / noon : 12 ~ 15 / afternoon : 15 ~ 20 / evening : 20 ~ 06

/* const time = () => {
   if (hours)
}
 */

const chosenImage = images.morning[Math.floor(Math.random() * images.morning.length)];

const img = document.createElement("img");


img.src = `img/${chosenImage}`;
console.log(img)

document.body.appendChild(img);