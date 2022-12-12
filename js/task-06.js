const input = document.querySelector("#validation-input");
console.log(input);

// const checkedLength = input.dataset.length;
// console.log(checkedLength);
input.addEventListener("blur", validationInput);

function validationInput() {
  if (input.dataset.length != input.value.length) {
    input.classList.remove("valid");
    return input.classList.add("invalid");
  }
  input.classList.remove("invalid");
  return input.classList.add("valid");

  //   if (event.currentTarget.value.length >= checkedLength) {
  //     this.classList.add("valid");
  //     this.classList.remove("invalid");
  //   } else {
  //     this.classList.add("invalid");
  //     this.classList.remove("valid");
  //   }
}
