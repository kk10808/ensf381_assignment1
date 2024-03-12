function validateSignup() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const email = document.getElementById('email').value;

    let errorMessages = '';

    if (!isValidUsername(username)) {
        errorMessages += 'Check the Username.<br>';
    }

    if (!isValidPassword(password)) {
        errorMessages += 'Check the Password.<br>';
    }


    if (password !== confirmPassword) {
        errorMessages += "Password doesn't match.<br>";
    }

    if (!isValidEmail(email)) {
        errorMessages += 'Check the Email.<br>';
    }
    // adds all the errormessages and displays them together. 
    if (errorMessages !== '') {
        displayErrorMessage(errorMessages);
        return false; 
    }

    // otherwise it says that it is successful 
    displaySuccessMessage('Signup was successful!!');
    return true;
}

//shows the message 
function displayErrorMessage(message) {
    const messageText = document.getElementById('messageText');
    messageText.innerHTML = message; 
    document.getElementById('messageBox').style.display = 'block'; 
}

//shows the message
function displaySuccessMessage(message) {
    const messageText = document.getElementById('messageText');
    messageText.textContent = message;
    document.getElementById('messageBox').style.display = 'block'; 
}

// Function to validate a username
function isValidUsername(username) {
    return /^[A-Za-z]/.test(username) && username.length >= 3 && username.length <= 20;
}

// Function to validate a password
function isValidPassword(password) {
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[@$!%*?&]/.test(password);

    return hasLowercase && hasUppercase && hasDigit && hasSpecialChar && password.length >= 8;
}

// Function to validate an email address
function isValidEmail(email) {
    const hasAtSymbol = email.includes('@');
    const hasDot = email.includes('.');

    return hasAtSymbol && hasDot;
}

