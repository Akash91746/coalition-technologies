import React, { useState } from 'react';
import NavBar from './NavBar';
import { AppBar, Avatar, Box, Card, CardContent, Container, Stack, Tab, TabProps, Tabs, Toolbar, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import ResponsiveCarousel from './ResponsiveCarousel';


const carouselImages = Array.from(new Array(8))
  .map((_, index) => (index % 2 === 0) ? '/carousel-img-2.png' : 'carousel-img-1.png');

function App() {

  const [selectedTab, setSelectedTab] = useState(0);

  const handleOnChange = (event: React.SyntheticEvent, tab: number) => {
    setSelectedTab(tab);
  }

  const tabProps = (index: number, selectedIndex: number): TabProps => {
    if (index === selectedIndex) { }

    return {
      style: {
        backgroundColor: index === selectedIndex ? 'grey' : 'transparent',
        color: 'white', fontWeight: 'bold', textDecoration: 'underline'
      }
    }
  }

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

        <Box
          width='100vw'
          sx={{ backgroundColor: 'rgba(64, 79,108, 0.8)' }}
          position='absolute'
          bottom={0}
          p={3}
        >
          <Container maxWidth='lg'>
            <ResponsiveCarousel
              items={carouselImages}
            />
          </Container>

        </Box>
      </Box>

      <section id='team'>
        <Container maxWidth='lg' sx={{ height: '200px' }}>

        </Container>

        <Box sx={{ backgroundColor: 'rgba(64, 79,108, 1)' }}>
          <Container maxWidth='lg'>
            <Tabs
              value={selectedTab}
              onChange={handleOnChange}
            >
              <Tab label="Mountain 1" {...tabProps(0, selectedTab)} />
              <Tab label="Mountain 2" {...tabProps(1, selectedTab)} />
            </Tabs>
          </Container>
        </Box>

        <Box
          sx={{ backgroundImage: 'url("/footer-bg.png")', backgroundSize: 'cover' }}
          width='100vw'
          height='80vh'
        >
          <Container
            maxWidth='lg'
            sx={{ pt: 6 }}
          >
            <Card
              sx={{
                width: 'fit-content',
                backgroundColor: 'rgba(0,0,0,0.1)',
              }}
              elevation={2}
            >
              <Stack spacing={2} p={3}>
                <Typography variant='h5' textTransform='uppercase' fontWeight='bold'>
                  Schedule
                </Typography>

                <Typography>
                  25 Nov 2016 &nbsp; &nbsp; &nbsp; &nbsp; Vestibulum viverra
                </Typography>

                <Typography>
                  25 Nov 2016 &nbsp; &nbsp; &nbsp; &nbsp; Vestibulum viverra
                </Typography>

                <Typography>
                  25 Nov 2016 &nbsp; &nbsp; &nbsp; &nbsp; Vestibulum viverra
                </Typography>

                <Typography>
                  25 Nov 2016 &nbsp; &nbsp; &nbsp; &nbsp; Vestibulum viverra
                </Typography>
              </Stack>
            </Card>
          </Container>
        </Box>

        <AppBar position='static' sx={{ backgroundColor: 'rgba(64, 79,108, 1)' }}>
          <Toolbar>
            <Container maxWidth='lg'>
              <Stack direction='row' justifyContent='space-between' alignItems='center'>

                <Stack direction='row' spacing={2}>
                  <Avatar
                    src="/main_logo.png"
                  />

                  <Box
                    component={"img"}
                    src="/logo_text.png"
                  />
                </Stack>

                <Typography variant='caption' textTransform='uppercase'>
                  Copyright 2016. All right reserved
                </Typography>
              </Stack>
            </Container>
          </Toolbar>
        </AppBar>
      </section>


    </React.Fragment>
  );
}

export default App;
