// Get all cart items

fetch("http://localhost:8080/cart")

    .then(response => response.json())

    .then(cartItems => {

        let cartDiv = document.getElementById("cart");

        // If cart is empty

        if (cartItems.length === 0) {

            cartDiv.innerHTML = "<h2>Your cart is empty</h2>";

            // Hide Place Order button

            document.querySelector("button[onclick='placeOrder()']").style.display = "none";

            return;
        }

        // Display cart items

        cartItems.forEach(cart => {

            let card = document.createElement("div");

            card.className = "product-card";

            card.innerHTML = `

                <h2>${cart.product.name}</h2>

                <p>${cart.product.description}</p>

                <p class="price">
                    Price: ₹${cart.product.price}
                </p>

                <p>

                    Quantity:

                    <button onclick="updateQuantity(${cart.id}, ${cart.quantity - 1})">
                        -
                    </button>

                    <span>${cart.quantity}</span>

                    <button onclick="updateQuantity(${cart.id}, ${cart.quantity + 1})">
                        +
                    </button>

                </p>

                <p>
                    Total: ₹${cart.product.price * cart.quantity}
                </p>

                <button onclick="removeFromCart(${cart.id})">
                    Remove
                </button>

            `;

            cartDiv.appendChild(card);

        });

    })

    .catch(error => {

        console.log("Error:", error);

    });


// Get logged-in user ID

let userId = localStorage.getItem("userId");


// Get cart total

fetch("http://localhost:8080/cart/total/" + userId)

    .then(response => response.json())

    .then(total => {

        console.log("TOTAL RESPONSE:", total);

        let amount;

        if (typeof total === "object") {

            amount = total.total;

        } else {

            amount = total;

        }

        document.getElementById("total").innerText =
            "Cart Total: ₹" + amount;

    })

    .catch(error => {

        console.log("Total Error:", error);

    });


// Update quantity

function updateQuantity(cartId, quantity) {

    if (quantity < 1) {

        return;
    }

    fetch("http://localhost:8080/cart/" + cartId, {

        method: "PUT",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify({

            quantity: quantity

        })

    })

    .then(response => response.json())

    .then(data => {

        console.log(data);

        location.reload();

    })

    .catch(error => {

        console.log("Update Error:", error);

    });

}


// Remove product from cart

function removeFromCart(id) {

    fetch("http://localhost:8080/cart/" + id, {

        method: "DELETE"

    })

    .then(response => response.text())

    .then(message => {

        alert(message);

        location.reload();

    })

    .catch(error => {

        console.log("Error:", error);

    });

}


// Place order

function placeOrder() {

    let userId = localStorage.getItem("userId");

    fetch("http://localhost:8080/orders?userId=" + userId, {

        method: "POST"

    })

    .then(response => response.text())

    .then(data => {

        console.log(data);

        alert("Order placed successfully!");

        window.location.href = "orders.html";

    })

    .catch(error => {

        console.log("Order Error:", error);

        alert("Order failed!");

    });

}