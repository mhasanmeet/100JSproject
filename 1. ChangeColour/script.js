const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

const color = ['black', 'Yellow', 'White', 'Red', 'Green', 'Blue', 'Magenta']

colorBtn.addEventListener('click', changeColor);

function changeColor(){
    // bodyBcg.style.backgroundColor = 'blue';
    let random = Math.floor(Math.random()*color.length);
    bodyBcg.style.backgroundColor = color[random];
}