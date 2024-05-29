document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signup-form");
    const loginForm = document.getElementById("login-form");
    const signupContainer = document.getElementById("signup-container");
    const loginContainer = document.getElementById("login-container");
    const productSection = document.getElementById("product-section");
    const productList = document.getElementById("product-list");
    const allProductsButton = document.getElementById("all-products");
    const menProductsButton = document.getElementById("men-products");
    const jeweleryButton = document.getElementById("jewelery");
    const electronicsButton = document.getElementById("electronics");
    const womensButton = document.getElementById("womens");
  
    if (signupForm) {
      signupForm.addEventListener('submit', (e) => {
          e.preventDefault();
          signupContainer.classList.add('hidden');
          productSection.classList.remove('hidden');
          fetchProducts();
      });
    }
  
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
          e.preventDefault();
          loginContainer.classList.add('hidden');
          productSection.classList.remove('hidden');
          fetchProducts();
      });
    }
  
    allProductsButton.addEventListener("click", () => {
      fetchProducts();
    });
  
    menProductsButton.addEventListener("click", () => {
      fetchProducts("men's clothing");
    });
  
    jeweleryButton.addEventListener("click", () => {
      fetchProducts("jewelery");
    });
  
    electronicsButton.addEventListener("click", () => {
      fetchProducts("electronics");
    });
  
    womensButton.addEventListener("click", () => {
      fetchProducts("women's clothing");
    });
  
    function fetchProducts(category = "") {
      let url = "https://fakestoreapi.com/products";
      if (category) {
        url += `/category/${encodeURIComponent(category)}`;
      }
      fetch(url)
        .then((response) => response.json())
        .then((products) => {
          displayProducts(products);
        })
        .catch((error) => console.error("Error fetching products:", error));
    }
  
    function displayProducts(products) {
      productList.innerHTML = "";
      products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.innerHTML = `
          <img src="${product.image}" alt="${product.title}">
          <h3>${product.title}</h3>
          <p>$${product.price}</p>
        `;
        productList.appendChild(productCard);
      });
    }
  });
  
