document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('tablebody')

    function LoadData() {
        const items = JSON.parse(localStorage.getItem('cartItems')) || []
        tableBody.innerHTML = ""

        items.forEach((item, index) => {
            const row = document.createElement('tr')

            row.innerHTML = `
        <td>${item.name}</td>
        <td>${item.quantity}</td>
        <td>${item.rate}</td>
        <td>${item.tax}</td>
        <td>${item.amount}</td>
        <td><button class = "delete-btn" data-index ="${index}">Delete</button></td>
        `

            tableBody.appendChild(row)
        })

}

tableBody.addEventListener("click", (e) => {
    if (e.target.classList.contains('delete-btn')) {
        const index = e.target.getAttribute("data-index")

        let items = JSON.parse(localStorage.getItem('cartItems')) || []
        items.splice(index, 1)
        localStorage.setItem("cartItems", JSON.stringify(items))

        LoadData()
    }
})

LoadData()
})


document.addEventListener("DOMContentLoaded", () => {
    const final = JSON.parse(localStorage.getItem('cartItems')) || []

    let finalAmount = 0

    final.forEach(fin =>{
        finalAmount += parseInt(fin.amount) || 0
    })

    document.getElementById('final-amount').innerText = finalAmount
})


document.querySelector(".next_btn").addEventListener("click", ()=>{
          window.location.href="payment.html"  
        })

