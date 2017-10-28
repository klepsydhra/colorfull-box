
function changeColor(color) {
    let box = document.getElementById('square');
    box.style.backgroundColor = color; 
}

function makeColors(){
    let colors = [];

    for(let i = 0; i < 3; i++)
    {
        colors[i] = randomColor();
    }

    return rgbColors(colors.join(","));
}

function randomColor(){
    let color = (Math.floor(Math.random() * 256));
    return color;
}

function rgbColors(colors){
    return `rgb( ${colors} )`;
}

window.onload = function() {
    let btn = document.getElementById('button');

    btn.addEventListener('click', function(){
        changeColor(makeColors());
    });

};



