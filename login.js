document.addEventListener("DOMContentLoaded", function () {
    // Function to handle form submission
    function handleFormSubmission(event) {
        event.preventDefault(); 

        
        var enteredUsername = document.getElementById("username").value;
        var enteredPassword = document.getElementById("password").value;

        
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                if (!response.ok) {
                    throw new Error("API call unsuccessful");
                }
                return response.json();
            })
            .then(users => {
                // Validate the user-entered combination of username and password
                var matchingUser = users.find(user => user.username === enteredUsername && user.email === enteredPassword);

                displayMessage(matchingUser);
            })
            .catch(error => {
                alert("Error: " + error.message);
            });
    }

    
    function displayMessage(matchingUser) {
        var messageBox = document.getElementById("message-box");

        // Makes sure there is only one message box
        if (!messageBox) {
            messageBox = document.createElement("div");
            messageBox.id = "message-box";
            document.querySelector(".login-form").appendChild(messageBox);
        }

        var messageParagraph = document.createElement("p");

        if (matchingUser) {
            // Success message
            messageParagraph.textContent = "Login successful.";
            
        } else {
            // Error message
            messageParagraph.textContent = "Invalid username or password. Please try again.";
            
        }

        // Apply styles to the message box container
        messageBox.style.border = "2px solid #ccc";
        messageBox.style.padding = "10px";
        messageBox.style.margin = "20px";
        messageBox.style.backgroundColor = "#f9f9f9";

        // Clear previous content and append the new message
        messageBox.innerHTML = "";
        messageBox.appendChild(messageParagraph);
    }

    // Attach the handleFormSubmission function to the form's submit event
    var loginForm = document.querySelector(".login-form form");
    loginForm.addEventListener("submit", handleFormSubmission);
});