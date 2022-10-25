// 1.
const itemCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemCategories.length}`);

// 2.

for (let i = 0; i < itemCategories.length; i += 1) {
  console.log(`Category: ${itemCategories[i].querySelector("h2").textContent}`);

  console.log(`Elements: ${itemCategories[i].querySelectorAll("li").length}`);
}
