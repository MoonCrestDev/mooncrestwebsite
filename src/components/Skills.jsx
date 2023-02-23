import { useTheme } from "@emotion/react";
import { Avatar, Button, Grid, Link, Rating, Tooltip, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system"
import Kotlin from '../assets/kotlin_icon.png'
import Figma from '../assets/figma.png'
import ReactIcon from '../assets/react_icon.png'
import Python from '../assets/python_icon.png'
import Firebase from '../assets/firebase.png'
import CSharp from '../assets/csharp_icon.png'
import Udemy from '../assets/udemy_icon.png'
import Fade from 'react-reveal/Fade';


function Skill(props){
    const theme = useTheme();
    return(
        <Stack justifyContent="center" alignItems="center">
            <Avatar src={props.image} />
            <Box m={2} style={{backgroundColor: theme.palette.surface.main}} sx={{ borderRadius: '16px' }}>
                <Stack direction={"column"} style={{ display:'flex', justifyContent:'center' }} mb={1} mt={1} ml={15} mr={15}>
                    <Typography variant="h6" sx={{fontWeight: 'bold'}}  align="center">{props.name}</Typography>
                    <Rating color={theme.palette.primary.main} name="read-only" value={props.value} readOnly sx={{justifyContent: "center"}} />
                </Stack>
            </Box>
        </Stack>
    );
}

function SkillWithUdemy(props){
    const theme = useTheme();
    return(
        <Stack justifyContent="center" alignItems="center">
            <Avatar src={props.image} />
            <Box m={2} style={{backgroundColor: theme.palette.surface.main}} sx={{ borderRadius: '16px' }}>
                <Stack direction={"row"}  mb={1} mt={1} ml={15} mr={10} style={{ display:'flex', justifyContent:'center' }}>
                    <Stack direction={"column"} style={{ display:'flex', justifyContent:'center' }}>
                        <Typography variant="h6" sx={{fontWeight: 'bold'}}  align="center">{props.name}</Typography>
                        <Rating color={theme.palette.primary.main} name="read-only" value={props.value} readOnly sx={{justifyContent: "center"}} />
                    </Stack>
                    <UdemyCourse tooltip={props.tooltip} link={props.link}/>
                </Stack>
            </Box>
        </Stack>
    );
}

function UdemyCourse(props){
    return(
        <Tooltip title={props.tooltip}>
            <Link href={props.link}>
                <Button>
                    <img src={Udemy} alt="my" width={"15px"} />
                </Button>
            </Link>
        </Tooltip>
    );
}

const Skills = () =>{
    const theme = useTheme();
    return(
        <Stack direction="column" display="flex"  id="Skills">
            <Fade top>
                <Typography color={theme.palette.primary.onPrimary} variant="h2" sx={{fontWeight: 'bold'}} align="center">
                    My Skills
                </Typography>
            </Fade>
            <Grid container mt={10}>
                <Grid item xs={12} md={9}>
                    <Fade left>
                        <SkillWithUdemy
                            image={Kotlin}
                            name="Kotlin: Expert"
                            value="5"
                            tooltip="Studied at Android 12 & Kotlin Development Masterclass on Udemy"
                            link="https://www.udemy.com/course/android-kotlin-developer/"
                        />
                    </Fade>
                </Grid>
                <Grid item xs={0} md={3}>

                </Grid>
                <Grid item xs={0} md={2}>

                </Grid>
                <Grid item xs={12} md={10}>
                    <Fade right>
                        <SkillWithUdemy
                            image={Figma}
                            name="Figma: Expert"
                            value="5"
                            tooltip="Studied at Figma UI UX Design Essentials on Udemy"
                            link="https://www.udemy.com/course/figma-ux-ui-design-user-experience-tutorial-course/"
                            />
                    </Fade>
                </Grid>

                <Grid item xs={12} md={9}>
                    <Fade left>
                        <Skill
                            image={ReactIcon}
                            name="React: Advanced"
                            value="4"
                        />
                    </Fade>
                </Grid>
                <Grid item xs={0} md={3}>

                </Grid>
                
                <Grid item xs={0} md={2}>

                </Grid>
                <Grid item xs={12} md={10}>
                    <Fade right>
                        <Skill
                            image={Python}
                            name="Python: Advanced"
                            value="4"
                        />
                    </Fade>
                </Grid>

                <Grid item xs={12} md={9}>
                    <Fade left>
                        <Skill
                            image={Firebase}
                            name="Firebase: Advanced"
                            value="4"
                        />
                    </Fade>
                </Grid>
                <Grid item xs={0} md={3}>

                </Grid>
                
                <Grid item xs={0} md={2}>

                </Grid>
                <Grid item xs={12} md={10}>
                    <Fade right>
                        <Skill
                            image={CSharp}
                            name="C#: Intermediate"
                            value="3"
                        />
                    </Fade>
                </Grid>
            </Grid>
        </Stack>
    );
};

export default Skills;