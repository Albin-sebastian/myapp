import { useMediaQuery, useTheme } from '@mui/material';

import React from 'react'
import AppbarDesktop from './AppbarDesktop';
import AppbarMobile from './AppbarMobile';

const Appbar = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    //console.log(matches);
    return (
        <>
            {matches ? <AppbarMobile /> : <AppbarDesktop />}

        </>
    )
}

export default Appbar
