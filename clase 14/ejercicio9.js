function validarForm(){
    const nombreValido = true;
    const passwordValido = validarLargo(document.form1.texto.value, 5);

const resultado = nombreValido && passwordValido;

if(resultado){
    alert('ES VALIDO')
}else {
    alert('NO, NO ES VALIDO')
}

}

function validarLargo(texto, largoRequerido) {
    return texto.length >= largoRequerido

}