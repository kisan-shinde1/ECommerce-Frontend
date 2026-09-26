let userRole = localStorage.getItem("userRole");

if (userRole !== "ADMIN") {

    alert("Access denied! Admin only.");

    window.location.href = "index.html";
}


let userName = localStorage.getItem("userName");

document.getElementById("adminInfo").innerHTML =
    "<h3>Welcome, " + userName + "</h3>";



function openProducts() {

    window.location.href = "admin-products.html";

}



function openCategories() {

    window.location.href = "admin-categories.html";

}



function openUsers() {

    window.location.href = "admin-users.html";

}



function openOrders() {

    window.location.href = "admin-orders.html";

}



function logoutAdmin() {

    localStorage.removeItem("userId");

    localStorage.removeItem("userName");

    localStorage.removeItem("userEmail");

    localStorage.removeItem("userRole");

}