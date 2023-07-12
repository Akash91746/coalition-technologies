import React from 'react';
import NavBar from './NavBar';
import { Box, Container, makeStyles } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';

import styles from './App.module.css';

const carouselImages = Array.from(new Array(8))
  .map((_, index) => (index % 2 === 0) ? '/carousel-img-2.png' : 'carousel-img-1.png');

function App() {

  return (
    <React.Fragment>
      <Box
        position='relative'
        height='100vh'
        width='100vw'>

        <NavBar
          position='absolute'
          sx={{ zIndex: 10, top: 0 }}
        />

        <Box
          component={'div'}
          sx={{
            backgroundImage: "url('/hero_bg.png')",
            top: 0,
            left: 0,
            position: 'absolute',
            width: '100%',
            height: '100%'
          }}
        />
      </Box>

      <Box
        width='100vw'
        height='100vh'
        position='relative'
        overflow='hidden'
        component={'section'}
        id='history'
      >

        <NavBar
          position='static'
          color='inherit'
        />

        <Box
          component={'div'}
          sx={{ backgroundImage: "url('/peak.png')", height: '100%', width: '100%' }}
        />
      </Box>


    </React.Fragment>
  );
}

export default App;
