import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Avatar, Button, Toolbar } from '@mui/material';
import Logo from '../assets/logo.png'
import AppDrawer from './AppDrawer'
import { Box } from '@mui/system';
import { Link } from 'react-scroll';

const Nav = () =>{
    return(
        <AppBar position='sticky' style={{background: 'transparent', boxShadow: 'none'}}>
            <Toolbar>
                <Link
                    activeClass="active"
                    to={"Home"}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}>
                    <Button>
                        <Avatar src={Logo}/>
                    </Button>
                </Link>
                <Box marginLeft="auto"><AppDrawer/></Box>
            </Toolbar>
        </AppBar>
    );
};

export default Nav;