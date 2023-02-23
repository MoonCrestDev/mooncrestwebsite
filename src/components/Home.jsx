import { Stack } from '@mui/system';
import { Box, Typography } from '@mui/material';
import * as React from 'react';
import background from '../assets/background.png';
import { SocialIcon } from 'react-social-icons';
import { useTheme } from '@emotion/react';
import Fade from 'react-reveal/Fade';


const Home = () =>{
    const theme = useTheme();
    return(
        <Fade>
            <Box
                id="Home"
                mt={10}
                mb={{xs: 35, md: 0}}
                display="flex"
                justifyContent="center"
                minHeight={{md: "100vh"}}
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                }}>
                    <Stack direction={"column"} spacing={1} m={{xs: 0, md: 4}}  >   
                        <Typography variant='h5' align='center'>
                            Hi, I’m Kfir Raphael Eliyahu
                        </Typography>
                        <Typography color={theme.palette.primary.onPrimary} variant='h2' align='center' sx={{fontWeight: 'bold'}}>
                        Mobile App Developer
                        </Typography>
                        <Typography color={theme.palette.primary.onPrimary} variant='h2' align='center' sx={{fontWeight: 'bold'}}>
                        & UX\UI Designer
                        </Typography>
                                            
                        <Stack direction={{xs: "row"}} spacing={2} alignSelf="center" nalignItems="center">
                            <SocialIcon display="flex" url='https://www.linkedin.com/in/kfir-raphael-eliyahu-b65608247/'/>
                            <SocialIcon url='https://www.instagram.com/kfir.eliyahu8/?next=%2F'/>
                            <SocialIcon network='google_play' url='https://play.google.com/store/apps/dev?id=6507264270844582290'/>
                        </Stack>
                    </Stack>
            </Box>
        </Fade>

    );
};

export default Home;