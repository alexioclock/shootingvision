

import MenuSlide from '../MenuSlide';
import './home.scss';

function Home() {
  return (
    <div className="home">
        <div className="home-header">
          <div className="logo">
           <h1>ShootingVision</h1>
          </div>
         <div className="home-links">
         <ul className="home-list">
            <li className="home-item"><a src="#">Portrait</a></li>
            <li className="home-item"><a src="#">Landscape</a></li>
            <li className="home-item"><a src="#">Contact</a></li>
          </ul>
         </div>
        </div>
    </div>
  );
}

export default Home;
