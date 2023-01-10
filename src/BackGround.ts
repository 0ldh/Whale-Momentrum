interface Images {
  morning:string[];
  noon:string[];
  afternoon:string[];
  evening:string[];
}

const images: Images = {
  morning: [
    'morning1.jpeg',
    'morning2.jpeg',
    'morning3.jpeg',
  ],
  noon: [
    'noon1.jpeg',
    'noon2.jpeg',
    'noon3.jpeg',
  ],
  afternoon: [
    'afternoon1.jpeg',
    'afternoon2.jpeg',
    'afternoon3.jpeg',
  ],
  evening: [
    'evening1.jpeg',
    'evening2.jpeg',
    'evening3.jpeg',
  ],
};

export default function BackGround(wrapper :HTMLDivElement):void {
  const date = new Date();
  const nowHours = date.getHours();

  const selectImg = (time: number):string => {
    if (time >= 6 && time < 12) return images.morning[Math.floor(Math.random() * 3)];
    if (time >= 12 && time < 15) return images.noon[Math.floor(Math.random() * 3)];
    if (time >= 15 && time < 20) return images.afternoon[Math.floor(Math.random() * 3)];
    return images.evening[Math.floor(Math.random() * 3)];
  };

  const img = document.createElement('img');
  img.src = `../img/${selectImg(nowHours)}`;
  img.className = 'bgimg';

  wrapper.appendChild(img);

  console.log('import BackGround');
}
