import { Button, Container, Divider, Drawer, IconButton, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Stack } from "@mui/system";
import { Link } from "react-scroll";

const items = ['About', 'Skills', 'Projects', 'Contact'];

const AppDrawer = () =>{
    const [isDrawerOpen, SetIsDrawerOpen] = useState(false)
    const theme = useTheme();
    return(
        <>
            <IconButton size="large" edge="end" onClick={() => SetIsDrawerOpen(true)}>
                <MenuIcon/>
            </IconButton>
            <Drawer anchor="right" open={isDrawerOpen} onClose={() => SetIsDrawerOpen(false)} >
                <Stack justifyItems={"center"} alignItems="center" spacing={4} marginTop='auto' marginBottom='auto'>
                    {items.map((item) =>
                    <Container>
                        <Link
                            activeClass="active"
                            to={item}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}>
                            <Button sx={{display:{"width": "100%"}}}>
                                <Typography color={theme.palette.primary.onPrimary} variant="h6" sx={{fontWeight: 'bold'}}>
                                    {item}
                                </Typography>
                            </Button>
                        </Link>
                        <Divider/>
                    </Container>
                    )}
                </Stack>
            </Drawer>
        </>
    );
};

export default AppDrawer;