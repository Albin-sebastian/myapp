import { Box, Button, List, styled, Typography } from "@mui/material";
//container
export const AppbarContainer = styled(Box)(() => ({
    display: 'flex',
    marginTop: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '2px 2px'
}))
export const AppbarHeader = styled(Typography)(() => ({
    padding: "4px",
    flexGrow: 1,
    fontSize: "2em",

    color: 'blue',

}));
export const MyList = styled(List)(({ type }) => ({
    display: type === "row" ? "flex" : "block",
    flexGrow: 10,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
}));
export const StyledButton = styled(Button)({
    display: 'flex',
    justifyContent: 'flex-start',
    padding: '10px 10px 10px 10px',
    //margin: '0 5px',
    color: "black",
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

