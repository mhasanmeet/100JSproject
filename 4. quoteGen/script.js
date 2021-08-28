const quotes = [
    {
        name: 'OK',
        quote: 'Be a good Man, Masud'
    },
    {
        name: 'KO',
        quote: 'Be a good Man, Rimon'
    },
    {
        name: 'OK',
        quote: 'Be a good Man, Mehedi'
    }
];

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote() {
    let number = Math.floor(Math.random()*quotes.length);

    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}