import { Container, Typography } from '@mui/material'
import React from 'react'
import FormPage from './FormPage'

const DetailFormPage = () => {
    return (
        <>
            <Container maxWidth="md">
                <Typography component="h1"
                    variant="h5"
                    align="left"
                    color="black"
                    fontWeight={700}
                    gutterBottom>Kindly fill up these Details
                </Typography>
                <Typography component="h1"
                    variant="h6"
                    align="left"
                    color="black"
                    marginBottom={4}
                    fontWeight={700}
                    gutterBottom>Personal Details
                </Typography>
                <FormPage />
            </Container>
        </>
    )
}

export default DetailFormPage