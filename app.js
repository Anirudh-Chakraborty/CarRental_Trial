document.addEventListener('DOMContentLoaded', function() {
  document.body.classList.add('fade-in-bg');
  var loginBox = document.querySelector('.login-container');
  if (loginBox) {
    loginBox.classList.add('fade-in');
  }
});