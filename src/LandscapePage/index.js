import './landscapePage.scss'
import Header from '../Header';
import Loader from '../Loader';
import itemData from './itemData';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Masonry from '@mui/lab/Masonry';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';



export const PortraitsPage = () => {

const [loading, setLoading] = useState(true);

const loader = () => {
  setLoading(false);
}

    useEffect(() => {
      Aos.init({duration:2000});
  }, []);
  
  return (
        <>
          <Header/>
          <div className="landscape-page">
          <Box sx={{ width: "100vw", minHeight: 829 }}>
            <Masonry columns={{ xs: 1, sm: 3 }} spacing={1}>
              {itemData.map((item, index) => (
                <Stack key={index}>
                    <img
                      // src={`${item.img}?w=162&auto=format`}
                      srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                      style={{ borderBottomLeftRadius: 4, borderBottomRightRadius: 4 }}
                    />
                </Stack>
              ))}
            </Masonry>
          </Box> 
      </div>
    </>
  );
};

export default PortraitsPage;