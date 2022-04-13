import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const timeThrottle = 500;

formEl.addEventListener('submit', submitForm);

document.addEventListener('DOMContentLoaded', reboot);

formEl.addEventListener(
  'input',
  throttle(e => {
    messageInputLokSlor(e);
  }, timeThrottle),
);

function messageInputLokSlor(e) {
  e.preventDefault();
  if (e.currentTarget) {
    const { email, message } = e.currentTarget.elements;
    const formDataLocalSt = {
      email: email.value,
      message: message.value,
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(formDataLocalSt));
  }
}

function reboot() {
  const locStInputValue = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (locStInputValue) {
    formEl.elements.message.value = locStInputValue.message;
    formEl.elements.email.value = locStInputValue.email;
  }
}

function submitForm(e) {
  e.preventDefault();
  const { email, message } = e.currentTarget.elements;
  if (email.value && message.value) {
    const formData = {
      email: email.value,
      message: message.value,
    };

    console.log(formData);

    e.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
  }
}
