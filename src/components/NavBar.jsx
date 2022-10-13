import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Logo from '../assets/G_Moon Crest-03.png'
import { Avatar, createTheme, Typography } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { Link } from "react-scroll";

const pages = ['About', 'Projects', 'Contact'];

const myTheme = createTheme({
    typography: {
        fontFamily: [
          'Raleway',
          'serif',
        ].join(','),
    },
    palette: {
        primary: {
            main: "#90a4ad",
            contrastText: "#454545"
        },
        secondary: {
            main: "#454545"
        }
    }
});

const NavBar = () => {
  return (
    <ThemeProvider theme={myTheme}>
        <AppBar position="sticky" style={{ background: 'transparent', boxShadow: 'none'}}>
            <Container maxWidth="">
                <Toolbar disableGutters>
                    <Avatar src={Logo} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, width: "15%" }} />

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Link
                            activeClass="active"
                            to={page}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}><Typography sx={{mr: 2}} color="common.white">{page}</Typography></Link>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    </ThemeProvider>
  );
};
export default NavBar;
