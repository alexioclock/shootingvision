import LeftArrow from '../assets/icons/right-arrow.svg';

import './portraitpage.scss'
import Landscape from './Landscape';
import Header from '../Header';
import HorizontalScroll from 'react-scroll-horizontal';
import itemData from './itemData';

export const PortraitsPage = () => {
  return (
    <div className="portraits-page">
        <Header />
        <div className="scroll-container">
          <HorizontalScroll className="scroll" reverseScroll={true}   config= {{ stiffness: 100 }} animValues= { 10 } >
              {itemData.map((item) =>(
              <Landscape {...item}/>
              ))}
          </HorizontalScroll>
          <div className="left-arrow"><img src={LeftArrow} width="40px" alt="navigation" /></div>
        </div>
    </div>
  );
};

export default PortraitsPage;