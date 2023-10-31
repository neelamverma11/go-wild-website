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
        height: '100%',
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
}));

const MainItem = () => {
    const classes = useStyles();
    return (
        <main>
            <Box
                sx={{
                    bgcolor: 'lightGreen',
                    pt: 8,
                    pb: 6,
                }}
            >
                <Container maxWidth="md">
                    <Grid container spacing={6}>
                        <Grid item xs={12} sm={6}>
                            <Typography
                                component="h1"
                                variant="h5"
                                align="start"
                                color="text.primary"
                                fontWeight={700}
                                gutterBottom
                            >
                                Discover, Explore, Go Wild
                            </Typography>
                            <Typography variant="h5" align="start" color="text.secondary" paragraph>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste architecto quo nostrum rerum blanditiis, minus aut iusto dolorum incidunt molestiae nam vero ex illo omnis. Nostrum rerum blanditiis eaque.
                            </Typography>
                            <Stack
                                sx={{ pt: 4 }}
                                direction="row"
                                spacing={2}
                                justifyContent="start"
                            >
                                <Link to='/featur' className={classes.linkItem} >
                                    <Button variant="contained">Exlpore Now</Button>
                                </Link>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Card className={classes.card}>
                                <CardMedia
                                    component="div"
                                    sx={{
                                        // 16: 9
                                        pt: '100%',
                                    }}
                                    image="https://source.unsplash.com/random?world"
                                />
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </main>
    )
}

export default MainItem