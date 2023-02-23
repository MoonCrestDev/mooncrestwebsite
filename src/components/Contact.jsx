import { useTheme } from '@emotion/react';
import { Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import * as React from 'react';
import Fade from 'react-reveal/Fade';
import { SocialIcon } from 'react-social-icons';

const Contact = () =>{
    const theme = useTheme();
    return(
        <Stack spacing={3} width={"100%"} justifySelf={"center"} display="flex" style={{backgroundColor: theme.palette.surface.main}} mt={30}>
            <Fade left>
                <Typography id="Contact" color={theme.palette.primary.onPrimary} variant="h5" sx={{fontWeight: 'bold'}} align="center">
                    Let's Talk!
                </Typography>
                <Typography variant='h6' align="center">
                    You can use one of the next platforms to contact me:
                </Typography>
            </Fade>
            <Stack direction={{xs: "row"}} spacing={2} alignSelf="center" alignItems="center">
                    <SocialIcon style={{ height: 50, width: 50 }} url='https://www.linkedin.com/in/kfir-raphael-eliyahu-b65608247/'/>
                    <SocialIcon style={{ height: 50, width: 50 }} url='https://www.instagram.com/kfir.eliyahu8/?next=%2F'/>
                    <SocialIcon style={{ height: 50, width: 50 }} url='mailto:raph@mooncrestdev.com'/>
            </Stack>
        </Stack>
    );
};

export default Contact;