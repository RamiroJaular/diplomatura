import './../stiles/home.css'

const HomePage = (props) => {
    return (
    
        <main className="holder">

        <div className="homeimg">
            <img src="img/home/img01.jpg" alt="avion"/>

        </div>

        <div className="columnas">
            <div className="bienvenidos">
                <h2>Bienvenidos</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolorum esse exercitationem
                    voluptatum distinctio libero repudiandae. Odio suscipit at deleniti. Vitae corporis qui earum,
                    perspiciatis natus quaerat rerum minus cupiditate.</p>
            </div>
            <div className="testimonios">
                <h2>Testimonio</h2>
                <div className="testimonio">
                    <span className="cita">Simplemente excelente</span>
                    <span className="autor">Juan Gomez - </span>
                </div>

            </div>


        </div>

    </main>
    )
}

export default HomePage;