import { AppBar, AppBarProps, Avatar, Box, Button, Container, Stack, Toolbar } from "@mui/material";
import React from "react";
import * as Scroll from 'react-scroll';

const NavBar: React.FC<AppBarProps> = (props) => {

    return <AppBar {...props} sx={{ background: 'transparent' }} elevation={0}>
        <Toolbar>
            <Container maxWidth='lg'>
                <Stack
                    justifyContent='space-between'
                    direction='row'
                >
                    <Stack direction='row' spacing={2}>

                        <Avatar
                            src="/main_logo.png"
                        />

                        <Box
                            component={"img"}
                            src="/logo_text.png"
                        />
                    </Stack>

                    <Stack direction='row' spacing={2}>
                        <Scroll.Link to="#history" smooth>

                            <Button
                                variant="text"
                                sx={{
                                    textDecoration: 'underline',
                                    fontStyle: 'italic',
                                    fontWeight: 'bold'
                                }}
                                color="inherit"
                            >
                                01. History
                            </Button>
                        </Scroll.Link>

                        <Button
                            variant="text"
                            sx={{
                                textDecoration: 'underline',
                                fontStyle: 'italic',
                                fontWeight: 'bold'
                            }}
                            color="inherit"
                        >
                            02. Team
                        </Button>

                    </Stack>
                </Stack>
            </Container>
        </Toolbar>
    </AppBar>

}

export default NavBar;