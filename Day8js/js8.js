//Task92:  Convert "javascript" to uppercase. //
let name1="javascript";
console.log(name1.toUpperCase());

//Task93:. Convert "HELLO WORLD" to lowercase.
let name2="HELLO WORLD";
console.log(name2.toLowerCase());

//Task94: Extract "Script" from "JavaScript" using slice(). //
console.log(name1.slice(4,10))

//Task95: Replace "bad" with "good" in "This is a bad day".//
let name3="This is a Good Day"
console.log(name3);
console.log(name3.replace("Good","Bad"))

//Task96:Check if "Coding" is present in "I love Coding!".//
let name4="I Love Coding!"
console.log(name4.includes("Coding"));

//Task97: Find the position of "world" in "Hello world!".//
let name5="Hello World"
console.log(name5.indexOf("World"))

//Task98: Remove spaces from " Trim me ".//
let name6="  Trim me"
console.log(name6.trim())

//Task99:Count the number of characters in "Programming".//
let str="Programming"
console.log(str.length)

//Task100:Check if "apple" starts with "a".//
let str1="apple"
console.log(str1.startsWith("a"));

//Task101: Split "banana,apple,orange" into an array.//
let arr="banana,apple,orange"
console.log(arr.split(","))

//Task102:Repeat "JS " three times.//
let str2="JS,"
console.log(str2.repeat(3));

//Task103: Concatenate "Web" and " Development".//
let text="Web"
let text1="Development"
console.log(text.concat(text1));

//Task104: Validate if "user123" has at least 5 //
let text3="user123"
if(text3.length<5){
    console.log("Username must have 5 Characters")
}else{
    console.log("User have 5 Characters")
}

//MiniProject1:Username Generator//
let first=prompt("Enter your FirstName")
let last=prompt("Enter your LastName")
let firstname=first.slice(0,3)
let lastname=last.slice(0,3)
let num=Math.floor((Math.random()*100)+1)
console.log(firstname+lastname+num)

