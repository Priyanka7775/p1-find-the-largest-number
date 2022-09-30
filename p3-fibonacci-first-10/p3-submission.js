const number=10
let number1=0;
let number2=1;
let nextterm;

for(i=0;i<=number;i++){
    console.log(number1);
    nextterm=number1+number2;
    number1=number2;
    number2=nextterm;
}