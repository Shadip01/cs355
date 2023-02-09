const img = document.querySelector("mypic");
const btn = document.querySelector("#secondButton");
const aroundHover = document.getElementById("p2");
const hoverBack = document.getElementById("p2");

aroundHover.addEventListener('mouseover', hoverAround);
hoverBack.addEventListener('mouseout', hoverBackOut);
changeBackgroundColor.addEventListener('click', changeColor);


//chnage sthe color into blue when hoveraround
function hoverAround(event) {
    event.target.style.color = 'green';
}

//chnages the color into normal when hover out in main page 
function hoverBackOut(event) {
    event.target.style.color = 'black';
}
//changes the background of page 2 into green
function backgroundColorChange() {
    document.querySelector('body').style.backgroundColor = '#FAEBD7';
}

//changes the background of page 2 into white
function backgroundColorChange1() {
    document.querySelector('body').style.backgroundColor = "white";
}

//changes the image in main page
function changeImage() {
    const img = document.getElementById('mypic');
    img.src = "https://cff2.earth.com/uploads/2022/08/16103044/Everest-2048x1306.jpg";
}
//changes the color of paragraph in main page
function changeColor() {
    var colorChange = document.getElementById('p1');
    colorChange.style.color = 'red';
}

//Change the font of page 3
function changeFont() {
    document.getElementById('changefont').style.fontFamily = 'fantasy';

}

function changeFontBack() {
    document.getElementById('changefont').style.fontFamily = 'system-ui';
}

function changeFontSize() {
    document.getElementById('changefont').style.fontSize = '15px';
}