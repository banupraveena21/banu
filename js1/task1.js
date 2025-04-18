//Task1:Using console.log()//
console.log("Hi JavaScript this is my First Day")

//Task2:Using Primitive Data types//
var name='banu'
console.log(name)

let number='This is my passcode ****'
console.log(number)

const click="Click Me to LOG IN"
console.log(click)

//task3:Difference of data types in scope//
function greet(){
    var greeting="Good Morning"
    console.log(greeting)
}
greet()

if (true){
    var greeting1="Good Afternoon"
}
console.log(greeting1)

//Task4:Using Typeof//
console.log(typeof name)

var number1=100
console.log(typeof number1)

var greeting1=true
console.log(typeof greeting1)

var rupee=null
console.log(rupee)

var tv
console.log(tv)

let bignumber=BigInt(1253654785522145522145n)
console.log(typeof bignumber)

//Task5: User Profile Object//
const student={
    name:"banu",
    age:21,
    isStudent:true
}
console.log(student.name);
console.log(student.age);
console.log(student.isStudent);

//Task6:Colors Using array//
let colors=["black","blue","brown","purple","pink"]
console.log(colors);
console.log(colors[0]);
console.log(colors[1])

//Task7:Convert string to number & number to String//
let no1=100
console.log(Number(no1));
console.log(typeof no1);

let no2="50"
console.log(String(no2));
console.log(typeof no2);

//Task8:Using Boolean//
var city=true
if (city==true){
    console.log(city)
}

//Task9:Null & Undefined
let name1
console.log(name1);

const name2=null
console.log(name2);

//Task10:Using Symbol
let uniqueid=Symbol("001");
console.log(uniqueid);
console.log(typeof uniqueid);

let uniqueid1=Symbol("002");
console.log(uniqueid1);

console.log(uniqueid1==uniqueid1);

//Task11:Type Bigint//
let biggy=1234634246846543155643n;
console.log(biggy);
console.log(typeof biggy);

//Task12:Even or Odd//

var no3="even"
if(no3=="even")
{
    console.log(no3)
}
var no3="odd"
if (no3=="odd")
{
    console.log(no3)
}

//Task13:Temperature to cel//
var temp="Your Temperature is 99.2"
console.log(temp)

//Mini Project 1//
//online food ordering system//

const food={
    ResturantName:"Aahaa Foods",
    ordernumber:101,
    fooditems:["Dosa","idli","parotta","briyani"],
    totalprice:450,
    deliverystatus:true,

  if (deliverystatus="true")
        {
            console.log("true")
                }
    }
    
console.log(food);

//Mini Project2//
const quiz={
    question1:"What is Our National Animal",
    answers:["Lion", "Tiger","Wolf","Cow"],
    correctanswer:"Tiger",
    userselectedanswer:"Lion",
    status:false
}
console.log(quiz);

const quiz1={
    question1:"What is Our National Animal",
    answers:["Lion", "Tiger","Wolf","Cow"],
    correctanswer:"Tiger",
    userselectedanswer:"Tiger",
    status:true
}
console.log(quiz1);



