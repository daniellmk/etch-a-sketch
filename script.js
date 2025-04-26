const easCont = document.getElementById("easContainer");
const dimLabel = document.getElementById("dimLabel");
const slider = document.getElementById("slider");
const colorInput = document.getElementById("colorSelector");
const drawButton = document.getElementById("drawButton");
const eraseButton = document.getElementById("eraseButton");
const clearButton = document.getElementById("clearButton");
let color = colorInput.value;
let mode = "draw";
let isMouseDown = false;
let dimensions = slider.value;

buildGrid()

function buildGrid() {
    easCont.innerHTML = '';

    easCont.style.gridTemplateColumns = `repeat(${dimensions}, 1fr)`;

    for (let i = 0; i < dimensions; i++) {
        for (let j = 0; j < dimensions; j++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridItem.id = (`${i}-${j}`)
            easCont.appendChild(gridItem);
        }
    }
}

colorInput.addEventListener('input', function() {
    color = this.value;
});

slider.addEventListener('input', function() {
    dimensions = this.value;
    updDimTxt(dimensions);
    buildGrid();
});

function updDimTxt(dimensions) {
    dimLabel.innerHTML = `${dimensions}x${dimensions}`
}

easCont.addEventListener('mousedown', function(e) {
    isMouseDown = true;
    if (e.target.classList.contains('grid-item')) {
        if (mode === "draw") {
            e.target.style.backgroundColor = color;
        } else if (mode === "erase") {
            e.target.style.backgroundColor = "white";
        }
    }
});

easCont.addEventListener('mouseover', function(e) {
    if (isMouseDown && e.target.classList.contains('grid-item')) {
        if (mode === "draw") {
            e.target.style.backgroundColor = color;
        } else if (mode === "erase") {
            e.target.style.backgroundColor = "white";
        }
    }
});


easCont.addEventListener('mouseup', function(e) {
    isMouseDown = false;
});

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