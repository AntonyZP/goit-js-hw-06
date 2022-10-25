const color = function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const bodyEl = document.querySelector("body");
const textEl = document.querySelector(".color");
const btn = document.querySelector(".change-color");
console.dir(bodyEl);
console.log(bodyEl.style.backgroundColor);

btn.addEventListener("click", onChangeColor);
function onChangeColor(evt) {
  bodyEl.style.backgroundColor = color();
  console.log(bodyEl.style.backgroundColor);

  textEl.textContent = bodyEl.style.backgroundColor;
  // console.log(textEl.textContent);
}
