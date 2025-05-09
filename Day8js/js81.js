//MiniProject2:Palindrome Checker//
function ispalin(nam){
    nam=nam.replace("/&+-!","").toLowerCase().trim();
    for( let i=0;i<nam.length/2;i++){
        if(nam[i]!==nam[nam.length-i-1]){
            return false
        }
    }
    return true
 }
 let name7=prompt("Enter Your Palindrome Text")
 if(ispalin(name7)){
    console.log(`${name7} is a Palindrome`)
 }else{
    console.log(`${name7} is not a Palindrome`);
 }