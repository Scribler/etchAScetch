// const body = document.querySelector('body');
//
//
// function createGrid (gridSize) {
//   gridSize = parseInt(gridSize);
//   console.log(gridSize);
//   const etchascetchContainer = document.createElement('div');
//   etchascetchContainer.classList.add("gridContainer");
//   if (gridSize > 100) {
//     console.error("That's too darn big!");
//   } else {
//     console.log(`gridsize2 ${gridSize})`);
//     for (let i = 0; i < (gridSize * gridSize); i++) {
//       const pixelBox = document.createElement('div');
//       const boxDimension = Math.round(parseFloat(700.000000000 / gridSize));
//       console.log(`box height = containger height divided by gridSize: ${boxDimension}`);
//       pixelBox.classList.add('box');
//       pixelBox.style.minWidth = `${boxDimension}px`;
//       pixelBox.addEventListener('mouseover', (event) => {event.target.classList.add('boxHovered')});
//       etchascetchContainer.appendChild(pixelBox);
//     };
//     body.appendChild(etchascetchContainer);
//   };
//   etchascetchContainer.addEventListener('click', (event) => {
//     event.target.innerHTML = "";
//     body.innerHTML = "";
//     createGrid(prompt("What size grid?"));
//   });
// };
//
// function pageReset (event) {
//   event.target.innerHTML = "";
//   createGrid(prompt("What size grid?"));
// }
// console.log(parseFloat(700.00000 / 41));
//
// createGrid(prompt("What size grid?"));


// Testing for objects
let brand = "Kawasaki"


const myZzr600 = {
  modelName: "ZZR 600",
  [brand + " zzr600"]: `An awexome zzr600`,
  engineSize: "600cc",
  color: "Silver",
  "valve check interval": "15000km",
};

console.log(myZzr600.engineSize);
console.log(myZzr600.color);
console.log(myZzr600["valve check interval"]);

let key = prompt("What do you want to know about the zzr600. engineSize, color, valve check interval");

console.log(myZzr600[key]);


function createBike (brand, modelName, givenName, engineSize, color, wetWeightLb, dryWeightLb, wetWeightKg, dryWeightKg) {
  return {
    brand,
    modelName,
    givenName,
    engineSize,
    color,
    wetWeightLb,
    dryWeightLb,
    wetWeightKg,
    dryWeightKg,
    "+12": "this should print",
    
    // below are long form way of writing.

    // brand: brand,
    // modelName: modelName,
    // givenName: givenName,
    // engineSize: engineSize,
    // color: color,
    // wetWeightKg: wetWeightKg,
    // dryWeightKg: dryWeightKg,
    // wetWeightLb: wetWeightLb,
    // dryWeightLb: dryWeightLb,
  };
};

const myBike = createBike("Kawasaki", "ZZR600", "Gin Chan", 599, "Silver", 487.222, 376.99, 221, 171);

console.log(`My motorcycle's Brand: ${myBike.brand}`);
console.log(`My motorcycle's Model Name: ${myBike.modelName}`);
console.log(`My motorcycle's Given Name: ${myBike.givenName}`);
console.log(`My motorcycle's Engine Size: ${myBike.engineSize}`);
console.log(`My motorcycle's Color: ${myBike.color}`);
console.log(`My motorcycle's Wet Weight In Pounds: ${myBike.wetWeightLb} lbs`);
console.log(`My motorcycle's Dry Weight In Pounds: ${myBike.dryWeightLb} lbs`);
console.log(`My motorcycle's Wet Weight In Kilo's: ${myBike.wetWeightKg} kg`);
console.log(`My motorcycle's Dry Weight In Kilo's: ${myBike.dryWeightKg} kg`);

console.log(`Does my bike have a 'seat style'?: ${"seatStyle" in myBike}`);
console.log(`Does my bike have a 'Dry Weight in KG'?: ${"dryWeightKg" in myBike}`);

function lbsOrKg (key) {
  if (key.includes("Lb")) {
    return " lbs";
  } else if (key.includes("Kg")) {
    return " kgs";
  } else {
    return "";
  }
}


console.log(" ");
for (key in myBike) {
  console.log(`The motorcycle's ${key.toUpperCase()}: ${myBike[key]}${lbsOrKg(key)}`);
}
console.log(" ");
let testingg = 12;
console.log( +testingg );

console.log(myBike[`+${testingg}`]);






