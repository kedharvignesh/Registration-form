const registerBtn = document.getElementById('btnRegister')
let checkErr = false


registerBtn.addEventListener('click', e => {
	e.preventDefault()
	if (!coustumValidation('firstName', 'errorFirstName')) checkErr = true
	if (!coustumValidation('lastName', 'errorLastName')) checkErr = true
	if (!coustumValidation('userName', 'errorUserName')) checkErr = true
	if (!coustumValidation('email', 'errorEmail')) checkErr = true
	if (!coustumValidation('password', 'errorPassword')) checkErr = true
	if (!coustumValidation('passwordConfirm', 'errorPasswordConfirm')) checkErr = true
	if (!passwordMacthValidation('password', 'passwordConfirm', 'errorPasswordConfirm')) checkErr = true
	if (!coustumValidation('city', 'errorCity')) checkErr = true
	if (!coustumValidation('about', 'errorText')) checkErr = true

	if (checkErr) {
		showAlert('error', 'failed to submit the form')
	} else {
		showAlert('success', 'form submited successfully')
	}
})

