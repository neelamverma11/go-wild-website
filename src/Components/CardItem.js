import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    outerBorder: {
        border: '2px solid #fff',
        borderRadius: '12px',
        margin: '8px',
        padding: "8px",
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    },
    media: {
        height: '80%',
        width: '100%',
        paddingTop: '53.25%',
        borderRadius: '10px',
    },
    ratingBox: {
        display: 'flex',
        justifyContent: "space-between",
        borderRadius: '5px',
        backgroundColor: "white",
        width: "80%",
        marginTop: '-15px',
        marginLeft: "1.7rem",
        padding: "6px",
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    },
    starIcon: {
        color: 'yellow',
        marginRight: '4px',
    },
    userIcon: {
        color: 'lightBlue',
    },
    starPoint: {
        paddingRight: "6px"
    },
    userVisitors: {
        paddingLeft: "6px",
        display: "flex"
    },
    userLocation: {
        paddingTop: '1px',
        display: "flex"
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
    cardContent: {
        marginTop: '-15px',
        marginLeft: "1rem",
        padding: '10px',
    },
    hrLine: {
        width: "100%",
        paddingTop: "4px",
        paddingBottom: "4px",
    },
    buttonClass: {
        backgroundColor: "white",
        color: "black"
    },
    buttonView: {
        color: "black",
        fontWeight: "700"
    },
    buttonArrow: {
        display: "flex",
        justifyContent: "end",
    },
    arrow: {
        color: "lightblue",
    },
}));

const cards = [
    { id: 1, rating: 4.3, place: 'Cabo de Rama ', location: "Goa" },
    { id: 2, rating: 3.4, place: 'Red Fort Delhi', location: "Delhi" },
    { id: 3, rating: 4.7, place: 'Valley', location: "Jammu" },
    { id: 4, rating: 3.8, place: 'White Mountain', location: "Shimla" },
    { id: 5, rating: 4.8, place: 'Gold Market', location: "Dubai" },
    { id: 6, rating: 2.8, place: 'TajMahal', location: "Agra" },
];

const CardItem = () => {
    const classes = useStyles();
    return (<>
        <Container maxWidth="lg" sx={{ mt: 5 }} >
            <Grid container spacing={8}>
                <Grid item xs={12} sm={7}>
                    <Typography
                        variant="h4"
                        noWrap
                        component="a"
                        sx={{
                            mr: 5,
                            display: { xs: 'flex', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'black',
                            textDecoration: 'none',
                        }}
                        className={classes.linkLogo}
                    >
                        Popular Places
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }} className={classes.linkBox}>
                        <Link to='/#' className={classes.linkItem} >
                            Beach
                        </Link>
                        <Link to='#' className={classes.linkItem}  >
                            Mountain
                        </Link>
                        <Link to='#' className={classes.linkItem}  >
                            Waterfalls
                        </Link>
                        <Typography className={classes.buttonArrow} sx={{ mt: 1 }}>
                            <span className={classes.buttonView}>view all </span>
                            <EastOutlinedIcon className={classes.arrow} />
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
        <Container sx={{ py: 8 }} maxWidth="lg">
            <Grid container spacing={4}>
                {cards.map((card) => (
                    <Grid item key={card.id} xs={12} sm={6} md={4}>
                        <Card className={classes.outerBorder}>
                            <Box>
                                <CardMedia
                                    className={classes.media}
                                    image="https://source.unsplash.com/random?Goa"
                                    title="Nature Image"
                                />
                                <Box className={classes.ratingBox}>
                                    <Typography variant="p" color="text.secondary" className={classes.userVisitors}>
                                        <PersonOutlineIcon className={classes.userIcon} /> 235 visitors
                                    </Typography>
                                    <Typography variant="p" component="span" className={classes.starPoint}>
                                        <span className={classes.starIcon}>★</span>
                                        {card.rating}
                                    </Typography>
                                </Box>
                                <Box className={classes.cardContent}>
                                    <CardContent className={classes.content}>
                                        <Typography fontWeight={700} component="div">
                                            {card.place}
                                        </Typography>
                                        <Typography color="text.secondary" className={classes.userLocation}>
                                            <LocationOnOutlinedIcon />
                                            {card.location}
                                        </Typography>
                                        <Typography component="span" className={classes.hrLine} >
                                            <span > <hr /></span>
                                        </Typography>

                                        <Typography className={classes.buttonArrow}>
                                            <span className={classes.buttonClass}>Exlpore</span>
                                            <EastOutlinedIcon className={classes.arrow} />
                                        </Typography>
                                    </CardContent>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    </>
    );
}

export default CardItem;
