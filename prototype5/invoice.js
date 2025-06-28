
function downloadPDF(){
    const orderid = document.getElementById('order-number').innerText
    const name = document.getElementById('name').innerText
    const phone = document.getElementById('phone').innerText
    const Email = document.getElementById('email').innerText

    const cart = JSON.parse(localStorage.getItem('cartItems')) || []

    const pdfContent = document.createElement('div')
    pdfContent.innerHTML = `
    <h2>Order Summary</h2>
    <p><strong></strong> ${name}</p>
    <p><strong></strong> ${Email}</p>
    <p><strong></strong> ${phone}</p>
    <p><strong>Order ID:</strong> ${orderid}</p>
    <br>
    <table style="width: 100%; border: 1px solid black";>
      <thead>
        <tr style="border: 1px solid black";>
          <th style="border: 1px solid black";>Items</th>
          <th style="border: 1px solid black";>Quantity</th>
          <th style="border: 1px solid black";>Price</th>
        </tr>
      </thead>
      <tbody>
        ${cart.map(item => `
          <tr style="border: 1px solid black";>
            <td style="border: 1px solid black";>${item.name}</td>
            <td style="border: 1px solid black";>${item.quantity}</td>
            <td style="border: 1px solid black";>${item.amount}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
    

  html2pdf().from(pdfContent).set({
    margin: 10,
    filename: 'order-details.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  }).save()
}