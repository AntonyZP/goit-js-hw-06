const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", onLogin);
function onLogin(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;
  if (email.value === "" || password.value === "") {
    alert("All fields must be fill");
  }
  console.log(evt.currentTarget.elements);
  const obj = {
    email: email.value,
    password: password.value,
  };
  console.log(obj);
  evt.currentTarget.reset();
}
