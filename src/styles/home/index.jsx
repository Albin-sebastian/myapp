import { styled } from "@mui/material";
//import { Box, Container, Paper, styled } from "@mui/material";
import { blue } from '@mui/material/colors';
export const BannerBox = styled('div')(() => ({

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    // overflow: 'hidden',
    height: "50px",
    backgroundColor: blue[400],
    color: 'white',

}))
