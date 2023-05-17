const frutas = ['palta','manzana','banana','frutilla'];

console.log(frutas);

console.log(frutas.sort());

//frutas ordenadas de a-z
const frutasordenadas = frutas.sort();

console.log (frutasordenadas);


//frutas ordenadas de z-a
const frutasza = frutas.sort().reverse()

console.log(frutasza)

const numeros = [78,10,15,20,22,5];

console.log(numeros.sort()); //aca no logra ordenar


//de menor a mayor
const num = numeros.sort(function(a,b){
    return a-b
})

console.log(num);


//de mayor a menor
const num2 = numeros.sort(function(a,b){
    return b-a
})

console.log(num2);
