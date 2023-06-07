import { EstadoEjemplo01, EstadoEjemplo02 } from '../componentes/Estado';
import '../style/Estado.css'



const Ejemplo2 = props => {
    return (
        <div>
            <h1>Ejemplo Estados - Hook</h1>
            <EstadoEjemplo01 />
            <hr />
            <EstadoEjemplo02/>
        </div>
    )
}




export default Ejemplo2;