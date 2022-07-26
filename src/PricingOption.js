import { Card, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from 'react'

const useStyles = makeStyles((theme) => ({
    pricingCard: {
        padding: 50,
        margin: 40,
        borderColor: "darkorange"
    }
}));
export default function PricingOption(props) {
    const { pricingCard } = useStyles();
    return (
        <Card className={pricingCard} variant="outlined">
            <Typography variant="h5">
                {props.title}
            </Typography>
            <Typography variant="h4">
                ${props.price}
            </Typography>
            <Typography variant="h7">
                / {props.length}
            </Typography>
            <Typography variant="h6">
                {props.description}
            </Typography>
        </Card>
    );
}