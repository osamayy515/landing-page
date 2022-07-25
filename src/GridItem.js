import { Container, Icon, Typography, createTheme, ThemeProvider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from 'react'

const themess = createTheme();

const useStyles = makeStyles ((theme) => ({
    gridItem: {
        padding: 50
    }
}));

export default function GridItem(props) {

    const { gridItem } = useStyles(); 

    return (
        <ThemeProvider theme={themess}>
        <Container align="left" className={gridItem}>
            <Icon>
                {props.icon}
            </Icon>
            <Typography variant="h5">
                {props.title}
            </Typography>
            <Typography>
                {props.description}
            </Typography>
        </Container>
        </ThemeProvider>

    );
}