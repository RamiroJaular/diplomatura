const edad = parseInt(prompt(' Ingrese su edad ', ''));

if(Number.isNaN(edad)){
    document.write('Debe ingresar un valor numerico')
}else if (edad >=18){
    document.write('podes conducir')
}else{
    document.write('no podes conducir')
}