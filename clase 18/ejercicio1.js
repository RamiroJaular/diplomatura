const datosusuarios = [
    {
        nombre: 'Ramiro',
        password: '123',
    },

    {
        nombre: 'Rodolfo',
        password:'15786',
    },

    {
        nombre: 'Lucas',
        password: '4568748',
    },

    {
        nombre: 'Flavia',
        password: '456465',
    },

    {
        nombre: 'Romina',
        password: '45645864',
    },
]

const solopassword = datosusuarios.map (function(c){
    return c.password;
})

console.log(solopassword)