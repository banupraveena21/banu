//Task27: If condition to check number is Positive//
let no=5
if (no>=0){
    console.log("Number is Positive");
}

//Task28: If-else to check to person is adult//
let age=17
if(age>=18){
    console.log("You're an adult");
}else{
    console.log("You're not an adult");
}

//Task29:Using if-else check number is odd or even//
let no1=33
if(no1 % 2 == 0){
    console.log("Even Number");
}else{
    console.log("Odd Number");
}

//Task30:Using if else-else if to check grades//
let mark=95
if(mark>90 && mark<=100){
    console.log("You have Got Grade A", mark);
}
else if(mark>75 && mark<=90){
    console.log("you have got Grade B", mark);
}
else if(mark>60 && mark<=75){
    console.log("You have got Grade C", mark);
}
else if(mark>=40 && mark<=60){
    console.log("You have got grade D",mark);
}
else{
    console.log("Fail");
}

//Task31: Check if person is eligible for driver's license//
let age1=16
if(age1>=18){
    console.log("You are eligible for Drive's License");
}else{
    console.log("You are not eligible for Drive's License");
}

//Task32:Using nested if to check login & admin's status//
let admin="Banu"
if(login=true)
{
    if(admin==="Banu"){
        console.log("Welcome Banu");
    }
    else{
        console.log("You are not Admin");
    }
}else{
    console.log("You haven't Logged IN");
}

//Task33:Using Switch statement print messages for different Days//
let day="Tuesday"
switch(day){
    case "Monday":
        console.log("Start your week with huge Smile & Fresh");
        break
    case "Tuesday":
        console.log("Have a Spritual Day");
        break
    case "Wednesday":
        console.log("Make Your Day Fun");
            break
    case "Friday":
        console.log("Yess, Tomorrow Weekend Starts");
        break
    case "Saturday":
    console.log("Enjoy your WeekEnd");
    break
    case "Sunday":
        console.log("WeekEnd Ends Today");
        break
    default:
        console.log("Its a Normal Day");
}

//Task34: Using Tenary operator check for Senior citizen's Discount//
let senior=55
if(senior>=50){
    console.log("Discounts Available If You Want Use It");
}else{
    console.log("You have no Discounts");
}

//Task35:Check if user is logged using &&//
let name="banu"
if(name=="banu" && login==false){
    console.log("Welcome");
}else{
    console.log("Invalid User");
}

//Task36:Using || to check if username & email is provided//
if (username=true || email==false){
    console.log("Logged IN");
}else{
    console.log("Check your usename & password");
}

//Task37:Using ! to Boolean Variable//
let no2=false
no2=!no2;
    console.log("You have Typed",no2);

//Task38:Check if Current year is leap//
let leap=2000
if(leap % 4 ==0 ){
    console.log(leap," is a Leap Year");
}else{
    console.log(leap," is not a leap year");
}

//Task39: Validate password length using if else//
let password=7
if(password>=8){
    console.log("Password is Validate");
}
else{
    console.log("Type 8 & more Characters for Password");
}

//MiniProject1: Simple Login Validation//
let name1="mala"
if(login1=true)
{
    if(name1==="banu"){
        console.log("Welcome Banu");
    }
    else if(name1==="mala")
    {
        console.log("Welcome Mala");
    }
    else if(name1==="ramya")
    {
        console.log("Welcome Ramya");
    }
    else{
        console.log("You are not Admin");
    }
}else{
    console.log("You haven't Logged IN");
}

//MiniProject2: Traffic Light System//
let color="green"
    if(color==="red"){
        console.log("Stop!!!");
    }
    else if(color==="yellow")
    {
        console.log("Slow Down & Get Ready");
    }
    else if(color==="green")
    {
        console.log("GO!!!!");
    }
    else{
        console.log("Invalid Color");
    }