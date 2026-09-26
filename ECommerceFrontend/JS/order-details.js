let params = new URLSearchParams(window.location.search);
let orderId = params.get("id");

let orderDiv = document.getElementById("orderDetails");

// Get order information
fetch("http://localhost:8080/orders/" + orderId)
    .then(response => response.json())
    .then(order => {

        orderDiv.innerHTML = `
            <div class="product-card">

                <h2>Order ID: ${order.id}</h2>

                <p>
                    <strong>Status:</strong> ${order.status}
                </p>

                <p>
                    <strong>Order Date:</strong> ${order.orderDate}
                </p>

                <p>
                    <strong>Total Amount:</strong> ₹${order.totalAmount}
                </p>

            </div>

            <h2>Ordered Products</h2>

            <div id="orderItems"></div>
        `;

        // Now get order items
        return fetch(
            "http://localhost:8080/orders/" + orderId + "/items"
        );
    })
    .then(response => response.json())
    .then(items => {

        let itemsDiv = document.getElementById("orderItems");

        items.forEach(item => {

            let itemTotal = item.price * item.quantity;

            let card = document.createElement("div");

            card.className = "product-card";

            card.innerHTML = `
                <h2>${item.product.name}</h2>

                <p>
                    ${item.product.description}
                </p>

                <p>
                    <strong>Price:</strong>
                    ₹${item.price}
                </p>

                <p>
                    <strong>Quantity:</strong>
                    ${item.quantity}
                </p>

                <p>
                    <strong>Item Total:</strong>
                    ₹${itemTotal}
                </p>
            `;

            itemsDiv.appendChild(card);
        });
    })
    .catch(error => {
        console.log("Order Details Error:", error);
    });