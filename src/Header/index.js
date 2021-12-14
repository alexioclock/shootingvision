



import './header.scss';
import MenuSlide from '../MenuSlide';
import { Link as LinkPage } from 'react-router-dom';


export const Header = () => {

  return (
    <>
    <MenuSlide />
    <div className="home-header">
            <div className="logo">
              <LinkPage to="/">ShootingVision</LinkPage>
            </div>
          <div className="home-links">
            <ul className="home-list">
                <li className="home-item"><LinkPage to="/portraits"  >Portrait</LinkPage></li>
                <li className="home-item"><LinkPage to="/landscapes">Landscape</LinkPage></li>
                <li className="home-item"><LinkPage to="/contact" >Contact</LinkPage></li>
            </ul>
          </div>
    </div>
    </>

  );
};

export default Header;