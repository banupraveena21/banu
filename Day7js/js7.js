//Task79:Create a Person constructor with properties name and age, and create multiple instances.//

//Task80: Add a method to the Person constructor that returns a greeting message. //
function person (name,age,city){
    this.name=name;
    this.age=age;
    this.city=city;

    this.greet=function(){
        return "Hello, My name is:"+this.name;
    }
}
let person1=new person("banu",33,"Hosur")
console.log(person1)
let person2=new person("banu");
console.log(person2.greet())

//Task81: Create a Car constructor with brand, model, and year, and display the details.//
//Task82: Modify the Car constructor to include a method that calculates the car's age.//
//Task83: Use this inside a constructor function to refer to an object and modify properties dynamically.//
function car(brand,model,year)
{
    this.brand=brand;
    this.model=model;
    this.year=year;
    this.display=function()
    {
        return "Car Brand:"+this.brand+"Car Model:"+this.model+"Year:"+this.year;
    }
    this.getage=function()
    {
        const currentYear=new Date().getFullYear();
        return currentYear-this.year;
    }
}
let car1=new car("Honda","amaze",2024)
console.log(car1)
console.log("Age of the Car:",car1.getage());

//Task84: Create a BankAccount constructor with accountNumber, balance, and methods to deposit and withdraw money.//
//Task85:Implement default values in a constructor function when no parameters are provided.//
function bankaccount(number,balance){
    this.number=number;
    this.balance=balance;

    this.deposit=function(amount){
    this.balance+=amount;
    return "Deposited Amount:"+ amount+ "Current Balance: "+this.balance;
}
this.withdraw=function(amount){
    if(amount <= this.balance){
        this.balance -=amount;
        return "Withdraw Amount:"+amount+ "Current Balance:"+this.balance
    }else{
        return "Insufficient amount"
    }
}
this.getbalance=function(){
return "Current balance:"+ this.balance
}
}
let myaccount=new bankaccount("1245",500)
console.log(myaccount.getbalance());
console.log(myaccount.deposit(200))
console.log(myaccount.withdraw(100));
console.log(myaccount.getbalance());

//Task86: Create a Student constructor with an array property grades and a method to calculate the average grade.//
function student(name1,grades){
    this.name1=name1;
    this.grades=grades;
    this.average=function(){
        if(this.grades.length===0){
            return 0;
        }
        const sum=this.grades.reduce((acc,grades)=>acc+grades,0)
        return sum;
    }
}
let student1=new student("Banu",[90,90,90,90]);
console.log("Student Name",student1.name1)
console.log("Average:",student1.average());

//Task87: Use prototype to add a new method to a constructor function dynamically. //
function member(name2){
    this.name2=name2;
}
let member1=new member("banu")
member.prototype.greeting=function(){
    return "Hello My Name is :"+ this.name2;
}
console.log(member1.greeting())

//Task88 Create a Book constructor function with title, author, and price, and filter books based on price. //
function book(title,author,price){
    this.title=title;
    this.author=author;
    this.price=price;
   
}
const books=[
new book("Lords of Rings","J.R.R",25),
new book("Pride & Prejudice","Jane austin",15),
new book("1984","George",50)]
function filterbooks(books,maxprice){
    return books.filter(book => book.price <= maxprice);
}
let affordable=filterbooks(books,20)
console.log(affordable);

//Task89: Implement inheritance in constructor functions where a Manager extends an Employee constructor. //
function Employee(name3,salary){
    this.name3=name3;
    this.salary=salary;
}
Employee.prototype.work=function(){
    return this.name3+" is Working"
}

let Employee1=new Employee("banu",50000)
console.log("Employee Name is:",Employee1.name3);
console.log("Salary:",Employee1.salary);
console.log(Employee1.work());

//Task90: Create a ShoppingCart constructor with an array of products and methods to add, remove, and calculate total price.//
//Task91:  Use new keyword inside a function to create an instance of another constructor function. //
function shopping(){
    this.products=[]
this.addproduct=function(product){
    this.products.push(product);
}
this.removeproduct=function(productname){
    this.products=this.products.filter(product=>product.name!==productname)
}
this.calculateprice=function(){
    return this.products.reduce((sum,product)=>sum+product.price1,0);
}
}
const cart=new shopping();
cart.addproduct({name4:"shirt",price1:500});
cart.addproduct({name4:"pants",price1:2000});
cart.addproduct({name4:"shoe",price1:1550});
console.log(cart.products);
cart.removeproduct('pants')
console.log(cart.products);
const total=cart.calculateprice();
console.log("TotalPrice:", total);


//MiniProject1:Employee Management System//
const emp={
    empname:"banu",
    position:"Data Analyst",
    empsal:52000
}
console.log(emp);
function emp1(empname,position,empsal){
    this.empname=empname
    this.position=position
    this.empsal=empsal
    this.increase=function(percent){
        this.empsal+=this.empsal*(percent/100)
    }
}
const emp3=new emp1("bala","Developer",25000)
const emp2=new emp1("mala","UxDesigner",45000)
console.log(emp2);
emp2.increase(10);
console.log("The Increased Salary:",emp2.empsal);

//MiniProject2: Library Management System//
