import { Card, Stack, createTheme, ThemeProvider, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

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

export const Contact = () => {
    return(
        <ThemeProvider theme={myTheme}>
            <section id="Contact">
                <Container>
                    <Typography variant='h2' color="common.white" sx={{textAlign: "center"}}>Contact</Typography>
                    <Stack alignItems={"center"}>
                        <Card sx={{padding: 5, backgroundColor: 'transparent', shadowOpacity: 0, width: 1, mt: 5, ":hover": {boxShadow: 20}}}>
                            <EmailOutlinedIcon sx={{color: "common.white"}}/>
                            <Typography variant='h5' color="common.white">Email: raph@mooncrestdev.com</Typography>
                            <Typography color="common.white" onClick={() => window.location = 'mailto:yourmail@domain.com'}>Send a message</Typography>
                        </Card>
                    </Stack>
                </Container>
            </section>
        </ThemeProvider>
    );
}