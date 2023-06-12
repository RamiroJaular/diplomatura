import './../stiles/contacto.css'

const ContactoPage = (props) => {
    return (
    
        <main className="holder contacto">
        <div className="datos">
        <h2>Contacto Rapido</h2>
        <form action="" className="formulario">
            <p>
                <label for="">Nombre</label>
                <input type="text"/>
            </p>
            <p>
                <label for="">Email</label>
                <input type="text"/>
            </p>
            <p>
                <label for="">Telefono</label>
                <input type="text"/>
            </p>
            <p className="arriba">
                <label for="">Mensaje</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </p>
            <p>
                <input type="submit" value="enviar"/>
            </p>
        </form>
        </div>
        
        <div>
        
            <h2>Otras vias de comunicacion</h2>
            <p>Tambien puede contactarse con nosotros usando los siguientes medios</p>
            <ul>
                <li><i className="fa-solid fa-circle-user"></i> 23561564</li>
                <li><i className="fa-solid fa-envelope"></i> juan perez</li>
                <li><i className="fa-brands fa-facebook"></i> ramiro jaular</li>
                <li><i className="fa-brands fa-instagram"></i> ramiro jaular</li>
            </ul>
        
        </div>
        
            </main>
    )
}

export default ContactoPage;