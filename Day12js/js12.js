//Task145: Create an array of employees with name, age, and position. //
let employee = [
    {
        name: "anu",
        age: 30,
        position: "Manager"
    },
    {
        name: "Banu",
        age: 33,
        position: "CEO"
    },
    {
        name: "Charu",
        age: 22,
        position: "JuniorManager"
    }
];

//Task146:Fetch and display a list of products from an API.//
console.log(employee);

//Task147:Sort an array of objects by age in ascending order.//
employee.sort((a, b) => a.age - b.age);
console.log(employee);

//Task148: Filter an array to show only students with grade 'A'.//
let students = [
    {
        name1: "Anu",
        mark: 87,
        grade: "A"
    }, {
        name1: "banu",
        mark: 97,
        grade: "B"
    }, {
        name1: "hari",
        mark: 55,
        grade: "C"
    },
    {
        name1: "moni",
        mark: 96,
        grade: "A"
    }
];
console.log(students);

let grade_a = students.filter(students => students.grade === "A");
console.log("Grade A",grade_a);

//Task149: Find a specific product in an array by name.//
let banu = students.find(students => students.name1 === "banu");
console.log(banu);

//Task150: Convert an array of objects to only an array of names.//
let arr = JSON.stringify(students);
console.log(arr);

//Task151:Modify an object inside an array and update its value.//
console.log(students[2]);
students[3].mark = 89;   
console.log(students[2]);

//Task152:Count how many objects meet a specific condition.//
let grade_b = students.filter(students => students.grade === "A").length;
console.log(grade_b);

//Task153: Implement a search function to find objects dynamically.//
console.log(students);
let grade_c = students.filter(students => students.grade === "C");
console.log(grade_c);

//Task154: Group objects based on a property value.//
console.log(students);
let grade = students.filter(students => students.name1 === "mokshi");
console.log(grade);

//Task155: Remove a specific object from an array by property.//
for (var i = 0, len = students.length; i < len; i++) {
    delete students[i].grade;
}
console.log(students);

//Task156:Add new objects dynamically to an array.//
students.push({ name1: "janani", mark: 78, grade: "B" })
console.log(students);

//Task157: Display the highest-priced product in an array.//
let highmark = students.sort((a, b) => b.mark - a.mark);
console.log(highmark[0]);

//MiniProject1: Inventory Management System//
let store = [
    {
        id: 101,
        name2: "Rice",
        category: "grocery",
        Quantity: 5,
        price: 500
    },
    {
        id: 102,
        name2: "phone",
        category: "Electronics",
        Quantity: 1,
        price: 5000
    },
    {
        id: 103,
        name2: "wheat",
        category: "grocery",
        Quantity: 5,
        price: 800
    },
    {
        id: 104,
        name2: "Headset",
        category: "Electronics",
        Quantity: 2,
        price: 600
    }
];
console.log(store);

let Electronics = store.filter(store => store.category === "Electronics");
console.log(Electronics);

//update
store.push({
    id: 105,
    name2: "Headset",
    category: "Electronics",
    Quantity: 2,
    price: 600
},
    {
        id: 106,
        name2: "Headset",
        category: "Electronics",
        Quantity: 2,
        price: 600
    }
);

console.log(store);


//remove

let store1 = store.filter(store => store.id === 101);
console.log(store1);
console.log(store);

//MiniProject2: Library Book Management System//
let Library = [
    {
        bookID: 501,
        title: "book1",
        author: "james",
        genre: "story",
        availability: false,
        borrower: "person1"
    },
    {
        bookID: 505,
        title: "book5",
        author: "singh",
        genre: "kids",
        availability: true,
        borrower: "person2"
    },
    {
        bookID: 502,
        title: "book2",
        author: "charles",
        genre: "comedy",
        availability: false,
        borrower: "person4"
    },
    {
        bookID: 503,
        title: "book3",
        author: "peter",
        genre: "kids",
        availability: true,
        borrower: "person5"
    },
    {
        bookID: 504,
        title: "book4",
        author: "hari",
        genre: "reallife",
        availability: true,
        borrower: "none"
    }
];
console.log(Library);

//search book
let book1 = Library.filter(Library => Library.bookID === 501);
console.log(book1);


let book3 = Library.filter(Library => Library.availability === false);
console.log(book3);

let book2 = Library.filter(Library => Library.availability === true);
console.log(book2);


