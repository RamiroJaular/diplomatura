const empleados = [
    {
        nombre:'flavia',
        trabajo: 'desarrollador'

    },
    {
        nombre:'ramiro',
        trabajo: 'abogado'

    },
    {
        nombre:'romina',
        trabajo: 'maestra'

    },
    {
        nombre:'ramiro',
        trabajo: 'desarrollador'

    },
    {
        nombre:'ricardo',
        trabajo: 'desarrollador'

    },
    {
        nombre:'rodolfo',
        trabajo: 'veterinario'

    },
]

// objetivo1: mostrar los desarrolladores
// objetivo2: mostrar los no desarrolladores

const desarrollador = empleados.filter(
    empleado => empleado.trabajo == 'desarrollador'
)

console.log(desarrollador)

const nodesarrollador = empleados.filter(
    empleado => empleado.trabajo !== 'desarrollador'
)

console.log(nodesarrollador)

