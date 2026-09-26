let userId = localStorage.getItem("userId");


fetch("http://localhost:8080/users/" + userId)

    .then(response => response.json())

    .then(user => {

        let profileDiv = document.getElementById("profile");

        profileDiv.innerHTML = `

            <div class="product-card">

                <h2>${user.name}</h2>

                <p>
                    Email: ${user.email}
                </p>

                <p>
                    Role: ${user.role}
                </p>

            </div>

        `;

    })

    .catch(error => {

        console.log("Profile Error:", error);

    });
	
	function logoutUser() {

	    localStorage.removeItem("userId");
	    localStorage.removeItem("userName");
	    localStorage.removeItem("userEmail");
	    localStorage.removeItem("userRole");

	    alert("Logout successful!");

	    window.location.href = "login.html";
	}