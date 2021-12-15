

import MenuSlide from '../MenuSlide';
import './home.scss';
import arrow from '../assets/icons/down-arrow.svg';
import Header from '../Header';

import { Link } from 'react-scroll';
import HomeSecondPart from '../HomeSecondPart';

function Home() {

  return (
    <>
      <div className="home" id="home">
        <Header />
          <Link to="homepage" spy={true} smooth={true} duration={1000}>
          <div className="arrow"><img src={arrow} width="40px" alt="navigation" /></div>
          </Link>   
      </div>
      <HomeSecondPart />
    </>
  );
}

export default Home;
