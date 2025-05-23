function validateForm() {
    const name = document.getElementById("name").value.trim();
    const address = document.getElementById("address").value.trim();
    const email = document.getElementById("email").value.trim();
    const cardNumber = document.getElementById("cardNumber").value.replace(/\s+/g, '');
    const expiry = document.getElementById("expiry").value.trim();
    const cvv = document.getElementById("cvv").value.trim();
    const errorMsg = document.getElementById("errorMsg");
  
    errorMsg.textContent = ""; // reset
  
    // Basic required fields
    if (!name || !address || !email || !cardNumber || !expiry || !cvv) {
      errorMsg.textContent = "Please fill out all fields.";
      return false;
    }
  
    // Email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errorMsg.textContent = "Invalid email format.";
      return false;
    }
  
    // Credit card (Luhn algorithm)
    if (!isValidCardNumber(cardNumber)) {
      errorMsg.textContent = "Invalid credit card number.";
      return false;
    }
  
    // CVV (3 or 4 digits)
    if (!/^\d{3,4}$/.test(cvv)) {
      errorMsg.textContent = "CVV must be 3 or 4 digits.";
      return false;
    }
  
    // Expiry date validation
    if (!/^\d{2}\/\d{2}$/.test(expiry)) {
      errorMsg.textContent = "Invalid expiry format. Use MM/YY.";
      return false;
    }
  
    const [month, year] = expiry.split("/").map(Number);
    const now = new Date();
    const expDate = new Date(2000 + year, month);
    if (month < 1 || month > 12 || expDate <= now) {
      errorMsg.textContent = "Card expiry is invalid or has passed.";
      return false;
    }
  
    alert("✅ Order submitted successfully!");
    return true;
  }
  
  // Luhn Algorithm for card validation
  function isValidCardNumber(number) {
    let sum = 0;
    let shouldDouble = false;
    for (let i = number.length - 1; i >= 0; i--) {
      let digit = parseInt(number.charAt(i));
      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }
      sum += digit;
      shouldDouble = !shouldDouble;
    }
    return sum % 10 === 0;
  }