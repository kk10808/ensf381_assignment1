document.addEventListener("DOMContentLoaded", function () {
    var cart = [];

    
    function createCartDisplay() {
        var cartSection = document.createElement("div");
        cartSection.id = "cart-display";
    
        
        var productListContainer = document.querySelector(".product-list");
    
        
        productListContainer.appendChild(cartSection);
    }

    
    function updateCartDisplay() {
        var cartSection = document.getElementById("cart-display");
        cartSection.innerHTML = ""; 

        if (cart.length === 0) {
            cartSection.innerHTML = "<p>Your cart is empty.</p>";
        } else {
            cart.forEach(function (item) {
                var cartItem = document.createElement("div");
                cartItem.classList.add("cart-item");

                
                cartItem.textContent = item.name + " - $" + item.price + " - Quantity: " + item.quantity;

                
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

    
    var addToCartButtons = document.querySelectorAll(".product button");
    addToCartButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {
        var product = {
            name: document.querySelectorAll(".product h2")[index].textContent,
            price: parseFloat(document.querySelectorAll(".product .price")[index].textContent.replace(/,/g, '').slice(1))
        };
        addToCart(product);
    });
});

    
    document.addEventListener("mouseover", function (event) {
        if (event.target.classList.contains("remove-btn")) {
            event.target.style.backgroundColor = "#ff0000";
        }
    });

    
    document.addEventListener("mouseout", function (event) {
        if (event.target.classList.contains("remove-btn")) {
            event.target.style.backgroundColor = "#333";
        }
    });

    
    createCartDisplay();
});
