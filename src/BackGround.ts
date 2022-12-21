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
  const img = document.createElement('img');

  const selectImg = (time: number):string => {
    const pod:number = time;
    if (pod >= 6 && pod < 12) return images.morning[Math.floor(Math.random() * 3) + 1];
    if (pod >= 12 && pod < 15) return images.noon[Math.floor(Math.random() * 3) + 1];
    if (pod >= 15 && pod < 20) return images.afternoon[Math.floor(Math.random() * 3) + 1];
    return images.evening[Math.floor(Math.random() * 3) + 1];
  };

  img.src = `img/${selectImg(nowHours)}`;
  img.className = 'bgimg';
  wrapper.appendChild(img);

  console.log('import BackGround');
}
