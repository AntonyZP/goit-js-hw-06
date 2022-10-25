const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", onFontSize);

function onFontSize(e) {
  textEl.style.fontSize = e.currentTarget.value + "px";
  //   console.dir(e.currentTarget);
  //   console.log(Number(e.currentTarget.value));
  //   console.log(typeof e.currentTarget.value);
}
