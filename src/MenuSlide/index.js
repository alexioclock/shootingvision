import { stack as Menu } from "react-burger-menu";
import { Link as LinkPage } from 'react-router-dom';
import "./menuSlide.scss";

const MenuSlide = (props) => {

  return (
    <Menu   {...props} >
      <LinkPage to="/" spy={true} smooth={true} duration={1000}>
        Home
      </LinkPage>

      <LinkPage to="/portraits" spy={true} smooth={true} duration={1000}>
        Portraits
      </LinkPage>

      <LinkPage to="/landscapes" spy={true} smooth={true} duration={1000}>
        Landscapes
      </LinkPage>

      <LinkPage to="/contact" spy={true} smooth={true} duration={1000}>
        Contact
      </LinkPage>
    </Menu>
  )
};

export default MenuSlide;