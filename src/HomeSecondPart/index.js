import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { Link } from 'react-scroll';
import './homeSecondPart.scss';

function HomeSecondPart() {
  useEffect(() => {
    Aos.init({duration:2000});
}, []);
  return (
   <div className="homeSecondPart" id="homepage">
     <p>Portaits and Landscapes</p>
     <h2>Titre de la page</h2>
        <div className="wrapper">
          <div   data-aos="fade-right" class="one" style={{height:"5em"}}><a width="100%" height="100%" href="#">Portraits</a></div>
            <div  data-aos="fade-left" class="two " style={{height:"5em"}}><a href="#">Landscapes</a></div>
            <div  data-aos="fade-down-left" class="three" style={{height:"5em"}}><a href="#"></a>About</div>
            <div  data-aos="fade-up"class="four" style={{height:"5em"}}><a href="#"></a>Contact</div>
            <div data-aos="fade-up-left" class="five" style={{height:"5em"}}><a href="#"></a>Instagram</div>
        </div>
        <Link to="home" spy={true} smooth={true} duration={1000}>
        <p className="goback">Back to top</p>
        </Link>
    </div>
  );
}

export default HomeSecondPart;
