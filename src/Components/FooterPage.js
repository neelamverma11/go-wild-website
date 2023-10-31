import React from 'react'
import { Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    button: {
        width: "20%",
        height: "15rem",
        backgroundColor: "lightGreen",
        borderRadius: "22px",
    },
    linkItem: {
        textDecoration: "none",
        color: "black",
        letterSpacing: '1px',
        padding: "10px",
        transition: "color 0.3s",
        "&:hover": {
            color: "lightGreen",
        }
    },
}));

const footers = [
    {
        title: 'Features',
        description: [
            'Home',
            'Random feature',
            'Team feature',
            'Developer stuff',
        ],
    },
    {
        title: 'Resources',
        description: ['Home', 'Resource name', 'Another resource', 'Final resource'],
    },
];

const FooterPage = () => {
    const classes = useStyles();
    return (
        // website view 
        < Container
            maxWidth="xl"
            component="footer"
            sx={{
                mt: 8,
                py: [3, 6],
                bgcolor: '#011f4b',
                pt: 8,
                pb: 6,
                color: "white"
            }
            }
        >
            <Grid container spacing={2} justifyContent="space-evenly">
                <Box>
                    <Typography
                        component="h1"
                        variant="h6"
                        align="start"
                        color="white"
                        fontWeight={600}
                        gutterBottom
                    >
                        Go Wild
                    </Typography>
                    <Typography align="start" color="white" >
                        Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Natus iste architecto <br /> quo nostrum rerum blanditiis.
                    </Typography>
                </Box>
                {footers.map((footer) => (
                    <Grid item xs={6} sm={3} >
                        <Typography variant="h6" color="white" gutterBottom>
                            {footer.title}
                        </Typography>
                        <ul>
                            {footer.description.map((item) => (
                                <>
                                    <li >
                                        <Link href="/" variant="subtitle1" className={classes.linkItem}>
                                            {item}
                                        </Link>
                                    </li>
                                </>
                            ))}
                        </ul>
                    </Grid>

                ))}
                <Box className={classes.button}
                // sx={{display: { xs: 'none', md: 'block' }}} 
                >
                    <Typography sx={{ mt: 5, ml: 3 }} >Subscribe</Typography>
                    <TextField text='email' placeholder='Email' sx={{ m: 3, color: 'white' }} />
                    <Button variant='contained' sx={{ ml: 3 }} >Submit</Button>
                </Box>
            </Grid>

            <br />
            <Grid container spacing={2} justifyContent="space-evenly">
                <Typography variant="body2" color="white" align="left" sx={{ mt: 5 }}>
                    {'Copyright © '}
                    <Link color="inherit" href="/">
                        @ all rights reserved
                    </Link>
                    {new Date().getFullYear()}
                </Typography>
                <Typography variant="body2" color="white" align="left" sx={{ mt: 5 }}>
                    <Link color="inherit" href="/">
                        Terms & conditions | Privacy policy
                    </Link>
                </Typography>

            </Grid>
        </Container >
    )
}

export default FooterPage;