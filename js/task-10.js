const controlsDiv = document.getElementById("controls");
const createButton = controlsDiv.querySelector("[data-create]");
const destroyButton = controlsDiv.querySelector("[data-destroy]");
const boxesDiv = document.getElementById("boxes");


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
}


function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesDiv.appendChild(box);
  }
}


function destroyBoxes() {
  boxesDiv.innerHTML = "";
}


createButton.addEventListener("click", () => {
  const amount = parseInt(controlsDiv.querySelector("input").value, 10);
  if (amount > 0 && amount <= 100) {
    createBoxes(amount);
  }
});


destroyButton.addEventListener("click", destroyBoxes);
