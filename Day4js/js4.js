 //Task40: Print numbers 1 to 10 using for loop//
 for(no=0;no<=10;no++){
    console.log(no)
 }

 //Task41:Print even numbers 2 to 20 using for loop//
 for(no1=2;no1<=20;no1+=2){
    console.log(no1)
 }

 //Task42:Print numbers 10 to 1 using while loop//
 let no2=10
 while (no2>=1) {
    console.log(no2);
    no2--;
 }

 //Task43:Print "Hello World" 5times using do while loop//
 let no3=0;
 do{
    console.log(no3,"Hello World");
    no3 ++;
 }while(no3<5);

 //Task44:Iterate over an array and print each element using for.of loop //
 let sport=["HandBall","Hockey","FootBall","volleyBall","BasketBall","KhoKho"]
 for(let value of sport){
    console.log(value);
 }

 //Task45:Iterate an object and print its properties using for.in loop// 
 let personal={
name1:"Banu",
city1:"Madurai",
Degree:"MCA",
Phone:2456789521
 }
 for(let value in personal){
    console.log(personal[value]);
 }

 //Task46:Sum numbers from 1 to 10 using a for loop//
 let sum=0;
 for(num=1;num<=10;num++)
{  
     sum+=num;
     console.log(sum);
 }

 //Task47:Find first number greater than 50 in an array using break//
 let num1=[5,65,45,25,60,50,9]
 let largest=50;
 for(i=0;i<num1.length;i++)
 {
    if(num1[i]>largest){
        largest=num1[i];
        console.log(largest);
    }
}

//Task48:Skip printing numbers divisible by 3 using continue//
for(num3=1;num3<=10;num3++){
    if (num3 % 3==0){
        continue
    }
    console.log(num3);
}

//Task49: Create a multiplication table for 5 using a for loop//
let tableoffive=5
for(num4=1;num4<=10;num4++){
    console.log(tableoffive);
    tableoffive+=5;
}

//Task50: Reverse a string using a loop//
let name2="banu";
let reversed=""
for(i2=4-1;i>=0;i--){
reversed+=name2[i];
}
console.log(reversed);

//Task52: Find the largest number in an array using a loop//
let arr=[50,100,142,350,150]
let max=arr[0]
for(num5=1; num5<arr.length;num5++){
    if(arr[num5]>max){
        max=arr[num5]
} 
}
console.log(max);
     
//MiniProject1:Multiplication table Center//
let number1=prompt(Number("Enter your Number"))
for(num6=1;num6<=10;num6++){
    result=num6*number1;
    console.log(num6,"*",number1,"=",result);
}