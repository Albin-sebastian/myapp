import { Box, Button, Grid, Link, Typography, Container, styled } from '@mui/material'

import React from 'react'
import { CnCard, CnCardActionArea, CnCardActions, CnCardContent, CnCardMedia } from '../../../styles/card/Card'
const StyledTypography = styled(Typography)({
    textDecoration: 'none',
    "&:hover": {
        color: 'red',
        textDecoration: 'none'
    },

});
const data = [
    {
        url: "https://picsum.photos/100/100",
        text: "Build and deploy apps with serverless container",
        link: "Azure Container Apps",
    },
    {
        url: 'https://picsum.photos/100/100',
        text: 'Create apps with managed, intelligent SQL in the cloud',
        link: 'Azure SQL database'
    },
    {
        url: 'https://picsum.photos/100/100',
        text: 'Make and scale apps with managed Kubernetes',
        link: 'Azure Kubernetes service(Aks) '
    },
    {
        url: 'https://picsum.photos/100/100',
        text: 'Boost agility and app security with Azure integration on GitHub',
        link: 'GitHu and Azure'
    },
    {
        url: 'https://picsum.photos/100/100',
        text: 'Unify on-premises, hybrid, and cross-cloud infrastructure',
        link: 'Azure Arc'
    },
    {
        url: 'https://picsum.photos/100/100',
        text: 'Share code, track work and ship software with dev services',
        link: 'Azure DevOps'
    }
]

export const Featured = () => {
    return (
        <Box width='60vw' sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ md: 3 }} sx={{ minWidth: '150px', minHeight: '200px' }}>
                {/* <Grid containner spacing={5} sx={{ display: 'flex', flexDirection: 'row' }}> */}
                {
                    data.map(({ url, text, link }) => (

                        <Grid item sm={4} md={4} >

                            < CnCard sx={{ maxWidth: '200px', maxHeight: '300px' }}>
                                <Link href="#" underline="hover"  >
                                    <CnCardActionArea >

                                        <Grid sx={{
                                            display: 'flex', justifyContent: 'center', alignContent: 'center', textAlign: 'center', padding: 'auto auto',
                                        }}>
                                            <CnCardMedia sx={{
                                                width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignContent: 'center', textAlign: 'center', padding: 'auto auto',
                                            }}
                                                placeItem='center'
                                                component="img"
                                                // height="140"
                                                image={url}
                                                alt="green iguana"
                                            /></Grid>

                                        <CnCardContent sx={{ maxWidth: '200px', maxHeight: '200px' }}>

                                            <Typography color='black' component={'span'}>
                                                {text} <br />
                                                <br /><br />
                                            </Typography>

                                            <StyledTypography >
                                                {link}

                                                <br /><br />
                                            </StyledTypography>


                                        </CnCardContent>

                                    </CnCardActionArea>
                                </Link>
                            </CnCard >
                        </Grid>

                    ))
                }


            </Grid>

        </Box >
    )
}
