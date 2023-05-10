const frutas = ['manzana', 'banana', 'pera', 'tomate' ]

console.log(frutas)
console.log(frutas.length)/*cantidad*/

console.log(frutas[1])

const ultimo = frutas [frutas.length-1]

console.log(ultimo)

const seleccionado = 3

console.log(frutas[seleccionado])

for(let i = 0; i<frutas.length; i++){
    document.write('tenemos' + frutas[i]+ "<br/>")
}