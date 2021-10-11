let expanded = false;


function hideAlert() {
  const el = document.querySelector('.alert');
  if (el) el.parentElement.removeChild(el);
};

// type is 'success' or 'error'
function showAlert(type, msg, time = 3) {
  hideAlert();
  const markup = `<div class="alert alert--${type}">${msg}</div>`;
  document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
  window.setTimeout(hideAlert, time * 1000);
};



function showCheckboxes() {
  let checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}

//coustum field validations
function coustumValidation(id, errorId) {
  let inputObj = document.getElementById(id);
  let errorObj = document.getElementById(errorId)
  if (!inputObj.checkValidity()) {
    errorObj.innerText = inputObj.validationMessage
    return false
  } else {
    errorObj.innerText = ''
    return true
  }
}

function passwordMacthValidation(passwordIdOne, passwordIdTwo, errorId) {
  let passwordOne = document.getElementById(passwordIdOne);
  let passwordTwo = document.getElementById(passwordIdTwo);
  let errorObj = document.getElementById(errorId);
  if (passwordOne.value.trim() !== passwordTwo.value.trim()) {
    errorObj.innerText = 'password and confirm password does not match'
    return false
  } else {
    errorObj.innerText = ''
    return true
  }
}