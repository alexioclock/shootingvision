import { stack as Menu } from "react-burger-menu";
import { Link } from "react-scroll";
import "./menuSlide.scss";

export default (props) => {


  return (
    <Menu   {...props}>
      <Link to="home" spy={true} smooth={true} duration={1000}>
        Home
      </Link>

      <Link to="a-propos" spy={true} smooth={true} duration={1000}>
        Portfolio
      </Link>

      <Link to="technology" spy={true} smooth={true} duration={1000}>
        Réserver
      </Link>

      <Link to="contact" spy={true} smooth={true} duration={1000}>
        Contact
      </Link>
    </Menu>
  );
};