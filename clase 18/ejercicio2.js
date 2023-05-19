const alumnos = [
    {
        nombre: 'Ramiro',
        edad: '8'
    },

    {
        nombre: 'Rodrigo',
        edad: '3'
    },

    {
        nombre: 'Ricardo',
        edad: '6'
    },

    {
        nombre: 'lucas',
        edad: '5'
    },

    {
        nombre: 'sergio',
        edad: '9'
    },
    {
        nombre: 'daniela',
        edad: '7'
    },

    {
        nombre: 'pablo',
        edad: '1'
    },
]

//solo vamos a mostrar alumnos con edad >= a 4

const chicos = alumnos.filter(
    alumno => alumno.edad >= 4
)

console.log(chicos)

for (let i = 0; i < chicos.length; i++) {
    document.write(`<li> niño: ${chicos[i].nombre}, cuya edad es ${chicos[i].edad}. <li>`)
}