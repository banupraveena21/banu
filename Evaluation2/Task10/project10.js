let originalPrice = 500.00;
let currentPrice = originalPrice;

const totalPriceSpan = document.getElementById("totalPrice");
const discountInput = document.getElementById("discountCode");
const messageDiv = document.getElementById("message");

// Define valid codes and discounts
const discountCodes = {
  "SAVE10": 10,
  "WELCOME20": 20,
  "STUDENT5": 5
};

function applyDiscount() {
  const code = discountInput.value.trim().toUpperCase();

  if (discountCodes.hasOwnProperty(code)) {
    const discountPercent = discountCodes[code];
    const discountAmount = (originalPrice * discountPercent) / 100;
    currentPrice = originalPrice - discountAmount;
    totalPriceSpan.textContent = currentPrice.toFixed(2);
    messageDiv.innerHTML = `<p class="success">✅ ${discountPercent}% discount applied! New total: $${currentPrice.toFixed(2)}</p>`;
  } else {
    messageDiv.innerHTML = `<p class="error">❌ Invalid discount code.</p>`;
  }
}