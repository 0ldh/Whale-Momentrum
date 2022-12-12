const quotes = [ // 명언집 ( type : Object)
  {
    quote: 'The way to get started is to quit talking and begin doing.',
    author: 'Walt Disney'
  }, {
    quote: "Life is what happens when you're busy making other plans.",
    author: 'John Lennon'
  }, {
    quote: 'The world is a book and those who do not travel read only one page.',
    author: 'Saint Augustine'
  }, {
    quote: 'Life is either a daring adventure or nothing at all.',
    author: 'Helen Keller'
  }, {
    quote: 'To Travel is to Live',
    author: 'Hans Christian Andersen'
  }, {
    quote: 'Only a life lived for others is a life worthwhile.',
    author: 'Albert Einstein'
  }, {
    quote: 'You only live once, but if you do it right, once is enough.',
    author: 'Mae West'
  }, {
    quote: 'Never go on trips with anyone you do ntot love.',
    author: 'Hemmingway'
  }, {
    quote: 'We wander for distraction, but we travel for fulfilment.',
    author: 'Hilaire Belloc'
  }, {
    quote: 'Travel expands the mind and fills the gap.',
    author: 'Sheda Savage'
  }
]

const quote = document.querySelector('#quote span:first-child') // 명언 태그 선택
const author = document.querySelector('#quote span:last-child') // 명언 위인 태그 선택

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)] // 명언집 랜덤 추출 후 할당

// 명언집 내용 text 삽입
quote.innerText = todayQuote.quote
author.innerText = todayQuote.author

// ? Math
/* ㄴ floor : 버림
   ㄴ ceil  : 내림
   ㄴ round : 반올림
*/
