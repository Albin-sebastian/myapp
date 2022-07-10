// import { ListItemText, Typography } from '@mui/material'
import { Container, styled, Toolbar, Typography } from '@mui/material';
import React from 'react'
import { AppbarContainer, AppbarHeader } from '../../styles/appbar/Appbar'
import { Home } from '../home/Home';
import { AppbarButton } from '../navbar/AppbarButton'


const StyledToolbar = styled(Toolbar)({

    display: "flex",
    justifyContent: "flex-start",
});




const AppbarDesktop = () => {


    return (
        <>
            <Container maxWidth='xl'>
                <AppbarContainer>
                    <AppbarHeader>
                        LOGO
                    </AppbarHeader>
                    <StyledToolbar>

                        <AppbarButton title={'Explore'} />
                        <AppbarButton title={'Products'} />
                        <AppbarButton title={'Solutions'} />
                        <AppbarButton title={'Pricing'} />
                        <AppbarButton title={'Partners'} />
                        <AppbarButton title={'Resources'} />
                        {/* <Explore title={'Explore'} elem={<CustomizedMenus />} /> */}
                        <Typography>search</Typography>
                        <Typography>Docs </Typography>
                        <Typography>Support </Typography>
                        <Typography>Contact sales </Typography>
                        <Typography> Free Account </Typography>
                        <Typography>sign in </Typography>
                    </StyledToolbar>
                </AppbarContainer >
            </Container>



            <Home />
        </>
    )
}

export default AppbarDesktop
