let dimensions = 18
const easCont = document.getElementById("easContainer")

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
