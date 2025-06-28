document.addEventListener("DOMContentLoaded", () => {
    const addbtn = document.querySelectorAll(".add")

    addbtn.forEach(add => {
        add.addEventListener('click', ()=> {
            const row = add.closest('tr')
            if(!row) return

            const name =row.children[0]?.innerText.trim();
            const quantity = row.children[1]?.innerText.replace(/\D/g, '').trim();
            const rate = row.children[2]?.innerText.trim();
            const tax = row.children[3]?.innerText.trim();
            const amount = row.children[4]?.innerText.replace(/\D/g, '').trim();

            const item ={
                name,
                quantity,
                rate,
                tax, 
                amount
            }

            const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []

            cartItems.push(item)

            localStorage.setItem('cartItems', JSON.stringify(cartItems))

            alert('Added to cart!')
        }) 
    });
    document.getElementById('next_btn')?.addEventListener('click', () =>{
        window.location.href = 'vetrisupermarket.html'
    })
})


document.addEventListener("DOMContentLoaded", ()=>{
    const rows = document.querySelectorAll('.product-row')

    rows.forEach(r => {
        const qtyEl = r.querySelector(".item-qty");
        const rateEl = r.querySelector(".item-rate");
        const taxEl = r.querySelector(".item-tax");
        const amountEl = r.querySelector(".item-amt");
        const increaseBtn = r.querySelector(".add-button");
        const decreaseBtn = r.querySelector(".subtract-button");

        function updateAmount(){
            let quantity = parseInt(qtyEl.textContent) || 0
            let rate = parseInt(rateEl.textContent) || 0
            let tax = parseInt(taxEl.textContent) || 0

            const amnt = (quantity * rate) + tax
            amountEl.textContent = amnt.toFixed()
            
        }

        increaseBtn.addEventListener("click", ()=> {
            let current = parseInt(qtyEl.textContent) || 0
            qtyEl.textContent = current + 1
            updateAmount()
        })

        decreaseBtn.addEventListener("click", ()=> {
            let current = parseInt(qtyEl.textContent) || 0
            if(current > 0){
                qtyEl.textContent = current -1
                updateAmount()
            }
        })

        updateAmount()

    })

})



