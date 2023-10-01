const form = document.getElementById('form');
const tempStr = "email@company.com";
const input = document.getElementById('input_email');

input.value = `${tempStr}`;

input.addEventListener('click', () => {
  input.value = "";
});

input.addEventListener('blur', () => {
  input.value = `${tempStr}`;
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const email = event.target.elements['input_email'];
  validateEmail(email);
});

function validateEmail(email){
  let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email.value.match(validRegex))
    alert("This is a valid email!");
  else {
    alert("This isn't a valid email...");
    email.value = "";
    email.focus();
  }
}