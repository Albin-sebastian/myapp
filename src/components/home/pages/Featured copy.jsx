import { Box, Button, Grid, Link, Typography, Container } from '@mui/material'

import React from 'react'
import { CnCard, CnCardActionArea, CnCardActions, CnCardContent, CnCardMedia } from '../../../styles/card/Card'
const data = [
    {
        url: "https://picsum.photos/100/100",
        text: `Build and deploy apps with ${<br />} serverless container }`,
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
        <Box sx={{ width: '100%' }}>
            <Grid containner rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ display: 'flex', flexDirection: 'row' }}>
                {/* <Grid containner spacing={5} sx={{ display: 'flex', flexDirection: 'row' }}> */}
                {
                    data.map(({ url, text, link }) => (

                        < CnCard sx={{ minWidth: '250px' }}>
                            <CnCardActionArea >
                                <Grid item md={6} xs={6}  >
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
                                    <CnCardContent >
                                        <Typography>
                                            {text} <br />
                                            <br /><br /><br />
                                        </Typography>
                                        <Link href="#" underline="hover" sx={{}} >

                                            {link}
                                            <br />
                                        </Link>


                                    </CnCardContent>
                                </Grid>
                            </CnCardActionArea>
                        </CnCard >
                    ))
                }


            </Grid>

        </Box>
    )
}
