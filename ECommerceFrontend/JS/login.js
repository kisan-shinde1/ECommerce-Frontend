function loginUser() {

    let loginData = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    fetch("http://localhost:8080/users/login", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        credentials: "include",

        body: JSON.stringify(loginData)

    })

    .then(response => response.json())

    .then(data => {

        console.log("Login Response:", data);

        if (data.message === "Login successful") {

            localStorage.setItem("userId", data.id);
            localStorage.setItem("userName", data.name);
            localStorage.setItem("userEmail", data.email);
            localStorage.setItem("userRole", data.role);

            alert("Login successful!");

            let role = String(data.role).trim().toUpperCase();

            if (role === "ADMIN") {

                window.location.href = "admin.html";

            } else {

                window.location.href = "index.html";
            }

        } else {

            alert(data.message);
        }

    })

    .catch(error => {

        console.log("Login Error:", error);

        alert("Login failed!");

    });

}