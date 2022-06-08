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

//Event Listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();
  //verifying username
  if (username.value === "") {
    showError(username, "Please enter a valid name");
  } else {
    showSucess(username);
  }
  //verifying email
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  if (validateEmail(email.value)) {
    showSucess(email);
  } else {
    showError(email, "Please enter a valid Email");
  }
});
