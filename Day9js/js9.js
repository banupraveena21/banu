//Task106: Change the Background color of page using button click//
const back=document.getElementById('back')
console.log(back);
back.addEventListener("click",(e) =>{
    document.body.classList.toggle('back')
});


//Task107: Change the text of a paragraph using a button.//
const para=document.getElementById('para')
const changetext=document.getElementById('text')
text.addEventListener("click",()=>{
    para.textContent="Hello, Have a Beautiful Day!..."
})

//Task108: Hide and show an element using a toggle button.//
 const show=document.getElementById('show')
 const image=document.getElementById('image')
 show.addEventListener("click",()=>{
    if(image.style.display==="none"){
        image.style.display="block"
    }else{
        image.style.display="none"
    }
})
//Task109: Create a new Item in a list Dynamically//
const fruits=document.getElementById('fruits');
const add=document.getElementById('add')
add.addEventListener("click",()=>{
    const addFruit=prompt("Enter a fruit Name")
    const newItem=document.createElement('li')
    newItem.textContent=addFruit
    fruits.appendChild(newItem)
})

//Task110: Remove a specific item from a list. //
const remov=document.getElementById('remov')
remov.addEventListener("click",()=>{
    const removeFruit=prompt("Enter Fruit Name to Remove")
    if(fruits.lastChild)
    {
        fruits.removeChild(fruits.lastChild)
    }
})

//Task111: Change the font size of a paragraph when a button is clicked.//
const fontSize=document.getElementById('size')
const font=document.getElementById('font')
font.addEventListener("click",()=>{
    fontSize.style.fontSize="25px"
})

//Task112: Change the text color of all paragraphs using querySelectorAll().//
const para1=document.querySelectorAll('textpara')
const colorText=document.querySelectorAll('p')
colorText.forEach(textpara=>{
    textpara.style.color="red"
})

//Task113: Add a border to an image when hovered.//

//Task114: Display an alert message when a button is clicked. //
const alarm=document.getElementById('alarm')
alarm.addEventListener("click",()=>{
    alert("You Clicked Me")
})

//Task115: Toggle between two different text contents. 
const course=document.getElementById('course')
const course1=document.getElementById('course1')
const togg=document.getElementById('togg')
togg.addEventListener('click',()=>{
    const courseName=prompt("Enter Python Or Java Course")
    if(courseName==="python"){
        course.style.display="block"
    }else{
        course1.style.display="block"
    }
})

//Task116:Add a new heading to the page dynamically//
const newHeading=document.createElement('h1')
newHeading.textContent='This is an new Element'
document.body.append(newHeading )

//Task117:Remove all elements inside a div.//
const clear=document.getElementById('clear')
const clearing=document.getElementById('clearing')
clearing.addEventListener('click',()=>{
    while(clear.firstChild){
        clear.removeChild(clear.firstChild)
    }
})

//Task118:Change the text input value dynamically.//
const changeName=document.getElementById('name1')
const textchange=document.getElementById('textchange')
textchange.addEventListener('click',()=>{
    changeName.textContent="Iam BanuPraveena"
})
