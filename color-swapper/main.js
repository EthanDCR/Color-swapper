const body = document.getElementsByTagName("body")[0];

function setColor(name) {
    body.style.backgroundColor = name;
} 

function randomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const randomColorValue = `rgb(${red}, ${green}, ${blue})`;
    body.style.backgroundColor = randomColorValue;
}



