let params = new URLSearchParams(window.location.search);

let id = params.get("id");

	fetch("http://localhost:8080/products/" + id)

    .then(response => response.json())

    .then(product => {

        let productDiv = document.getElementById("productDetails");

        productDiv.innerHTML = `
            <div class="product-card">

                <h2>${product.name}</h2>

                <p>${product.description}</p>

                <p class="price">₹${product.price}</p>

                <p class="quantity">
                    Available: ${product.quantity}
                </p>

                <button onclick="addToCart(${product.id})">
                    Add to Cart
                </button>

            </div>
        `;

    })

    .catch(error => {
        console.log("Error:", error);
    });


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

	        alert("Product added to cart successfully!");

	        console.log(data);

	    })

	    .catch(error => {

	        console.log("Error:", error);

	    });
	}