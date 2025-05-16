//Task132: Store & Retireve a username using LocalStorage//
const username="banu"
localStorage.setItem("Username",username);
//to Retrieve
const storeduser=localStorage.getItem("Username")
if(storeduser){
    console.log("Username:", storeduser)
}else{
    console.log("No username found");
}

//Task133: Save and load dark/light mode settings using LocalStorage.//
const themeToggle=document.getElementById('themeToggle')
const body=document.body;
const darkmodeclass='darkmode'
const themekey='theme'
function setTheme(theme){
    if(theme==='dark'){
        body.classList.add(darkmodeclass);
    }else{
        body.classList.remove(darkmodeclass)
    }
}
function saveTheme(theme){
    localStorage.setItem(themekey,theme)
}
function loadtheme(){
    const savedtheme=localStorage.getItem(themekey)
    if(savedTheme){
        setTheme(savedtheme);
    }
}
themeToggle.addEventListener('click',()=>{
    if(body.classList.contains(darkmodeclass)){
        setTheme('light')
        saveTheme('light')
    }else{
        setTheme('dark')
        saveTheme('dark')
    }
})

//Task134: Implement a shopping cart that remembers selected items using LocalStorage.//
const products = [
    { id: 1, name: "Apple", price: 30 },
    { id: 2, name: "Banana", price: 10 },
    { id: 3, name: "Orange", price: 20 }
  ];

  // Initialize cart from localStorage or as empty object
  let cart = JSON.parse(localStorage.getItem('cart')) || {};

  // Function to save cart to localStorage
  function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  // Function to render product list
  function renderProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `
        <strong>${product.name}</strong> - ₹${product.price}
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productList.appendChild(div);
    });
  }

  // Function to add product to cart
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (cart[productId]) {
      cart[productId].quantity += 1;
    } else {
      cart[productId] = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1
      };
    }
    saveCart();
    renderCart();
  }

  // Function to remove product from cart
  function removeFromCart(productId) {
    delete cart[productId];
    saveCart();
    renderCart();
  }

  // Function to render cart items
  function renderCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let total = 0;
    for (let key in cart) {
      const item = cart[key];
      const subtotal = item.price * item.quantity;
      total += subtotal;
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.name}</td>
        <td>₹${item.price}</td>
        <td>${item.quantity}</td>
        <td>₹${subtotal}</td>
        <td><span class="remove-btn" onclick="removeFromCart(${item.id})">Remove</span></td>
      `;
      cartItems.appendChild(row);
    }
    document.getElementById('cart-total').textContent = total;
  }

  // Initial render
  renderProducts();
  renderCart();
//Task135: Store and retrieve session-based login status using SessionStorage. //
sessionStorage.setItem('isLoggedIn',JSON.stringify(true));
sessionStorage.setItem('username',JSON.stringify(username))
const isLoggedIn=JSON.parse(sessionStorage.getItem('isLoggedIn'))
const user=JSON.parse(sessionStorage.getItem('username'))
if(isLoggedIn){
    console.log(`Username Retrieved, ${user}`);
}else{
    console.log("please Login");
}

//Task136: Save form input values temporarily in SessionStorage and restore on page reload.//
const form=document.getElementById('myform')
const inputs=form.querySelectorAll('input')
const formvalueskey='formValues'
function saveform(){
    const formValues={};
    inputs.forEach(input=>{
        formValues[input.id]=input.value
    })
    sessionStorage.setItem(formvalueskey,JSON.stringify(formValues))
}
function restoreform(){
    const storedvalues=sessionStorage.getItem(formvalueskey)
    if(storedvalues){
        const formValues=JSON.parse(storedvalues)
        inputs.forEach(input=>{
            if(formValues[input.id]){
                input.value=formValues[input.id]
                    }
        })
    }
}

inputs.forEach(input=>{
    input.addEventListener('input',saveform)
})
window.addEventListener('submit',()=>{
    sessionStorage.removeItem(formvalueskey);
})

//Task137: Store last visited page in LocalStorage and display it on the next visit.//
window.addEventListener('beforeunload',()=>{
    localStorage.setItem('lastVisitedPage',window.location.href)
})
window.addEventListener('load',()=>{
    const lastVisitedPage=localStorage.getItem('lastVisitedPage')
    if(lastVisitedPage){
        console.log(`Last Visited Page:, ${lastVisitedPage}`)
    }
})

//Task138:Implement a simple click counter using LocalStorage.//
const click=document.getElementById('click')
const countdisplay=document.getElementById('clickcount')
let clickcount=localStorage.getItem('clickcount')||0
countdisplay.textContent=clickcount
click.addEventListener("click",()=>{
    clickcount++
    countdisplay.textContent=clickcount
    localStorage.setItem('clickcount',clickcount)
})

//Task139: Save and retrieve a to-do list using LocalStorage with JSON. //
function saveToDoList(todolist){
    localStorage.setItem('todolist',JSON.stringify(todolist))
}
function gettodolist(){
    const storedlist=localStorage.getItem('todolist')
    return storedlist ? JSON.parse(storedlist):[];
}
let todo=gettodolist();
todo.push({text:'buy groceries',completed:false})
saveToDoList(todo)
todo=gettodolist()
console.log(todo);

//Task140: Convert a JavaScript object to a JSON string using JSON.stringify() and store it.//
const person={
    name:"banu",
    age:33,
city:"hosur"
}
const person1=JSON.stringify(person);
console.log(person1);

//Task141:Convert a JSON string back to a JavaScript object using JSON.parse() and use it.//
const person2=JSON.parse(person1)
console.log(person2);

//Task142: Create a survey form where responses are saved in SessionStorage. //
const survey=document.getElementById('survey')
survey.addEventListener('submit',(e)=>{
    event.preventDefault();
    const formData=new FormData(survey)
    const response={}
    formData.forEach((value,key) => {
        response[key]=value
    })
    sessionStorage.setItem('sureveyresponse',JSON.stringify(response))
    alert('Response saved')
    form.reset()
})
window.addEventListener('load',()=>{
    const savedresponse=sessionStorage.getItem('surveyresponse')
    if(savedresponse){
        const response=JSON.parse(savedresponse)
        document.getElementById('full').value=response.name ||"";
        document.getElementById('aging').value=response.name ||"";
    }
})

//Task143:Store the number of page visits in LocalStorage. //
let visitcount=localStorage.getItem('visitcount')
if(!visitcount){
    visitcount=1
}else{
    visitcount=parseInt(visitcount)+1
}
localStorage.setItem('visitcount',visitcount)
console.log('Page Visit Count:',visitcount)

//Task144: Create a quiz system where answers persist using SessionStorage and JSON. //

//MiniProject1:StopWatch With sessionStorage//
let startTime=0
let elapsed=0
let timer;
const time=document.getElementById('time')
const startstopbtn=document.getElementById('startstop')
const resetbtn=document.getElementById('reset')
if(sessionStorage.getItem('elapsed')){
    elapsed=parseInt(sessionStorage.getItem('elapsed'))
    displayTime();
}
function startstop(){
    if(!timer){
        startTime=Date.now()-elapsed
        timer=setInterval(updateDisplay,10)
        startstopbtn.textContent="pause"
    }else{
        clearInterval(timer)
        timer=null
        startstopbtn.textContent='Resume'
    }
}
function reset(){
    clearInterval(timer)
    timer=null
    startstopbtn.textContent='Start'
    elapsed=0
    sessionStorage.removeItem('elapsed')
    displayTime()
}
function updateDisplay(){
    elapsed=Date.now()- startTime
    displayTime()
    sessionStorage.setItem('elapsed',elapsed)
}
function displayTime(){
    const milliseconds=Math.floor((elapsed % 1000)/10)
    const seconds=Math.floor((elapsed / 1000)%60)
    const minutes=Math.floor((elapsed/(1000*60))%60)
    const hours=Math.floor((elapsed/(1000*60*60))%24)
    time.textContent=
    (hours<10?"0"+hours:hours)+":"+
    (minutes<10?"0"+minutes:minutes)+":"+
    (seconds<10?"0"+seconds:seconds)+":"+
    (milliseconds<10?"0"+milliseconds:milliseconds)
}
startstopbtn.addEventListener('click',startstop)
resetbtn.addEventListener('click',reset)

//MiniProject2:Notes App Using LocalStorage//
const noteInput = document.getElementById('note-input');
    const saveButton = document.getElementById('save-button');
    const notesList = document.getElementById('notes-list');
// Function to save note to local storage//
    function saveNote() {
        const noteText = noteInput.value;
        if (noteText.trim() !== '') {
            let notes = JSON.parse(localStorage.getItem('notes') || '[]');
            notes.push(noteText);
            localStorage.setItem('notes', JSON.stringify(notes));
            noteInput.value = '';
            displayNotes();
        }
    }
 // Function to display notes from local storage//
    function displayNotes() {
        notesList.innerHTML = '';
        const notes = JSON.parse(localStorage.getItem('notes') || '[]');
        notes.forEach((note, index) => {
            const li = document.createElement('li');
            li.textContent = note;
            
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
             deleteButton.addEventListener('click', () => {
                deleteNote(index);
            });
            li.appendChild(deleteButton);
            notesList.appendChild(li);
        });
    }

     
    function deleteNote(index) {
        let notes = JSON.parse(localStorage.getItem('notes') || '[]');
        notes.splice(index, 1);
        localStorage.setItem('notes', JSON.stringify(notes));
        displayNotes();
    }

        saveButton.addEventListener('click', saveNote);
 displayNotes();