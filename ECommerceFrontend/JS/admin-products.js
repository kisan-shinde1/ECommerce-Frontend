fetch("http://localhost:8080/products")
    .then(response => response.json())
    .then(products => {

        let productsDiv = document.getElementById("products");

        products.forEach(product => {

            let card = document.createElement("div");

            card.className = "product-card";

            card.innerHTML = `
                <h2>${product.name}</h2>

                <p>${product.description}</p>

                <p>
                    Price: ₹${product.price}
                </p>

                <p>
                    Quantity: ${product.quantity}
                </p>

                <p>
                    Category:
                    ${
                        product.category
                        ? product.category.name
                        : "No Category"
                    }
                </p>

                <button onclick="updateProduct(${product.id})">
                    Update
                </button>

                <button onclick="deleteProduct(${product.id})">
                    Delete
                </button>
            `;

            productsDiv.appendChild(card);
        });

    })
    .catch(error => {

        console.log("Product Error:", error);

    });



function addProduct() {

    let productData = {

        name: document.getElementById("name").value,

        description: document.getElementById("description").value,

        price: Number(
            document.getElementById("price").value
        ),

        quantity: Number(
            document.getElementById("quantity").value
        ),

        category: {
            id: Number(
                document.getElementById("categoryId").value
            )
        }
    };


    fetch("http://localhost:8080/admin/products", {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        credentials: "include",

        body: JSON.stringify(productData)

    })

    .then(response => response.json())

    .then(data => {

        console.log("Add Product Response:", data);

        alert("Product added successfully!");

        location.reload();

    })

    .catch(error => {

        console.log("Add Product Error:", error);

        alert("Failed to add product!");

    });

}



function updateProduct(id) {

    let name = prompt("Enter Product Name:");

    let description = prompt("Enter Description:");

    let price = prompt("Enter Price:");

    let quantity = prompt("Enter Quantity:");

    let categoryId = prompt("Enter Category ID:");


    let productData = {

        name: name,

        description: description,

        price: Number(price),

        quantity: Number(quantity),

        category: {
            id: Number(categoryId)
        }
    };


    fetch("http://localhost:8080/admin/products/" + id, {

        method: "PUT",

        headers: {

            "Content-Type": "application/json"

        },

        credentials: "include",

        body: JSON.stringify(productData)

    })

    .then(response => response.json())

    .then(data => {

        console.log("Update Product Response:", data);

        alert("Product updated successfully!");

        location.reload();

    })

    .catch(error => {

        console.log("Update Product Error:", error);

        alert("Failed to update product!");

    });

}



function deleteProduct(id) {

    fetch("http://localhost:8080/admin/products/" + id, {

        method: "DELETE",

        credentials: "include"

    })

    .then(response => response.text())

    .then(message => {

        alert(message);

        location.reload();

    })

    .catch(error => {

        console.log("Delete Error:", error);

    });

}

function logoutAdmin() {

    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userRole");
}