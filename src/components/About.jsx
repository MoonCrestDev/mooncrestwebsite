import { useTheme } from "@emotion/react";
import { Avatar, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from 'react';
import AppDesign from '../assets/app_design.png'
import Scripts from '../assets/scripts.png'
import UiUx from '../assets/uiux.png'
import WebDesign from '../assets/web_design.png'
import Kotlin from '../assets/kotlin_icon.png'
import ReactIcon from '../assets/react_icon.png'
import JavaScript from '../assets/javascript_icon.png'
import Python from '../assets/python_icon.png'
import Figma from '../assets/figma.png'
import Firebase from '../assets/firebase.png'
import Github from '../assets/github.png'
import Database from '../assets/database.png'
import Compose from '../assets/compose_icon.png'
import AndroidStudio from '../assets/android_studio.png'
import Fade from 'react-reveal/Fade';

function AboutComponent(props){
    return(
    <Fade left>
        <Stack direction={{xs: "column", md: "row"}} spacing={2} alignItems="center" alignSelf={"center"}>
            <img alt="about component" width={150} height={150} src={props.mainIcon}></img>
            <Stack direction={"column"} spacing={2} alignItems={{xs: "center", md: "start"}} alignSelf={{xs: "center"}}>
                    <Typography variant="h5" sx={{fontWeight: 'bold'}}>{props.name}</Typography>
                    <Typography>{props.text}</Typography>
                    <Stack direction={"row"}>
                        {props.icons.map((icon) =>(
                            <Avatar src={icon}/>
                        ))}
                    </Stack>
                </Stack>
        </Stack>

    </Fade>

    );
}

const About = () =>{
    const theme = useTheme();
    return(
        <Stack direction="column" display="flex" id="About">
            <Fade top>
                <Typography color={theme.palette.primary.onPrimary} variant="h2" sx={{fontWeight: 'bold'}} align="center">
                    About
                </Typography>
            </Fade>
            <Box m={8}>
                <Typography variant="h5"  sx={{fontWeight: 'bold'}} mb={2}>
                    I am a developer, specializing in UI\UX and app development.</Typography>
                <Typography>
                I mainly use Figma for UI\UX, and Kotlin for app development,
                 but I have a wide variety of knowledge in multiple programming languages.</Typography>
                <Typography>I’m 19 years old, and currently serving my military service at Lahav 433, as a Cyber Analyst.
                </Typography>
                <Typography>Also, I’m currently studying Computer Science (B.Sc.) at the Open University of Israel.</Typography>
                
                <Grid container spacing={8} mt={5}>
                    <Grid item xs={12} md={6}> 
                        <AboutComponent
                            mainIcon={AppDesign}
                            name="App Design"
                            text="I build android apps in Android Studio, using Kotlin Jetpack Compose and Firebase."
                            icons={[Kotlin, Firebase, Compose, AndroidStudio]}/>
                    </Grid>
                    <Grid item xs={12} md={6}> 
                        <AboutComponent
                            mainIcon={WebDesign}
                            name="Web Design"
                            text="I build web solutions using React.js, and Django in Python."
                            icons={[ReactIcon, JavaScript, Figma, Python]}/>
                    </Grid>
                    <Grid item xs={12} md={6}> 
                        <AboutComponent
                            mainIcon={UiUx}
                            name="UI/UX"
                            text="I design UI\UX using Figma. After prototyping my design, I use it to develop apps and web-solutions."
                            icons={[Figma]}/>
                    </Grid>
                    <Grid item xs={12} md={6}> 
                        <AboutComponent
                            mainIcon={Scripts}
                            name="Scripts"
                            text="I develop scripts using python. In addition, I manage my code using Github. I have knowledge of many libraries such as Sqlite, Tkinter and more."
                            icons={[Python, Github, Database]}/>
                    </Grid>
                </Grid>
            </Box>
        </Stack>
    );
};

export default About;