const formEl = document.querySelector(".login-form");
console.dir(formEl);
formEl.addEventListener("submit", onLogin);
function onLogin(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;
  if (email.value === "" || password.value === "") {
    alert("All fields must be fill");
  }
  console.log(`email = ${email.value}, password = ${password.value}`);
  evt.currentTarget.reset();
}
