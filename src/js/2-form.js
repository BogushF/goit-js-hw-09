const formData = {
  email: '',
  message: '',
};
const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const email = form.elements.email;
const message = form.elements.message;

const preData = JSON.parse(localStorage.getItem(STORAGE_KEY));

if (preData === null) {
  email.value = '';
  message.value = '';
} else {
  email.value = preData.email;
  message.value = preData.message;
}

function toInput(event) {
  formData.email = event.currentTarget.elements.email.value.trim();
  formData.message = event.currentTarget.elements.message.value.trim();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function toSubmit(event) {
  event.preventDefault();
  if (email.value && message.value) {
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
  } else {
    alert('Fill please all fields');
  }
}

form.addEventListener('input', toInput);
form.addEventListener('submit', toSubmit);
