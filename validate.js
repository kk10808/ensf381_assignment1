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

function isValidUsername(username) {
    const usernameRegex = /^[A-Za-z][A-Za-z0-9_-]{2,19}$/;
    return usernameRegex.test(username);
}

function isValidPassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}

function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}
