//Task53: Create function prints "Hello World"//
function greet(){
    console.log("HELLO WORLD");
}
greet()

//Task54: Write function that takes a number and returns its cube.//
function cube(number){
    return number*number*number
}
let result=cube(5);
console.log(result);

//Task55: Write a function to check if a number is even or odd.//
function isevenorodd(num){
    if(num % 2 ==0){
        return "even";
    }else{
        return "odd";
    }
}
console.log(isevenorodd(4));

//Task56:Write a function to find the factorial of a number.//
function factorial(num1){
    if(num1<0){
        return "This is not a factorial number.Please Give Positive Number"
    }else if(num1==0){
        return 1;
    }else{
        let answer=1;
        for(i=1;i<=num1;i++){
            answer*=i;
        }
        return answer;
    }
}
console.log(factorial(4));

//Task57: Create a function to return the sum of two numbers.//
function sum(no,no1){
return result1=no+no1    
}
let no=sum(15,7)
console.log(result1);

//Task58: Write a function that returns the largest of three numbers.//
function largest(no2,no3,no4){
if(no2>=no3 && no2>=no4){
    return no2;
} else if(no3>=no2 && no3>=no4){
    return no3;
}else{
    return no4;
}
}
let max=largest(5,10,20)
console.log(max);

//Task59:Write a function that checks if a string is a palindrome.//
function palin(name){
const len=name.length;
for(i2=0;i2<len/2;i2++){
    if(name[i2] !== name[len-1-i2]){
        return "It is not a Palindrome"
    }
}
return "It is a Palindrome"
}
const value=palin("banu")
console.log(value);

//Task60:Create a function to convert Celsius to Fahrenheit.//
function celsius(number2){
    return (number2*9/5)+32
}
let result2=celsius(34)
console.log(result2);

//Task61: Write a function to calculate the simple interest. //
function si(val,n,r){
    return (val*n*r)/100
}
let interest=si(1000,2,2)
console.log(interest);

//Task62:Function that reverse the array//
function reverse(arr){
    for(i2=2 ;i2=0; i2--){
        console.log(arr[i2]);
    }
}
let array=reverse[1,2,3,4]

//Task63: Write an arrow function that doubles each number in an array.//
let numb=[11,1,5,6]
let doublenumbers=numb.map(number=>number*2)
console.log(doublenumbers)

//Task64:Create a function that takes a callback and calls it.//
function process(arr1,callback){
    for(let number3 of arr1){
        callback(number3)
    }
}
process([1,2,3],(number3)=>{
console.log(number3*2);
}
)

//MiniProject1:Student Grade Calculator//
function mark(eng,tam,mat,sci,soc){
    total=eng+tam+mat+sci+soc;
    average=total/5;
    if(average>=90 && average<=100){
        return "Grade A"
    }else if(average>=75 && average<=89){
        return "Grade B"
    }else if(average>=50 && average<=74){
        return "Grade C"
    }else{
        return "Grade F"
    }
}
let marks=mark(75,75,75,75,75)
console.log("Name : Banu");
console.log("Total Marks:",total);
console.log("Average:", average);
console.log("Grade:", marks);

