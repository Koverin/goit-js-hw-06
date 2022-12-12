const button = document.querySelector(".change-color");
const color = document.querySelector(".color");
console.log(button);
button.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  color.textContent = getRandomHexColor();
  console.log("click");
  console.log(getRandomHexColor());
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
