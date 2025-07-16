localStorage.setItem("email1","banu@gmail.com") //Trainee
localStorage.setItem("password1","banu123")

document.getElementById("loginForm").addEventListener("submit",function(e){
    e.preventDefault()

    const storedUsername=localStorage.getItem("email1");
    const storedPassword=localStorage.getItem("password1")
    
    const enteredUsername=document.getElementById("email").value
    const enteredPassword=document.getElementById("pass").value

    if(enteredUsername.length<=5){
        alert("Username must be more than 5 characters")
    }

    if(enteredUsername===storedUsername && enteredPassword===storedPassword){
        window.location.href="home1.html"
    }else{
        document.getElementById("message").textContent="Incorrect Username or Password"
    }
})

localStorage.setItem("email","praveena@gmail.com") //Admin + Trainer
localStorage.setItem("password","praveena")

document.getElementById("loginForm").addEventListener("submit",function(e){
    e.preventDefault()

    const storedUsername=localStorage.getItem("email");
    const storedPassword=localStorage.getItem("password")
    
    const enteredUsername=document.getElementById("email").value
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

