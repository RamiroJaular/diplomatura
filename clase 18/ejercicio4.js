function getNameDiasForMes(mes) {
    if (Number.isNaN(mes)) return false;
    if (mes < 1 || mes > 12 ) return false;
    mes--;

    const data = [
        {
            nombre: 'enero',
            dias: 31
        },
        {
            nombre: 'febrero',
            dias: 28
        },
        {
            nombre: 'marzo',
            dias: 31
        },
        {
            nombre: 'abril',
            dias: 30
        },
        {
            nombre: 'mayo',
            dias: 31
        },
        {
            nombre: 'junio',
            dias: 31
        },
        {
            nombre: 'julio',
            dias: 30
        },
        {
            nombre: 'agosto',
            dias: 31
        },
        {
            nombre: 'septiembre',
            dias: 31
        },
        {
            nombre: 'octubre',
            dias: 30
        },
        {
            nombre: 'noviembre',
            dias: 31
        },
        {
            nombre: 'diciembre',
            dias: 31
        },
    ]
return data[mes]

}








const nummes = parseInt(prompt('ingrese el mes del año', ''));
const resultado = getNameDiasForMes(nummes)

console.log(nummes)

if(resultado){
    alert(`el mes ${resultado.nombre} tiene ${resultado.dias} dias.`)
}else{
    alert('mes invalido');
}