interface Images {
  morning:string[];
  noon:string[];
  afternoon:string[];
  evening:string[];
}

const selectImg = (time: number):string => '';

export default function BackGround(wrapper :HTMLDivElement) {
  const images: Images = {
    morning: [
      'morning1.jpeg',
      'morning2.jpg',
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

  const date = new Date();
  const nowHours = date.getHours();
  const img = document.createElement('img');

  img.src = `img/${selectImg(nowHours)}.jpeg`;
  wrapper.appendChild(img);

  console.log('import BackGround');
}
