const sendBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');

sendBtn.addEventListener('click', sendMsg)

function sendMsg(){
    let content = messageIn.value;
    messageOut.innerHTML = content;

    if(content === ''){
        alert(`Don't keep value empty`)
    }
    else{
        messageOut.innerHTML = content;
        messageIn.value = '';
    }
}