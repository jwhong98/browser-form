const form = document.querySelector("form");

const email = document.querySelector("#email");
const country = document.querySelector("#country");
const zipCode = document.querySelector("#zipCode");
const password = document.querySelector("#password");
const confirmPass = document.querySelector("#confirmPass");

form.addEventListener("submit", (e) => {
  if (emailValidator() && passwordValidator() && confirmPassValidator()) {
    return true;
  } else {
    e.preventDefault();
  }
});

const emailValidator = () => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Enter in valid email format");
    email.reportValidity();
    return false;
  }
  if (email.validity.valueMissing) {
    email.setCustomValidity("Email required");
    email.reportValidity();
    return false;
  }
  email.setCustomValidity("");
  return true;
};

const passwordValidator = () => {
  if (password.validity.tooShort) {
    password.setCustomValidity("Password must be atleast 8 characters long");
    password.reportValidity();
    return false;
  }
  if (password.validity.patternMismatch) {
    password.setCustomValidity(
      "Password must contain a lowercase letter, an uppercase letter, and a number"
    );
    password.reportValidity();
    return false;
  }
  if (password.validity.valueMissing) {
    password.setCustomValidity("Please enter your password");
    password.reportValidity();
    return false;
  }
  password.setCustomValidity("");
  return true;
};

const confirmPassValidator = () => {
  if (confirmPass.validity.valueMissing) {
    confirmPass.setCustomValidity("Confirm your password");
    confirmPass.reportValidity();
    return false;
  }
  if (confirmPass.value !== password.value) {
    confirmPass.setCustomValidity("Passwords do not match!");
    confirmPass.reportValidity();
    return false;
  }
  confirmPass.setCustomValidity("");
  return true;
};
