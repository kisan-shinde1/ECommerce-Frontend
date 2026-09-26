let loggedInUserId = localStorage.getItem("userId");

if (!loggedInUserId) {
    alert("Please login first!");
    window.location.href = "login.html";
}