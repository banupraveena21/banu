
document.addEventListener("DOMContentLoaded", () =>{
    const data = JSON.parse(localStorage.getItem("cartItems")) || []

    let tax = 0
    let totalAmount = 0
    let subTotal = 0

    data.forEach(item => {
        tax += parseInt(item.tax) || 0
        totalAmount += parseInt(item.amount) || 0
        subTotal = totalAmount - tax
    });
    document.getElementById("tax").innerText = tax
    document.getElementById('collected-amount').innerText = totalAmount
    document.getElementById('subtotal').innerText = subTotal
    document.getElementById('total-amount').innerText = totalAmount

    document.getElementById('pay-btn')?.addEventListener('click', () =>{
        window.location.href = 'invoice.html'
    })
})

