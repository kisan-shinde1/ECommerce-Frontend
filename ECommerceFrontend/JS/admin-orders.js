fetch("http://localhost:8080/admin/orders", {
    method: "GET",
    credentials: "include"
})
.then(response => response.json())
.then(orders => {

    let ordersDiv = document.getElementById("orders");

    orders.forEach(order => {

        let card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
            <h2>Order ID: ${order.id}</h2>

            <p>
                Customer:
                ${order.user.name}
            </p>

            <p>
                Email:
                ${order.user.email}
            </p>

            <p>
                Total Amount:
                ₹${order.totalAmount}
            </p>

            <p>
                Order Date:
                ${order.orderDate}
            </p>

            <p>
                Status:
                ${order.status}
            </p>

            <button onclick="updateStatus(${order.id})">
                Update Status
            </button>

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


function updateStatus(id) {

    let status = prompt(
        "Enter Status:\nPLACED / SHIPPED / DELIVERED"
    );

    if (!status) {
        return;
    }

    fetch(
        "http://localhost:8080/admin/orders/" +
        id +
        "/status?status=" +
        status,
        {
            method: "PUT",
            credentials: "include"
        }
    )
    .then(response => response.json())
    .then(data => {

        console.log("Status Response:", data);

        alert("Order status updated successfully!");

        location.reload();

    })
    .catch(error => {

        console.log("Status Error:", error);

        alert("Failed to update order status!");

    });

}


function viewOrder(id) {

    window.location.href =
        "order-details.html?id=" + id;

}

function logoutAdmin() {

    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userRole");
}