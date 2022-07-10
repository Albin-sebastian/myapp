import { AppBar, Grid, Toolbar } from '@mui/material'
import React from 'react'

import Navmenu from './Navmenu'

const Navbar = () => {
    return (
        <AppBar>
            <Toolbar>
                <Grid container spacing={1} sx={{ placeItems: 'center' }}>
                    <Grid item sx={{ display: { xs: 'none', sm: 'block' } }} lg={5}> Logo</Grid>
                    <Grid item xs={5}><Navmenu />

                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar >

    )
}

export default Navbar
