import React from 'react'
import { Grid } from '@mui/material';
import MainGridItem from './MainGridItem';
import ProductInformation from './ProductInformation';
import Pricing from './Pricing';
import Footer from './Footer';

export default function GridLayout() {
    return (
        <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <MainGridItem/>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <ProductInformation/>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Pricing/>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Footer/>
            </Grid>
        </Grid>
    );
}