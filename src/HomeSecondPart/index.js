

import { Link } from 'react-scroll';
import './homeSecondPart.scss';

function homeSecondPart() {


  return (
   <div className="homeSecondPart" id="homepage">
     <p>Portaits and Landscapes</p>
     <h2>Titre de la page</h2>
        <div className="wrapper">
          <div class="one"><a width="100%" height="100%" href="#">Portraits</a></div>
            <div class="two"><a href="#">Landscapes</a></div>
            <div class="three"><a href="#"></a>About</div>
            <div class="four"><a href="#"></a>Contact</div>
            <div class="five"><a href="#"></a>Instagram</div>
            <div class="six"><a href="#"></a></div>
        </div>
        <Link to="home" spy={true} smooth={true} duration={1000}>
        <p className="goback">Back to top</p>
        </Link>
    </div>
  );
}

export default homeSecondPart;
