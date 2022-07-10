import { Grid, Link, Typography } from '@mui/material'
import React from 'react'
import { FooterData } from './FooterData'

export const Footer = () => {
    return (
        <>
            <Grid container p={3} sx={{ maxWidth: '100vw', maxHeight: '100vh' }} bgcolor='yellow' >

                {
                    FooterData.map(({ title, values }) => (
                        <Grid item sm={2} md={2} xs={2} >
                            <br />
                            {title}
                            <br />
                            <br />
                            {
                                values.map(({ text, url }) => (
                                    <Link href={url} underline='hover' >
                                        <Typography variant='body2' >  {text}</Typography>

                                        < br />
                                    </Link>

                                ))
                            }
                        </Grid>

                    )
                    )

                }
            </Grid>
        </>
    )
}

