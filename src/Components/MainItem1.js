import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    card: {
        height: '80%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
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
    explore: {

    }
}));

const MainItem = () => {
    const classes = useStyles();
    return (
        <Box
            sx={{
                bgcolor: 'lightGreen',
                pt: 8,
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={8}>
                    <Grid item xs={12} sm={5}>
                        <Card className={classes.card}>
                            <CardMedia
                                component="div"
                                sx={{
                                    // 16: 9,
                                    pt: '80%',
                                }}
                                image="https://source.unsplash.com/random?mountain"
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <Typography
                            component="h1"
                            variant="h5"
                            align="left"
                            color="text.primary"
                            fontWeight={700}
                            gutterBottom
                        >
                            We're Currently Hiring Guides
                        </Typography>
                        <Typography variant="h6" align="left" color="text.secondary" paragraph>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste architecto quo nostrum rerum blanditiis, minus aut iusto dolorum incidunt molestiae nam vero ex illo omnis. Nostrum rerum blanditiis eaque.
                        </Typography>
                        <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="start"
                        >
                            <Link to='#' className={classes.linkItem} >
                                <Button variant="contained">Register as Guide</Button>
                            </Link>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default MainItem;