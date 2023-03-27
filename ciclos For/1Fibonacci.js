let num1=1
let num2=1
let sig=0
let i=0
let limite = parseInt(prompt("digite el limite de la serie"))
console.log("1")
for(i=1;num1<=limite;i++){
    console.log(num1)
    sig=num1+num2
    num1=num2
    num2=sig
}