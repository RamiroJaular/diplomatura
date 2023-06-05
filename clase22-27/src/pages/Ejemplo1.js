import { EjemploProps01, EjemploProps02, EjemploProps03, EjemploProps04, EjemploProps05 } from "../componentes/props";

const name = 'Pablo'
const frutas = ['manzana', 'banana', 'pera', ' mandarina']
const mostrarValor = valor => {
    console.log(valor)
}

const Ejemplo1 = (props) => {
    return (
        <div>

            <h1>ejemplo de propiedades</h1>
            <hr />
            <h3>propiedades simples y reutilizables</h3>
            <EjemploProps01 nombre='Ramiro' />
            <EjemploProps01 nombre={name} />
            <hr />
            <h3>listado de elementos</h3>
            <EjemploProps02 elementos={frutas} />
            <hr />
            <h3>multiples propiedades y destructuring</h3>
            <EjemploProps03 titulo='noticia x' subtitulo='aca estamos aprendiendo react' cuerpo='soy el cuerpo de la noticia' />
            <hr />
            <h3>evento - al tener cambiar valor funciona por que recibe el manejador</h3>
            <EjemploProps04 cambiarValor={mostrarValor} />
            <hr />
            <h3>evento - tenemos un if que controla antes</h3>
            <EjemploProps05 eventoClick={mostrarValor} />
            {/*en este ejemplo no se rompe por que lo controlamos desde el if*/}
            <EjemploProps05 />



        </div>
    )
}

export default Ejemplo1;