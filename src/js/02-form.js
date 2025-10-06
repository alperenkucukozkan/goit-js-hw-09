const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');


form.addEventListener('input', () => {
  const feedbackData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackData));
});

window.addEventListener('load', () => {
  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedData) {
    emailInput.value = savedData.email || '';
    messageInput.value = savedData.message || '';
  }
});


form.addEventListener('submit', (event) => {
  event.preventDefault();
  const feedbackData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  
  console.log(feedbackData);

  
  localStorage.removeItem('feedback-form-state');
  form.reset();
});