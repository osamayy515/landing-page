import { Button, Card, CardMedia, Container, Typography, Grid, ThemeProvider, createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from 'react'

const themes = createTheme(); 

const useStyles = makeStyles (theme => ({
    cardMedia: {
        height: 200
    },
    mainItem: {
        padding: themes.spacing(8),
        textAlign: "left"
    },
    mainContainer: {
        paddingTop: 120,
        paddingBottom: 120,
        backgroundColor: "darkorange"
    },
    imageCard: {
        margin: 40
    }
}));

export default function MainGridItem() {
    const { cardMedia, mainItem, mainContainer, imageCard } = useStyles();
    return (
        <ThemeProvider theme={themes}>
            <Container className={mainContainer}>
                <Card>
                    <Grid container>
                        <Grid item md={6} className={mainItem}>
                            <Typography variant="h2">
                                Unlimited Subscription
                            </Typography>
                            <Typography>
                                2,000 hours of online courses.
                            </Typography>
                            <Button color="primary" variant="contained">
                                SIGN UP
                            </Button>
                        </Grid>
                        <Grid item md={6}>
                            <Card className={imageCard}>
                                <CardMedia className={cardMedia}
                                    image="https://www.digitaltrends.com/wp-content/uploads/2021/11/macbook-pro-2021-16.jpg?fit=720%2C720&p=1"
                                />
                            </Card>
                        </Grid>
                    </Grid>
                </Card>
            </Container>
        </ThemeProvider>
    );
}