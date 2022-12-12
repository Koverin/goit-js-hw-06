const form = document.querySelector(".login-form");
console.log(form);

form.addEventListener("submit", sendingForm);

function sendingForm(event) {
  event.preventDefault();
  const formEl = event.currentTarget.elements;

  const email = formEl.email.value;
  const password = formEl.password.value;
  const formData = {
    email,
    password,
  };

  console.log(formData);

  if (email === "" || password === "") {
    alert("Все поля должны быть заполнены");
  }

  event.currentTarget.reset();
}

// const formData = new FormData(event.currentTarget);
// formData.forEach((email, password) => {
//   console.log(email);
//   console.log(password);
// });
