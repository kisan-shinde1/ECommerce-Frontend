fetch("http://localhost:8080/products")
    .then(response => response.json())
    .then(products => {

        let productDiv = document.getElementById("products");

        products.forEach(product => {

            let card = document.createElement("div");

            card.className = "product-card";

            card.innerHTML = `
                <h2>${product.name}</h2>

                <p>${product.description}</p>

                <p class="price">₹${product.price}</p>

                <p class="quantity">
                    Available: ${product.quantity}
                </p>

                <button onclick="viewProduct(${product.id})">
                    View Product
                </button>

                <button onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            `;

            productDiv.appendChild(card);
        });

    })
    .catch(error => {
        console.log("Error:", error);
    });


	function viewProduct(id) {
	    window.location.href = "product.html?id=" + id;
	}


	function addToCart(productId) {

	    let userId = localStorage.getItem("userId");

	    let cartData = {
	        userId: userId,
	        productId: productId,
	        quantity: 1
	    };

	    fetch("http://localhost:8080/cart", {

	        method: "POST",

	        headers: {
	            "Content-Type": "application/json"
	        },

	        body: JSON.stringify(cartData)

	    })

	    .then(response => response.json())

	    .then(data => {

	        console.log("Cart Response:", data);

	        alert("Product " + productId + " added to cart");

	    })

	    .catch(error => {

	        console.log("Cart Error:", error);

	        alert("Failed to add product to cart");

	    });
	}