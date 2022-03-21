// Step 1: Create onload handler
window.onload = () =>{
    main()
}

function main(){
    // get HTML root ID 
    const root = document.getElementById('root');

    // get button ID 
    const changeBtn = document.getElementById('change-btn');

    // Handle click event 
    changeBtn.addEventListener('click', function(){
        const bgColor = generateRGBcolor();

        // set bg color in root
        root.style.backgroundColor = bgColor;
    })
}

// Step 2: generate random color

function generateRGBcolor(){
    // start rgb(0, 0, 0) to rgb(255, 255, 255)
    const color1 = Math.floor(Math.random() * 255);
    const color2 = Math.floor(Math.random() * 255);
    const color3 = Math.floor(Math.random() * 255);

    return `rgb(${color1}, ${color2}, ${color3})`;
}

