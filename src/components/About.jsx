import { Avatar, Card, createTheme, Grid, Stack, ThemeProvider, Typography } from '@mui/material';
import { Container, keyframes } from '@mui/system';
import React from 'react'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import KotlinIcon from '../assets/kotlin_icon.png'
import PythonIcon from '../assets/python_icon.png'
import CsharpIcon from '../assets/csharp_icon.png'
import JavascriptIcon from '../assets/javascript_icon.png'
import ReactIcon from '../assets/react_icon.png'
import JavaIcon from '../assets/java_icon.png'
import Logo from '../assets/logo.png'
import LanguageCard from "./LanguageCard"
import { SocialIcon } from 'react-social-icons';

const myTheme = createTheme({
    typography: {
        fontFamily: [
          'Raleway',
          'serif',
        ].join(','),
    },
    palette: {
        primary: {
            main: "#D6D6D6"
        },
        secondary: {
            main: "#454545"
        }
    },
});

const bounceEffect = keyframes`
    0%   {margin-top: 0px;}
    50%  {margin-top: 30px;}
    100% {margin-top: 0px;}
`;
export const About = () => {

    return(
        <ThemeProvider theme={myTheme}>
            <section  id="About">
                <Container>
                    <Stack direction="column" alignItems={"center"} sx={{mt: 15, mb: 15}}>
                        <Typography variant='h2' color="common.white" sx={{textAlign: "center"}}>About</Typography>
                        <Stack direction={"row"} alignItems={"center"}>
                            <Avatar sx={{animation: `${bounceEffect} 2s infinite ease`}} src={Logo} alt="logo" style={{width: "15%", height: "15%"}}/>
                            <Card sx={{padding: 5, backgroundColor: 'transparent', shadowOpacity: 0, width: "90%", mt: 5, ":hover": {boxShadow: 20}}}>
                                <Stack alignItems={"center"} direction="column">
                                    <Stack alignItems={"center"} direction={"column"} spacing={1} sx={{}}>
                                        <Typography color="common.white" variant='p' sx={{textAlign: "center"}}>I am a developer, specializing in App Development. I have been developing apps using Kotlin (Java). </Typography>
                                        <Typography color="common.white" variant='p' sx={{textAlign: "center"}}> I’m familiar with a variety of programming languages, and I’m constantly learning new skills.</Typography>
                                        <Typography color="common.white" variant='p' sx={{textAlign: "center"}}> Moon Crest is my personal project, and also the name of the company my apps are being published by.</Typography>
                                    </Stack>
                                    <Stack direction={"row"} spacing={3} mt={2}>
                                        <SocialIcon url="https://www.linkedin.com/in/kfir-raphael-eliyahu-b65608247/" />
                                        <SocialIcon network='google_play' url="https://play.google.com/store/apps/dev?id=6507264270844582290" />
                                    </Stack>
                                </Stack>
                            </Card>
                        </Stack>
                    </Stack>

                    <Container>
                    <Stack direction="column" alignItems={"center"}>
                        <Card sx={{padding: 3, backgroundColor: 'transparent', shadowOpacity: 0, width: 1, mt: 5, ":hover": {boxShadow: 20}}}>
                            <Stack direction="row" alignItems={"center"}>
                                <AutoAwesomeIcon color="common.white" sx={{ mr: 2}}/>
                                <Typography variant='h4' color={"common.white"}>My Skills</Typography>
                            </Stack>                        
                            <Grid container spacing={3}>
                                    <Grid item xs={6} md={4}>
                                        <LanguageCard language="Kotlin" image={KotlinIcon} experience="Expert" value="5"/>
                                    </Grid>
                                    <Grid item xs={6} md={4}>
                                        <LanguageCard language="Python" image={PythonIcon} experience="Advanced" value="4"/>
                                    </Grid>
                                    <Grid item xs={6} md={4}>
                                        <LanguageCard language="React.js" image={ReactIcon} experience="Advanced" value="4"/>
                                    </Grid>
                                    <Grid item xs={6} md={4}>
                                        <LanguageCard language="Csharp" image={CsharpIcon} experience="Intermediate" value="3"/>
                                    </Grid>
                                    <Grid item xs={6} md={4}>
                                        <LanguageCard language="JavaScript" image={JavascriptIcon} experience="Intermediate" value="3"/>
                                    </Grid>
                                    <Grid item xs={6} md={4}>
                                        <LanguageCard language="Java" image={JavaIcon} experience="Intermediate" value="3"/>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Stack>
                    </Container>
                </Container>
            </section>
        </ThemeProvider>
    );
}