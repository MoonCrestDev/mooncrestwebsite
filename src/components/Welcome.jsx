import { createTheme, ThemeProvider, Collapse, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

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

export const Welcome = () => {
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);

    return(
        <ThemeProvider theme={myTheme}>
            <Collapse  in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={50}>
                <Container id="Welcome" sx={{mt: 30, mb: 30}}>
                    <Typography variant='h2' color="common.white" sx={{fontWeight: "bold", textAlign: "center", mt: 5}}>Welcome</Typography>
                    <Typography variant='h3' color="common.white" sx={{fontWeight: "bold", textAlign: "center"}}>My name is Kfir Raphael Eliyahu</Typography>
                </Container>
            </Collapse>
        </ThemeProvider>
    );
}