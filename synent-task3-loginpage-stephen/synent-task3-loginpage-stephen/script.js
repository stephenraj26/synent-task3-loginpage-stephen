// Small extras for the login page: show/hide password and simple checks.

const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const okMsg = document.getElementById("okMsg");
const showBtn = document.getElementById("showBtn");

// Show or hide the password
showBtn.addEventListener("click", function () {
  const hidden = passwordInput.type === "password";
  passwordInput.type = hidden ? "text" : "password";
  showBtn.textContent = hidden ? "Hide" : "Show";
  showBtn.setAttribute("aria-label", hidden ? "Hide password" : "Show password");
});

// Check the form when the user clicks Login (this is a UI demo, so no real login)
form.addEventListener("submit", function (event) {
  event.preventDefault();
  okMsg.textContent = "";

  let good = true;

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(emailInput.value.trim())) {
    emailError.textContent = "Please enter a valid email address.";
    emailInput.classList.add("bad");
    good = false;
  } else {
    emailError.textContent = "";
    emailInput.classList.remove("bad");
  }

  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    passwordInput.classList.add("bad");
    good = false;
  } else {
    passwordError.textContent = "";
    passwordInput.classList.remove("bad");
  }

  if (good) {
    okMsg.textContent = "Looks good! (Demo only, no real login.)";
  }
});
