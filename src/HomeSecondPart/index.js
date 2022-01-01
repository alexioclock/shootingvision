import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { Link } from 'react-scroll';
import './homeSecondPart.scss';
import { Link as LinkPage } from 'react-router-dom';

function HomeSecondPart() {
  useEffect(() => {
    Aos.init({duration:2000});
}, []);
  return (
   <div className="homeSecondPart" id="homepage">
     <p>Portaits and Landscapes</p>
     <h2>map</h2>
        <div className="wrapper">
          <div   data-aos="fade-right" class="one" ><LinkPage to="/portraits">Portraits</LinkPage></div>
            <div  data-aos="fade-left" class="two " ><LinkPage to="/landscapes">Landscapes</LinkPage></div>
            <div  data-aos="fade-down-left" class="three"><LinkPage to="#">About</LinkPage></div>
            <div  data-aos="fade-up"class="four"><LinkPage to="/contact">Contact</LinkPage></div>
            <div data-aos="fade-up-left" class="five" ><a target="_blank" rel="noreferrer" href="https://www.instagram.com/shooting_vision/?hl=fr">Instagram</a></div>
        </div>
        <Link to="home" spy={true} smooth={true} duration={1000}>
        <p className="goback">Back to top</p>
        </Link>
    </div>
  );
}

export default HomeSecondPart;
