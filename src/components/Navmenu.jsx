import { Button, styled, Toolbar } from '@mui/material';
import React from 'react'
const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "flex-start",
});
const StyledButton = styled(Button)({
    padding: '10px 10px 10px 10px',
    margin: '0 5px',
    color: "white",
    variant: "text",
    textTransform: "none",

    "&:active": {
        //boxShadow: "block",
        //backgroundColor: "#0062cc",
        // borderColor: "#005cbf",
    },
    "&:focus": {
        // borderStyle: "dotted",
        //boxShadow: "0 0 0 0.02rem rgba(0,123,255,.5)",

        // borderRadious: '10',
        border: "1px dashed black",
    },
});
const Navmenu = () => {
    return (
        <StyledToolbar
        ><StyledButton>Explore

            </StyledButton>
            <StyledButton>Products</StyledButton>
            <StyledButton>Solutions</StyledButton>
            <StyledButton>Pricing</StyledButton>
            <StyledButton>Partners</StyledButton>
            <StyledButton> Resources </StyledButton>
        </StyledToolbar>
    )
}

export default Navmenu
