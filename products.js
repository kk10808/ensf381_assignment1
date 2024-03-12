document.addEventListener("DOMContentLoaded", function () {
    var cart = [];

    // Function to create a dynamic cart display section
    function createCartDisplay() {
        var cartSection = document.createElement("div");
        cartSection.id = "cart-display";
    
        // Get the container that holds all the products
        var productListContainer = document.querySelector(".product-list");
    
        // Append the cartSection as a child of productListContainer
        productListContainer.appendChild(cartSection);
    }

    // Function to update the cart display
    function updateCartDisplay() {
        var cartSection = document.getElementById("cart-display");
        cartSection.innerHTML = ""; // Clear previous content

        if (cart.length === 0) {
            cartSection.innerHTML = "<p>Your cart is empty.</p>";
        } else {
            cart.forEach(function (item) {
                var cartItem = document.createElement("div");
                cartItem.classList.add("cart-item");

                // Display product information
                cartItem.textContent = item.name + " - $" + item.price + " - Quantity: " + item.quantity;

                // Create Remove button
                var removeButton = document.createElement("button");
                removeButton.textContent = "Remove";
                removeButton.className = "remove-btn";
                removeButton.style.backgroundColor = "#333";
                removeButton.style.color = "white";
                removeButton.style.padding = "10px"
                removeButton.style.borderRadius = "5px";
                removeButton.style.margin = "10px";

                removeButton.addEventListener("click", function () {
                    removeFromCart(item);
                    updateCartDisplay();
                });

                cartItem.appendChild(removeButton);
                cartSection.appendChild(cartItem);
            });
        }
    }

    
    function addToCart(product) {
        var existingItem = cart.find(item => item.name === product.name);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            var newItem = {
                name: product.name,
                price: product.price,
                quantity: 1
            };
            cart.push(newItem);
        }

        alert("Product added to the cart!");
        updateCartDisplay();
    }

    
    function removeFromCart(item) {
        item.quantity -= 1;

        if (item.quantity === 0) {
            cart = cart.filter(cartItem => cartItem !== item);
        }
    }

    // Attach click event listeners to "Add to Cart" buttons
    var addToCartButtons = document.querySelectorAll(".product button");
    addToCartButtons.forEach(function (button, index) {
        button.addEventListener("click", function () {
            var product = {
                name: document.querySelectorAll(".product h2")[index].textContent,
                price: parseFloat(document.querySelectorAll(".product .price")[index].textContent.slice(1))
            };
            addToCart(product);
        });
    });

    // Attach mouseover event listener to "Remove" buttons for hover effect
    document.addEventListener("mouseover", function (event) {
        if (event.target.classList.contains("remove-btn")) {
            event.target.style.backgroundColor = "#ff0000";
        }
    });

    // Attach mouseout event listener to "Remove" buttons for removing hover effect
    document.addEventListener("mouseout", function (event) {
        if (event.target.classList.contains("remove-btn")) {
            event.target.style.backgroundColor = "#333";
        }
    });

    // Initialize the cart display section
    createCartDisplay();
});
