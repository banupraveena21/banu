//MiniProject2:Sum of Digits Os number//
let sum1=prompt(Number("Enter Any Positive Number"))
let lastdigit=sum1%10
console.log("The Last Digit Is:",lastdigit)
let result=0
while(lastdigit>0)
{  
     result+=lastdigit;
     lastdigit--;
 }
console.log("The Sum of Digits is",result);
