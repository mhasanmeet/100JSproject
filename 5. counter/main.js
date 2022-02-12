let counter = document.querySelector('.counter');
let addCount = document.querySelector('#addCounter');
let lowerCount = document.querySelector('#lowerCounter');

let count = 0;

addCount.addEventListener('click', incrementCounter);
lowerCount.addEventListener('click', decrementCounter);

function incrementCounter(){
    count++;
    counter.innerHTML = count;
    if(counter.innerHTML>'0'){
        counter.style.color = '#0F8600'
    }
    else if(counter.innerHTML === '0'){
        counter.style.color = '#fff'
    }
}

function decrementCounter(){
    count--;
    counter.innerHTML = count;
    if(counter.innerHTML<'0'){
        counter.style.color = '#B30E00'
    }
    else if(counter,innerHTML === '0'){
        counter.style.color = '#fff'
    }
}