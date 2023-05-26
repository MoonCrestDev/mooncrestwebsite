import Fade from 'react-reveal/Fade';
import * as React from 'react';
import { Stack } from '@mui/system';
import { Avatar, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import PDPIcon from '../assets/pdp_icon.png'
import PDPScreenshot from '../assets/screenshot.png'
import Kotlin from '../assets/kotlin_icon.png'
import Firebase from '../assets/firebase.png'
import TFHIcon from '../assets/twentyfourhours_icon.png'
import TFHScreenshot from '../assets/tfh_screenshot.png'
import Database from '../assets/database.png'
import Compose from '../assets/compose_icon.png'

const Projects = () =>{
    const theme = useTheme();
    return(
        <Stack direction={"column"}  display="flex" mt={10}  id="Projects">
            <Fade top>
                <Typography color={theme.palette.primary.onPrimary} variant="h2" sx={{fontWeight: 'bold'}} align="center">
                    My Projects
                </Typography>
            </Fade>
            <Stack direction={{xs:"column", md: "row"}} spacing={15} mt={15} alignItems="center" alignSelf={"center"}>
                <Fade>
                    <img alt='pdp icon' src={PDPIcon} width="100px" height="100px"/>
                </Fade>
                <Stack direction={"column"} spacing={1} alignItems="center" alignSelf={"center"}>
                    <Typography variant='h4' sx={{fontWeight: 'bold'}}>Pocket Day Planner 2</Typography>
                    <Typography variant='h6'>A simple app for planning your day easily.</Typography>
                    <Typography variant='h6'>Made using:</Typography>
                    <Stack direction={"row"} alignItems="center" alignSelf={"center"}>
                        <Avatar src={Kotlin}/>
                        <Avatar src={Firebase}/>
                    </Stack>
                    <a style={{display: "flex", width: 200}} href='https://play.google.com/store/apps/details?id=com.mooncrest.pocketdayplanner'>
                        <img  alt='Get it on Google Play' style={{display: "flex", width: 200}} src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/>
                    </a>
                </Stack>
                <img alt='pdp screenshot' src={PDPScreenshot} width="250px" height="500"/>
            </Stack>
                <Stack direction={{xs:"column", md: "row"}} spacing={15} mt={15} alignItems="center" alignSelf={"center"}>
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
                <img alt='tfh screenshot' src={TFHScreenshot} width="250px" height="500"/>
            </Stack>
        </Stack>
    );
};

export default Projects;