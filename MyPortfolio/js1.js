function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function changeTextColor() {
    const textElement = document.getElementById('myText');
    textElement.style.color = getRandomColor();
  }
  
  setInterval(changeTextColor, 1000);

  function myFunction() {
    var x = document.getElementById("hidden-social");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}

const clickbtn=document.getElementById('click')
const loginPopup = document.getElementById('loginPopup');
clickbtn.addEventListener('click',()=>{
    if(loginPopup.style.display==="none"){
        loginPopup.style.display='block'
    }else{
        loginPopup.style.display='none'
    }
    
})