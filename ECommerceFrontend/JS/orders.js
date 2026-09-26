let userId = localStorage.getItem("userId");

fetch("http://localhost:8080/orders/user/" + userId)

    .then(response => response.json())

    .then(orders => {

        let ordersDiv = document.getElementById("orders");

        if (orders.length === 0) {

            ordersDiv.innerHTML = "<h2>No orders found</h2>";

            return;
        }

        orders.forEach(order => {

            let card = document.createElement("div");

            card.className = "product-card";

            card.innerHTML = `

                <h2>Order ID: ${order.id}</h2>

                <p>
                    Total: ₹${order.totalAmount}
                </p>

                <p>
                    Status: ${order.status}
                </p>

                <button onclick="viewOrder(${order.id})">
                    View Details
                </button>

            `;

            ordersDiv.appendChild(card);

        });

    })

    .catch(error => {

        console.log("Order Error:", error);

    });


function viewOrder(orderId) {

    window.location.href = "order-details.html?id=" + orderId;

}