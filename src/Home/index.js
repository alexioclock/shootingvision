

import './home.scss';
import arrow from '../assets/icons/down-arrow.svg';
import Header from '../Header';
import Aos from 'aos';
import "aos/dist/aos.css";
import { Link } from 'react-scroll';
import HomeSecondPart from '../HomeSecondPart';
import { useEffect } from 'react';


function Home() {
  useEffect(() => {
    Aos.init({duration:2000});
}, []);

  return (
    <>
      <div className="home" id="home" data-aos="fade"data-aos-duration="3000">
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
