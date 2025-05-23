const products = [
    { id: 1, name: "Wireless Headphones", ratings: [] },
    { id: 2, name: "Smart Watch", ratings: [] },
    { id: 3, name: "Bluetooth Speaker", ratings: [] }
  ];
  
  const productList = document.getElementById("productList");
  
  // Render products and star rating UI
  function renderProducts() {
    productList.innerHTML = "";
    
    products.forEach(product => {
      const div = document.createElement("div");
      div.className = "product";
  
      div.innerHTML = `
        <strong>${product.name}</strong>
        <div class="stars" data-productid="${product.id}">
          ${renderStars(0)}
        </div>
        <div class="average-rating" id="avg-${product.id}">
          Average Rating: ${calculateAverage(product.ratings).toFixed(1)} / 5 (${product.ratings.length} ratings)
        </div>
      `;
  
      productList.appendChild(div);
  
      // Attach event listeners to stars
      const starsDiv = div.querySelector(".stars");
      starsDiv.addEventListener("click", (e) => {
        if (e.target.classList.contains("star")) {
          const rating = parseInt(e.target.dataset.value);
          addRating(product.id, rating);
        }
      });
  
      starsDiv.addEventListener("mouseover", (e) => {
        if (e.target.classList.contains("star")) {
          highlightStars(starsDiv, parseInt(e.target.dataset.value));
        }
      });
  
      starsDiv.addEventListener("mouseout", () => {
        highlightStars(starsDiv, 0);
      });
    });
  }
  
  // Render stars HTML for a given rating (filled stars)
  function renderStars(rating) {
    let starsHtml = "";
    for (let i = 1; i <= 5; i++) {
      starsHtml += `<span class="star ${i <= rating ? "filled" : ""}" data-value="${i}">&#9733;</span>`; // ★
    }
    return starsHtml;
  }
  
  // Highlight stars on hover
  function highlightStars(container, rating) {
    const stars = container.querySelectorAll(".star");
    stars.forEach(star => {
      const val = parseInt(star.dataset.value);
      star.classList.toggle("filled", val <= rating);
    });
  }
  
  // Calculate average rating
  function calculateAverage(ratings) {
    if (ratings.length === 0) return 0;
    const sum = ratings.reduce((acc, val) => acc + val, 0);
    return sum / ratings.length;
  }
  
  // Add a new rating to a product
  function addRating(productId, rating) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    product.ratings.push(rating);
    updateProductUI(product);
  }
  
  // Update the UI after rating added
  function updateProductUI(product) {
    // Update average rating text
    const avgDiv = document.getElementById(`avg-${product.id}`);
    avgDiv.textContent = `Average Rating: ${calculateAverage(product.ratings).toFixed(1)} / 5 (${product.ratings.length} ratings)`;
  
    // Optional: You could also update the stars UI to reflect last user rating, 
    // but here stars reset after click (to encourage rating anew).
  }
  
  // Initial render
  renderProducts();