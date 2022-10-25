const inputEl = document.querySelector("#name-input");
const titleEl = document.querySelector("#name-output");

inputEl.addEventListener("input", setOutput);

function setOutput(evt) {
  if (evt.currentTarget.value === "") {
    titleEl.textContent = "Anonymous";
  } else {
    titleEl.textContent = evt.currentTarget.value;
  }
}
