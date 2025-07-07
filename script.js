const idInput = document.getElementById('username');
const pwInput = document.getElementById('password');
const loginBtn = document.getElementById('login-button');

function updateButtonState() {
  const isFilled = idInput.value.trim() !== '' && pwInput.value.trim() !== '';
  loginBtn.disabled = !isFilled;

  if (isFilled) {
    loginBtn.classList.add('enabled');
  } else {
    loginBtn.classList.remove('enabled');
  }
}

idInput.addEventListener('input', updateButtonState);
pwInput.addEventListener('input', updateButtonState);
