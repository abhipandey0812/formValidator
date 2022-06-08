const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//Showing Error msg
function showError(element, errorMsg) {
  const formControl = element.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = errorMsg;
}
function showSucess(element) {
  const formControl = element.parentElement;
  formControl.className = "form-control sucess";
}

//Event Listeners on submit
form.addEventListener("submit", function (e) {
  e.preventDefault();
  //verifying username
  if (username.value === "" || username.value.length < 3) {
    showError(username, "Please enter a valid username");
  } else {
    showSucess(username);
  }

  //Email Validation
  if (validateEmail(email.value)) {
    showSucess(email);
  } else {
    showError(email, "Please enter a valid Email");
  }
  //password validation
  if (checkPassword(password.value)) {
    showSucess(password, "valid password");
  } else {
    showError(password, "A-Z,a-z,0-9,@%&");
  }

  // MAtching the password
  if (password2.value === password.value) {
    showSucess(password2, "Password Matched");
  } else {
    showError(password2, "password do not match");
  }
});

//Password Validation  min 8 letter password, with at least a symbol, upper and lower case letters and a number
function checkPassword(str) {
  var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return re.test(str);
}
//verifying email
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
