// Load all categories
fetch("http://localhost:8080/categories")
    .then(response => response.json())
    .then(categories => {

        let categoriesDiv = document.getElementById("categories");

        categories.forEach(category => {

            let card = document.createElement("div");

            card.className = "product-card";

            card.innerHTML = `
                <h2>${category.name}</h2>

                <p>Category ID: ${category.id}</p>

                <button onclick="updateCategory(${category.id})">
                    Update
                </button>

                <button onclick="deleteCategory(${category.id})">
                    Delete
                </button>
            `;

            categoriesDiv.appendChild(card);
        });

    })
    .catch(error => {

        console.log("Category Error:", error);

    });


// Add Category
function addCategory() {

    let categoryName =
        document.getElementById("categoryName").value;

    let categoryData = {

        name: categoryName

    };


    fetch("http://localhost:8080/admin/categories", {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        credentials: "include",

        body: JSON.stringify(categoryData)

    })

    .then(response => response.json())

    .then(data => {

        console.log("Add Category Response:", data);

        alert("Category added successfully!");

        location.reload();

    })

    .catch(error => {

        console.log("Add Category Error:", error);

        alert("Failed to add category!");

    });

}


// Update Category
function updateCategory(id) {

    let newName =
        prompt("Enter new Category Name:");

    let categoryData = {

        name: newName

    };


    fetch("http://localhost:8080/admin/categories/" + id, {

        method: "PUT",

        headers: {

            "Content-Type": "application/json"

        },

        credentials: "include",

        body: JSON.stringify(categoryData)

    })

    .then(response => response.json())

    .then(data => {

        console.log("Update Category Response:", data);

        alert("Category updated successfully!");

        location.reload();

    })

    .catch(error => {

        console.log("Update Category Error:", error);

        alert("Failed to update category!");

    });

}


// Delete Category
function deleteCategory(id) {

    fetch("http://localhost:8080/admin/categories/" + id, {

        method: "DELETE",

        credentials: "include"

    })

    .then(response => response.text())

    .then(message => {

        alert(message);

        location.reload();

    })

    .catch(error => {

        console.log("Delete Category Error:", error);

    });

}

function logoutAdmin() {

    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userRole");
}