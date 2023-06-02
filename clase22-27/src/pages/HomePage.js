import '../style/home.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const HomePage = (props) => {

    const settings = {
        arrows: false,
        infinite: true,
        speed: 500,
        autoplaySpeed: 3000,
        fade: true,
        autoplay: true
    }

    return (

        <div className="galeria">
            <Slider {...settings}>
                <img src="/img/img01.jpg"></img>
                <img src="/img/img02.jpg"></img>
                <img src="/img/img03.jpg"></img>
                <img src="/img/img04.jpg"></img>
                <img src="/img/img05.jpg"></img>
            </Slider>

        </div>
    )
}

export default HomePage;