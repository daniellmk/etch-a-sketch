//get elements
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

//intial grid
buildGrid()

//function to create the EAS grid
function buildGrid() {
    //empties grid
    easCont.innerHTML = '';

    //sets amount of columns to that of the dimensions var
    easCont.style.gridTemplateColumns = `repeat(${dimensions}, 1fr)`;

    //each loop creates new row
    for (let i = 0; i < dimensions; i++) {
        //each loop creates new grid cell in a row and gives it a class & unique id
        for (let j = 0; j < dimensions; j++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridItem.id = (`${i}-${j}`)
            easCont.appendChild(gridItem);
        }
    }
}

//gets pen color from the color input
colorInput.addEventListener('input', function() {
    color = this.value;
});

//gets the dimensions from the slider
slider.addEventListener('input', function() {
    dimensions = this.value;
    updDimTxt(dimensions);
    buildGrid();
});

//updates the text above slider every time its changed
function updDimTxt(dimensions) {
    dimLabel.innerHTML = `${dimensions}x${dimensions}`
}

//changes color of the cell that was pressed
easCont.addEventListener('mousedown', function(e) {
    isMouseDown = true;
    if (e.target.classList.contains('grid-item')) {
        if (mode === "draw") {
            e.target.style.backgroundColor = color;
        } 
        //if mode is set to erase it sets bg to white instead
        else if (mode === "erase") {
            e.target.style.backgroundColor = "white";
        }
    }
});

//allows you to drag mouse to draw
easCont.addEventListener('mouseover', function(e) {
    if (isMouseDown && e.target.classList.contains('grid-item')) {
        if (mode === "draw") {
            e.target.style.backgroundColor = color;
        } else if (mode === "erase") {
            e.target.style.backgroundColor = "white";
        }
    }
});

//stops the cells from being drawn on when mouse is not down anymore
easCont.addEventListener('mouseup', function(e) {
    isMouseDown = false;
});

//button functionality
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