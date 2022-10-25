const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");
const markup = ingredients
  .map((ingredient) => `<li class="item">${ingredient}</li>`)
  .join("");
console.log(markup);

ingredientsList.innerHTML = markup;
