import { Facebook, Twitter, YouTube } from "@mui/icons-material";
import { Button, Card, Grid, Icon, TextField, Typography, createTheme, ThemeProvider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from 'react'

const themessss = createTheme();

const useStyles = makeStyles((theme) => ({
    messageForm: {
        margin: 10,
        width: "100%"
    },
    messageButton: {
        width: "100%"
    },
    companyInformation: {
        padding: 10,
        paddingLeft: 30,
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "space-around"
    },
    footer: {
        padding: themessss.spacing(6),
        backgroundColor: "#282828",
        color: "white"
    }
}));

export default function Footer() {
    const { messageForm, messageButton, companyInformation, footer } = useStyles();
    return (
        <ThemeProvider theme={themessss}>
            <footer className={footer}>
                <Grid container>
                    <Grid item lg={6} md={12}>
                        <Card>
                            <form>
                                <TextField label="Get in touch" className={messageForm}/>
                            </form>
                        </Card>
                        <Button variant="contained" color="primary" className={messageButton}>
                            Send Message
                        </Button>
                    </Grid>
                    <Grid item lg={6} md={12} className={companyInformation}>
                        <Typography variant="h5">
                            Mammoth Interactive
                        </Typography>
                        <Typography>
                            Building award-winning, affordable onlie courses since 2009.
                        </Typography>
                        <Grid item>
                            <Icon>
                                <YouTube/>
                            </Icon>
                            <Icon>
                                <Facebook/>
                            </Icon>
                            <Icon>
                                <Twitter/>
                            </Icon>
                        </Grid>
                    </Grid>
                </Grid>
            </footer>
        </ThemeProvider>
    );
}