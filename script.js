const easCont = document.getElementById("easContainer");
const dimLabel = document.getElementById("dimLabel");
const slider = document.getElementById("slider");
const drawButton = document.getElementById("drawButton");
const eraseButton = document.getElementById("eraseButton");
const clearButton = document.getElementById("clearButton");
let mode = "draw";
let dimensions = slider.value;

buildGrid()

function buildGrid() {
    easCont.innerHTML = '';

    easCont.style.gridTemplateColumns = `repeat(${dimensions}, 1fr)`;

    for (let i = 0; i < dimensions; i++) {
        for (let j = 0; j < dimensions; j++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            easCont.appendChild(gridItem);
        }
    }
}

slider.addEventListener('input', function() {
    dimensions = this.value;
    updDimTxt(dimensions);
    buildGrid();
});

function updDimTxt(dimensions) {
    dimLabel.innerHTML = `${dimensions}x${dimensions}`
}


drawButton.addEventListener("click", drawMode);
eraseButton.addEventListener("click", eraseMode);
clearButton.addEventListener("click", buildGrid);

function drawMode() {
    mode = "draw"
    eraseButton.classList.remove("active");
    drawButton.classList.add("active");
}

function eraseMode() {
    mode = "erase"
    drawButton.classList.remove("active");
    eraseButton.classList.add("active");
}