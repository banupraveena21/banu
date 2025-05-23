const products = [
    { id: 1, name: "Wireless Headphones", description: "High quality sound" },
    { id: 2, name: "Smart Watch", description: "Track your fitness" },
    { id: 3, name: "Bluetooth Speaker", description: "Portable speaker" },
  ];
  
  const productList = document.getElementById("productList");
  const wishlistDiv = document.getElementById("wishlist");
  
  // Load wishlist from localStorage or start empty
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  
  function saveWishlist() {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }
  
  // Render products with "Add to Wishlist" buttons
  function renderProducts() {
    productList.innerHTML = "";
    products.forEach(product => {
      const div = document.createElement("div");
      div.className = "product";
      const isInWishlist = wishlist.find(item => item.id === product.id);
      div.innerHTML = `
        <strong>${product.name}</strong><br>
        <small>${product.description}</small><br><br>
        <button ${isInWishlist ? "disabled" : ""} onclick="addToWishlist(${product.id})">
          ${isInWishlist ? "Added to Wishlist" : "Add to Wishlist"}
        </button>
      `;
      productList.appendChild(div);
    });
  }
  
  // Render wishlist items
  function renderWishlist() {
    wishlistDiv.innerHTML = "";
    if (wishlist.length === 0) {
      wishlistDiv.innerHTML = "<p>Your wishlist is empty.</p>";
      return;
    }
    wishlist.forEach(item => {
      const div = document.createElement("div");
      div.className = "wishlist-item";
      div.innerHTML = `
        <strong>${item.name}</strong><br>
        <small>${item.description}</small><br><br>
        <button onclick="removeFromWishlist(${item.id})">Remove from Wishlist</button>
      `;
      wishlistDiv.appendChild(div);
    });
  }
  
  // Add product to wishlist
  function addToWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    if (!wishlist.find(item => item.id === productId)) {
      wishlist.push(product);
      saveWishlist();
      renderProducts();
      renderWishlist();
    }
  }
  
  // Remove product from wishlist
  function removeFromWishlist(productId) {
    wishlist = wishlist.filter(item => item.id !== productId);
    saveWishlist();
    renderProducts();
    renderWishlist();
  }
  
  // Initialize UI
  renderProducts();
  renderWishlist();