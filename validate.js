// validate.js

function validateSignup() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const email = document.getElementById('email').value;

    // Validate username
    if (!isValidUsername(username)) {
        displayErrorMessage('Check the Username.');
        return false;
    }

    // Validate password
    if (!isValidPassword(password)) {
        displayErrorMessage('Check the Password.');
        return false;
    }

    // Validate confirm password
    if (password !== confirmPassword) {
        displayErrorMessage("Password doesn't match.");
        return false;
    }

    // Validate email
    if (!isValidEmail(email)) {
        displayErrorMessage('Check the Email.');
        return false;
    }

    // If all validations pass, show success message
    displaySuccessMessage('Signup successful!');

    // You can submit the form or perform other actions here
    return true;
}

function displayErrorMessage(message) {
    const messageText = document.getElementById('messageText');
    messageText.textContent = message;
    document.getElementById('messageBox').style.backgroundColor = '#f2dede'; // Light red background for error
    document.getElementById('messageBox').style.display = 'block'; // Show the message box
}

function displaySuccessMessage(message) {
    const messageText = document.getElementById('messageText');
    messageText.textContent = message;
    document.getElementById('messageBox').style.backgroundColor = '#d4edda'; // Light green background for success
    document.getElementById('messageBox').style.display = 'block'; // Show the message box
}

function isValidUsername(username) {
    // Must be between 3 and 20 characters long
    // Allowed characters: alphanumeric characters (letters A-Z, numbers 0-9), hyphens (-), and underscores (_)
    // Must start with a letter
    // Cannot contain spaces or special characters other than hyphens and underscores
    const usernameRegex = /^[A-Za-z][A-Za-z0-9_-]{2,19}$/;
    return usernameRegex.test(username);
}

function isValidPassword(password) {
    // Must be at least 8 characters long
    // Must contain at least one uppercase letter, one lowercase letter, one number, and one special character
    // Allowed special characters: !@#$%^&*()-_=+[]{}|;:'",.<>?/`~
    // Cannot contain spaces
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}

function isValidEmail(email) {
    // Must be a valid email address format (e.g., username@example.com)
    // Cannot contain spaces
    // Must contain an "@" symbol followed by a domain name (.com, .net, .io)
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}
