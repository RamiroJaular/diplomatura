import { useState } from "react";

const EstadoEjemplo01 = props => {
    const [activo, setActivo] = useState(true);// activo> variable y setActivo funcion que lo modifica.

    const toggleActivo = e => {
        setActivo(!activo); // negacion booleano > setea el activo al contrario de lo que este activo.
    }

    return (
        <div>
            <input type="text" placeholder="cliclear boton" disabled={!activo} /> {/*disabled > desabilitado*/}
            <button onClick={toggleActivo}>{activo ? 'desactivar' : 'activar'}</button> {/* operador ternario que ve que pasa con la variable activo*/}
        </div>
    )
}

const EstadoEjemplo02 = props => {

    const [counter, setCounter] = useState(0);

    return (
        <div className="container">
            <div className="counter">
                <h3>{`contador: ${counter}`}</h3>

            </div>
            <div className="button">
                <button className="sucess" onClick={() => setCounter(counter + 1)}> + </button>
                <button className="error" onClick={() => setCounter(counter - 1)}> - </button>

            </div>

        </div>
    )
}

export {
    EstadoEjemplo01,
    EstadoEjemplo02
}