function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");

const boxesContainer = document.querySelector("#boxes");

console.log(inputEl);
console.log(btnCreate);
console.log(btnDestroy);
console.log(boxesContainer);

function createBoxes(amount) {
  const arr = [];
  for (let i = 1; i <= amount; i += 1) {
    const markUp = " <div width = 30px height = 30px></div>";
    arr.push(markUp);
    console.log(arr);
  }
  boxesContainer.append(arr.join(""));
}

createBoxes(3);
