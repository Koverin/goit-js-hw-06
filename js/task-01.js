const itemEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemEl.length}`);

const categoryEl = document.querySelectorAll("#categories>li");

categoryEl.forEach((elem) => {
  console.log(
    `Category: ${elem.firstElementChild.textContent}, Elements: ${elem.lastElementChild.children.length}`
  );
});

// Completed
