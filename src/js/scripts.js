const body = document.querySelector('body');


function createGrid (gridSize) {
  gridSize = parseInt(gridSize);
  console.log(gridSize);
  const etchascetchContainer = document.createElement('div');
  etchascetchContainer.classList.add("gridContainer");
  if (gridSize > 100) {
    console.error("That's too darn big!");
  } else {
    console.log(`gridsize2 ${gridSize})`);
    for (let i = 0; i < (gridSize * gridSize); i++) {
      const pixelBox = document.createElement('div');
      const boxDimension = Math.round(parseFloat(700.000000000 / gridSize));
      console.log(`box height = containger height divided by gridSize: ${boxDimension}`);
      pixelBox.classList.add('box');
      pixelBox.style.minWidth = `${boxDimension}px`;
      pixelBox.addEventListener('mouseover', (event) => {event.target.classList.add('boxHovered')});
      etchascetchContainer.appendChild(pixelBox);
    };
    body.appendChild(etchascetchContainer);
  };
  etchascetchContainer.addEventListener('click', (event) => {
    event.target.innerHTML = "";
    body.innerHTML = "";
    createGrid(prompt("What size grid?"));
  });
};

function pageReset (event) {
  event.target.innerHTML = "";
  createGrid(prompt("What size grid?"));
}
console.log(parseFloat(700.00000 / 41));

createGrid(prompt("What size grid?"));




