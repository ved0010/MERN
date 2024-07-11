document.addEventListener("DOMContentLoaded", () => {
    const productContainer = document.getElementById("product-container");
    const productModal = document.getElementById("product-modal");
    const closeModal = document.querySelector(".close");
    const productTitle = document.getElementById("product-title");
    const productImage = document.getElementById("product-image");
    const productDescription = document.getElementById("product-description");
    const productPrice = document.getElementById("product-price");
    const productBrand = document.getElementById("product-brand");
    const productStock = document.getElementById("product-stock");
    const searchBar = document.getElementById("search-bar");

    const fetchProducts = (query = '') => {
        let url = 'https://dummyjson.com/products?limit=9';
        if (query) {
            url = `https://dummyjson.com/products/search?q=${query}`;
        }
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const products = data.products;
                productContainer.innerHTML = ''; // Clear previous products
                products.forEach(product => {
                    const productCard = document.createElement("div");
                    productCard.classList.add("course");
                    productCard.innerHTML = `
                        <img src="${product.thumbnail}" alt="${product.title}">
                        <div class="product-card-content">
                            <h3>${product.title}</h3>
                            <p class="price">$${product.price.toFixed(2)}</p>
                        </div>
                    `;
                    productCard.addEventListener("click", () => {
                        productTitle.textContent = product.title;
                        productImage.src = product.thumbnail;
                        productDescription.textContent = product.description;
                        productPrice.textContent = `$${product.price.toFixed(2)}`;
                        productBrand.textContent = `Brand: ${product.brand}`;
                        productStock.textContent = `Stock: ${product.stock}`;
                        productModal.style.display = "block";
                    });
                    productContainer.appendChild(productCard);
                });
            });
    };

    fetchProducts(); // Initial fetch of products

    searchBar.addEventListener("input", (event) => {
        const query = event.target.value;
        fetchProducts(query);
    });

    closeModal.addEventListener("click", () => {
        productModal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === productModal) {
            productModal.style.display = "none";
        }
    });
});
