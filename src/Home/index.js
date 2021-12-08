

import MenuSlide from '../MenuSlide';
import './home.scss';
import React from 'react';
import arrow from '../assets/icons/down-arrow.svg';

function Home() {



  return (
    <div className="home">
        <div className="home-header">
          <div className="logo">
           <a href="#">ShootingVision</a>
          </div>
         <div className="home-links">
         <ul className="home-list">
            <li className="home-item"><a href="#">Portrait</a></li>
            <li className="home-item"><a href="#">Landscape</a></li>
            <li className="home-item"><a href="#">Contact</a></li>
          </ul>
         </div>
        </div>
        <div className="arrow"><img src={arrow} width="40px" alt="navigation" /></div>
    </div>
  );
}

export default Home;
