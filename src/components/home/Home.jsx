import { Typography, Box, Button, Grid, styled, AppBar, Toolbar, Card, CardMedia, CardContent } from '@mui/material'
import React from 'react'
import { BannerBox } from '../../styles/home'
import VerticalTabs from './VerticalTab';
import {
    FiCard,
    FiCardActionArea,
    FiCardContent,
    FiCardMedia
} from "./FullImageCard";

import ScrollToSlide from "./ScrollToSlide";
import { Footer } from '../footer/Footer';


const CardButton = styled(Button)({
    fontSize: 20,
    lineHeight: 1,
    color: "blue",
    variant: "text",
    textTransform: "none",
    "&:hover": {
        TextDecoration: 'underline'
    },
    "&:active": {},
    "&:focus": {
        //border: "1px dashed black",
    },
});

const StyledTypography = styled(Typography)({

    "&:hover": {
        TextDecoration: 'none'
    },

});

const StyledButton = styled(Button)({

    color: "white",
    variant: "text",
    textTransform: "none",
    "&:active": {},
    "&:focus": {
        border: "1px dashed black",
    },
});
export const Home = () => {
    return (
        <>

            <BannerBox >
                <Typography >We're in this together. Explore Azure resources and tools to help you navigate COVID-19 </Typography>
            </BannerBox>
            <FiCard>
                <FiCardMedia
                    component="img"
                    height="140"
                    image="https://picsum.photos/1500/1500"
                    alt="green iguana"
                />

                <FiCardContent >
                    <Box marginY='50px'>
                        <Typography children color="blue.main" variant='h5'> AZURE. INVENT WITH PURPOSE.</Typography>
                        <Typography variant="h2" >Learn, connect, and <br /> discover </Typography>
                        <Typography>Build innovative new apps with the latest Azure technologies announced at Microsoft <br />Build.Get started with pay-as-you-go pricing.There's no upfront commitment— <br />cancel anytime. Or try Azure free for up to 30 days. </Typography>
                        <Typography marginTop='25px'>
                            <Button variant="contained" sx={{ textTransform: 'none' }}> Get started</Button>
                            <Button variant="outlined" sx={{ textTransform: 'none', marginLeft: '25px' }}> Try Azure for free</Button>
                        </Typography>
                    </Box>
                </FiCardContent>
            </FiCard>

            {/* <ScrollToSlide bgcolor='yellow'>
                <AppBar >
                    <Toolbar backgroundColor='yellow'>
                        <Typography>LOGO</Typography>
                        <Button color='white'>Azure</Button>
                        <StyledButton> Contact Sales </StyledButton>
                        <Button color='white'>Free account</Button>


                    </Toolbar>
                </AppBar>
            </ScrollToSlide> */}

            <Grid xl >
                <Typography variant='h5' align='center' mt='35px' mb='15px' fontWeight='bold'>
                    On-premises,  hybrid, multicloud, or at the edge—create secure, future-ready cloud solutions on Azure
                </Typography>
                <Grid sx={{
                    ml: '20px',
                    mr: '20px',
                    display: 'flex',
                    gap: '10px',
                    justifyContent: 'space-between',
                }}>
                    <FiCard sx={{ width: '48vw', height: '52vh' }}>
                        <FiCardActionArea>
                            <FiCardMedia
                                component="img"
                                image="https://picsum.photos/2000/2000"
                                alt="green iguana"

                            />
                            <FiCardContent >
                                <Box marginY='50px'>
                                    <Typography sx={{ fontSize: 50 }}> Watch Microsoft<br /> Build on demand</Typography>

                                    <Typography>Explore the latest developer technologies <br /> at this annual digital event. </Typography>
                                </Box>
                            </FiCardContent>
                        </FiCardActionArea>
                    </FiCard>

                    <Grid sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        justifyContent: 'space-between',
                    }}>
                        <Card sx={{
                            display: 'flex',
                            width: '46vw', height: '25vh',

                        }} >
                            <Grid sx={{ display: 'flex', flexDirection: 'colomn' }}>
                                <CardMedia component='img'
                                    sx={{
                                        width: 158
                                    }}
                                    image="https://picsum.photos/1500/1500"
                                    alt="live image" />
                                <CardContent>
                                    <CardButton> Develop and test your next great app</CardButton>
                                    <Typography>Code, test, and ship more securely from cloud developer environments. </Typography>

                                </CardContent>
                            </Grid>
                        </Card>

                        <Card sx={{
                            display: 'flex',
                            width: '46vw', height: '25vh',

                        }} >
                            <Grid sx={{ display: 'flex', flexDirection: 'colomn' }}>
                                <CardMedia component='img'
                                    sx={{
                                        width: 158
                                    }}
                                    image="https://picsum.photos/1500/1500"
                                    alt="live image" />
                                <CardContent>
                                    <CardButton> Accelerate app innovation and modernization</CardButton>
                                    <Typography>Deploy and scale your apps using cloud-native technology and fully managed databases. </Typography>

                                </CardContent>
                            </Grid>
                        </Card>

                        <br />
                        <br />



                    </Grid>
                </Grid>
                <Grid
                    sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 5 }} width='100%' height="120px" bgcolor='red' align={'center'}>
                    <Typography variant="h6" color="initial"> New to Azure?</Typography>
                    <Button variant="outlined" color="primary" textTransform='none' > Get an overview

                    </Button>
                </Grid >
            </Grid>
            {/* <ScrollToSlide bgcolor='yellow'>
                <AppBar >
                    <Toolbar backgroundColor='yellow'>
                        <Typography>LOGO</Typography>
                        <Button color='white'>Azure</Button>
                        <Button> Contact Sales </Button>
                        <Button color='white'>Free account</Button>


                    </Toolbar>
                </AppBar>
            </ScrollToSlide> */}
            <Grid sx={{ width: '100vw', height: '100vh' }}>

                <VerticalTabs />
            </Grid>
            <Footer />
        </>
    );
}
