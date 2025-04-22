//Task14: Add 3 Numbers//
let a=150,b=250,c=475
console.log(a+b+c);

//Task15:Check Even or odd using modulus operator//
let num=5
if (num % 2==0){
    console.log("is an even number")
}
else{
    console.log("is an odd number")
}

//Task16:Increments number by ++//
let i=0; ++i
console.log(i++)
console.log(i++)
console.log(i++)
console.log(i++)
console.log(i++)
console.log(i++)
console.log(i++)
console.log(i++)
console.log(i++)
console.log(i++)

//Task17:Using Comprison Operator//
let age=18
if(age>=18){
    console.log("Eligible to Vote");
}else{
    console.log("Not Eligible");
    
}

//Task18:Compare Two Strings using == & ===//
console.log("banu" == "banu");
console.log("banu" === "banu");

//Task19:Using && //
let user="banu"
let pass="banu"
if(user && "" && pass && "banu"){
    console.log(user,pass);   
}else{
    console.log("Invalid Username or Password");
    
}

//Task20:Update Wallet Balance Using Assignment Operator//
let salary=25000
salary+=5000;
console.log("your salary is Increment by "+salary);

//Task21:Using Ternary Operator//
let stock=140
if(stock>=150){
console.log("Stock not Available")
}
else{
    console.log("Stock Available");
    
}

//Task22:Using Greater than for two numbers//
let a1=245
let b1=225
if(a1>=b1){
    console.log("Greater");
}else
{
    console.log("Not Greater");
 }

 //Task23: Discount For cart over 50//
 let carttotal=124
 let discount = carttotal >50 ?carttotal*0.10:0
 let finalprice=carttotal-discount;
 console.log("Cart Total: " +carttotal);
 console.log("Discount Applied: "+discount);
 console.log("Final Price to Pay: "+finalprice);

 //Task24:Using OR operator//
 let user1="banu"
 let pass1="banu"
 if(user1 && "banu" && pass1 && "banu"){
     console.log(user1,pass1);   
 }else{
     console.log("Invalid Username or Password");
     
 } 

 //Task25: Using if and && //
 let amount=1500
 let quantity=2
 if(amount>=1500 && quantity>=2){
   console.log("OFFER: Buy 1 Get 1 Free ") 
 }
 else{
    console.log("Purchase More For OFFERS");  
 }
 
 //Task26: Using Modulus Display Leap Year or not//
 let year=1998
 if (year % 4==0){
    console.log("Leap Year");
 }else{
    console.log("Not Leap Year");
 }

 //Project1: Voting Elibility System//

 let country="India"
 let age1=20;
 (age1>=18 && country=="India")?console.log("You're eligible to Vote"):console.log("You're not eligible to Vote");
 
 //Project2: Convert Temperature to Celsius//
 let celsius=36;
 let fahrenheit=0;
 fahrenheit=(celsius*9 / 5)+32;
 console.log("Fahrenheit is "+fahrenheit);
 
 
 
