import { Card, createTheme, Stack, ThemeProvider, Typography } from '@mui/material';
import { Container, keyframes } from '@mui/system';
import React from 'react'
import IQueryIcon from "../assets/iquery_icon.png"
import zero from '../assets/iquery/0.png'
import first from '../assets/iquery/1.png'
import second from '../assets/iquery/2.png'
import third from '../assets/iquery/3.png'
import four from '../assets/iquery/4.png'
import fifth from '../assets/iquery/5.png'
import sixth from '../assets/iquery/6.png'

import Carousel from 'react-material-ui-carousel'


const slideImages = [zero, first, second, third, four, fifth, sixth];

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
    }
});

const bounceEffect = keyframes`
    0%   {margin-top: 0px;}
    50%  {margin-top: 30px;}
    100% {margin-top: 0px;}
`;

export const Projects = () => {

    return(
        <ThemeProvider theme={myTheme}>
            <Container id="Projects"  sx={{justifyContent:"center"}} >
                <Stack direction="column" alignItems={"center"} sx={{mt: 15, mb: 15}}>
                    <Typography variant='h2' color="common.white" sx={{textAlign: "center"}}>Projects</Typography>

                    <Container id="iquery">
                        <Stack direction={{xs:"column", sm: "row"}} alignItems={"center"}>
                            <Stack direction={"row"} alignItems={"center"}>
                                <Card sx={{display: "flex", width:125, mr: 2, boxShadow:20, animation: `${bounceEffect} 2s infinite ease`}}>
                                    <img style={{width: "100%", height: "100%"}} src={IQueryIcon} alt="pdpicon" />
                                </Card>

                                <Card sx={{padding: 2, backgroundColor: 'transparent', shadowOpacity: 0, ":hover": {boxShadow: 20}}}>
                                    <Typography mb={2} variant='h4' color="common.white">IQuery</Typography>
                                    <Stack alignItems={"center"} direction="row">
                                        <Typography variant="p" color="common.white">
                                            IQuery is a tool that helps you find connections between any two questions that YOU choose. It provides the percentage of the relation, and presents statistics with graphs.
                                        </Typography>
                                    </Stack>
                                    <Stack alignItems={"end"}>
                                        <a style={{display: "flex", width: 200, alignItems: "end"}} href='https://play.google.com/store/apps/details?id=com.mooncrest.iquery&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                                            <img  alt='Get it on Google Play' style={{display: "flex", width: 200}} src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/>
                                        </a>
                                    </Stack>
                                </Card>
                            </Stack>

                            <Container>
                                <Carousel sx={{width: "60%", m:2}} >
                                    {
                                        slideImages.map((image) =>{
                                            return <Card display="flex"><img src={image} alt="slide" style={{width: "100%", height: "100%"}}/></Card>
                                        } )
                                    }
                                </Carousel>
                            </Container>
                        </Stack>
                    </Container>
                </Stack>
            </Container>
        </ThemeProvider>
    );
}