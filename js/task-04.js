let counterValue = 0;
const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]'
);
const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);

const decrement = () => {
  counterValue -= 1;
  document.getElementById("value").textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  document.getElementById("value").textContent = counterValue;
};

buttonDecrement.addEventListener("click", decrement);
buttonIncrement.addEventListener("click", increment);
