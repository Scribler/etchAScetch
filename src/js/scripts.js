const body = document.querySelector('body');


function createGrid (gridSize) {
  gridSize = parseInt(gridSize);
  console.log(gridSize);
  const etchascetchContainer = document.createElement('div');
  etchascetchContainer.classList.add("gridContainer");
  etchascetchContainer.style.minWidth = `${gridSize * 22}px`;
  etchascetchContainer.style.maxWidth = `${gridSize * 22}px`;
  etchascetchContainer.style.minHeight = `${gridSize * 22}px`;
  etchascetchContainer.style.maxHeight = `${gridSize * 22}px`;
  if (gridSize > 100) {
    console.error("That's too darn big!");
  } else {
    console.log(`gridsize2 ${gridSize})`);
    for (let i = 0; i < (gridSize * gridSize); i++) {
      const pixelBox = document.createElement('div');
      pixelBox.classList.add('box');
      pixelBox.addEventListener('mouseover', (event) => {event.target.classList.add('boxHovered')});
      etchascetchContainer.appendChild(pixelBox);
      // if (i == 20) i++;
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


createGrid(prompt("What size grid?"));


