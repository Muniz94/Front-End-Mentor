// Elements
const input = document.getElementById('input_email');
const form = document.getElementById('form');
const emailErrorMessage = document.getElementById('emailErrorMessage');

// Variables
let ValidEmail;
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


const showErrorMessage = () => {
  input.setAttribute('aria-invalid', true);
  emailErrorMessage.classList.remove('error-msg_hide');
};

const hideErrorMessage = () => {
  input.removeAttribute('aria-invalid');
  emailErrorMessage.classList.add('error-msg_hide');
}

const validateEmail = () => {
  const userEmail = input.value;
  validRegex.test(userEmail) ? hideErrorMessage() : showErrorMessage();
  ValidEmail = validRegex.test(userEmail);
};


form.addEventListener('submit', event => {
   event.preventDefault();
   
   validateEmail();
});