// Elements
const input = document.getElementById('form__input__email');
const form = document.getElementById('form');
const submitBtn = document.getElementById('subscribe');
const emailErrorMessage = document.getElementById('emailErrorMessage');
const clearBtn = document.getElementById('clearBtn');
const mainSection = document.getElementById('section-main');
const successSection = document.getElementById('section-success');

// Variables
let ValidEmail;
let successPage = false;
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Functions

const showErrorMessage = () => {
  input.setAttribute('aria-invalid', true);
  emailErrorMessage.classList.remove('form__error-msg_hide');
};

const hideErrorMessage = () => {
  input.removeAttribute('aria-invalid');
  emailErrorMessage.classList.add('form__error-msg_hide');
};

const validateEmail = () => {
  const userEmail = input.value;
  validRegex.test(userEmail) ? hideErrorMessage() : showErrorMessage();
  ValidEmail = validRegex.test(userEmail);
};

const submitForm = () => {
  const formData = new FormData(form);
  emailValue.textContent = input.value;
  changePage();
  input.value = '';
};

const showSuccessSection = () => {
  mainSection.classList.add('section_hide');
  successSection.classList.remove('section_hide');
  successPage = true;
};

const showMainSection = () => {
  successSection.classList.add('section_hide');
  mainSection.classList.remove('section_hide');
  successPage = false;
};

const changePage = () => {
  successPage ? showMainSection() : showSuccessSection();
}

// Events

form.addEventListener('submit', event => {
   event.preventDefault();
   
   validateEmail();

   if (ValidEmail) submitForm();
});

clearBtn.addEventListener('click', changePage);