document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('login');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document
      .getElementById('username')
      .value
      .trim()
      .toLowerCase();

    const password = document
      .getElementById('password')
      .value
      .trim()
      .toLowerCase();

    const error = document.getElementById('error');

    if (username === 'nona' && password === 'ladoo') {
      sessionStorage.setItem('birthdayAccess', 'yes');
      window.location.href = 'secret.html';
    } else {
      error.textContent = 'ACCESS DENIED // check the two names again.';
      error.classList.remove('hidden');
    }
  });
});
