import { AppBar, AppBarProps, Avatar, Box, Button, Container, Stack, Toolbar } from "@mui/material";
import React from "react";

const NavBar: React.FC<AppBarProps> = (props) => {

    const navigateToSection = (id: string) => {
        document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    }

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

                        <Button
                            variant="text"
                            sx={{
                                textDecoration: 'underline',
                                fontStyle: 'italic',
                                fontWeight: 'bold'
                            }}
                            color="inherit"
                            onClick={(event) => navigateToSection("history")}
                        >
                            01. History
                        </Button>

                        <Button
                            variant="text"
                            sx={{
                                textDecoration: 'underline',
                                fontStyle: 'italic',
                                fontWeight: 'bold'
                            }}
                            color="inherit"
                            onClick={() => navigateToSection("team")}
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