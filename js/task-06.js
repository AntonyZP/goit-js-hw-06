const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", enterPassword);
console.log(typeof Number(textInput.getAttribute("data-length")));
function enterPassword() {
  if (textInput.value.length == textInput.getAttribute("data-length")) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  }
}
