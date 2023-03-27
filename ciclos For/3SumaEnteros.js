var numero1= parseInt(prompt("primer numero entero"))
var numero2= parseInt(prompt("segundo numero entero"))

if(numero1%1==0, numero2%1==0, numero1<0, numero2<0){
    console.log("numeros invalidos, favor introducir solo numeros enteros positivos")
}else{
    var suma=0
    for(let i=numero1;i<=numero2;i++){
        suma +=i
    }
    console.log("la suma de la secuencia es="+suma)
}