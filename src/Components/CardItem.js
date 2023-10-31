import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    outerBorder: {
        border: '2px solid #fff',
        borderRadius: '12px',
        margin: '12px',
        padding: "12px",
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    },
    media: {
        height: '100%',
        width: '100%',
        paddingTop: '96.25%',
        borderRadius: '10px',
    },
    content: {
        padding: '16px',
        textAlign: 'start',
    },

    ratingBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: "space-evenly",
        marginTop: '-10px',
        border: '1px solid gray',
        borderRadius: '8px',
        backgroundColor: "white",
        width: "80%",
        marginLeft: "20px"
    },
    starIcon: {
        color: 'yellow',
        marginRight: '4px',
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

const cards = [
    { id: 1, rating: 4.3, place: 'Cabo de Rama ', location: "Goa" },
    { id: 2, rating: 3.4, place: 'Fort', location: "Delhi" },
    { id: 3, rating: 4.7, place: 'Valley', location: "Jammu" },
    { id: 4, rating: 3.8, place: 'Mountain', location: "Shimla" },
    { id: 5, rating: 4.8, place: 'Market', location: "Dubai" },
    { id: 6, rating: 2.8, place: 'TajMahal', location: "Agra" },
];

const CardItem = () => {
    const classes = useStyles();
    return (
        <Container sx={{ py: 8 }} maxWidth="md">
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
                                    <Typography color="text.secondary">
                                        Visit
                                    </Typography>
                                    <Typography variant="h6" component="span">
                                        <span className={classes.starIcon}>★</span>
                                        {card.rating}
                                    </Typography>
                                </Box>
                                <CardContent className={classes.content}>
                                    <Typography variant="h6" component="div">
                                        {card.place}
                                    </Typography>
                                    <Typography color="text.secondary">
                                        {card.location}
                                    </Typography>
                                    <Link to='/featur' className={classes.linkItem} >
                                        <Button variant="contained">Exlpore</Button>
                                    </Link>
                                </CardContent>
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default CardItem;
