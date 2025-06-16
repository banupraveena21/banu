localStorage.setItem("username","praveena")
localStorage.setItem("password","banu21")

document.getElementById("loginForm").addEventListener("submit",function(e){
    e.preventDefault()

    const storedUsername=localStorage.getItem("username");
    const storedPassword=localStorage.getItem("password")
    
    const enteredUsername=document.getElementById("name").value
    const enteredPassword=document.getElementById("pass").value

    if(enteredUsername.length<=5){
        alert("Username must be more than 5 characters")
    }

    if(enteredUsername===storedUsername && enteredPassword===storedPassword){
        window.location.href="home.html"
    }else{
        document.getElementById("message").textContent="Incorrect Username or Password"
    }
})