function registerUser() {

    let user = {

        name: document.getElementById("name").value,

        email: document.getElementById("email").value,

        password: document.getElementById("password").value,

        role: "USER"

    };


    fetch("http://localhost:8080/users", {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify(user)

    })

    .then(response => {

        if (!response.ok) {

            throw new Error("Registration failed");

        }

        return response.json();

    })

    .then(data => {

        alert("Registration successful!");

        console.log(data);

        window.location.href = "login.html";

    })

    .catch(error => {

        console.log("Error:", error);

        alert("Registration failed!");

    });

}