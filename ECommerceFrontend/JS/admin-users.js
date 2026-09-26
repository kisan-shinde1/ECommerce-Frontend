fetch("http://localhost:8080/users")
    .then(response => response.json())
    .then(users => {

        let usersDiv = document.getElementById("users");

        users.forEach(user => {

            let card = document.createElement("div");

            card.className = "product-card";

            card.innerHTML = `
                <h2>${user.name}</h2>

                <p>User ID: ${user.id}</p>

                <p>Email: ${user.email}</p>

                <p>Role: ${user.role}</p>

                <button onclick="updateUser(${user.id})">
                    Update
                </button>

                <button onclick="deleteUser(${user.id})">
                    Delete
                </button>
            `;

            usersDiv.appendChild(card);
        });

    })
    .catch(error => {

        console.log("User Error:", error);

    });



function updateUser(id) {

    let name = prompt("Enter User Name:");

    let email = prompt("Enter Email:");

    let role = prompt("Enter Role (USER/ADMIN):");


    let userData = {

        name: name,

        email: email,

        role: role

    };


    fetch("http://localhost:8080/admin/users/" + id, {

        method: "PUT",

        headers: {

            "Content-Type": "application/json"

        },

        credentials: "include",

        body: JSON.stringify(userData)

    })

    .then(response => response.json())

    .then(data => {

        console.log("Update User Response:", data);

        alert("User updated successfully!");

        location.reload();

    })

    .catch(error => {

        console.log("Update User Error:", error);

        alert("Failed to update user!");

    });

}



function deleteUser(id) {

    if (id == 3) {

        alert("Admin user cannot be deleted!");

        return;

    }


    fetch("http://localhost:8080/admin/users/" + id, {

        method: "DELETE",

        credentials: "include"

    })

    .then(response => response.text())

    .then(message => {

        alert(message);

        location.reload();

    })

    .catch(error => {

        console.log("Delete User Error:", error);

    });

}
function logoutAdmin() {

    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userRole");
}