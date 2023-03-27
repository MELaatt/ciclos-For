var numero= prompt("introduce un numero positivo")
var prim=1

if(numero<2){
    prim=0
}

for(var i=2; i<numero; i++){
    if(prim==1 && Math.floor(numero/i)*i==numero){
        prim=0
    }
}
if(prim==1){
    console.log(numero+" si es un numero primo")
}else{
    console.log(numero+" no es un numero primo")
}