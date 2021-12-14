
import './portraitpage.scss'

import Landscape from './Landscape';
import Header from '../Header'
import HorizontalScroll from 'react-scroll-horizontal';
import itemData from './itemData';

export const PortraitsPage = () => {
  return (
    <div className="portraits-page">
        <Header />
        <HorizontalScroll className="scroll" reverseScroll={true} >
            {itemData.map((item) =>(
             <Landscape {...item}/>
            ))}
        </HorizontalScroll>
    </div>
  );
};

export default PortraitsPage;