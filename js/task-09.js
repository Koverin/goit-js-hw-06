const button = document.querySelector(".change-color");
const color = document.querySelector(".color");

button.addEventListener("click", () => {
  const hexColor = getRandomHexColor();
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;

  console.log("click");
  console.log(hexColor);
});

// getRandomHexColor();

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
