const numeros = [78,10,15,85,22];

//for(let i = 0; i < numeros.length; i++){
//    console.log(numeros[i])
//}

let mayor = 0;

for(let i = 0; i < numeros.length; i++){
    if(numeros [i] >mayor){
        mayor= numeros[i]
    }
}

console.log(`el mayor de estos numeros: ${numeros} es ${mayor}`)