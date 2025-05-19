//Task1: Write a program that handles a syntax error using try...catch.//

function ParsonJson(stringJson){
try{
    const parsedObject=JSON.parse(stringJson)
    console.log("Converted Object:",parsedObject);
    return parsedObject;
}catch(error){
    console.error("Error Ocurred:",error)
    return null
}
}
const correctJson='{"name":"banu","age":33}'
ParsonJson(correctJson);

const uncorrectJson='{"name":"banu","age":33'
ParsonJson(uncorrectJson)

//Task2: Catch and handle a Reference Error when trying to use an undefined variable.//
try {
    // Code that might throw an error
    let result = someUndefinedVariable + 10; 
    console.log("Result:", result);
  } catch (error) {
    if (error instanceof ReferenceError) {
      console.error("A ReferenceError occurred:", error.message);
    } else {
      console.error("An error occurred:", error.message);
    }
  } 

  //Task3: Use try...catch to handle division by zero error. //
  function divide(numerator, denominator) {
    try {
      if (denominator === 0) {
        throw new Error("Division by zero is not allowed");
      }
      const result = numerator / denominator;
      return result;
    } catch (error) {
      return error.message;
    }
  }
  
  console.log(divide(10, 2));
  console.log(divide(10, 0));

  //Task4: Throw a custom error when a user inputs an invalid age. //
  function validateAge(age){
    if(age <= 0 || age >150 ){
        throw new RangeError("Enter Your Real Age or Positive Number")
    }
  }
  try{
    const ValidAge=prompt("Enter Your age in Number")
    const age=parseInt(ValidAge)
    validateAge(age)
    console.log("Age is Valid:", age)
  }catch (err){
    if(err instanceof RangeError){
        console.log("Invalid age or Negative Number:",err.message);
    }
  }

  //Task5:Create a function that throws a TypeError if input is not a number.//
  function validateNumber(num){
    if(typeof num!=='number'){
        throw new TypeError("Enter a Valid Number")
    }
     }

  try{
    const num=50;
    validateNumber(num)
    console.log("It is Number");
  }catch(error){
    if(error instanceof TypeError){
        console.log("Invalid Input Type", error.message);
    }
  }

  //Task6:Implement nested try...catch blocks to handle multiple errors.//
  //Task11:. Use finally to execute cleanup code even if an error occurs.//
  function performOperations(a, b, c) {
    try {
      console.log("Outer try block started");
  
      try {
        console.log("Inner try block (division) started");
        if (b === 0) {
          throw new Error("Division by zero error!");
        }
        const result = a / b;
        console.log("Division result:", result);
        try {
            console.log("Inner try block (string manipulation) started")
            if (typeof c !== 'string'){
                throw new TypeError("Input c must be a string");
            }
            console.log("String operation result:", c.toUpperCase());
        } catch (error) {
          console.error("Inner catch block (string manipulation) caught an error:", error.message);
        } finally {
          console.log("Inner finally block (string manipulation) executed");
        }
      } catch (error) {
        console.error("Inner catch block (division) caught an error:", error.message);
      } finally {
        console.log("Inner finally block (division) executed");
      }
    } catch (error) {
      console.error("Outer catch block caught an error:", error.message);
    } finally {
      console.log("Outer finally block executed");
    }
  }
  performOperations(10, 2, "hello");
  performOperations(10, 2, 123); 
  performOperations("abc", 2, "hello"); 

  //Task7:Use console.table() to display an array of objects in tabular form. //
  const person=[
    {name:'banu',age:33},
    {name:'mala',age:25},
    {name:'anu',age:45},
    {name:'guna',age:18}
  ];
  console.table(person)

  //Task8:Debug an application using console.warn() and console.error().//
  function calculateArea(height,width){
    if(width<=0 || height<=0){
        console.warn("Invalid Number. Enter Positive Values")
        return 0;
    }
    let area=height*width
    console.log("Calculated Area:",area)
  }
  calculateArea(5,5)


  function ProcessData(data){
    console.error('Data received:',data)
    if(!data||data.length==0){
        console.error('Error: Data is empty or undefined')
        return
    }
    console.error('Processed Data:',processedData)
    return processedData;
  }
  const data=null
  ProcessData(data)

  //Task9:Implement a debugger breakpoint inside a loop //
  for(let i=0;i<10;i++){
    if(i==5){
       // debugger;
    }
    console.log(i);
  }

  //Task10:Handle an API call failure using try...catch //
  async function fetchData(){
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
        if(!response.ok){
            throw new Error(`HTTP Error! : ${response.status}`)
        }
        const data1=await response.json();
        return data1;
    }catch(error){
        console.error('Fetch Error:',error)
        throw error;
    }
  }
  fetchData()
  .then (data1=>{
    console.log('data:',data1)
  })
  .catch(error=>{
    console.error('Error Caught Outside:',error)
  })

  //Task12:Prevent infinite recursion by handling a function call limit.//
  function recursiveFunction(data2, counter=0,maxdepth=10){
    if(counter>maxdepth){
        console.warn("Maximum Recursion Depth Reached")
        return;
    }
    console.log("Processing:",data2,"Depth:",counter)
    recursiveFunction(data2-1,counter+1,maxdepth)
  }
  recursiveFunction(4)

  //Task13: Implement a real-world error logging system using LocalStorage//

  //MiniProject1:User Registration Form with Validation & Error Handling //
  function validateForm() {
    let isValid = true;

    // Reset error messages
    document.getElementById("usernameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmPasswordError").textContent = "";

    // Username validation
    const username = document.getElementById("username").value;
    if (username.trim() === "") {
      document.getElementById("usernameError").textContent = "Username is required";
      isValid = false;
    }

    // Email validation
    const email = document.getElementById("email").value;
    if (email.trim() === "") {
      document.getElementById("emailError").textContent = "Email is required";
      isValid = false;
    } else if (!isValidEmail(email)) {
      document.getElementById("emailError").textContent = "Invalid email format";
      isValid = false;
    }

    // Password validation
    const password = document.getElementById("password").value;
    if (password.trim() === "") {
      document.getElementById("passwordError").textContent = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      document.getElementById("passwordError").textContent = "Password must be at least 6 characters long";
      isValid = false;
    }

    // Confirm password validation
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (confirmPassword.trim() === "") {
      document.getElementById("confirmPasswordError").textContent = "Confirm password is required";
      isValid = false;
    } else if (password !== confirmPassword) {
      document.getElementById("confirmPasswordError").textContent = "Passwords do not match";
      isValid = false;
    }

    return isValid;
  }

  function isValidEmail(email) {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  
