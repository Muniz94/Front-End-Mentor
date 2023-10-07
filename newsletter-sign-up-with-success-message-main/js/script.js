
const input = document.getElementById('input_email');
const form = document.getElementById('form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const email = event.target.elements['input_email'];
  validateEmail(email);
});

function validateEmail(email){
  let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  console.log(email.value.match(validRegex))
  if (email.value.match(validRegex))
  {
    alert("This is a valid email!");
    email.value = "";
  }
  else {
    alert("This isn't a valid email...");
    email.value = "";
    email.focus();
  }
}