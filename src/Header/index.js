

import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import './header.scss';
import { Link as LinkPage } from 'react-router-dom';


export const Header = () => {
  useEffect(() => {
    Aos.init({duration:1000});
}, []);
  return (
    <div className= "container">
      <div className="home-header">
              <div className="logo" data-aos="fade-right">
                <LinkPage to="/" className="logo">S | V</LinkPage>
              </div>
            <div className="home-links">
              <ul className="home-list" data-aos="fade-left">
                  <li className="home-item"><LinkPage to="/portraits"  >Portrait</LinkPage></li>
                  <li className="home-item"><LinkPage to="/landscapes">Landscape</LinkPage></li>
                  <li className="home-item"><LinkPage to="/contact" >Contact</LinkPage></li>
              </ul>
            </div>
      </div>
    </div>

  );
};

export default Header;