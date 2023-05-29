const distancia = parseInt(prompt('ingrese la dintancia', ''));

if(Number.isNaN(distancia)){
    document.write('Debe ingresar un valor numerico')
}else if (distancia <=1000){
    document.write('te recomiendo ir a pie')
}else if (distancia >1000 && distancia <=10000){
    document.write('te recomiendo ir en bicicleta')
}else if (distancia >10000 && distancia <=30000){
    document.write('te recomiendo ir en colectivo')
}else if (distancia >30000 && distancia <=100000){
    document.write('te recomiendo ir en auto')
}else if (distancia >100000){
    document.write('te recomiendo ir en avion')
}