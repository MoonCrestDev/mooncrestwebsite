import Fade from 'react-reveal/Fade';
import * as React from 'react';
import { Stack } from '@mui/system';
import { Avatar, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import Kotlin from '../assets/kotlin_icon.png'
import TFHIcon from '../assets/twentyfourhours_icon.png'
import TFHScreenshot from '../assets/tfh_screenshot.png'
import ProductiveScreenshot from '../assets/productive_screenshot.png'
import ProductiveIcon from '../assets/productive_icon.png'
import Database from '../assets/database.png'
import Firebase from '../assets/firebase.png'
import Compose from '../assets/compose_icon.png'
import YouTube from 'react-youtube';

const Projects = () =>{
    const theme = useTheme();
    return(
        <Stack direction={"column"}  display="flex" mt={10}  id="Projects"  alignItems="center" alignSelf={"center"}> 
            <Fade top>
                <Typography color={theme.palette.primary.onPrimary} variant="h2" sx={{fontWeight: 'bold'}} align="center">
                    My Projects
                </Typography>
            </Fade>
                <Stack direction={{xs:"column", md: "row"}} spacing={10} mt={10} alignItems="center" alignSelf={"center"}>
                    <Fade>
                        <img alt='pdp icon' src={TFHIcon} width="100px" height="100px"/>
                    </Fade>
                    <Stack direction={"column"} spacing={1} alignItems="center" alignSelf={"center"}>
                        <Typography variant='h4' sx={{fontWeight: 'bold'}}>24 Hours</Typography>
                        <Typography variant='h6'>A modern way of managing your day</Typography>
                        <Typography variant='h6'>Made using:</Typography>
                        <Stack direction={"row"} alignItems="center" alignSelf={"center"}>
                            <Avatar src={Kotlin}/>
                            <Avatar src={Database}/>
                            <Avatar src={Compose}/>
                        </Stack>
                        <a style={{display: "flex", width: 200}} href='https://play.google.com/store/apps/details?id=com.mooncrest.twentyfourhours'>
                            <img  alt='Get it on Google Play' style={{display: "flex", width: 200}} src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/>
                        </a>
                    </Stack>
                    <Fade>
                        <div>
                            <iframe
                                width="640"
                                height="390"
                                src={`https://www.youtube.com/embed/yjf5YGV6DjM?autoplay=1&loop=1&playlist=yjf5YGV6DjM`}
                                title="YouTube Video Player"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </Fade>
            </Stack>
            <Fade top>
                <Stack direction={{xs:"column", md: "row"}} spacing={10} mt={10} alignItems="center" alignSelf={"center"}>
                        <Fade>
                            <img alt='prdouctive icon' src={ProductiveIcon} width="100px" height="100px"/>
                        </Fade>
                        <Stack direction={"column"} spacing={1} alignItems="center" alignSelf={"center"}>
                            <Typography variant='h4' sx={{fontWeight: 'bold'}}>Productive</Typography>
                            <Typography variant='h6'>Become a smarter consumer</Typography>
                            <Typography variant='h6'>Made using:</Typography>
                            <Stack direction={"row"} alignItems="center" alignSelf={"center"}>
                                <Avatar src={Kotlin}/>
                                <Avatar src={Firebase}/>
                                <Avatar src={Compose}/>
                            </Stack>
                            <a style={{display: "flex", width: 200}} href='https://play.google.com/store/apps/details?id=com.mooncrest.productive'>
                                <img  alt='Get it on Google Play' style={{display: "flex", width: 200}} src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/>
                            </a>
                        </Stack>
                        <Fade>
                            <img alt='productive screenshot' src={ProductiveScreenshot} height="600" width="400"/>
                        </Fade>
                </Stack>
            </Fade>
        </Stack>
    );
};

export default Projects;