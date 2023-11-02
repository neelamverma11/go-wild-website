import React from 'react'
import { Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

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
    iconColor: {
        width: "12px",
        height: "12px",
        backgroundColor: "white",
        borderRadius: '50%',
        marginLeft: "10px",
        padding: "8px"
    }
}));

const footers = [
    {
        title: 'Quik Links',
        description: [
            'Home',
            'About us',
            'Feature',
            'Contact us',
        ],
    },
    {
        title: 'About Us',
        description: ['About Chatbot', 'Contact us', 'Features', ' Careers'],
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
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, color: "white" }} >
                        <div>
                            <Link to="#">
                                <span  >
                                    <FacebookIcon className={classes.iconColor} />
                                </span>
                            </Link>
                        </div>
                        <div>
                            <Link to="#">
                                <span style={{ marginLeft: '22px' }}>
                                    <TwitterIcon className={classes.iconColor} />
                                </span>
                            </Link>
                        </div>
                        <div>
                            <Link to="#">
                                <span style={{ marginLeft: '22px' }}>
                                    <InstagramIcon className={classes.iconColor} />
                                </span>
                            </Link>
                        </div>
                        <div>
                            <Link to="#">
                                <span style={{ marginLeft: '22px' }}>
                                    <WhatsAppIcon className={classes.iconColor} />
                                </span>
                            </Link>
                        </div>
                    </Box>
                    <Typography align="start" color="white" >
                        Contact us <br /><WhatsAppIcon /> 8979951459 <br /><MailOutlineOutlinedIcon /> gowildexplorer@gmail.com
                    </Typography>
                </Box>
                {footers.map((footer, index) => (
                    <Grid item xs={6} sm={3} key={index} >
                        <Typography variant="h6" color="white" gutterBottom>
                            {footer.title}
                        </Typography>
                        <ul>
                            {footer.description.map((item, index) => (
                                <li key={index} >
                                    <Link to="#" variant="subtitle1" className={classes.linkItem}>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Grid>

                ))}
                <Box className={classes.button}
                    sx={{ display: { xs: 'inline-table', md: 'block' } }}
                >
                    <Typography sx={{ mt: 5, ml: 3 }} >Subscribe</Typography>
                    <TextField text='email' placeholder='Email' sx={{ m: 3, color: 'white' }} />
                    <Button variant='contained' sx={{ ml: 3 }} >Submit</Button>
                </Box>
            </Grid>

            <br />
            <hr />
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