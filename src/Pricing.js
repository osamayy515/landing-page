import { Container, Grid, Typography } from "@mui/material";
import React from 'react'
import PricingOption from "./PricingOption";


export default function Pricing() {
    return (
        <Container>
            <Typography variant="h2">
                Pricing
            </Typography>
            <Grid container>
                <Grid item lg={4} md={12} sm={12} xs={12}>
                    <PricingOption
                        title="Monthly"
                        price="19"
                        length="month"
                        description="On sale now"
                    />
                </Grid>
                <Grid item lg={4} md={12} sm={12} xs={12}>
                    <PricingOption 
                        title="Yearly"
                        price="199"
                        length="year"
                        description="Save 80% now"
                    />
                </Grid>
                <Grid item lg={4} md={12} sm={12} xs={12}>
                    <PricingOption 
                        title="Lifetime"
                        price="9,999"
                        length="life"
                        description="On sale now"
                    />
                </Grid>
            </Grid>
        </Container>
    );
}