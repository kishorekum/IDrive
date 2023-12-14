const email = document.getElementById("email");
const user = document.getElementById("user");
const phone = document.getElementById("phone");
const operatingSystem = document.getElementById("operating-system");
const browser = document.getElementById("browser");
const idriveProgram = document.getElementById("idrive-program");
const description = document.getElementById("description");
const form = document.getElementById("form");
const submit = document.getElementById("submit-btn");
const errorMsg = document.getElementById("main-error");
const emailError = document.getElementById("email-error");
const phoneNumberError = document.getElementById("phone-number-error");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  formValidation();
});

// 1. validates empty values for all fields
const formValidation = () => {
  if (
    email.value === "" ||
    user.value === "" ||
    phone.value === "" ||
    description.value === "" ||
    operatingSystem.value === "" ||
    browser.value === "" ||
    idriveProgram.value === ""
  ) {
    errorMsg.innerHTML = "please enter all the fields";
  } else {
    errorMsg.innerHTML = "";
  }

  if (validateEmail(email.value) && email.value.length) {
    emailError.innerHTML = "please enter valid email address";
  } else {
    emailError.innerHTML = "";
  }

  validatePhoneNumber(phone.value);
};

// 2. verifies the valid email
const validateEmail = (email) => {
  return !email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/);
};

// 3. verifies the vaild phone number
const validatePhoneNumber = (number) => {
  if (isNaN(number)) {
    phoneNumberError.innerHTML = "please enter numerical values";
  }else if((number.length > 0 && number.length < 10) || number.length > 10){
    phoneNumberError.innerHTML = "phone number must be 10 digits";
  }
   else {
    phoneNumberError.innerHTML = "";
  }
};
