import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import DetailFormPage from './DetailFormPage'

const GuidePage = () => {
    return (
        <>
            <Box
                sx={{
                    bgcolor: 'lightGreen',
                    pt: 3,
                    pb: 3,
                }}
            >
                <Container maxWidth="lg">
                    <Typography component="h1" variant="h4" align="left" color="white" fontWeight={900} gutterBottom>
                        Partner As Tour Guide
                    </Typography>
                </Container>
            </Box>
            <Box
                sx={{
                    bgcolor: 'white',
                    pt: 3,
                    pb: 3,
                }}
            >
                <Container maxWidth="lg">
                    <Typography variant="h6" align="left" color="text.secondary" paragraph>
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste architecto quo nostrum rerum blanditiis, minus aut iusto dolorum incidunt molestiae nam vero ex illo omnis. Nostrum rerum blanditiis eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste architecto quo nostrum rerum blanditiis, minus aut iusto dolorum incidunt molestiae nam vero ex illo omnis. Nostrum rerum blanditiis eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste architecto quo nostrum rerum blanditiis, minus aut iusto dolorum incidunt molestiae nam vero ex illo omnis. Nostrum rerum blanditiis eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste architecto quo nostrum rerum blanditiis, minus aut iusto dolorum incidunt molestiae nam vero ex illo omnis. Nostrum rerum blanditiis eaque."
                    </Typography>
                </Container >
            </Box>
            <DetailFormPage />
        </>
    )
}

export default GuidePage