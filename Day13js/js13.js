//Task158: Convert a JavaScript object to a JSON string using JSON.stringify().//
let person = {
    name1 : "banu",
    age : 33,
    city :  "hosur"
}
let person1 = JSON.stringify(person);
console.log(person1);

//Task159: Convert a JSON string back to a JavaScript object using JSON.parse(). //
let person2=JSON.parse(person1)
console.log(person2);

//Task160: Create a JSON file (data.json) and fetch it using JavaScript.//
//Task170: Fetch data from an API using fetch() and handle errors gracefully using catch()//
fetch("data.json")
 .then(Response => Response.json())
 .then(data =>console.log(data))
 .catch(error => console.error("error:",error));

//Task161:Store an array of objects in LocalStorage as JSON and retrieve it.//
const myarray=[
    {id:1,person:"banu"},
    {id:2,person:"guna"},
    {id:3,person:"mala"},
    {id:4,person:"mani"}
]
localStorage.setItem("myarray",JSON.stringify(myarray))
const storedArray=localStorage.getItem("myarray")
if(storedArray){
    const retrievedArray=JSON.parse(storedArray)
    console.log(retrievedArray)
}else{
    console.log("No data found")
}

//Task162:Fetch JSON data from an API and display it in a table.//
async function fetchData(){
    try{
        const response=await fetch("data.json")
        const data=await response.json();
        
        const tableHead=document.querySelector('#myTable thead')
        const tableBody=document.querySelector('#myTable tbody')

        if(data.length>0){
            const headers=Object.keys(data[0])
             let headerRow='<tr>'
             headers.forEach(header => {
                headerRow +=`<th>${header}</th>`
             })
             headerRow +='</tr>'
             tableHead.innerHTML=headerRow

             let bodyRows=''
             data.forEach(item=>{
                bodyRows+='<tr>'
                headers.forEach(header=>{
                    bodyRows+=`<td>${item[header]}</td>`
                })
                bodyRows+='</tr>'
             })
             tableBody.innerHTML=bodyRows
        }else{
            tableBody.innerHTML='<tr><td colspan="100%">No Data Available</td></tr>'
        } 
    }catch (error){
            console.error('Error Fetching:',error)
            document.querySelector('#myTable tbody').innerHTML='<tr><td colspan="100%">Error Loading Data</td></tr>'
    }
}
fetchData()

//Task163: Modify a JSON object inside an array and update it//
let myobj,i;
myobj = {
    "words" : ["you","are","bad"]
};
console.log(myobj);

myobj.words[2] = "good" ;
console.log(myobj);


for (i in myobj.words){
    console.log(myobj.words[i]);
    
}

//Task164:. Filter JSON data to display only objects matching a specific condition.//
let data =  [ {
    "id" : 1,
    "name" : "banu",
    "age" : 33,
    "city" : "hosur"
},

{
     "id" : 4,
    "name" : "guna",
    "age" : 27,
    "city" : "madurai"
},

{
     "id" : 3,
    "name" : "bala",
    "age" : 25,
    "city" : "madurai"
},
{
     "id" : 2,
    "name" : "anu",
    "age" : 22,
    "city" : "chennai"
}
 ];

const arr1 = data.filter(d => d.age >= 25);
console.log("Filtered by age:",arr1);

//Task165: Sort an array of objects stored in JSON by a specific property (e.g., price, age).//
data.sort((a,b) => {
    const avalue = Object.values(a).sort();
    const bvalue = Object.values(b).sort();
        if(avalue < bvalue) 
            return -1;
         if(avalue > bvalue) 
            return 1;
                    return 0;
});
console.log("Data Sorted:",data);

//Task166: Find an object inside a JSON array based on a property value.//
let index = data.findIndex(item => item.id === 4);
console.log("find:",index);  //gives index of find object

let Item = null;
data.some(item => {
    if(item.name === "banu"){
        Item = item;
        return true;
    }
});
if(Item != null){
    console.log(Item);
    
}else{
    console.log("item not found");   
}

//Task167: Create a function that adds new objects to an existing JSON file.//
let newarr = 
    {
     "id" : 5,
    "name" : "mala",
    "age" : 23,
    "city" : "salem"
}
data.push(newarr);
console.log("Added Data:",data);

//Task168: Remove a specific object from an array inside a JSON file.//
let jData = [{
    "Name": "Trees",
    "Course": "Introduction of Trees",
    "Content": ["Binary Tree", "BST", "Generic Tree"]
},
{
    "Name": "Graphs",
    "Topics": ["BFS", "DFS", "Topological Sort"]
}
];
let ind = jData.findIndex(obj => obj.Name === "Trees");
if (ind !== -1) {
    jData.splice(ind, 1);
}
console.log(jData);

//Task169: Fetch data from a JSON file and display it in a dropdown list. //
fetch('data1.json')
        .then(response => response.json())
        .then(data => {
            const dropdown = document.getElementById('myDropdown');
            dropdown.innerHTML = '';
            const defaultOption = document.createElement('option');
            defaultOption.text = 'Select an option';
            defaultOption.value = '';
            dropdown.appendChild(defaultOption);

            data.forEach(item => {
                const option = document.createElement('option');
                option.value = item.value; 
                option.text = item.text;  
                dropdown.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching data:', error));

//MiniProject1:E-Commerce Product Catalog //
// Parse JSON data
const productsJSON = `
[
    {
        "name": "Laptop",
        "price": 1200,
        "category": "Electronics"
    },
    {
        "name": "T-shirt",
        "price": 25,
        "category": "Clothing"
    },
    {
        "name": "Book",
        "price": 15,
        "category": "Books"
    }
]
`;

// Parse JSON data
const products = JSON.parse(productsJSON);

// Get the ul element to display the data
const productList = document.getElementById("product-list");

// Iterate through the products and create list items
products.forEach(product => {
    const listItem = document.createElement("li");
    listItem.textContent = `Name: ${product.name}, Price: ${product.price}, Category: ${product.category}`;
    productList.appendChild(listItem);
});

//implement//
const filteredProducts = products.filter(product => product.price < 500);

console.log(filteredProducts);

//Sorting
function sortProductsByPrice(products, order = 'asc') {
    return [...products].sort((a, b) => {
      const priceA = parseFloat(a.price);
      const priceB = parseFloat(b.price);
  
      if (order === 'asc') {
        return priceA - priceB;
      } else if (order === 'desc') {
        return priceB - priceA;
      }
      return 0;
    });
  }
  const sortedAscending = sortProductsByPrice(products, 'asc');
  console.log('Price low to High:', sortedAscending);
  
  const sortedDescending = sortProductsByPrice(products, 'desc');
  console.log('Price High to low:', sortedDescending);

  //MiniProject2:Movie Search App//
  const movieTitle = prompt("Please enter a movie title:");
if (movieTitle) {
  console.log("The movie title you entered is: " + movieTitle);
} else {
  console.log("No movie title was entered.");
}
localStorage.setItem("movieTitle",JSON.stringify(movieTitle))
const storedMovie=localStorage.getItem("movieTitle")
if(storedArray){
    const retrievedMovie=JSON.parse(storedMovie)
    console.log(retrievedMovie)
}else{
    console.log("No data found")
}

const storedMovies = localStorage.getItem('movieTitle');
const moviesArray = JSON.parse(storedMovies) || [];

function searchMovie(searchTerm) {
    return moviesArray.filter(movie => 
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  const searchTerm = 'your search term';
const searchResults = searchMovie(searchTerm);