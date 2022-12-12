const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");
console.log(ingredientsEl);

const ingredientsAll = ingredients.map((ingredient) => {
  const ingredientsItem = document.createElement("li");
  console.log(ingredientsItem);

  ingredientsItem.textContent = ingredient;
  ingredientsItem.classList.add("item");

  return ingredientsItem;
});

console.log(ingredientsAll);

ingredientsEl.append(...ingredientsAll);
