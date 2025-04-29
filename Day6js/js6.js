//Task66. Create array of 5 students name//
let student=["anitha","banu","chitra","hema","jenifer"]
console.log("Students Name are:",student);

//Task67: Add a new student name to the array using push().//
student.push("Bala")
console.log("New Student Added:", student);

//Task68:Remove the last student using pop().//
student.pop();
console.log("New Student Removed:",student);

//Task69:// Use map() to convert all names to uppercase.//
let upper=student.map(name1=>name1.toUpperCase());
console.log(upper);

//Task70:Use filter() to get students whose names start with "A".//
let fil_value=student.filter(val=>val.startsWith("a"))
console.log(fil_value);

//Task71:Use forEach() to print each student name. //
student.forEach((val,ind,arr)=>{
    console.log(val,ind);
    console.log(student)
});

//Task72: Create an object for a book with properties (title, author, price)//
let book={
   booktitle:"Let's Amazing Secrets",
   author:"Gaur Gopal Das",
   price:180
} 

//Task73:Use Object.keys() to get all book properties.//
let books=Object.keys(book)
console.log(books);

//Task74:Use Object.values() to get all book values.//
let book1=Object.values(book)
console.log(book1);

//Task75: Add a new property genre to the book object.//
book.genre="Self Help"
console.log(book);

//Task76: Use delete to remove price from the book.//
delete book.price;
console.log(book);

//Task77: Merge a publisher object into the book object.//
let publish={
    publisher:"Amanda Publisher"
}
let gen1=Object.assign(book,publish)
console.log(gen1);

//Task78: Convert the book object into an array of key-value pairs using Object.entries().//
for(let [indd,vall] of Object.entries(book)){
    console.log(indd,vall);
}

//MiniProject1: Movie Booking System//
let movie=["lagaan","dangal","wednesday","kgf","rrr","avatar","titanic"]
let movie1=prompt("Enter the Movie Name")
if(movie.includes(movie1))
{
    console.log("Ticket Booked")
}
else
{
console.log("Movie not available")
}

//MiniProject2: Product Inventory System//
let toys=[
    {toyname:"cars",quantity:50},
    {toyname:"slides",quantity:25},
    {toyname:"playtent",quantity:40},
    {toyname:"teddy",quantity:150},
    {toyname:"puzzle",quantity:10},
    {toyname:"blocks",quantity:15},
    {toyname:"pools",quantity:5},
    {toyname:"books",quantity:250}
]
toys.forEach(item=>{
    console.log(item.toyname,item.quantity);
});
console.log("You Can Add Item Here:")
toys.push({toyname:"crayons",quantity:100});
toys.forEach(item1=>{
    console.log(item1.toyname,item1.quantity);
});

console.log("You can Remove an Item Here:")
toys.splice(1,1)
toys.forEach(item2=>{
    console.log(item2.toyname,item2.quantity);
});

console.log("Updated Inventory for toys Section:")
toys.forEach(item3=>{
    console.log(item3.toyname,item3.quantity);
});