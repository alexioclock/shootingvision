import './portraitpage.scss'
import Header from '../Header';
import itemData from './itemData';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Masonry from '@mui/lab/Masonry';


export const PortraitsPage = () => {

  return (
    <div className="portrait-page" id="portrait">
        <Header />
        <Box sx={{ width: "100vw", minHeight: 829 }}>
          <Masonry columns={3} spacing={1}>
            {itemData.map((item, index) => (
              <Stack key={index}>
                <img
                  className= {`image${index + 1}`}
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
  );
};

export default PortraitsPage;