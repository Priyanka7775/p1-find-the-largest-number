const number=10
let number1=0;
let number2=1;
let nextterm;
let i=1;
for(i=1;i<=number;i++){
    document.write(number1)
    console.log(number1);
    nextterm=number1+number2;
    number1=number2;
    number2=nextterm;
}