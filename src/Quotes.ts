interface Quotes {
  quote:string;
  author: string;
}

const quotes:Quotes[] = [ // 명언집 ( type : Object)
  {
    quote: 'The way to get started is to quit talking and begin doing.',
    author: 'Walt Disney',
  }, {
    quote: "Life is what happens when you're busy making other plans.",
    author: 'John Lennon',
  }, {
    quote: 'The world is a book and those who do not travel read only one page.',
    author: 'Saint Augustine',
  }, {
    quote: 'Life is either a daring adventure or nothing at all.',
    author: 'Helen Keller',
  }, {
    quote: 'To Travel is to Live',
    author: 'Hans Christian Andersen',
  }, {
    quote: 'Only a life lived for others is a life worthwhile.',
    author: 'Albert Einstein',
  }, {
    quote: 'You only live once, but if you do it right, once is enough.',
    author: 'Mae West',
  }, {
    quote: 'Never go on trips with anyone you do not love.',
    author: 'Hemingway',
  }, {
    quote: 'We wander for distraction, but we travel for fulfillment.',
    author: 'Hilaire Belloc',
  }, {
    quote: 'Travel expands the mind and fills the gap.',
    author: 'Sheda Savage',
  },
];

export default function Quote(element: HTMLDivElement): void {
  const quote = document.createElement('span');
  const author = document.createElement('span');
}
